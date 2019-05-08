/*
3DHOP - 3D Heritage Online Presenter
Copyright (c) 2014, Marco Callieri - Visual Computing Lab, ISTI - CNR
All rights reserved.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

function initPanels() {
  $('.close').hover(
    function() {
      $('#help_close, #info_v_close, #info_h_close').css("display", "none");
      $('#help_close_on, #info_v_close_on, #info_h_close_on').css("display", "inline");
    },
    function() {
      $('#help_close_on, #info_v_close_on, #info_h_close_on').css("display", "none");
      $('#help_close, #info_v_close, #info_h_close').css("display", "inline");
    }
  );
}

function helpSwitch() {
  if($('#cover').css("display")=='none') {
    $('#cover').css("display", "table");
    $('#info_pane_horizontal1').css("display", "none");
    $('#info_pane_horizontal2').css("display", "none");
    $('#info_pane_horizontal3').css("display", "none");
    $('#info_pane_horizontal4').css("display", "none");
    $('#info_pane_horizontal5').css("display", "none");
    $('#info_pane_horizontal6').css("display", "none");
    $('#info_pane_horizontal7').css("display", "none");
    $('#help_pane').css("display", "table");
    $('#help').css("visibility", "hidden");
    $('#help_on').css("visibility", "visible");
  }
  else{
    $('#cover').css("display", "none");
    $('#help_on').css("visibility", "hidden");
    $('#help').css("visibility", "visible");
  }
}

function infoSwitch(type) {
  if($('#cover').css("display")=='none') {
    $('#cover').css("display", "table");
    $('#info_pane_horizontal1').css("display", "none");
    $('#info_pane_horizontal2').css("display", "none");
    $('#info_pane_horizontal3').css("display", "none");
    $('#info_pane_horizontal4').css("display", "none");
    $('#info_pane_horizontal5').css("display", "none");
    $('#info_pane_horizontal6').css("display", "none");
    $('#info_pane_horizontal7').css("display", "none");
    $('#info_pane_' + type).css("display", "table");
  }
  else{
    $('#cover').css("display", "none");
  }
}

function setInfo(hotspot){
  switch (hotspot){
    case "spot1": $('#hs1_img').css("display", "table"); break;
    case "spot2": $('#hs2_img').css("display", "table"); break;
    case "spot3": $('#hs3_img').css("display", "table"); break;
    case "spot4": $('#hs4_img').css("display", "table"); break;
    case "spot5": $('#hs5_img').css("display", "table"); break;
    case "spot6": $('#hs6_img').css("display", "table"); break;
    case "spot7": $('#hs7_img').css("display", "table"); break;
  }
}


// BEPPE HERE
