let currentImage = 1;

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
