export function clear(type = 0) {
  switch (type) {
    case 0:
      clearLocalStorage();
      break;
    case 1:
      clearSessionStorage();
      break;
    case 2:
      clearCookie();
      break;
  }
}

export function clearLocalStorage() {
  localStorage.clear();
}

export function clearSessionStorage() {
  sessionStorage.clear();
}

export function clearCookie() {
  let keys = document.cookie.match(/[^ =;]+(?=\=)/g);
  if (keys) {
    for (let i = keys.length; i--; ) document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString();
  }
}
