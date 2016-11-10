export function clear(type = 0) {
	switch(type) {
		case 0:
			clearLocalStorage();
			break;
		case 1:
			clearSessionStorage();
			break;
		case 2:
			clearCookie();
			break;
	};
}

function clearLocalStorage() {
	localStorage.clear();
}

function clearSessionStorage() {
	sessionStorage.clear();
}

function clearCookie() {
	var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
	if(keys) {
		for(var i = keys.length; i--;)
			document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString();
	}
}