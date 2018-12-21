
const darkModeToggleId = 'darkModeToggle';
const darkModeClassName = 'dark-mode';

/**
 * Toggles Dark Mode.
 *
 * Enables/Disables dark mode by adjusting the classList on the body element.
 */
function toggleDarkMode() {
	const bodyClasses = document.getElementById('body').classList;
	if (bodyClasses.contains(darkModeClassName)) {
		bodyClasses.remove(darkModeClassName);
	} else {
		bodyClasses.add(darkModeClassName);
	}
}

// Attach the dark mode toggle to the element with the darkModeToggleId.
document.getElementById(darkModeToggleId).onclick = () => {
	toggleDarkMode();
	return false; // such that the browser doesn't redirect to href attribute.
};
