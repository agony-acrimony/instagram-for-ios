!function(e){"use strict";var r=[];e.onExecute&&e.onExecute(function(){for(;0<r.length;){var n=r;r=[];for(var t=0;t<n.length;++t)n[t]()}});var t,o,n=null==e.onExecute?function(n){n()}:function(n){r.push(n)};function f(n){return Boolean(n&&void 0!==n.length)}function i(){}function u(n){if(!(this instanceof u))throw new TypeError("Promises must be constructed via new");if("function"!=typeof n)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],v(n,this)}function c(e,r){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,o(function(){var n=1===e._state?r.onFulfilled:r.onRejected;if(null!==n){var t;try{t=n(e._value)}catch(n){return void l(r.promise,n)}a(r.promise,t)}else(1===e._state?a:l)(r.promise,e._value)})):e._deferreds.push(r)}function a(t,n){try{if(n===t)throw new TypeError("A promise cannot be resolved with itself.");if(n&&("object"==typeof n||"function"==typeof n)){var e=n.then;if(n instanceof u)return t._state=3,t._value=n,void s(t);if("function"==typeof e)return void v((r=e,o=n,function(){r.apply(o,arguments)}),t)}t._state=1,t._value=n,s(t)}catch(n){l(t,n)}var r,o}function l(n,t){n._state=2,n._value=t,s(n)}function s(n){2===n._state&&0===n._deferreds.length&&o(function(){n._handled||u._unhandledRejectionFn(n._value)});for(var t=0,e=n._deferreds.length;t<e;t++)c(n,n._deferreds[t]);n._deferreds=null}function h(n,t,e){this.onFulfilled="function"==typeof n?n:null,this.onRejected="function"==typeof t?t:null,this.promise=e}function v(n,t){var e=!1;try{n(function(n){e||(e=!0,a(t,n))},function(n){e||(e=!0,l(t,n))})}catch(n){if(e)return;e=!0,l(t,n)}}t={warn:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];e.warn(n.map(function(n){return n.toString()}).join(" "))}},o=n,u.prototype["catch"]=function(n){return this.then(null,n)},u.prototype.then=function(n,t){var e=new this.constructor(i);return c(this,new h(n,t,e)),e},u.prototype["finally"]=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){return e.reject(n)})})},u.all=function(t){return new u(function(r,o){if(!f(t))return o(new TypeError("Promise.all accepts an array"));var i=Array.prototype.slice.call(t);if(0===i.length)return r([]);var u=i.length;function c(t,n){try{if(n&&("object"==typeof n||"function"==typeof n)){var e=n.then;if("function"==typeof e)return void e.call(n,function(n){c(t,n)},o)}i[t]=n,0==--u&&r(i)}catch(n){o(n)}}for(var n=0;n<i.length;n++)c(n,i[n])})},u.resolve=function(t){return t&&"object"==typeof t&&t.constructor===u?t:new u(function(n){n(t)})},u.reject=function(e){return new u(function(n,t){t(e)})},u.race=function(o){return new u(function(n,t){if(!f(o))return t(new TypeError("Promise.race accepts an array"));for(var e=0,r=o.length;e<r;e++)u.resolve(o[e]).then(n,t)})},u._unhandledRejectionFn=function(n){void 0!==t&&t&&t.warn("Possible Unhandled Promise Rejection:",n)},globalThis["Promise"]=u}(bridge);