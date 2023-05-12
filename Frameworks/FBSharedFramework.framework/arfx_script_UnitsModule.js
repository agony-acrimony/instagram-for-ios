var UnitsModule=function(t,e,r){"use strict";function n(t,e,r,n){var o,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,n);else for(var u=t.length-1;0<=u;u--)(o=t[u])&&(c=(i<3?o(c):3<i?o(e,r,c):o(e,r))||c);return 3<i&&c&&Object.defineProperty(e,r,c),c}var o;(o=t.WorldUnit||(t.WorldUnit={}))[o["METER"]=0]="METER",o[o["CENTIMETER"]=1]="CENTIMETER",o[o["MILLIMETER"]=2]="MILLIMETER",o[o["YARD"]=3]="YARD",o[o["FOOT"]=4]="FOOT",o[o["INCH"]=5]="INCH",o[o["LEGACY"]=6]="LEGACY";var i=(c.prototype.m=function(t){return t*r.inverseWorldUnitFactor},c.prototype.cm=function(t){return.01*t*r.inverseWorldUnitFactor},c.prototype.mm=function(t){return.001*t*r.inverseWorldUnitFactor},c.prototype.yd=function(t){return.9144*t*r.inverseWorldUnitFactor},c.prototype.ft=function(t){return.3048*t*r.inverseWorldUnitFactor},c.prototype.in=function(t){return.0254*t*r.inverseWorldUnitFactor},n([e.deprecatedAndRemovedBy(3623664e3,3756104542,"This enum was never used as argument to public APIs"),e.enumAccessor],c.prototype,"WorldUnit",void 0),c=n([e.scriptingModule("Units"),e.availableIn(e.DocumentType.Any)],c));function c(){this.WorldUnit=t.WorldUnit}return t.UnitsModule=i,t.fromMeters=function(t){return"number"==typeof t?t*r.inverseWorldUnitFactor:t.mul(r.inverseWorldUnitFactor)},t.toMeters=function(t){return"number"==typeof t?t/r.inverseWorldUnitFactor:t.div(r.inverseWorldUnitFactor)},t}({},arfx,params);