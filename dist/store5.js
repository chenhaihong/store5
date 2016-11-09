(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _store = __webpack_require__(1);

	var store5 = _interopRequireWildcard(_store);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	module.exports.store5 = store5;

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.setItem = setItem;
	exports.getItem = getItem;
	exports.removeItem = removeItem;
	exports.clear = clear;
	function setItem(name, value) {
	    value = encodeURIComponent(value);
	    if (window.localStorage) {
	        // use localStorage
	        localStorage.setItem(name, value);
	    } else {
	        // use cookies
	        var c_name = name;
	        var exdate = new Date();
	        var days = 10;
	        exdate.setDate(exdate.getDate() + days);
	        document.cookie = c_name + "=" + value + ";expires=" + exdate.toUTCString();
	    }
	}
	function getItem(name) {
	    var item = null;
	    if (window.localStorage) {
	        // use localStorage
	        item = localStorage.getItem(name);
	    } else {
	        // use cookies
	        if (document.cookie.length > 0) {
	            var c_name = name;
	            var c_start = document.cookie.indexOf(c_name + "=");
	            var c_end;

	            if (c_start != -1) {
	                c_start = c_start + c_name.length + 1;
	                c_end = document.cookie.indexOf(";", c_start);
	                if (c_end == -1) c_end = document.cookie.length;
	                item = document.cookie.substring(c_start, c_end);
	            }
	        }
	    }
	    return item ? decodeURIComponent(item) : item;
	}
	function removeItem(name) {
	    if (window.localStorage) {
	        // use localStorage
	        localStorage.removeItem(name);
	    } else {
	        // use cookies
	        document.cookie = name + "=''; expires=" + new Date(0).toUTCString();
	    }
	}
	function clear() {
	    if (window.localStorage) {
	        // use localStorage
	        localStorage.clear();
	    } else {
	        // use cookies
	        var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
	        if (keys) {
	            for (var i = keys.length; i--;) {
	                document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString();
	            }
	        }
	    }
	}

/***/ }
/******/ ])
});
;