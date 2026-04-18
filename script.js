let currentImage = 1;

function nextImage() {
    let img = document.getElementById("image");

    if (currentImage === 1) {
        img.src = "image2.jpg";
        currentImage = 2;
    } else {
        img.src = "image1.jpg";
        currentImage = 1;
    }
}
