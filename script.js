/* let currentImage = 1;

function nextImage() {
    let img = document.getElementById("image");

    if (currentImage === 1) {
        img.src = "sjcet nightview.jpeg";
        currentImage = 2;
    } else {
        img.src = "sjcet daylight.jpeg";
        currentImage = 1;
    }
}
*/
let isDaylight = true;

function nextImage() {
    const img = document.getElementById("image");
    
    if (isDaylight) {
        img.src = "sjcet nightview.jpeg";
    } else {
        img.src = "sjcet daylight.jpeg";
    }
    
    // Toggle the state
    isDaylight = !isDaylight;
}
