/**
 * Cookie Functions
 * By https://plainjs.com/javascript/utilities/
 * set-cookie-get-cookie-and-delete-cookie-5/
 */

/**
 * Read the value of a cookie.
 * @param name The name of the cookie to read.
 * @returns {any} The value of the cookie or null if cookie cannot be found.
 */
export function getCookie(name) {
	var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
	return v ? v[2] : null;
}

/**
 * Set a cookie.
 * @param name The name of the cookie to set.
 * @param value The value to set for that cookie.
 * @param days The amount of days for which this cookie should be active.
 */
export function setCookie(name, value, days) {
	var d = new Date;
	d.setTime(d.getTime() + 24*60*60*1000*days);
	document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}

/**
 * Delete a cookie.
 * @param name The name of the cookie to delete.
 */
export function deleteCookie(name) { setCookie(name, '', -1); }
