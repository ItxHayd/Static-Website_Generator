console.log("Comfort layout loaded 🚀");

document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");

  if (hero) {
    hero.addEventListener("click", () => {
      hero.style.filter = "brightness(1.2)";
      console.log("Hero clicked!");
    });
  }
});