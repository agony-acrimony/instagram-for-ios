var FontsModule=function(e,n,t,r){"use strict";function o(e,n,t,r){var o,i=arguments.length,l=i<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,n,t,r);else for(var u=e.length-1;0<=u;u--)(o=e[u])&&(l=(i<3?o(l):3<i?o(n,t,l):o(n,t))||l);return 3<i&&l&&Object.defineProperty(n,t,l),l}var i=(l.prototype.modelId=function(){return this._ref.id.value},Object.defineProperty(l.prototype,"identifier",{get:function(){return this._ref.constants.identifier},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"name",{get:function(){return this._ref.constants.name},enumerable:!0,configurable:!0}),o([n.internal,n.nonenumerable],l.prototype,"_ref",void 0),o([n.internal,n.nonenumerable],l.prototype,"modelId",null),o([n.internal,n.nonenumerable],l.prototype,"identifier",null),l);function l(e){this._ref=e}function u(e){return e.replace(/\\/g,"\\\\").replace(/\*/g,"\\*")}function d(e){return new i(e)}function f(e,n){return t.model_search.findByName(new t.model.NodeId(r.fontsChildrenNodeId),e,!1,n).map(d)}var a=(c.prototype.getAll=function(){return this.findUsingPattern("*")},c.prototype.findFirst=function(e){return this.findUsingPattern(u(e),{limit:1}).then(function(e){return 0==e.length?null:e[0]})},c.prototype.get=function(e){var n=f(u(e),1);if(0==n.length)throw new Error("Font not found: "+e);return n[0]},c.prototype.findUsingPattern=function(e,n){return Promise.resolve(f(e,null==n?void 0:n.limit))},o([n.deprecatedAndRemovedBy(3623664e3,3756104542,"Please use `findUsingPattern`, `findFirst` or `getAll` instead")],c.prototype,"get",null),c=o([n.scriptingModule("Fonts"),n.availableIn(n.DocumentType.Any)],c));function c(){}return e.FontId=i,e.FontsModule=a,e.getFontIdById=function(e){var n=t.model_search.findByIdentifier(new t.model.NodeId(r.fontsChildrenNodeId),e,!1,1);return 1===n.length?d(n[0]):null},e}({},arfx,CoreModule,params);