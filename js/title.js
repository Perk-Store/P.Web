const prefix = "𝕡-";
const originalPart = "Perk";
const newPart = "Perk";
let index = originalPart.length;
let deleting = true;

function animateTitle() {
    let animatedPart = deleting ? originalPart.substring(0, index) : newPart.substring(0, index);
    document.title = prefix + animatedPart;

    if (deleting) {
        index--;
        if (index < 0) {
            deleting = false;
            index = 0;
        }
    } else {
        index++;
        if (index > newPart.length) {
            deleting = true;
            index = originalPart.length;
        }
    }

    setTimeout(animateTitle, 200);
}

window.onload = () => {
    animateTitle();
};
