var ReactiveUtilExtension=function(t,e,i){"use strict";var o=e.getNativeModule("VisualScripting");function r(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return i.signal(o.invokeComponentAction(t,0,e.map(i.ref),{}))}var n=(c.prototype.pack2=function(t,e){return r("builtin.2DPointPack",t,e)},c.prototype.pack3=function(t,e,n){return r("builtin.pointPack",t,e,n)},c.prototype.pack4=function(t,e,n,i){return r("builtin.vec4Pack",t,e,n,i)},c=function(t,e,n,i){var o,r=arguments.length,c=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;0<=a;a--)(o=t[a])&&(c=(r<3?o(c):3<r?o(e,n,c):o(e,n))||c);return 3<r&&c&&Object.defineProperty(e,n,c),c}([e.extension(i.ReactiveModule)],c));function c(){}return t.ReactiveUtilExtension=n,t}({},arfx,ReactiveModule);