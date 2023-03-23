import darkLightRegime from './modules/darkLight';
import hamburgerMenu from './modules/hambureMenu';
import modalWindow from './modules/modal';
import formsPost from './modules/postForm';
import slider from './modules/slider';
import time from './modules/time';
import video from './modules/video';
import wetterAPI from './modules/wetterAPI';




window.addEventListener('DOMContentLoaded', function(){
 
    darkLightRegime();
    hamburgerMenu();
    modalWindow();
    formsPost();
    slider();
    time();
    video();
    wetterAPI();
});