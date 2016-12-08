import codec from './codec.js';

export function set(key, value, expire = 0, type = 0) {
    switch (type) {
        case 0:
            setLocalStorage(key, value, expire);
            break;
        case 1:
            setSessionStorage(key, value, expire);
            break;
        case 2:
            setCookie(key, value, expire);
            break;
    }
}

export function setLocalStorage(key, value, expire = 0) {
    let pack = codec.pack(value, expire);
    let sec = codec.encode(pack);

    localStorage.setItem(key, sec);
}

export function setSessionStorage(key, value, expire = 0) {
    let pack = codec.pack(value, expire);
    let sec = codec.encode(pack);

    sessionStorage.setItem(key, sec);
}

export function setCookie(key, value, expire = 0) {
    let d;
    if (expire == 0) {
        d = new Date().getTime() + 31536000000000; //1000年过期时间（1000年 * 365天 * 24小时 * 3600秒 * 1000毫秒 = 31536000000000）
        d = new Date(d);
    } else {
        d = new Date(expire);
    }

    let pack = codec.pack(value);
    let sec = codec.encode(pack);

    document.cookie = key + "=" + sec + ";expires=" + d.toUTCString();
}

