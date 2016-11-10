export function remove(key, type = 0) {
	switch(type) {
		case 0:
			removeFromLocalStorage(key);
			break;
		case 1:
			removeFromSessionStorage(key);
			break;
		case 2:
			removeFromCookie(key);
			break;
	};
}

function removeFromLocalStorage(key) {
	localStorage.removeItem(key);
}

function removeFromSessionStorage(key) {
	sessionStorage.removeItem(key);
}

function removeFromCookie(key) {
	document.cookie = key + "=''; expires=" + new Date(0).toUTCString();
}