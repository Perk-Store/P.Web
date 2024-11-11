document.addEventListener('DOMContentLoaded', () => {
    const websiteName = "perk.lol";
    const websiteNameElement = document.getElementById('websiteName');
    let index = 0;

    // Function to spell the name letter by letter
    function spellWord() {
        if (index < websiteName.length) {
            websiteNameElement.innerHTML += websiteName.charAt(index);
            index++;
            setTimeout(spellWord, 100); // Adjust the speed here (in milliseconds)
        } else {
            setTimeout(unspellWord, 2000); // Delay before unspelling (in milliseconds)
        }
    }

    // Function to unspell the name letter by letter
    function unspellWord() {
        if (index > 0) {
            websiteNameElement.innerHTML = websiteNameElement.innerHTML.slice(0, -1);
            index--;
            setTimeout(unspellWord, 100); // Adjust the speed of unspelling
        } else {
            setTimeout(spellWord, 1000); // Delay before starting the spelling again
        }
    }

    spellWord(); // Start the spelling animation
});
