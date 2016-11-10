import JSON5 from 'json5';

export function set(key, value, expire = 0, type = 0) {
	switch(type) {
		case 0:
			saveInLocalStorage(key, value, expire);
			break;
		case 1:
			saveInSessionStorage(key, value, expire);
			break;
		case 2:
			saveInCookie(key, value, expire);
			break;
	};
}

function encode(value, expire) {
	var pack = {
		"value": value,
		"expire": expire,
	};
	var sec = JSON5.stringify(pack);
	return sec;
}

function saveInLocalStorage(key, value, expire) {
	var sec = encode(value, expire);
	localStorage.setItem(key, sec);
}

function saveInSessionStorage(key, value, expire) {
	var sec = encode(value, expire);
	sessionStorage.setItem(key, value);
}

function saveInCookie(key, value, expire) {
	var d = new Date(expire);
	var sec = JSON5.stringify(value);
	document.cookie = key + "=" + value + ";expires=" + d.toUTCString();
}
