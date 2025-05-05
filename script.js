const photos = [
    { src: "photos/ChatGPT Image Apr 30, 2025, 11_22_17 AM.png", description: "Eating chicken tenders" },
    { src: "photos/ChatGPT Image Apr 30, 2025, 11_27_56 AM.png", description: "Outside of The Golden Plate" },
    { src: "photos/photo3.jpg", description: "Description of Photo 3" },
    { src: "photos/photo4.jpg", description: "Description of Photo 4" },
];

let currentPhotoIndex = 0;

const photoElement = document.getElementById("photo");
const descriptionElement = document.getElementById("description");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const thumbnailsContainer = document.querySelector(".thumbnails");

function updatePhoto(index) {
    const { src, description } = photos[index];
    photoElement.src = src;
    photoElement.alt = description;
    descriptionElement.textContent = description;
}

function createThumbnails() {
    photos.forEach((photo, index) => {
        const thumbnail = document.createElement("div");
        thumbnail.classList.add("thumbnail");
        const img = document.createElement("img");
        img.src = photo.src;
        img.alt = photo.description;
        thumbnail.appendChild(img);
        thumbnail.addEventListener("click", () => {
            currentPhotoIndex = index;
            updatePhoto(currentPhotoIndex);
        });
        thumbnailsContainer.appendChild(thumbnail);
    });
}

prevButton.addEventListener("click", () => {
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    updatePhoto(currentPhotoIndex);
});

nextButton.addEventListener("click", () => {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    updatePhoto(currentPhotoIndex);
});

createThumbnails();
updatePhoto(currentPhotoIndex);
