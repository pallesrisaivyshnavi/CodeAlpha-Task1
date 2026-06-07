const images = document.querySelectorAll(".gallery-item");

let currentIndex = 0;

// Filter Images
function filterImages(category) {

    images.forEach(img => {

        if(category === "all"){
            img.style.display = "block";
        }
        else if(img.classList.contains(category)){
            img.style.display = "block";
        }
        else{
            img.style.display = "none";
        }

    });
}

// Open Lightbox
function openLightbox(img){

    document.getElementById("lightbox").style.display = "flex";

    document.getElementById("lightbox-img").src = img.src;

    currentIndex = Array.from(images).indexOf(img);
}

// Close Lightbox
function closeLightbox(){

    document.getElementById("lightbox").style.display = "none";
}

// Previous / Next Image
function changeImage(direction){

    currentIndex += direction;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    document.getElementById("lightbox-img").src =
        images[currentIndex].src;
}

// Close when clicking outside image
document.getElementById("lightbox").addEventListener("click", function(e){

    if(e.target === this){
        closeLightbox();
    }

});