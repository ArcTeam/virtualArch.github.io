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
    // root.classList.remove('hide');
    // root.classList.add('available');
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
  // const installEl = document.getElementById('installer');
  // const installer = new Installer(installEl);
})

window.addEventListener("orientationchange", function() {
  window.setTimeout(function() {
    setHeightDiv()
    $("video").css("width",$('.poi-content').width())
    setGalleryDim()
    checkDim()
  }, 200);
}, false);
