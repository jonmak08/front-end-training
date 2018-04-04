var pageComponent=webpackJsonppageComponent([3],{310:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=o(1),s=n(l),u=o(2),c=n(u);o(4),o(5),o(6),o(7),o(8),o(9),o(10),o(11),o(12),o(13),o(14),o(15);var p=o(311),d=n(p),f=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(s.default);c.default.register(f,d.default),t.default=f},311:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.tzxAs=void 0;var l,s=o(1),u=n(s),c=o(2),p=n(c);goog.loadModule(function(e){function t(e,t,n){var l=function(){r("h2");var t=e.page.title;"function"==typeof t?t():null!=t&&i(t),a("h2"),r("p"),i("Now that we have Liferay running, we have to understand how to read the messages output by the console."),a("p"),r("ul"),r("li"),i("Make sure Liferay is loading your "),r("code"),i("portal-ext.properties"),a("code"),i(" file correctly by looking for a line in your console similar to the output below."),s({code:"Loading file:/liferay-portal/portal-ext.properties",mode:"shell"},null,n),a("li"),r("li"),i("Make sure Liferay is loading the correct database as defined in your "),r("code"),i("portal-ext.properties"),a("code"),i(" file by looking for a line in your console similar to the output below."),s({code:"INFO  [localhost-startStop-1][DialectDetector:77] Determine dialect for HSQL Database Engine 2.3\n[localhost-startStop-1][DialectDetector:97] Liferay is configured to use Hypersonic as its database. Do NOT use Hypersonic in production. Hypersonic is an embedded database useful for development and demonstration purposes. The database settings can be changed in portal-ext.properties.",mode:"shell"},null,n),a("li"),r("li"),i("Make sure the version of Liferay that you are using is correct by looking for a line in your console similar to the output below."),s({code:"Starting Liferay Community Edition Portal 7.0.4 GA5 (Wilberforce / Build 7004 / October 23, 2017)",mode:"shell"},null,n),a("li"),r("li"),i("Upon startup, Liferay will automatically create a "),r("em"),i("deploy"),a("em"),i(" folder in your bundle.  When there are files placed in this folder, Liferay will automatically scan and consume any deployable packages. The location of this folder can be found by looking for a line in your console similar to the output below."),s({code:"[localhost-startStop-1][AutoDeployDir:194] Auto deploy scanner started for /liferay-portal/deploy",mode:"shell"},null,n),a("li"),r("li"),i("Make sure Liferay has finished loading and is ready for use by looking for a line in your console similar to the output below."),s({code:"INFO [main] org.apache.catalina.startup.Catalina.start Server startup in NNN ms",mode:"shell"},null,n),a("li"),r("li"),i("Errors in Liferay are usually prefixed with an "),r("strong"),i("ERROR"),a("strong"),i(" warning message.  They can be found by looking for a line in your console similar to the output below."),s({code:"ERROR [Framework Event Dispatcher: Equinox Container: a029ce5e-e1fc-0017-1e71-df5549d2deba][com_liferay_util_taglib:97] FrameworkEvent ERROR\n    org.osgi.framework.BundleException: Could not resolve module: com.liferay.util.taglib [9]_  Unresolved requirement: Import-Package: javax.el_ [Sanitized]\n    at org.eclipse.osgi.container.Module.start(Module.java:429)\n    at org.eclipse.osgi.container.ModuleContainer$ContainerStartLevel.incStartLevel(ModuleContainer.java:1582)\n    at org.eclipse.osgi.container.ModuleContainer$ContainerStartLevel.incStartLevel(ModuleContainer.java:1562)\n    at org.eclipse.osgi.container.ModuleContainer$ContainerStartLevel.doContainerStartLevel(ModuleContainer.java:1533)\n    at org.eclipse.osgi.container.ModuleContainer$ContainerStartLevel.dispatchEvent(ModuleContainer.java:1476)\n    at org.eclipse.osgi.container.ModuleContainer$ContainerStartLevel.dispatchEvent(ModuleContainer.java:1)\n    at org.eclipse.osgi.framework.eventmgr.EventManager.dispatchEvent(EventManager.java:230)\n    at org.eclipse.osgi.framework.eventmgr.EventManager$EventThread.run(EventManager.java:340)",mode:"shell"},null,n),a("li"),a("ul"),r("input",null,null,"type","hidden","value",e.page.title),a("input"),r("input",null,null,"type","hidden","value",e.site.title),a("input")};u(o.$$assignDefaults({content:l},e),null,n)}goog.module("tzxAs.incrementaldom");var o=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var n=goog.require("incrementaldom"),r=n.elementOpen,a=n.elementClose,i=(n.elementVoid,n.elementOpenStart,n.elementOpenEnd,n.text),s=(n.attr,p.default.getTemplate("ElectricCode.incrementaldom","render")),u=p.default.getTemplate("tutorial.incrementaldom","render");return e.render=t,goog.DEBUG&&(t.soyTemplateName="tzxAs.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=l=e,e});var d=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(u.default);p.default.register(d,l),t.tzxAs=d,t.templates=l,t.default=l}},[310]);