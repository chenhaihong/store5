import JSON5 from 'json5';

export function get(key, type = 0) {
	var value;
	switch(type) {
		case 0:
			value = getLocalStorage(key);
			break;
		case 1:
			value = getSessionStorage(key);
			break;
		case 2:
			value = getCookie(key);
			break;
	};
	return value;
}

export function getLocalStorage(key) {
	var sec = localStorage.getItem(key);
	var value;
	if(sec) {
		var pack = decode(sec);

		if(pack.expire > new Date().getTime() || pack.expire == 0) {
			value = pack.value;
		} else {
			value = null;
			localStorage.removeItem(key);
		}
	} else {
		value = sec;
	}

	return value;
}

export function getSessionStorage(key) {
	var sec = sessionStorage.getItem(key);
	var value;
	if(sec) {
		var pack = decode(sec);

		if(pack.expire > new Date().getTime() || pack.expire == 0) {
			value = pack.value;
		} else {
			value = null;
			sessionStorage.removeItem(key);
		}
	} else {
		value = sec;
	}

	return value;
}

export function getCookie(key) {
	var sec = null;

	if(document.cookie.length > 0) {
		var start = document.cookie.indexOf(key + "=");
		var end;

		if(start != -1) {
			start = start + key.length + 1;
			//因为是根据距离“%key%=”最近的第一个“;”来切割，
			//所以建议在存储前先将value进行base64编码。
			end = document.cookie.indexOf(";", start);
			if(end == -1) end = document.cookie.length;
			sec = document.cookie.substring(start, end);
		}
	}

	return sec ? sDecode(sec) : sec;
}

function decode(sec) {
	var pack = JSON5.parse(sec);
	return pack;
}

function sDecode(sec) {
	var pack = JSON5.parse(sec);
	var value = pack.value;
	return value;
}