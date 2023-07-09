const btnDarkMode = document.querySelector(".dark-mode-btn");

/* Проверка localstorage на тему */
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add('dark');
} else if ((localStorage.getItem('darkMode') === 'light')){
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove('dark');
}
/* Проверка темной темы на уровне системных настроек */
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add('dark');
}

/* Изменение темы при смене системных настроек */
window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener('change', (event) => {
        const newColorScheme =  event.matches ? "dark" : "light";
        if (newColorScheme === 'dark') {
            btnDarkMode.classList.add("dark-mode-btn--active");
            document.body.classList.add('dark');
            localStorage.setItem('darkMode', 'dark')
        } else {
            btnDarkMode.classList.remove("dark-mode-btn--active");
            document.body.classList.remove('dark');
        }
})
/* Включение ночного режима по кнопку */
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");
    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem('darkMode', 'light');
    }
}

