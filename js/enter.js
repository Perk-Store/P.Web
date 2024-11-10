document.querySelector(".enter-button").addEventListener("click", function () {
    // Hide the main container
    document.querySelector(".container").style.display = "none";
    
    // Show the video container and fade it in
    const videoContainer = document.querySelector(".video-container");
    videoContainer.style.visibility = "visible";
    videoContainer.classList.add("fade-in");
    videoContainer.style.opacity = "1";
    
    // Show the name box and buttons
    const nameBox = document.querySelector(".name-box");
    nameBox.style.opacity = "1";

    const smallButton = document.querySelector(".small-button");
    const secondButton = document.querySelector(".second-button");
    smallButton.style.opacity = "1";
    secondButton.style.opacity = "1";
    
    // Play the video
    const video = document.getElementById("video");
    video.play();
});

document.querySelector(".small-button").addEventListener("click", function () {
    window.open("https://discord.gg/perkdc", "_blank");
});

document.querySelector(".second-button").addEventListener("click", function () {
    window.open("https://cash.app/$Kadenru", "_blank");
});
