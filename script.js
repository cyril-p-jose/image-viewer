let currentImage = 1;

function nextImage() {
    let img = document.getElementById("image");

    if (currentImage === 1) {
        img.src = "https://github.com/cyril-p-jose/image-viewer/blob/main/sjcet%20nightview.jpeg";
        currentImage = 2;
    } else {
        img.src = "https://github.com/cyril-p-jose/image-viewer/blob/main/sjcet%20daylight.jpeg";
        currentImage = 1;
    }
}
