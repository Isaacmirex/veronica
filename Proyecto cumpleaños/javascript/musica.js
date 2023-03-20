var audio = document.getElementById("audioPlayer");
audio.volume = 0.2;
audio.play();

var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", function() {
  if (audio.paused) {
    audio.play();
    stopButton.innerHTML = "Detener música";
  } else {
    audio.pause();
    stopButton.innerHTML = "Reproducir música";
  }
});

let currentSong = null;
const songCards = document.querySelectorAll('.song-card');
const audioPlayer = document.getElementById('audioPlayer');

songCards.forEach(songCard => {
  songCard.addEventListener('click', () => {
    const audioSource = songCard.getAttribute('data-src');
    if (currentSong !== audioSource) {
      audioPlayer.setAttribute('src', audioSource);
      audioPlayer.load();
      audioPlayer.play();
      currentSong = audioSource;
      stopButton.innerHTML = "Detener música";
    } else {
      if (audioPlayer.paused) {
        audioPlayer.play();
        stopButton.innerHTML = "Detener música";
      } else {
        audioPlayer.pause();
        stopButton.innerHTML = "Reproducir música";
      }
    }
  });
});
