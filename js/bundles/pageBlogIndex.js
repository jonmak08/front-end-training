var pageComponent=webpackJsonppageComponent([34],{266:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),s=o(i),u=n(2),c=o(u);n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(13),n(14),n(15);var p=n(267),f=o(p),d=function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t}(s.default);c.default.register(d,f.default),t.default=d},267:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.pageBlogIndex=void 0;var i,s=n(1),u=o(s),c=n(2),p=o(c);goog.loadModule(function(e){function t(e,t,r){e=e||{};var i=function(){l("div",null,null,"class","blog"),n(e,null,r),a("div")};u(o.$$assignDefaults({content:i},e),null,r)}function n(e,t,n){l("div",null,null,"class","posts-list posts-list-all"),l("div",null,null,"class","container");for(var o=e.site.index.children.blog.childIds,r=o.length,i=0;i<r;i++){var u=o[i],c=e.site.index.children.blog.children[u];l("article",null,null,"class","post-item container-blog"),l("a",null,null,"class","post-item__link","href",c.url),l("small"),s("By ");var p=c.author;"function"==typeof p?p():null!=p&&s(p),s(" "),l("span"),s("| ");var f=c.date;"function"==typeof f?f():null!=f&&s(f),a("span"),a("small"),l("h4",null,null,"class","post-item__title");var d=c.title;"function"==typeof d?d():null!=d&&s(d),a("h4"),l("p");var g=c.description;"function"==typeof g?g():null!=g&&s(g),a("p"),a("a"),a("article")}a("div"),a("div")}goog.module("pageBlogIndex.incrementaldom");var o=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var r=goog.require("incrementaldom"),l=r.elementOpen,a=r.elementClose,s=(r.elementVoid,r.elementOpenStart,r.elementOpenEnd,r.text),u=(r.attr,p.default.getTemplate("main.incrementaldom","render"));return e.render=t,goog.DEBUG&&(t.soyTemplateName="pageBlogIndex.render"),e.allPosts=n,goog.DEBUG&&(n.soyTemplateName="pageBlogIndex.allPosts"),e.render.params=[],e.render.types={},e.allPosts.params=["site"],e.allPosts.types={site:"?"},e.templates=i=e,e});var f=function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t}(u.default);p.default.register(f,i),t.pageBlogIndex=f,t.templates=i,t.default=i}},[266]);