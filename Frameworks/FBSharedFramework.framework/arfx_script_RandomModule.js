var RandomModule=function(t,e,r){"use strict";function n(t,e,r,n){var o,s=arguments.length,a=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var i=t.length-1;0<=i;i--)(o=t[i])&&(a=(s<3?o(a):3<s?o(e,r,a):o(e,r))||a);return 3<s&&a&&Object.defineProperty(e,r,a),a}var s=624,a=1812433253,o=[0,2567483615],i=(u.prototype.twist=function(){for(var t,e=0;e<623;++e)t=2147483648&this.state[e]|2147483647&this.state[(e+1)%s],this.state[e]=this.state[(e+397)%s]^t>>>1^o[1&t];this.stateIdx=0},u.prototype.reset=function(t){null==t&&(t=(new Date).getTime()),this.state[0]=t>>>0;for(var e=1;e<s;++e){var r=this.state[e-1]^this.state[e-1]>>>30,n=((4294901760&r)>>>16)*a<<16,o=(65535&r)*a;this.state[e]=n+o+e>>>0}this.stateIdx=s},u.prototype.randomUInt32=function(){this.stateIdx>=s&&this.twist();var t=this.state[this.stateIdx];return t^=t>>>11,t^=t<<7&2636928640,t^=t<<15&4022730752,t^=t>>>18,this.stateIdx++,t>>>0},u);function u(t){this.state=new Array(s),this.stateIdx=625,this.reset(t)}var d=(h.prototype._resetSeed=function(t){return this.generator.reset(t)},h.prototype._randomUInt32=function(){return this.generator.randomUInt32()},h.prototype.random=function(){return this._randomUInt32()/4294967296},n([e.internal],h.prototype,"_resetSeed",null),n([e.internal],h.prototype,"_randomUInt32",null),h=n([e.scriptingModule("Random"),e.availableIn(e.DocumentType.Any)],h));function h(){this.generator=new i(r.seed)}return t.RandomModule=d,t}({},arfx,params);