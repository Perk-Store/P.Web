const enterButton = document.getElementById('enterButton');
const videoContainer = document.getElementById('videoContainer');
const video = document.querySelector('#videoContainer video');
const audio = document.getElementById('audio');
const textBox = document.getElementById('textBox');

// Enter button click logic
enterButton.addEventListener('click', () => {
  enterButton.style.opacity = '0';

  setTimeout(() => {
    enterButton.style.display = 'none';
    videoContainer.style.display = 'block';
    textBox.style.display = 'block'; // Ensure the text box is visible

    setTimeout(() => {
      videoContainer.style.opacity = '1';
      textBox.style.opacity = '1';
      video.play();
      audio.play();
    }, 100);
  }, 500);
});

// Particles.js initialization for snow effect
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

// Bio box tilt effect
document.addEventListener('mousemove', (event) => {
  const x = (event.clientX / window.innerWidth) - 0.5; // Normalize: -0.5 to 0.5
  const y = (event.clientY / window.innerHeight) - 0.5; // Normalize: -0.5 to 0.5

  const rotationX = y * 10; // Adjust tilt intensity (higher = more dramatic)
  const rotationY = x * 10;

  // Apply tilt transformation
  textBox.style.transform = `translate(-50%, -50%) perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
});
