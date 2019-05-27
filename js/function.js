if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js')
      .then(registration => {
        console.log('ServiceWorker registration successful: ', registration);
      })
      .catch(err => console.error('ServiceWorker registration failed', err));
  });
}

const Installer = function(root) {
  let promptEvent;

  const install = function(e) {
    if(promptEvent) {
      promptEvent.prompt();
      promptEvent.userChoice
        .then(function(choiceResult) {
          promptEvent = null;
          root.classList.remove('available');
        })
        .catch(function(installError) {
          promptEvent = null;
          root.classList.remove('available');
        });
    }
  };

  const installed = function(e) {
    promptEvent = null;
    root.classList.remove('available');
    root.classList.add('hide');
    console.log('installed');
  };

  const beforeinstallprompt = function(e) {
    promptEvent = e;
    promptEvent.preventDefault();
    root.classList.add('available');
    return false;
  };

  window.addEventListener('beforeinstallprompt', beforeinstallprompt);
  window.addEventListener('appinstalled', (evt) => {
    console.log('installata');
    root.classList.add('install');
  });

  root.addEventListener('click', install.bind(this));
  root.addEventListener('touchend', install.bind(this));
};

window.addEventListener('load', function() {
  if (localStorage.lang) {
    $(".lang").remove()
    $(".disclaimer > p").text(gui.disclaimer[localStorage.lang])
    $(".disclaimer").fadeIn('fast')
  }
  if (localStorage.disclaimer) {
    $(".disclaimer,.appTitle").remove()
    $(".warning-"+localStorage.lang).show()
    $(".warnings").fadeIn('fast')
  }
  if (localStorage.length >= 3) {
    $("#splash-content").remove()
    initMap()
  }
  const installEl = document.getElementById('installer');
  const installer = new Installer(installEl);
})

window.addEventListener("orientationchange", function() {
  window.setTimeout(function() {
    setHeightDiv()
    $("video").css("width",$('.poi-content').width())
    setGalleryDim()
    checkDim()
  }, 200);
}, false);


$(document).ready(function() {
  $("#updateAppContent").html(gui.updateAvailable[localStorage.lang])
  $("[name=chooseLang]").on('click', function(){
    localStorage.setItem("lang",$(this).val());
    $(".lang").fadeOut('fast', function(){
      $(".disclaimer > p").text(gui.disclaimer[localStorage.lang])
      $(".disclaimer").fadeIn('fast')
    })
  })
  $("[name=disclaimer]").on('click', function(){
    localStorage.setItem("disclaimer","ok")
    $(".disclaimer,.appTitle").fadeOut('fast', function(){
      $(".warning-"+localStorage.lang).show()
      $(".warnings").fadeIn('fast')
    })
  })
  $("[name=okGo]").on('click', function(){
    localStorage.setItem("warning","ok")
    $("#splash-content").remove()
    initMap()
  })
  $("body").on('click', '#wrapImage', function(event) {
    $("#wrapImage").toggleClass('flex hide');
    $("#galleryImageLarge").removeAttr('src');
  });
  $("body").on('click','.360view', function(e){
    e.preventDefault()
    initPano()
  })
  $("body").on('click','.arView', function(e){
    e.preventDefault()
    initAr()
  })
  $("body").on('click','.modelAr',function(){
    model = $(this).data('model')
    loadObject(model)
  })
  $("[name=noExit]").on('click', function(){ $("#exitPrompt").toggleClass('flex hide')})
});
function initPano(){
  $("#panoElem").remove()
  var content = $("<div/>",{id:"panoElem", class:'extraElem'}).appendTo('body')
  var header = $("<header/>")
    .html('close window <i class="fas fa-times"></i>')
    .appendTo(content)
    .on('click',function(){ $("#panoElem").remove() })
  var iframe = $("<iframe/>",{src:'gnomi360.html'}).appendTo(content)
}

function initAr(){
  $("#arElem").remove()
  var content = $("<div/>",{id:"arElem", class:'extraElem'}).appendTo('body')
  var header = $("<header/>")
    .html('close window <i class="fas fa-times"></i>')
    .appendTo(content)
    .on('click',function(){
      $("#arElem").remove()
    })
  var iframeWrap = $("<div/>",{id:'iframeWrap'}).appendTo(content)
  var iframe = $("<iframe/>",{id:'arFrame',src:'ar.html'}).appendTo(iframeWrap)
  var icoArWrap = $("<div/>",{id:'icoArWrap'})
    .html('<div><img src="model/luce.png" class="img-fluid modelAr" data-model="luce2"></div><div><img src="model/martello.png" class="img-fluid modelAr" data-model="martello2"></div><div><img src="model/pala.png" class="img-fluid modelAr" data-model="pala2"></div><div><img src="model/vaschetta.png" class="img-fluid modelAr" data-model="vaschetta"></div>')
    .appendTo(content)
}
function loadObject(model) {
  var iFrame = document.getElementById("arFrame");
  iFrame.contentWindow.postMessage(model, '*');
}
function checkDim(){
  if(screen.width > screen.height){
    $(".imgContent").css({"width":"70vw","height":"95vh"})
  }else {
    $(".imgContent").css({"width":"95vw","height":"auto"})
  }
}

function slidePanel(e){
  prop = e.layer.feature.properties
  setHeightDiv()
  $(".closePanel>h5").html(prop.nome[localStorage.lang])
  $(".poi-banner").css("background-image","url('img/poi/banner/"+prop.banner+"')")
  content = $(".poi-content").html(prop.desc[localStorage.lang])
  $('#wrapPoiInfo').fadeIn(500)
  $("body").on('click', '.closePanel', function() { $('#wrapPoiInfo').fadeOut(500); });
  if(prop.slider) {initSlider(e.layer.feature.properties.slider)}
  if(prop.slider2) {beforeAfter(e.layer.feature.properties.slider)}
  if(prop.video){initVideo(e.layer.feature.properties.video)}
  if(prop.tredhop){init3dhop(e.layer.feature.properties.tredhop)}
  if(prop.galleria){initGallery(e.layer.feature.properties.galleria)}
}

function setHeightDiv(){
  $("#wrapPoiInfo").css("bottom","0")
  $(".poiContentDiv").css("height",$('#wrapPoiInfo').height()-50)
}

function init3dhop(url){
  let div = $("<div/>",{id:'3dhopWrap',class:'my-3'}).appendTo('.poi-content')
  $("<a/>",{class:'btn btn-success d-block', href:'3dhop/'+url+'/start.html', text:'visualizza 3d'}).appendTo(div)
}

function initVideo(video){
  var videoDiv=''
  videoDiv+="<div class='video-content'>";
  videoDiv+="<video width='100%' controls>"
  videoDiv+="<source src='video/"+video+"' type='video/mp4'>"
  videoDiv+="Your browser does not support HTML5 video."
  videoDiv+="</video>"
  videoDiv+='</div>'
  $('#videoContent').html(videoDiv)
}

const observer = lozad('.lozad', { rootMargin: '10px 0px', threshold: 0.1 });
function initGallery(gallery){
  let dir = "img/gallerie/"+gallery.dir;
  let wrap = $("<div/>",{id:'galleryWrap', class:'container-fluid my-3'}).appendTo('#galleryContent')
  let rowImage = $("<div/>",{class:'row mb-2'}).appendTo(wrap)
  $.each(gallery.foto, function(i,v){
    $("<div/>", {id:"img"+i,class:'imgCover lozad col-4 col-md-3 border border-white'})
    .attr("data-background-image",dir+"/small/"+v.foto)
    .appendTo(rowImage)
    .on('click', function(){
      $("#wrapImage").toggleClass('hide flex')
      $("#galleryImageLarge").attr("src",dir+"/large/"+v.foto)
      $(".didascalia").text(v.didascalia)
      checkDim()
    })
  })
  setGalleryDim()
  observer.observe();
}
function setGalleryDim(){ $("#galleryWrap .lozad").height($("#img1").width()) }

function initSlider(slider){
  sliderDiv  = '<div id="'+slider.id+'" class="js-img-compare">';
  sliderDiv += '<div style="display: none;">';
  sliderDiv += '<span class="images-compare-label">'+slider.bgLabel+'</span>';
  sliderDiv += '<img src="img/poi/slider/'+slider.bgImg+'" alt="'+slider.bgLabel+'">';
  sliderDiv += '</div>';
  sliderDiv += '<div>';
  sliderDiv += '<span class="images-compare-label">'+slider.frontLabel+'</span>';
  sliderDiv += '<img src="img/poi/slider/'+slider.frontImg+'" alt="'+slider.frontLabel+'">';
  sliderDiv += '</div>';
  sliderDiv += '</div>';
  $('#sliderContent').html(sliderDiv);
  var imagesCompareElement = $('.js-img-compare').imagesCompare();
  var imagesCompare = imagesCompareElement.data('imagesCompare');
  var events = imagesCompare.events();
  // imagesCompare.on(events.initialised, function (event) {
  //   console.log(events.initialised);
  // });
}

function slideTrackInfo(e){
  prop = e.layer.feature.properties
  $(".closeTrackPanel>h5").html(prop.nome)
  $(".track-banner").css("background-image","url('img/sentieri/banner/"+prop.banner+"')")
  $('#wrapTrackInfo').fadeIn(500)
  $("body").on('click', '.closeTrackPanel', function() { $('#wrapTrackInfo').fadeOut(500); });
}
