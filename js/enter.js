document.querySelector('.enter-button').addEventListener('click', function() {
    document.querySelector('.container').style.display = 'none';

    // Set up domain-specific details dynamically
    const domain = window.location.hostname; // Get current domain
    const domainInfo = getDomainInfo(domain); // Fetch domain-specific details

    // Update content based on domain
    document.getElementById('domain-name').innerText = domainInfo.name; // Set domain name
    document.querySelector('.subtitle').innerText = domainInfo.subtitle; // Set subtitle
    document.querySelector('.circular-image img').src = domainInfo.image; // Set circular image

    // Show the circular image and video
    playVideo(domainInfo.video);
    fadeInElements();

    const videoContainer = document.querySelector('.video-container');
    videoContainer.style.display = 'block'; // Show the video container
    videoContainer.style.opacity = '1'; 
    const nameBox = document.querySelector('.name-box');
    nameBox.style.opacity = '1'; 
    const video = document.getElementById('video');
    video.play(); 
});

// Function to fetch domain-specific information
function getDomainInfo(domain) {
    const domainMapping = {
        "saith.domain": {
            name: "Saith",
            subtitle: "Drink my piss you nasty slut",
            image: "saith.png",
            video: "copcar.mp4"
        },
        "perk.domain": {
            name: "Perk",
            subtitle: "Hardest private bio links",
            image: "perk.png",
            video: "perkvideo.mp4"
        }
        // Add more domains here...
    };

    // Return the matching domain info, default to Saith
    return domainMapping[domain] || domainMapping["saith.domain"];
}

function playVideo(videoSource) {
    const saithVideo = document.getElementById('saith-video');
    saithVideo.src = videoSource; // Set video source dynamically
    saithVideo.currentTime = 0; // Reset to the beginning
    saithVideo.play(); 
}

function fadeInElements() {
    const circularImage = document.querySelector('.circular-image');
    circularImage.style.opacity = '1'; 
}
