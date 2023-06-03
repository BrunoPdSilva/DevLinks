const toggleTheme = document.querySelector(".toggle");
const toggleIcon = document.querySelector("img[alt='Toggle Icon']");
console.log(toggleIcon);

toggleTheme.addEventListener("click", () => {
  toggleTheme.classList.toggle("active");

  const isLightTheme = document.body.getAttribute("data-theme") === "light";

  if (isLightTheme) {
    document.body.setAttribute("data-theme", "dark");
    document.body.style.backgroundImage = "url('./assets/m-background-light.png');"
    toggleIcon.setAttribute("src", "./assets/MoonStars.svg");
  } else {
    document.body.setAttribute("data-theme", "light");
    document.body.style.backgroundImage = "url('./assets/m-background-dark.png');"
    toggleIcon.setAttribute("src", "./assets/Sun.svg");
  }
});
