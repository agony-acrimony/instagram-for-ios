var WeatherModule=function(e,t,r){"use strict";var o=t.getNativeModule("Weather"),n=(c.prototype.getWeather=function(){return r.eventSourceToPromise(o.getWeather())},c=function(e,t,r,o){var n,c=arguments.length,a=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var u=e.length-1;0<=u;u--)(n=e[u])&&(a=(c<3?n(a):3<c?n(t,r,a):n(t,r))||a);return 3<c&&a&&Object.defineProperty(t,r,a),a}([t.scriptingModule("Weather"),t.availableIn(t.DocumentType.Any)],c));function c(){}return e.WeatherModule=n,e}({},arfx,ReactiveModule);