export function set(key, value, expire, type) {
    // value = encodeURIComponent(value);
    
	if(type && type == 0) {
		saveInStorage(key, value);
	} else {
		saveInCookie(key, value);
	}
}

function saveInLocalStorage(key, value, expire) {
	localStorage.setItem(key, value);
}

function saveInSessionStorage(key, value, expire) {
	sessionStorage.setItem(key, value);
}

function saveInCookie(key, value, expire) {
	var exdate = new Date();
	var days = 10;
	exdate.setDate(exdate.getDate() + days);
	document.cookie = key + "=" + value + ";expires=" + exdate.toUTCString();
}

