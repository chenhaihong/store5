import JSON5 from 'json5';

export function get(key, type = 0) {
	var value;
	switch(type) {
		case 0:
			value = getFromLocalStorage(key);
			break;
		case 1:
			value = getFromSessionStorage(key);
			break;
		case 2:
			value = getFromCookie(key);
			break;
	};
	return value;
}

function decode(sec) {
	var pack = JSON5.parse(sec);
	return pack;
}

function getFromLocalStorage(key) {
	var sec = localStorage.getItem(key);
	var pack = decode(sec);
	var value;
	
	if(pack.expire > new Date().getTime()) {
		value = pack.value;
	} else {
		value = '';
		localStorage.removeItem(key);
	}
	
	return value;
}

function getFromSessionStorage(key) {
	var sec = sessionStorage.getItem(key)
	var pack = decode(sec);
	var value;
	
	if(pack.expire > new Date().getTime()) {
		value = pack.value;
	} else {
		value = '';
		sessionStorage.removeItem(key);
	}
	
	return value;
}

function getFromCookie(key) {
	var item = '';

	if(document.cookie.length > 0) {
		var start = document.cookie.indexOf(key + "=");
		var end;

		if(start != -1) {
			start = start + key.length + 1;
			end = document.cookie.indexOf(";", start);
			if(end == -1) end = document.cookie.length;
			item = document.cookie.substring(start, end);
		}
	}

	return item ? JSON5.stringify(item) : item;
}