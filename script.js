const enterButton = document.getElementById('enterButton');
const videoContainer = document.getElementById('videoContainer');
const video = document.querySelector('#videoContainer video');
const audio = document.getElementById('audio');
const textBox = document.getElementById('textBox');

enterButton.addEventListener('click', () => {
  enterButton.style.opacity = '0';

  setTimeout(() => {
    enterButton.style.display = 'none';
    videoContainer.style.display = 'block';
    textBox.style.display = 'block';

    setTimeout(() => {
      videoContainer.style.opacity = '1';
      textBox.style.opacity = '1';
      video.play();
      audio.play();
    }, 100);
  }, 500);
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

const textBox = document.querySelector('#textBox');

  textBox.addEventListener('mousemove', (e) => {
    const rect = textBox.getBoundingClientRect(); // Get the position of the box
    const x = e.clientX - rect.left; // X coordinate relative to the box
    const y = e.clientY - rect.top;  // Y coordinate relative to the box
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate the angle based on the cursor position
    const deltaX = x - centerX;
    const deltaY = y - centerY;
    const angleX = (deltaY / rect.height) * 30;  // Increased tilt range for X
    const angleY = (deltaX / rect.width) * -30; // Increased tilt range for Y

    // Apply the tilt effect
    textBox.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
  });

  textBox.addEventListener('mouseleave', () => {
    // Reset the transform when the mouse leaves the text box
    textBox.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
