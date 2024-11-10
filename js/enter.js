// Handle the "Enter" button click event
document.querySelector('.enter-button').addEventListener('click', function() {
    // Hide the container with the enter button
    document.querySelector('.container').style.display = 'none';

    // Show the video container and circular image with fade-in effect
    const videoContainer = document.querySelector('.video-container');
    videoContainer.classList.add('fade-in'); // Add fade-in class to make the video visible
    videoContainer.style.visibility = 'visible';
    videoContainer.style.opacity = '1'; // Make sure the video container is visible

    const nameBox = document.querySelector('.name-box');
    nameBox.style.opacity = '1'; // Show the name box

    const circularImage = document.querySelector('.circular-image');
    circularImage.style.opacity = '1'; // Fade in the circular image

    // Play the main video
    const video = document.getElementById('video');
    video.play(); // Ensure the main video is played

    // Optionally, play the saith video if present
    const saithVideo = document.getElementById('saith-video');
    if (saithVideo) {
        saithVideo.play(); // Play the secondary saith video (if it's there)
    }
});

// Handle small button click (Discord link)
document.querySelector('.small-button').addEventListener('click', function() {
    window.open("https://discord.gg/perkdc", "_blank");
});

// Handle second small button click (Cashapp link)
document.querySelector('.second-button').addEventListener('click', function() {
    window.open("https://cash.app/$Kadenru", "_blank");
});
