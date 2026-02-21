// LOADER CONTROL
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.style.display = "none";
    }, 4000);
});

// DEAD EYE
const deadEyeBtn = document.getElementById("deadEyeBtn");
const body = document.body;

deadEyeBtn.addEventListener("click", () => {
    body.classList.add("dead-eye");
    setTimeout(() => {
        body.classList.remove("dead-eye");
    }, 2500);
});

// GUNSHOT + BLOOD EFFECT
const gunshot = document.getElementById("gunshotSound");
const gunItems = document.querySelectorAll(".gun-hover");
const blood = document.getElementById("bloodEffect");

gunItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
        gunshot.currentTime = 0;
        gunshot.play();

        blood.style.opacity = "0.6";
        setTimeout(() => {
            blood.style.opacity = "0";
        }, 500);
    });
});

// BLOOD ON SCROLL
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        blood.style.opacity = "0.3";
    } else {
        blood.style.opacity = "0";
    }
});