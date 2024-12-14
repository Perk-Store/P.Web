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

textBox.addEventListener('mousemove', (e) => {
  const rect = textBox.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const deltaX = x - centerX;
  const deltaY = y - centerY;

  // Invert tilt for the X-axis based on the mouse movement (left to right)
  const angleY = (deltaX / rect.width) * 30; 

  // Reverse tilt for the Y-axis based on the mouse movement (top to bottom)
  const angleX = (deltaY / rect.height) * -30;

  const maxTilt = 30; // Adjust max tilt range

  // Apply the tilt effect within the specified tilt range
  const tiltX = Math.max(Math.min(angleX, maxTilt), -maxTilt);
  const tiltY = Math.max(Math.min(angleY, maxTilt), -maxTilt);

  // Apply the rotation transform
  textBox.style.transform = `translateY(-50%) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
});

textBox.addEventListener('mouseleave', () => {
  textBox.style.transform = 'translateY(-50%) rotateX(0deg) rotateY(0deg)';
});
