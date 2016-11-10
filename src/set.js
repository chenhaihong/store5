import JSON5 from 'json5';

export function set(key, value, expire = 0, type = 0) {
	switch(type) {
		case 0:
			setLocalStorage(key, value, expire);
			break;
		case 1:
			setSessionStorage(key, value, expire);
			break;
		case 2:
			setCookie(key, value, expire);
			break;
	};
}

export function setLocalStorage(key, value, expire = 0) {
	var sec = encode(value, expire);
	localStorage.setItem(key, sec);
}

export function setSessionStorage(key, value, expire = 0) {
	var sec = encode(value, expire);
	sessionStorage.setItem(key, sec);
}

export function setCookie(key, value, expire = 0) {
	var d;
	if(expire == 0) {
		d = new Date().getTime() + 31536000000000; //1000年过期时间（1000年 * 365天 * 24小时 * 3600秒 * 1000毫秒 = 31536000000000） 
		d = new Date(d);
	} else {
		d = new Date(expire);
	}

	var sec = sEncode(value);
	document.cookie = key + "=" + sec + ";expires=" + d.toUTCString();
}

function encode(value, expire) {
	var pack = {
		"value": value,
		"expire": expire,
	};
	var sec = JSON5.stringify(pack);
	return sec;
}

function sEncode(value) {
	var pack = {
		"value": value
	};
	var sec = JSON5.stringify(pack);
	return sec;
}