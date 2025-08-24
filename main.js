var images = document.getElementById("images");
var prevBtn = document.getElementById("prev");
var forwardBtn = document.getElementById("next");
var img = document.getElementsByTagName("img");

var position = 0;
var currentLake = "oke"; // default lake (okeechobee)

function start() {
    position++;
    changeImage();
}

function changeImage() {
    if (position > img.length - 1) {
        position = 0;
    }
    else if (position < 0) {
        position = img.length - 1;
    }

    images.style.transform = `translateX(${-position * 328}px)`;
}

forwardBtn.addEventListener("click", () => {
    position++;
    changeImage();
});

prevBtn.addEventListener("click", () => {
    position--;
    changeImage();
});

// Change image label below
function setLabelText(linkElement) {
  const label = document.getElementById('lakeLabel');
  label.textContent = linkElement.textContent;
}

// Function to swap images based on clicked lake
function changeLake(lakeCode) {
    currentLake = lakeCode;
    position = 0;

    // replace all img src
    for (let i = 0; i < img.length; i++) {
        // Example: i=0 → "oke1.jpg", i=1 → "oke1lab.jpg", etc.
        let baseIndex = Math.floor(i / 3) + 1; 
        let type = i % 3 === 0 ? "" : (i % 3 === 1 ? "lab" : "pred");
        img[i].src = `./images/${lakeCode}${baseIndex}${type}.jpg`;
    }

    // reset transform so it starts at first image
    images.style.transform = `translateX(0px)`;
}