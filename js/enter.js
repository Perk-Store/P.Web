document.querySelector(".enter-button").addEventListener("click", function () {
    // Hide the "Click to Enter" button
    document.querySelector(".container").style.display = "none";

    // Show the video and play it
    const videoContainer = document.querySelector(".video-container");
    videoContainer.style.display = "block";  // Ensure it's visible
    videoContainer.style.opacity = "1";     // Make sure the video is fully visible

    const video = document.getElementById("video");
    video.play();

    // Fade in the name box
    const nameBox = document.querySelector(".name-box");
    nameBox.style.opacity = "1";

    // Fade in the buttons
    const smallButton = document.querySelector(".small-button");
    const secondButton = document.querySelector(".second-button");
    smallButton.style.opacity = "1";
    secondButton.style.opacity = "1";
});
