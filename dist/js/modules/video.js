  // video

  function video() {
    const videoPlayer = document.querySelector('.video__box__video__player');
    const playButton = document.querySelector('.video__btn');
  
    // Add event listener to the play button
    playButton.addEventListener('click', () => {
    if (videoPlayer.paused) {
        videoPlayer.play();
        playButton.style.display = 'none';
    } 
    });
  }

  export default video;
