var MultipeerModule=function(e,t,n){"use strict";function r(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;0<=s;s--)(o=e[s])&&(a=(i<3?o(a):3<i?o(t,n,a):o(t,n))||a);return 3<i&&a&&Object.defineProperty(t,n,a),a}var o=t.getNativeModule("Multipeer"),i=(a.prototype.sendMessage=function(e){return n.eventSourceToPromise(o.sendMessage(this.name,JSON.stringify(e)))},Object.defineProperty(a.prototype,"onMessage",{get:function(){return null==this.stream&&(this.stream=new n.EventSource(o.getMessageStream(this.name))),this.stream},enumerable:!0,configurable:!0}),r([t.nonenumerable],a.prototype,"name",void 0),r([t.nonenumerable],a.prototype,"stream",void 0),a);function a(e){this.stream=void 0,this.name=e}var s=(l.prototype.getMessageChannel=function(e){return void 0===e&&(e="GLOBAL"),null==this.channels[e]&&(this.channels[e]=new i(e)),this.channels[e]},r([t.nonenumerable],l.prototype,"channels",void 0),l=r([t.scriptingModule("Multipeer"),t.availableIn(t.DocumentType.Any),t.introducedBy(264862003),t.capability("multipeer_messaging")],l));function l(){this.channels={}}return e.MessageChannel=i,e.MultipeerModule=s,e}({},arfx,ReactiveModule);