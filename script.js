const enterButton = document.getElementById('enterButton');
const videoContainer = document.getElementById('videoContainer');
const video = document.querySelector('#videoContainer video');
const textBox = document.getElementById('textBox');

enterButton.addEventListener('click', () => {
  enterButton.style.opacity = '0';

  setTimeout(() => {
    enterButton.style.display = 'none';
    
    // Show the video container and text box after the delay
    videoContainer.style.display = 'block';
    textBox.style.display = 'block'; // Make sure the text box is set to block before fading in

    // Fade in the video container and text box
    setTimeout(() => {
      videoContainer.style.opacity = '1';
      textBox.style.opacity = '1'; // Fade in text box
      video.play();
    }, 100); // Delay before starting opacity changes for smooth transition
  }, 500); // Delay before hiding the enter button
});

document.addEventListener('DOMContentLoaded', function () {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
  script.onload = function () {
    particlesJS("snow", {
      "particles": {
        "number": {
          "value": 40,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "opacity": {
          "value": 0.7,
          "random": true,
          "anim": {
            "enable": true
          }
        },
        "size": {
          "value": 2.3,
          "random": true,
          "anim": {
            "enable": true
          }
        },
        "line_linked": {
          "enable": false
        },
        "move": {
          "enable": true,
          "speed": 5,
          "direction": "bottom",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": true,
            "rotateX": 300,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "events": {
          "onhover": {
            "enable": false
          },
          "onclick": {
            "enable": true
          },
          "resize": false
        }
      },
      "retina_detect": true
    });
  };
  document.head.append(script);
});
