#store5

An easier way to store data in the browser. LocalStorage, sessionStorage, cookie supported.

* [中文文档](./README_CN.md)

## 1. Including store5
### Script tag
```html
<script src="dist/store5.min.js"></script>
<script>
  // set/get string
  store5.set('name', 'Terry Chan');
  store5.get('name'); //=> 'Terry Chan'
</script>
```
### cmd/amd
```javascript
define(['store5'], function(store5) {
  // set/get array
  store5.set('book', ['HarryPotter', 'magic', 'J. K. Rowling']);
  store5.get('book')[0]; //=> 'HarryPotter'
});
```

### webpack

Run `npm install --save store5` or `yarn add store5` to install store5.

```javascript
import {set, get, remove} from 'store5'; 
//or `import store5 from 'store5';`

// set/get json
set('book', {
  'name': 'Harry Potter',
  'author': 'J. K. Rowling',
  'keyword': ['HarryPotter', 'magic', 'J. K. Rowling']
});
get('book').author; //=> 'J. K. Rowling'
remove('book');
```

## 2 Using store5
### (1) set

* **set( key, value[, expire, type] )**
  * **key**：Key.
  * **value**：Value. Number, string, array, json... supported.
  * **expire**：Expired timestamp(millisecond). `0`(not expired) as default.
  * **type**：`0`(default), `1` or `2`. 
      * `0` => Use `localStorage` to store data.
      * `1` => `sessionStorage`.
      * `2` => `cookie`.
* **setLocalStorage( key, value[, expire] )**
* **setSessionStorage( key, value[, expire] )**
* **setCookie( key, value[, expire] )**

### (2) get

* **get(key[, type])** Get a piece of data.
* **getLocalStorage(key)**
* **getSessionStorage(key)**
* **getCookie(key)**

### (3) remove

* **remove( key[, type] )** Remove the data of specified key and type.
* **removeLocalStorage( key )**
* **removeSessionStorage( key )**
* **removeCookie( key )**

### (4) clear

* **clear( [type] )** Empty the specified type of data.
* **clearLocalStorage()**
* **clearSessionStorage()**
* **clearCookie()**
