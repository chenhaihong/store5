#store5#

浏览器端存取数据的简单方案。

##一、引入##

**方式一：通过link标签引入**
```html
<script src="dist/store5.min.js"></script>
<script>
	store5.set('name', 'Terry Chan');
	store5.get('name'); //=> 'Terry Chan'
</script>
```

**方式二：通过import引入**
```javascript
import store5 from 'store5';
store5.set('book', {
	'name': 'Harry Potter',
	'author': 'J. K. Rowling',
	'keyword': ['harrypotter', 'magic', 'J. K. Rowling']
});
store5.get('book').author; //=> 'J. K. Rowling'
```

**方式三：**
```javascript
var store5 = require('store5');


```

##二、使用##

######set(key, value, expire, type)#####

#####get(key, type)#####

#####remove(key, type)#####

#####clear(type)#####