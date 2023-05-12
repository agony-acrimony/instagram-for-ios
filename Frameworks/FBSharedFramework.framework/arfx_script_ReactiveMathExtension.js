var ReactiveMathExtension=function(t,n,u){"use strict";var i=function(t,n){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])})(t,n)};function r(t,n){function r(){this.constructor=t}i(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}function e(t,n,r,i){var e,o=arguments.length,u=o<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,n,r,i);else for(var a=t.length-1;0<=a;a--)(e=t[a])&&(u=(o<3?e(u):3<o?e(n,r,u):e(n,r))||u);return 3<o&&u&&Object.defineProperty(n,r,u),u}var o=n.getNativeModule("VisualScripting"),a=[];function p(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return u.wrapSignal(function(t){if(2==t.length&&3==u.signalType(t[0])&&3==u.signalType(t[1]))return 12;for(var n=u.signalType(t[0]),r=a[n],i=1;i<t.length;++i){var e=u.signalType(t[i]),o=a[e];r<o&&(n=e,r=o)}return n}(n),o.invokeComponentAction(t,0,n.map(u.ref),{}))}function l(t,n){for(var r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i];return u.wrapSignal(t,o.invokeComponentAction(n,0,r.map(u.ref),{}))}a[5]=5,a[3]=4,a[12]=3,a[4]=2,a[9]=1;var c=(h.prototype.neg=function(t){return p("builtin.mathNeg",t)},h.prototype.sin=function(t){return p("builtin.mathSin",t)},h.prototype.cos=function(t){return p("builtin.mathCos",t)},h.prototype.tan=function(t){return p("builtin.mathTan",t)},h.prototype.asin=function(t){return p("builtin.mathArcSin",t)},h.prototype.acos=function(t){return p("builtin.mathArcCos",t)},h.prototype.atan=function(t){return p("builtin.mathArcTan",t)},h.prototype.exp=function(t){return p("builtin.mathExp",t)},h.prototype.log=function(t){return p("builtin.mathLog",t)},h.prototype.floor=function(t){return p("builtin.mathFloor",t)},h.prototype.ceil=function(t){return p("builtin.mathCeil",t)},h.prototype.round=function(t){return p("builtin.mathRound",t)},h.prototype.abs=function(t){return p("builtin.mathAbs",t)},h.prototype.sign=function(t){return p("builtin.mathSign",t)},h.prototype.sqrt=function(t){return p("builtin.mathSqrt",t)},h.prototype.add=function(t,n){return p("builtin.binaryScalarAddOperator",t,n)},h.prototype.sum=function(t,n){return p("builtin.binaryScalarSumOperator",t,n)},h.prototype.mul=function(t,n){return p("builtin.binaryScalarMulOperator",t,n)},h.prototype.sub=function(t,n){return p("builtin.binaryScalarSubOperator",t,n)},h.prototype.div=function(t,n){return p("builtin.binaryScalarDivOperator",t,n)},h.prototype.mod=function(t,n){return p("builtin.binaryScalarModOperator",t,n)},h.prototype.atan2=function(t,n){return p("builtin.binaryScalarAtanOperatorV2",t,n)},h.prototype.pow=function(t,n){return p("builtin.mathPow",t,n)},h.prototype.min=function(t,n){return p("builtin.mathMin",t,n)},h.prototype.max=function(t,n){return p("builtin.mathMax",t,n)},h.prototype.step=function(t,n){return p("builtin.mathStep",t,n)},h.prototype.clamp=function(t,n,r){return p("builtin.mathClamp",t,n,r)},h.prototype.mix=function(t,n,r){return p("builtin.mathMix",t,n,r)},h.prototype.smoothStep=function(t,n,r){return p("builtin.mathSmoothStep",t,n,r)},h.prototype.fromRange=function(t,n,r){return p("builtin.mathFromRange",t,n,r)},h.prototype.toRange=function(t,n,r){return p("builtin.mathToRange",t,n,r)},h.prototype.magnitude=function(t){return l(9,"builtin.mathLength",t)},h.prototype.magnitudeSquared=function(t){return l(9,"builtin.mathLengthSqr",t)},h.prototype.normalize=function(t){return p("builtin.mathNormalize",t)},h.prototype.dot=function(t,n){return l(9,"builtin.mathDot",t,n)},h.prototype.cross=function(t,n){return l(3,"builtin.mathCross",t,n)},h.prototype.distance=function(t,n){return l(9,"builtin.mathDistance",t,n)},h.prototype.reflect=function(t,n){return 3==u.signalType(t)&&3==u.signalType(n)?l(3,"builtin.mathReflect",t,n):p("builtin.mathReflect",t,n)},h=e([n.extension(u.ReactiveModule)],h));function h(){}var f=(s.prototype.neg=function(){return p("builtin.mathNeg",this._target)},s.prototype.floor=function(){return p("builtin.mathFloor",this._target)},s.prototype.ceil=function(){return p("builtin.mathCeil",this._target)},s.prototype.round=function(){return p("builtin.mathRound",this._target)},s.prototype.abs=function(){return p("builtin.mathAbs",this._target)},s.prototype.sign=function(){return p("builtin.mathSign",this._target)},s.prototype.sqrt=function(){return p("builtin.mathSqrt",this._target)},s.prototype.add=function(t){return p("builtin.binaryScalarAddOperator",this._target,t)},s.prototype.sum=function(t){return p("builtin.binaryScalarSumOperator",this._target,t)},s.prototype.mul=function(t){return p("builtin.binaryScalarMulOperator",this._target,t)},s.prototype.sub=function(t){return p("builtin.binaryScalarSubOperator",this._target,t)},s.prototype.div=function(t){return p("builtin.binaryScalarDivOperator",this._target,t)},s.prototype.mod=function(t){return p("builtin.binaryScalarModOperator",this._target,t)},s.prototype.atan2=function(t){return p("builtin.binaryScalarAtanOperatorV2",this._target,t)},s.prototype.pow=function(t){return p("builtin.mathPow",this._target,t)},s.prototype.min=function(t){return p("builtin.mathMin",this._target,t)},s.prototype.max=function(t){return p("builtin.mathMax",this._target,t)},s.prototype.clamp=function(t,n){return p("builtin.mathClamp",this._target,t,n)},s.prototype.mix=function(t,n){return p("builtin.mathMix",this._target,t,n)},s.prototype.smoothStep=function(t,n){return p("builtin.mathSmoothStep",this._target,t,n)},s.prototype.fromRange=function(t,n){return p("builtin.mathFromRange",this._target,t,n)},s.prototype.toRange=function(t,n){return p("builtin.mathToRange",this._target,t,n)},s.prototype.magnitude=function(){return l(9,"builtin.mathLength",this._target)},s.prototype.normalize=function(){return p("builtin.mathNormalize",this._target)},s.prototype.dot=function(t){return l(9,"builtin.mathDot",this._target,t)},s.prototype.cross=function(t){return l(3,"builtin.mathCross",this._target,t)},s.prototype.distance=function(t){return l(9,"builtin.mathDistance",this._target,t)},s.prototype.reflect=function(t){return 3==u.signalType(this._target)&&3==u.signalType(t)?l(3,"builtin.mathReflect",this._target,t):p("builtin.mathReflect",this._target,t)},e([n.nonenumerable,n.internal],s.prototype,"_target",void 0),s);function s(t){this._target=t}var y,g=(r(m,y=f),m.prototype.magnitudeSquared=function(){return l(9,"builtin.mathLengthSqr",this._target)},m=e([n.extension(u.ScalarSignal)],m));function m(){return null!==y&&y.apply(this,arguments)||this}var b,S=(r(d,b=f),d=e([n.extension(u.ShaderSignal)],d));function d(){return null!==b&&b.apply(this,arguments)||this}var _,v=(r(x,_=f),x.prototype.magnitudeSquared=function(){return l(9,"builtin.mathLengthSqr",this._target)},x=e([n.extension(u.VectorSignal)],x));function x(){return null!==_&&_.apply(this,arguments)||this}var M,O=(r(R,M=f),R.prototype.magnitudeSquared=function(){return l(9,"builtin.mathLengthSqr",this._target)},R=e([n.extension(u.PointSignal)],R));function R(){return null!==M&&M.apply(this,arguments)||this}var q,A=(r(P,q=f),P.prototype.magnitudeSquared=function(){return l(9,"builtin.mathLengthSqr",this._target)},P=e([n.extension(u.Point2DSignal)],P));function P(){return null!==q&&q.apply(this,arguments)||this}var T,D=(r(C,T=f),C.prototype.magnitudeSquared=function(){return l(9,"builtin.mathLengthSqr",this._target)},C=e([n.extension(u.Point4DSignal)],C));function C(){return null!==T&&T.apply(this,arguments)||this}return t.Point2DSignalMathExtension=A,t.Point4DSignalMathExtension=D,t.PointSignalMathExtension=O,t.ReactiveMathExtension=c,t.ScalarSignalMathExtension=g,t.ShaderSignalMathExtension=S,t.VectorSignalMathExtension=v,t}({},arfx,ReactiveModule);