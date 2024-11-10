document.addEventListener('DOMContentLoaded', function () {
    // Load the particles.js library
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = function () {
        // Initialize particles.js
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
    }
    document.head.append(script);

    // Play video and fade in elements when "Click to Enter" button is clicked
    document.querySelector('.enter-button').addEventListener('click', function () {
        document.querySelector('.container').style.display = 'none'; // Hide the container
        document.querySelector('.video-container').style.display = 'block'; // Show the video container
        const video = document.getElementById('video');
        video.play(); // Play the video
        
        // Fade in the circular image and name box
        fadeInElements();
    });
});

// Function to fade in elements
function fadeInElements() {
    const circularImage = document.querySelector('.circular-image');
    circularImage.style.opacity = '1'; // Fade in the circular image

    const nameBox = document.querySelector('.name-box');
    nameBox.style.opacity = '1'; // Fade in the name box
}
