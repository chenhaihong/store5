import codec from './codec.js';
export function remove(key, type = 0) {
    switch (type) {
        case 0:
            removeLocalStorage(key);
            break;
        case 1:
            removeSessionStorage(key);
            break;
        case 2:
            removeCookie(key);
            break;
    }
}

export function removeLocalStorage(key) {
    if (codec.supports_html5_storage()){
        localStorage.removeItem(key);
    }else{
		removeCookie(key);
    }
}

export function removeSessionStorage(key) {
    sessionStorage.removeItem(key);
}

export function removeCookie(key) {
    document.cookie = key + "=''; expires=" + new Date(0).toUTCString();
}