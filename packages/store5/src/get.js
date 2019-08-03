import codec from './codec.js';

export function get(key, type = 0) {
  let value;
  switch (type) {
    case 0:
      value = getLocalStorage(key);
      break;
    case 1:
      value = getSessionStorage(key);
      break;
    case 2:
      value = getCookie(key);
      break;
  }
  return value;
}

export function getLocalStorage(key) {
  let sec = localStorage.getItem(key);
  let value;
  if (sec) {
    let pack = codec.decode(sec);

    if (pack.expire > new Date().getTime() || pack.expire == 0) {
      //有效，未过期
      value = pack.value;
    } else {
      //过期
      value = null;
      localStorage.removeItem(key);
    }
  } else {
    value = sec; //赋值null等不能转换为true的值。
  }

  return value;
}

export function getSessionStorage(key) {
  let sec = sessionStorage.getItem(key);
  let value;
  if (sec) {
    let pack = codec.decode(sec);

    if (pack.expire > new Date().getTime() || pack.expire == 0) {
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
  let sec = null;

  if (document.cookie.length > 0) {
    let start = document.cookie.indexOf(key + '=');
    let end;

    if (start != -1) {
      start = start + key.length + 1;
      //因为是根据距离“%key%=”最近的第一个“;”来切割，
      //所以建议在存储前先将value进行base64编码，
      //或者，把“;”替换成其他字符。
      end = document.cookie.indexOf(';', start);
      if (end == -1) end = document.cookie.length;
      sec = document.cookie.substring(start, end);
    }
  }

  return sec ? codec.decode(sec).value : sec;
}
