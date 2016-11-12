#store5

浏览器端存取数据的简单方案。

##一、引入

###方式1：通过 link 标签引入

```html
<script src="dist/store5.min.js"></script>
<script>
  // 存取字符串
  store5.set('name', 'Terry Chan');
  store5.get('name'); //=> 'Terry Chan'
</script>
```

###方式2：通过 require 引入

```javascript
var store5 = require('store5');

// 存取数组
store5.set('book', ['HarryPotter', 'magic', 'J. K. Rowling']);
store5.get('book')[0]; //=> 'HarryPotter'
```

###方式3：通过 import 引入

执行 `npm install store5 --save` 或 `yarn add store5` 安装，即可使用。

```javascript
import {set, get, remove} from 'store5'; //或者 import * as store5 from 'store5';

// 存取json
set('book', {
  'name': 'Harry Potter',
  'author': 'J. K. Rowling',
  'keyword': ['HarryPotter', 'magic', 'J. K. Rowling']
});
get('book').author; //=> 'J. K. Rowling'
remove('book');
```

##二、使用

###（1）set 方法

* **set( key, value, expire, type )** 存储数据
  * **key**：存储的key值。
  * **value**：存储的value值。支持常用的数据类型：数字、字符串、数组、json等。如果存数据到cookie中，而且数据中含有 `;` 字符，建议存储前先将数据进行md5编码。
  * **expire**：数据过期时间。类型为精确到毫秒的时间戳。当取 `0` 时，表示不过期。
  * **type**：存储数据的位置。取值区间为`0`，`1`或`2`。**默认值为`0`。**
      * `1` => 使用 `sessionStorage` 存储数据
      * `0` => 使用 `localStorage` 存储数据
      * `2` => 使用 `cookie` 存储数据
* **setLocalStorage( key, value, expire )** 存贮数据到localStorage
* **setSessionStorage( key, value, expire )** 存贮数据到sessionStorage
* **setCookie( key, value, expire )** 存贮数据到cookie


###（2）get 方法

* **get(key, type)** 获取数据
* **getLocalStorage(key)** 获取存储在localStorage的数据
* **getSessionStorage(key)** 获取存储在sessionStoragee的数据
* **getCookie(key)** 获取存储在cookie的数据


###（3）remove 方法

* **remove( key, type )** 移除指定key、指定类型的数据
* **removeLocalStorage( key )** 移除localStorage中指定key的数据
* **removeSessionStorage( key )** 移除sessionStoragee中指定key的数据
* **removeCookie( key )** 移除cookie中指定key的数据

###（4）clear 方法

* **clear( type )** 清空指定类型的数据
* **clearLocalStorage()** 清空存储在localStorage的数据
* **clearSessionStorage()** 清空存储在sessionStoragee的数据
* **clearCookie()** 清空存储在cookie的数据

