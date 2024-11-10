document.querySelector(".enter-button").addEventListener("click", function () {
    // Hide the initial container and show the video
    document.querySelector(".container").style.display = "none";

    // Show the video
    const videoContainer = document.querySelector(".video-container");
    videoContainer.style.visibility = "visible";
    videoContainer.style.opacity = "1";  // Make sure video is visible
    videoContainer.classList.add("fade-in");

    // Fade in the name box and buttons
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
