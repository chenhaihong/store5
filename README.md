#store5

浏览器端存取数据的简单方案。

##一、引入

###方式1：通过link标签引入

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
import {set, get} from 'store5'; //或者 import * as store5 from 'store5';

// 存取json
store5.set('book', {
	'name': 'Harry Potter',
	'author': 'J. K. Rowling',
	'keyword': ['HarryPotter', 'magic', 'J. K. Rowling']
});
store5.get('book').author; //=> 'J. K. Rowling'
```

##二、使用

###（1）set 方法

1. **set**( key, value, expire, type ) 存储数据
1. **setLocalStorage**( key, value, expire ) 存贮数据到localStorage
1. **setSessionStorage**( key, value, expire ) 存贮数据到sessionStorage
1. **setCookie**( key, value, expire ) 存贮数据到cookie

* `key`：存储的key值。
* `value`：存储的value值。支持常用的数据类型：数字、字符串、数组、json等。如果存储到cookie中，而且value中含有 `;` 字符，建议存储前将value进行md5编码。
* `expire`：数据过期的时间戳，类型为精确到毫秒的时间戳。当取 `0` 时，表示不过期。
* `type`：存储的位置，取值为`0`，`1`或`2`。**默认值为`0`。**
	* `0` => 使用 `localStorage` 存取数据
	* `1` => 使用 `sessionStorage` 存取数据
	* `2` => 使用 `cookie` 存取数据

###（2）get 方法

1. **get**(key, type) 获取数据
1. **getLocalStorage**(key) 获取存储在localStorage的数据
1. **getSessionStorage**(key) 获取存储在sessionStoragee的数据
1. **getCookie**(key) 获取存储在cookie的数据

* `key`：key值。
* `type`：存储的位置，取值为`0`，`1`或`2`。**默认值为`0`。**

###（3）remove 方法

1. **remove**( key, type )  移除指定key、指定类型的数据
1. **removeLocalStorage**( key ) 移除localStorage中指定key的数据
1. **removeSessionStorage**( key ) 移除sessionStoragee中指定key的数据
1. **removeCookie**( key ) 移除cookie中指定key的数据

* `key`：key值。
* `type`：存储的位置，取值为`0`，`1`或`2`。**默认值为`0`。**

###（4）clear 方法

1. **clear**( type ) 清空指定类型的数据
1. **clearLocalStorage**() 清空存储在localStorage的数据
1. **clearSessionStorage**() 清空存储在sessionStoragee的数据
1. **clearCookie**() 清空存储在cookie的数据
 
* `type`：存储的位置，取值为`0`，`1`或`2`。**默认值为`0`。**