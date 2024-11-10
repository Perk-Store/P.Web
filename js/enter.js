// When the page loads, we make sure the video is ready to play.
window.onload = () => {
    const video = document.getElementById('video');
    video.load(); // Ensure the video is loaded before interacting with it
};

// Handle button click to play video and show the video container
document.querySelector('.enter-button').addEventListener('click', function() {
    // Show the video container and start playing the video
    const videoContainer = document.querySelector('.video-container');
    videoContainer.style.visibility = 'visible';
    videoContainer.style.opacity = '1';

    const video = document.getElementById('video');
    video.play();  // Explicitly play the video

    // Hide the container (and other elements if needed)
    const buttonContainer = document.querySelector('.container');
    buttonContainer.style.display = 'none';
});
