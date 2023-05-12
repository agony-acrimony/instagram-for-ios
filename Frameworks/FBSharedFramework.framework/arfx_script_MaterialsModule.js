var MaterialsModule=function(e,a,l,r,n,o){"use strict";var t,i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function s(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}function u(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;0<=l;l--)(o=e[l])&&(a=(i<3?o(a):3<i?o(t,r,a):o(t,r))||a);return 3<i&&a&&Object.defineProperty(t,r,a),a}(t=e.CullMode||(e.CullMode={}))["BACK"]="BACK",t["FRONT"]="FRONT";var f,c={BACK:0,FRONT:1},p={0:e.CullMode.BACK,1:e.CullMode.FRONT};(f=e.BlendMode||(e.BlendMode={}))["ADD"]="ADD",f["SUBTRACT"]="SUBTRACT",f["MULTIPLY"]="MULTIPLY",f["SCREEN"]="SCREEN",f["REPLACE"]="REPLACE",f["ALPHA"]="ALPHA",f["ASSOCIATIVE_ALPHA"]="ASSOCIATIVE_ALPHA";var d,g,m={ADD:0,SUBTRACT:1,MULTIPLY:2,SCREEN:3,REPLACE:4,ALPHA:5,ASSOCIATIVE_ALPHA:6},y={0:e.BlendMode.ADD,1:e.BlendMode.SUBTRACT,2:e.BlendMode.MULTIPLY,3:e.BlendMode.SCREEN,4:e.BlendMode.REPLACE,5:e.BlendMode.ALPHA,6:e.BlendMode.ASSOCIATIVE_ALPHA};(g=d=d||{})["L_I_N_E_A_R"]="L_I_N_E_A_R",g["S_R_G_B"]="S_R_G_B";d.L_I_N_E_A_R,d.S_R_G_B;var h=l.getNativeModule("Materials"),b="Pre/Post Processors are deprecated and are no longer supported.";function P(){return Promise.reject(b)}var _=(v.prototype.floatParameter=function(e){throw b},v.prototype.getFloatParameter=function(e){return P()},v.prototype.getFloatParameterOrFallback=function(e,t){return"number"==typeof t?r.getReactiveModule().val(t):t},v.prototype.setFloatParameter=function(e,t){return P()},v.prototype.boolParameter=function(e){throw b},v.prototype.getBoolParameter=function(e){return P()},v.prototype.getBoolParameterOrFallback=function(e,t){return"boolean"==typeof t?l.getModule("Reactive").val(t):t},v.prototype.setBoolParameter=function(e,t){return P()},u([l.deprecatedAndRemovedBy(3623664e3,3756104542,"Use `getFloatParameter(paramName: string)` instead!")],v.prototype,"floatParameter",null),u([l.deprecatedAndRemovedBy(3623664e3,3756104542,"Use `getBoolParameter(paramName: string)` instead!")],v.prototype,"boolParameter",null),v=u([l.capability("shaders")],v));function v(){}var T=(S.prototype.equals=function(e){return this._ref.id.equals(e._ref.id)&&this._prop==e._prop},S.prototype.bind=function(e){if(!(e instanceof S))throw"Invalid argument, expected TextureTransformSignal";this.equals(e)||(this.offsetU=e.offsetU,this.offsetV=e.offsetV,this.scaleU=e.scaleU,this.scaleV=e.scaleV,this.rotation=e.rotation)},Object.defineProperty(S.prototype,"offsetU",{get:function(){return this._ref.getScalarSignal(this._prop+"/offsetU")},set:function(e){this._ref.setScalarProp(this._prop+"/offsetU",e)},enumerable:!0,configurable:!0}),Object.defineProperty(S.prototype,"offsetV",{get:function(){return this._ref.getScalarSignal(this._prop+"/offsetV")},set:function(e){this._ref.setScalarProp(this._prop+"/offsetV",e)},enumerable:!0,configurable:!0}),Object.defineProperty(S.prototype,"scaleU",{get:function(){return this._ref.getScalarSignal(this._prop+"/scaleU")},set:function(e){this._ref.setScalarProp(this._prop+"/scaleU",e)},enumerable:!0,configurable:!0}),Object.defineProperty(S.prototype,"scaleV",{get:function(){return this._ref.getScalarSignal(this._prop+"/scaleV")},set:function(e){this._ref.setScalarProp(this._prop+"/scaleV",e)},enumerable:!0,configurable:!0}),Object.defineProperty(S.prototype,"rotation",{get:function(){return this._ref.getScalarSignal(this._prop+"/rotation")},set:function(e){this._ref.setScalarProp(this._prop+"/rotation",e)},enumerable:!0,configurable:!0}),u([l.internal],S.prototype,"equals",null),u([l.internal],S.prototype,"bind",null),S);function S(e,t){this._ref=e,this._prop=t}var M=l.getNativeModule("Materials");function B(e,t,r){e.setStringProp(t,r)}function x(e,t){var r=e.getStringSync(t);return null==r?null:o.getTextureById(r)}function C(e,t){return e.getString(t).then(o.getTextureById)}function I(e,t){if(l.version.hasChange(3756104542))throw'Property "'+e+'" is write-only. Use "'+t+"() method instead.";l.deprecationLogger(3623664e3,3756104542,"Material."+e+" API is deprecated. Use "+t+"() instead!").logOnce()}var O=(A.prototype.modelId=function(){return this._ref.id.value},A.prototype.getColorProp=function(e){return r.rgbaFromBgra(this._ref.getScalarSignal(e))},A.prototype.setColorProp=function(e,t){this._ref.setColorProp(e,t)},Object.defineProperty(A.prototype,"name",{get:function(){return this._ref.constants.name},enumerable:!0,configurable:!0}),Object.defineProperty(A.prototype,"identifier",{get:function(){return this._ref.constants.identifier},enumerable:!0,configurable:!0}),Object.defineProperty(A.prototype,"diffuse",{get:function(){return I("diffuse","getDiffuse"),x(this._ref,"diffuseTextureIdentifier")},set:function(e){B(this._ref,"diffuseTextureIdentifier",e?e.identifier:"")},enumerable:!0,configurable:!0}),A.prototype.getDiffuse=function(){return C(this._ref,"diffuseTextureIdentifier")},Object.defineProperty(A.prototype,"diffuseTextureTransform",{get:function(){return new T(this._ref,"diffuseTextureTransform")},set:function(e){new T(this._ref,"diffuseTextureTransform").bind(e)},enumerable:!0,configurable:!0}),Object.defineProperty(A.prototype,"doubleSided",{get:function(){return this._ref.getBoolSignal("doubleSided")},set:function(e){this._ref.setBoolProp("doubleSided",e)},enumerable:!0,configurable:!0}),Object.defineProperty(A.prototype,"cullMode",{get:function(){return a.mapScalarToString(this._ref.getScalarSignal("cullMode"),p,e.CullMode.BACK)},set:function(e){this._ref.setScalarProp("cullMode",a.mapStringToScalar(e,c,0))},enumerable:!0,configurable:!0}),Object.defineProperty(A.prototype,"opacity",{get:function(){return this._ref.getScalarSignal("opacity")},set:function(e){this._ref.setScalarProp("opacity",e)},enumerable:!0,configurable:!0}),Object.defineProperty(A.prototype,"alphaCutoff",{get:function(){return this._ref.getScalarSignal("alphaTestThreshold")},set:function(e){this._ref.setScalarProp("alphaTestThreshold",e)},enumerable:!0,configurable:!0}),u([l.internal,l.nonenumerable],A.prototype,"_ref",void 0),u([l.internal],A.prototype,"modelId",null),u([l.internal],A.prototype,"getColorProp",null),u([l.internal],A.prototype,"setColorProp",null),A=u([l.extensible],A));function A(e){this._ref=e}var F=(Object.defineProperty(j.prototype,"diffuse",{get:function(){return I("diffuse","getDiffuse"),x(this._target._ref,"diffuseTextureIdentifier")},set:function(e){B(this._target._ref,"diffuseTextureIdentifier",e?e.identifier:"")},enumerable:!0,configurable:!0}),u([l.nonenumerable],j.prototype,"_target",void 0),j=u([l.extension(O),l.removedBy(3756104542)],j));function j(e){this._target=e}var R=(Object.defineProperty(N.prototype,"diffuse",{set:function(e){B(this._target._ref,"diffuseTextureIdentifier",e?e.identifier:"")},enumerable:!0,configurable:!0}),u([l.nonenumerable],N.prototype,"_target",void 0),N=u([l.extension(O),l.introducedBy(3756104542)],N));function N(e){this._target=e}var w,E=(s(U,w=O),U.className="BlendedMaterial",u([l.internal],U,"className",void 0),U);function U(e){return w.call(this,e)||this}var D,L=(s(k,D=O),k.prototype.getEmissive=function(){return C(this._ref,"emissiveTextureIdentifier")},Object.defineProperty(k.prototype,"emissiveTextureTransform",{get:function(){return new T(this._ref,"emissiveTextureTransform")},set:function(e){new T(this._ref,"emissiveTextureTransform").bind(e)},enumerable:!0,configurable:!0}),k.prototype.getNormal=function(){return C(this._ref,"normalTextureIdentifier")},k.prototype.setNormal=function(e){var t;return this._ref.setStringAsync("normalTextureIdentifier",null!=(t=null==e?void 0:e.identifier)?t:"")},Object.defineProperty(k.prototype,"normalTextureTransform",{get:function(){return new T(this._ref,"normalTextureTransform")},set:function(e){new T(this._ref,"normalTextureTransform").bind(e)},enumerable:!0,configurable:!0}),Object.defineProperty(k.prototype,"roughnessFactor",{get:function(){return this._ref.getScalarSignal("roughnessFactor")},set:function(e){this._ref.setScalarProp("roughnessFactor",e)},enumerable:!0,configurable:!0}),Object.defineProperty(k.prototype,"metallicFactor",{get:function(){return this._ref.getScalarSignal("metallicFactor")},set:function(e){this._ref.setScalarProp("metallicFactor",e)},enumerable:!0,configurable:!0}),Object.defineProperty(k.prototype,"baseColor",{set:function(e){B(this._ref,"baseColorTextureIdentifier",e?e.identifier:"")},enumerable:!0,configurable:!0}),k.prototype.getBaseColor=function(){return C(this._ref,"baseColorTextureIdentifier")},Object.defineProperty(k.prototype,"baseColorTextureTransform",{get:function(){return new T(this._ref,"baseColorTextureTransform")},set:function(e){new T(this._ref,"baseColorTextureTransform").bind(e)},enumerable:!0,configurable:!0}),Object.defineProperty(k.prototype,"metallicRoughness",{set:function(e){B(this._ref,"metallicRoughnessTextureIdentifier",e?e.identifier:"")},enumerable:!0,configurable:!0}),k.prototype.getMetallicRoughness=function(){return C(this._ref,"metallicRoughnessTextureIdentifier")},Object.defineProperty(k.prototype,"metallicRoughnessTextureTransform",{get:function(){return new T(this._ref,"metallicRoughnessTextureTransform")},set:function(e){new T(this._ref,"metallicRoughnessTextureTransform").bind(e)},enumerable:!0,configurable:!0}),Object.defineProperty(k.prototype,"blendMode",{get:function(){return a.mapScalarToString(this._ref.getScalarSignal("blendMode"),y,e.BlendMode.ADD)},set:function(e){this._ref.setScalarProp("blendMode",a.mapStringToScalar(e,m,0))},enumerable:!0,configurable:!0}),k.className="MetallicRoughnessPbrMaterial",u([l.introducedBy(3775027023)],k.prototype,"getNormal",null),u([l.introducedBy(3775027023)],k.prototype,"setNormal",null),u([l.introducedBy(3775027023)],k.prototype,"normalTextureTransform",null),u([l.internal],k,"className",void 0),k=u([l.extensible],k));function k(e){return D.call(this,e)||this}var V=(Object.defineProperty(H.prototype,"emissive",{get:function(){return I("emissive","getEmissive"),x(this._target._ref,"emissiveTextureIdentifier")},set:function(e){B(this._target._ref,"emissiveTextureIdentifier",e?e.identifier:"")},enumerable:!0,configurable:!0}),u([l.nonenumerable],H.prototype,"_target",void 0),H=u([l.extension(L),l.removedBy(3756104542)],H));function H(e){this._target=e}var q=(Object.defineProperty(W.prototype,"emissive",{set:function(e){B(this._target._ref,"emissiveTextureIdentifier",e?e.identifier:"")},enumerable:!0,configurable:!0}),u([l.nonenumerable],W.prototype,"_target",void 0),W=u([l.extension(L),l.introducedBy(3756104542)],W));function W(e){this._target=e}var Y=(Object.defineProperty(K.prototype,"baseColorFactor",{get:function(){return r.rgbaFromBgra(this.target._ref.getScalarSignal("baseColorFactor"))},set:function(e){this.target._ref.setColorProp("baseColorFactor",e)},enumerable:!0,configurable:!0}),K=u([l.extension(L),l.introducedBy(3666013859)],K));function K(e){this.target=e}var G=(Object.defineProperty(X.prototype,"baseColorFactor",{set:function(e){this.target._ref.setColorProp("baseColorFactor",e)},enumerable:!0,configurable:!0}),X=u([l.extension(L),l.removedBy(3666013859)],X));function X(e){this.target=e}Z.prototype.getDiffuseEnvironment=function(){return C(this._target._ref,"diffuseEnvironmentTextureIdentifier")},Object.defineProperty(Z.prototype,"diffuseEnvironment",{set:function(e){B(this._target._ref,"diffuseEnvironmentTextureIdentifier",e?e.identifier:"")},enumerable:!0,configurable:!0}),Z.prototype.getSpecularEnvironment=function(){return C(this._target._ref,"specularEnvironmentTextureIdentifier")},Object.defineProperty(Z.prototype,"specularEnvironment",{set:function(e){B(this._target._ref,"specularEnvironmentTextureIdentifier",e?e.identifier:"")},enumerable:!0,configurable:!0}),Object.defineProperty(Z.prototype,"staticEnvironmentRotation",{get:function(){var e="staticEnvironmentTextureRotation";return r.getReactiveModule().point(this._target._ref.getScalarSignal(e+"/rotationX"),this._target._ref.getScalarSignal(e+"/rotationY"),this._target._ref.getScalarSignal(e+"/rotationZ"))},set:function(e){var t="staticEnvironmentTextureRotation",r=this._target._ref;r.setScalarProp(t+"/rotationX",e.x),r.setScalarProp(t+"/rotationY",e.y),r.setScalarProp(t+"/rotationZ",e.z)},enumerable:!0,configurable:!0}),u([l.nonenumerable],Z.prototype,"_target",void 0),Z=u([l.extension(L),l.capability("imageBasedLighting"),l.introducedBy(309897551)],Z);function Z(e){this._target=e}var z,J=(s(Q,z=O),Q);function Q(e){return z.call(this,e)||this}var $,ee=(s(te,$=O),te.prototype.setParameter=function(e,t){M.setComposedMaterialParameter(this.modelId(),e,t)},te.className="ComposedMaterial",u([l.internal],te,"className",void 0),te);function te(e){return $.call(this,e)||this}var re,ne=h,oe=(s(ie,re=O),ie.prototype.floatParameter=function(e){return h.getFloatParameterSync(this.modelId(),e)},ie.prototype.getFloatParameter=function(e){return r.eventSourceToPromise(h.getFloatParameter(this.modelId(),e)).then(function(e){return new r.ScalarSignal(e)})},ie.prototype.getFloatParameterOrFallback=function(e,t){return new r.ScalarSignal(h.getFloatParameterOrFallback(this.modelId(),e,r.ref(t)))},ie.prototype.setFloatParameter=function(e,t){return r.eventSourceToPromise(h.setFloatParameter(this.modelId(),e,r.ref(t)))},ie.prototype.boolParameter=function(e){return h.getBoolParameterSync(this.modelId(),e)},ie.prototype.getBoolParameter=function(e){return r.eventSourceToPromise(h.getBoolParameter(this.modelId(),e)).then(function(e){return new r.BoolSignal(e)})},ie.prototype.getBoolParameterOrFallback=function(e,t){return new r.BoolSignal(h.getBoolParameterOrFallback(this.modelId(),e,r.ref(t)))},ie.prototype.setBoolParameter=function(e,t){return r.eventSourceToPromise(h.setBoolParameter(this.modelId(),e,r.ref(t)))},ie.prototype.getAllParameters=function(){return r.eventSourceToPromise(h.getAllShaderParameters(this.modelId())).then(function(e){return l.utils.mapObjectValues(e,r.signal)})},ie.prototype.setParameters=function(e){return void 0===e&&(e={}),r.eventSourceToPromise(h.setShaderParameters(this.modelId(),l.utils.mapObjectValues(e,r.ref)))},ie.prototype.getTexture=function(e){return r.eventSourceToPromise(ne.getTextureParameter(this.modelId(),e)).then(o.getTextureById)},ie.prototype.setTexture=function(e,t){return r.eventSourceToPromise(ne.setTextureParameter(this.modelId(),e,t.identifier))},ie.className="CustomMaterial",u([l.deprecatedAndRemovedBy(3623664e3,3756104542,"Use `getFloatParameter(paramName: string)` instead!")],ie.prototype,"floatParameter",null),u([l.deprecatedAndRemovedBy(3623664e3,3756104542,"Use `getBoolParameter(paramName: string)` instead!")],ie.prototype,"boolParameter",null),u([l.introducedBy(1225681745)],ie.prototype,"getAllParameters",null),u([l.introducedBy(1225681745)],ie.prototype,"setParameters",null),u([l.internal],ie,"className",void 0),ie);function ie(e){return re.call(this,e)||this}var ae,le=(s(se,ae=O),se.prototype.getReflective=function(){return C(this._ref,"environmentTextureIdentifier")},Object.defineProperty(se.prototype,"reflectiveTextureTransform",{get:function(){return new T(this._ref,"environmentTextureTransform")},set:function(e){new T(this._ref,"environmentTextureTransform").bind(e)},enumerable:!0,configurable:!0}),se.prototype.getMultiply=function(){return C(this._ref,"multiplyTextureIdentifier")},Object.defineProperty(se.prototype,"multiplyTextureTransform",{get:function(){return new T(this._ref,"multiplyTextureTransform")},set:function(e){new T(this._ref,"multiplyTextureTransform").bind(e)},enumerable:!0,configurable:!0}),se.prototype.getEmissive=function(){return C(this._ref,"emissiveTextureIdentifier")},Object.defineProperty(se.prototype,"emissiveTextureTransform",{get:function(){return new T(this._ref,"emissiveTextureTransform")},set:function(e){new T(this._ref,"emissiveTextureTransform").bind(e)},enumerable:!0,configurable:!0}),Object.defineProperty(se.prototype,"blendMode",{get:function(){return a.mapScalarToString(this._ref.getScalarSignal("blendMode"),y,e.BlendMode.ADD)},set:function(e){this._ref.setScalarProp("blendMode",a.mapStringToScalar(e,m,0))},enumerable:!0,configurable:!0}),Object.defineProperty(se.prototype,"diffuseColorFactor",{get:function(){return this.getColorProp("shadingParams/diffuseFactor")},set:function(e){this.setColorProp("shadingParams/diffuseFactor",e)},enumerable:!0,configurable:!0}),Object.defineProperty(se.prototype,"emmisiveColorFactor",{get:function(){return this.getColorProp("shadingParams/emissiveFactor")},set:function(e){this.setColorProp("shadingParams/emissiveFactor",e)},enumerable:!0,configurable:!0}),Object.defineProperty(se.prototype,"ambientColorFactor",{get:function(){return this.getColorProp("shadingParams/ambientFactor")},set:function(e){this.setColorProp("shadingParams/ambientFactor",e)},enumerable:!0,configurable:!0}),Object.defineProperty(se.prototype,"specularColorFactor",{get:function(){return this.getColorProp("shadingParams/specularFactor")},set:function(e){this.setColorProp("shadingParams/specularFactor",e)},enumerable:!0,configurable:!0}),se.className="DefaultMaterial",u([l.introducedBy(4024603055)],se.prototype,"reflectiveTextureTransform",null),u([l.introducedBy(2115714083)],se.prototype,"diffuseColorFactor",null),u([l.introducedBy(2115714083)],se.prototype,"emmisiveColorFactor",null),u([l.introducedBy(2115714083)],se.prototype,"ambientColorFactor",null),u([l.introducedBy(2115714083)],se.prototype,"specularColorFactor",null),u([l.internal],se,"className",void 0),se=u([l.extensible],se));function se(e){return ae.call(this,e)||this}var ue=(Object.defineProperty(fe.prototype,"multiply",{get:function(){return I("multiply","getMultiply"),x(this._target._ref,"multiplyTextureIdentifier")},set:function(e){B(this._target._ref,"multiplyTextureIdentifier",e?e.identifier:"")},enumerable:!0,configurable:!0}),Object.defineProperty(fe.prototype,"emissive",{get:function(){return I("emissive","getEmissive"),x(this._target._ref,"emissiveTextureIdentifier")},set:function(e){B(this._target._ref,"emissiveTextureIdentifier",e?e.identifier:"")},enumerable:!0,configurable:!0}),Object.defineProperty(fe.prototype,"reflective",{get:function(){return I("reflective","getReflective"),x(this._target._ref,"environmentTextureIdentifier")},set:function(e){B(this._target._ref,"environmentTextureIdentifier",e?e.identifier:"")},enumerable:!0,configurable:!0}),u([l.nonenumerable],fe.prototype,"_target",void 0),fe=u([l.extension(le),l.removedBy(3756104542)],fe));function fe(e){this._target=e}var ce=(Object.defineProperty(pe.prototype,"multiply",{set:function(e){B(this._target._ref,"multiplyTextureIdentifier",e?e.identifier:"")},enumerable:!0,configurable:!0}),Object.defineProperty(pe.prototype,"emissive",{set:function(e){B(this._target._ref,"emissiveTextureIdentifier",e?e.identifier:"")},enumerable:!0,configurable:!0}),Object.defineProperty(pe.prototype,"reflective",{set:function(e){B(this._target._ref,"environmentTextureIdentifier",e?e.identifier:"")},enumerable:!0,configurable:!0}),u([l.nonenumerable],pe.prototype,"_target",void 0),pe=u([l.extension(le),l.introducedBy(3756104542)],pe));function pe(e){this._target=e}var de,ge=(s(me,de=O),Object.defineProperty(me.prototype,"paintBrightness",{get:function(){return this._ref.getScalarSignal("paintBrightness")},set:function(e){this._ref.setScalarProp("paintBrightness",e)},enumerable:!0,configurable:!0}),Object.defineProperty(me.prototype,"backgroundInfluence",{get:function(){return this._ref.getScalarSignal("backgroundInfluence")},set:function(e){this._ref.setScalarProp("backgroundInfluence",e)},enumerable:!0,configurable:!0}),me.className="ColorPaintMaterial",u([l.internal],me,"className",void 0),me);function me(e){return de.call(this,e)||this}var ye,he=(s(be,ye=O),Object.defineProperty(be.prototype,"teethWhiteningFactor",{get:function(){return this._ref.getScalarSignal("teethWhiteningFactor")},set:function(e){this._ref.setScalarProp("teethWhiteningFactor",e)},enumerable:!0,configurable:!0}),Object.defineProperty(be.prototype,"eyeBrighteningFactor",{get:function(){return this._ref.getScalarSignal("eyeBrighteningFactor")},set:function(e){this._ref.setScalarProp("eyeBrighteningFactor",e)},enumerable:!0,configurable:!0}),Object.defineProperty(be.prototype,"skinSmoothingFactor",{get:function(){return this._ref.getScalarSignal("skinSmoothingFactor")},set:function(e){this._ref.setScalarProp("skinSmoothingFactor",e)},enumerable:!0,configurable:!0}),Object.defineProperty(be.prototype,"fullScreen",{get:function(){return this._ref.getBoolSignal("fullScreen")},set:function(e){this._ref.setBoolProp("fullScreen",e)},enumerable:!0,configurable:!0}),be.className="RetouchingMaterial",u([l.deprecatedAndRemovedBy(3623664e3,2344798620,"")],be.prototype,"teethWhiteningFactor",null),u([l.deprecatedAndRemovedBy(3623664e3,2344798620,"")],be.prototype,"eyeBrighteningFactor",null),u([l.internal],be,"className",void 0),be);function be(e){return ye.call(this,e)||this}var Pe=l.getNativeModule("Materials");function _e(e){return e.replace(/\\/g,"\\\\").replace(/\*/g,"\\*")}var ve={blendedMaterial:E,blendShapeToWarpMapMaterial:J,colorPaintMaterial:ge,composedMaterial:ee,customMaterial:oe,defaultMaterial:le,metallicRoughnessPbrMaterial:L,retouchingMaterial:he},Te={};for(var Se in ve){var Me=ve[Se];Me.className&&(Te[Me.className]=Se)}function Be(e){var t=ve[e.kind];if(null==t)throw"unexpected material type: "+e.kind;return new t(e)}function xe(e,t){return a.model_search.findByName(new a.model.NodeId(n.materialsChildrenNodeId),e,!1,t).map(Be)}function Ce(e){var t=a.model_search.findByIdentifier(new a.model.NodeId(n.materialsChildrenNodeId),e,!1,1);return 0<t.length?t[0]:null}function Ie(e,t){return Promise.resolve(Be(e)).then(function(e){return function(e,t){if(t)for(var r in"name"in t&&l.version.hasChange(506184874)&&delete t.name,t){if(null==l.utils.getPropertyDescriptor(e,r))throw new Error("Invalid property in initial state: "+r);e[r]=t[r]}return e}(e,t)}).then(function(t){return r.eventSourceToPromise(Pe.addMaterialRef(e.id.value)).then(function(e){return t})}).catch(function(t){return e.destroy().then(function(e){return Promise.reject(t)})})}var Oe=(Ae.prototype.resolveNewMaterialUniqueName=function(e){for(var t="dynamic"+e;;){if(0==xe(t+this._instantiationCounter,1).length){var r=t+this._instantiationCounter;return this._instantiationCounter++,r}this._instantiationCounter++}},Ae.prototype.get=function(e){var t=xe(_e(e),1);if(0==t.length)throw new Error("No material found with name: "+e);return t[0]},Ae.prototype.findUsingPattern=function(e,t){return Promise.resolve(xe(e,null==t?void 0:t.limit))},Ae.prototype.getAll=function(){return this.findUsingPattern("*")},Ae.prototype.findFirst=function(e){return this.findUsingPattern(_e(e),{limit:1}).then(function(e){return 0==e.length?null:e[0]})},Ae.prototype.create=function(n,t){var r,e=new Promise(function(e,t){var r=Te[n];null==r?t("Unsupported class name: "+n):e(r)});return l.version.hasChange(506184874)&&t&&"name"in t?r=t.name:l.version.hasChange(1276629687)&&(r=this.resolveNewMaterialUniqueName(n)),e.then(function(e){return a.model.graph.create(e,r)}).then(function(e){return Ie(e,t)})},Ae.prototype.clone=function(e,n){var o="string"==typeof e?e:e.identifier,t=new Promise(function(e,t){var r=Ce(o);null==r?t("No material found for id: "+o):e(r)}),i=this;return t.then(function(r){var e=function(){var e;if(l.version.hasChange(506184874)&&n&&"name"in n)return n.name;if(l.version.hasChange(1276629687)){var t=ve[r.kind];if(null==t)throw"unexpected material type: "+r.kind;return i.resolveNewMaterialUniqueName(null!=(e=t.className)?e:"dynamicMaterial")}return null}();return a.model.graph.clone(r,e)}).then(function(e){return Ie(e,n)})},Ae.prototype.destroy=function(e){return r.eventSourceToPromise("string"==typeof e?Pe.destroyById(e):Pe.destroyById(e.identifier))},Object.defineProperty(Ae.prototype,"preProcessor",{get:function(){return new _},enumerable:!0,configurable:!0}),Object.defineProperty(Ae.prototype,"postProcessor",{get:function(){return new _},enumerable:!0,configurable:!0}),u([l.enumAccessor],Ae.prototype,"BlendMode",void 0),u([l.enumAccessor],Ae.prototype,"CullMode",void 0),u([l.nonenumerable],Ae.prototype,"_instantiationCounter",void 0),u([l.deprecatedAndRemovedBy(3623664e3,3756104542,"Please use `Materials.getAll`, `Materials.findFirst` or `Materials.findUsingPattern`")],Ae.prototype,"get",null),u([l.introducedBy(370939672),l.capability("scriptingDynamicInstantiation")],Ae.prototype,"create",null),u([l.introducedBy(370939672),l.capability("scriptingDynamicInstantiation")],Ae.prototype,"clone",null),u([l.introducedBy(370939672),l.capability("scriptingDynamicInstantiation")],Ae.prototype,"destroy",null),u([l.deprecatedAndRemovedBy(4051429746,773185665,"`preProcessor` is deprecated and is no longer supported, please use Custom Materials instead"),l.capability("shaders")],Ae.prototype,"preProcessor",null),u([l.deprecatedAndRemovedBy(4051429746,773185665,"`postProcessor` is deprecated and is no longer supported, please use Custom Materials instead"),l.capability("shaders")],Ae.prototype,"postProcessor",null),Ae=u([l.scriptingModule("Materials"),l.availableIn(l.DocumentType.Any)],Ae));function Ae(){this.BlendMode=e.BlendMode,this.CullMode=e.CullMode,this._instantiationCounter=0}return e.BaseColorFactorExtension=Y,e.BlendShapeToWarpMapMaterial=J,e.BlendedMaterial=E,e.ColorPaintMaterial=ge,e.ComposedMaterial=ee,e.CustomMaterial=oe,e.DefaultMaterial=le,e.DefaultMaterialAsyncExtension=ce,e.DefaultMaterialSyncExtension=ue,e.LegacyBaseColorFactorExtension=G,e.MaterialBase=O,e.MaterialBaseAsyncExtension=R,e.MaterialBaseSyncExtension=F,e.MaterialsModule=Oe,e.MetallicRoughnessPbrMaterial=L,e.PbrMaterialAsyncExtension=q,e.PbrMaterialSyncExtension=V,e.RetouchingMaterial=he,e.ShaderProcessor=_,e.TextureTransform=T,e.getMaterialById=function(e){var t=Ce(e);if(null==t)throw new Error('No material found with id: "'+e+'".');return Be(t)},e.getMaterialByIdFuture=function(n){return new Promise(function(e,t){var r=Ce(n);null==r?t('No material found with id: "'+n+'".'):e(Be(r))})},e}({},CoreModule,arfx,ReactiveModule,params,TexturesModule);