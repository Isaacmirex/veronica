const audioPlayer = document.getElementById('audioPlayer');

// Set initial volume and play the audio
audioPlayer.volume = 0.2;
audioPlayer.play();

// Listen for click events on the song images
const songImages = document.querySelectorAll('.square img');
songImages.forEach(songImage => {
  songImage.addEventListener('click', () => {
    const audioSource = songImage.getAttribute('onclick').match(/'([^']+)'/)[1];
    audioPlayer.setAttribute('src', audioSource);
    audioPlayer.load();
    audioPlayer.play();
  });
});

// Listen for the "ended" event of the audio player to continue playing the background music
audioPlayer.addEventListener('ended', () => {
  audioPlayer.currentTime = 0;
  audioPlayer.play();
});

// Listen for click events on the "Detener música" button
const stopButton = document.getElementById('stopButton');
stopButton.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    stopButton.innerHTML = "Detener música";
  } else {
    audioPlayer.pause();
    stopButton.innerHTML = "Reproducir música";
  }
});
