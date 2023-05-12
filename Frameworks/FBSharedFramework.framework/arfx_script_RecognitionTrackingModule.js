var RecognitionTrackingModule=function(e,n,t){"use strict";function o(e,n,t,o){var r,i=arguments.length,a=i<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,t,o);else for(var c=e.length-1;0<=c;c--)(r=e[c])&&(a=(i<3?r(a):3<i?r(n,t,a):r(n,t))||a);return 3<i&&a&&Object.defineProperty(n,t,a),a}var r=n.getNativeModule("RecognitionTracking"),i=(Object.defineProperty(a.prototype,"isTracking",{get:function(){return new t.BoolSignal(r.isTracking(this.recognitionID_))},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"globalTransform",{get:function(){return new t.TransformSignal(r.globalTransform(this.recognitionID_))},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"targetAspectRatio",{get:function(){return new t.ScalarSignal(r.targetAspectRatio(this.recognitionID_))},enumerable:!0,configurable:!0}),o([n.internal,n.nonenumerable],a.prototype,"recognitionID_",void 0),o([n.internal,n.nonenumerable],a.prototype,"parent_",void 0),a);function a(e,n){this.recognitionID_=e,this.parent_=n}var c=(Object.defineProperty(g.prototype,"metadata",{get:function(){return r.metadata(this.recognitionID_)},enumerable:!0,configurable:!0}),Object.defineProperty(g.prototype,"hasTracking",{get:function(){return r.hasTracking(this.recognitionID_)},enumerable:!0,configurable:!0}),Object.defineProperty(g.prototype,"tracking",{get:function(){return this.Tracking_},enumerable:!0,configurable:!0}),Object.defineProperty(g.prototype,"onLost",{get:function(){return new t.EventSource(r.onLost(this.recognitionID_))},enumerable:!0,configurable:!0}),o([n.internal,n.nonenumerable],g.prototype,"recognitionID_",void 0),o([n.internal,n.nonenumerable],g.prototype,"nativeRecognition_",void 0),o([n.internal,n.nonenumerable],g.prototype,"Tracking_",void 0),g);function g(e,n){this.recognitionID_=e,this.nativeRecognition_=n,this.Tracking_=new i(e,this)}function u(e,n){return new c(e,n)}var l=(Object.defineProperty(p.prototype,"onTargetRecognized",{get:function(){return new t.EventSource(r.onTargetRecognized())},enumerable:!0,configurable:!0}),p=o([n.scriptingModule("RecognitionTracking"),n.availableIn(n.DocumentType.Any)],p));function p(){r.registerJSRecognitionCreator(u)}return e.Recognition=c,e.RecognitionTrackingModule=l,e.Tracking=i,e}({},arfx,ReactiveModule);