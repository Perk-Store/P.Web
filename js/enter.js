document.querySelector(".enter-button").addEventListener("click", function () {
    // Hide the enter button
    document.querySelector(".container").style.display = "none";

    // Make the video container visible and play the video
    const videoContainer = document.querySelector(".video-container");
    videoContainer.style.visibility = "visible";
    videoContainer.style.opacity = "1";

    // Show name box and apply opacity transition
    const nameBox = document.querySelector(".name-box");
    nameBox.style.opacity = "1";

    // Show small buttons (delayed after video and name box fade in)
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
