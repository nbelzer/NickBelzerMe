/* Little script to follow the color scheme preferences of the user (set in the os) with the ability to override. */

// Preferences
const darkContainerId = 'body';
const darkToggleId = 'darkModeToggle';
const darkClass = 'dark-mode';
const defaultTheme = 'light';
const sessionStorageKey = 'dark-mode';

// State variables
const container = document.getElementById(darkContainerId);
let currentTheme = defaultTheme;


function enableDarkMode() {
    container.classList.add(darkClass);
    currentTheme = 'dark';
}

function enableLightMode() {
    container.classList.remove(darkClass);
    currentTheme = 'light';
}

function toggle() {
    if (currentTheme === 'light') {
        enableDarkMode();
    } else if (currentTheme === 'dark') {
        enableLightMode()
    }
}

const colorSchemeDarkMatch = window.matchMedia('(prefers-color-scheme: dark)');
const colorSchemeLightMatch = window.matchMedia('(prefers-color-scheme: light)');

if (sessionStorage.getItem(sessionStorageKey)) {
    const sessionPreference = sessionStorage.getItem(sessionStorageKey);
    if (sessionPreference === 'dark') {
        enableDarkMode();
    } else if (sessionPreference === 'light') {
        enableLightMode();
    }
} else {
    // Set value based on current system color scheme.
    if (colorSchemeDarkMatch.matches) {
        enableDarkMode();
    } else if (colorSchemeLightMatch.matches) {
        enableLightMode()
    }
}

// Add listeners for color scheme changes.
colorSchemeDarkMatch.addListener( e => {
    if (e.matches) enableDarkMode();
});
colorSchemeLightMatch.addListener( e => {
    if (e.matches) enableLightMode();
});

// Add event listener to toggle.
document.getElementById(darkToggleId).addEventListener('click', e => {
    e.preventDefault();
    toggle();
    sessionStorage.setItem(sessionStorageKey, currentTheme);
});