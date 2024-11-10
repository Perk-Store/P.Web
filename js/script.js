document.addEventListener("DOMContentLoaded", function () {
    var script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.onload = function () {
        particlesJS("snow", {
            particles: {
                number: {
                    value: 40,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: { value: "#ffffff" },
                opacity: {
                    value: 0.7,
                    random: true,
                    anim: { enable: true }
                },
                size: {
                    value: 2.3,
                    random: true,
                    anim: { enable: true }
                },
                line_linked: { enable: false },
                move: {
                    enable: true,
                    speed: 5,
                    direction: "bottom",
                    random: true,
                    out_mode: "out"
                }
            },
            interactivity: { events: { resize: false } },
            retina_detect: true
        });
    };
    document.head.append(script);
});
