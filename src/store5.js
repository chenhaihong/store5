export function setItem(name, value) {
    value = encodeURIComponent(value);
    if(window.localStorage) { // use localStorage
        localStorage.setItem(name, value);
    } else { // use cookies
        var c_name = name;
        var exdate = new Date();
        var days = 10;
        exdate.setDate(exdate.getDate() + days);
        document.cookie = c_name + "=" + value + ";expires=" + exdate.toUTCString();
    }
}
export function getItem(name) {
    var item = null;
    if(window.localStorage) { // use localStorage
        item = localStorage.getItem(name);
    } else { // use cookies
        if(document.cookie.length > 0) {
            var c_name = name;
            var c_start = document.cookie.indexOf(c_name + "=");
            var c_end;
            
            if(c_start != -1) {
                c_start = c_start + c_name.length + 1;
                c_end = document.cookie.indexOf(";", c_start);
                if(c_end == -1) c_end = document.cookie.length;
                item = document.cookie.substring(c_start, c_end);
            }
        }
    }
    return item ? decodeURIComponent(item) : item;
}
export function removeItem(name) {
    if(window.localStorage) { // use localStorage
        localStorage.removeItem(name);
    } else { // use cookies
        document.cookie = name + "=''; expires=" + new Date(0).toUTCString();
    }
}
export function clear() {
    if(window.localStorage) { // use localStorage
        localStorage.clear();
    } else { // use cookies
        var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
        if(keys) {
            for(var i = keys.length; i--;)
                document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString();
        }
    }
}
export default {
    setItem: setItem,
    getItem: getItem,
    removeItem: removeItem,
    clear: clear,
};