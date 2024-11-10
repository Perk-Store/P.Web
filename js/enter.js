document.querySelector('.enter-button').addEventListener('click', function() {
    // Show the video container and start playing the video
    const videoContainer = document.querySelector('.video-container');
    videoContainer.style.visibility = 'visible';
    videoContainer.style.opacity = '1';

    // Show the name box
    const nameBox = document.querySelector('.name-box');
    nameBox.style.visibility = 'visible';
    nameBox.style.opacity = '1';

    // Hide the initial button container
    const buttonContainer = document.querySelector('.container');
    buttonContainer.style.display = 'none';

    // Play the video
    const video = document.getElementById('video');
    video.play();
});
