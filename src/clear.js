export function set(name, value) {
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