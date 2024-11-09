document.querySelector(".enter-button").addEventListener("click", function () {
    document.querySelector(".container").style.display = "none";

    const videoContainer = document.querySelector(".video-container");
    videoContainer.style.visibility = "visible";
    videoContainer.classList.add("fade-in");
    videoContainer.style.opacity = "1";

    const nameBox = document.querySelector(".name-box");
    nameBox.style.opacity = "1";

    const smallButton = document.querySelector(".small-button");
    const secondButton = document.querySelector(".second-button");
    smallButton.style.opacity = "1";
    secondButton.style.opacity = "1";

    const video = document.getElementById("video");
    video.play();
});

document.querySelector(".small-button").addEventListener("click", function () {
    window.open("https://discord.gg/perkdc", "_blank");
});

document.querySelector(".second-button").addEventListener("click", function () {
    window.open("https://cash.app/$Kadenru", "_blank");
});
