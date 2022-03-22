/* creates a read-only reference to a value and returns first element that matches .btn-toggle */
const btn = document.querySelector(".btn-toggle");
/* performs a check to see if the documnet matches the media query wich lets the object send notifications to listeners when its query state changes e.g when the value goes to false */
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

/* togles between the class and element */

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
}

/* attaches an even handler to the button
Looks for the class name light-theme and changes the element when clicked */

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
  } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
  }
  localStorage.setItem("theme", theme);
});