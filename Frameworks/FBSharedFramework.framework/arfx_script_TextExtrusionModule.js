var TextExtrusionModule=function(e,t,r,n,o,i){"use strict";var l=function(e,t){return(l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function a(e,t,r,n){var o,i=arguments.length,l=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;0<=a;a--)(o=e[a])&&(l=(i<3?o(l):3<i?o(t,r,l):o(t,r))||l);return 3<i&&l&&Object.defineProperty(t,r,l),l}var f,u,c,p=(f=n.SceneObjectBase,l(u=d,c=f),u.prototype=null===c?Object.create(c):(s.prototype=c.prototype,new s),Object.defineProperty(d.prototype,"font",{set:function(e){var t;this._modelRef().setStringProp("font",null!=(t=null==e?void 0:e.identifier)?t:"")},enumerable:!0,configurable:!0}),d.prototype.getFont=function(){return this._modelRef().getString("font").then(r.getFontIdById)},Object.defineProperty(d.prototype,"text",{get:function(){return this._modelRef().getStringSignal("text")},set:function(e){this._modelRef().setStringProp("text",e)},enumerable:!0,configurable:!0}),Object.defineProperty(d.prototype,"depth",{get:function(){return i.fromMeters(this._modelRef().getScalarSignal("depth"))},set:function(e){this._modelRef().setScalarProp("depth",i.toMeters(e))},enumerable:!0,configurable:!0}),Object.defineProperty(d.prototype,"letterSpacing",{get:function(){return i.fromMeters(this._modelRef().getScalarSignal("letterSpacing"))},set:function(e){this._modelRef().setScalarProp("letterSpacing",i.toMeters(e))},enumerable:!0,configurable:!0}),Object.defineProperty(d.prototype,"lineSpacing",{get:function(){return i.fromMeters(this._modelRef().getScalarSignal("lineSpacing"))},set:function(e){this._modelRef().setScalarProp("lineSpacing",i.toMeters(e))},enumerable:!0,configurable:!0}),Object.defineProperty(d.prototype,"faceMaterial",{set:function(e){this.frontMaterial=e,this.backMaterial=e},enumerable:!0,configurable:!0}),Object.defineProperty(d.prototype,"frontMaterial",{set:function(e){var t;this._modelRef().setStringProp("frontMaterialIdentifier",null!=(t=null==e?void 0:e.identifier)?t:"")},enumerable:!0,configurable:!0}),d.prototype.getFrontMaterial=function(){return this._modelRef().getString("frontMaterialIdentifier").then(function(e){return e?o.getMaterialByIdFuture(e):Promise.resolve(null)})},Object.defineProperty(d.prototype,"backMaterial",{set:function(e){var t;this._modelRef().setStringProp("backMaterialIdentifier",null!=(t=null==e?void 0:e.identifier)?t:"")},enumerable:!0,configurable:!0}),d.prototype.getBackMaterial=function(){return this._modelRef().getString("backMaterialIdentifier").then(function(e){return e?o.getMaterialByIdFuture(e):Promise.resolve(null)})},Object.defineProperty(d.prototype,"sideMaterial",{set:function(e){var t;this._modelRef().setStringProp("sideMaterialIdentifier",null!=(t=null==e?void 0:e.identifier)?t:"")},enumerable:!0,configurable:!0}),d.prototype.getSideMaterial=function(){return this._modelRef().getString("sideMaterialIdentifier").then(function(e){return e?o.getMaterialByIdFuture(e):Promise.resolve(null)})},a([t.deprecatedAndRemovedBy(3623664e3,3756104542,"Please use `frontMaterial` and `backMaterial` instead")],d.prototype,"faceMaterial",null),d=a([n.sceneObject("textExtrusion")],d));function s(){this.constructor=u}function d(){return null!==f&&f.apply(this,arguments)||this}return e.TextExtrusion=p,e}({},arfx,FontsModule,SceneModule,MaterialsModule,UnitsModule);