var Remote3DModelsModule=function(e,t,o,n){"use strict";var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)};function i(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var f=e.length-1;0<=f;f--)(r=e[f])&&(c=(i<3?r(c):3<i?r(t,o,c):r(t,o))||c);return 3<i&&c&&Object.defineProperty(t,o,c),c}var c,f,l,u=(c=n.SceneObjectBase,r(f=a,l=c),f.prototype=null===l?Object.create(l):(d.prototype=l.prototype,new d),a=i([n.sceneObject("remoteSceneObject"),t.capability("remote3DModels"),t.extensible],a));function d(){this.constructor=f}function a(){return null!==c&&c.apply(this,arguments)||this}var s=(Object.defineProperty(p.prototype,"remoteModelIdentifier",{get:function(){var e;return t.getModule("Reactive").val(null!=(e=this._ref.getStringSync("remoteModelIdentifier"))?e:"")},set:function(e){this._ref.setStringProp("remoteModelIdentifier",e)},enumerable:!0,configurable:!0}),i([t.nonenumerable],p.prototype,"_ref",void 0),p=i([t.extension(u),t.removedBy(1320537066)],p));function p(e){this._ref=e._modelRef()}var y=(Object.defineProperty(m.prototype,"remoteModelIdentifier",{get:function(){return this._ref.getStringSignal("remoteModelIdentifier")},set:function(e){this._ref.setStringProp("remoteModelIdentifier",e)},enumerable:!0,configurable:!0}),i([t.nonenumerable],m.prototype,"_ref",void 0),m=i([t.extension(u),t.introducedBy(1320537066)],m));function m(e){this._ref=e._modelRef()}var b=t.getNativeModule("Remote3DModels"),M=(v.prototype.fetch=function(e){return o.eventSourceToPromise(b.fetch(e))},v=i([t.scriptingModule("Remote3DModels"),t.capability("remote3DModels"),t.availableIn(t.DocumentType.Effect)],v));function v(){}return e.Remote3DModelsModule=M,e.RemoteModelIdentifierAsyncExtension=y,e.RemoteModelIdentifierSyncExtension=s,e.RemoteSceneObject=u,e}({},arfx,ReactiveModule,SceneModule);