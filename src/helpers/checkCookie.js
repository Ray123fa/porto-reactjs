if (localStorage.getItem("theme") == null) {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    localStorage.setItem("theme", "dracula");
    document.documentElement.setAttribute("data-theme", "dracula");
  } else {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  }
} else if (localStorage.getItem("theme") === "dracula") {
  document.documentElement.setAttribute("data-theme", "dracula");
} else if (localStorage.getItem("theme") === "light") {
  document.documentElement.setAttribute("data-theme", "light");
}
