import { deleteCookie, getCookie, setCookie } from './CookieHandler';

const darkModeToggleId = 'darkModeToggle';
const darkModeClassName = 'dark-mode';
const darkModeCookieName = 'dark-mode';
const darkModeCookieDays = 31;

/**
 * Toggles Dark Mode.
 *
 * Enables/Disables dark mode by adjusting the classList on the body element.
 */
function toggleDarkMode() {
	const bodyClasses = document.getElementById('body').classList;
	if (bodyClasses.contains(darkModeClassName)) {
		bodyClasses.remove(darkModeClassName);
		deleteCookie(darkModeCookieName)
	} else {
		bodyClasses.add(darkModeClassName);
		setCookie(darkModeCookieName, true, darkModeCookieDays)
	}
}

// Attach the dark mode toggle to the element with the darkModeToggleId.
document.getElementById(darkModeToggleId).onclick = () => {
	toggleDarkMode();
	return false; // such that the browser doesn't redirect to href attribute.
};

if (getCookie(darkModeCookieName) === 'true') {
	toggleDarkMode()
}