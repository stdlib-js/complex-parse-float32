"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=o(function(c,s){
var m=require('@stdlib/assert-is-string/dist').isPrimitive,p=require('@stdlib/complex-float32/dist'),a=require('@stdlib/string-base-replace/dist'),n=require('@stdlib/error-tools-fmtprodmsg/dist');function l(){return/^([-+]?(\d*\.?\d*(?:[eE][-+]?\d+)?|Infinity|NaN)i?)?([-+])?((\d*\.?\d*(?:[eE][-+]?\d+)?|Infinity|NaN)i)?$/}function v(e){var r,t,i=0;if(!m(e))throw new TypeError(n('null3F',e));if(r=a(e,/\s/g,"").match(l()),!r)throw new Error(n("invalid argument. Unable to parse input string as a complex number. Value: `%s`.",e));return t=r[1]&&!r[1].endsWith("i")?parseFloat(r[1]):0,r[4]?i=(r[3]==="-"?-1:1)*parseFloat(a(r[4],/i$/,"")):r[1]&&r[1].endsWith("i")&&(i=parseFloat(a(r[1],/i$/,""))),new p(t,i)}s.exports=v
});var d=u();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
