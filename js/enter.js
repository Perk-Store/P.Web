document.addEventListener('DOMContentLoaded', function () {
    const enterButton = document.querySelector('.enter-button');
    const videoContainer = document.querySelector('.video-container');
    const video = document.getElementById('video');
    
    enterButton.addEventListener('click', function () {
        document.querySelector('.container').style.display = 'none';
        videoContainer.style.display = 'block';
        video.play();
    });
});
