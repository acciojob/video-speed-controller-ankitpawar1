const video = document.querySelector('.video');
const playerButton = document.querySelector('.player__button');
const rewindButton = document.querySelector('.rewind');
const forwardButton = document.querySelector('.forward');
const volumeControl = document.querySelector('.volume');
const playbackSpeedControl = document.querySelector('.playbackSpeed');
const progressBar = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');

const togglePlayPause = () => {
  if (video.paused) {
    video.play();
    playerButton.textContent = '❚ ❚';
  } else {
    video.pause();
    playerButton.textContent = '►';
  }
};

const updateVolume = () => {
  video.volume = volumeControl.value;
};

const updatePlaybackSpeed = () => {
  video.playbackRate = playbackSpeedControl.value;
};

const updateProgress = () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${percent}%`;
};

const rewind = () => {
  video.currentTime -= 10;
};

const forward = () => {
  video.currentTime += 25;
};

// Event Listeners
playerButton.addEventListener('click', togglePlayPause);
rewindButton.addEventListener('click', rewind);
forwardButton.addEventListener('click', forward);
volumeControl.addEventListener('input', updateVolume);
playbackSpeedControl.addEventListener('input', updatePlaybackSpeed);
video.addEventListener('timeupdate', updateProgress);
