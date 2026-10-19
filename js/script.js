
/* =========================================
   E-INVITE ENVELOPE
========================================= */

const envelope = document.getElementById("envelope");
const envelopeContainer = document.getElementById("envelopeContainer");
const tapText = document.getElementById("tapText");
const flowerRain = document.getElementById("flowerRain");


let flowerInterval = null;

/* =========================================
   REAL FALLING FLOWER IMAGES
========================================= */

// Add your own flower image paths here
const flowers = [
    // "image/pet.png",
    // "image/pet.png",
    "image/white.png"
];

// function createFlower() {
//     if (!flowerRain) return;

//     const flower = document.createElement("img");

//     flower.className = "falling-flower";

//     // Select a random flower image
//     flower.src =
//         flowers[Math.floor(Math.random() * flowers.length)];

//     flower.alt = "";

//     // Random horizontal position
//     flower.style.left = Math.random() * 100 + "vw";

//     // Random image size
//     const size = 15 + Math.random() * 15;

//     flower.style.width = size + "px";
//     flower.style.height = "auto";

//     // Random falling speed
//     flower.style.animationDuration =
//         (4 + Math.random() * 4) + "s";

//     // Random transparency
//     flower.style.opacity =
//         0.65 + Math.random() * 0.35;

//     // Random rotation
//     flower.style.setProperty(
//         "--rotation",
//         Math.random() * 360 + "deg"
//     );

//     flowerRain.appendChild(flower);

//     flower.addEventListener("animationend", function () {
//         flower.remove();
//     });

//     // Remove broken images if a path is incorrect
//     flower.addEventListener("error", function () {
//         flower.remove();
//     });
// }


/* =========================================
   START FLOWERS
========================================= */

// function startFlowerRain() {
//     if (!flowerRain || flowerInterval !== null) return;

//     flowerRain.classList.add("active");

//     createFlower();

//     flowerInterval = setInterval(createFlower, 350);
// }


/* =========================================
   STOP FLOWERS
========================================= */

// function stopFlowerRain() {
//     if (!flowerRain) return;

//     clearInterval(flowerInterval);
//     flowerInterval = null;

//     flowerRain.classList.remove("active");
//     flowerRain.innerHTML = "";
// }


/* =========================================
   OPEN ENVELOPE
========================================= */

function openEnvelope() {
    if (!envelope) return;

    envelope.classList.add("open");

    if (envelopeContainer) {
        envelopeContainer.classList.add("opened");
    }

    startFlowerRain();
}


/* =========================================
   CLOSE ENVELOPE
========================================= */

function closeEnvelope() {
    if (!envelope) return;

    envelope.classList.remove("open");

    if (envelopeContainer) {
        envelopeContainer.classList.remove("opened");
    }

    stopFlowerRain();
}


/* =========================================
   TAP / CLICK
========================================= */

if (envelope) {
    envelope.addEventListener("click", function () {
        if (!envelope.classList.contains("open")) {
            openEnvelope();
        }
    });

    envelope.addEventListener("keydown", function (event) {
        if (
            (event.key === "Enter" || event.key === " ") &&
            !envelope.classList.contains("open")
        ) {
            event.preventDefault();
            openEnvelope();
        }
    });
}
