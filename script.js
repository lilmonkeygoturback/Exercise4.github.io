document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleDarkMode");
    const body = document.body;

    const isDarkMode = localStorage.getItem("darkMode") === "enabled";

    if (isDarkMode) {
        body.classList.add("dark-mode");
        body.classList.remove("light-mode");
        toggleButton.textContent = "Light Mode";
        toggleButton.classList.replace("btn-dark", "btn-light");
    } else {
        body.classList.add("light-mode");
        body.classList.remove("dark-mode");
        toggleButton.textContent = "Dark Mode";
        toggleButton.classList.replace("btn-light", "btn-dark");
    }

    toggleButton.addEventListener("click", function () {
        const isNowDarkMode = body.classList.toggle("dark-mode");
        body.classList.toggle("light-mode", !isNowDarkMode);

        localStorage.setItem("darkMode", isNowDarkMode ? "enabled" : "disabled");

        toggleButton.textContent = isNowDarkMode ? "Light Mode" : "Dark Mode";
        toggleButton.classList.toggle("btn-light", isNowDarkMode);
        toggleButton.classList.toggle("btn-dark", !isNowDarkMode);
    });
});
