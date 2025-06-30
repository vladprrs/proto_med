function K0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Ls(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var jp={exports:{}},Go={},Up={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mi=Symbol.for("react.element"),G0=Symbol.for("react.portal"),q0=Symbol.for("react.fragment"),Y0=Symbol.for("react.strict_mode"),X0=Symbol.for("react.profiler"),Z0=Symbol.for("react.provider"),J0=Symbol.for("react.context"),eg=Symbol.for("react.forward_ref"),tg=Symbol.for("react.suspense"),ng=Symbol.for("react.memo"),rg=Symbol.for("react.lazy"),Zc=Symbol.iterator;function ig(e){return e===null||typeof e!="object"?null:(e=Zc&&e[Zc]||e["@@iterator"],typeof e=="function"?e:null)}var Hp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qp=Object.assign,Vp={};function mr(e,t,n){this.props=e,this.context=t,this.refs=Vp,this.updater=n||Hp}mr.prototype.isReactComponent={};mr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};mr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Wp(){}Wp.prototype=mr.prototype;function Ns(e,t,n){this.props=e,this.context=t,this.refs=Vp,this.updater=n||Hp}var zs=Ns.prototype=new Wp;zs.constructor=Ns;Qp(zs,mr.prototype);zs.isPureReactComponent=!0;var Jc=Array.isArray,Kp=Object.prototype.hasOwnProperty,Bs={current:null},Gp={key:!0,ref:!0,__self:!0,__source:!0};function qp(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Kp.call(t,r)&&!Gp.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var c=Array(a),d=0;d<a;d++)c[d]=arguments[d+2];i.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:mi,type:e,key:o,ref:l,props:i,_owner:Bs.current}}function og(e,t){return{$$typeof:mi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ms(e){return typeof e=="object"&&e!==null&&e.$$typeof===mi}function lg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var eu=/\/+/g;function Dl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?lg(""+e.key):t.toString(36)}function qi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case mi:case G0:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Dl(l,0):r,Jc(i)?(n="",e!=null&&(n=e.replace(eu,"$&/")+"/"),qi(i,t,n,"",function(d){return d})):i!=null&&(Ms(i)&&(i=og(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(eu,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Jc(e))for(var a=0;a<e.length;a++){o=e[a];var c=r+Dl(o,a);l+=qi(o,t,n,c,i)}else if(c=ig(e),typeof c=="function")for(e=c.call(e),a=0;!(o=e.next()).done;)o=o.value,c=r+Dl(o,a++),l+=qi(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Ti(e,t,n){if(e==null)return e;var r=[],i=0;return qi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function ag(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ge={current:null},Yi={transition:null},sg={ReactCurrentDispatcher:Ge,ReactCurrentBatchConfig:Yi,ReactCurrentOwner:Bs};function Yp(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:Ti,forEach:function(e,t,n){Ti(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ti(e,function(){t++}),t},toArray:function(e){return Ti(e,function(t){return t})||[]},only:function(e){if(!Ms(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Z.Component=mr;Z.Fragment=q0;Z.Profiler=X0;Z.PureComponent=Ns;Z.StrictMode=Y0;Z.Suspense=tg;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sg;Z.act=Yp;Z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Qp({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Bs.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)Kp.call(t,c)&&!Gp.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var d=0;d<c;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:mi,type:e.type,key:i,ref:o,props:r,_owner:l}};Z.createContext=function(e){return e={$$typeof:J0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Z0,_context:e},e.Consumer=e};Z.createElement=qp;Z.createFactory=function(e){var t=qp.bind(null,e);return t.type=e,t};Z.createRef=function(){return{current:null}};Z.forwardRef=function(e){return{$$typeof:eg,render:e}};Z.isValidElement=Ms;Z.lazy=function(e){return{$$typeof:rg,_payload:{_status:-1,_result:e},_init:ag}};Z.memo=function(e,t){return{$$typeof:ng,type:e,compare:t===void 0?null:t}};Z.startTransition=function(e){var t=Yi.transition;Yi.transition={};try{e()}finally{Yi.transition=t}};Z.unstable_act=Yp;Z.useCallback=function(e,t){return Ge.current.useCallback(e,t)};Z.useContext=function(e){return Ge.current.useContext(e)};Z.useDebugValue=function(){};Z.useDeferredValue=function(e){return Ge.current.useDeferredValue(e)};Z.useEffect=function(e,t){return Ge.current.useEffect(e,t)};Z.useId=function(){return Ge.current.useId()};Z.useImperativeHandle=function(e,t,n){return Ge.current.useImperativeHandle(e,t,n)};Z.useInsertionEffect=function(e,t){return Ge.current.useInsertionEffect(e,t)};Z.useLayoutEffect=function(e,t){return Ge.current.useLayoutEffect(e,t)};Z.useMemo=function(e,t){return Ge.current.useMemo(e,t)};Z.useReducer=function(e,t,n){return Ge.current.useReducer(e,t,n)};Z.useRef=function(e){return Ge.current.useRef(e)};Z.useState=function(e){return Ge.current.useState(e)};Z.useSyncExternalStore=function(e,t,n){return Ge.current.useSyncExternalStore(e,t,n)};Z.useTransition=function(){return Ge.current.useTransition()};Z.version="18.3.1";Up.exports=Z;var _=Up.exports;const ke=Ls(_),cg=K0({__proto__:null,default:ke},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ug=_,dg=Symbol.for("react.element"),pg=Symbol.for("react.fragment"),fg=Object.prototype.hasOwnProperty,hg=ug.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gg={key:!0,ref:!0,__self:!0,__source:!0};function Xp(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)fg.call(t,r)&&!gg.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:dg,type:e,key:o,ref:l,props:i,_owner:hg.current}}Go.Fragment=pg;Go.jsx=Xp;Go.jsxs=Xp;jp.exports=Go;var js=jp.exports;const Us=js.Fragment,s=js.jsx,x=js.jsxs;var Aa={},Zp={exports:{}},at={},Jp={exports:{}},ef={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,W){var K=O.length;O.push(W);e:for(;0<K;){var P=K-1>>>1,F=O[P];if(0<i(F,W))O[P]=W,O[K]=F,K=P;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var W=O[0],K=O.pop();if(K!==W){O[0]=K;e:for(var P=0,F=O.length,I=F>>>1;P<I;){var N=2*(P+1)-1,G=O[N],E=N+1,te=O[E];if(0>i(G,K))E<F&&0>i(te,G)?(O[P]=te,O[E]=K,P=E):(O[P]=G,O[N]=K,P=N);else if(E<F&&0>i(te,K))O[P]=te,O[E]=K,P=E;else break e}}return W}function i(O,W){var K=O.sortIndex-W.sortIndex;return K!==0?K:O.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var c=[],d=[],h=1,p=null,m=3,y=!1,S=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(O){for(var W=n(d);W!==null;){if(W.callback===null)r(d);else if(W.startTime<=O)r(d),W.sortIndex=W.expirationTime,t(c,W);else break;W=n(d)}}function k(O){if(w=!1,v(O),!S)if(n(c)!==null)S=!0,J(T);else{var W=n(d);W!==null&&ee(k,W.startTime-O)}}function T(O,W){S=!1,w&&(w=!1,g(z),z=-1),y=!0;var K=m;try{for(v(W),p=n(c);p!==null&&(!(p.expirationTime>W)||O&&!j());){var P=p.callback;if(typeof P=="function"){p.callback=null,m=p.priorityLevel;var F=P(p.expirationTime<=W);W=e.unstable_now(),typeof F=="function"?p.callback=F:p===n(c)&&r(c),v(W)}else r(c);p=n(c)}if(p!==null)var I=!0;else{var N=n(d);N!==null&&ee(k,N.startTime-W),I=!1}return I}finally{p=null,m=K,y=!1}}var $=!1,L=null,z=-1,Y=5,A=-1;function j(){return!(e.unstable_now()-A<Y)}function H(){if(L!==null){var O=e.unstable_now();A=O;var W=!0;try{W=L(!0,O)}finally{W?V():($=!1,L=null)}}else $=!1}var V;if(typeof f=="function")V=function(){f(H)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,Q=D.port2;D.port1.onmessage=H,V=function(){Q.postMessage(null)}}else V=function(){C(H,0)};function J(O){L=O,$||($=!0,V())}function ee(O,W){z=C(function(){O(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){S||y||(S=!0,J(T))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(O){switch(m){case 1:case 2:case 3:var W=3;break;default:W=m}var K=m;m=W;try{return O()}finally{m=K}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,W){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var K=m;m=O;try{return W()}finally{m=K}},e.unstable_scheduleCallback=function(O,W,K){var P=e.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?P+K:P):K=P,O){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=K+F,O={id:h++,callback:W,priorityLevel:O,startTime:K,expirationTime:F,sortIndex:-1},K>P?(O.sortIndex=K,t(d,O),n(c)===null&&O===n(d)&&(w?(g(z),z=-1):w=!0,ee(k,K-P))):(O.sortIndex=F,t(c,O),S||y||(S=!0,J(T))),O},e.unstable_shouldYield=j,e.unstable_wrapCallback=function(O){var W=m;return function(){var K=m;m=W;try{return O.apply(this,arguments)}finally{m=K}}}})(ef);Jp.exports=ef;var mg=Jp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vg=_,lt=mg;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tf=new Set,Yr={};function Ln(e,t){sr(e,t),sr(e+"Capture",t)}function sr(e,t){for(Yr[e]=t,e=0;e<t.length;e++)tf.add(t[e])}var jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ra=Object.prototype.hasOwnProperty,xg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tu={},nu={};function yg(e){return Ra.call(nu,e)?!0:Ra.call(tu,e)?!1:xg.test(e)?nu[e]=!0:(tu[e]=!0,!1)}function Sg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function wg(e,t,n,r){if(t===null||typeof t>"u"||Sg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function qe(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ze[e]=new qe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ze[t]=new qe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ze[e]=new qe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ze[e]=new qe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ze[e]=new qe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ze[e]=new qe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ze[e]=new qe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ze[e]=new qe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ze[e]=new qe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Hs=/[\-:]([a-z])/g;function Qs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Hs,Qs);ze[t]=new qe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Hs,Qs);ze[t]=new qe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Hs,Qs);ze[t]=new qe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ze[e]=new qe(e,1,!1,e.toLowerCase(),null,!1,!1)});ze.xlinkHref=new qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ze[e]=new qe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Vs(e,t,n,r){var i=ze.hasOwnProperty(t)?ze[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(wg(t,n,i,r)&&(n=null),r||i===null?yg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Vt=vg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$i=Symbol.for("react.element"),Hn=Symbol.for("react.portal"),Qn=Symbol.for("react.fragment"),Ws=Symbol.for("react.strict_mode"),Oa=Symbol.for("react.profiler"),nf=Symbol.for("react.provider"),rf=Symbol.for("react.context"),Ks=Symbol.for("react.forward_ref"),Ia=Symbol.for("react.suspense"),Da=Symbol.for("react.suspense_list"),Gs=Symbol.for("react.memo"),Xt=Symbol.for("react.lazy"),of=Symbol.for("react.offscreen"),ru=Symbol.iterator;function Er(e){return e===null||typeof e!="object"?null:(e=ru&&e[ru]||e["@@iterator"],typeof e=="function"?e:null)}var ye=Object.assign,Ll;function Dr(e){if(Ll===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ll=t&&t[1]||""}return`
`+Ll+e}var Nl=!1;function zl(e,t){if(!e||Nl)return"";Nl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var c=`
`+i[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=a);break}}}finally{Nl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Dr(e):""}function Cg(e){switch(e.tag){case 5:return Dr(e.type);case 16:return Dr("Lazy");case 13:return Dr("Suspense");case 19:return Dr("SuspenseList");case 0:case 2:case 15:return e=zl(e.type,!1),e;case 11:return e=zl(e.type.render,!1),e;case 1:return e=zl(e.type,!0),e;default:return""}}function La(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qn:return"Fragment";case Hn:return"Portal";case Oa:return"Profiler";case Ws:return"StrictMode";case Ia:return"Suspense";case Da:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case rf:return(e.displayName||"Context")+".Consumer";case nf:return(e._context.displayName||"Context")+".Provider";case Ks:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Gs:return t=e.displayName||null,t!==null?t:La(e.type)||"Memo";case Xt:t=e._payload,e=e._init;try{return La(e(t))}catch{}}return null}function kg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return La(t);case 8:return t===Ws?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function lf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function bg(e){var t=lf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _i(e){e._valueTracker||(e._valueTracker=bg(e))}function af(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=lf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function po(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Na(e,t){var n=t.checked;return ye({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function iu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=mn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function sf(e,t){t=t.checked,t!=null&&Vs(e,"checked",t,!1)}function za(e,t){sf(e,t);var n=mn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ba(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ba(e,t.type,mn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ou(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ba(e,t,n){(t!=="number"||po(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Lr=Array.isArray;function nr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+mn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ma(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return ye({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function lu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(Lr(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mn(n)}}function cf(e,t){var n=mn(t.value),r=mn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function au(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function uf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ja(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?uf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Fi,df=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Fi=Fi||document.createElement("div"),Fi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Fi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Br={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Eg=["Webkit","ms","Moz","O"];Object.keys(Br).forEach(function(e){Eg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Br[t]=Br[e]})});function pf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Br.hasOwnProperty(e)&&Br[e]?(""+t).trim():t+"px"}function ff(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=pf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Tg=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ua(e,t){if(t){if(Tg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function Ha(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qa=null;function qs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Va=null,rr=null,ir=null;function su(e){if(e=yi(e)){if(typeof Va!="function")throw Error(R(280));var t=e.stateNode;t&&(t=Jo(t),Va(e.stateNode,e.type,t))}}function hf(e){rr?ir?ir.push(e):ir=[e]:rr=e}function gf(){if(rr){var e=rr,t=ir;if(ir=rr=null,su(e),t)for(e=0;e<t.length;e++)su(t[e])}}function mf(e,t){return e(t)}function vf(){}var Bl=!1;function xf(e,t,n){if(Bl)return e(t,n);Bl=!0;try{return mf(e,t,n)}finally{Bl=!1,(rr!==null||ir!==null)&&(vf(),gf())}}function Zr(e,t){var n=e.stateNode;if(n===null)return null;var r=Jo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var Wa=!1;if(jt)try{var Tr={};Object.defineProperty(Tr,"passive",{get:function(){Wa=!0}}),window.addEventListener("test",Tr,Tr),window.removeEventListener("test",Tr,Tr)}catch{Wa=!1}function $g(e,t,n,r,i,o,l,a,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(h){this.onError(h)}}var Mr=!1,fo=null,ho=!1,Ka=null,_g={onError:function(e){Mr=!0,fo=e}};function Fg(e,t,n,r,i,o,l,a,c){Mr=!1,fo=null,$g.apply(_g,arguments)}function Pg(e,t,n,r,i,o,l,a,c){if(Fg.apply(this,arguments),Mr){if(Mr){var d=fo;Mr=!1,fo=null}else throw Error(R(198));ho||(ho=!0,Ka=d)}}function Nn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function yf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cu(e){if(Nn(e)!==e)throw Error(R(188))}function Ag(e){var t=e.alternate;if(!t){if(t=Nn(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return cu(i),e;if(o===r)return cu(i),t;o=o.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function Sf(e){return e=Ag(e),e!==null?wf(e):null}function wf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=wf(e);if(t!==null)return t;e=e.sibling}return null}var Cf=lt.unstable_scheduleCallback,uu=lt.unstable_cancelCallback,Rg=lt.unstable_shouldYield,Og=lt.unstable_requestPaint,Ee=lt.unstable_now,Ig=lt.unstable_getCurrentPriorityLevel,Ys=lt.unstable_ImmediatePriority,kf=lt.unstable_UserBlockingPriority,go=lt.unstable_NormalPriority,Dg=lt.unstable_LowPriority,bf=lt.unstable_IdlePriority,qo=null,Rt=null;function Lg(e){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(qo,e,void 0,(e.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:Bg,Ng=Math.log,zg=Math.LN2;function Bg(e){return e>>>=0,e===0?32:31-(Ng(e)/zg|0)|0}var Pi=64,Ai=4194304;function Nr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function mo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=Nr(a):(o&=l,o!==0&&(r=Nr(o)))}else l=n&~i,l!==0?r=Nr(l):o!==0&&(r=Nr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-bt(t),i=1<<n,r|=e[n],t&=~i;return r}function Mg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-bt(o),a=1<<l,c=i[l];c===-1?(!(a&n)||a&r)&&(i[l]=Mg(a,t)):c<=t&&(e.expiredLanes|=a),o&=~a}}function Ga(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ef(){var e=Pi;return Pi<<=1,!(Pi&4194240)&&(Pi=64),e}function Ml(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-bt(t),e[t]=n}function Ug(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-bt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Xs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-bt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var se=0;function Tf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var $f,Zs,_f,Ff,Pf,qa=!1,Ri=[],ln=null,an=null,sn=null,Jr=new Map,ei=new Map,en=[],Hg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function du(e,t){switch(e){case"focusin":case"focusout":ln=null;break;case"dragenter":case"dragleave":an=null;break;case"mouseover":case"mouseout":sn=null;break;case"pointerover":case"pointerout":Jr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ei.delete(t.pointerId)}}function $r(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=yi(t),t!==null&&Zs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Qg(e,t,n,r,i){switch(t){case"focusin":return ln=$r(ln,e,t,n,r,i),!0;case"dragenter":return an=$r(an,e,t,n,r,i),!0;case"mouseover":return sn=$r(sn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Jr.set(o,$r(Jr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ei.set(o,$r(ei.get(o)||null,e,t,n,r,i)),!0}return!1}function Af(e){var t=bn(e.target);if(t!==null){var n=Nn(t);if(n!==null){if(t=n.tag,t===13){if(t=yf(n),t!==null){e.blockedOn=t,Pf(e.priority,function(){_f(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ya(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Qa=r,n.target.dispatchEvent(r),Qa=null}else return t=yi(n),t!==null&&Zs(t),e.blockedOn=n,!1;t.shift()}return!0}function pu(e,t,n){Xi(e)&&n.delete(t)}function Vg(){qa=!1,ln!==null&&Xi(ln)&&(ln=null),an!==null&&Xi(an)&&(an=null),sn!==null&&Xi(sn)&&(sn=null),Jr.forEach(pu),ei.forEach(pu)}function _r(e,t){e.blockedOn===t&&(e.blockedOn=null,qa||(qa=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,Vg)))}function ti(e){function t(i){return _r(i,e)}if(0<Ri.length){_r(Ri[0],e);for(var n=1;n<Ri.length;n++){var r=Ri[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ln!==null&&_r(ln,e),an!==null&&_r(an,e),sn!==null&&_r(sn,e),Jr.forEach(t),ei.forEach(t),n=0;n<en.length;n++)r=en[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<en.length&&(n=en[0],n.blockedOn===null);)Af(n),n.blockedOn===null&&en.shift()}var or=Vt.ReactCurrentBatchConfig,vo=!0;function Wg(e,t,n,r){var i=se,o=or.transition;or.transition=null;try{se=1,Js(e,t,n,r)}finally{se=i,or.transition=o}}function Kg(e,t,n,r){var i=se,o=or.transition;or.transition=null;try{se=4,Js(e,t,n,r)}finally{se=i,or.transition=o}}function Js(e,t,n,r){if(vo){var i=Ya(e,t,n,r);if(i===null)Yl(e,t,r,xo,n),du(e,r);else if(Qg(i,e,t,n,r))r.stopPropagation();else if(du(e,r),t&4&&-1<Hg.indexOf(e)){for(;i!==null;){var o=yi(i);if(o!==null&&$f(o),o=Ya(e,t,n,r),o===null&&Yl(e,t,r,xo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Yl(e,t,r,null,n)}}var xo=null;function Ya(e,t,n,r){if(xo=null,e=qs(r),e=bn(e),e!==null)if(t=Nn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=yf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return xo=e,null}function Rf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ig()){case Ys:return 1;case kf:return 4;case go:case Dg:return 16;case bf:return 536870912;default:return 16}default:return 16}}var nn=null,ec=null,Zi=null;function Of(){if(Zi)return Zi;var e,t=ec,n=t.length,r,i="value"in nn?nn.value:nn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Zi=i.slice(e,1<r?1-r:void 0)}function Ji(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Oi(){return!0}function fu(){return!1}function st(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Oi:fu,this.isPropagationStopped=fu,this}return ye(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oi)},persist:function(){},isPersistent:Oi}),t}var vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tc=st(vr),xi=ye({},vr,{view:0,detail:0}),Gg=st(xi),jl,Ul,Fr,Yo=ye({},xi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fr&&(Fr&&e.type==="mousemove"?(jl=e.screenX-Fr.screenX,Ul=e.screenY-Fr.screenY):Ul=jl=0,Fr=e),jl)},movementY:function(e){return"movementY"in e?e.movementY:Ul}}),hu=st(Yo),qg=ye({},Yo,{dataTransfer:0}),Yg=st(qg),Xg=ye({},xi,{relatedTarget:0}),Hl=st(Xg),Zg=ye({},vr,{animationName:0,elapsedTime:0,pseudoElement:0}),Jg=st(Zg),e1=ye({},vr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),t1=st(e1),n1=ye({},vr,{data:0}),gu=st(n1),r1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},i1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},o1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function l1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=o1[e])?!!t[e]:!1}function nc(){return l1}var a1=ye({},xi,{key:function(e){if(e.key){var t=r1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ji(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?i1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nc,charCode:function(e){return e.type==="keypress"?Ji(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ji(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),s1=st(a1),c1=ye({},Yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mu=st(c1),u1=ye({},xi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nc}),d1=st(u1),p1=ye({},vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),f1=st(p1),h1=ye({},Yo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),g1=st(h1),m1=[9,13,27,32],rc=jt&&"CompositionEvent"in window,jr=null;jt&&"documentMode"in document&&(jr=document.documentMode);var v1=jt&&"TextEvent"in window&&!jr,If=jt&&(!rc||jr&&8<jr&&11>=jr),vu=String.fromCharCode(32),xu=!1;function Df(e,t){switch(e){case"keyup":return m1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vn=!1;function x1(e,t){switch(e){case"compositionend":return Lf(t);case"keypress":return t.which!==32?null:(xu=!0,vu);case"textInput":return e=t.data,e===vu&&xu?null:e;default:return null}}function y1(e,t){if(Vn)return e==="compositionend"||!rc&&Df(e,t)?(e=Of(),Zi=ec=nn=null,Vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return If&&t.locale!=="ko"?null:t.data;default:return null}}var S1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!S1[e.type]:t==="textarea"}function Nf(e,t,n,r){hf(r),t=yo(t,"onChange"),0<t.length&&(n=new tc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ur=null,ni=null;function w1(e){Gf(e,0)}function Xo(e){var t=Gn(e);if(af(t))return e}function C1(e,t){if(e==="change")return t}var zf=!1;if(jt){var Ql;if(jt){var Vl="oninput"in document;if(!Vl){var Su=document.createElement("div");Su.setAttribute("oninput","return;"),Vl=typeof Su.oninput=="function"}Ql=Vl}else Ql=!1;zf=Ql&&(!document.documentMode||9<document.documentMode)}function wu(){Ur&&(Ur.detachEvent("onpropertychange",Bf),ni=Ur=null)}function Bf(e){if(e.propertyName==="value"&&Xo(ni)){var t=[];Nf(t,ni,e,qs(e)),xf(w1,t)}}function k1(e,t,n){e==="focusin"?(wu(),Ur=t,ni=n,Ur.attachEvent("onpropertychange",Bf)):e==="focusout"&&wu()}function b1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xo(ni)}function E1(e,t){if(e==="click")return Xo(t)}function T1(e,t){if(e==="input"||e==="change")return Xo(t)}function $1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:$1;function ri(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ra.call(t,i)||!Tt(e[i],t[i]))return!1}return!0}function Cu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ku(e,t){var n=Cu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cu(n)}}function Mf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jf(){for(var e=window,t=po();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=po(e.document)}return t}function ic(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _1(e){var t=jf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Mf(n.ownerDocument.documentElement,n)){if(r!==null&&ic(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ku(n,o);var l=ku(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var F1=jt&&"documentMode"in document&&11>=document.documentMode,Wn=null,Xa=null,Hr=null,Za=!1;function bu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Za||Wn==null||Wn!==po(r)||(r=Wn,"selectionStart"in r&&ic(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hr&&ri(Hr,r)||(Hr=r,r=yo(Xa,"onSelect"),0<r.length&&(t=new tc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Wn)))}function Ii(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kn={animationend:Ii("Animation","AnimationEnd"),animationiteration:Ii("Animation","AnimationIteration"),animationstart:Ii("Animation","AnimationStart"),transitionend:Ii("Transition","TransitionEnd")},Wl={},Uf={};jt&&(Uf=document.createElement("div").style,"AnimationEvent"in window||(delete Kn.animationend.animation,delete Kn.animationiteration.animation,delete Kn.animationstart.animation),"TransitionEvent"in window||delete Kn.transitionend.transition);function Zo(e){if(Wl[e])return Wl[e];if(!Kn[e])return e;var t=Kn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Uf)return Wl[e]=t[n];return e}var Hf=Zo("animationend"),Qf=Zo("animationiteration"),Vf=Zo("animationstart"),Wf=Zo("transitionend"),Kf=new Map,Eu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xn(e,t){Kf.set(e,t),Ln(t,[e])}for(var Kl=0;Kl<Eu.length;Kl++){var Gl=Eu[Kl],P1=Gl.toLowerCase(),A1=Gl[0].toUpperCase()+Gl.slice(1);xn(P1,"on"+A1)}xn(Hf,"onAnimationEnd");xn(Qf,"onAnimationIteration");xn(Vf,"onAnimationStart");xn("dblclick","onDoubleClick");xn("focusin","onFocus");xn("focusout","onBlur");xn(Wf,"onTransitionEnd");sr("onMouseEnter",["mouseout","mouseover"]);sr("onMouseLeave",["mouseout","mouseover"]);sr("onPointerEnter",["pointerout","pointerover"]);sr("onPointerLeave",["pointerout","pointerover"]);Ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ln("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),R1=new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));function Tu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Pg(r,t,void 0,e),e.currentTarget=null}function Gf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],c=a.instance,d=a.currentTarget;if(a=a.listener,c!==o&&i.isPropagationStopped())break e;Tu(i,a,d),o=c}else for(l=0;l<r.length;l++){if(a=r[l],c=a.instance,d=a.currentTarget,a=a.listener,c!==o&&i.isPropagationStopped())break e;Tu(i,a,d),o=c}}}if(ho)throw e=Ka,ho=!1,Ka=null,e}function fe(e,t){var n=t[rs];n===void 0&&(n=t[rs]=new Set);var r=e+"__bubble";n.has(r)||(qf(t,e,2,!1),n.add(r))}function ql(e,t,n){var r=0;t&&(r|=4),qf(n,e,r,t)}var Di="_reactListening"+Math.random().toString(36).slice(2);function ii(e){if(!e[Di]){e[Di]=!0,tf.forEach(function(n){n!=="selectionchange"&&(R1.has(n)||ql(n,!1,e),ql(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Di]||(t[Di]=!0,ql("selectionchange",!1,t))}}function qf(e,t,n,r){switch(Rf(t)){case 1:var i=Wg;break;case 4:i=Kg;break;default:i=Js}n=i.bind(null,t,n,e),i=void 0,!Wa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Yl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;l=l.return}for(;a!==null;){if(l=bn(a),l===null)return;if(c=l.tag,c===5||c===6){r=o=l;continue e}a=a.parentNode}}r=r.return}xf(function(){var d=o,h=qs(n),p=[];e:{var m=Kf.get(e);if(m!==void 0){var y=tc,S=e;switch(e){case"keypress":if(Ji(n)===0)break e;case"keydown":case"keyup":y=s1;break;case"focusin":S="focus",y=Hl;break;case"focusout":S="blur",y=Hl;break;case"beforeblur":case"afterblur":y=Hl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=hu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Yg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=d1;break;case Hf:case Qf:case Vf:y=Jg;break;case Wf:y=f1;break;case"scroll":y=Gg;break;case"wheel":y=g1;break;case"copy":case"cut":case"paste":y=t1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=mu}var w=(t&4)!==0,C=!w&&e==="scroll",g=w?m!==null?m+"Capture":null:m;w=[];for(var f=d,v;f!==null;){v=f;var k=v.stateNode;if(v.tag===5&&k!==null&&(v=k,g!==null&&(k=Zr(f,g),k!=null&&w.push(oi(f,k,v)))),C)break;f=f.return}0<w.length&&(m=new y(m,S,null,n,h),p.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&n!==Qa&&(S=n.relatedTarget||n.fromElement)&&(bn(S)||S[Ut]))break e;if((y||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,y?(S=n.relatedTarget||n.toElement,y=d,S=S?bn(S):null,S!==null&&(C=Nn(S),S!==C||S.tag!==5&&S.tag!==6)&&(S=null)):(y=null,S=d),y!==S)){if(w=hu,k="onMouseLeave",g="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=mu,k="onPointerLeave",g="onPointerEnter",f="pointer"),C=y==null?m:Gn(y),v=S==null?m:Gn(S),m=new w(k,f+"leave",y,n,h),m.target=C,m.relatedTarget=v,k=null,bn(h)===d&&(w=new w(g,f+"enter",S,n,h),w.target=v,w.relatedTarget=C,k=w),C=k,y&&S)t:{for(w=y,g=S,f=0,v=w;v;v=zn(v))f++;for(v=0,k=g;k;k=zn(k))v++;for(;0<f-v;)w=zn(w),f--;for(;0<v-f;)g=zn(g),v--;for(;f--;){if(w===g||g!==null&&w===g.alternate)break t;w=zn(w),g=zn(g)}w=null}else w=null;y!==null&&$u(p,m,y,w,!1),S!==null&&C!==null&&$u(p,C,S,w,!0)}}e:{if(m=d?Gn(d):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var T=C1;else if(yu(m))if(zf)T=T1;else{T=b1;var $=k1}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(T=E1);if(T&&(T=T(e,d))){Nf(p,T,n,h);break e}$&&$(e,m,d),e==="focusout"&&($=m._wrapperState)&&$.controlled&&m.type==="number"&&Ba(m,"number",m.value)}switch($=d?Gn(d):window,e){case"focusin":(yu($)||$.contentEditable==="true")&&(Wn=$,Xa=d,Hr=null);break;case"focusout":Hr=Xa=Wn=null;break;case"mousedown":Za=!0;break;case"contextmenu":case"mouseup":case"dragend":Za=!1,bu(p,n,h);break;case"selectionchange":if(F1)break;case"keydown":case"keyup":bu(p,n,h)}var L;if(rc)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Vn?Df(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(If&&n.locale!=="ko"&&(Vn||z!=="onCompositionStart"?z==="onCompositionEnd"&&Vn&&(L=Of()):(nn=h,ec="value"in nn?nn.value:nn.textContent,Vn=!0)),$=yo(d,z),0<$.length&&(z=new gu(z,e,null,n,h),p.push({event:z,listeners:$}),L?z.data=L:(L=Lf(n),L!==null&&(z.data=L)))),(L=v1?x1(e,n):y1(e,n))&&(d=yo(d,"onBeforeInput"),0<d.length&&(h=new gu("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:d}),h.data=L))}Gf(p,t)})}function oi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function yo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Zr(e,n),o!=null&&r.unshift(oi(e,o,i)),o=Zr(e,t),o!=null&&r.push(oi(e,o,i))),e=e.return}return r}function zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $u(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,c=a.alternate,d=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&d!==null&&(a=d,i?(c=Zr(n,o),c!=null&&l.unshift(oi(n,c,a))):i||(c=Zr(n,o),c!=null&&l.push(oi(n,c,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var O1=/\r\n?/g,I1=/\u0000|\uFFFD/g;function _u(e){return(typeof e=="string"?e:""+e).replace(O1,`
`).replace(I1,"")}function Li(e,t,n){if(t=_u(t),_u(e)!==t&&n)throw Error(R(425))}function So(){}var Ja=null,es=null;function ts(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ns=typeof setTimeout=="function"?setTimeout:void 0,D1=typeof clearTimeout=="function"?clearTimeout:void 0,Fu=typeof Promise=="function"?Promise:void 0,L1=typeof queueMicrotask=="function"?queueMicrotask:typeof Fu<"u"?function(e){return Fu.resolve(null).then(e).catch(N1)}:ns;function N1(e){setTimeout(function(){throw e})}function Xl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ti(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ti(t)}function cn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Pu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var xr=Math.random().toString(36).slice(2),Pt="__reactFiber$"+xr,li="__reactProps$"+xr,Ut="__reactContainer$"+xr,rs="__reactEvents$"+xr,z1="__reactListeners$"+xr,B1="__reactHandles$"+xr;function bn(e){var t=e[Pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ut]||n[Pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Pu(e);e!==null;){if(n=e[Pt])return n;e=Pu(e)}return t}e=n,n=e.parentNode}return null}function yi(e){return e=e[Pt]||e[Ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function Jo(e){return e[li]||null}var is=[],qn=-1;function yn(e){return{current:e}}function ge(e){0>qn||(e.current=is[qn],is[qn]=null,qn--)}function pe(e,t){qn++,is[qn]=e.current,e.current=t}var vn={},Qe=yn(vn),et=yn(!1),Pn=vn;function cr(e,t){var n=e.type.contextTypes;if(!n)return vn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function tt(e){return e=e.childContextTypes,e!=null}function wo(){ge(et),ge(Qe)}function Au(e,t,n){if(Qe.current!==vn)throw Error(R(168));pe(Qe,t),pe(et,n)}function Yf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(R(108,kg(e)||"Unknown",i));return ye({},n,r)}function Co(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vn,Pn=Qe.current,pe(Qe,e),pe(et,et.current),!0}function Ru(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=Yf(e,t,Pn),r.__reactInternalMemoizedMergedChildContext=e,ge(et),ge(Qe),pe(Qe,e)):ge(et),pe(et,n)}var Nt=null,el=!1,Zl=!1;function Xf(e){Nt===null?Nt=[e]:Nt.push(e)}function M1(e){el=!0,Xf(e)}function Sn(){if(!Zl&&Nt!==null){Zl=!0;var e=0,t=se;try{var n=Nt;for(se=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Nt=null,el=!1}catch(i){throw Nt!==null&&(Nt=Nt.slice(e+1)),Cf(Ys,Sn),i}finally{se=t,Zl=!1}}return null}var Yn=[],Xn=0,ko=null,bo=0,ut=[],dt=0,An=null,zt=1,Bt="";function Cn(e,t){Yn[Xn++]=bo,Yn[Xn++]=ko,ko=e,bo=t}function Zf(e,t,n){ut[dt++]=zt,ut[dt++]=Bt,ut[dt++]=An,An=e;var r=zt;e=Bt;var i=32-bt(r)-1;r&=~(1<<i),n+=1;var o=32-bt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,zt=1<<32-bt(t)+i|n<<i|r,Bt=o+e}else zt=1<<o|n<<i|r,Bt=e}function oc(e){e.return!==null&&(Cn(e,1),Zf(e,1,0))}function lc(e){for(;e===ko;)ko=Yn[--Xn],Yn[Xn]=null,bo=Yn[--Xn],Yn[Xn]=null;for(;e===An;)An=ut[--dt],ut[dt]=null,Bt=ut[--dt],ut[dt]=null,zt=ut[--dt],ut[dt]=null}var ot=null,it=null,me=!1,kt=null;function Jf(e,t){var n=pt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ou(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ot=e,it=cn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ot=e,it=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=An!==null?{id:zt,overflow:Bt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=pt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ot=e,it=null,!0):!1;default:return!1}}function os(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ls(e){if(me){var t=it;if(t){var n=t;if(!Ou(e,t)){if(os(e))throw Error(R(418));t=cn(n.nextSibling);var r=ot;t&&Ou(e,t)?Jf(r,n):(e.flags=e.flags&-4097|2,me=!1,ot=e)}}else{if(os(e))throw Error(R(418));e.flags=e.flags&-4097|2,me=!1,ot=e}}}function Iu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ot=e}function Ni(e){if(e!==ot)return!1;if(!me)return Iu(e),me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ts(e.type,e.memoizedProps)),t&&(t=it)){if(os(e))throw eh(),Error(R(418));for(;t;)Jf(e,t),t=cn(t.nextSibling)}if(Iu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){it=cn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}it=null}}else it=ot?cn(e.stateNode.nextSibling):null;return!0}function eh(){for(var e=it;e;)e=cn(e.nextSibling)}function ur(){it=ot=null,me=!1}function ac(e){kt===null?kt=[e]:kt.push(e)}var j1=Vt.ReactCurrentBatchConfig;function Pr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function zi(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Du(e){var t=e._init;return t(e._payload)}function th(e){function t(g,f){if(e){var v=g.deletions;v===null?(g.deletions=[f],g.flags|=16):v.push(f)}}function n(g,f){if(!e)return null;for(;f!==null;)t(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function i(g,f){return g=fn(g,f),g.index=0,g.sibling=null,g}function o(g,f,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<f?(g.flags|=2,f):v):(g.flags|=2,f)):(g.flags|=1048576,f)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,f,v,k){return f===null||f.tag!==6?(f=oa(v,g.mode,k),f.return=g,f):(f=i(f,v),f.return=g,f)}function c(g,f,v,k){var T=v.type;return T===Qn?h(g,f,v.props.children,k,v.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Xt&&Du(T)===f.type)?(k=i(f,v.props),k.ref=Pr(g,f,v),k.return=g,k):(k=lo(v.type,v.key,v.props,null,g.mode,k),k.ref=Pr(g,f,v),k.return=g,k)}function d(g,f,v,k){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=la(v,g.mode,k),f.return=g,f):(f=i(f,v.children||[]),f.return=g,f)}function h(g,f,v,k,T){return f===null||f.tag!==7?(f=Fn(v,g.mode,k,T),f.return=g,f):(f=i(f,v),f.return=g,f)}function p(g,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=oa(""+f,g.mode,v),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case $i:return v=lo(f.type,f.key,f.props,null,g.mode,v),v.ref=Pr(g,null,f),v.return=g,v;case Hn:return f=la(f,g.mode,v),f.return=g,f;case Xt:var k=f._init;return p(g,k(f._payload),v)}if(Lr(f)||Er(f))return f=Fn(f,g.mode,v,null),f.return=g,f;zi(g,f)}return null}function m(g,f,v,k){var T=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return T!==null?null:a(g,f,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case $i:return v.key===T?c(g,f,v,k):null;case Hn:return v.key===T?d(g,f,v,k):null;case Xt:return T=v._init,m(g,f,T(v._payload),k)}if(Lr(v)||Er(v))return T!==null?null:h(g,f,v,k,null);zi(g,v)}return null}function y(g,f,v,k,T){if(typeof k=="string"&&k!==""||typeof k=="number")return g=g.get(v)||null,a(f,g,""+k,T);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case $i:return g=g.get(k.key===null?v:k.key)||null,c(f,g,k,T);case Hn:return g=g.get(k.key===null?v:k.key)||null,d(f,g,k,T);case Xt:var $=k._init;return y(g,f,v,$(k._payload),T)}if(Lr(k)||Er(k))return g=g.get(v)||null,h(f,g,k,T,null);zi(f,k)}return null}function S(g,f,v,k){for(var T=null,$=null,L=f,z=f=0,Y=null;L!==null&&z<v.length;z++){L.index>z?(Y=L,L=null):Y=L.sibling;var A=m(g,L,v[z],k);if(A===null){L===null&&(L=Y);break}e&&L&&A.alternate===null&&t(g,L),f=o(A,f,z),$===null?T=A:$.sibling=A,$=A,L=Y}if(z===v.length)return n(g,L),me&&Cn(g,z),T;if(L===null){for(;z<v.length;z++)L=p(g,v[z],k),L!==null&&(f=o(L,f,z),$===null?T=L:$.sibling=L,$=L);return me&&Cn(g,z),T}for(L=r(g,L);z<v.length;z++)Y=y(L,g,z,v[z],k),Y!==null&&(e&&Y.alternate!==null&&L.delete(Y.key===null?z:Y.key),f=o(Y,f,z),$===null?T=Y:$.sibling=Y,$=Y);return e&&L.forEach(function(j){return t(g,j)}),me&&Cn(g,z),T}function w(g,f,v,k){var T=Er(v);if(typeof T!="function")throw Error(R(150));if(v=T.call(v),v==null)throw Error(R(151));for(var $=T=null,L=f,z=f=0,Y=null,A=v.next();L!==null&&!A.done;z++,A=v.next()){L.index>z?(Y=L,L=null):Y=L.sibling;var j=m(g,L,A.value,k);if(j===null){L===null&&(L=Y);break}e&&L&&j.alternate===null&&t(g,L),f=o(j,f,z),$===null?T=j:$.sibling=j,$=j,L=Y}if(A.done)return n(g,L),me&&Cn(g,z),T;if(L===null){for(;!A.done;z++,A=v.next())A=p(g,A.value,k),A!==null&&(f=o(A,f,z),$===null?T=A:$.sibling=A,$=A);return me&&Cn(g,z),T}for(L=r(g,L);!A.done;z++,A=v.next())A=y(L,g,z,A.value,k),A!==null&&(e&&A.alternate!==null&&L.delete(A.key===null?z:A.key),f=o(A,f,z),$===null?T=A:$.sibling=A,$=A);return e&&L.forEach(function(H){return t(g,H)}),me&&Cn(g,z),T}function C(g,f,v,k){if(typeof v=="object"&&v!==null&&v.type===Qn&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case $i:e:{for(var T=v.key,$=f;$!==null;){if($.key===T){if(T=v.type,T===Qn){if($.tag===7){n(g,$.sibling),f=i($,v.props.children),f.return=g,g=f;break e}}else if($.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Xt&&Du(T)===$.type){n(g,$.sibling),f=i($,v.props),f.ref=Pr(g,$,v),f.return=g,g=f;break e}n(g,$);break}else t(g,$);$=$.sibling}v.type===Qn?(f=Fn(v.props.children,g.mode,k,v.key),f.return=g,g=f):(k=lo(v.type,v.key,v.props,null,g.mode,k),k.ref=Pr(g,f,v),k.return=g,g=k)}return l(g);case Hn:e:{for($=v.key;f!==null;){if(f.key===$)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){n(g,f.sibling),f=i(f,v.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else t(g,f);f=f.sibling}f=la(v,g.mode,k),f.return=g,g=f}return l(g);case Xt:return $=v._init,C(g,f,$(v._payload),k)}if(Lr(v))return S(g,f,v,k);if(Er(v))return w(g,f,v,k);zi(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(n(g,f.sibling),f=i(f,v),f.return=g,g=f):(n(g,f),f=oa(v,g.mode,k),f.return=g,g=f),l(g)):n(g,f)}return C}var dr=th(!0),nh=th(!1),Eo=yn(null),To=null,Zn=null,sc=null;function cc(){sc=Zn=To=null}function uc(e){var t=Eo.current;ge(Eo),e._currentValue=t}function as(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function lr(e,t){To=e,sc=Zn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Je=!0),e.firstContext=null)}function ht(e){var t=e._currentValue;if(sc!==e)if(e={context:e,memoizedValue:t,next:null},Zn===null){if(To===null)throw Error(R(308));Zn=e,To.dependencies={lanes:0,firstContext:e}}else Zn=Zn.next=e;return t}var En=null;function dc(e){En===null?En=[e]:En.push(e)}function rh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,dc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ht(e,r)}function Ht(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Zt=!1;function pc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ih(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function un(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ne&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ht(e,n)}return i=r.interleaved,i===null?(t.next=t,dc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ht(e,n)}function eo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xs(e,n)}}function Lu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $o(e,t,n,r){var i=e.updateQueue;Zt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var c=a,d=c.next;c.next=null,l===null?o=d:l.next=d,l=c;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==l&&(a===null?h.firstBaseUpdate=d:a.next=d,h.lastBaseUpdate=c))}if(o!==null){var p=i.baseState;l=0,h=d=c=null,a=o;do{var m=a.lane,y=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=e,w=a;switch(m=t,y=n,w.tag){case 1:if(S=w.payload,typeof S=="function"){p=S.call(y,p,m);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=w.payload,m=typeof S=="function"?S.call(y,p,m):S,m==null)break e;p=ye({},p,m);break e;case 2:Zt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else y={eventTime:y,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(d=h=y,c=p):h=h.next=y,l|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(h===null&&(c=p),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);On|=l,e.lanes=l,e.memoizedState=p}}function Nu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var Si={},Ot=yn(Si),ai=yn(Si),si=yn(Si);function Tn(e){if(e===Si)throw Error(R(174));return e}function fc(e,t){switch(pe(si,t),pe(ai,e),pe(Ot,Si),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ja(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ja(t,e)}ge(Ot),pe(Ot,t)}function pr(){ge(Ot),ge(ai),ge(si)}function oh(e){Tn(si.current);var t=Tn(Ot.current),n=ja(t,e.type);t!==n&&(pe(ai,e),pe(Ot,n))}function hc(e){ai.current===e&&(ge(Ot),ge(ai))}var ve=yn(0);function _o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Jl=[];function gc(){for(var e=0;e<Jl.length;e++)Jl[e]._workInProgressVersionPrimary=null;Jl.length=0}var to=Vt.ReactCurrentDispatcher,ea=Vt.ReactCurrentBatchConfig,Rn=0,xe=null,_e=null,Pe=null,Fo=!1,Qr=!1,ci=0,U1=0;function Me(){throw Error(R(321))}function mc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tt(e[n],t[n]))return!1;return!0}function vc(e,t,n,r,i,o){if(Rn=o,xe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,to.current=e===null||e.memoizedState===null?W1:K1,e=n(r,i),Qr){o=0;do{if(Qr=!1,ci=0,25<=o)throw Error(R(301));o+=1,Pe=_e=null,t.updateQueue=null,to.current=G1,e=n(r,i)}while(Qr)}if(to.current=Po,t=_e!==null&&_e.next!==null,Rn=0,Pe=_e=xe=null,Fo=!1,t)throw Error(R(300));return e}function xc(){var e=ci!==0;return ci=0,e}function Ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?xe.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function gt(){if(_e===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=Pe===null?xe.memoizedState:Pe.next;if(t!==null)Pe=t,_e=e;else{if(e===null)throw Error(R(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Pe===null?xe.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function ui(e,t){return typeof t=="function"?t(e):t}function ta(e){var t=gt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=_e,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,c=null,d=o;do{var h=d.lane;if((Rn&h)===h)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var p={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(a=c=p,l=r):c=c.next=p,xe.lanes|=h,On|=h}d=d.next}while(d!==null&&d!==o);c===null?l=r:c.next=a,Tt(r,t.memoizedState)||(Je=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,xe.lanes|=o,On|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function na(e){var t=gt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Tt(o,t.memoizedState)||(Je=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function lh(){}function ah(e,t){var n=xe,r=gt(),i=t(),o=!Tt(r.memoizedState,i);if(o&&(r.memoizedState=i,Je=!0),r=r.queue,yc(uh.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Pe!==null&&Pe.memoizedState.tag&1){if(n.flags|=2048,di(9,ch.bind(null,n,r,i,t),void 0,null),Ae===null)throw Error(R(349));Rn&30||sh(n,t,i)}return i}function sh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=xe.updateQueue,t===null?(t={lastEffect:null,stores:null},xe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ch(e,t,n,r){t.value=n,t.getSnapshot=r,dh(t)&&ph(e)}function uh(e,t,n){return n(function(){dh(t)&&ph(e)})}function dh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tt(e,n)}catch{return!0}}function ph(e){var t=Ht(e,1);t!==null&&Et(t,e,1,-1)}function zu(e){var t=Ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ui,lastRenderedState:e},t.queue=e,e=e.dispatch=V1.bind(null,xe,e),[t.memoizedState,e]}function di(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=xe.updateQueue,t===null?(t={lastEffect:null,stores:null},xe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function fh(){return gt().memoizedState}function no(e,t,n,r){var i=Ft();xe.flags|=e,i.memoizedState=di(1|t,n,void 0,r===void 0?null:r)}function tl(e,t,n,r){var i=gt();r=r===void 0?null:r;var o=void 0;if(_e!==null){var l=_e.memoizedState;if(o=l.destroy,r!==null&&mc(r,l.deps)){i.memoizedState=di(t,n,o,r);return}}xe.flags|=e,i.memoizedState=di(1|t,n,o,r)}function Bu(e,t){return no(8390656,8,e,t)}function yc(e,t){return tl(2048,8,e,t)}function hh(e,t){return tl(4,2,e,t)}function gh(e,t){return tl(4,4,e,t)}function mh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vh(e,t,n){return n=n!=null?n.concat([e]):null,tl(4,4,mh.bind(null,t,e),n)}function Sc(){}function xh(e,t){var n=gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&mc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function yh(e,t){var n=gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&mc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Sh(e,t,n){return Rn&21?(Tt(n,t)||(n=Ef(),xe.lanes|=n,On|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Je=!0),e.memoizedState=n)}function H1(e,t){var n=se;se=n!==0&&4>n?n:4,e(!0);var r=ea.transition;ea.transition={};try{e(!1),t()}finally{se=n,ea.transition=r}}function wh(){return gt().memoizedState}function Q1(e,t,n){var r=pn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ch(e))kh(t,n);else if(n=rh(e,t,n,r),n!==null){var i=Ke();Et(n,e,r,i),bh(n,t,r)}}function V1(e,t,n){var r=pn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ch(e))kh(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,Tt(a,l)){var c=t.interleaved;c===null?(i.next=i,dc(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=rh(e,t,i,r),n!==null&&(i=Ke(),Et(n,e,r,i),bh(n,t,r))}}function Ch(e){var t=e.alternate;return e===xe||t!==null&&t===xe}function kh(e,t){Qr=Fo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xs(e,n)}}var Po={readContext:ht,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useInsertionEffect:Me,useLayoutEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useMutableSource:Me,useSyncExternalStore:Me,useId:Me,unstable_isNewReconciler:!1},W1={readContext:ht,useCallback:function(e,t){return Ft().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:Bu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,no(4194308,4,mh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return no(4194308,4,e,t)},useInsertionEffect:function(e,t){return no(4,2,e,t)},useMemo:function(e,t){var n=Ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Q1.bind(null,xe,e),[r.memoizedState,e]},useRef:function(e){var t=Ft();return e={current:e},t.memoizedState=e},useState:zu,useDebugValue:Sc,useDeferredValue:function(e){return Ft().memoizedState=e},useTransition:function(){var e=zu(!1),t=e[0];return e=H1.bind(null,e[1]),Ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=xe,i=Ft();if(me){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),Ae===null)throw Error(R(349));Rn&30||sh(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Bu(uh.bind(null,r,o,e),[e]),r.flags|=2048,di(9,ch.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ft(),t=Ae.identifierPrefix;if(me){var n=Bt,r=zt;n=(r&~(1<<32-bt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ci++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=U1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},K1={readContext:ht,useCallback:xh,useContext:ht,useEffect:yc,useImperativeHandle:vh,useInsertionEffect:hh,useLayoutEffect:gh,useMemo:yh,useReducer:ta,useRef:fh,useState:function(){return ta(ui)},useDebugValue:Sc,useDeferredValue:function(e){var t=gt();return Sh(t,_e.memoizedState,e)},useTransition:function(){var e=ta(ui)[0],t=gt().memoizedState;return[e,t]},useMutableSource:lh,useSyncExternalStore:ah,useId:wh,unstable_isNewReconciler:!1},G1={readContext:ht,useCallback:xh,useContext:ht,useEffect:yc,useImperativeHandle:vh,useInsertionEffect:hh,useLayoutEffect:gh,useMemo:yh,useReducer:na,useRef:fh,useState:function(){return na(ui)},useDebugValue:Sc,useDeferredValue:function(e){var t=gt();return _e===null?t.memoizedState=e:Sh(t,_e.memoizedState,e)},useTransition:function(){var e=na(ui)[0],t=gt().memoizedState;return[e,t]},useMutableSource:lh,useSyncExternalStore:ah,useId:wh,unstable_isNewReconciler:!1};function wt(e,t){if(e&&e.defaultProps){t=ye({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ss(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ye({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var nl={isMounted:function(e){return(e=e._reactInternals)?Nn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ke(),i=pn(e),o=Mt(r,i);o.payload=t,n!=null&&(o.callback=n),t=un(e,o,i),t!==null&&(Et(t,e,i,r),eo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ke(),i=pn(e),o=Mt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=un(e,o,i),t!==null&&(Et(t,e,i,r),eo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ke(),r=pn(e),i=Mt(n,r);i.tag=2,t!=null&&(i.callback=t),t=un(e,i,r),t!==null&&(Et(t,e,r,n),eo(t,e,r))}};function Mu(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!ri(n,r)||!ri(i,o):!0}function Eh(e,t,n){var r=!1,i=vn,o=t.contextType;return typeof o=="object"&&o!==null?o=ht(o):(i=tt(t)?Pn:Qe.current,r=t.contextTypes,o=(r=r!=null)?cr(e,i):vn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=nl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ju(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&nl.enqueueReplaceState(t,t.state,null)}function cs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},pc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ht(o):(o=tt(t)?Pn:Qe.current,i.context=cr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ss(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&nl.enqueueReplaceState(i,i.state,null),$o(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function fr(e,t){try{var n="",r=t;do n+=Cg(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ra(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function us(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var q1=typeof WeakMap=="function"?WeakMap:Map;function Th(e,t,n){n=Mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ro||(Ro=!0,Ss=r),us(e,t)},n}function $h(e,t,n){n=Mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){us(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){us(e,t),typeof r!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Uu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new q1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=cm.bind(null,e,t,n),t.then(e,e))}function Hu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Mt(-1,1),t.tag=2,un(n,t,1))),n.lanes|=1),e)}var Y1=Vt.ReactCurrentOwner,Je=!1;function We(e,t,n,r){t.child=e===null?nh(t,null,n,r):dr(t,e.child,n,r)}function Vu(e,t,n,r,i){n=n.render;var o=t.ref;return lr(t,i),r=vc(e,t,n,r,o,i),n=xc(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Qt(e,t,i)):(me&&n&&oc(t),t.flags|=1,We(e,t,r,i),t.child)}function Wu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!_c(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,_h(e,t,o,r,i)):(e=lo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:ri,n(l,r)&&e.ref===t.ref)return Qt(e,t,i)}return t.flags|=1,e=fn(o,r),e.ref=t.ref,e.return=t,t.child=e}function _h(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ri(o,r)&&e.ref===t.ref)if(Je=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Je=!0);else return t.lanes=e.lanes,Qt(e,t,i)}return ds(e,t,n,r,i)}function Fh(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(er,rt),rt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,pe(er,rt),rt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,pe(er,rt),rt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,pe(er,rt),rt|=r;return We(e,t,i,n),t.child}function Ph(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ds(e,t,n,r,i){var o=tt(n)?Pn:Qe.current;return o=cr(t,o),lr(t,i),n=vc(e,t,n,r,o,i),r=xc(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Qt(e,t,i)):(me&&r&&oc(t),t.flags|=1,We(e,t,n,i),t.child)}function Ku(e,t,n,r,i){if(tt(n)){var o=!0;Co(t)}else o=!1;if(lr(t,i),t.stateNode===null)ro(e,t),Eh(t,n,r),cs(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var c=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=ht(d):(d=tt(n)?Pn:Qe.current,d=cr(t,d));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||c!==d)&&ju(t,l,r,d),Zt=!1;var m=t.memoizedState;l.state=m,$o(t,r,l,i),c=t.memoizedState,a!==r||m!==c||et.current||Zt?(typeof h=="function"&&(ss(t,n,h,r),c=t.memoizedState),(a=Zt||Mu(t,n,a,r,m,c,d))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),l.props=r,l.state=c,l.context=d,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,ih(e,t),a=t.memoizedProps,d=t.type===t.elementType?a:wt(t.type,a),l.props=d,p=t.pendingProps,m=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=ht(c):(c=tt(n)?Pn:Qe.current,c=cr(t,c));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==p||m!==c)&&ju(t,l,r,c),Zt=!1,m=t.memoizedState,l.state=m,$o(t,r,l,i);var S=t.memoizedState;a!==p||m!==S||et.current||Zt?(typeof y=="function"&&(ss(t,n,y,r),S=t.memoizedState),(d=Zt||Mu(t,n,d,r,m,S,c)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,S,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,S,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),l.props=r,l.state=S,l.context=c,r=d):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return ps(e,t,n,r,o,i)}function ps(e,t,n,r,i,o){Ph(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Ru(t,n,!1),Qt(e,t,o);r=t.stateNode,Y1.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=dr(t,e.child,null,o),t.child=dr(t,null,a,o)):We(e,t,a,o),t.memoizedState=r.state,i&&Ru(t,n,!0),t.child}function Ah(e){var t=e.stateNode;t.pendingContext?Au(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Au(e,t.context,!1),fc(e,t.containerInfo)}function Gu(e,t,n,r,i){return ur(),ac(i),t.flags|=256,We(e,t,n,r),t.child}var fs={dehydrated:null,treeContext:null,retryLane:0};function hs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Rh(e,t,n){var r=t.pendingProps,i=ve.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),pe(ve,i&1),e===null)return ls(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=ol(l,r,0,null),e=Fn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=hs(n),t.memoizedState=fs,e):wc(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return X1(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=fn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=fn(a,o):(o=Fn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?hs(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=fs,r}return o=e.child,e=o.sibling,r=fn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function wc(e,t){return t=ol({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Bi(e,t,n,r){return r!==null&&ac(r),dr(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function X1(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=ra(Error(R(422))),Bi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ol({mode:"visible",children:r.children},i,0,null),o=Fn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&dr(t,e.child,null,l),t.child.memoizedState=hs(l),t.memoizedState=fs,o);if(!(t.mode&1))return Bi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(R(419)),r=ra(o,r,void 0),Bi(e,t,l,r)}if(a=(l&e.childLanes)!==0,Je||a){if(r=Ae,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ht(e,i),Et(r,e,i,-1))}return $c(),r=ra(Error(R(421))),Bi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=um.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,it=cn(i.nextSibling),ot=t,me=!0,kt=null,e!==null&&(ut[dt++]=zt,ut[dt++]=Bt,ut[dt++]=An,zt=e.id,Bt=e.overflow,An=t),t=wc(t,r.children),t.flags|=4096,t)}function qu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),as(e.return,t,n)}function ia(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Oh(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(We(e,t,r.children,n),r=ve.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qu(e,n,t);else if(e.tag===19)qu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(pe(ve,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_o(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ia(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_o(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ia(t,!0,n,null,o);break;case"together":ia(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ro(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),On|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=fn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Z1(e,t,n){switch(t.tag){case 3:Ah(t),ur();break;case 5:oh(t);break;case 1:tt(t.type)&&Co(t);break;case 4:fc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;pe(Eo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(pe(ve,ve.current&1),t.flags|=128,null):n&t.child.childLanes?Rh(e,t,n):(pe(ve,ve.current&1),e=Qt(e,t,n),e!==null?e.sibling:null);pe(ve,ve.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Oh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(ve,ve.current),r)break;return null;case 22:case 23:return t.lanes=0,Fh(e,t,n)}return Qt(e,t,n)}var Ih,gs,Dh,Lh;Ih=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gs=function(){};Dh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Tn(Ot.current);var o=null;switch(n){case"input":i=Na(e,i),r=Na(e,r),o=[];break;case"select":i=ye({},i,{value:void 0}),r=ye({},r,{value:void 0}),o=[];break;case"textarea":i=Ma(e,i),r=Ma(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=So)}Ua(n,r);var l;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var a=i[d];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Yr.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var c=r[d];if(a=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&c!==a&&(c!=null||a!=null))if(d==="style")if(a){for(l in a)!a.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&a[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(o||(o=[]),o.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(o=o||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Yr.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&fe("scroll",e),o||a===c||(o=[])):(o=o||[]).push(d,c))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};Lh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ar(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function J1(e,t,n){var r=t.pendingProps;switch(lc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(t),null;case 1:return tt(t.type)&&wo(),je(t),null;case 3:return r=t.stateNode,pr(),ge(et),ge(Qe),gc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ni(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,kt!==null&&(ks(kt),kt=null))),gs(e,t),je(t),null;case 5:hc(t);var i=Tn(si.current);if(n=t.type,e!==null&&t.stateNode!=null)Dh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return je(t),null}if(e=Tn(Ot.current),Ni(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Pt]=t,r[li]=o,e=(t.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<zr.length;i++)fe(zr[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":iu(r,o),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},fe("invalid",r);break;case"textarea":lu(r,o),fe("invalid",r)}Ua(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Li(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Li(r.textContent,a,e),i=["children",""+a]):Yr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&fe("scroll",r)}switch(n){case"input":_i(r),ou(r,o,!0);break;case"textarea":_i(r),au(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=So)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=uf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Pt]=t,e[li]=r,Ih(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ha(n,r),n){case"dialog":fe("cancel",e),fe("close",e),i=r;break;case"iframe":case"object":case"embed":fe("load",e),i=r;break;case"video":case"audio":for(i=0;i<zr.length;i++)fe(zr[i],e);i=r;break;case"source":fe("error",e),i=r;break;case"img":case"image":case"link":fe("error",e),fe("load",e),i=r;break;case"details":fe("toggle",e),i=r;break;case"input":iu(e,r),i=Na(e,r),fe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ye({},r,{value:void 0}),fe("invalid",e);break;case"textarea":lu(e,r),i=Ma(e,r),fe("invalid",e);break;default:i=r}Ua(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var c=a[o];o==="style"?ff(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&df(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Xr(e,c):typeof c=="number"&&Xr(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Yr.hasOwnProperty(o)?c!=null&&o==="onScroll"&&fe("scroll",e):c!=null&&Vs(e,o,c,l))}switch(n){case"input":_i(e),ou(e,r,!1);break;case"textarea":_i(e),au(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?nr(e,!!r.multiple,o,!1):r.defaultValue!=null&&nr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=So)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return je(t),null;case 6:if(e&&t.stateNode!=null)Lh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=Tn(si.current),Tn(Ot.current),Ni(t)){if(r=t.stateNode,n=t.memoizedProps,r[Pt]=t,(o=r.nodeValue!==n)&&(e=ot,e!==null))switch(e.tag){case 3:Li(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Li(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pt]=t,t.stateNode=r}return je(t),null;case 13:if(ge(ve),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(me&&it!==null&&t.mode&1&&!(t.flags&128))eh(),ur(),t.flags|=98560,o=!1;else if(o=Ni(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(R(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(R(317));o[Pt]=t}else ur(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;je(t),o=!1}else kt!==null&&(ks(kt),kt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ve.current&1?Fe===0&&(Fe=3):$c())),t.updateQueue!==null&&(t.flags|=4),je(t),null);case 4:return pr(),gs(e,t),e===null&&ii(t.stateNode.containerInfo),je(t),null;case 10:return uc(t.type._context),je(t),null;case 17:return tt(t.type)&&wo(),je(t),null;case 19:if(ge(ve),o=t.memoizedState,o===null)return je(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Ar(o,!1);else{if(Fe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=_o(e),l!==null){for(t.flags|=128,Ar(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return pe(ve,ve.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ee()>hr&&(t.flags|=128,r=!0,Ar(o,!1),t.lanes=4194304)}else{if(!r)if(e=_o(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ar(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!me)return je(t),null}else 2*Ee()-o.renderingStartTime>hr&&n!==1073741824&&(t.flags|=128,r=!0,Ar(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ee(),t.sibling=null,n=ve.current,pe(ve,r?n&1|2:n&1),t):(je(t),null);case 22:case 23:return Tc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?rt&1073741824&&(je(t),t.subtreeFlags&6&&(t.flags|=8192)):je(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function em(e,t){switch(lc(t),t.tag){case 1:return tt(t.type)&&wo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pr(),ge(et),ge(Qe),gc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return hc(t),null;case 13:if(ge(ve),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));ur()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ge(ve),null;case 4:return pr(),null;case 10:return uc(t.type._context),null;case 22:case 23:return Tc(),null;case 24:return null;default:return null}}var Mi=!1,He=!1,tm=typeof WeakSet=="function"?WeakSet:Set,M=null;function Jn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(e,t,r)}else n.current=null}function ms(e,t,n){try{n()}catch(r){we(e,t,r)}}var Yu=!1;function nm(e,t){if(Ja=vo,e=jf(),ic(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,c=-1,d=0,h=0,p=e,m=null;t:for(;;){for(var y;p!==n||i!==0&&p.nodeType!==3||(a=l+i),p!==o||r!==0&&p.nodeType!==3||(c=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(y=p.firstChild)!==null;)m=p,p=y;for(;;){if(p===e)break t;if(m===n&&++d===i&&(a=l),m===o&&++h===r&&(c=l),(y=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=y}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(es={focusedElem:e,selectionRange:n},vo=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var w=S.memoizedProps,C=S.memoizedState,g=t.stateNode,f=g.getSnapshotBeforeUpdate(t.elementType===t.type?w:wt(t.type,w),C);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(k){we(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return S=Yu,Yu=!1,S}function Vr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ms(t,n,o)}i=i.next}while(i!==r)}}function rl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function vs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Nh(e){var t=e.alternate;t!==null&&(e.alternate=null,Nh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pt],delete t[li],delete t[rs],delete t[z1],delete t[B1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zh(e){return e.tag===5||e.tag===3||e.tag===4}function Xu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=So));else if(r!==4&&(e=e.child,e!==null))for(xs(e,t,n),e=e.sibling;e!==null;)xs(e,t,n),e=e.sibling}function ys(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ys(e,t,n),e=e.sibling;e!==null;)ys(e,t,n),e=e.sibling}var Le=null,Ct=!1;function Yt(e,t,n){for(n=n.child;n!==null;)Bh(e,t,n),n=n.sibling}function Bh(e,t,n){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(qo,n)}catch{}switch(n.tag){case 5:He||Jn(n,t);case 6:var r=Le,i=Ct;Le=null,Yt(e,t,n),Le=r,Ct=i,Le!==null&&(Ct?(e=Le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Le.removeChild(n.stateNode));break;case 18:Le!==null&&(Ct?(e=Le,n=n.stateNode,e.nodeType===8?Xl(e.parentNode,n):e.nodeType===1&&Xl(e,n),ti(e)):Xl(Le,n.stateNode));break;case 4:r=Le,i=Ct,Le=n.stateNode.containerInfo,Ct=!0,Yt(e,t,n),Le=r,Ct=i;break;case 0:case 11:case 14:case 15:if(!He&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&ms(n,t,l),i=i.next}while(i!==r)}Yt(e,t,n);break;case 1:if(!He&&(Jn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){we(n,t,a)}Yt(e,t,n);break;case 21:Yt(e,t,n);break;case 22:n.mode&1?(He=(r=He)||n.memoizedState!==null,Yt(e,t,n),He=r):Yt(e,t,n);break;default:Yt(e,t,n)}}function Zu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new tm),t.forEach(function(r){var i=dm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function xt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Le=a.stateNode,Ct=!1;break e;case 3:Le=a.stateNode.containerInfo,Ct=!0;break e;case 4:Le=a.stateNode.containerInfo,Ct=!0;break e}a=a.return}if(Le===null)throw Error(R(160));Bh(o,l,i),Le=null,Ct=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){we(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Mh(t,e),t=t.sibling}function Mh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(xt(t,e),_t(e),r&4){try{Vr(3,e,e.return),rl(3,e)}catch(w){we(e,e.return,w)}try{Vr(5,e,e.return)}catch(w){we(e,e.return,w)}}break;case 1:xt(t,e),_t(e),r&512&&n!==null&&Jn(n,n.return);break;case 5:if(xt(t,e),_t(e),r&512&&n!==null&&Jn(n,n.return),e.flags&32){var i=e.stateNode;try{Xr(i,"")}catch(w){we(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&sf(i,o),Ha(a,l);var d=Ha(a,o);for(l=0;l<c.length;l+=2){var h=c[l],p=c[l+1];h==="style"?ff(i,p):h==="dangerouslySetInnerHTML"?df(i,p):h==="children"?Xr(i,p):Vs(i,h,p,d)}switch(a){case"input":za(i,o);break;case"textarea":cf(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?nr(i,!!o.multiple,y,!1):m!==!!o.multiple&&(o.defaultValue!=null?nr(i,!!o.multiple,o.defaultValue,!0):nr(i,!!o.multiple,o.multiple?[]:"",!1))}i[li]=o}catch(w){we(e,e.return,w)}}break;case 6:if(xt(t,e),_t(e),r&4){if(e.stateNode===null)throw Error(R(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){we(e,e.return,w)}}break;case 3:if(xt(t,e),_t(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ti(t.containerInfo)}catch(w){we(e,e.return,w)}break;case 4:xt(t,e),_t(e);break;case 13:xt(t,e),_t(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(bc=Ee())),r&4&&Zu(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(He=(d=He)||h,xt(t,e),He=d):xt(t,e),_t(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(M=e,h=e.child;h!==null;){for(p=M=h;M!==null;){switch(m=M,y=m.child,m.tag){case 0:case 11:case 14:case 15:Vr(4,m,m.return);break;case 1:Jn(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(w){we(r,n,w)}}break;case 5:Jn(m,m.return);break;case 22:if(m.memoizedState!==null){ed(p);continue}}y!==null?(y.return=m,M=y):ed(p)}h=h.sibling}e:for(h=null,p=e;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,c=p.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=pf("display",l))}catch(w){we(e,e.return,w)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(w){we(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:xt(t,e),_t(e),r&4&&Zu(e);break;case 21:break;default:xt(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(zh(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Xr(i,""),r.flags&=-33);var o=Xu(e);ys(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Xu(e);xs(e,a,l);break;default:throw Error(R(161))}}catch(c){we(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function rm(e,t,n){M=e,jh(e)}function jh(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var i=M,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Mi;if(!l){var a=i.alternate,c=a!==null&&a.memoizedState!==null||He;a=Mi;var d=He;if(Mi=l,(He=c)&&!d)for(M=i;M!==null;)l=M,c=l.child,l.tag===22&&l.memoizedState!==null?td(i):c!==null?(c.return=l,M=c):td(i);for(;o!==null;)M=o,jh(o),o=o.sibling;M=i,Mi=a,He=d}Ju(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,M=o):Ju(e)}}function Ju(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:He||rl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!He)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:wt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Nu(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Nu(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&ti(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}He||t.flags&512&&vs(t)}catch(m){we(t,t.return,m)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function ed(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function td(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rl(4,t)}catch(c){we(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){we(t,i,c)}}var o=t.return;try{vs(t)}catch(c){we(t,o,c)}break;case 5:var l=t.return;try{vs(t)}catch(c){we(t,l,c)}}}catch(c){we(t,t.return,c)}if(t===e){M=null;break}var a=t.sibling;if(a!==null){a.return=t.return,M=a;break}M=t.return}}var im=Math.ceil,Ao=Vt.ReactCurrentDispatcher,Cc=Vt.ReactCurrentOwner,ft=Vt.ReactCurrentBatchConfig,ne=0,Ae=null,$e=null,Ne=0,rt=0,er=yn(0),Fe=0,pi=null,On=0,il=0,kc=0,Wr=null,Ze=null,bc=0,hr=1/0,Lt=null,Ro=!1,Ss=null,dn=null,ji=!1,rn=null,Oo=0,Kr=0,ws=null,io=-1,oo=0;function Ke(){return ne&6?Ee():io!==-1?io:io=Ee()}function pn(e){return e.mode&1?ne&2&&Ne!==0?Ne&-Ne:j1.transition!==null?(oo===0&&(oo=Ef()),oo):(e=se,e!==0||(e=window.event,e=e===void 0?16:Rf(e.type)),e):1}function Et(e,t,n,r){if(50<Kr)throw Kr=0,ws=null,Error(R(185));vi(e,n,r),(!(ne&2)||e!==Ae)&&(e===Ae&&(!(ne&2)&&(il|=n),Fe===4&&tn(e,Ne)),nt(e,r),n===1&&ne===0&&!(t.mode&1)&&(hr=Ee()+500,el&&Sn()))}function nt(e,t){var n=e.callbackNode;jg(e,t);var r=mo(e,e===Ae?Ne:0);if(r===0)n!==null&&uu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&uu(n),t===1)e.tag===0?M1(nd.bind(null,e)):Xf(nd.bind(null,e)),L1(function(){!(ne&6)&&Sn()}),n=null;else{switch(Tf(r)){case 1:n=Ys;break;case 4:n=kf;break;case 16:n=go;break;case 536870912:n=bf;break;default:n=go}n=qh(n,Uh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Uh(e,t){if(io=-1,oo=0,ne&6)throw Error(R(327));var n=e.callbackNode;if(ar()&&e.callbackNode!==n)return null;var r=mo(e,e===Ae?Ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Io(e,r);else{t=r;var i=ne;ne|=2;var o=Qh();(Ae!==e||Ne!==t)&&(Lt=null,hr=Ee()+500,_n(e,t));do try{am();break}catch(a){Hh(e,a)}while(1);cc(),Ao.current=o,ne=i,$e!==null?t=0:(Ae=null,Ne=0,t=Fe)}if(t!==0){if(t===2&&(i=Ga(e),i!==0&&(r=i,t=Cs(e,i))),t===1)throw n=pi,_n(e,0),tn(e,r),nt(e,Ee()),n;if(t===6)tn(e,r);else{if(i=e.current.alternate,!(r&30)&&!om(i)&&(t=Io(e,r),t===2&&(o=Ga(e),o!==0&&(r=o,t=Cs(e,o))),t===1))throw n=pi,_n(e,0),tn(e,r),nt(e,Ee()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:kn(e,Ze,Lt);break;case 3:if(tn(e,r),(r&130023424)===r&&(t=bc+500-Ee(),10<t)){if(mo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ns(kn.bind(null,e,Ze,Lt),t);break}kn(e,Ze,Lt);break;case 4:if(tn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-bt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*im(r/1960))-r,10<r){e.timeoutHandle=ns(kn.bind(null,e,Ze,Lt),r);break}kn(e,Ze,Lt);break;case 5:kn(e,Ze,Lt);break;default:throw Error(R(329))}}}return nt(e,Ee()),e.callbackNode===n?Uh.bind(null,e):null}function Cs(e,t){var n=Wr;return e.current.memoizedState.isDehydrated&&(_n(e,t).flags|=256),e=Io(e,t),e!==2&&(t=Ze,Ze=n,t!==null&&ks(t)),e}function ks(e){Ze===null?Ze=e:Ze.push.apply(Ze,e)}function om(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Tt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tn(e,t){for(t&=~kc,t&=~il,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-bt(t),r=1<<n;e[n]=-1,t&=~r}}function nd(e){if(ne&6)throw Error(R(327));ar();var t=mo(e,0);if(!(t&1))return nt(e,Ee()),null;var n=Io(e,t);if(e.tag!==0&&n===2){var r=Ga(e);r!==0&&(t=r,n=Cs(e,r))}if(n===1)throw n=pi,_n(e,0),tn(e,t),nt(e,Ee()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kn(e,Ze,Lt),nt(e,Ee()),null}function Ec(e,t){var n=ne;ne|=1;try{return e(t)}finally{ne=n,ne===0&&(hr=Ee()+500,el&&Sn())}}function In(e){rn!==null&&rn.tag===0&&!(ne&6)&&ar();var t=ne;ne|=1;var n=ft.transition,r=se;try{if(ft.transition=null,se=1,e)return e()}finally{se=r,ft.transition=n,ne=t,!(ne&6)&&Sn()}}function Tc(){rt=er.current,ge(er)}function _n(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,D1(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(lc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wo();break;case 3:pr(),ge(et),ge(Qe),gc();break;case 5:hc(r);break;case 4:pr();break;case 13:ge(ve);break;case 19:ge(ve);break;case 10:uc(r.type._context);break;case 22:case 23:Tc()}n=n.return}if(Ae=e,$e=e=fn(e.current,null),Ne=rt=t,Fe=0,pi=null,kc=il=On=0,Ze=Wr=null,En!==null){for(t=0;t<En.length;t++)if(n=En[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}En=null}return e}function Hh(e,t){do{var n=$e;try{if(cc(),to.current=Po,Fo){for(var r=xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Fo=!1}if(Rn=0,Pe=_e=xe=null,Qr=!1,ci=0,Cc.current=null,n===null||n.return===null){Fe=1,pi=t,$e=null;break}e:{var o=e,l=n.return,a=n,c=t;if(t=Ne,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Hu(l);if(y!==null){y.flags&=-257,Qu(y,l,a,o,t),y.mode&1&&Uu(o,d,t),t=y,c=d;var S=t.updateQueue;if(S===null){var w=new Set;w.add(c),t.updateQueue=w}else S.add(c);break e}else{if(!(t&1)){Uu(o,d,t),$c();break e}c=Error(R(426))}}else if(me&&a.mode&1){var C=Hu(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Qu(C,l,a,o,t),ac(fr(c,a));break e}}o=c=fr(c,a),Fe!==4&&(Fe=2),Wr===null?Wr=[o]:Wr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=Th(o,c,t);Lu(o,g);break e;case 1:a=c;var f=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(dn===null||!dn.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=$h(o,a,t);Lu(o,k);break e}}o=o.return}while(o!==null)}Wh(n)}catch(T){t=T,$e===n&&n!==null&&($e=n=n.return);continue}break}while(1)}function Qh(){var e=Ao.current;return Ao.current=Po,e===null?Po:e}function $c(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),Ae===null||!(On&268435455)&&!(il&268435455)||tn(Ae,Ne)}function Io(e,t){var n=ne;ne|=2;var r=Qh();(Ae!==e||Ne!==t)&&(Lt=null,_n(e,t));do try{lm();break}catch(i){Hh(e,i)}while(1);if(cc(),ne=n,Ao.current=r,$e!==null)throw Error(R(261));return Ae=null,Ne=0,Fe}function lm(){for(;$e!==null;)Vh($e)}function am(){for(;$e!==null&&!Rg();)Vh($e)}function Vh(e){var t=Gh(e.alternate,e,rt);e.memoizedProps=e.pendingProps,t===null?Wh(e):$e=t,Cc.current=null}function Wh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=em(n,t),n!==null){n.flags&=32767,$e=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Fe=6,$e=null;return}}else if(n=J1(n,t,rt),n!==null){$e=n;return}if(t=t.sibling,t!==null){$e=t;return}$e=t=e}while(t!==null);Fe===0&&(Fe=5)}function kn(e,t,n){var r=se,i=ft.transition;try{ft.transition=null,se=1,sm(e,t,n,r)}finally{ft.transition=i,se=r}return null}function sm(e,t,n,r){do ar();while(rn!==null);if(ne&6)throw Error(R(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ug(e,o),e===Ae&&($e=Ae=null,Ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ji||(ji=!0,qh(go,function(){return ar(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ft.transition,ft.transition=null;var l=se;se=1;var a=ne;ne|=4,Cc.current=null,nm(e,n),Mh(n,e),_1(es),vo=!!Ja,es=Ja=null,e.current=n,rm(n),Og(),ne=a,se=l,ft.transition=o}else e.current=n;if(ji&&(ji=!1,rn=e,Oo=i),o=e.pendingLanes,o===0&&(dn=null),Lg(n.stateNode),nt(e,Ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ro)throw Ro=!1,e=Ss,Ss=null,e;return Oo&1&&e.tag!==0&&ar(),o=e.pendingLanes,o&1?e===ws?Kr++:(Kr=0,ws=e):Kr=0,Sn(),null}function ar(){if(rn!==null){var e=Tf(Oo),t=ft.transition,n=se;try{if(ft.transition=null,se=16>e?16:e,rn===null)var r=!1;else{if(e=rn,rn=null,Oo=0,ne&6)throw Error(R(331));var i=ne;for(ne|=4,M=e.current;M!==null;){var o=M,l=o.child;if(M.flags&16){var a=o.deletions;if(a!==null){for(var c=0;c<a.length;c++){var d=a[c];for(M=d;M!==null;){var h=M;switch(h.tag){case 0:case 11:case 15:Vr(8,h,o)}var p=h.child;if(p!==null)p.return=h,M=p;else for(;M!==null;){h=M;var m=h.sibling,y=h.return;if(Nh(h),h===d){M=null;break}if(m!==null){m.return=y,M=m;break}M=y}}}var S=o.alternate;if(S!==null){var w=S.child;if(w!==null){S.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}M=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,M=l;else e:for(;M!==null;){if(o=M,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Vr(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,M=g;break e}M=o.return}}var f=e.current;for(M=f;M!==null;){l=M;var v=l.child;if(l.subtreeFlags&2064&&v!==null)v.return=l,M=v;else e:for(l=f;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:rl(9,a)}}catch(T){we(a,a.return,T)}if(a===l){M=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,M=k;break e}M=a.return}}if(ne=i,Sn(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(qo,e)}catch{}r=!0}return r}finally{se=n,ft.transition=t}}return!1}function rd(e,t,n){t=fr(n,t),t=Th(e,t,1),e=un(e,t,1),t=Ke(),e!==null&&(vi(e,1,t),nt(e,t))}function we(e,t,n){if(e.tag===3)rd(e,e,n);else for(;t!==null;){if(t.tag===3){rd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dn===null||!dn.has(r))){e=fr(n,e),e=$h(t,e,1),t=un(t,e,1),e=Ke(),t!==null&&(vi(t,1,e),nt(t,e));break}}t=t.return}}function cm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ke(),e.pingedLanes|=e.suspendedLanes&n,Ae===e&&(Ne&n)===n&&(Fe===4||Fe===3&&(Ne&130023424)===Ne&&500>Ee()-bc?_n(e,0):kc|=n),nt(e,t)}function Kh(e,t){t===0&&(e.mode&1?(t=Ai,Ai<<=1,!(Ai&130023424)&&(Ai=4194304)):t=1);var n=Ke();e=Ht(e,t),e!==null&&(vi(e,t,n),nt(e,n))}function um(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Kh(e,n)}function dm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),Kh(e,n)}var Gh;Gh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||et.current)Je=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Je=!1,Z1(e,t,n);Je=!!(e.flags&131072)}else Je=!1,me&&t.flags&1048576&&Zf(t,bo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ro(e,t),e=t.pendingProps;var i=cr(t,Qe.current);lr(t,n),i=vc(null,t,r,e,i,n);var o=xc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,tt(r)?(o=!0,Co(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,pc(t),i.updater=nl,t.stateNode=i,i._reactInternals=t,cs(t,r,e,n),t=ps(null,t,r,!0,o,n)):(t.tag=0,me&&o&&oc(t),We(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ro(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=fm(r),e=wt(r,e),i){case 0:t=ds(null,t,r,e,n);break e;case 1:t=Ku(null,t,r,e,n);break e;case 11:t=Vu(null,t,r,e,n);break e;case 14:t=Wu(null,t,r,wt(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wt(r,i),ds(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wt(r,i),Ku(e,t,r,i,n);case 3:e:{if(Ah(t),e===null)throw Error(R(387));r=t.pendingProps,o=t.memoizedState,i=o.element,ih(e,t),$o(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=fr(Error(R(423)),t),t=Gu(e,t,r,n,i);break e}else if(r!==i){i=fr(Error(R(424)),t),t=Gu(e,t,r,n,i);break e}else for(it=cn(t.stateNode.containerInfo.firstChild),ot=t,me=!0,kt=null,n=nh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ur(),r===i){t=Qt(e,t,n);break e}We(e,t,r,n)}t=t.child}return t;case 5:return oh(t),e===null&&ls(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,ts(r,i)?l=null:o!==null&&ts(r,o)&&(t.flags|=32),Ph(e,t),We(e,t,l,n),t.child;case 6:return e===null&&ls(t),null;case 13:return Rh(e,t,n);case 4:return fc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=dr(t,null,r,n):We(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wt(r,i),Vu(e,t,r,i,n);case 7:return We(e,t,t.pendingProps,n),t.child;case 8:return We(e,t,t.pendingProps.children,n),t.child;case 12:return We(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,pe(Eo,r._currentValue),r._currentValue=l,o!==null)if(Tt(o.value,l)){if(o.children===i.children&&!et.current){t=Qt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=Mt(-1,n&-n),c.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?c.next=c:(c.next=h.next,h.next=c),d.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),as(o.return,n,t),a.lanes|=n;break}c=c.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(R(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),as(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}We(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,lr(t,n),i=ht(i),r=r(i),t.flags|=1,We(e,t,r,n),t.child;case 14:return r=t.type,i=wt(r,t.pendingProps),i=wt(r.type,i),Wu(e,t,r,i,n);case 15:return _h(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wt(r,i),ro(e,t),t.tag=1,tt(r)?(e=!0,Co(t)):e=!1,lr(t,n),Eh(t,r,i),cs(t,r,i,n),ps(null,t,r,!0,e,n);case 19:return Oh(e,t,n);case 22:return Fh(e,t,n)}throw Error(R(156,t.tag))};function qh(e,t){return Cf(e,t)}function pm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(e,t,n,r){return new pm(e,t,n,r)}function _c(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fm(e){if(typeof e=="function")return _c(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ks)return 11;if(e===Gs)return 14}return 2}function fn(e,t){var n=e.alternate;return n===null?(n=pt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function lo(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")_c(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Qn:return Fn(n.children,i,o,t);case Ws:l=8,i|=8;break;case Oa:return e=pt(12,n,t,i|2),e.elementType=Oa,e.lanes=o,e;case Ia:return e=pt(13,n,t,i),e.elementType=Ia,e.lanes=o,e;case Da:return e=pt(19,n,t,i),e.elementType=Da,e.lanes=o,e;case of:return ol(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case nf:l=10;break e;case rf:l=9;break e;case Ks:l=11;break e;case Gs:l=14;break e;case Xt:l=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=pt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Fn(e,t,n,r){return e=pt(7,e,r,t),e.lanes=n,e}function ol(e,t,n,r){return e=pt(22,e,r,t),e.elementType=of,e.lanes=n,e.stateNode={isHidden:!1},e}function oa(e,t,n){return e=pt(6,e,null,t),e.lanes=n,e}function la(e,t,n){return t=pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function hm(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ml(0),this.expirationTimes=Ml(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ml(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fc(e,t,n,r,i,o,l,a,c){return e=new hm(e,t,n,a,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=pt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pc(o),e}function gm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Yh(e){if(!e)return vn;e=e._reactInternals;e:{if(Nn(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(tt(n))return Yf(e,n,t)}return t}function Xh(e,t,n,r,i,o,l,a,c){return e=Fc(n,r,!0,e,i,o,l,a,c),e.context=Yh(null),n=e.current,r=Ke(),i=pn(n),o=Mt(r,i),o.callback=t??null,un(n,o,i),e.current.lanes=i,vi(e,i,r),nt(e,r),e}function ll(e,t,n,r){var i=t.current,o=Ke(),l=pn(i);return n=Yh(n),t.context===null?t.context=n:t.pendingContext=n,t=Mt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=un(i,t,l),e!==null&&(Et(e,i,l,o),eo(e,i,l)),l}function Do(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function id(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Pc(e,t){id(e,t),(e=e.alternate)&&id(e,t)}function mm(){return null}var Zh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ac(e){this._internalRoot=e}al.prototype.render=Ac.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));ll(e,t,null,null)};al.prototype.unmount=Ac.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;In(function(){ll(null,e,null,null)}),t[Ut]=null}};function al(e){this._internalRoot=e}al.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ff();e={blockedOn:null,target:e,priority:t};for(var n=0;n<en.length&&t!==0&&t<en[n].priority;n++);en.splice(n,0,e),n===0&&Af(e)}};function Rc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function sl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function od(){}function vm(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=Do(l);o.call(d)}}var l=Xh(t,r,e,0,null,!1,!1,"",od);return e._reactRootContainer=l,e[Ut]=l.current,ii(e.nodeType===8?e.parentNode:e),In(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var d=Do(c);a.call(d)}}var c=Fc(e,0,!1,null,null,!1,!1,"",od);return e._reactRootContainer=c,e[Ut]=c.current,ii(e.nodeType===8?e.parentNode:e),In(function(){ll(t,c,n,r)}),c}function cl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var c=Do(l);a.call(c)}}ll(t,l,e,i)}else l=vm(n,t,e,i,r);return Do(l)}$f=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nr(t.pendingLanes);n!==0&&(Xs(t,n|1),nt(t,Ee()),!(ne&6)&&(hr=Ee()+500,Sn()))}break;case 13:In(function(){var r=Ht(e,1);if(r!==null){var i=Ke();Et(r,e,1,i)}}),Pc(e,1)}};Zs=function(e){if(e.tag===13){var t=Ht(e,134217728);if(t!==null){var n=Ke();Et(t,e,134217728,n)}Pc(e,134217728)}};_f=function(e){if(e.tag===13){var t=pn(e),n=Ht(e,t);if(n!==null){var r=Ke();Et(n,e,t,r)}Pc(e,t)}};Ff=function(){return se};Pf=function(e,t){var n=se;try{return se=e,t()}finally{se=n}};Va=function(e,t,n){switch(t){case"input":if(za(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Jo(r);if(!i)throw Error(R(90));af(r),za(r,i)}}}break;case"textarea":cf(e,n);break;case"select":t=n.value,t!=null&&nr(e,!!n.multiple,t,!1)}};mf=Ec;vf=In;var xm={usingClientEntryPoint:!1,Events:[yi,Gn,Jo,hf,gf,Ec]},Rr={findFiberByHostInstance:bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ym={bundleType:Rr.bundleType,version:Rr.version,rendererPackageName:Rr.rendererPackageName,rendererConfig:Rr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Sf(e),e===null?null:e.stateNode},findFiberByHostInstance:Rr.findFiberByHostInstance||mm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ui=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ui.isDisabled&&Ui.supportsFiber)try{qo=Ui.inject(ym),Rt=Ui}catch{}}at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xm;at.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rc(t))throw Error(R(200));return gm(e,t,null,n)};at.createRoot=function(e,t){if(!Rc(e))throw Error(R(299));var n=!1,r="",i=Zh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Fc(e,1,!1,null,null,n,!1,r,i),e[Ut]=t.current,ii(e.nodeType===8?e.parentNode:e),new Ac(t)};at.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=Sf(t),e=e===null?null:e.stateNode,e};at.flushSync=function(e){return In(e)};at.hydrate=function(e,t,n){if(!sl(t))throw Error(R(200));return cl(null,e,t,!0,n)};at.hydrateRoot=function(e,t,n){if(!Rc(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Zh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Xh(t,null,e,1,n??null,i,!1,o,l),e[Ut]=t.current,ii(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new al(t)};at.render=function(e,t,n){if(!sl(t))throw Error(R(200));return cl(null,e,t,!1,n)};at.unmountComponentAtNode=function(e){if(!sl(e))throw Error(R(40));return e._reactRootContainer?(In(function(){cl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ut]=null})}),!0):!1};at.unstable_batchedUpdates=Ec;at.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!sl(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return cl(e,t,n,!1,r)};at.version="18.3.1-next-f1338f8080-20240426";function Jh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jh)}catch(e){console.error(e)}}Jh(),Zp.exports=at;var e0=Zp.exports;const Sm=Ls(e0);var ld=e0;Aa.createRoot=ld.createRoot,Aa.hydrateRoot=ld.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fi(){return fi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fi.apply(this,arguments)}var on;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(on||(on={}));const ad="popstate";function wm(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:a}=r.location;return bs("",{pathname:o,search:l,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Lo(i)}return km(t,n,null,e)}function Te(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function t0(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Cm(){return Math.random().toString(36).substr(2,8)}function sd(e,t){return{usr:e.state,key:e.key,idx:t}}function bs(e,t,n,r){return n===void 0&&(n=null),fi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?yr(t):t,{state:n,key:t&&t.key||r||Cm()})}function Lo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function yr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function km(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=on.Pop,c=null,d=h();d==null&&(d=0,l.replaceState(fi({},l.state,{idx:d}),""));function h(){return(l.state||{idx:null}).idx}function p(){a=on.Pop;let C=h(),g=C==null?null:C-d;d=C,c&&c({action:a,location:w.location,delta:g})}function m(C,g){a=on.Push;let f=bs(w.location,C,g);n&&n(f,C),d=h()+1;let v=sd(f,d),k=w.createHref(f);try{l.pushState(v,"",k)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(k)}o&&c&&c({action:a,location:w.location,delta:1})}function y(C,g){a=on.Replace;let f=bs(w.location,C,g);n&&n(f,C),d=h();let v=sd(f,d),k=w.createHref(f);l.replaceState(v,"",k),o&&c&&c({action:a,location:w.location,delta:0})}function S(C){let g=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof C=="string"?C:Lo(C);return f=f.replace(/ $/,"%20"),Te(g,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,g)}let w={get action(){return a},get location(){return e(i,l)},listen(C){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(ad,p),c=C,()=>{i.removeEventListener(ad,p),c=null}},createHref(C){return t(i,C)},createURL:S,encodeLocation(C){let g=S(C);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:m,replace:y,go(C){return l.go(C)}};return w}var cd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(cd||(cd={}));function bm(e,t,n){return n===void 0&&(n="/"),Em(e,t,n,!1)}function Em(e,t,n,r){let i=typeof t=="string"?yr(t):t,o=Oc(i.pathname||"/",n);if(o==null)return null;let l=n0(e);Tm(l);let a=null;for(let c=0;a==null&&c<l.length;++c){let d=Nm(o);a=Dm(l[c],d,r)}return a}function n0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,a)=>{let c={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};c.relativePath.startsWith("/")&&(Te(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let d=hn([r,c.relativePath]),h=n.concat(c);o.children&&o.children.length>0&&(Te(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),n0(o.children,t,h,d)),!(o.path==null&&!o.index)&&t.push({path:d,score:Om(d,o.index),routesMeta:h})};return e.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,l);else for(let c of r0(o.path))i(o,l,c)}),t}function r0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=r0(r.join("/")),a=[];return a.push(...l.map(c=>c===""?o:[o,c].join("/"))),i&&a.push(...l),a.map(c=>e.startsWith("/")&&c===""?"/":c)}function Tm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Im(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const $m=/^:[\w-]+$/,_m=3,Fm=2,Pm=1,Am=10,Rm=-2,ud=e=>e==="*";function Om(e,t){let n=e.split("/"),r=n.length;return n.some(ud)&&(r+=Rm),t&&(r+=Fm),n.filter(i=>!ud(i)).reduce((i,o)=>i+($m.test(o)?_m:o===""?Pm:Am),r)}function Im(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Dm(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},o="/",l=[];for(let a=0;a<r.length;++a){let c=r[a],d=a===r.length-1,h=o==="/"?t:t.slice(o.length)||"/",p=dd({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},h),m=c.route;if(!p&&d&&n&&!r[r.length-1].route.index&&(p=dd({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},h)),!p)return null;Object.assign(i,p.params),l.push({params:i,pathname:hn([o,p.pathname]),pathnameBase:jm(hn([o,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(o=hn([o,p.pathnameBase]))}return l}function dd(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Lm(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((d,h,p)=>{let{paramName:m,isOptional:y}=h;if(m==="*"){let w=a[p]||"";l=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const S=a[p];return y&&!S?d[m]=void 0:d[m]=(S||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:l,pattern:e}}function Lm(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),t0(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,c)=>(r.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Nm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return t0(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Oc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function zm(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?yr(e):e;return{pathname:n?n.startsWith("/")?n:Bm(n,t):t,search:Um(r),hash:Hm(i)}}function Bm(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function aa(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Mm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ic(e,t){let n=Mm(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Dc(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=yr(e):(i=fi({},e),Te(!i.pathname||!i.pathname.includes("?"),aa("?","pathname","search",i)),Te(!i.pathname||!i.pathname.includes("#"),aa("#","pathname","hash",i)),Te(!i.search||!i.search.includes("#"),aa("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,a;if(l==null)a=n;else{let p=t.length-1;if(!r&&l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}a=p>=0?t[p]:"/"}let c=zm(i,a),d=l&&l!=="/"&&l.endsWith("/"),h=(o||l===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||h)&&(c.pathname+="/"),c}const hn=e=>e.join("/").replace(/\/\/+/g,"/"),jm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Um=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Hm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Qm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const i0=["post","put","patch","delete"];new Set(i0);const Vm=["get",...i0];new Set(Vm);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hi(){return hi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hi.apply(this,arguments)}const Lc=_.createContext(null),Wm=_.createContext(null),wn=_.createContext(null),ul=_.createContext(null),Wt=_.createContext({outlet:null,matches:[],isDataRoute:!1}),o0=_.createContext(null);function Km(e,t){let{relative:n}=t===void 0?{}:t;Sr()||Te(!1);let{basename:r,navigator:i}=_.useContext(wn),{hash:o,pathname:l,search:a}=a0(e,{relative:n}),c=l;return r!=="/"&&(c=l==="/"?r:hn([r,l])),i.createHref({pathname:c,search:a,hash:o})}function Sr(){return _.useContext(ul)!=null}function $t(){return Sr()||Te(!1),_.useContext(ul).location}function l0(e){_.useContext(wn).static||_.useLayoutEffect(e)}function Ve(){let{isDataRoute:e}=_.useContext(Wt);return e?lv():Gm()}function Gm(){Sr()||Te(!1);let e=_.useContext(Lc),{basename:t,future:n,navigator:r}=_.useContext(wn),{matches:i}=_.useContext(Wt),{pathname:o}=$t(),l=JSON.stringify(Ic(i,n.v7_relativeSplatPath)),a=_.useRef(!1);return l0(()=>{a.current=!0}),_.useCallback(function(d,h){if(h===void 0&&(h={}),!a.current)return;if(typeof d=="number"){r.go(d);return}let p=Dc(d,JSON.parse(l),o,h.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:hn([t,p.pathname])),(h.replace?r.replace:r.push)(p,h.state,h)},[t,r,l,o,e])}function wr(){let{matches:e}=_.useContext(Wt),t=e[e.length-1];return t?t.params:{}}function a0(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=_.useContext(wn),{matches:i}=_.useContext(Wt),{pathname:o}=$t(),l=JSON.stringify(Ic(i,r.v7_relativeSplatPath));return _.useMemo(()=>Dc(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function qm(e,t){return Ym(e,t)}function Ym(e,t,n,r){Sr()||Te(!1);let{navigator:i}=_.useContext(wn),{matches:o}=_.useContext(Wt),l=o[o.length-1],a=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let d=$t(),h;if(t){var p;let C=typeof t=="string"?yr(t):t;c==="/"||(p=C.pathname)!=null&&p.startsWith(c)||Te(!1),h=C}else h=d;let m=h.pathname||"/",y=m;if(c!=="/"){let C=c.replace(/^\//,"").split("/");y="/"+m.replace(/^\//,"").split("/").slice(C.length).join("/")}let S=bm(e,{pathname:y}),w=tv(S&&S.map(C=>Object.assign({},C,{params:Object.assign({},a,C.params),pathname:hn([c,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?c:hn([c,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),o,n,r);return t&&w?_.createElement(ul.Provider,{value:{location:hi({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:on.Pop}},w):w}function Xm(){let e=ov(),t=Qm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},t),n?_.createElement("pre",{style:i},n):null,o)}const Zm=_.createElement(Xm,null);class Jm extends _.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?_.createElement(Wt.Provider,{value:this.props.routeContext},_.createElement(o0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ev(e){let{routeContext:t,match:n,children:r}=e,i=_.useContext(Lc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(Wt.Provider,{value:t},r)}function tv(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=l.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);h>=0||Te(!1),l=l.slice(0,Math.min(l.length,h+1))}let c=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<l.length;h++){let p=l[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=h),p.route.id){let{loaderData:m,errors:y}=n,S=p.route.loader&&m[p.route.id]===void 0&&(!y||y[p.route.id]===void 0);if(p.route.lazy||S){c=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((h,p,m)=>{let y,S=!1,w=null,C=null;n&&(y=a&&p.route.id?a[p.route.id]:void 0,w=p.route.errorElement||Zm,c&&(d<0&&m===0?(av("route-fallback",!1),S=!0,C=null):d===m&&(S=!0,C=p.route.hydrateFallbackElement||null)));let g=t.concat(l.slice(0,m+1)),f=()=>{let v;return y?v=w:S?v=C:p.route.Component?v=_.createElement(p.route.Component,null):p.route.element?v=p.route.element:v=h,_.createElement(ev,{match:p,routeContext:{outlet:h,matches:g,isDataRoute:n!=null},children:v})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?_.createElement(Jm,{location:n.location,revalidation:n.revalidation,component:w,error:y,children:f(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):f()},null)}var s0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(s0||{}),No=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(No||{});function nv(e){let t=_.useContext(Lc);return t||Te(!1),t}function rv(e){let t=_.useContext(Wm);return t||Te(!1),t}function iv(e){let t=_.useContext(Wt);return t||Te(!1),t}function c0(e){let t=iv(),n=t.matches[t.matches.length-1];return n.route.id||Te(!1),n.route.id}function ov(){var e;let t=_.useContext(o0),n=rv(No.UseRouteError),r=c0(No.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function lv(){let{router:e}=nv(s0.UseNavigateStable),t=c0(No.UseNavigateStable),n=_.useRef(!1);return l0(()=>{n.current=!0}),_.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,hi({fromRouteId:t},o)))},[e,t])}const pd={};function av(e,t,n){!t&&!pd[e]&&(pd[e]=!0)}function sv(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function cv(e){let{to:t,replace:n,state:r,relative:i}=e;Sr()||Te(!1);let{future:o,static:l}=_.useContext(wn),{matches:a}=_.useContext(Wt),{pathname:c}=$t(),d=Ve(),h=Dc(t,Ic(a,o.v7_relativeSplatPath),c,i==="path"),p=JSON.stringify(h);return _.useEffect(()=>d(JSON.parse(p),{replace:n,state:r,relative:i}),[d,p,i,n,r]),null}function Xe(e){Te(!1)}function uv(e){let{basename:t="/",children:n=null,location:r,navigationType:i=on.Pop,navigator:o,static:l=!1,future:a}=e;Sr()&&Te(!1);let c=t.replace(/^\/*/,"/"),d=_.useMemo(()=>({basename:c,navigator:o,static:l,future:hi({v7_relativeSplatPath:!1},a)}),[c,a,o,l]);typeof r=="string"&&(r=yr(r));let{pathname:h="/",search:p="",hash:m="",state:y=null,key:S="default"}=r,w=_.useMemo(()=>{let C=Oc(h,c);return C==null?null:{location:{pathname:C,search:p,hash:m,state:y,key:S},navigationType:i}},[c,h,p,m,y,S,i]);return w==null?null:_.createElement(wn.Provider,{value:d},_.createElement(ul.Provider,{children:n,value:w}))}function dv(e){let{children:t,location:n}=e;return qm(Es(t),n)}new Promise(()=>{});function Es(e,t){t===void 0&&(t=[]);let n=[];return _.Children.forEach(e,(r,i)=>{if(!_.isValidElement(r))return;let o=[...t,i];if(r.type===_.Fragment){n.push.apply(n,Es(r.props.children,o));return}r.type!==Xe&&Te(!1),!r.props.index||!r.props.children||Te(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Es(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ts(){return Ts=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ts.apply(this,arguments)}function pv(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function fv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function hv(e,t){return e.button===0&&(!t||t==="_self")&&!fv(e)}const gv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],mv="6";try{window.__reactRouterVersion=mv}catch{}const vv="startTransition",fd=cg[vv];function xv(e){let{basename:t,children:n,future:r,window:i}=e,o=_.useRef();o.current==null&&(o.current=wm({window:i,v5Compat:!0}));let l=o.current,[a,c]=_.useState({action:l.action,location:l.location}),{v7_startTransition:d}=r||{},h=_.useCallback(p=>{d&&fd?fd(()=>c(p)):c(p)},[c,d]);return _.useLayoutEffect(()=>l.listen(h),[l,h]),_.useEffect(()=>sv(r),[r]),_.createElement(uv,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}const yv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Sv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wv=_.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:a,target:c,to:d,preventScrollReset:h,viewTransition:p}=t,m=pv(t,gv),{basename:y}=_.useContext(wn),S,w=!1;if(typeof d=="string"&&Sv.test(d)&&(S=d,yv))try{let v=new URL(window.location.href),k=d.startsWith("//")?new URL(v.protocol+d):new URL(d),T=Oc(k.pathname,y);k.origin===v.origin&&T!=null?d=T+k.search+k.hash:w=!0}catch{}let C=Km(d,{relative:i}),g=Cv(d,{replace:l,state:a,target:c,preventScrollReset:h,relative:i,viewTransition:p});function f(v){r&&r(v),v.defaultPrevented||g(v)}return _.createElement("a",Ts({},m,{href:S||C,onClick:w||o?r:f,ref:n,target:c}))});var hd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(hd||(hd={}));var gd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(gd||(gd={}));function Cv(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,viewTransition:a}=t===void 0?{}:t,c=Ve(),d=$t(),h=a0(e,{relative:l});return _.useCallback(p=>{if(hv(p,n)){p.preventDefault();let m=r!==void 0?r:Lo(d)===Lo(h);c(e,{replace:m,state:i,preventScrollReset:o,relative:l,viewTransition:a})}},[d,c,h,r,i,n,e,o,l,a])}function $s(e,t){return $s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},$s(e,t)}function wi(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,$s(e,t)}var Ci=function(){function e(){this.listeners=[]}var t=e.prototype;return t.subscribe=function(r){var i=this,o=r||function(){};return this.listeners.push(o),this.onSubscribe(),function(){i.listeners=i.listeners.filter(function(l){return l!==o}),i.onUnsubscribe()}},t.hasListeners=function(){return this.listeners.length>0},t.onSubscribe=function(){},t.onUnsubscribe=function(){},e}();function ie(){return ie=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ie.apply(null,arguments)}var zo=typeof window>"u";function Ue(){}function kv(e,t){return typeof e=="function"?e(t):e}function _s(e){return typeof e=="number"&&e>=0&&e!==1/0}function Bo(e){return Array.isArray(e)?e:[e]}function u0(e,t){return Math.max(e+(t||0)-Date.now(),0)}function ao(e,t,n){return dl(e)?typeof t=="function"?ie({},n,{queryKey:e,queryFn:t}):ie({},t,{queryKey:e}):e}function Jt(e,t,n){return dl(e)?[ie({},t,{queryKey:e}),n]:[e||{},t]}function bv(e,t){if(e===!0&&t===!0||e==null&&t==null)return"all";if(e===!1&&t===!1)return"none";var n=e??!t;return n?"active":"inactive"}function md(e,t){var n=e.active,r=e.exact,i=e.fetching,o=e.inactive,l=e.predicate,a=e.queryKey,c=e.stale;if(dl(a)){if(r){if(t.queryHash!==Nc(a,t.options))return!1}else if(!Mo(t.queryKey,a))return!1}var d=bv(n,o);if(d==="none")return!1;if(d!=="all"){var h=t.isActive();if(d==="active"&&!h||d==="inactive"&&h)return!1}return!(typeof c=="boolean"&&t.isStale()!==c||typeof i=="boolean"&&t.isFetching()!==i||l&&!l(t))}function vd(e,t){var n=e.exact,r=e.fetching,i=e.predicate,o=e.mutationKey;if(dl(o)){if(!t.options.mutationKey)return!1;if(n){if($n(t.options.mutationKey)!==$n(o))return!1}else if(!Mo(t.options.mutationKey,o))return!1}return!(typeof r=="boolean"&&t.state.status==="loading"!==r||i&&!i(t))}function Nc(e,t){var n=(t==null?void 0:t.queryKeyHashFn)||$n;return n(e)}function $n(e){var t=Bo(e);return Ev(t)}function Ev(e){return JSON.stringify(e,function(t,n){return Fs(n)?Object.keys(n).sort().reduce(function(r,i){return r[i]=n[i],r},{}):n})}function Mo(e,t){return d0(Bo(e),Bo(t))}function d0(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(function(n){return!d0(e[n],t[n])}):!1}function jo(e,t){if(e===t)return e;var n=Array.isArray(e)&&Array.isArray(t);if(n||Fs(e)&&Fs(t)){for(var r=n?e.length:Object.keys(e).length,i=n?t:Object.keys(t),o=i.length,l=n?[]:{},a=0,c=0;c<o;c++){var d=n?c:i[c];l[d]=jo(e[d],t[d]),l[d]===e[d]&&a++}return r===o&&a===r?e:l}return t}function Tv(e,t){if(e&&!t||t&&!e)return!1;for(var n in e)if(e[n]!==t[n])return!1;return!0}function Fs(e){if(!xd(e))return!1;var t=e.constructor;if(typeof t>"u")return!0;var n=t.prototype;return!(!xd(n)||!n.hasOwnProperty("isPrototypeOf"))}function xd(e){return Object.prototype.toString.call(e)==="[object Object]"}function dl(e){return typeof e=="string"||Array.isArray(e)}function $v(e){return new Promise(function(t){setTimeout(t,e)})}function yd(e){Promise.resolve().then(e).catch(function(t){return setTimeout(function(){throw t})})}function p0(){if(typeof AbortController=="function")return new AbortController}var _v=function(e){wi(t,e);function t(){var r;return r=e.call(this)||this,r.setup=function(i){var o;if(!zo&&((o=window)!=null&&o.addEventListener)){var l=function(){return i()};return window.addEventListener("visibilitychange",l,!1),window.addEventListener("focus",l,!1),function(){window.removeEventListener("visibilitychange",l),window.removeEventListener("focus",l)}}},r}var n=t.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var i;(i=this.cleanup)==null||i.call(this),this.cleanup=void 0}},n.setEventListener=function(i){var o,l=this;this.setup=i,(o=this.cleanup)==null||o.call(this),this.cleanup=i(function(a){typeof a=="boolean"?l.setFocused(a):l.onFocus()})},n.setFocused=function(i){this.focused=i,i&&this.onFocus()},n.onFocus=function(){this.listeners.forEach(function(i){i()})},n.isFocused=function(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)},t}(Ci),Gr=new _v,Fv=function(e){wi(t,e);function t(){var r;return r=e.call(this)||this,r.setup=function(i){var o;if(!zo&&((o=window)!=null&&o.addEventListener)){var l=function(){return i()};return window.addEventListener("online",l,!1),window.addEventListener("offline",l,!1),function(){window.removeEventListener("online",l),window.removeEventListener("offline",l)}}},r}var n=t.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var i;(i=this.cleanup)==null||i.call(this),this.cleanup=void 0}},n.setEventListener=function(i){var o,l=this;this.setup=i,(o=this.cleanup)==null||o.call(this),this.cleanup=i(function(a){typeof a=="boolean"?l.setOnline(a):l.onOnline()})},n.setOnline=function(i){this.online=i,i&&this.onOnline()},n.onOnline=function(){this.listeners.forEach(function(i){i()})},n.isOnline=function(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine},t}(Ci),so=new Fv;function Pv(e){return Math.min(1e3*Math.pow(2,e),3e4)}function Uo(e){return typeof(e==null?void 0:e.cancel)=="function"}var f0=function(t){this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent};function co(e){return e instanceof f0}var h0=function(t){var n=this,r=!1,i,o,l,a;this.abort=t.abort,this.cancel=function(m){return i==null?void 0:i(m)},this.cancelRetry=function(){r=!0},this.continueRetry=function(){r=!1},this.continue=function(){return o==null?void 0:o()},this.failureCount=0,this.isPaused=!1,this.isResolved=!1,this.isTransportCancelable=!1,this.promise=new Promise(function(m,y){l=m,a=y});var c=function(y){n.isResolved||(n.isResolved=!0,t.onSuccess==null||t.onSuccess(y),o==null||o(),l(y))},d=function(y){n.isResolved||(n.isResolved=!0,t.onError==null||t.onError(y),o==null||o(),a(y))},h=function(){return new Promise(function(y){o=y,n.isPaused=!0,t.onPause==null||t.onPause()}).then(function(){o=void 0,n.isPaused=!1,t.onContinue==null||t.onContinue()})},p=function m(){if(!n.isResolved){var y;try{y=t.fn()}catch(S){y=Promise.reject(S)}i=function(w){if(!n.isResolved&&(d(new f0(w)),n.abort==null||n.abort(),Uo(y)))try{y.cancel()}catch{}},n.isTransportCancelable=Uo(y),Promise.resolve(y).then(c).catch(function(S){var w,C;if(!n.isResolved){var g=(w=t.retry)!=null?w:3,f=(C=t.retryDelay)!=null?C:Pv,v=typeof f=="function"?f(n.failureCount,S):f,k=g===!0||typeof g=="number"&&n.failureCount<g||typeof g=="function"&&g(n.failureCount,S);if(r||!k){d(S);return}n.failureCount++,t.onFail==null||t.onFail(n.failureCount,S),$v(v).then(function(){if(!Gr.isFocused()||!so.isOnline())return h()}).then(function(){r?d(S):m()})}})}};p()},Av=function(){function e(){this.queue=[],this.transactions=0,this.notifyFn=function(n){n()},this.batchNotifyFn=function(n){n()}}var t=e.prototype;return t.batch=function(r){var i;this.transactions++;try{i=r()}finally{this.transactions--,this.transactions||this.flush()}return i},t.schedule=function(r){var i=this;this.transactions?this.queue.push(r):yd(function(){i.notifyFn(r)})},t.batchCalls=function(r){var i=this;return function(){for(var o=arguments.length,l=new Array(o),a=0;a<o;a++)l[a]=arguments[a];i.schedule(function(){r.apply(void 0,l)})}},t.flush=function(){var r=this,i=this.queue;this.queue=[],i.length&&yd(function(){r.batchNotifyFn(function(){i.forEach(function(o){r.notifyFn(o)})})})},t.setNotifyFunction=function(r){this.notifyFn=r},t.setBatchNotifyFunction=function(r){this.batchNotifyFn=r},e}(),Ce=new Av,g0=console;function Ho(){return g0}function Rv(e){g0=e}var Ov=function(){function e(n){this.abortSignalConsumed=!1,this.hadObservers=!1,this.defaultOptions=n.defaultOptions,this.setOptions(n.options),this.observers=[],this.cache=n.cache,this.queryKey=n.queryKey,this.queryHash=n.queryHash,this.initialState=n.state||this.getDefaultState(this.options),this.state=this.initialState,this.meta=n.meta,this.scheduleGc()}var t=e.prototype;return t.setOptions=function(r){var i;this.options=ie({},this.defaultOptions,r),this.meta=r==null?void 0:r.meta,this.cacheTime=Math.max(this.cacheTime||0,(i=this.options.cacheTime)!=null?i:5*60*1e3)},t.setDefaultOptions=function(r){this.defaultOptions=r},t.scheduleGc=function(){var r=this;this.clearGcTimeout(),_s(this.cacheTime)&&(this.gcTimeout=setTimeout(function(){r.optionalRemove()},this.cacheTime))},t.clearGcTimeout=function(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)},t.optionalRemove=function(){this.observers.length||(this.state.isFetching?this.hadObservers&&this.scheduleGc():this.cache.remove(this))},t.setData=function(r,i){var o,l,a=this.state.data,c=kv(r,a);return(o=(l=this.options).isDataEqual)!=null&&o.call(l,a,c)?c=a:this.options.structuralSharing!==!1&&(c=jo(a,c)),this.dispatch({data:c,type:"success",dataUpdatedAt:i==null?void 0:i.updatedAt}),c},t.setState=function(r,i){this.dispatch({type:"setState",state:r,setStateOptions:i})},t.cancel=function(r){var i,o=this.promise;return(i=this.retryer)==null||i.cancel(r),o?o.then(Ue).catch(Ue):Promise.resolve()},t.destroy=function(){this.clearGcTimeout(),this.cancel({silent:!0})},t.reset=function(){this.destroy(),this.setState(this.initialState)},t.isActive=function(){return this.observers.some(function(r){return r.options.enabled!==!1})},t.isFetching=function(){return this.state.isFetching},t.isStale=function(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(function(r){return r.getCurrentResult().isStale})},t.isStaleByTime=function(r){return r===void 0&&(r=0),this.state.isInvalidated||!this.state.dataUpdatedAt||!u0(this.state.dataUpdatedAt,r)},t.onFocus=function(){var r,i=this.observers.find(function(o){return o.shouldFetchOnWindowFocus()});i&&i.refetch(),(r=this.retryer)==null||r.continue()},t.onOnline=function(){var r,i=this.observers.find(function(o){return o.shouldFetchOnReconnect()});i&&i.refetch(),(r=this.retryer)==null||r.continue()},t.addObserver=function(r){this.observers.indexOf(r)===-1&&(this.observers.push(r),this.hadObservers=!0,this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:r}))},t.removeObserver=function(r){this.observers.indexOf(r)!==-1&&(this.observers=this.observers.filter(function(i){return i!==r}),this.observers.length||(this.retryer&&(this.retryer.isTransportCancelable||this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.cacheTime?this.scheduleGc():this.cache.remove(this)),this.cache.notify({type:"observerRemoved",query:this,observer:r}))},t.getObserversCount=function(){return this.observers.length},t.invalidate=function(){this.state.isInvalidated||this.dispatch({type:"invalidate"})},t.fetch=function(r,i){var o=this,l,a,c;if(this.state.isFetching){if(this.state.dataUpdatedAt&&(i!=null&&i.cancelRefetch))this.cancel({silent:!0});else if(this.promise){var d;return(d=this.retryer)==null||d.continueRetry(),this.promise}}if(r&&this.setOptions(r),!this.options.queryFn){var h=this.observers.find(function(f){return f.options.queryFn});h&&this.setOptions(h.options)}var p=Bo(this.queryKey),m=p0(),y={queryKey:p,pageParam:void 0,meta:this.meta};Object.defineProperty(y,"signal",{enumerable:!0,get:function(){if(m)return o.abortSignalConsumed=!0,m.signal}});var S=function(){return o.options.queryFn?(o.abortSignalConsumed=!1,o.options.queryFn(y)):Promise.reject("Missing queryFn")},w={fetchOptions:i,options:this.options,queryKey:p,state:this.state,fetchFn:S,meta:this.meta};if((l=this.options.behavior)!=null&&l.onFetch){var C;(C=this.options.behavior)==null||C.onFetch(w)}if(this.revertState=this.state,!this.state.isFetching||this.state.fetchMeta!==((a=w.fetchOptions)==null?void 0:a.meta)){var g;this.dispatch({type:"fetch",meta:(g=w.fetchOptions)==null?void 0:g.meta})}return this.retryer=new h0({fn:w.fetchFn,abort:m==null||(c=m.abort)==null?void 0:c.bind(m),onSuccess:function(v){o.setData(v),o.cache.config.onSuccess==null||o.cache.config.onSuccess(v,o),o.cacheTime===0&&o.optionalRemove()},onError:function(v){co(v)&&v.silent||o.dispatch({type:"error",error:v}),co(v)||(o.cache.config.onError==null||o.cache.config.onError(v,o),Ho().error(v)),o.cacheTime===0&&o.optionalRemove()},onFail:function(){o.dispatch({type:"failed"})},onPause:function(){o.dispatch({type:"pause"})},onContinue:function(){o.dispatch({type:"continue"})},retry:w.options.retry,retryDelay:w.options.retryDelay}),this.promise=this.retryer.promise,this.promise},t.dispatch=function(r){var i=this;this.state=this.reducer(this.state,r),Ce.batch(function(){i.observers.forEach(function(o){o.onQueryUpdate(r)}),i.cache.notify({query:i,type:"queryUpdated",action:r})})},t.getDefaultState=function(r){var i=typeof r.initialData=="function"?r.initialData():r.initialData,o=typeof r.initialData<"u",l=o?typeof r.initialDataUpdatedAt=="function"?r.initialDataUpdatedAt():r.initialDataUpdatedAt:0,a=typeof i<"u";return{data:i,dataUpdateCount:0,dataUpdatedAt:a?l??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchMeta:null,isFetching:!1,isInvalidated:!1,isPaused:!1,status:a?"success":"idle"}},t.reducer=function(r,i){var o,l;switch(i.type){case"failed":return ie({},r,{fetchFailureCount:r.fetchFailureCount+1});case"pause":return ie({},r,{isPaused:!0});case"continue":return ie({},r,{isPaused:!1});case"fetch":return ie({},r,{fetchFailureCount:0,fetchMeta:(o=i.meta)!=null?o:null,isFetching:!0,isPaused:!1},!r.dataUpdatedAt&&{error:null,status:"loading"});case"success":return ie({},r,{data:i.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(l=i.dataUpdatedAt)!=null?l:Date.now(),error:null,fetchFailureCount:0,isFetching:!1,isInvalidated:!1,isPaused:!1,status:"success"});case"error":var a=i.error;return co(a)&&a.revert&&this.revertState?ie({},this.revertState):ie({},r,{error:a,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,isFetching:!1,isPaused:!1,status:"error"});case"invalidate":return ie({},r,{isInvalidated:!0});case"setState":return ie({},r,i.state);default:return r}},e}(),Iv=function(e){wi(t,e);function t(r){var i;return i=e.call(this)||this,i.config=r||{},i.queries=[],i.queriesMap={},i}var n=t.prototype;return n.build=function(i,o,l){var a,c=o.queryKey,d=(a=o.queryHash)!=null?a:Nc(c,o),h=this.get(d);return h||(h=new Ov({cache:this,queryKey:c,queryHash:d,options:i.defaultQueryOptions(o),state:l,defaultOptions:i.getQueryDefaults(c),meta:o.meta}),this.add(h)),h},n.add=function(i){this.queriesMap[i.queryHash]||(this.queriesMap[i.queryHash]=i,this.queries.push(i),this.notify({type:"queryAdded",query:i}))},n.remove=function(i){var o=this.queriesMap[i.queryHash];o&&(i.destroy(),this.queries=this.queries.filter(function(l){return l!==i}),o===i&&delete this.queriesMap[i.queryHash],this.notify({type:"queryRemoved",query:i}))},n.clear=function(){var i=this;Ce.batch(function(){i.queries.forEach(function(o){i.remove(o)})})},n.get=function(i){return this.queriesMap[i]},n.getAll=function(){return this.queries},n.find=function(i,o){var l=Jt(i,o),a=l[0];return typeof a.exact>"u"&&(a.exact=!0),this.queries.find(function(c){return md(a,c)})},n.findAll=function(i,o){var l=Jt(i,o),a=l[0];return Object.keys(a).length>0?this.queries.filter(function(c){return md(a,c)}):this.queries},n.notify=function(i){var o=this;Ce.batch(function(){o.listeners.forEach(function(l){l(i)})})},n.onFocus=function(){var i=this;Ce.batch(function(){i.queries.forEach(function(o){o.onFocus()})})},n.onOnline=function(){var i=this;Ce.batch(function(){i.queries.forEach(function(o){o.onOnline()})})},t}(Ci),Dv=function(){function e(n){this.options=ie({},n.defaultOptions,n.options),this.mutationId=n.mutationId,this.mutationCache=n.mutationCache,this.observers=[],this.state=n.state||Lv(),this.meta=n.meta}var t=e.prototype;return t.setState=function(r){this.dispatch({type:"setState",state:r})},t.addObserver=function(r){this.observers.indexOf(r)===-1&&this.observers.push(r)},t.removeObserver=function(r){this.observers=this.observers.filter(function(i){return i!==r})},t.cancel=function(){return this.retryer?(this.retryer.cancel(),this.retryer.promise.then(Ue).catch(Ue)):Promise.resolve()},t.continue=function(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()},t.execute=function(){var r=this,i,o=this.state.status==="loading",l=Promise.resolve();return o||(this.dispatch({type:"loading",variables:this.options.variables}),l=l.then(function(){r.mutationCache.config.onMutate==null||r.mutationCache.config.onMutate(r.state.variables,r)}).then(function(){return r.options.onMutate==null?void 0:r.options.onMutate(r.state.variables)}).then(function(a){a!==r.state.context&&r.dispatch({type:"loading",context:a,variables:r.state.variables})})),l.then(function(){return r.executeMutation()}).then(function(a){i=a,r.mutationCache.config.onSuccess==null||r.mutationCache.config.onSuccess(i,r.state.variables,r.state.context,r)}).then(function(){return r.options.onSuccess==null?void 0:r.options.onSuccess(i,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(i,null,r.state.variables,r.state.context)}).then(function(){return r.dispatch({type:"success",data:i}),i}).catch(function(a){return r.mutationCache.config.onError==null||r.mutationCache.config.onError(a,r.state.variables,r.state.context,r),Ho().error(a),Promise.resolve().then(function(){return r.options.onError==null?void 0:r.options.onError(a,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(void 0,a,r.state.variables,r.state.context)}).then(function(){throw r.dispatch({type:"error",error:a}),a})})},t.executeMutation=function(){var r=this,i;return this.retryer=new h0({fn:function(){return r.options.mutationFn?r.options.mutationFn(r.state.variables):Promise.reject("No mutationFn found")},onFail:function(){r.dispatch({type:"failed"})},onPause:function(){r.dispatch({type:"pause"})},onContinue:function(){r.dispatch({type:"continue"})},retry:(i=this.options.retry)!=null?i:0,retryDelay:this.options.retryDelay}),this.retryer.promise},t.dispatch=function(r){var i=this;this.state=Nv(this.state,r),Ce.batch(function(){i.observers.forEach(function(o){o.onMutationUpdate(r)}),i.mutationCache.notify(i)})},e}();function Lv(){return{context:void 0,data:void 0,error:null,failureCount:0,isPaused:!1,status:"idle",variables:void 0}}function Nv(e,t){switch(t.type){case"failed":return ie({},e,{failureCount:e.failureCount+1});case"pause":return ie({},e,{isPaused:!0});case"continue":return ie({},e,{isPaused:!1});case"loading":return ie({},e,{context:t.context,data:void 0,error:null,isPaused:!1,status:"loading",variables:t.variables});case"success":return ie({},e,{data:t.data,error:null,status:"success",isPaused:!1});case"error":return ie({},e,{data:void 0,error:t.error,failureCount:e.failureCount+1,isPaused:!1,status:"error"});case"setState":return ie({},e,t.state);default:return e}}var zv=function(e){wi(t,e);function t(r){var i;return i=e.call(this)||this,i.config=r||{},i.mutations=[],i.mutationId=0,i}var n=t.prototype;return n.build=function(i,o,l){var a=new Dv({mutationCache:this,mutationId:++this.mutationId,options:i.defaultMutationOptions(o),state:l,defaultOptions:o.mutationKey?i.getMutationDefaults(o.mutationKey):void 0,meta:o.meta});return this.add(a),a},n.add=function(i){this.mutations.push(i),this.notify(i)},n.remove=function(i){this.mutations=this.mutations.filter(function(o){return o!==i}),i.cancel(),this.notify(i)},n.clear=function(){var i=this;Ce.batch(function(){i.mutations.forEach(function(o){i.remove(o)})})},n.getAll=function(){return this.mutations},n.find=function(i){return typeof i.exact>"u"&&(i.exact=!0),this.mutations.find(function(o){return vd(i,o)})},n.findAll=function(i){return this.mutations.filter(function(o){return vd(i,o)})},n.notify=function(i){var o=this;Ce.batch(function(){o.listeners.forEach(function(l){l(i)})})},n.onFocus=function(){this.resumePausedMutations()},n.onOnline=function(){this.resumePausedMutations()},n.resumePausedMutations=function(){var i=this.mutations.filter(function(o){return o.state.isPaused});return Ce.batch(function(){return i.reduce(function(o,l){return o.then(function(){return l.continue().catch(Ue)})},Promise.resolve())})},t}(Ci);function Bv(){return{onFetch:function(t){t.fetchFn=function(){var n,r,i,o,l,a,c=(n=t.fetchOptions)==null||(r=n.meta)==null?void 0:r.refetchPage,d=(i=t.fetchOptions)==null||(o=i.meta)==null?void 0:o.fetchMore,h=d==null?void 0:d.pageParam,p=(d==null?void 0:d.direction)==="forward",m=(d==null?void 0:d.direction)==="backward",y=((l=t.state.data)==null?void 0:l.pages)||[],S=((a=t.state.data)==null?void 0:a.pageParams)||[],w=p0(),C=w==null?void 0:w.signal,g=S,f=!1,v=t.options.queryFn||function(){return Promise.reject("Missing queryFn")},k=function(D,Q,J,ee){return g=ee?[Q].concat(g):[].concat(g,[Q]),ee?[J].concat(D):[].concat(D,[J])},T=function(D,Q,J,ee){if(f)return Promise.reject("Cancelled");if(typeof J>"u"&&!Q&&D.length)return Promise.resolve(D);var O={queryKey:t.queryKey,signal:C,pageParam:J,meta:t.meta},W=v(O),K=Promise.resolve(W).then(function(F){return k(D,J,F,ee)});if(Uo(W)){var P=K;P.cancel=W.cancel}return K},$;if(!y.length)$=T([]);else if(p){var L=typeof h<"u",z=L?h:Sd(t.options,y);$=T(y,L,z)}else if(m){var Y=typeof h<"u",A=Y?h:Mv(t.options,y);$=T(y,Y,A,!0)}else(function(){g=[];var V=typeof t.options.getNextPageParam>"u",D=c&&y[0]?c(y[0],0,y):!0;$=D?T([],V,S[0]):Promise.resolve(k([],S[0],y[0]));for(var Q=function(O){$=$.then(function(W){var K=c&&y[O]?c(y[O],O,y):!0;if(K){var P=V?S[O]:Sd(t.options,W);return T(W,V,P)}return Promise.resolve(k(W,S[O],y[O]))})},J=1;J<y.length;J++)Q(J)})();var j=$.then(function(V){return{pages:V,pageParams:g}}),H=j;return H.cancel=function(){f=!0,w==null||w.abort(),Uo($)&&$.cancel()},j}}}}function Sd(e,t){return e.getNextPageParam==null?void 0:e.getNextPageParam(t[t.length-1],t)}function Mv(e,t){return e.getPreviousPageParam==null?void 0:e.getPreviousPageParam(t[0],t)}var jv=function(){function e(n){n===void 0&&(n={}),this.queryCache=n.queryCache||new Iv,this.mutationCache=n.mutationCache||new zv,this.defaultOptions=n.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}var t=e.prototype;return t.mount=function(){var r=this;this.unsubscribeFocus=Gr.subscribe(function(){Gr.isFocused()&&so.isOnline()&&(r.mutationCache.onFocus(),r.queryCache.onFocus())}),this.unsubscribeOnline=so.subscribe(function(){Gr.isFocused()&&so.isOnline()&&(r.mutationCache.onOnline(),r.queryCache.onOnline())})},t.unmount=function(){var r,i;(r=this.unsubscribeFocus)==null||r.call(this),(i=this.unsubscribeOnline)==null||i.call(this)},t.isFetching=function(r,i){var o=Jt(r,i),l=o[0];return l.fetching=!0,this.queryCache.findAll(l).length},t.isMutating=function(r){return this.mutationCache.findAll(ie({},r,{fetching:!0})).length},t.getQueryData=function(r,i){var o;return(o=this.queryCache.find(r,i))==null?void 0:o.state.data},t.getQueriesData=function(r){return this.getQueryCache().findAll(r).map(function(i){var o=i.queryKey,l=i.state,a=l.data;return[o,a]})},t.setQueryData=function(r,i,o){var l=ao(r),a=this.defaultQueryOptions(l);return this.queryCache.build(this,a).setData(i,o)},t.setQueriesData=function(r,i,o){var l=this;return Ce.batch(function(){return l.getQueryCache().findAll(r).map(function(a){var c=a.queryKey;return[c,l.setQueryData(c,i,o)]})})},t.getQueryState=function(r,i){var o;return(o=this.queryCache.find(r,i))==null?void 0:o.state},t.removeQueries=function(r,i){var o=Jt(r,i),l=o[0],a=this.queryCache;Ce.batch(function(){a.findAll(l).forEach(function(c){a.remove(c)})})},t.resetQueries=function(r,i,o){var l=this,a=Jt(r,i,o),c=a[0],d=a[1],h=this.queryCache,p=ie({},c,{active:!0});return Ce.batch(function(){return h.findAll(c).forEach(function(m){m.reset()}),l.refetchQueries(p,d)})},t.cancelQueries=function(r,i,o){var l=this,a=Jt(r,i,o),c=a[0],d=a[1],h=d===void 0?{}:d;typeof h.revert>"u"&&(h.revert=!0);var p=Ce.batch(function(){return l.queryCache.findAll(c).map(function(m){return m.cancel(h)})});return Promise.all(p).then(Ue).catch(Ue)},t.invalidateQueries=function(r,i,o){var l,a,c,d=this,h=Jt(r,i,o),p=h[0],m=h[1],y=ie({},p,{active:(l=(a=p.refetchActive)!=null?a:p.active)!=null?l:!0,inactive:(c=p.refetchInactive)!=null?c:!1});return Ce.batch(function(){return d.queryCache.findAll(p).forEach(function(S){S.invalidate()}),d.refetchQueries(y,m)})},t.refetchQueries=function(r,i,o){var l=this,a=Jt(r,i,o),c=a[0],d=a[1],h=Ce.batch(function(){return l.queryCache.findAll(c).map(function(m){return m.fetch(void 0,ie({},d,{meta:{refetchPage:c==null?void 0:c.refetchPage}}))})}),p=Promise.all(h).then(Ue);return d!=null&&d.throwOnError||(p=p.catch(Ue)),p},t.fetchQuery=function(r,i,o){var l=ao(r,i,o),a=this.defaultQueryOptions(l);typeof a.retry>"u"&&(a.retry=!1);var c=this.queryCache.build(this,a);return c.isStaleByTime(a.staleTime)?c.fetch(a):Promise.resolve(c.state.data)},t.prefetchQuery=function(r,i,o){return this.fetchQuery(r,i,o).then(Ue).catch(Ue)},t.fetchInfiniteQuery=function(r,i,o){var l=ao(r,i,o);return l.behavior=Bv(),this.fetchQuery(l)},t.prefetchInfiniteQuery=function(r,i,o){return this.fetchInfiniteQuery(r,i,o).then(Ue).catch(Ue)},t.cancelMutations=function(){var r=this,i=Ce.batch(function(){return r.mutationCache.getAll().map(function(o){return o.cancel()})});return Promise.all(i).then(Ue).catch(Ue)},t.resumePausedMutations=function(){return this.getMutationCache().resumePausedMutations()},t.executeMutation=function(r){return this.mutationCache.build(this,r).execute()},t.getQueryCache=function(){return this.queryCache},t.getMutationCache=function(){return this.mutationCache},t.getDefaultOptions=function(){return this.defaultOptions},t.setDefaultOptions=function(r){this.defaultOptions=r},t.setQueryDefaults=function(r,i){var o=this.queryDefaults.find(function(l){return $n(r)===$n(l.queryKey)});o?o.defaultOptions=i:this.queryDefaults.push({queryKey:r,defaultOptions:i})},t.getQueryDefaults=function(r){var i;return r?(i=this.queryDefaults.find(function(o){return Mo(r,o.queryKey)}))==null?void 0:i.defaultOptions:void 0},t.setMutationDefaults=function(r,i){var o=this.mutationDefaults.find(function(l){return $n(r)===$n(l.mutationKey)});o?o.defaultOptions=i:this.mutationDefaults.push({mutationKey:r,defaultOptions:i})},t.getMutationDefaults=function(r){var i;return r?(i=this.mutationDefaults.find(function(o){return Mo(r,o.mutationKey)}))==null?void 0:i.defaultOptions:void 0},t.defaultQueryOptions=function(r){if(r!=null&&r._defaulted)return r;var i=ie({},this.defaultOptions.queries,this.getQueryDefaults(r==null?void 0:r.queryKey),r,{_defaulted:!0});return!i.queryHash&&i.queryKey&&(i.queryHash=Nc(i.queryKey,i)),i},t.defaultQueryObserverOptions=function(r){return this.defaultQueryOptions(r)},t.defaultMutationOptions=function(r){return r!=null&&r._defaulted?r:ie({},this.defaultOptions.mutations,this.getMutationDefaults(r==null?void 0:r.mutationKey),r,{_defaulted:!0})},t.clear=function(){this.queryCache.clear(),this.mutationCache.clear()},e}(),Uv=function(e){wi(t,e);function t(r,i){var o;return o=e.call(this)||this,o.client=r,o.options=i,o.trackedProps=[],o.selectError=null,o.bindMethods(),o.setOptions(i),o}var n=t.prototype;return n.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},n.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),wd(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},n.onUnsubscribe=function(){this.listeners.length||this.destroy()},n.shouldFetchOnReconnect=function(){return Ps(this.currentQuery,this.options,this.options.refetchOnReconnect)},n.shouldFetchOnWindowFocus=function(){return Ps(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},n.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},n.setOptions=function(i,o){var l=this.options,a=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(i),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=l.queryKey),this.updateQuery();var c=this.hasListeners();c&&Cd(this.currentQuery,a,this.options,l)&&this.executeFetch(),this.updateResult(o),c&&(this.currentQuery!==a||this.options.enabled!==l.enabled||this.options.staleTime!==l.staleTime)&&this.updateStaleTimeout();var d=this.computeRefetchInterval();c&&(this.currentQuery!==a||this.options.enabled!==l.enabled||d!==this.currentRefetchInterval)&&this.updateRefetchInterval(d)},n.getOptimisticResult=function(i){var o=this.client.defaultQueryObserverOptions(i),l=this.client.getQueryCache().build(this.client,o);return this.createResult(l,o)},n.getCurrentResult=function(){return this.currentResult},n.trackResult=function(i,o){var l=this,a={},c=function(h){l.trackedProps.includes(h)||l.trackedProps.push(h)};return Object.keys(i).forEach(function(d){Object.defineProperty(a,d,{configurable:!1,enumerable:!0,get:function(){return c(d),i[d]}})}),(o.useErrorBoundary||o.suspense)&&c("error"),a},n.getNextResult=function(i){var o=this;return new Promise(function(l,a){var c=o.subscribe(function(d){d.isFetching||(c(),d.isError&&(i!=null&&i.throwOnError)?a(d.error):l(d))})})},n.getCurrentQuery=function(){return this.currentQuery},n.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},n.refetch=function(i){return this.fetch(ie({},i,{meta:{refetchPage:i==null?void 0:i.refetchPage}}))},n.fetchOptimistic=function(i){var o=this,l=this.client.defaultQueryObserverOptions(i),a=this.client.getQueryCache().build(this.client,l);return a.fetch().then(function(){return o.createResult(a,l)})},n.fetch=function(i){var o=this;return this.executeFetch(i).then(function(){return o.updateResult(),o.currentResult})},n.executeFetch=function(i){this.updateQuery();var o=this.currentQuery.fetch(this.options,i);return i!=null&&i.throwOnError||(o=o.catch(Ue)),o},n.updateStaleTimeout=function(){var i=this;if(this.clearStaleTimeout(),!(zo||this.currentResult.isStale||!_s(this.options.staleTime))){var o=u0(this.currentResult.dataUpdatedAt,this.options.staleTime),l=o+1;this.staleTimeoutId=setTimeout(function(){i.currentResult.isStale||i.updateResult()},l)}},n.computeRefetchInterval=function(){var i;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(i=this.options.refetchInterval)!=null?i:!1},n.updateRefetchInterval=function(i){var o=this;this.clearRefetchInterval(),this.currentRefetchInterval=i,!(zo||this.options.enabled===!1||!_s(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(o.options.refetchIntervalInBackground||Gr.isFocused())&&o.executeFetch()},this.currentRefetchInterval))},n.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},n.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},n.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},n.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},n.createResult=function(i,o){var l=this.currentQuery,a=this.options,c=this.currentResult,d=this.currentResultState,h=this.currentResultOptions,p=i!==l,m=p?i.state:this.currentQueryInitialState,y=p?this.currentResult:this.previousQueryResult,S=i.state,w=S.dataUpdatedAt,C=S.error,g=S.errorUpdatedAt,f=S.isFetching,v=S.status,k=!1,T=!1,$;if(o.optimisticResults){var L=this.hasListeners(),z=!L&&wd(i,o),Y=L&&Cd(i,l,o,a);(z||Y)&&(f=!0,w||(v="loading"))}if(o.keepPreviousData&&!S.dataUpdateCount&&(y!=null&&y.isSuccess)&&v!=="error")$=y.data,w=y.dataUpdatedAt,v=y.status,k=!0;else if(o.select&&typeof S.data<"u")if(c&&S.data===(d==null?void 0:d.data)&&o.select===this.selectFn)$=this.selectResult;else try{this.selectFn=o.select,$=o.select(S.data),o.structuralSharing!==!1&&($=jo(c==null?void 0:c.data,$)),this.selectResult=$,this.selectError=null}catch(H){Ho().error(H),this.selectError=H}else $=S.data;if(typeof o.placeholderData<"u"&&typeof $>"u"&&(v==="loading"||v==="idle")){var A;if(c!=null&&c.isPlaceholderData&&o.placeholderData===(h==null?void 0:h.placeholderData))A=c.data;else if(A=typeof o.placeholderData=="function"?o.placeholderData():o.placeholderData,o.select&&typeof A<"u")try{A=o.select(A),o.structuralSharing!==!1&&(A=jo(c==null?void 0:c.data,A)),this.selectError=null}catch(H){Ho().error(H),this.selectError=H}typeof A<"u"&&(v="success",$=A,T=!0)}this.selectError&&(C=this.selectError,$=this.selectResult,g=Date.now(),v="error");var j={status:v,isLoading:v==="loading",isSuccess:v==="success",isError:v==="error",isIdle:v==="idle",data:$,dataUpdatedAt:w,error:C,errorUpdatedAt:g,failureCount:S.fetchFailureCount,errorUpdateCount:S.errorUpdateCount,isFetched:S.dataUpdateCount>0||S.errorUpdateCount>0,isFetchedAfterMount:S.dataUpdateCount>m.dataUpdateCount||S.errorUpdateCount>m.errorUpdateCount,isFetching:f,isRefetching:f&&v!=="loading",isLoadingError:v==="error"&&S.dataUpdatedAt===0,isPlaceholderData:T,isPreviousData:k,isRefetchError:v==="error"&&S.dataUpdatedAt!==0,isStale:zc(i,o),refetch:this.refetch,remove:this.remove};return j},n.shouldNotifyListeners=function(i,o){if(!o)return!0;var l=this.options,a=l.notifyOnChangeProps,c=l.notifyOnChangePropsExclusions;if(!a&&!c||a==="tracked"&&!this.trackedProps.length)return!0;var d=a==="tracked"?this.trackedProps:a;return Object.keys(i).some(function(h){var p=h,m=i[p]!==o[p],y=d==null?void 0:d.some(function(w){return w===h}),S=c==null?void 0:c.some(function(w){return w===h});return m&&!S&&(!d||y)})},n.updateResult=function(i){var o=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!Tv(this.currentResult,o)){var l={cache:!0};(i==null?void 0:i.listeners)!==!1&&this.shouldNotifyListeners(this.currentResult,o)&&(l.listeners=!0),this.notify(ie({},l,i))}},n.updateQuery=function(){var i=this.client.getQueryCache().build(this.client,this.options);if(i!==this.currentQuery){var o=this.currentQuery;this.currentQuery=i,this.currentQueryInitialState=i.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(o==null||o.removeObserver(this),i.addObserver(this))}},n.onQueryUpdate=function(i){var o={};i.type==="success"?o.onSuccess=!0:i.type==="error"&&!co(i.error)&&(o.onError=!0),this.updateResult(o),this.hasListeners()&&this.updateTimers()},n.notify=function(i){var o=this;Ce.batch(function(){i.onSuccess?(o.options.onSuccess==null||o.options.onSuccess(o.currentResult.data),o.options.onSettled==null||o.options.onSettled(o.currentResult.data,null)):i.onError&&(o.options.onError==null||o.options.onError(o.currentResult.error),o.options.onSettled==null||o.options.onSettled(void 0,o.currentResult.error)),i.listeners&&o.listeners.forEach(function(l){l(o.currentResult)}),i.cache&&o.client.getQueryCache().notify({query:o.currentQuery,type:"observerResultsUpdated"})})},t}(Ci);function Hv(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function wd(e,t){return Hv(e,t)||e.state.dataUpdatedAt>0&&Ps(e,t,t.refetchOnMount)}function Ps(e,t,n){if(t.enabled!==!1){var r=typeof n=="function"?n(e):n;return r==="always"||r!==!1&&zc(e,t)}return!1}function Cd(e,t,n,r){return n.enabled!==!1&&(e!==t||r.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&zc(e,n)}function zc(e,t){return e.isStaleByTime(t.staleTime)}var Qv=Sm.unstable_batchedUpdates;Ce.setBatchNotifyFunction(Qv);var Vv=console;Rv(Vv);var kd=ke.createContext(void 0),m0=ke.createContext(!1);function v0(e){return e&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=kd),window.ReactQueryClientContext):kd}var Wv=function(){var t=ke.useContext(v0(ke.useContext(m0)));if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},Kv=function(t){var n=t.client,r=t.contextSharing,i=r===void 0?!1:r,o=t.children;ke.useEffect(function(){return n.mount(),function(){n.unmount()}},[n]);var l=v0(i);return ke.createElement(m0.Provider,{value:i},ke.createElement(l.Provider,{value:n},o))};function Gv(){var e=!1;return{clearReset:function(){e=!1},reset:function(){e=!0},isReset:function(){return e}}}var qv=ke.createContext(Gv()),Yv=function(){return ke.useContext(qv)};function Xv(e,t,n){return typeof t=="function"?t.apply(void 0,n):typeof t=="boolean"?t:!!e}function Zv(e,t){var n=ke.useRef(!1),r=ke.useState(0),i=r[1],o=Wv(),l=Yv(),a=o.defaultQueryObserverOptions(e);a.optimisticResults=!0,a.onError&&(a.onError=Ce.batchCalls(a.onError)),a.onSuccess&&(a.onSuccess=Ce.batchCalls(a.onSuccess)),a.onSettled&&(a.onSettled=Ce.batchCalls(a.onSettled)),a.suspense&&(typeof a.staleTime!="number"&&(a.staleTime=1e3),a.cacheTime===0&&(a.cacheTime=1)),(a.suspense||a.useErrorBoundary)&&(l.isReset()||(a.retryOnMount=!1));var c=ke.useState(function(){return new t(o,a)}),d=c[0],h=d.getOptimisticResult(a);if(ke.useEffect(function(){n.current=!0,l.clearReset();var p=d.subscribe(Ce.batchCalls(function(){n.current&&i(function(m){return m+1})}));return d.updateResult(),function(){n.current=!1,p()}},[l,d]),ke.useEffect(function(){d.setOptions(a,{listeners:!1})},[a,d]),a.suspense&&h.isLoading)throw d.fetchOptimistic(a).then(function(p){var m=p.data;a.onSuccess==null||a.onSuccess(m),a.onSettled==null||a.onSettled(m,null)}).catch(function(p){l.clearReset(),a.onError==null||a.onError(p),a.onSettled==null||a.onSettled(void 0,p)});if(h.isError&&!l.isReset()&&!h.isFetching&&Xv(a.suspense,a.useErrorBoundary,[h.error,d.getCurrentQuery()]))throw h.error;return a.notifyOnChangeProps==="tracked"&&(h=d.trackResult(h,a)),h}function Kt(e,t,n){var r=ao(e,t,n);return Zv(r,Uv)}var x0={exports:{}},de={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bc=Symbol.for("react.transitional.element"),Mc=Symbol.for("react.portal"),pl=Symbol.for("react.fragment"),fl=Symbol.for("react.strict_mode"),hl=Symbol.for("react.profiler"),gl=Symbol.for("react.consumer"),ml=Symbol.for("react.context"),vl=Symbol.for("react.forward_ref"),xl=Symbol.for("react.suspense"),yl=Symbol.for("react.suspense_list"),Sl=Symbol.for("react.memo"),wl=Symbol.for("react.lazy"),Jv=Symbol.for("react.view_transition"),ex=Symbol.for("react.client.reference");function mt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Bc:switch(e=e.type,e){case pl:case hl:case fl:case xl:case yl:case Jv:return e;default:switch(e=e&&e.$$typeof,e){case ml:case vl:case wl:case Sl:return e;case gl:return e;default:return t}}case Mc:return t}}}de.ContextConsumer=gl;de.ContextProvider=ml;de.Element=Bc;de.ForwardRef=vl;de.Fragment=pl;de.Lazy=wl;de.Memo=Sl;de.Portal=Mc;de.Profiler=hl;de.StrictMode=fl;de.Suspense=xl;de.SuspenseList=yl;de.isContextConsumer=function(e){return mt(e)===gl};de.isContextProvider=function(e){return mt(e)===ml};de.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Bc};de.isForwardRef=function(e){return mt(e)===vl};de.isFragment=function(e){return mt(e)===pl};de.isLazy=function(e){return mt(e)===wl};de.isMemo=function(e){return mt(e)===Sl};de.isPortal=function(e){return mt(e)===Mc};de.isProfiler=function(e){return mt(e)===hl};de.isStrictMode=function(e){return mt(e)===fl};de.isSuspense=function(e){return mt(e)===xl};de.isSuspenseList=function(e){return mt(e)===yl};de.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===pl||e===hl||e===fl||e===xl||e===yl||typeof e=="object"&&e!==null&&(e.$$typeof===wl||e.$$typeof===Sl||e.$$typeof===ml||e.$$typeof===gl||e.$$typeof===vl||e.$$typeof===ex||e.getModuleId!==void 0)};de.typeOf=mt;x0.exports=de;var y0=x0.exports;function tx(e){function t(F,I,N,G,E){for(var te=0,B=0,Se=0,oe=0,ae,X,Oe=0,Ye=0,re,Be=re=ae=0,le=0,Ie=0,kr=0,De=0,Ei=N.length,br=Ei-1,vt,q="",be="",Ol="",Il="",qt;le<Ei;){if(X=N.charCodeAt(le),le===br&&B+oe+Se+te!==0&&(B!==0&&(X=B===47?10:47),oe=Se=te=0,Ei++,br++),B+oe+Se+te===0){if(le===br&&(0<Ie&&(q=q.replace(m,"")),0<q.trim().length)){switch(X){case 32:case 9:case 59:case 13:case 10:break;default:q+=N.charAt(le)}X=59}switch(X){case 123:for(q=q.trim(),ae=q.charCodeAt(0),re=1,De=++le;le<Ei;){switch(X=N.charCodeAt(le)){case 123:re++;break;case 125:re--;break;case 47:switch(X=N.charCodeAt(le+1)){case 42:case 47:e:{for(Be=le+1;Be<br;++Be)switch(N.charCodeAt(Be)){case 47:if(X===42&&N.charCodeAt(Be-1)===42&&le+2!==Be){le=Be+1;break e}break;case 10:if(X===47){le=Be+1;break e}}le=Be}}break;case 91:X++;case 40:X++;case 34:case 39:for(;le++<br&&N.charCodeAt(le)!==X;);}if(re===0)break;le++}switch(re=N.substring(De,le),ae===0&&(ae=(q=q.replace(p,"").trim()).charCodeAt(0)),ae){case 64:switch(0<Ie&&(q=q.replace(m,"")),X=q.charCodeAt(1),X){case 100:case 109:case 115:case 45:Ie=I;break;default:Ie=J}if(re=t(I,Ie,re,X,E+1),De=re.length,0<O&&(Ie=n(J,q,kr),qt=a(3,re,Ie,I,V,H,De,X,E,G),q=Ie.join(""),qt!==void 0&&(De=(re=qt.trim()).length)===0&&(X=0,re="")),0<De)switch(X){case 115:q=q.replace($,l);case 100:case 109:case 45:re=q+"{"+re+"}";break;case 107:q=q.replace(f,"$1 $2"),re=q+"{"+re+"}",re=Q===1||Q===2&&o("@"+re,3)?"@-webkit-"+re+"@"+re:"@"+re;break;default:re=q+re,G===112&&(re=(be+=re,""))}else re="";break;default:re=t(I,n(I,q,kr),re,G,E+1)}Ol+=re,re=kr=Ie=Be=ae=0,q="",X=N.charCodeAt(++le);break;case 125:case 59:if(q=(0<Ie?q.replace(m,""):q).trim(),1<(De=q.length))switch(Be===0&&(ae=q.charCodeAt(0),ae===45||96<ae&&123>ae)&&(De=(q=q.replace(" ",":")).length),0<O&&(qt=a(1,q,I,F,V,H,be.length,G,E,G))!==void 0&&(De=(q=qt.trim()).length)===0&&(q="\0\0"),ae=q.charCodeAt(0),X=q.charCodeAt(1),ae){case 0:break;case 64:if(X===105||X===99){Il+=q+N.charAt(le);break}default:q.charCodeAt(De-1)!==58&&(be+=i(q,ae,X,q.charCodeAt(2)))}kr=Ie=Be=ae=0,q="",X=N.charCodeAt(++le)}}switch(X){case 13:case 10:B===47?B=0:1+ae===0&&G!==107&&0<q.length&&(Ie=1,q+="\0"),0<O*K&&a(0,q,I,F,V,H,be.length,G,E,G),H=1,V++;break;case 59:case 125:if(B+oe+Se+te===0){H++;break}default:switch(H++,vt=N.charAt(le),X){case 9:case 32:if(oe+te+B===0)switch(Oe){case 44:case 58:case 9:case 32:vt="";break;default:X!==32&&(vt=" ")}break;case 0:vt="\\0";break;case 12:vt="\\f";break;case 11:vt="\\v";break;case 38:oe+B+te===0&&(Ie=kr=1,vt="\f"+vt);break;case 108:if(oe+B+te+D===0&&0<Be)switch(le-Be){case 2:Oe===112&&N.charCodeAt(le-3)===58&&(D=Oe);case 8:Ye===111&&(D=Ye)}break;case 58:oe+B+te===0&&(Be=le);break;case 44:B+Se+oe+te===0&&(Ie=1,vt+="\r");break;case 34:case 39:B===0&&(oe=oe===X?0:oe===0?X:oe);break;case 91:oe+B+Se===0&&te++;break;case 93:oe+B+Se===0&&te--;break;case 41:oe+B+te===0&&Se--;break;case 40:if(oe+B+te===0){if(ae===0)switch(2*Oe+3*Ye){case 533:break;default:ae=1}Se++}break;case 64:B+Se+oe+te+Be+re===0&&(re=1);break;case 42:case 47:if(!(0<oe+te+Se))switch(B){case 0:switch(2*X+3*N.charCodeAt(le+1)){case 235:B=47;break;case 220:De=le,B=42}break;case 42:X===47&&Oe===42&&De+2!==le&&(N.charCodeAt(De+2)===33&&(be+=N.substring(De,le+1)),vt="",B=0)}}B===0&&(q+=vt)}Ye=Oe,Oe=X,le++}if(De=be.length,0<De){if(Ie=I,0<O&&(qt=a(2,be,Ie,F,V,H,De,G,E,G),qt!==void 0&&(be=qt).length===0))return Il+be+Ol;if(be=Ie.join(",")+"{"+be+"}",Q*D!==0){switch(Q!==2||o(be,2)||(D=0),D){case 111:be=be.replace(k,":-moz-$1")+be;break;case 112:be=be.replace(v,"::-webkit-input-$1")+be.replace(v,"::-moz-$1")+be.replace(v,":-ms-input-$1")+be}D=0}}return Il+be+Ol}function n(F,I,N){var G=I.trim().split(C);I=G;var E=G.length,te=F.length;switch(te){case 0:case 1:var B=0;for(F=te===0?"":F[0]+" ";B<E;++B)I[B]=r(F,I[B],N).trim();break;default:var Se=B=0;for(I=[];B<E;++B)for(var oe=0;oe<te;++oe)I[Se++]=r(F[oe]+" ",G[B],N).trim()}return I}function r(F,I,N){var G=I.charCodeAt(0);switch(33>G&&(G=(I=I.trim()).charCodeAt(0)),G){case 38:return I.replace(g,"$1"+F.trim());case 58:return F.trim()+I.replace(g,"$1"+F.trim());default:if(0<1*N&&0<I.indexOf("\f"))return I.replace(g,(F.charCodeAt(0)===58?"":"$1")+F.trim())}return F+I}function i(F,I,N,G){var E=F+";",te=2*I+3*N+4*G;if(te===944){F=E.indexOf(":",9)+1;var B=E.substring(F,E.length-1).trim();return B=E.substring(0,F).trim()+B+";",Q===1||Q===2&&o(B,1)?"-webkit-"+B+B:B}if(Q===0||Q===2&&!o(E,1))return E;switch(te){case 1015:return E.charCodeAt(10)===97?"-webkit-"+E+E:E;case 951:return E.charCodeAt(3)===116?"-webkit-"+E+E:E;case 963:return E.charCodeAt(5)===110?"-webkit-"+E+E:E;case 1009:if(E.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+E+E;case 978:return"-webkit-"+E+"-moz-"+E+E;case 1019:case 983:return"-webkit-"+E+"-moz-"+E+"-ms-"+E+E;case 883:if(E.charCodeAt(8)===45)return"-webkit-"+E+E;if(0<E.indexOf("image-set(",11))return E.replace(j,"$1-webkit-$2")+E;break;case 932:if(E.charCodeAt(4)===45)switch(E.charCodeAt(5)){case 103:return"-webkit-box-"+E.replace("-grow","")+"-webkit-"+E+"-ms-"+E.replace("grow","positive")+E;case 115:return"-webkit-"+E+"-ms-"+E.replace("shrink","negative")+E;case 98:return"-webkit-"+E+"-ms-"+E.replace("basis","preferred-size")+E}return"-webkit-"+E+"-ms-"+E+E;case 964:return"-webkit-"+E+"-ms-flex-"+E+E;case 1023:if(E.charCodeAt(8)!==99)break;return B=E.substring(E.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+B+"-webkit-"+E+"-ms-flex-pack"+B+E;case 1005:return S.test(E)?E.replace(y,":-webkit-")+E.replace(y,":-moz-")+E:E;case 1e3:switch(B=E.substring(13).trim(),I=B.indexOf("-")+1,B.charCodeAt(0)+B.charCodeAt(I)){case 226:B=E.replace(T,"tb");break;case 232:B=E.replace(T,"tb-rl");break;case 220:B=E.replace(T,"lr");break;default:return E}return"-webkit-"+E+"-ms-"+B+E;case 1017:if(E.indexOf("sticky",9)===-1)break;case 975:switch(I=(E=F).length-10,B=(E.charCodeAt(I)===33?E.substring(0,I):E).substring(F.indexOf(":",7)+1).trim(),te=B.charCodeAt(0)+(B.charCodeAt(7)|0)){case 203:if(111>B.charCodeAt(8))break;case 115:E=E.replace(B,"-webkit-"+B)+";"+E;break;case 207:case 102:E=E.replace(B,"-webkit-"+(102<te?"inline-":"")+"box")+";"+E.replace(B,"-webkit-"+B)+";"+E.replace(B,"-ms-"+B+"box")+";"+E}return E+";";case 938:if(E.charCodeAt(5)===45)switch(E.charCodeAt(6)){case 105:return B=E.replace("-items",""),"-webkit-"+E+"-webkit-box-"+B+"-ms-flex-"+B+E;case 115:return"-webkit-"+E+"-ms-flex-item-"+E.replace(z,"")+E;default:return"-webkit-"+E+"-ms-flex-line-pack"+E.replace("align-content","").replace(z,"")+E}break;case 973:case 989:if(E.charCodeAt(3)!==45||E.charCodeAt(4)===122)break;case 931:case 953:if(A.test(F)===!0)return(B=F.substring(F.indexOf(":")+1)).charCodeAt(0)===115?i(F.replace("stretch","fill-available"),I,N,G).replace(":fill-available",":stretch"):E.replace(B,"-webkit-"+B)+E.replace(B,"-moz-"+B.replace("fill-",""))+E;break;case 962:if(E="-webkit-"+E+(E.charCodeAt(5)===102?"-ms-"+E:"")+E,N+G===211&&E.charCodeAt(13)===105&&0<E.indexOf("transform",10))return E.substring(0,E.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+E}return E}function o(F,I){var N=F.indexOf(I===1?":":"{"),G=F.substring(0,I!==3?N:10);return N=F.substring(N+1,F.length-1),W(I!==2?G:G.replace(Y,"$1"),N,I)}function l(F,I){var N=i(I,I.charCodeAt(0),I.charCodeAt(1),I.charCodeAt(2));return N!==I+";"?N.replace(L," or ($1)").substring(4):"("+I+")"}function a(F,I,N,G,E,te,B,Se,oe,ae){for(var X=0,Oe=I,Ye;X<O;++X)switch(Ye=ee[X].call(h,F,Oe,N,G,E,te,B,Se,oe,ae)){case void 0:case!1:case!0:case null:break;default:Oe=Ye}if(Oe!==I)return Oe}function c(F){switch(F){case void 0:case null:O=ee.length=0;break;default:if(typeof F=="function")ee[O++]=F;else if(typeof F=="object")for(var I=0,N=F.length;I<N;++I)c(F[I]);else K=!!F|0}return c}function d(F){return F=F.prefix,F!==void 0&&(W=null,F?typeof F!="function"?Q=1:(Q=2,W=F):Q=0),d}function h(F,I){var N=F;if(33>N.charCodeAt(0)&&(N=N.trim()),P=N,N=[P],0<O){var G=a(-1,I,N,N,V,H,0,0,0,0);G!==void 0&&typeof G=="string"&&(I=G)}var E=t(J,N,I,0,0);return 0<O&&(G=a(-2,E,N,N,V,H,E.length,0,0,0),G!==void 0&&(E=G)),P="",D=0,H=V=1,E}var p=/^\0+/g,m=/[\0\r\f]/g,y=/: */g,S=/zoo|gra/,w=/([,: ])(transform)/g,C=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,k=/:(read-only)/g,T=/[svh]\w+-[tblr]{2}/,$=/\(\s*(.*)\s*\)/g,L=/([\s\S]*?);/g,z=/-self|flex-/g,Y=/[^]*?(:[rp][el]a[\w-]+)[^]*/,A=/stretch|:\s*\w+\-(?:conte|avail)/,j=/([^-])(image-set\()/,H=1,V=1,D=0,Q=1,J=[],ee=[],O=0,W=null,K=0,P="";return h.use=c,h.set=d,e!==void 0&&d(e),h}var nx={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function rx(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var ix=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,bd=rx(function(e){return ix.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),S0={exports:{}},ce={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Re=typeof Symbol=="function"&&Symbol.for,jc=Re?Symbol.for("react.element"):60103,Uc=Re?Symbol.for("react.portal"):60106,Cl=Re?Symbol.for("react.fragment"):60107,kl=Re?Symbol.for("react.strict_mode"):60108,bl=Re?Symbol.for("react.profiler"):60114,El=Re?Symbol.for("react.provider"):60109,Tl=Re?Symbol.for("react.context"):60110,Hc=Re?Symbol.for("react.async_mode"):60111,$l=Re?Symbol.for("react.concurrent_mode"):60111,_l=Re?Symbol.for("react.forward_ref"):60112,Fl=Re?Symbol.for("react.suspense"):60113,ox=Re?Symbol.for("react.suspense_list"):60120,Pl=Re?Symbol.for("react.memo"):60115,Al=Re?Symbol.for("react.lazy"):60116,lx=Re?Symbol.for("react.block"):60121,ax=Re?Symbol.for("react.fundamental"):60117,sx=Re?Symbol.for("react.responder"):60118,cx=Re?Symbol.for("react.scope"):60119;function ct(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case jc:switch(e=e.type,e){case Hc:case $l:case Cl:case bl:case kl:case Fl:return e;default:switch(e=e&&e.$$typeof,e){case Tl:case _l:case Al:case Pl:case El:return e;default:return t}}case Uc:return t}}}function w0(e){return ct(e)===$l}ce.AsyncMode=Hc;ce.ConcurrentMode=$l;ce.ContextConsumer=Tl;ce.ContextProvider=El;ce.Element=jc;ce.ForwardRef=_l;ce.Fragment=Cl;ce.Lazy=Al;ce.Memo=Pl;ce.Portal=Uc;ce.Profiler=bl;ce.StrictMode=kl;ce.Suspense=Fl;ce.isAsyncMode=function(e){return w0(e)||ct(e)===Hc};ce.isConcurrentMode=w0;ce.isContextConsumer=function(e){return ct(e)===Tl};ce.isContextProvider=function(e){return ct(e)===El};ce.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===jc};ce.isForwardRef=function(e){return ct(e)===_l};ce.isFragment=function(e){return ct(e)===Cl};ce.isLazy=function(e){return ct(e)===Al};ce.isMemo=function(e){return ct(e)===Pl};ce.isPortal=function(e){return ct(e)===Uc};ce.isProfiler=function(e){return ct(e)===bl};ce.isStrictMode=function(e){return ct(e)===kl};ce.isSuspense=function(e){return ct(e)===Fl};ce.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Cl||e===$l||e===bl||e===kl||e===Fl||e===ox||typeof e=="object"&&e!==null&&(e.$$typeof===Al||e.$$typeof===Pl||e.$$typeof===El||e.$$typeof===Tl||e.$$typeof===_l||e.$$typeof===ax||e.$$typeof===sx||e.$$typeof===cx||e.$$typeof===lx)};ce.typeOf=ct;S0.exports=ce;var ux=S0.exports,Qc=ux,dx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},px={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},fx={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},C0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Vc={};Vc[Qc.ForwardRef]=fx;Vc[Qc.Memo]=C0;function Ed(e){return Qc.isMemo(e)?C0:Vc[e.$$typeof]||dx}var hx=Object.defineProperty,gx=Object.getOwnPropertyNames,Td=Object.getOwnPropertySymbols,mx=Object.getOwnPropertyDescriptor,vx=Object.getPrototypeOf,$d=Object.prototype;function k0(e,t,n){if(typeof t!="string"){if($d){var r=vx(t);r&&r!==$d&&k0(e,r,n)}var i=gx(t);Td&&(i=i.concat(Td(t)));for(var o=Ed(e),l=Ed(t),a=0;a<i.length;++a){var c=i[a];if(!px[c]&&!(n&&n[c])&&!(l&&l[c])&&!(o&&o[c])){var d=mx(t,c);try{hx(e,c,d)}catch{}}}}return e}var xx=k0;const yx=Ls(xx);function At(){return(At=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var _d=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},As=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!y0.typeOf(e)},Qo=Object.freeze([]),gn=Object.freeze({});function gi(e){return typeof e=="function"}function Fd(e){return e.displayName||e.name||"Component"}function Wc(e){return e&&typeof e.styledComponentId=="string"}var gr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Kc=typeof window<"u"&&"HTMLElement"in window,Sx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY)),wx={};function ki(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Cx=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;n>=l;)(l<<=1)<0&&ki(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var a=o;a<l;a++)this.groupSizes[a]=0}for(var c=this.indexOfGroup(n+1),d=0,h=r.length;d<h;d++)this.tag.insertRule(c,r[d])&&(this.groupSizes[n]++,c++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),l=o+i,a=o;a<l;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),uo=new Map,Vo=new Map,qr=1,Hi=function(e){if(uo.has(e))return uo.get(e);for(;Vo.has(qr);)qr++;var t=qr++;return uo.set(e,t),Vo.set(t,e),t},kx=function(e){return Vo.get(e)},bx=function(e,t){t>=qr&&(qr=t+1),uo.set(e,t),Vo.set(t,e)},Ex="style["+gr+'][data-styled-version="5.3.11"]',Tx=new RegExp("^"+gr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),$x=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},_x=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var l=n[i].trim();if(l){var a=l.match(Tx);if(a){var c=0|parseInt(a[1],10),d=a[2];c!==0&&(bx(d,c),$x(e,d,a[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(l)}}},Fx=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},b0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var c=a.childNodes,d=c.length;d>=0;d--){var h=c[d];if(h&&h.nodeType===1&&h.hasAttribute(gr))return h}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(gr,"active"),r.setAttribute("data-styled-version","5.3.11");var l=Fx();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},Px=function(){function e(n){var r=this.element=b0(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,l=0,a=o.length;l<a;l++){var c=o[l];if(c.ownerNode===i)return c}ki(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Ax=function(){function e(n){var r=this.element=b0(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Rx=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Pd=Kc,Ox={isServer:!Kc,useCSSOMInjection:!Sx},Wo=function(){function e(n,r,i){n===void 0&&(n=gn),r===void 0&&(r={}),this.options=At({},Ox,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Kc&&Pd&&(Pd=!1,function(o){for(var l=document.querySelectorAll(Ex),a=0,c=l.length;a<c;a++){var d=l[a];d&&d.getAttribute(gr)!=="active"&&(_x(o,d),d.parentNode&&d.parentNode.removeChild(d))}}(this))}e.registerId=function(n){return Hi(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(At({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,l=r.target,n=i?new Rx(l):o?new Px(l):new Ax(l),new Cx(n)));var n,r,i,o,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Hi(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Hi(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Hi(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",l=0;l<i;l++){var a=kx(l);if(a!==void 0){var c=n.names.get(a),d=r.getGroup(l);if(c&&d&&c.size){var h=gr+".g"+l+'[id="'+a+'"]',p="";c!==void 0&&c.forEach(function(m){m.length>0&&(p+=m+",")}),o+=""+d+h+'{content:"'+p+`"}/*!sc*/
`}}}return o}(this)},e}(),Ix=/(a)(d)/gi,Ad=function(e){return String.fromCharCode(e+(e>25?39:97))};function Rs(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Ad(t%52)+n;return(Ad(t%52)+n).replace(Ix,"$1-$2")}var tr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},E0=function(e){return tr(5381,e)};function T0(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(gi(n)&&!Wc(n))return!1}return!0}var Dx=E0("5.3.11"),Lx=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&T0(t),this.componentId=n,this.baseHash=tr(Dx,n),this.baseStyle=r,Wo.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var l=Dn(this.rules,t,n,r).join(""),a=Rs(tr(this.baseHash,l)>>>0);if(!n.hasNameForId(i,a)){var c=r(l,"."+a,void 0,i);n.insertRules(i,a,c)}o.push(a),this.staticRulesId=a}else{for(var d=this.rules.length,h=tr(this.baseHash,r.hash),p="",m=0;m<d;m++){var y=this.rules[m];if(typeof y=="string")p+=y;else if(y){var S=Dn(y,t,n,r),w=Array.isArray(S)?S.join(""):S;h=tr(h,w+m),p+=w}}if(p){var C=Rs(h>>>0);if(!n.hasNameForId(i,C)){var g=r(p,"."+C,void 0,i);n.insertRules(i,C,g)}o.push(C)}}return o.join(" ")},e}(),Nx=/^\s*\/\/.*$/gm,zx=[":","[",".","#"];function Bx(e){var t,n,r,i,o=e===void 0?gn:e,l=o.options,a=l===void 0?gn:l,c=o.plugins,d=c===void 0?Qo:c,h=new tx(a),p=[],m=function(w){function C(g){if(g)try{w(g+"}")}catch{}}return function(g,f,v,k,T,$,L,z,Y,A){switch(g){case 1:if(Y===0&&f.charCodeAt(0)===64)return w(f+";"),"";break;case 2:if(z===0)return f+"/*|*/";break;case 3:switch(z){case 102:case 112:return w(v[0]+f),"";default:return f+(A===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(C)}}}(function(w){p.push(w)}),y=function(w,C,g){return C===0&&zx.indexOf(g[n.length])!==-1||g.match(i)?w:"."+t};function S(w,C,g,f){f===void 0&&(f="&");var v=w.replace(Nx,""),k=C&&g?g+" "+C+" { "+v+" }":v;return t=f,n=C,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),h(g||!C?"":C,k)}return h.use([].concat(d,[function(w,C,g){w===2&&g.length&&g[0].lastIndexOf(n)>0&&(g[0]=g[0].replace(r,y))},m,function(w){if(w===-2){var C=p;return p=[],C}}])),S.hash=d.length?d.reduce(function(w,C){return C.name||ki(15),tr(w,C.name)},5381).toString():"",S}var $0=ke.createContext();$0.Consumer;var _0=ke.createContext(),Mx=(_0.Consumer,new Wo),Os=Bx();function F0(){return _.useContext($0)||Mx}function P0(){return _.useContext(_0)||Os}var jx=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Os);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.toString=function(){return ki(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Os),this.name+t.hash},e}(),Ux=/([A-Z])/,Hx=/([A-Z])/g,Qx=/^ms-/,Vx=function(e){return"-"+e.toLowerCase()};function Rd(e){return Ux.test(e)?e.replace(Hx,Vx).replace(Qx,"-ms-"):e}var Od=function(e){return e==null||e===!1||e===""};function Dn(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],l=0,a=e.length;l<a;l+=1)(i=Dn(e[l],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(Od(e))return"";if(Wc(e))return"."+e.styledComponentId;if(gi(e)){if(typeof(d=e)!="function"||d.prototype&&d.prototype.isReactComponent||!t)return e;var c=e(t);return Dn(c,t,n,r)}var d;return e instanceof jx?n?(e.inject(n,r),e.getName(r)):e:As(e)?function h(p,m){var y,S,w=[];for(var C in p)p.hasOwnProperty(C)&&!Od(p[C])&&(Array.isArray(p[C])&&p[C].isCss||gi(p[C])?w.push(Rd(C)+":",p[C],";"):As(p[C])?w.push.apply(w,h(p[C],C)):w.push(Rd(C)+": "+(y=C,(S=p[C])==null||typeof S=="boolean"||S===""?"":typeof S!="number"||S===0||y in nx||y.startsWith("--")?String(S).trim():S+"px")+";"));return m?[m+" {"].concat(w,["}"]):w}(e):e.toString()}var Id=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function ue(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return gi(e)||As(e)?Id(Dn(_d(Qo,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Id(Dn(_d(e,n)))}var A0=function(e,t,n){return n===void 0&&(n=gn),e.theme!==n.theme&&e.theme||t||n.theme},Wx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Kx=/(^-|-$)/g;function sa(e){return e.replace(Wx,"-").replace(Kx,"")}var R0=function(e){return Rs(E0(e)>>>0)};function Qi(e){return typeof e=="string"&&!0}var Is=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Gx=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function qx(e,t,n){var r=e[n];Is(t)&&Is(r)?O0(r,t):e[n]=t}function O0(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var l=o[i];if(Is(l))for(var a in l)Gx(a)&&qx(e,l[a],a)}return e}var Gc=ke.createContext();Gc.Consumer;var ca={};function I0(e,t,n){var r=Wc(e),i=!Qi(e),o=t.attrs,l=o===void 0?Qo:o,a=t.componentId,c=a===void 0?function(f,v){var k=typeof f!="string"?"sc":sa(f);ca[k]=(ca[k]||0)+1;var T=k+"-"+R0("5.3.11"+k+ca[k]);return v?v+"-"+T:T}(t.displayName,t.parentComponentId):a,d=t.displayName,h=d===void 0?function(f){return Qi(f)?"styled."+f:"Styled("+Fd(f)+")"}(e):d,p=t.displayName&&t.componentId?sa(t.displayName)+"-"+t.componentId:t.componentId||c,m=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,y=t.shouldForwardProp;r&&e.shouldForwardProp&&(y=t.shouldForwardProp?function(f,v,k){return e.shouldForwardProp(f,v,k)&&t.shouldForwardProp(f,v,k)}:e.shouldForwardProp);var S,w=new Lx(n,p,r?e.componentStyle:void 0),C=w.isStatic&&l.length===0,g=function(f,v){return function(k,T,$,L){var z=k.attrs,Y=k.componentStyle,A=k.defaultProps,j=k.foldedComponentIds,H=k.shouldForwardProp,V=k.styledComponentId,D=k.target,Q=function(G,E,te){G===void 0&&(G=gn);var B=At({},E,{theme:G}),Se={};return te.forEach(function(oe){var ae,X,Oe,Ye=oe;for(ae in gi(Ye)&&(Ye=Ye(B)),Ye)B[ae]=Se[ae]=ae==="className"?(X=Se[ae],Oe=Ye[ae],X&&Oe?X+" "+Oe:X||Oe):Ye[ae]}),[B,Se]}(A0(T,_.useContext(Gc),A)||gn,T,z),J=Q[0],ee=Q[1],O=function(G,E,te,B){var Se=F0(),oe=P0(),ae=E?G.generateAndInjectStyles(gn,Se,oe):G.generateAndInjectStyles(te,Se,oe);return ae}(Y,L,J),W=$,K=ee.$as||T.$as||ee.as||T.as||D,P=Qi(K),F=ee!==T?At({},T,{},ee):T,I={};for(var N in F)N[0]!=="$"&&N!=="as"&&(N==="forwardedAs"?I.as=F[N]:(H?H(N,bd,K):!P||bd(N))&&(I[N]=F[N]));return T.style&&ee.style!==T.style&&(I.style=At({},T.style,{},ee.style)),I.className=Array.prototype.concat(j,V,O!==V?O:null,T.className,ee.className).filter(Boolean).join(" "),I.ref=W,_.createElement(K,I)}(S,f,v,C)};return g.displayName=h,(S=ke.forwardRef(g)).attrs=m,S.componentStyle=w,S.displayName=h,S.shouldForwardProp=y,S.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Qo,S.styledComponentId=p,S.target=r?e.target:e,S.withComponent=function(f){var v=t.componentId,k=function($,L){if($==null)return{};var z,Y,A={},j=Object.keys($);for(Y=0;Y<j.length;Y++)z=j[Y],L.indexOf(z)>=0||(A[z]=$[z]);return A}(t,["componentId"]),T=v&&v+"-"+(Qi(f)?f:sa(Fd(f)));return I0(f,At({},k,{attrs:m,componentId:T}),n)},Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?O0({},e.defaultProps,f):f}}),Object.defineProperty(S,"toString",{value:function(){return"."+S.styledComponentId}}),i&&yx(S,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),S}var Ds=function(e){return function t(n,r,i){if(i===void 0&&(i=gn),!y0.isValidElementType(r))return ki(1,String(r));var o=function(){return n(r,i,ue.apply(void 0,arguments))};return o.withConfig=function(l){return t(n,r,At({},i,{},l))},o.attrs=function(l){return t(n,r,At({},i,{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)}))},o}(I0,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Ds[e]=Ds(e)});var Yx=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=T0(n),Wo.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,o){var l=o(Dn(this.rules,r,i,o).join(""),""),a=this.componentId+n;i.insertRules(a,a,l)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,o){n>2&&Wo.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,o)},e}();function Xx(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=ue.apply(void 0,[e].concat(n)),o="sc-global-"+R0(JSON.stringify(i)),l=new Yx(i,o);function a(d){var h=F0(),p=P0(),m=_.useContext(Gc),y=_.useRef(h.allocateGSInstance(o)).current;return h.server&&c(y,d,h,m,p),_.useLayoutEffect(function(){if(!h.server)return c(y,d,h,m,p),function(){return l.removeStyles(y,h)}},[y,d,h,m,p]),null}function c(d,h,p,m,y){if(l.isStatic)l.renderStyles(d,wx,p,y);else{var S=At({},h,{theme:A0(h,m,a.defaultProps)});l.renderStyles(d,S,p,y)}}return ke.memo(a)}const u=Ds,D0={searchQuery:"",searchFilters:{},searchResults:[],selectedClinic:null,selectedServices:[],selectedSpecialist:null,selectedDate:null,selectedTime:null,currentUser:{name:"Владислав Прищепов",phone:"+7(999)4620809",email:"",avatar:"/assets/images/0235e2ec7b64e89803c2ebe320dbddf014cebf7a_48.jpg"},patientInfo:{name:"Владислав Прищепов",phone:"+7(999)4620809",email:"",comment:""},currentStep:"search",isLoading:!1,errors:{},totalPrice:0,estimatedDuration:0,bookingResult:null,activeAppointment:null,appointments:[],isStorageLoaded:!1,toast:null,modals:{filter:!1,confirm:!1}},U={SET_SEARCH_QUERY:"SET_SEARCH_QUERY",SET_SEARCH_FILTERS:"SET_SEARCH_FILTERS",SET_SEARCH_RESULTS:"SET_SEARCH_RESULTS",SELECT_CLINIC:"SELECT_CLINIC",SELECT_SERVICES:"SELECT_SERVICES",SELECT_SPECIALIST:"SELECT_SPECIALIST",SELECT_DATE_TIME:"SELECT_DATE_TIME",UPDATE_PATIENT_INFO:"UPDATE_PATIENT_INFO",SET_CURRENT_STEP:"SET_CURRENT_STEP",SET_LOADING:"SET_LOADING",SET_ERROR:"SET_ERROR",CLEAR_ERROR:"CLEAR_ERROR",CLEAR_ALL_ERRORS:"CLEAR_ALL_ERRORS",SET_BOOKING_RESULT:"SET_BOOKING_RESULT",SET_ACTIVE_APPOINTMENT:"SET_ACTIVE_APPOINTMENT",CLEAR_ACTIVE_APPOINTMENT:"CLEAR_ACTIVE_APPOINTMENT",ADD_APPOINTMENT:"ADD_APPOINTMENT",REMOVE_APPOINTMENT:"REMOVE_APPOINTMENT",UPDATE_APPOINTMENT:"UPDATE_APPOINTMENT",RESET_BOOKING_FLOW:"RESET_BOOKING_FLOW",RESET_SEARCH:"RESET_SEARCH",RESET_ALL:"RESET_ALL",SHOW_TOAST:"SHOW_TOAST",HIDE_TOAST:"HIDE_TOAST",TOGGLE_MODAL:"TOGGLE_MODAL",LOAD_FROM_STORAGE:"LOAD_FROM_STORAGE",SET_STORAGE_LOADED:"SET_STORAGE_LOADED"};function Zx(e,t){var n;switch(t.type){case U.SET_SEARCH_QUERY:return{...e,searchQuery:t.payload};case U.SET_SEARCH_FILTERS:return{...e,searchFilters:t.payload};case U.SET_SEARCH_RESULTS:return{...e,searchResults:t.payload};case U.SELECT_CLINIC:return{...e,selectedClinic:t.payload,currentStep:"services"};case U.SELECT_SERVICES:{const l=t.payload,a=l.reduce((d,h)=>d+(h.price||0),0),c=l.reduce((d,h)=>d+(h.duration||30),0);return{...e,selectedServices:l,totalPrice:a,estimatedDuration:c,currentStep:"specialist"}}case U.SELECT_SPECIALIST:return{...e,selectedSpecialist:t.payload,currentStep:"datetime"};case U.SELECT_DATE_TIME:return{...e,selectedDate:t.payload.date,selectedTime:t.payload.time,currentStep:"confirm"};case U.UPDATE_PATIENT_INFO:return{...e,patientInfo:{...e.patientInfo,...t.payload}};case U.SET_CURRENT_STEP:return{...e,currentStep:t.payload};case U.SET_LOADING:return{...e,isLoading:t.payload};case U.SET_ERROR:return{...e,errors:{...e.errors,[t.payload.field]:t.payload.error}};case U.CLEAR_ERROR:const{[t.payload]:r,...i}=e.errors;return{...e,errors:i};case U.CLEAR_ALL_ERRORS:return{...e,errors:{}};case U.SET_BOOKING_RESULT:return{...e,bookingResult:t.payload,currentStep:"success"};case U.SET_ACTIVE_APPOINTMENT:return{...e,activeAppointment:t.payload};case U.CLEAR_ACTIVE_APPOINTMENT:return{...e,activeAppointment:null};case U.ADD_APPOINTMENT:console.log("🔸 Reducer: ADD_APPOINTMENT called with:",t.payload),console.log("🔸 Reducer: Current appointments count:",e.appointments.length);const o=[...e.appointments,t.payload];return console.log("🔸 Reducer: New appointments count:",o.length),{...e,appointments:o};case U.REMOVE_APPOINTMENT:return{...e,appointments:e.appointments.filter(l=>l.id!==t.payload)};case U.UPDATE_APPOINTMENT:return{...e,appointments:e.appointments.map(l=>l.id===t.payload.id?{...l,...t.payload}:l)};case U.RESET_BOOKING_FLOW:return{...e,selectedClinic:null,selectedServices:[],selectedSpecialist:null,selectedDate:null,selectedTime:null,patientInfo:{name:"",phone:"",email:"",comment:""},totalPrice:0,estimatedDuration:0,bookingResult:null,currentStep:"search",errors:{}};case U.RESET_SEARCH:return{...e,searchQuery:"",searchFilters:{},searchResults:[]};case U.RESET_ALL:return{...D0};case U.SHOW_TOAST:return{...e,toast:t.payload};case U.HIDE_TOAST:return{...e,toast:null};case U.TOGGLE_MODAL:return{...e,modals:{...e.modals,[t.payload.modal]:t.payload.isOpen}};case U.LOAD_FROM_STORAGE:return console.log("🔸 Reducer: LOAD_FROM_STORAGE called with payload:",t.payload),console.log("🔸 Reducer: Current state appointments:",e.appointments.length),console.log("🔸 Reducer: New appointments to set:",((n=t.payload.appointments)==null?void 0:n.length)||0),{...e,...t.payload,isStorageLoaded:!0};case U.SET_STORAGE_LOADED:return{...e,isStorageLoaded:!0};default:return e}}const Or="medpoisk-appointments",L0=_.createContext();function N0({children:e}){const[t,n]=_.useReducer(Zx,D0);_.useEffect(()=>{console.log("🔸 AppContext: Initializing, checking localStorage for key:",Or);const l=localStorage.getItem(Or);if(console.log("🔸 AppContext: Raw localStorage data:",l),l)try{const a=JSON.parse(l);console.log("🔸 AppContext: Parsed appointments:",a),console.log("🔸 AppContext: Number of appointments to load:",a.length),n({type:U.LOAD_FROM_STORAGE,payload:{appointments:a}})}catch(a){console.error("Failed to load appointments from storage:",a),n({type:U.SET_STORAGE_LOADED})}else console.log("🔸 AppContext: No saved appointments found in localStorage"),n({type:U.SET_STORAGE_LOADED})},[]),_.useEffect(()=>{if(!t.isStorageLoaded){console.log("🔸 AppContext: Skipping save - storage not loaded yet");return}try{console.log("🔸 AppContext: Appointments changed, current count:",t.appointments.length),console.log("🔸 AppContext: Appointments data:",t.appointments),console.log("🔸 AppContext: Saving to localStorage with key:",Or),localStorage.setItem(Or,JSON.stringify(t.appointments));const l=localStorage.getItem(Or);console.log("🔸 AppContext: Verification - saved data:",l)}catch(l){console.error("Failed to save appointments to storage:",l)}},[t.appointments,t.isStorageLoaded]);const r={setSearchQuery:l=>n({type:U.SET_SEARCH_QUERY,payload:l}),setSearchFilters:l=>n({type:U.SET_SEARCH_FILTERS,payload:l}),setSearchResults:l=>n({type:U.SET_SEARCH_RESULTS,payload:l}),selectClinic:l=>n({type:U.SELECT_CLINIC,payload:l}),selectServices:l=>n({type:U.SELECT_SERVICES,payload:l}),selectSpecialist:l=>n({type:U.SELECT_SPECIALIST,payload:l}),selectDateTime:(l,a)=>n({type:U.SELECT_DATE_TIME,payload:{date:l,time:a}}),updatePatientInfo:l=>n({type:U.UPDATE_PATIENT_INFO,payload:l}),setCurrentStep:l=>n({type:U.SET_CURRENT_STEP,payload:l}),setLoading:l=>n({type:U.SET_LOADING,payload:l}),setError:(l,a)=>n({type:U.SET_ERROR,payload:{field:l,error:a}}),clearError:l=>n({type:U.CLEAR_ERROR,payload:l}),clearAllErrors:()=>n({type:U.CLEAR_ALL_ERRORS}),setBookingResult:l=>n({type:U.SET_BOOKING_RESULT,payload:l}),setActiveAppointment:l=>n({type:U.SET_ACTIVE_APPOINTMENT,payload:l}),clearActiveAppointment:()=>n({type:U.CLEAR_ACTIVE_APPOINTMENT}),addAppointment:l=>n({type:U.ADD_APPOINTMENT,payload:l}),removeAppointment:l=>n({type:U.REMOVE_APPOINTMENT,payload:l}),updateAppointment:l=>n({type:U.UPDATE_APPOINTMENT,payload:l}),resetBookingFlow:()=>n({type:U.RESET_BOOKING_FLOW}),resetSearch:()=>n({type:U.RESET_SEARCH}),resetAll:()=>n({type:U.RESET_ALL}),showToast:(l,a="info",c=3e3)=>{n({type:U.SHOW_TOAST,payload:{message:l,type:a,duration:c}}),setTimeout(()=>{n({type:U.HIDE_TOAST})},c)},hideToast:()=>n({type:U.HIDE_TOAST}),toggleModal:(l,a)=>n({type:U.TOGGLE_MODAL,payload:{modal:l,isOpen:a}}),setFilters:l=>n({type:U.SET_SEARCH_FILTERS,payload:l}),getFilters:()=>t.searchFilters,setSelectedClinic:l=>n({type:U.SELECT_CLINIC,payload:l}),setSelectedServices:l=>n({type:U.SELECT_SERVICES,payload:l}),setSelectedSpecialist:l=>n({type:U.SELECT_SPECIALIST,payload:l}),setSelectedDateTime:l=>n({type:U.SELECT_DATE_TIME,payload:{date:l==null?void 0:l.date,time:l==null?void 0:l.time}}),setPatientData:l=>n({type:U.UPDATE_PATIENT_INFO,payload:l}),getPatientData:()=>t.patientInfo,clearBookingData:()=>n({type:U.RESET_BOOKING_FLOW})},o={state:t,actions:r,getters:{isBookingComplete:()=>!!(t.selectedClinic&&t.selectedServices.length>0&&t.selectedSpecialist&&t.selectedDate&&t.selectedTime&&t.patientInfo.name&&t.patientInfo.phone),getBookingData:()=>({clinic:t.selectedClinic,services:t.selectedServices,specialist:t.selectedSpecialist,date:t.selectedDate,time:t.selectedTime,patient:t.patientInfo,totalPrice:t.totalPrice,estimatedDuration:t.estimatedDuration}),hasActiveFilters:()=>Object.keys(t.searchFilters).length>0},dispatch:n,appointments:t.appointments,addAppointment:r.addAppointment,removeAppointment:r.removeAppointment,updateAppointment:r.updateAppointment};return s(L0.Provider,{value:o,children:e})}function Gt(){const e=_.useContext(L0);if(!e)throw new Error("useAppContext must be used within an AppProvider");return e}const Jx=u.div`
  position: fixed;
  top: 60px;
  left: 16px;
  right: 16px;
  z-index: 10000;
  display: flex;
  justify-content: center;
  pointer-events: none;
`,ey=u.div`
  background: ${e=>{switch(e.type){case"success":return"#4CAF50";case"error":return"#FF5252";case"warning":return"#FF9800";default:return"#2196F3"}}};
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  font-family: 'SB Sans Text', -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 500;
  max-width: 300px;
  text-align: center;
  animation: slideIn 0.3s ease-out;
  pointer-events: auto;
  
  @keyframes slideIn {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`,ty=()=>{const{state:e,actions:t}=Gt(),{toast:n}=e;return _.useEffect(()=>{if(n){const r=setTimeout(()=>{t.hideToast()},n.duration||3e3);return()=>clearTimeout(r)}},[n,t]),n?s(Jx,{children:s(ey,{type:n.type,children:n.message})}):null},ny=u.div`
  display: flex;
  padding: 0px 0px 8px 16px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
  border-radius: 12px;
  background: #FFF;
  margin-bottom: 12px;
  
  &:hover {
    box-shadow: 0px 0px 0px 0.5px rgba(0, 0, 0, 0.04), 0px 1px 4px 0px rgba(0, 0, 0, 0.08);
  }
`,ry=u.div`
  display: flex;
  padding: 16px 16px 12px 0px;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  background: rgba(0, 0, 0, 0.00);
  box-shadow: 0px 0.5px 0px 0px rgba(137, 137, 137, 0.20) inset;
  position: relative;
  cursor: pointer;
`,iy=u.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  position: relative;
`,oy=u.div`
  color: #141414;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.24px;
  margin-bottom: 8px;
`,ly=u.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
  margin-bottom: 8px;
`,ay=u.div`
  color: #141414;
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.3px;
`,sy=u.div`
  color: rgba(20, 20, 20, 0.70);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;
`,cy=u.div`
  color: rgba(20, 20, 20, 0.50);
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.234px;
`,uy=u.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`,dy=u.div`
  color: rgba(20, 20, 20, 0.70);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.28px;
`,py=u.div`
  display: flex;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: ${e=>e.status==="cancelled"?"#FF4444":"#1BA136"};
  color: #FFF;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.28px;
`,fy=u.div`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-shrink: 0;
`,hy=u.button`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  border: none;
  background: ${e=>e.variant==="cancel"?"#FFE6E6":"#F8F8F8"};
  color: ${e=>e.variant==="cancel"?"#FF4444":"#898989"};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  
  &:hover {
    background: ${e=>e.variant==="cancel"?"#FFCCCC":"#EEEEEE"};
  }
  
  &:active {
    transform: scale(0.95);
  }
`,gy=u.div`
  width: 20px;
  height: 20px;
  background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.5 5l5 5-5 5' stroke='%23898989' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
`,my=u.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,vy=u.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin: 16px;
  max-width: 300px;
  width: 100%;
`,xy=u.h3`
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: 600;
  color: #141414;
`,yy=u.p`
  margin: 0 0 24px 0;
  font-size: 15px;
  color: #898989;
  line-height: 1.4;
`,Sy=u.div`
  display: flex;
  gap: 12px;
`,Dd=u.button`
  flex: 1;
  padding: 12px;
  border-radius: 8px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  
  ${e=>e.variant==="primary"?`
    background: #FF4444;
    color: white;
    
    &:hover {
      background: #FF2222;
    }
  `:`
    background: #F8F8F8;
    color: #141414;
    
    &:hover {
      background: #EEEEEE;
    }
  `}
`;function Rl({appointment:e,onClick:t}){var y,S,w;const n=Ve(),{removeAppointment:r,updateAppointment:i,actions:o}=Gt(),[l,a]=_.useState(!1),c=C=>{if(!C)return"14 июня, вт, 10:30";const g=new Date(C.date),f=["вс","пн","вт","ср","чт","пт","сб"],v=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],k=f[g.getDay()],T=g.getDate(),$=v[g.getMonth()];return`${T} ${$}, ${k}, ${C.time}`},d=C=>{C.target.closest("button")||(t?t():(o.setActiveAppointment(e),n("/appointment")))},h=C=>{C.stopPropagation(),a(!0)},p=()=>{console.log("🔸 AppointmentCard: Cancelling appointment:",e.id),i({...e,status:"cancelled"}),o.showToast("Запись отменена","success"),a(!1)},m=()=>{a(!1)};return x(Us,{children:[s(ny,{children:x(ry,{onClick:d,children:[x(iy,{children:[s(oy,{children:e.status==="cancelled"?"Отмененная запись":"Ваша запись"}),x(ly,{children:[s(ay,{children:((y=e.clinic)==null?void 0:y.name)||"МедЦентр «Здоровье»"}),e.specialist&&s(sy,{children:e.specialist.name}),((S=e.specialist)==null?void 0:S.specialty)&&s(cy,{children:e.specialist.specialty})]}),x(uy,{children:[s(dy,{children:"Дата и время"}),s(py,{status:e.status,children:c(e.dateTime)})]})]}),x(fy,{children:[e.status==="active"&&s(hy,{variant:"cancel",onClick:h,title:"Отменить запись",children:"✕"}),s(gy,{})]})]})}),l&&s(my,{onClick:m,children:x(vy,{onClick:C=>C.stopPropagation(),children:[s(xy,{children:"Отменить запись?"}),x(yy,{children:["Вы действительно хотите отменить запись в ",((w=e.clinic)==null?void 0:w.name)||"клинику"," на ",c(e.dateTime),"?"]}),x(Sy,{children:[s(Dd,{onClick:m,children:"Оставить"}),s(Dd,{variant:"primary",onClick:p,children:"Отменить запись"})]})]})})]})}const wy=u.div`
  display: flex;
  width: 100%;
  max-width: 393px;
  align-items: flex-start;
  flex-shrink: 0;
  background: rgba(241, 241, 241, 0.70);
  box-shadow: 0px -1px 2px 0px rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(20px);
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0px;
  height: 48px;
  z-index: 1000;
  margin: 0 auto;
`,ua=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 0;
  position: relative;
  cursor: pointer;
`,da=u.div`
  display: flex;
  width: 60px;
  height: 48px;
  padding: 6px 0px 3px 0px;
  flex-direction: column;
  align-items: center;
  gap: 1px;
  position: relative;
`,pa=u.div`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,Ld=u.div`
  width: ${e=>e.width||"18px"};
  height: ${e=>e.height||"18px"};
  flex-shrink: 0;
  position: absolute;
  left: ${e=>e.left||"3px"};
  top: ${e=>e.top||"3px"};
  background: ${e=>e.active?"#1BA136":"#898989"};
  
  ${e=>e.isOverview&&`
    mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z'/%3E%3C/svg%3E") no-repeat center;
    mask-size: contain;
    -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z'/%3E%3C/svg%3E") no-repeat center;
    -webkit-mask-size: contain;
  `}
  
  ${e=>e.isRoutes&&`
    mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z'/%3E%3C/svg%3E") no-repeat center;
    mask-size: contain;
    -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z'/%3E%3C/svg%3E") no-repeat center;
    -webkit-mask-size: contain;
  `}
`,Cy=u.div`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 12px;
  border: 0.5px solid rgba(137, 137, 137, 0.30);
  background: #FFF;
  background-image: url('${e=>e.src}');
  background-size: cover;
  background-position: center;
`,fa=u.span`
  align-self: stretch;
  color: ${e=>e.active?"#1BA136":"#898989"};
  text-align: center;
  font-family: 'SB Sans Text', -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.176px;
  position: relative;
`,ky=({activeTab:e="overview",onTabChange:t})=>{const n=Ve(),{state:r}=Gt(),i=o=>{switch(o){case"overview":n("/");break;case"routes":break;case"profile":n("/profile");break}t&&t(o)};return x(wy,{children:[s(ua,{onClick:()=>i("overview"),children:x(da,{children:[s(pa,{children:s(Ld,{active:e==="overview",isOverview:!0,width:"18px",height:"18px",left:"3px",top:"3px"})}),s(fa,{active:e==="overview",children:"Обзор"})]})}),s(ua,{onClick:()=>i("routes"),children:x(da,{children:[s(pa,{children:s(Ld,{active:e==="routes",isRoutes:!0,width:"20px",height:"18px",left:"2px",top:"3px"})}),s(fa,{active:e==="routes",children:"Маршруты"})]})}),s(ua,{onClick:()=>i("profile"),children:x(da,{children:[s(pa,{children:s(Cy,{src:r.currentUser.avatar})}),s(fa,{active:e==="profile",children:"Профиль"})]})})]})},b={colors:{backgroundPrimary:"#F1F1F1",backgroundSecondary:"#FFF",backgroundOverlay:"rgba(0, 0, 0, 0.40)",surface01:"rgba(20, 20, 20, 0.06)",surface02:"rgba(20, 20, 20, 0.09)",surfaceSection01:"#FFF",surfaceSection02:"rgba(20, 20, 20, 0.06)",textPrimary:"#141414",textSecondary:"#898989",textTertiary:"#B8B8B8",textAccent:"#5A5A5A",textWhite:"#FFF",brandPrimary:"#1DB93C",brandAccent:"#1BA136",brandSuccess:"#1BA136",statusError:"#F5373C",statusWarning:"#EFA701",statusSuccess:"#1BA136",trafficHeavy:"#F5373C",trafficAverage:"#EFA701",trafficLight:"#1BA136",divider:"rgba(137, 137, 137, 0.40)",buttonPrimary:"#1DB93C",buttonPrimaryHover:"#16a32e",buttonSecondary:"rgba(20, 20, 20, 0.06)",buttonSecondaryHover:"rgba(20, 20, 20, 0.12)"},fonts:{primary:"'SB Sans Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",system:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"},fontSizes:{caption2:"11px",caption:"13px",footnote:"14px",subhead:"15px",body:"16px",title3:"18px",title2:"19px",title1:"20px",largeTitle:"24px"},fontWeights:{regular:400,medium:500,semibold:600},lineHeights:{caption2:"14px",caption:"16px",footnote:"18px",subhead:"20px",body:"20px",title:"24px"},letterSpacings:{caption2:"-0.176px",caption:"-0.234px",footnote:"-0.28px",subhead:"-0.3px",body:"-0.24px",title2:"-0.437px",title3:"-0.38px"},borderRadius:{small:"6px",medium:"8px",large:"12px",xlarge:"16px"},spacing:{xs:"4px",sm:"8px",md:"12px",lg:"16px",xl:"24px",xxl:"32px"},shadows:{card:"0px 0px 0px 0.5px rgba(0, 0, 0, 0.04), 0px 1px 4px 0px rgba(0, 0, 0, 0.08)",cardHover:"0px 0px 0px 0.5px rgba(0, 0, 0, 0.08), 0px 2px 8px 0px rgba(0, 0, 0, 0.12)",bottomSheet:"0px -1px 2px 0px rgba(0, 0, 0, 0.06)"},zIndex:{base:1,elevated:10,overlay:50,modal:100,notification:1e3},breakpoints:{mobile:"375px",tablet:"768px",desktop:"1024px"},transitions:{fast:"all 0.15s ease",normal:"all 0.2s ease",slow:"all 0.3s ease"}},he={largeTitle:ue`
    font-size: ${b.fontSizes.largeTitle};
    font-weight: ${b.fontWeights.semibold};
    line-height: ${b.lineHeights.title};
  `,title1:ue`
    font-size: ${b.fontSizes.title1};
    font-weight: ${b.fontWeights.semibold};
    line-height: ${b.lineHeights.title};
  `,title2:ue`
    font-size: ${b.fontSizes.title2};
    font-weight: ${b.fontWeights.medium};
    line-height: ${b.lineHeights.title};
    letter-spacing: ${b.letterSpacings.title2};
  `,title3:ue`
    font-size: ${b.fontSizes.title3};
    font-weight: ${b.fontWeights.semibold};
    line-height: ${b.lineHeights.title};
    letter-spacing: ${b.letterSpacings.title3};
  `,body:ue`
    font-size: ${b.fontSizes.body};
    font-weight: ${b.fontWeights.medium};
    line-height: ${b.lineHeights.body};
    letter-spacing: ${b.letterSpacings.body};
  `,subhead:ue`
    font-size: ${b.fontSizes.subhead};
    font-weight: ${b.fontWeights.medium};
    line-height: ${b.lineHeights.subhead};
    letter-spacing: ${b.letterSpacings.subhead};
  `,footnote:ue`
    font-size: ${b.fontSizes.footnote};
    font-weight: ${b.fontWeights.regular};
    line-height: ${b.lineHeights.footnote};
    letter-spacing: ${b.letterSpacings.footnote};
  `,caption:ue`
    font-size: ${b.fontSizes.caption};
    font-weight: ${b.fontWeights.regular};
    line-height: ${b.lineHeights.caption};
    letter-spacing: ${b.letterSpacings.caption};
  `,caption2:ue`
    font-size: ${b.fontSizes.caption2};
    font-weight: ${b.fontWeights.regular};
    line-height: ${b.lineHeights.caption2};
    letter-spacing: ${b.letterSpacings.caption2};
  `},by=ue`
  display: flex;
  align-items: center;
  justify-content: center;
`,Ey=ue`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,z0=ue`
  display: flex;
  flex-direction: column;
`;ue`
  ${z0}
  align-items: center;
  justify-content: center;
`;const Ty=ue`
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
`,$y=ue`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${b.colors.textTertiary};
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${b.colors.textSecondary};
  }
`,qc=ue`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-family: ${b.fonts.primary};
  outline: none;
  transition: ${b.transitions.normal};
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,_y=ue`
  ${qc}
  background: ${b.colors.buttonPrimary};
  color: ${b.colors.textWhite};
  border-radius: ${b.borderRadius.medium};
  padding: 10px 16px;
  ${he.subhead}
  
  &:hover:not(:disabled) {
    background: ${b.colors.buttonPrimaryHover};
  }
`,Fy=ue`
  ${qc}
  background: ${b.colors.buttonSecondary};
  color: ${b.colors.textPrimary};
  border-radius: ${b.borderRadius.medium};
  padding: 10px 16px;
  ${he.subhead}
  
  &:hover:not(:disabled) {
    background: ${b.colors.buttonSecondaryHover};
  }
`,B0=ue`
  ${qc}
  padding: ${b.spacing.sm};
  width: 40px;
  height: 40px;
  background: ${b.colors.buttonSecondary};
  border-radius: ${b.borderRadius.medium};
  
  &:hover:not(:disabled) {
    background: ${b.colors.buttonSecondaryHover};
  }
`,M0=ue`
  background: ${b.colors.backgroundSecondary};
  border-radius: ${b.borderRadius.large};
  box-shadow: ${b.shadows.card};
  transition: ${b.transitions.normal};
`,Py=ue`
  ${M0}
  cursor: pointer;
  
  &:hover {
    box-shadow: ${b.shadows.cardHover};
  }
`,Ay=ue`
  font-family: ${b.fonts.primary};
  border: none;
  outline: none;
  background: transparent;
  color: ${b.colors.textPrimary};
  
  &::placeholder {
    color: ${b.colors.textSecondary};
  }
`,Ry=ue`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: ${b.borderRadius.xlarge} ${b.borderRadius.xlarge} 0px 0px;
  background: ${b.colors.backgroundPrimary};
  position: relative;
  min-height: calc(100vh - 64px);
  overflow: hidden;
`,Oy=ue`
  display: flex;
  height: 0px;
  padding-bottom: 6px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  align-self: stretch;
  position: relative;

  &::after {
    content: '';
    width: 40px;
    height: 4px;
    border-radius: 6px;
    background: rgba(137, 137, 137, 0.25);
  }
`,Iy=ue`
  &:focus-visible {
    outline: 2px solid ${b.colors.brandAccent};
    outline-offset: 2px;
  }
`,Dy=ue`
  ::selection {
    background: ${b.colors.brandAccent};
    color: ${b.colors.textWhite};
  }
`;u.div`
  ${Ty}
  background: ${e=>e.backgroundImage?`linear-gradient(0deg, ${b.colors.backgroundOverlay} 0%, ${b.colors.backgroundOverlay} 100%), 
       url('${e.backgroundImage}') lightgray 50% / cover no-repeat`:b.colors.backgroundPrimary};
  font-family: ${b.fonts.primary};
  margin: 0 auto;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: ${e=>e.hasBottomSheet?"flex-end":"flex-start"};
  align-items: center;
  padding-top: ${e=>e.hasBottomSheet?"64px":"0"};
`;u.div`
  width: 100%;
  height: ${e=>e.height||"244px"};
  background: url('${e=>e.src}') center / cover no-repeat;
  position: absolute;
  top: 0;
  left: 0;
`;u.div`
  width: 100%;
  height: ${e=>e.height||"226px"};
  background: ${b.colors.surface01};
  backdrop-filter: blur(20px);
  position: absolute;
  top: 0;
  left: 0;
`;u.div`
  width: 100%;
  height: 20px;
  backdrop-filter: blur(20px);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7px;
  z-index: ${b.zIndex.modal};
`;u.div`
  color: #000;
  font-family: 'SF Pro Text', ${b.fonts.system};
  font-size: 12px;
  font-weight: ${b.fontWeights.semibold};
  margin-left: 135px;
`;const Ly=u.div`
  width: 100%;
  min-height: 100vh;
  background: #F1F1F1;
  position: relative;
  font-family: 'SB Sans Text', -apple-system, Roboto, Helvetica, sans-serif;
  margin: 0 auto;
  max-width: 100vw;
  overflow-x: hidden;
`,Ny=u.img`
  width: 100%;
  height: ${e=>e.height||"812px"};
  flex-shrink: 0;
  position: absolute;
  left: 0px;
  top: 0px;
  object-fit: cover;
`,zy=u.div`
  display: flex;
  width: 100%;
  min-height: ${e=>e.contentMinHeight||"calc(100vh - 160px)"};
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: ${e=>e.noRadius?"0":"16px 16px 0px 0px"};
  background: #F1F1F1;
  position: absolute;
  left: 0px;
  top: ${e=>e.contentTop||"160px"};
  padding-bottom: ${e=>e.paddingBottom||"50px"};
`,Cr=({children:e,mapImage:t="/assets/images/dbeabc5ac0f4d8edc9feb4b0b06f4520eafc61ab_750.jpg",mapHeight:n="812px",contentTop:r="160px",contentMinHeight:i="calc(100vh - 160px)",paddingBottom:o="50px",noRadius:l=!1})=>x(Ly,{children:[s(Ny,{src:t,height:n,alt:""}),s(zy,{contentMinHeight:i,contentTop:r,paddingBottom:o,noRadius:l,children:e})]}),By=u.div`
  ${Ry}
  padding: ${b.spacing.lg} 0px ${b.spacing.md} 0px;
  ${e=>e.fullHeight&&`
    min-height: 100vh;
    border-radius: 0;
  `}
`,My=u.div`
  ${Oy}
`,jy=u.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  position: relative;
  ${e=>e.scrollable&&$y}
`,j0=({children:e,showDragger:t=!0,fullHeight:n=!1,scrollable:r=!1})=>x(By,{fullHeight:n,children:[t&&s(My,{}),s(jy,{scrollable:r,children:e})]}),Uy=u.button`
  ${B0}
`;u.div`
  width: 24px;
  height: 24px;
  position: relative;
`;const Hy=u.div`
  width: 24px;
  height: 24px;
  position: relative;
  
  &::after {
    content: '';
    width: 10px;
    height: 17px;
    background-color: ${b.colors.textPrimary};
    position: absolute;
    left: 7px;
    top: 3px;
    clip-path: polygon(100% 0%, 0% 50%, 100% 100%, 85% 50%);
  }
`,Qy=u.div`
  width: 24px;
  height: 24px;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 13px;
    height: 2px;
    background-color: ${b.colors.textPrimary};
    transform-origin: center;
  }
  
  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  
  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`,Vy=u.div`
  width: 24px;
  height: 24px;
  background: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m19 19-3.5-3.5' stroke='%23898989' stroke-width='2' stroke-linecap='round'/%3E%3Ccircle cx='11' cy='11' r='8' stroke='%23898989' stroke-width='2'/%3E%3C/svg%3E");
  flex-shrink: 0;
`,Wy=u.div`
  width: 20px;
  height: 20px;
  background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.5 5l5 5-5 5' stroke='%23898989' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
`,Ky=u.div`
  width: 24px;
  height: 24px;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 3px;
    width: 18px;
    height: 2px;
    background-color: ${b.colors.textPrimary};
    border-radius: 1px;
  }
  
  &::before {
    top: 7px;
    box-shadow: 0 5px 0 ${b.colors.textPrimary}, 0 10px 0 ${b.colors.textPrimary};
  }
`,Nd={back:Hy,close:Qy,search:Vy,chevron:Wy,menu:Ky},Ko=({icon:e,onClick:t,disabled:n,...r})=>{const i=Nd[e];return i?s(Uy,{onClick:t,disabled:n,...r,children:s(i,{})}):(console.warn(`Icon "${e}" not found. Available icons: ${Object.keys(Nd).join(", ")}`),null)},Gy=u.div`
  display: flex;
  height: 56px;
  align-items: center;
  align-self: stretch;
  position: relative;
`,qy=u.div`
  display: flex;
  padding: 0px ${b.spacing.lg};
  align-items: center;
  gap: ${b.spacing.md};
  flex: 1 0 0;
  position: relative;
`,Yy=u.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1 0 0;
  position: relative;
  padding-bottom: 8px;
`,Xy=u.div`
  flex: 1 0 0;
  color: ${b.colors.textPrimary};
  ${he.title2}
  padding: 7px 0px 1px 0px;
`,Zy=u.div`
  flex: 1 0 0;
  color: ${b.colors.textSecondary};
  ${he.subhead}
  padding: 1px 0px 3px 0px;
`,Jy=({title:e,subtitle:t,onBack:n,onClose:r,showBackButton:i=!1,showCloseButton:o=!1})=>s(Gy,{children:x(qy,{children:[i&&s(Ko,{icon:"back",onClick:n}),x(Yy,{children:[s(Xy,{children:e}),t&&s(Zy,{children:t})]}),o&&s(Ko,{icon:"close",onClick:r})]})}),e2=u.button`
  ${_y}
`,t2=u.button`
  ${Fy}
`,n2=u.button`
  ${B0}
`,zd=({variant:e="primary",children:t,onClick:n,disabled:r=!1,fullWidth:i=!1,...o})=>{const a=(()=>{switch(e){case"secondary":return t2;case"icon":return n2;default:return e2}})();return s(a,{onClick:n,disabled:r,style:{width:i?"100%":"auto"},...o,children:t})},r2=u.div`
  display: flex;
  height: ${e=>e.height||"40px"};
  padding: ${e=>e.large?"13px 12px 15px 16px":"10px 8px"};
  align-items: center;
  gap: ${e=>e.large?"8px":"6px"};
  flex: 1;
  border-radius: ${e=>e.large?b.borderRadius.large:b.borderRadius.medium};
  background: ${e=>e.background||b.colors.surface01};
  cursor: ${e=>e.onClick?"pointer":"default"};
`,i2=u.div`
  ${by}
  flex-shrink: 0;
`,o2=u.input`
  ${Ay}
  flex: 1;
  ${e=>e.large?he.body:he.subhead}
  
  &::placeholder {
    color: ${b.colors.textSecondary};
  }
`,l2=u.div`
  flex: 1;
  color: ${b.colors.textSecondary};
  ${e=>e.large?he.body:he.subhead}
`,U0=({placeholder:e="Поиск...",value:t,onChange:n,onClick:r,large:i=!1,background:o,height:l,readOnly:a=!1})=>x(r2,{onClick:()=>{r&&r()},large:i,background:o,height:l,children:[s(i2,{children:s(Ko,{icon:"search"})}),a?s(l2,{large:i,children:e}):s(o2,{type:"text",placeholder:e,value:t,onChange:n,large:i})]}),a2=u.div`
  ${e=>e.hoverable?Py:M0}
  padding: ${e=>e.padding||b.spacing.lg};
  ${e=>e.fullWidth&&"align-self: stretch;"}
  ${e=>e.height&&`height: ${e.height};`}
  ${e=>e.customStyles}
`,Vi=({children:e,onClick:t,hoverable:n=!1,padding:r,fullWidth:i=!1,height:o,customStyles:l,...a})=>s(a2,{onClick:t,hoverable:n||!!t,padding:r,fullWidth:i,height:o,customStyles:l,...a,children:e}),s2=u.div`
  display: flex;
  padding: 2px;
  align-items: center;
  gap: 2px;
  align-self: stretch;
  border-radius: 10px;
  background: ${b.colors.surface01};
  position: relative;
`,c2=u.button`
  display: flex;
  align-items: flex-start;
  flex: 1 0 0;
  border-radius: ${b.borderRadius.medium};
  background: ${e=>e.selected?b.colors.backgroundSecondary:"transparent"};
  box-shadow: ${e=>e.selected?b.shadows.card:"none"};
  border: none;
  cursor: pointer;
  padding: 6px 8px 8px 8px;
  justify-content: center;
  transition: ${b.transitions.normal};
`,u2=u.div`
  flex: 1 0 0;
  color: ${b.colors.textPrimary};
  text-align: center;
  font-family: ${b.fonts.primary};
  ${he.footnote}
`,d2=({options:e=[],selectedValue:t,onChange:n,...r})=>s(s2,{...r,children:e.map(i=>s(c2,{selected:t===i.value,onClick:()=>n(i.value),children:s(u2,{children:i.label})},i.value))}),p2=u.div`
  width: 100%;
  height: 20px;
  backdrop-filter: blur(20px);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7px;
  z-index: 100;
`,f2=u.div`
  color: #000;
  font-family: 'SF Pro Text', -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 600;
  margin-left: 135px;
`,h2=u.div`
  ${Ey}
  align-self: stretch;
  padding: 0 ${b.spacing.lg} ${b.spacing.lg} ${b.spacing.lg};
  gap: ${b.spacing.md};
`,g2=u.div`
  width: 24px;
  height: 24px;
  border-radius: ${b.borderRadius.small};
  background-image: url('/assets/images/0235e2ec7b64e89803c2ebe320dbddf014cebf7a_48.jpg');
  background-size: cover;
`;u.div`
  display: flex;
  padding: ${b.spacing.lg} 0px 0px 0px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
  height: 40px;
  overflow: hidden;
  background: ${b.colors.backgroundSecondary};
`;u.div`
  display: flex;
  width: 320px;
  height: 40px;
  justify-content: center;
  align-items: flex-start;
  flex-shrink: 0;
  position: absolute;
  left: 0px;
  top: 0px;
`;u.div`
  display: flex;
  width: 586px;
  align-items: center;
  gap: ${b.spacing.sm};
  position: absolute;
  left: ${b.spacing.lg};
  top: 0px;
  height: 40px;
`;u.div`
  display: flex;
  padding: 10px 14px;
  align-items: center;
  gap: ${b.spacing.sm};
  border-radius: ${b.borderRadius.medium};
  background: ${b.colors.surface01};
  white-space: nowrap;
`;u.span`
  color: ${e=>e.color||b.colors.textPrimary};
  ${he.subhead}
  text-align: center;
  font-weight: 500;
`;const Bd=u.div`
  display: flex;
  padding: ${b.spacing.lg} ${b.spacing.lg} 0px ${b.spacing.lg};
  flex-direction: column;
  align-items: flex-start;
  gap: ${b.spacing.md};
  align-self: stretch;
  background: ${b.colors.backgroundPrimary};
`,Md=u.div`
  ${he.title2}
  color: ${b.colors.textPrimary};
  font-weight: 600;
  padding-bottom: ${b.spacing.md};
`,m2=u.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: ${b.spacing.md};
`,v2=u.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`,x2=u.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  flex: 1 0 0;
`,y2=u.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  flex: 1 0 0;
`,S2=u.div`
  display: flex;
  height: 244px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  border-radius: 12px;
  background: ${b.colors.backgroundSecondary};
  flex-direction: column;
  cursor: pointer;
`,w2=u.div`
  display: flex;
  padding: 0px 16px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`,C2=u.div`
  ${he.body}
  color: ${b.colors.textPrimary};
  font-weight: 500;
  padding: 10px 0px 2px 0px;
`,jd=u.div`
  ${he.footnote}
  color: ${b.colors.textSecondary};
  padding-bottom: 12px;
`,k2=u.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  flex: 1 0 0;
  align-self: stretch;
  background-image: url('${e=>e.src}');
  background-size: cover;
  background-position: center;
`,Ud=u.div`
  display: flex;
  height: 116px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 12px;
  background: ${b.colors.backgroundSecondary};
  position: relative;
  cursor: pointer;
`,Hd=u.div`
  display: flex;
  padding: 0px 16px 12px 16px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 12px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 116px;
`,Qd=u.div`
  ${he.body}
  color: ${b.colors.textPrimary};
  font-weight: 500;
  padding: 10px 0px 2px 0px;
`,Vd=u.div`
  display: flex;
  height: 1px;
  justify-content: flex-end;
  align-items: flex-end;
  align-self: stretch;
`,Wd=u.div`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  background: ${b.colors.surface01};
  font-size: 32px;
`,b2=u.div`
  height: 60px;
  background: ${b.colors.backgroundPrimary};
`,E2=()=>{const e=Ve(),{appointments:t,addAppointment:n,state:r}=Gt(),i=()=>{e("/search?q=Клиника")};_.useEffect(()=>{window.debugAppointments={check:()=>{const l=localStorage.getItem("medpoisk-appointments");return console.log("🔍 localStorage content:",l),console.log("🔍 Parsed:",l?JSON.parse(l):"empty"),console.log("🔍 Context appointments:",t),console.log("🔍 Storage loaded flag:",r.isStorageLoaded),{stored:l,parsed:l?JSON.parse(l):null,context:t,isStorageLoaded:r.isStorageLoaded}},clear:()=>{localStorage.removeItem("medpoisk-appointments"),console.log("🧹 localStorage cleared"),window.location.reload()},add:()=>{const l={id:`test-${Date.now()}`,clinic:{name:"Тестовая клиника"},dateTime:{date:"2024-06-15",time:"10:00"},services:[{name:"Тестовая услуга"}],specialist:{name:"Тестовый врач"},status:"active"};n(l),console.log("➕ Test appointment added:",l)}},console.log("🔧 Debug functions available:"),console.log("  window.debugAppointments.check() - проверить localStorage"),console.log("  window.debugAppointments.clear() - очистить localStorage"),console.log("  window.debugAppointments.add() - добавить тестовую запись")},[t,n,r.isStorageLoaded]);const o=[{id:1,title:"Поесть",icon:"🍽️"},{id:2,title:"Банкоматы",icon:"💳"},{id:3,title:"Катки",icon:"⛸️"},{id:4,title:"Салоны красоты",subtitle:"5671 место",icon:"💄"},{id:5,title:"Пожить",icon:"🏨"},{id:6,title:"Все рубрики",icon:"⋯"}];return x(Cr,{mapImage:"/assets/images/1787ae2a5cea9bf92b50b8f4cc908087feab9732_640.jpg",contentTop:"64px",children:[x(p2,{children:[s("div",{style:{fontSize:"12px",color:"#000"},children:"LTE"}),s(f2,{children:"09:41"}),s("div",{style:{fontSize:"12px",color:"#000"},children:"100%"})]}),x(j0,{showDragger:!0,children:[x(h2,{children:[s(U0,{placeholder:"Поиск в Москве",onClick:i,readOnly:!0}),s(g2,{}),s(Ko,{icon:"menu"})]}),t.length>0&&(()=>{const a=(c=>{const d=new Date,h=c.filter(m=>m.dateTime).sort((m,y)=>{const S=new Date(m.dateTime.date+" "+m.dateTime.time),w=new Date(y.dateTime.date+" "+y.dateTime.time);return S-w});return h.find(m=>new Date(m.dateTime.date+" "+m.dateTime.time)>d)||h[0]})(t);return x(Bd,{children:[x("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s(Md,{style:{margin:0},children:"Ближайшая запись"}),t.length>1&&s("button",{onClick:()=>e("/profile"),style:{background:"none",border:"none",color:"#1BA136",fontSize:"14px",fontWeight:"600",cursor:"pointer",padding:"8px 12px",borderRadius:"8px",transition:"background 0.2s"},onMouseEnter:c=>c.target.style.background="#F0F9F3",onMouseLeave:c=>c.target.style.background="none",children:"Все записи"})]}),a&&s(Rl,{appointment:a},a.id)]})})(),x(Bd,{children:[s(Md,{children:"Советы к месту"}),s(m2,{children:x(v2,{children:[x(x2,{children:[x(S2,{children:[x(w2,{children:[s(C2,{children:"Интересное в городе"}),s(jd,{children:"37 подборок"})]}),s(k2,{src:"/assets/images/15fcb5df22f040135b4b4a6c11ee1f9feba9623b_276.jpg"})]}),o.slice(0,3).map(l=>s(Ud,{children:x(Hd,{children:[s(Qd,{children:l.title}),s(Vd,{children:s(Wd,{children:l.icon})})]})},l.id))]}),s(y2,{children:o.slice(3).map(l=>s(Ud,{children:x(Hd,{children:[s(Qd,{children:l.title}),l.subtitle&&s(jd,{children:l.subtitle}),s(Vd,{children:s(Wd,{children:l.icon})})]})},l.id))})]})})]}),s(b2,{})]}),s(ky,{activeTab:"overview"})]})},T2="/data/",It=5*60*1e3;async function bi(e){const t=await fetch(`${T2}${e}`);if(!t.ok)throw new Error(`HTTP ${t.status}: ${t.statusText}`);return t.json()}function $2(e,t,n={}){let r=e;if(t&&t.trim()&&t.trim()!==""){const i=t.toLowerCase().trim();r=r.filter(o=>{var l,a;return o.name.toLowerCase().includes(i)||o.address.toLowerCase().includes(i)||((l=o.subtitle)==null?void 0:l.toLowerCase().includes(i))||((a=o.specialties)==null?void 0:a.some(c=>c.toLowerCase().includes(i)))})}return n.rating&&(r=r.filter(i=>i.rating>=4.5)),n.price&&(r=r.filter(i=>{var l;return parseInt((l=i.priceFrom)==null?void 0:l.replace(/[^\d]/g,""))<=1500})),n["24h"]&&(r=r.filter(i=>i.is24h)),n.open&&(r=r.filter(i=>i.isOpen)),n.onlineBooking&&(r=r.filter(i=>i.hasOnlineBooking===!0)),r.sort((i,o)=>{const l=i.rating*.7+(5-parseFloat(i.distance))*.3;return o.rating*.7+(5-parseFloat(o.distance))*.3-l}),r}function _2(e,t,n){if(e.hasCrown&&console.log("🔸 enrichClinicWithDoctorData:",e.name,"featuredDoctorId:",e.featuredDoctorId),!e.featuredDoctorId)return e.hasCrown&&console.log("🔸 No featuredDoctorId for",e.name),e;const r=t.find(l=>l.id===e.featuredDoctorId);if(e.hasCrown&&console.log("🔸 Found doctor:",r==null?void 0:r.name,"for clinic:",e.name),!r)return e.hasCrown&&console.log("🔸 Doctor not found for clinic:",e.name,"doctorId:",e.featuredDoctorId),e;const i=n.find(l=>l.doctorId===r.id);e.hasCrown&&console.log("🔸 Found slots for doctor:",r.name,"slots:",i==null?void 0:i.slots);const o={...e,availableDoctor:{name:r.name,specialty:r.specialty,experience:r.experience,photo:r.photo,price:r.price,firstVisitPrice:r.firstVisitPrice,availableSlots:(i==null?void 0:i.slots)||[],todaySlots:(i==null?void 0:i.dateLabel)||"Нет доступных слотов"}};return e.hasCrown&&console.log("🔸 Enriched clinic:",e.name,"with doctor:",o.availableDoctor.name,"slots:",o.availableDoctor.availableSlots.length),o}const F2=()=>[{id:1,name:'Медицинский центр "Здоровье+"',address:"ул. Ленина, 123, Москва",rating:4.8,distance:"0.5 км",time:"3 мин",priceFrom:"1200 ₽",specialties:["Терапия","Кардиология","Неврология"],hasCrown:!1,hasAd:!1,logo:"/assets/clinic_placeholder.svg"},{id:2,name:'Клиника "МедПлюс"',address:"пр. Мира, 45, Москва",rating:4.6,distance:"1.2 км",time:"5 мин",priceFrom:"1500 ₽",specialties:["Хирургия","Офтальмология","Ортопедия"],hasCrown:!1,hasAd:!1,logo:"/assets/clinic_placeholder.svg"}],P2=()=>[{id:1,clinicId:1,name:"Иванов Иван Иванович",specialty:"Терапевт",experience:"Стаж 10 лет",price:"от 1200 ₽",rating:4.8,reviewCount:120}],A2=()=>[{id:1,name:"Консультация терапевта",price:"1200 ₽",duration:"30 мин",category:"Терапия"},{id:2,name:"Общий анализ крови",price:"500 ₽",duration:"15 мин",category:"Анализы"}],R2=()=>[{id:1,name:"Петров Петр Петрович",specialty:"Терапевт",experience:"15 лет",rating:4.9,reviewCount:234,price:"от 1500 ₽",nextAvailable:"Сегодня в 14:00"}],O2=()=>[{time:"09:00",available:!0,period:"morning"},{time:"09:30",available:!0,period:"morning"},{time:"10:00",available:!1,period:"morning"},{time:"10:30",available:!0,period:"morning"},{time:"11:00",available:!0,period:"morning"},{time:"14:00",available:!0,period:"afternoon"},{time:"14:30",available:!0,period:"afternoon"},{time:"15:00",available:!1,period:"afternoon"},{time:"15:30",available:!0,period:"afternoon"},{time:"16:00",available:!0,period:"afternoon"}];function H0(){return Kt("clinics",async()=>{try{return await bi("clinics.json")}catch(e){return console.warn("Failed to load clinics, using mock data:",e),F2()}},{staleTime:It,cacheTime:It,retry:1})}function Yc(e){const{data:t}=H0();return Kt(["clinic",e],()=>t?t.find(n=>String(n.id)===String(e)):null,{enabled:!!t&&!!e,staleTime:It})}function Xc(){return Kt("doctors",async()=>{try{return await bi("doctors.json")}catch(e){return console.warn("Failed to load doctors, using mock data:",e),P2()}},{staleTime:It,cacheTime:It,retry:1})}function I2(e){const{data:t}=Xc();return Kt(["doctors","clinic",e],()=>t?t.filter(n=>String(n.clinicId)===String(e)):[],{enabled:!!t&&!!e,staleTime:It})}function Q0(){return Kt("slots",async()=>{console.log("🔸 Loading slots data...");const e=[{doctorId:1,clinicId:1,date:"2024-01-18",dateLabel:"Сегодня, 18.06",slots:["14:00","15:30","16:15"]},{doctorId:2,clinicId:3,date:"2024-01-20",dateLabel:"Пятница, 20.06",slots:["09:00","09:45","10:30","11:15"]},{doctorId:3,clinicId:4,date:"2024-01-23",dateLabel:"Понедельник, 23.06",slots:["11:00","13:20","15:00","16:40"]},{doctorId:4,clinicId:5,date:"2024-01-25",dateLabel:"Среда, 25.06",slots:["09:30","11:15","14:30"]},{doctorId:5,clinicId:6,date:"2024-01-18",dateLabel:"Сегодня, 18.06",slots:["17:30"]},{doctorId:6,clinicId:2,date:"2024-01-19",dateLabel:"Завтра, 19.06",slots:["10:00","12:30","14:45"]}];return console.log("🔸 Slots loaded:",e==null?void 0:e.length),e},{staleTime:0,cacheTime:0,retry:0})}function D2(e,t){const{data:n,isLoading:r,error:i}=H0(),{data:o,isLoading:l}=Xc(),{data:a,isLoading:c,error:d}=Q0();return console.log("🔸 useSearchClinics - clinics:",n==null?void 0:n.length,"doctors:",o==null?void 0:o.length,"slots:",a==null?void 0:a.length),console.log("🔸 Loading states - clinics:",r,"doctors:",l,"slots:",c),d&&console.log("🔸 Slots error:",d),Kt(["searchClinics",e,t],()=>{if(console.log("useSearchClinics query function - clinics:",n==null?void 0:n.length,"query:",e),!n)return[];const h=$2(n,e,t);if(console.log("Filtered clinics:",h.length),o&&a){console.log("🔸 Enriching clinics with doctor data...");const p=h.map(S=>_2(S,o,a));console.log("🔸 Enriched clinics:",p.length);const m=p.filter(S=>S.hasCrown),y=m.filter(S=>S.availableDoctor);return console.log("🔸 Crown clinics:",m.length,"enriched:",y.length),p}return console.log("🔸 Returning filtered clinics without enrichment - doctors:",!!o,"slots:",!!a),h},{enabled:!!n,staleTime:It})}function V0(e){return Kt(["services",e],async()=>{try{return await bi(`services_${e}.json`)}catch(t){return console.warn(`Failed to load services for clinic ${e}, using mock data:`,t),A2()}},{enabled:!!e,staleTime:It})}function L2(e){return Kt(["specialists",e],async()=>{try{return await bi(`specialists_${e}.json`)}catch(t){return console.warn(`Failed to load specialists for clinic ${e}, using mock data:`,t),R2()}},{enabled:!!e,staleTime:It})}function N2(e,t){return Kt(["timeSlots",e,t],async()=>{try{return await bi(`slots_${e}_${t}.json`)}catch(n){return console.warn(`Failed to load time slots for specialist ${e} on ${t}, using mock data:`,n),O2()}},{enabled:!!e&&!!t,staleTime:It})}const z2=u(wv)`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 12px;
  background: #FFF;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  
  &:hover {
    background: #F8F8F8;
  }
`,B2=u.div`
  display: flex;
  padding: 12px 16px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
`,M2=u.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  position: relative;
`,j2=u.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  position: relative;
`,U2=u.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
`,H2=u.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
`,Q2=u.div`
  display: flex;
  padding-top: 2px;
  align-items: flex-start;
  flex: 1 0 0;
  position: relative;
`,V2=u.div`
  color: #141414;
  font-family: 'SB Sans Text';
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.24px;
  margin-right: 8px;
  flex: 1;
`,W2=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,K2=u.svg`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`,G2=u.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
`,q2=u.div`
  display: flex;
  padding-top: 2px;
  align-items: flex-start;
  flex: 1 0 0;
  position: relative;
`,Y2=u.div`
  flex: 1 0 0;
  color: #898989;
  font-family: 'SB Sans Text';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.168px;
`,X2=u.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
  margin-top: 8px;
`,Z2=u.div`
  display: flex;
  padding-top: 2px;
  align-items: flex-start;
  flex: 1 0 0;
  position: relative;
`,J2=u.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  position: relative;
`,eS=u.div`
  display: flex;
  align-items: flex-start;
  gap: 2px;
  position: relative;
`,tS=u.div`
  width: 16px;
  height: 16px;
  position: relative;
  overflow: hidden;
`,nS=u.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #E0E0E0;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
`,rS=u.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${e=>e.fill};
  height: 100%;
  background: ${e=>e.color||"#EFA701"};
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  overflow: hidden;
`,iS=u.div`
  color: #898989;
  font-family: 'SB Sans Text';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.168px;
`,oS=u.div`
  color: #898989;
  font-family: 'SB Sans Text';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.168px;
`,lS=u.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  margin-left: auto;
  position: relative;
`,aS=u.div`
  width: 16px;
  height: 16px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 16px;
    height: 16px;
    background: #898989;
    mask: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1ZM8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2ZM7.5 4V8.41421L10.2929 11.2071L11 10.5L8.5 8V4H7.5Z' fill='%23898989'/%3E%3C/svg%3E") no-repeat center;
  }
`,sS=u.div`
  color: #898989;
  font-family: 'SB Sans Text';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.168px;
`,cS=u.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
  margin-top: 4px;
`,uS=u.div`
  flex: 1 0 0;
  color: #898989;
  font-family: 'SB Sans Text';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.168px;
`,dS=u.div`
  color: #898989;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-top: 4px;
`,pS=u.div`
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  background: #1BA136;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 16px;
  
  &:hover {
    background: #169A2E;
  }
`,fS=u.div`
  color: #FFF;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`,hS=u.div`
  display: flex;
  align-items: flex-start;
  margin-top: 16px;
  padding: 16px;
  background: #F8F8F8;
  border-radius: 12px;
`,gS=u.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`,mS=u.div`
  color: #141414;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 2px;
`,vS=u.div`
  color: #898989;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`,xS=u.div`
  color: #898989;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 8px;
`,yS=u.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
`,SS=u.div`
  color: #141414;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 4px;
`,wS=u.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,CS=u.div`
  width: 16px;
  height: 16px;
  background: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.5 4.5L6 12l-3.5-3.5' stroke='%231BA136' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
`,kS=u.div`
  color: #1BA136;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`,bS=u.div`
  display: flex;
  flex-direction: column;
`,ES=u.div`
  color: #898989;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 8px;
`,TS=u.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,$S=u.div`
  display: flex;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
  background: #1BA136;
  border-radius: 8px;
  cursor: pointer;
  
  &:hover {
    background: #169A2E;
  }
`,_S=u.div`
  color: #FFF;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.28px;
`,FS=u.div`
  display: flex;
  padding: 12px 16px;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  border-radius: 0px 0px 12px 12px;
  background: linear-gradient(90deg, rgba(240, 240, 240, 0.00) 0%, #F0F0F0 100%);
  position: relative;
`,PS=u.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
  position: relative;
`,AS=u.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
  position: relative;
`,RS=u.div`
  align-self: stretch;
  color: #141414;
  font-family: 'SB Sans Text';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.168px;
`,OS=u.div`
  align-self: stretch;
  color: #898989;
  font-family: 'SB Sans Text';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.096px;
`,IS=u.div`
  display: flex;
  height: 32px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #1BA136;
  cursor: pointer;
  
  &:hover {
    background: #169A2E;
  }
`,DS=u.div`
  display: flex;
  padding: 0px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  position: relative;
`,LS=u.div`
  color: #FFF;
  text-align: center;
  font-family: 'SB Sans Text';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.168px;
`,NS=u.div`
  display: flex;
  width: 64px;
  height: 64px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #FFF;
  position: relative;
`,zS=u.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
`,BS=({clinic:e,onCardClick:t})=>{var o;const n=Ve(),r=l=>{const a=[];for(let c=0;c<5;c++)a.push(x(tS,{children:[s(nS,{}),s(rS,{fill:c<Math.floor(l)?"16px":c===Math.floor(l)?`${l%1*16}px`:"0px",color:"#EFA701"})]},c));return a},i=(l,a)=>{a.preventDefault(),a.stopPropagation(),n(`/clinic/${e.id}/services`,{state:{prefilledData:{clinic:e,doctor:e.availableDoctor,selectedTime:l,skipSteps:["specialist"]}}})};return s(z2,{to:`/clinic/${e.id}`,onClick:t,children:x(B2,{children:[s(M2,{children:x(j2,{children:[x(U2,{children:[s(H2,{children:x(Q2,{children:[s(V2,{children:e.name}),e.hasCrown&&s(W2,{children:x(K2,{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[s("path",{d:"M7.42163 0.410057C7.76809 0.164421 8.23191 0.164421 8.57837 0.410058L9.49903 1.06279C9.69411 1.2011 9.9323 1.26493 10.1704 1.24269L11.2941 1.13773C11.7169 1.09823 12.1186 1.33015 12.2959 1.7161L12.7668 2.74172C12.8666 2.95904 13.041 3.13341 13.2583 3.2332L14.2839 3.70414C14.6699 3.88137 14.9018 4.28305 14.8623 4.70591L14.7573 5.8296C14.7351 6.0677 14.7989 6.30588 14.9372 6.50097L15.5899 7.42163C15.8356 7.76809 15.8356 8.23191 15.5899 8.57837L14.9372 9.49903C14.7989 9.69411 14.7351 9.9323 14.7573 10.1704L14.8623 11.2941C14.9018 11.7169 14.6699 12.1186 14.2839 12.2959L13.2583 12.7668C13.041 12.8666 12.8666 13.041 12.7668 13.2583L12.2959 14.2839C12.1186 14.6699 11.7169 14.9018 11.2941 14.8623L10.1704 14.7573C9.9323 14.7351 9.69411 14.7989 9.49903 14.9372L8.57837 15.5899C8.23191 15.8356 7.76809 15.8356 7.42163 15.5899L6.50097 14.9372C6.30588 14.7989 6.0677 14.7351 5.82959 14.7573L4.70591 14.8623C4.28305 14.9018 3.88137 14.6699 3.70414 14.2839L3.2332 13.2583C3.13341 13.041 2.95904 12.8666 2.74172 12.7668L1.7161 12.2959C1.33015 12.1186 1.09823 11.7169 1.13773 11.2941L1.24269 10.1704C1.26493 9.9323 1.2011 9.69411 1.06279 9.49903L0.410057 8.57837C0.164421 8.23191 0.164421 7.76809 0.410058 7.42163L1.06279 6.50097C1.2011 6.30588 1.26493 6.0677 1.24269 5.8296L1.13773 4.70591C1.09823 4.28305 1.33015 3.88137 1.7161 3.70414L2.74172 3.2332C2.95904 3.13341 3.13341 2.95904 3.2332 2.74172L3.70414 1.7161C3.88137 1.33014 4.28305 1.09823 4.70591 1.13773L5.8296 1.24269C6.0677 1.26493 6.30588 1.2011 6.50097 1.06279L7.42163 0.410057Z",fill:"#1BA136"}),s("path",{d:"M4 5L5 11H11L12 5L10 6L8 4L6 6L4 5Z",fill:"white"})]})})]})}),s(G2,{children:s(q2,{children:s(Y2,{children:e.subtitle})})})]}),s(X2,{children:x(Z2,{children:[x(J2,{children:[s(eS,{children:r(e.rating)}),s(iS,{children:e.rating}),x(oS,{children:[e.reviewCount," отзыв",e.reviewCount===1?"":e.reviewCount<5?"а":"ов"]})]}),x(lS,{children:[s(aS,{}),s(sS,{children:e.time})]})]})}),s(cS,{children:s(uS,{children:e.address})}),e.locations&&s(dS,{children:e.locations}),!e.hasCrown&&e.hasOnlineBooking&&s(pS,{children:s(fS,{children:"Записаться"})}),e.hasCrown&&e.hasOnlineBooking&&e.availableDoctor&&s(hS,{children:x(gS,{style:{marginLeft:0},children:[s(mS,{children:e.availableDoctor.name}),s(vS,{children:e.availableDoctor.specialty}),s(xS,{children:e.availableDoctor.experience}),x(yS,{children:[s(SS,{children:e.availableDoctor.price}),e.availableDoctor.firstVisitPrice&&x(wS,{children:[s(CS,{}),s(kS,{children:"Цена за первый приём"})]})]}),x(bS,{children:[s(ES,{children:e.availableDoctor.todaySlots}),s(TS,{children:(o=e.availableDoctor.availableSlots)==null?void 0:o.map((l,a)=>s($S,{onClick:c=>i(l,c),children:s(_S,{children:l})},a))})]})]})})]})}),e.hasAd&&!e.hasOnlineBooking&&x(FS,{children:[s(PS,{children:x(AS,{children:[s(RS,{children:e.adText}),s(OS,{children:"Реклама • Есть противопоказания, нужна консультация врача"}),s("div",{style:{padding:"6px 0px"},children:s(IS,{children:s(DS,{children:s(LS,{children:e.adButtonText||e.adText})})})})]})}),s(NS,{children:s(zS,{src:e.logo})})]})]})})},MS=u.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  position: sticky;
  top: 0;
  z-index: 100;
`,jS=u.div`
  display: flex;
  padding-top: 16px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 16px 16px 0px 0px;
  background: rgba(241, 241, 241, 0.95);
  backdrop-filter: blur(20px);
  position: relative;
`,US=u.div`
  display: flex;
  height: 0px;
  padding-bottom: 6px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  align-self: stretch;
  position: relative;
  
  &::after {
    content: '';
    width: 40px;
    height: 4px;
    flex-shrink: 0;
    border-radius: 6px;
    background: rgba(20, 20, 20, 0.09);
    position: relative;
  }
`,HS=u.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
`,QS=u.div`
  display: flex;
  padding: 0px 16px 16px 16px;
  align-items: flex-start;
  gap: 12px;
  flex: 1 0 0;
  position: relative;
`,VS=u.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  position: relative;
`,WS=u.div`
  display: flex;
  height: 40px;
  padding: 10px 8px;
  align-items: flex-start;
  gap: 6px;
  align-self: stretch;
  border-radius: 8px;
  background: #FFF;
  position: relative;
`,KS=u.div`
  display: flex;
  width: 24px;
  height: 20px;
  justify-content: center;
  align-items: center;
  position: relative;
`,GS=u.div`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  position: absolute;
  left: 0px;
  top: -2px;
  background: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m19 19-3.5-3.5' stroke='%23898989' stroke-width='2' stroke-linecap='round'/%3E%3Ccircle cx='11' cy='11' r='8' stroke='%23898989' stroke-width='2'/%3E%3C/svg%3E");
`,qS=u.input`
  flex: 1 0 0;
  color: #141414;
  font-family: 'SB Sans Text';
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.3px;
  position: relative;
  border: none;
  outline: none;
  background: transparent;
  
  &::placeholder {
    color: #898989;
  }
`,YS=u.div`
  display: flex;
  width: 24px;
  height: 20px;
  justify-content: center;
  align-items: center;
  position: relative;
`,XS=u.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  border-radius: 6px;
  position: absolute;
  left: 0px;
  top: -2px;
`,ZS=u.div`
  display: flex;
  align-items: flex-start;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
`,JS=u.div`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  background: rgba(20, 20, 20, 0.06);
  position: relative;
`,e4=u.div`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  position: relative;
`,t4=u.div`
  display: flex;
  width: 100%;
  padding: 0px 12px 16px;
  align-items: center;
  gap: 8px;
  background: rgba(241, 241, 241, 0.95);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  position: sticky;
  top: 78px;
  z-index: 99;
  backdrop-filter: blur(20px);
  
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`,Bn=u.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 16px;
  background: ${e=>e.active?"#E8E8E8":"#FFFFFF"};
  border: ${e=>e.active?"1px solid #D0D0D0":"1px solid rgba(0, 0, 0, 0.12)"};
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 32px;
  
  &:hover {
    background: ${e=>e.active?"#E8E8E8":"#F5F5F5"};
  }
`,n4=u.div`
  width: 18px;
  height: 18px;
  background: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 4h14M2 9h14M2 14h14' stroke='%23666' stroke-width='1.2' stroke-linecap='round'/%3E%3C/svg%3E") no-repeat center;
  background-size: contain;
`,Ir=u.span`
  color: ${e=>e.active?"#333":"#666"};
  font-family: 'SB Sans Text', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  font-weight: ${e=>e.active?"600":"500"};
  line-height: 1.2;
`,r4=u.span`
  margin-left: 4px;
  color: ${e=>e.active?"#333":"#666"};
  font-size: 11px;
  font-weight: 500;
`,i4=u.div`
  width: 13px;
  height: 13px;
  flex-shrink: 0;
  fill: #141414;
  position: absolute;
  left: 5px;
  top: 5px;
  background: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18 6L6 18M6 6l12 12' stroke='%23141414' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
`,o4=u.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  background: #F1F1F1;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
`,l4=u.div`
  display: flex;
  padding: 12px 16px 60px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  background: #F1F1F1;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
`,a4=u.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
`,s4=u.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 12px;
  background: #FFF;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
`,c4=u.div`
  display: flex;
  padding: 12px 0px 12px 16px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  position: relative;
`,u4=u.img`
  width: 64px;
  height: 64px;
  border-radius: 40px;
  border: 0.5px solid rgba(137, 137, 137, 0.30);
  position: relative;
`,d4=u.div`
  display: flex;
  padding: 0px 16px 0px 12px;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  position: relative;
  min-width: 0;
  overflow-x: hidden;
`,p4=u.div`
  flex: 1 0 0;
  color: #141414;
  font-family: 'SB Sans Text';
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.24px;
  padding: 14px 0px 4px 0px;
  position: relative;
  min-width: 0;
  word-wrap: break-word;
  overflow-wrap: break-word;
`,f4=u.div`
  flex: 1 0 0;
  color: #141414;
  font-family: 'SB Sans Text';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;
  padding-bottom: 4px;
  position: relative;
  min-width: 0;
  word-wrap: break-word;
  overflow-wrap: break-word;
`,h4=u.div`
  color: #5A5A5A;
  font-family: 'SB Sans Text';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.28px;
  padding: 6px 0px 16px 0px;
  position: relative;
  cursor: pointer;
`,g4=u.div`
  display: flex;
  padding: 0px 4px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  position: relative;
`,m4=u.div`
  height: 16px;
  flex: 1 0 0;
  overflow: hidden;
  color: #B8B8B8;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'SB Sans Text';
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.176px;
  padding: 7px 0px 1px 0px;
  position: relative;
`,v4=()=>{const e=Ve(),t=$t(),[n,r]=_.useState(""),[i,o]=_.useState({nearby:!1,open:!1,rating:!1,friends:!1,onlineBooking:!1});_.useEffect(()=>{const m=new URLSearchParams(t.search).get("q");m&&r(m)},[t.search]);const{data:l=[],isLoading:a,error:c}=D2(n,i);if(console.log("🔍 SearchPageScreen - searchQuery:",n,"filters:",i,"searchResults:",l==null?void 0:l.length,"isLoading:",a,"error:",c),(l==null?void 0:l.length)>0&&(console.log("🔍 Results details:",l.map(p=>({id:p.id,name:p.name,hasCrown:p.hasCrown,featuredDoctorId:p.featuredDoctorId,hasAvailableDoctor:!!p.availableDoctor,hasOnlineBooking:p.hasOnlineBooking}))),i.onlineBooking)){const p=l.filter(m=>m.hasOnlineBooking).length;console.log("🔍 Online booking filter active - showing",p,"clinics with online booking")}const d=()=>{e("/")},h=p=>{o(m=>({...m,[p]:!m[p]}))};return x(Cr,{mapImage:"/assets/images/dbeabc5ac0f4d8edc9feb4b0b06f4520eafc61ab_750.jpg",children:[s(MS,{children:x(jS,{children:[s(US,{}),s(HS,{children:x(QS,{children:[s(VS,{children:x(WS,{children:[s(KS,{children:s(GS,{})}),s(qS,{value:n,onChange:p=>r(p.target.value),placeholder:"Поиск"}),s(YS,{children:s(XS,{src:"/assets/images/0235e2ec7b64e89803c2ebe320dbddf014cebf7a_48.jpg",alt:""})})]})}),s(ZS,{onClick:d,children:s(JS,{children:s(e4,{children:s(i4,{})})})})]})})]})}),x(t4,{children:[s(Bn,{children:s(n4,{})}),s(Bn,{active:i.nearby,onClick:()=>h("nearby"),children:s(Ir,{active:i.nearby,children:"Рядом"})}),s(Bn,{active:i.onlineBooking,onClick:()=>h("onlineBooking"),children:s(Ir,{active:i.onlineBooking,children:"Онлайн запись"})}),s(Bn,{active:i.open,onClick:()=>h("open"),children:s(Ir,{active:i.open,children:"Открыто"})}),x(Bn,{active:i.rating,onClick:()=>h("rating"),children:[s(Ir,{active:i.rating,children:"Рейтинг"}),s(r4,{active:i.rating,children:"▼"})]}),s(Bn,{active:i.friends,onClick:()=>h("friends"),children:s(Ir,{active:i.friends,children:"Были друзья"})})]}),s(o4,{children:x(l4,{children:[a&&s("div",{style:{padding:"20px",textAlign:"center",color:"#898989"},children:"Загрузка..."}),c&&x("div",{style:{padding:"20px",textAlign:"center",color:"#FF0000"},children:["Ошибка загрузки данных: ",c.message]}),!a&&!c&&l.length===0&&x("div",{style:{padding:"20px",textAlign:"center",color:"#898989"},children:['Ничего не найдено для "',n,'"']}),l.map(p=>s(BS,{clinic:p},p.id)),x(a4,{children:[x(s4,{children:[s(c4,{children:s(u4,{src:"/assets/clinic_placeholder.svg",alt:""})}),x(d4,{children:[s(p4,{children:"МедКлиника «ЗдоровьеПлюс»"}),s(f4,{children:"Бесплатная консультация терапевта при записи онлайн до конца месяца"}),s(h4,{children:"Записаться бесплатно"})]})]}),s(g4,{children:s(m4,{children:"Реклама • Есть противопоказания, требуется консультация специалиста"})})]})]})})]})},x4=u.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  left: 0;
  width: 100%;
  min-height: calc(100vh - 211px);
`,y4=u.div`
  display: flex;
  padding-bottom: 12px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 16px 16px 0px 0px;
  background: #FFF;
  box-shadow: 0px -1px 2px 0px rgba(0, 0, 0, 0.06);
  position: relative;
`,S4=u.div`
  display: flex;
  padding: 16px 0px 12px 0px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 16px 16px 0px 0px;
  background: linear-gradient(157deg, #E8F5E8 0%, #FFF 78.03%);
  position: relative;
`,w4=u.div`
  display: flex;
  height: 56px;
  align-items: center;
  align-self: stretch;
  position: relative;
`,C4=u.div`
  display: flex;
  padding: 0px 16px;
  align-items: center;
  gap: 12px;
  flex: 1 0 0;
  position: relative;
`,k4=u.div`
  display: flex;
  padding-bottom: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1 0 0;
  position: relative;
`,b4=u.div`
  flex: 1 0 0;
  color: #141414;
  font-family: 'SB Sans Text';
  font-size: 19px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.437px;
`,E4=u.div`
  width: 24px;
  height: 24px;
  position: relative;
  
  &::after {
    content: '';
    width: 10px;
    height: 17px;
    background-color: #141414;
    position: absolute;
    left: 7px;
    top: 3px;
    clip-path: polygon(100% 0%, 0% 50%, 100% 100%, 85% 50%);
  }
`,T4=u.div`
  display: flex;
  height: 6px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  align-self: stretch;
  position: relative;

  &::after {
    content: '';
    width: 40px;
    height: 4px;
    border-radius: 6px;
    background: rgba(137, 137, 137, 0.25);
  }
`,$4=u.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 16px 16px 0px 0px;
  position: relative;
`,_4=u.div`
  display: flex;
  padding: 0px 16px 16px 16px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
`,F4=u.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  position: relative;
`,P4=u.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  position: relative;
`,A4=u.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  position: relative;
  margin-bottom: 8px;
`,R4=u.div`
  display: flex;
  align-items: center;
  gap: -8px;
  position: relative;
`,O4=u.div`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  border: 2px solid #FFF;
  background: url('/assets/wizard/angelika.jpg') center / cover no-repeat;
  position: relative;
  margin-left: ${e=>e.index>0?"-8px":"0"};
  z-index: ${e=>10-e.index};
`,I4=u.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
`,D4=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
`;u.div`
  color: #141414;
  font-size: 19px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.437px;
`;const L4=u.div`
  display: flex;
  align-items: center;
  position: relative;
`,N4=u.svg`
  width: 16px;
  height: 16px;
`,z4=u.div`
  color: rgba(20, 20, 20, 0.50);
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.3px;
  margin-top: 2px;
`;u.div`
  display: flex;
  align-items: flex-start;
  position: relative;
`;const Kd=u.button`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  background: rgba(20, 20, 20, 0.06);
  border-radius: 8px;
  border: none;
  cursor: pointer;
  
  &:hover {
    background: rgba(20, 20, 20, 0.12);
  }
`,B4=u.div`
  width: 24px;
  height: 24px;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 13px;
    height: 2px;
    background-color: #141414;
    transform-origin: center;
  }
  
  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  
  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`,M4=u.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
`,j4=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  position: relative;
`,U4=u.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;
  position: relative;
`,H4=u.div`
  display: flex;
  align-items: center;
  gap: 2px;
  position: relative;
`,Q4=u.div`
  width: 16px;
  height: 16px;
  position: relative;
  
  &::after {
    content: '★';
    position: absolute;
    top: 0;
    left: 0;
    font-size: 16px;
    color: ${e=>e.filled?"#FFD700":"#D4D4D4"};
  }
`,V4=u.div`
  color: #141414;
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.3px;
`,W4=u.div`
  color: rgba(20, 20, 20, 0.50);
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.3px;
`,K4=u.div`
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
`,G4=u.div`
  width: 16px;
  height: 16px;
  position: relative;
  
  &::after {
    content: '🚗';
    position: absolute;
    top: 0;
    left: 0;
    font-size: 12px;
  }
`,q4=u.div`
  color: rgba(20, 20, 20, 0.50);
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.3px;
`,Gd=u.div`
  display: flex;
  padding: 0px 0px 8px 16px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
`,qd=u.div`
  display: flex;
  padding: 8px 16px 0px 0px;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  background: rgba(0, 0, 0, 0.00);
  box-shadow: 0px 0.5px 0px 0px rgba(137, 137, 137, 0.30) inset;
  position: relative;
`,Yd=u.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  position: relative;
`,Xd=u.div`
  color: #141414;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.24px;
  margin-bottom: 4px;
`,Y4=u.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  margin-top: 8px;
`,X4=u.div`
  color: #141414;
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.3px;
`,Z4=u.div`
  color: rgba(20, 20, 20, 0.70);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;
`,J4=u.div`
  color: rgba(20, 20, 20, 0.50);
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.234px;
`,ew=u.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`,tw=u.div`
  color: #141414;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.24px;
`,nw=u.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,rw=u.div`
  width: 16px;
  height: 16px;
  background: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.5 4.5L6 12L2.5 8.5' stroke='%231BA136' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
`,iw=u.div`
  color: #1BA136;
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.234px;
`,ow=u.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  margin-top: 8px;
`,lw=u.div`
  color: rgba(20, 20, 20, 0.70);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.28px;
`,aw=u.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  flex-wrap: wrap;
`,sw=u.div`
  display: flex;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #1BA136;
  cursor: pointer;
  
  &:hover {
    background: #169A2E;
  }
`,cw=u.div`
  color: #FFF;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.28px;
`,uw=u.div`
  display: flex;
  padding: 0px 16px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
`,dw=u.div`
  display: flex;
  padding: 13px 16px 15px 16px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 10px;
  border: 2px solid rgba(20, 20, 20, 0.06);
  background: #1BA136;
  cursor: pointer;
`,pw=u.div`
  color: #FFF;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.24px;
`,fw=u.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,hw=u.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 12px;
  background: #FFF;
  position: relative;
  width: 100%;
  box-sizing: border-box;
`,gw=u.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`,mw=u.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;
`,vw=u.div`
  color: #141414;
  font-size: 17px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.374px;
  margin-bottom: 4px;
`,xw=u.div`
  color: rgba(20, 20, 20, 0.70);
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.3px;
  margin-bottom: 8px;
`,yw=u.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,Sw=u.div`
  color: #141414;
  font-size: 17px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.374px;
`,ww=u.div`
  color: rgba(20, 20, 20, 0.50);
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.3px;
`,Cw=u.div`
  display: flex;
  padding: 4px 8px;
  align-items: center;
  border-radius: 6px;
  background: rgba(27, 161, 54, 0.10);
  color: #1BA136;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.24px;
`,kw=u.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-self: stretch;
`,bw=u.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  background: #F8F8F8;
  border-radius: 12px;
`,Ew=u.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  margin-bottom: 8px;
`,Tw=u.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`,$w=u.div`
  color: #141414;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 2px;
`,_w=u.div`
  color: #898989;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 8px;
`,Fw=u.div`
  color: #141414;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 4px;
`,Pw=u.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
`,Aw=u.div`
  width: 16px;
  height: 16px;
  background: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.5 4.5L6 12l-3.5-3.5' stroke='%231BA136' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
`,Rw=u.div`
  color: #1BA136;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`,Zd=u.div`
  display: flex;
  flex-direction: column;
`,Jd=u.div`
  color: #898989;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 8px;
`,ep=u.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,tp=u.div`
  display: flex;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
  background: #1BA136;
  border-radius: 8px;
  cursor: pointer;
  
  &:hover {
    background: #169A2E;
  }
`,np=u.div`
  color: #FFF;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.28px;
`,Ow=u.div`
  width: 100%;
  height: 48px;
  position: relative;
  background: #FFF;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`,Iw=u.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 0;
  padding: 0 16px;
  height: 48px;
  overflow-x: auto;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`,Dw=u.div`
  display: flex;
  padding: 12px 16px;
  align-items: center;
  gap: 6px;
  border-radius: 8px;
  background: ${e=>e.active?"#F1F1F1":"transparent"};
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
`,Lw=u.div`
  color: ${e=>e.active?"#141414":"#898989"};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.28px;
`,Nw=u.div`
  display: flex;
  padding: 1px 5px 2px 5px;
  justify-content: center;
  align-items: center;
  background: rgba(20, 20, 20, 0.30);
  border-radius: 12px;
`,zw=u.div`
  color: #FFF;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.234px;
`,Bw=u.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  background: #F1F1F1;
  position: relative;
  min-height: 400px;
`,yt=u.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  border-radius: 12px;
  background: #FFF;
`,St=u.div`
  color: #141414;
  font-size: 17px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.374px;
`,Dt=u.div`
  color: rgba(20, 20, 20, 0.70);
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.3px;
`,rp=u.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-self: stretch;
`,Mn=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`,jn=u.div`
  color: rgba(20, 20, 20, 0.50);
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.3px;
`,Un=u.div`
  color: #141414;
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.3px;
  text-align: right;
`,Mw=()=>{const e=Ve(),{clinicId:t}=wr(),[n,r]=_.useState("overview"),{state:i}=Gt(),{appointments:o}=i,{data:l,isLoading:a,error:c}=Yc(t),{data:d}=Xc(),{data:h}=Q0(),{data:p}=V0(t),{data:m}=L2(t),{data:y}=N2(1,"2024-01-15"),S=o.filter(A=>{var V;if(!A.clinic)return!1;const j=(V=A.clinic.id)==null?void 0:V.toString(),H=t==null?void 0:t.toString();return j===H||A.clinic.name===(l==null?void 0:l.name)}),w=(A,j,H)=>{if(!A.featuredDoctorId||!j||!H)return A;const V=j.find(Q=>Q.id===A.featuredDoctorId);if(!V)return A;const D=H.find(Q=>Q.doctorId===V.id);return{...A,availableDoctor:{name:V.name,specialty:V.specialty,experience:V.experience,photo:V.photo,price:V.price,firstVisitPrice:V.firstVisitPrice,availableSlots:(D==null?void 0:D.slots)||[],todaySlots:(D==null?void 0:D.dateLabel)||"Нет доступных слотов"}}},C=()=>{if(!p||!Array.isArray(p)||!m||!Array.isArray(m)||!y)return console.log("🔸 getServicesWithSpecialists: Missing data - services:",!!p&&Array.isArray(p),"specialists:",!!m&&Array.isArray(m),"timeSlots:",!!y),[];console.log("🔸 getServicesWithSpecialists: services:",p.length,"specialists:",m.length,"timeSlots:",y.length);const A={Терапия:["Терапевт"],Кардиология:["Кардиолог","Терапевт"],Эндокринология:["Эндокринолог","Терапевт"],Неврология:["Невролог"],Стоматология:["Стоматолог"],Гинекология:["Гинеколог"],Диагностика:["Терапевт","Кардиолог","Эндокринолог"],"Лабораторная диагностика":["Терапевт","Кардиолог","Эндокринолог"]};return p.map(j=>{const H=m.filter(D=>(A[j.category]||[]).includes(D.specialty));console.log(`🔸 Service "${j.name}" (${j.category}): found ${H.length} specialists`);const V=H.map(D=>{const Q=(y==null?void 0:y.filter(J=>J.specialistId===D.id&&J.available).map(J=>J.time).slice(0,4))||[];return console.log(`🔸 Specialist "${D.name}" (id: ${D.id}): found ${Q.length} slots`),{...D,availableSlots:Q,slotsDate:"Сегодня, 15 янв"}});return{...j,availableSpecialists:V}})},g=(A,j)=>{j.preventDefault(),j.stopPropagation(),e(`/clinic/${t||"1"}/services`,{state:{prefilledData:{clinic:$,doctor:$.availableDoctor,selectedTime:A,skipSteps:["specialist"]}}})},f=(A,j,H,V)=>{V.preventDefault(),V.stopPropagation(),e(`/clinic/${t||"1"}/services`,{state:{prefilledData:{clinic:$,service:A,specialist:j,selectedTime:H,skipSteps:["service","specialist"]}}})},v=()=>{e(-1)},k=()=>{e(`/clinic/${t||"1"}/services`)},T=()=>{var j;const A={id:`test-clinic-${t}-${Date.now()}`,clinic:{id:parseInt(t),name:(l==null?void 0:l.name)||`Клиника ${t}`},dateTime:{date:"2024-07-15",time:"14:00"},services:[{name:"Консультация терапевта",price:"1500 ₽"}],specialist:{name:"Петров Дмитрий Сергеевич",specialty:"Терапевт"},status:"active",patient:{name:"Владислав Прищепов",phone:"+7(999)4620809"}};(j=i==null?void 0:i.actions)!=null&&j.addAppointment?(i.actions.addAppointment(A),console.log("🎯 Test appointment created for clinic:",A)):console.error("❌ Actions not available in context")};if(ke.useEffect(()=>{window.debugClinicAppointments={create:T,check:()=>(console.log("🔍 All appointments:",o),console.log("🔍 Clinic appointments:",S),console.log("🔍 Current clinic ID:",t),console.log("🔍 Current clinic data:",l),{all:o,clinic:S,clinicId:t,clinicData:l})},console.log("🔧 Debug functions for clinic appointments:"),console.log("  window.debugClinicAppointments.create() - создать тестовую запись в эту клинику"),console.log("  window.debugClinicAppointments.check() - проверить записи")},[o,S,t,l]),a)return s("div",{children:"Загрузка..."});if(c||!l)return s("div",{children:"Клиника не найдена"});const $=w(l,d,h),L=A=>{const j=[],H=Math.floor(A);for(let V=0;V<5;V++)j.push(s(Q4,{filled:V<H},V));return j},z=[{id:"overview",label:"Обзор"},{id:"menu",label:"Услуги",counter:213},{id:"photos",label:"Фото",counter:432},{id:"reviews",label:"Отзывы",counter:232},{id:"info",label:"Инфо"},{id:"promotions",label:"Акции"}],Y=()=>{switch(n){case"overview":return x(Us,{children:[S.length>0&&x(yt,{children:[x(St,{children:["Ваши записи в ",(l==null?void 0:l.name)||"эту клинику"]}),s("div",{style:{display:"flex",flexDirection:"column",gap:"12px",marginTop:"12px"},children:S.map(j=>s(Rl,{appointment:j},j.id))})]}),x(yt,{children:[s(St,{children:"О клинике"}),s(Dt,{children:l.description})]}),x(yt,{children:[s(St,{children:"Контактная информация"}),x(rp,{children:[x(Mn,{children:[s(jn,{children:"Адрес"}),s(Un,{children:l.address})]}),x(Mn,{children:[s(jn,{children:"Телефон"}),s(Un,{children:l.phone})]}),x(Mn,{children:[s(jn,{children:"Режим работы"}),s(Un,{children:l.workingHours})]})]})]}),x(yt,{children:[s(St,{children:"Популярные услуги"}),x(rp,{children:[x(Mn,{children:[s(jn,{children:"Консультация терапевта"}),s(Un,{children:"от 1500 ₽"})]}),x(Mn,{children:[s(jn,{children:"УЗИ диагностика"}),s(Un,{children:"от 2000 ₽"})]}),x(Mn,{children:[s(jn,{children:"Анализы крови"}),s(Un,{children:"от 800 ₽"})]})]})]})]});case"menu":if(!p||!m)return x(yt,{children:[s(St,{children:"Медицинские услуги"}),s(Dt,{children:"Загрузка услуг..."})]});const A=C();return A.length===0?x(yt,{children:[s(St,{children:"Медицинские услуги"}),s(Dt,{children:"Услуги не найдены или недоступны для онлайн записи"})]}):s(fw,{children:A.map(j=>x(hw,{children:[x(gw,{children:[x(mw,{children:[s(vw,{children:j.name}),s(xw,{children:j.description}),x(yw,{children:[s(Sw,{children:j.price}),s(ww,{children:j.duration})]})]}),s(Cw,{children:j.category})]}),j.availableSpecialists.length>0&&s(kw,{children:j.availableSpecialists.map(H=>x(bw,{children:[x(Ew,{children:[x(Tw,{children:[s($w,{children:H.name}),x(_w,{children:[H.specialty," • ",H.experience]})]}),s(Fw,{children:H.price})]}),H.firstVisitPrice&&x(Pw,{children:[s(Aw,{}),s(Rw,{children:"Цена за первый приём"})]}),H.availableSlots.length>0?x(Zd,{children:[s(Jd,{children:H.slotsDate}),s(ep,{children:H.availableSlots.map((V,D)=>s(tp,{onClick:Q=>f(j,H,V,Q),children:s(np,{children:V})},D))})]}):x(Zd,{children:[s(Jd,{children:"Нет доступных слотов"}),s(ep,{children:s(tp,{style:{background:"#898989"},onClick:V=>f(j,H,null,V),children:s(np,{children:"Записаться"})})})]})]},H.id))}),j.availableSpecialists.length===0&&s(Dt,{style:{color:"rgba(20, 20, 20, 0.50)",fontSize:"14px"},children:"Нет доступных специалистов для данной услуги"})]},j.id))});case"photos":return x(yt,{children:[s(St,{children:"Фотографии клиники"}),s(Dt,{children:"Галерея из 432 фотографий будет загружена..."})]});case"reviews":return x(yt,{children:[s(St,{children:"Отзывы пациентов"}),s(Dt,{children:"232 отзыва от пациентов будут загружены..."})]});case"info":return x(yt,{children:[s(St,{children:"Дополнительная информация"}),s(Dt,{children:"Подробная информация о клинике, лицензиях и сертификатах..."})]});case"promotions":return x(yt,{children:[s(St,{children:"Акции и скидки"}),s(Dt,{children:"Актуальные акции и специальные предложения клиники..."})]});default:return x(yt,{children:[s(St,{children:"Контент не найден"}),s(Dt,{children:"Выберите другую вкладку"})]})}};return s(Cr,{mapImage:"/assets/images/ac1a736678ef011fb9dd2811df6a312eb7f804bd_750.jpg",mapHeight:"244px",contentTop:"211px",children:x(x4,{children:[x(y4,{children:[x(S4,{children:[s(T4,{}),s(w4,{children:x(C4,{children:[s(Kd,{onClick:()=>e(-1),children:s(E4,{})}),s(k4,{children:s(b4,{children:l.name})}),s(Kd,{onClick:v,children:s(B4,{})})]})}),s($4,{children:x(_4,{children:[s(F4,{children:x(P4,{children:[s(A4,{children:s(R4,{children:[0,1,2,3].map(A=>s(O4,{index:A},A))})}),x(I4,{children:[s(D4,{children:s(L4,{children:x(N4,{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[s("path",{d:"M7.42163 0.410057C7.76809 0.164421 8.23191 0.164421 8.57837 0.410058L9.49903 1.06279C9.69411 1.2011 9.9323 1.26493 10.1704 1.24269L11.2941 1.13773C11.7169 1.09823 12.1186 1.33015 12.2959 1.7161L12.7668 2.74172C12.8666 2.95904 13.041 3.13341 13.2583 3.2332L14.2839 3.70414C14.6699 3.88137 14.9018 4.28305 14.8623 4.70591L14.7573 5.8296C14.7351 6.0677 14.7989 6.30588 14.9372 6.50097L15.5899 7.42163C15.8356 7.76809 15.8356 8.23191 15.5899 8.57837L14.9372 9.49903C14.7989 9.69411 14.7351 9.9323 14.7573 10.1704L14.8623 11.2941C14.9018 11.7169 14.6699 12.1186 14.2839 12.2959L13.2583 12.7668C13.041 12.8666 12.8666 13.041 12.7668 13.2583L12.2959 14.2839C12.1186 14.6699 11.7169 14.9018 11.2941 14.8623L10.1704 14.7573C9.9323 14.7351 9.69411 14.7989 9.49903 14.9372L8.57837 15.5899C8.23191 15.8356 7.76809 15.8356 7.42163 15.5899L6.50097 14.9372C6.30588 14.7989 6.0677 14.7351 5.82959 14.7573L4.70591 14.8623C4.28305 14.9018 3.88137 14.6699 3.70414 14.2839L3.2332 13.2583C3.13341 13.041 2.95904 12.8666 2.74172 12.7668L1.7161 12.2959C1.33015 12.1186 1.09823 11.7169 1.13773 11.2941L1.24269 10.1704C1.26493 9.9323 1.2011 9.69411 1.06279 9.49903L0.410057 8.57837C0.164421 8.23191 0.164421 7.76809 0.410058 7.42163L1.06279 6.50097C1.2011 6.30588 1.26493 6.0677 1.24269 5.8296L1.13773 4.70591C1.09823 4.28305 1.33015 3.88137 1.7161 3.70414L2.74172 3.2332C2.95904 3.13341 3.13341 2.95904 3.2332 2.74172L3.70414 1.7161C3.88137 1.33014 4.28305 1.09823 4.70591 1.13773L5.8296 1.24269C6.0677 1.26493 6.30588 1.2011 6.50097 1.06279L7.42163 0.410057Z",fill:"#1BA136"}),s("path",{d:"M4 5L5 11H11L12 5L10 6L8 4L6 6L4 5Z",fill:"white"})]})})}),s(z4,{children:l.subtitle})]})]})}),s(M4,{children:x(j4,{children:[x(U4,{children:[s(H4,{children:L(l.rating)}),s(V4,{children:l.rating}),x(W4,{children:[l.reviewCount," оценок"]})]}),x(K4,{children:[s(G4,{}),s(q4,{children:l.time})]})]})})]})})]}),$.availableDoctor&&$.availableDoctor.availableSlots.length>0?s(Gd,{children:s(qd,{children:x(Yd,{children:[s(Xd,{children:"Ближайшие доступные слоты"}),x(Y4,{children:[s(X4,{children:$.availableDoctor.name}),s(Z4,{children:$.availableDoctor.specialty}),s(J4,{children:$.availableDoctor.experience})]}),x(ew,{children:[s(tw,{children:$.availableDoctor.price}),$.availableDoctor.firstVisitPrice&&x(nw,{children:[s(rw,{}),s(iw,{children:"Цена за первый приём"})]})]}),x(ow,{children:[s(lw,{children:$.availableDoctor.todaySlots}),s(aw,{children:$.availableDoctor.availableSlots.map((A,j)=>s(sw,{onClick:H=>g(A,H),children:s(cw,{children:A})},j))})]})]})})}):x(Gd,{children:[s(qd,{children:s(Yd,{children:s(Xd,{children:"Скажи кодовое слово «МедПоиск» и получи карточку лояльности!"})})}),s(uw,{children:s(dw,{onClick:k,children:s(pw,{children:"Записаться на прием"})})})]})]}),s(Ow,{children:s(Iw,{children:z.map(A=>x(Dw,{active:A.id===n,onClick:()=>r(A.id),children:[s(Lw,{active:A.id===n,children:A.label}),A.counter&&s(Nw,{children:s(zw,{children:A.counter})})]},A.id))})}),s(Bw,{children:Y()})]})})},jw=u.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), 
              url('/assets/images/ac1a736678ef011fb9dd2811df6a312eb7f804bd_750.jpg') lightgray 50% / cover no-repeat;
  position: relative;
  font-family: 'SB Sans Text', -apple-system, Roboto, Helvetica, sans-serif;
  margin: 0 auto;
  max-width: 100vw;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-top: 64px;
`,Uw=u.div`
  display: flex;
  padding: 16px 0px 12px 0px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 16px 16px 0px 0px;
  background: #F1F1F1;
  position: relative;
  min-height: calc(100vh - 64px);
  overflow: hidden;
`,Hw=u.div`
  display: flex;
  height: 0px;
  padding-bottom: 6px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  align-self: stretch;
  position: relative;

  &::after {
    content: '';
    width: 40px;
    height: 4px;
    border-radius: 6px;
    background: rgba(137, 137, 137, 0.25);
  }
`,Qw=u.div`
  display: flex;
  height: 56px;
  align-items: center;
  align-self: stretch;
  position: relative;
`,Vw=u.div`
  display: flex;
  padding: 0px 16px;
  align-items: center;
  gap: 12px;
  flex: 1 0 0;
  position: relative;
`,ip=u.button`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  background: rgba(20, 20, 20, 0.06);
  border-radius: 8px;
  border: none;
  cursor: pointer;
  
  &:hover {
    background: rgba(20, 20, 20, 0.12);
  }
`,Ww=u.div`
  width: 24px;
  height: 24px;
  position: relative;
  
  &::after {
    content: '';
    width: 10px;
    height: 17px;
    background-color: #141414;
    position: absolute;
    left: 7px;
    top: 3px;
    clip-path: polygon(100% 0%, 0% 50%, 100% 100%, 85% 50%);
  }
`,Kw=u.div`
  width: 24px;
  height: 24px;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 13px;
    height: 2px;
    background-color: #141414;
    transform-origin: center;
  }
  
  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  
  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`,Gw=u.div`
  display: flex;
  padding-bottom: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1 0 0;
  position: relative;
`,qw=u.div`
  flex: 1 0 0;
  color: #141414;
  font-family: 'SB Sans Text';
  font-size: 19px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.437px;
`,Yw=u.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  position: relative;
  overflow-y: auto;
`,Xw=u.div`
  display: flex;
  padding: 4px 16px 12px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  background: #F1F1F1;
  position: relative;
`,Zw=u.div`
  display: flex;
  height: 48px;
  padding: 13px 12px 15px 16px;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  border-radius: 12px;
  background: #FFF;
  position: relative;
`,Jw=u.input`
  flex: 1 0 0;
  color: #898989;
  font-family: 'SB Sans Text';
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.24px;
  border: none;
  outline: none;
  background: transparent;
  
  &::placeholder {
    color: #898989;
  }
`,eC=u.div`
  display: flex;
  width: 24px;
  justify-content: center;
  align-items: center;
  position: relative;
  
  &::after {
    content: '';
    width: 19px;
    height: 19px;
    background-color: #898989;
    mask: url("data:image/svg+xml,%3Csvg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z' stroke='%23898989' stroke-width='2'/%3E%3Cpath d='M15 15L18 18' stroke='%23898989' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E") no-repeat center;
  }
`,tC=u.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  background: #F1F1F1;
  position: relative;
  padding: 0 16px;
  flex: 1;
  overflow-y: auto;
`,op=u.div`
  display: flex;
  padding-top: 4px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  position: relative;
  margin-bottom: 8px;
`,lp=u.div`
  display: flex;
  padding: 15px 12px 11px 4px;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  position: relative;
  cursor: ${e=>e.clickable?"pointer":"default"};
`,ap=u.div`
  display: flex;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
  position: relative;
`,sp=u.div`
  flex: 1 0 0;
  color: #141414;
  font-family: 'SB Sans Text';
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.24px;
  padding-top: 2px;
`,nC=u.div`
  display: flex;
  height: 0.001px;
  align-items: flex-start;
  position: relative;
  
  &::after {
    content: '';
    width: 17px;
    height: 10px;
    background-color: #B8B8B8;
    position: absolute;
    left: 0px;
    top: ${e=>e.expanded?"2px":"8px"};
    clip-path: ${e=>e.expanded?"polygon(0% 100%, 50% 0%, 100% 100%)":"polygon(0% 0%, 50% 100%, 100% 0%)"};
    transform: ${e=>(e.expanded,"none")};
  }
`,cp=u.div`
  display: flex;
  padding-bottom: 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  position: relative;
`,up=u.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 0px 0px 0.5px rgba(0, 0, 0, 0.04), 0px 1px 4px 0px rgba(0, 0, 0, 0.08);
  position: relative;
  cursor: pointer;
  
  &:hover {
    box-shadow: 0px 0px 0px 0.5px rgba(0, 0, 0, 0.08), 0px 2px 8px 0px rgba(0, 0, 0, 0.12);
  }
`,dp=u.div`
  display: flex;
  padding: 13px 16px 15px 14px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  position: relative;
`,pp=u.div`
  display: flex;
  height: 20px;
  padding-top: 2px;
  justify-content: center;
  align-items: center;
  position: relative;
`,fp=u.div`
  width: 24px;
  height: 24px;
  position: relative;
  
  ${e=>e.checked?`
    &::before {
      content: '';
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: #1BA136;
      position: absolute;
      left: 0;
      top: 0;
    }
    
    &::after {
      content: '✓';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 14px;
      font-weight: bold;
    }
  `:`
    &::before {
      content: '';
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: rgba(20, 20, 20, 0.06);
      position: absolute;
      left: 2px;
      top: 2px;
    }
  `}
`,hp=u.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
  position: relative;
`,gp=u.div`
  flex: 1 0 0;
  color: #141414;
  font-family: 'SB Sans Text';
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.24px;
`,mp=u.div`
  color: #898989;
  text-align: center;
  font-family: 'SB Sans Text';
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.24px;
`,rC=u.div`
  display: flex;
  padding: 0px 12px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  background: #F1F1F1;
  position: relative;
`,iC=u.div`
  display: flex;
  padding: 10px 0px 12px 0px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  align-self: stretch;
  position: relative;
`,oC=u.div`
  color: #B8B8B8;
  text-align: center;
  font-family: 'SB Sans Text';
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.28px;
`,lC=u.button`
  display: flex;
  padding: 12px 0px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  background: #FFF;
  border: none;
  position: relative;
`,aC=u.div`
  display: flex;
  padding: 0px 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  position: relative;
`,sC=u.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
`,cC=u.div`
  display: flex;
  padding: 13px 16px 15px 16px;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
  background: #1DB93C;
  border-radius: 10px;
  position: relative;
`,uC=u.div`
  flex: 1 0 0;
  color: #FFF;
  text-align: center;
  font-family: 'SB Sans Text';
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.24px;
`,dC=u.div`
  display: flex;
  height: 34px;
  padding: 21px 114px 9px 115px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  position: relative;
  background: #FFF;
  
  &::after {
    content: '';
    width: 146px;
    height: 4px;
    border-radius: 100px;
    background: #000;
    position: absolute;
  }
`,pC=()=>{var V;const e=Ve(),t=$t(),{clinicId:n}=wr(),[r,i]=_.useState(""),[o,l]=_.useState(new Set),[a,c]=_.useState(new Set),d=(V=t.state)==null?void 0:V.prefilledData,{data:h=[],isLoading:p,error:m}=V0(n),{data:y,isLoading:S,error:w}=Yc(n);_.useEffect(()=>{var D;if(d&&(console.log("🔸 ServicesScreen: Processing prefilledData:",d),d.service&&(console.log("🔸 ServicesScreen: Pre-selecting service:",d.service),c(new Set([d.service.id]))),(D=d.skipSteps)!=null&&D.includes("service"))){console.log("🔸 ServicesScreen: Skipping service selection step"),console.log("🔸 ServicesScreen: Services loading:",p,"Clinic loading:",S),console.log("🔸 ServicesScreen: Clinic data:",y),console.log("🔸 ServicesScreen: Prefilled clinic:",d.clinic);const Q=n||d.clinic.id||"1",J=d.service?[d.service]:[],ee=y||d.clinic;console.log("🔸 ServicesScreen: Navigating to specialists with:",{fallbackClinicId:Q,selectedServicesData:J,finalClinicData:ee,prefilledData:d}),setTimeout(()=>{e(`/clinic/${Q}/specialists`,{state:{selectedServices:J,clinicData:ee,prefilledData:{...d,selectedServices:J}}})},100)}},[d,e,n,y,p,S]);const C=h.map(D=>({id:D.id,name:D.name,description:D.description,price:D.price,duration:D.duration,category:D.category})),g=[...new Set(C.map(D=>D.category))],f=()=>{e(-1)},v=()=>{e("/")},k=D=>{const Q=new Set(o);Q.has(D)?Q.delete(D):Q.add(D),l(Q)},T=D=>{const Q=new Set(a);Q.has(D)?Q.delete(D):Q.add(D),c(Q)},$=()=>C.filter(D=>D.name.toLowerCase().includes(r.toLowerCase())||D.category.toLowerCase().includes(r.toLowerCase())),L=()=>C.filter(D=>a.has(D.id)),z=()=>L().reduce((Q,J)=>{const ee=parseInt(J.price.replace(/[^\d]/g,"")||"0");return Q+ee},0),Y=()=>{const D=L(),Q=n||(d==null?void 0:d.clinic.id)||"1";d?e(`/clinic/${Q}/specialists`,{state:{selectedServices:D,clinicData:y||d.clinic,prefilledData:{...d,selectedServices:D}}}):e(`/clinic/${Q}/specialists`,{state:{selectedServices:D,clinicData:y}})},A=$(),j=L(),H=a.size>0;return s(jw,{children:x(Uw,{children:[s(Hw,{}),s(Qw,{children:x(Vw,{children:[s(ip,{onClick:f,children:s(Ww,{})}),s(Gw,{children:s(qw,{children:"Услуги"})}),s(ip,{onClick:v,children:s(Kw,{})})]})}),x(Yw,{children:[s(Xw,{children:x(Zw,{children:[s(Jw,{type:"text",placeholder:"Поиск",value:r,onChange:D=>i(D.target.value)}),s(eC,{})]})}),x(tC,{children:[H&&x(op,{children:[s(lp,{children:s(ap,{children:s(sp,{children:"Выбранные"})})}),s(cp,{children:j.map(D=>s(up,{onClick:()=>T(D.id),children:x(dp,{children:[s(pp,{children:s(fp,{checked:!0})}),x(hp,{children:[s(gp,{children:D.name}),s(mp,{children:D.price})]})]})},`selected-${D.id}`))})]}),g.map(D=>{const Q=A.filter(ee=>ee.category===D);if(Q.length===0)return null;const J=o.has(D);return x(op,{children:[x(lp,{clickable:!0,onClick:()=>k(D),children:[s(ap,{children:s(sp,{children:D})}),s(nC,{expanded:J})]}),J&&s(cp,{children:Q.map(ee=>s(up,{onClick:()=>T(ee.id),children:x(dp,{children:[s(pp,{children:s(fp,{checked:a.has(ee.id)})}),x(hp,{children:[s(gp,{children:ee.name}),s(mp,{children:ee.price})]})]})},ee.id))})]},D)})]}),s(rC,{children:s(iC,{children:s(oC,{children:"В сотрудничестве с СберЗдоровье"})})})]}),H&&x(lC,{children:[s(aC,{children:s(sC,{onClick:Y,children:s(cC,{children:x(uC,{children:["Продолжить • ",z().toLocaleString()," ₽"]})})})}),s(dC,{})]})]})})},vp=u.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), 
              url('/assets/map_stub.png') lightgray 50% / cover no-repeat;
  position: relative;
  font-family: 'SB Sans Text', -apple-system, Roboto, Helvetica, sans-serif;
  margin: 0 auto;
  max-width: 100vw;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-top: 64px;
`,xp=u.div`
  display: flex;
  padding: 16px 0px 12px 0px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 16px 16px 0px 0px;
  background: #F1F1F1;
  position: relative;
  min-height: calc(100vh - 64px);
  overflow: hidden;
`,fC=u.div`
  display: flex;
  height: 0px;
  padding-bottom: 6px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  align-self: stretch;
  position: relative;

  &::after {
    content: '';
    width: 40px;
    height: 4px;
    border-radius: 6px;
    background: rgba(137, 137, 137, 0.25);
  }
`,hC=u.div`
  display: flex;
  height: 56px;
  align-items: center;
  align-self: stretch;
  position: relative;
`,gC=u.div`
  display: flex;
  padding: 0px 16px;
  align-items: center;
  gap: 12px;
  flex: 1 0 0;
  position: relative;
`,mC=u.button`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  background: rgba(20, 20, 20, 0.06);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  
  &:hover {
    background: rgba(20, 20, 20, 0.12);
  }
`,vC=u.div`
  width: 24px;
  height: 24px;
  position: relative;
  
  &::after {
    content: '';
    width: 10px;
    height: 17px;
    background-color: #141414;
    position: absolute;
    left: 7px;
    top: 3px;
    clip-path: polygon(100% 0%, 0% 50%, 100% 100%, 85% 50%);
  }
`,xC=u.div`
  display: flex;
  padding-bottom: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1 0 0;
  position: relative;
`,yC=u.div`
  flex: 1 0 0;
  color: #141414;
  font-family: 'SB Sans Text';
  font-size: 19px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.437px;
`,SC=u.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  position: relative;
  overflow-y: auto;
`,wC=u.div`
  display: flex;
  padding: 4px 12px 12px 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  background: #F1F1F1;
`,CC=u.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 0px 0px 0.5px rgba(0, 0, 0, 0.04), 0px 1px 4px 0px rgba(0, 0, 0, 0.08);
  border: none;
  padding: 13px 16px 15px 16px;
  cursor: pointer;
  color: #141414;
  font-family: 'SB Sans Text', -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`,kC=u.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 12px;
  background: #FFF;
  box-shadow: 0px 0px 0px 0.5px rgba(0, 0, 0, 0.04), 0px 1px 4px 0px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  padding: 15px 16px;
  gap: 10px;
`,bC=u.img`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  border: 0.5px solid rgba(137, 137, 137, 0.40);
  object-fit: cover;
`,EC=u.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  flex: 1 0 0;
`,TC=u.div`
  color: #141414;
  font-family: 'SB Sans Text', -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
`,$C=u.div`
  color: #898989;
  font-family: 'SB Sans Text', -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
`,_C=u.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,FC=u.span`
  color: #141414;
  font-family: 'SB Sans Text', -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 13px;
  font-weight: 600;
  line-height: 16px;
`,PC=u.span`
  color: #898989;
  font-family: 'SB Sans Text', -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
`;function AC(){const e=Ve(),{clinicId:t}=wr(),n=$t(),r=["/assets/Photo1.png","/assets/Photo2.png"],{selectedServices:i=[],clinicData:o=null,prefilledData:l=null}=n.state||{},{data:a=[],isLoading:c,error:d}=I2(t),{data:h}=Yc(t);_.useEffect(()=>{var w;if(console.log("🔸 SpecialistsScreen: Mounted with prefilledData:",l),l&&((w=l.skipSteps)!=null&&w.includes("specialist"))){console.log("🔸 SpecialistsScreen: Skipping specialist selection step");const C=t||l.clinic.id||"1",g={selectedServices:l.selectedServices||[],selectedSpecialist:l.specialist||l.doctor,clinicData:o||l.clinic,prefilledData:l};console.log("🔸 SpecialistsScreen: Navigating to datetime with:",g),e(`/clinic/${C}/datetime`,{state:g});return}},[l,e,t,o]);const p=a.map((w,C)=>({...w,photo:r[C%r.length]})),m=()=>e(-1),y=w=>{const C=t||(l==null?void 0:l.clinic.id)||"1",g={selectedServices:i,selectedSpecialist:w,clinicData:o||h||(l==null?void 0:l.clinic)};l&&(g.prefilledData={...l,doctor:w,selectedServices:i}),e(`/clinic/${C}/datetime`,{state:g})},S=()=>{const w=t||(l==null?void 0:l.clinic.id)||"1",C={selectedServices:i,selectedSpecialist:null,clinicData:o||h||(l==null?void 0:l.clinic)};l&&(C.prefilledData={...l,doctor:null,selectedServices:i}),e(`/clinic/${w}/datetime`,{state:C})};return c?s(vp,{children:s(xp,{children:s("div",{style:{padding:"20px",textAlign:"center"},children:"Загрузка..."})})}):s(vp,{children:x(xp,{children:[s(fC,{}),s(hC,{children:x(gC,{children:[s(mC,{onClick:m,children:s(vC,{})}),s(xC,{children:s(yC,{children:"Специалисты"})})]})}),s(SC,{children:x(wC,{children:[s(CC,{onClick:S,children:"Любой свободный специалист"}),p.map(w=>x(kC,{onClick:()=>y(w),children:[s(bC,{src:w.photo,alt:w.name}),x(EC,{children:[s(TC,{children:w.name}),s($C,{children:w.specialty}),w.rating&&x(_C,{children:[s("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:s("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.57326 5.04119C9.71094 5.45481 10.1067 5.73472 10.553 5.73472H14.6896C14.9897 5.73472 15.1146 6.10909 14.8715 6.28075L11.5247 8.64946C11.1639 8.90522 11.0129 9.35808 11.1506 9.7717L12.4287 13.6034C12.5217 13.8816 12.195 14.1128 11.9519 13.9411L8.60551 11.5724C8.24426 11.3171 7.75552 11.3171 7.39472 11.5724L4.04788 13.9411C3.80483 14.1128 3.47856 13.8816 3.57108 13.6034L4.84917 9.7717C4.98729 9.35808 4.83633 8.90522 4.47508 8.64946L1.12825 6.28075C0.885644 6.10909 1.01004 5.73472 1.31064 5.73472H5.44726C5.89351 5.73472 6.28884 5.45481 6.42697 5.04119L7.70505 1.20864C7.79802 0.930453 8.20221 0.930453 8.29473 1.20864L9.57326 5.04119Z",fill:"#EFA701"})}),s(FC,{children:w.rating}),x(PC,{children:[w.reviewCount," оценок"]})]})]})]},w.id))]})})]})})}const RC=u.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), 
              url('/assets/map_stub.png') lightgray 50% / cover no-repeat;
  position: relative;
  font-family: 'SB Sans Text', -apple-system, Roboto, Helvetica, sans-serif;
  margin: 0 auto;
  max-width: 100vw;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-top: 64px;
`,OC=u.div`
  display: flex;
  padding: 16px 0px 12px 0px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 16px 16px 0px 0px;
  background: #F1F1F1;
  position: relative;
  min-height: calc(100vh - 64px);
  overflow: hidden;
`,IC=u.div`
  display: flex;
  height: 0px;
  padding-bottom: 6px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  align-self: stretch;
  position: relative;

  &::after {
    content: '';
    width: 40px;
    height: 4px;
    border-radius: 6px;
    background: rgba(137, 137, 137, 0.25);
  }
`,DC=u.div`
  display: flex;
  height: 56px;
  align-items: center;
  align-self: stretch;
  position: relative;
`,LC=u.div`
  display: flex;
  padding: 0px 16px;
  align-items: center;
  gap: 12px;
  flex: 1 0 0;
  position: relative;
`,yp=u.button`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  background: rgba(20, 20, 20, 0.06);
  border-radius: 8px;
  border: none;
  cursor: pointer;
  
  &:hover {
    background: rgba(20, 20, 20, 0.12);
  }
`,NC=u.div`
  width: 24px;
  height: 24px;
  position: relative;
  
  &::after {
    content: '';
    width: 10px;
    height: 17px;
    background-color: #141414;
    position: absolute;
    left: 7px;
    top: 3px;
    clip-path: polygon(100% 0%, 0% 50%, 100% 100%, 85% 50%);
  }
`,zC=u.div`
  width: 24px;
  height: 24px;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 13px;
    height: 2px;
    background-color: #141414;
    transform-origin: center;
  }
  
  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  
  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`,BC=u.div`
  display: flex;
  padding-bottom: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1 0 0;
  position: relative;
`,MC=u.div`
  flex: 1 0 0;
  color: #141414;
  font-family: 'SB Sans Text';
  font-size: 19px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.437px;
`,jC=u.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  position: relative;
  overflow-y: auto;
`,UC=u.div`
  display: flex;
  padding: 4px 12px 12px 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  background: #F1F1F1;
`,HC=u.div`
  display: flex;
  padding: 2px;
  align-items: center;
  gap: 2px;
  align-self: stretch;
  border-radius: 10px;
  background: rgba(20, 20, 20, 0.06);
  position: relative;
`,Sp=u.button`
  display: flex;
  align-items: flex-start;
  flex: 1 0 0;
  border-radius: 8px;
  background: ${e=>e.selected?"#FFF":"transparent"};
  box-shadow: ${e=>e.selected?"0px 0px 0px 0.5px rgba(0, 0, 0, 0.04), 0px 1px 4px 0px rgba(0, 0, 0, 0.08)":"none"};
  border: none;
  cursor: pointer;
  padding: 6px 8px 8px 8px;
  justify-content: center;
`,wp=u.div`
  flex: 1 0 0;
  color: #141414;
  text-align: center;
  font-family: 'SB Sans Text', -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;
  position: relative;
`,QC=u.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 12px;
  position: relative;
  width: 100%;
`,VC=u.div`
  display: flex;
  padding-top: 4px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`,WC=u.div`
  display: flex;
  padding: 7px 4px 11px 4px;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  position: relative;
`,KC=u.div`
  flex: 1 0 0;
  color: #141414;
  font-family: 'SB Sans Text', -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.24px;
  position: relative;
`,GC=u.div`
  display: flex;
  padding-bottom: 8px;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  position: relative;
  overflow-x: auto;
`,qC=u.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: ${e=>e.disabled?"rgba(20, 20, 20, 0.06)":e.selected?"#1DB93C":"#FFF"};
  box-shadow: ${e=>!e.disabled&&!e.selected?"0px 0px 0px 0.5px rgba(0, 0, 0, 0.04), 0px 1px 4px 0px rgba(0, 0, 0, 0.08)":"none"};
  border: none;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  padding: 11px 16px 10px 16px;
  flex-direction: column;
  gap: 1px;
  min-width: 62px;
`,YC=u.div`
  color: ${e=>e.disabled?"#B8B8B8":e.selected?"#FFF":"#141414"};
  text-align: center;
  font-family: 'SB Sans Text', -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.24px;
`,XC=u.div`
  color: ${e=>e.disabled?"#B8B8B8":e.selected?"rgba(255, 255, 255, 0.70)":"#898989"};
  text-align: center;
  font-family: 'SB Sans Text', -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.3px;
`,ha=u.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 12px;
  position: relative;
  width: 100%;
`,ga=u.div`
  display: flex;
  padding-top: 4px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`,ma=u.div`
  display: flex;
  padding: 15px 4px 11px 4px;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
`,va=u.div`
  flex: 1 0 0;
  color: #141414;
  font-family: 'SB Sans Text', -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.24px;
  position: relative;
`,xa=u.div`
  display: flex;
  padding-bottom: 8px;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  position: relative;
  flex-wrap: wrap;
`,ya=u.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  border-radius: 10px;
  background: ${e=>e.disabled?"rgba(20, 20, 20, 0.06)":e.selected?"#1DB93C":"#FFF"};
  box-shadow: ${e=>!e.disabled&&!e.selected?"0px 0px 0px 0.5px rgba(0, 0, 0, 0.04), 0px 1px 4px 0px rgba(0, 0, 0, 0.08)":"none"};
  border: none;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  padding: 13px 16px 15px 16px;
  gap: 8px;
  min-width: calc(25% - 6px);
`,Sa=u.div`
  color: ${e=>e.disabled?"#B8B8B8":e.selected?"#FFF":"#141414"};
  text-align: center;
  font-family: 'SB Sans Text', -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.24px;
  position: relative;
`,ZC=u.div`
  display: flex;
  padding: 0px 12px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  background: #F1F1F1;
  position: relative;
`,JC=u.div`
  display: flex;
  padding: 10px 0px 12px 0px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  align-self: stretch;
  position: relative;
`,e3=u.div`
  color: #B8B8B8;
  text-align: center;
  font-family: 'SB Sans Text', -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.28px;
  position: relative;
`,t3=u.div`
  display: flex;
  height: 34px;
  padding-bottom: 24px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  background: #F1F1F1;
  box-shadow: 0px 0.5px 0px 0px rgba(137, 137, 137, 0.40) inset;
  backdrop-filter: blur(20px);
  position: relative;
`,n3=()=>{const{clinicId:e}=wr(),t=Ve(),n=$t(),[r,i]=_.useState([]),[o,l]=_.useState(null),[a,c]=_.useState(!1),[d,h]=_.useState(null),[p,m]=_.useState(null),[y,S]=_.useState([]),[w,C]=_.useState([]),{selectedServices:g=[],selectedSpecialist:f=null,clinicData:v=null,prefilledData:k=null}=n.state||{};_.useEffect(()=>{Y(),A()},[e]),_.useEffect(()=>{f&&l(f)},[f]),_.useEffect(()=>{d&&j()},[d,o,a]),_.useEffect(()=>{if(console.log("🔸 DateTimeScreen: Mounted with prefilledData:",k),console.log("🔸 DateTimeScreen: Has selectedTime:",k==null?void 0:k.selectedTime),k&&k.selectedTime){console.log("🔸 DateTimeScreen: Auto-navigating to confirmation");const P={date:d||new Date,time:k.selectedTime},F=e||k.clinic.id||"1",I=v||k.clinic||{id:parseInt(F),name:F==="1"?"МедЦентр «Здоровье»":"Клиника «Семейный Доктор»",address:F==="1"?"ул. Тверская, 15":"ул. Арбат, 25"},N={selectedServices:k.selectedServices||[],selectedSpecialist:k.specialist||k.doctor||f,selectedDateTime:P,clinicData:I};console.log("🔸 DateTimeScreen: Navigating to confirmation with:",N),t(`/clinic/${F}/confirmation`,{state:N})}},[k,d,e,v,f,t]);const T=P=>{const F=P.filter(G=>{const E=parseInt(G.time.split(":")[0]);return E>=6&&E<12}),I=P.filter(G=>{const E=parseInt(G.time.split(":")[0]);return E>=12&&E<18}),N=P.filter(G=>{const E=parseInt(G.time.split(":")[0]);return E>=18&&E<24});return{morning:F,afternoon:I,evening:N}},{morning:$,afternoon:L,evening:z}=_.useMemo(()=>T(y),[y]),Y=async()=>{try{let F=await fetch(`/data/specialists_${e||"1"}.json`);F.ok||(F=await fetch("/data/specialists_1.json"));const I=await F.json();i(I)}catch(P){console.error("Ошибка загрузки специалистов:",P),i([{id:1,name:"Иванов Алексей Петрович",specialty:"Терапевт",experience:"15 лет",rating:4.9}])}},A=()=>{const P=[],F=new Date;for(let I=0;I<14;I++){const N=new Date(F);N.setDate(F.getDate()+I),P.push(N)}C(P),h(P[1])},j=async()=>{if(d)try{const P=e||"1",F=d.toISOString().split("T")[0],I=await fetch(`/data/slots_${P}_${F}.json`);if(!I.ok){H();return}const N=await I.json();let G=N;!a&&o&&(G=N.filter(E=>E.specialistId===o.id)),S(G)}catch(P){console.error("Ошибка загрузки временных слотов:",P),H()}},H=()=>{const P=[];["09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30"].forEach((I,N)=>{P.push({time:I,available:Math.random()>.3,specialistId:(o==null?void 0:o.id)||1})}),S(P)},V=P=>["вс","пн","вт","ср","чт","пт","сб"][P.getDay()],D=P=>["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"][P.getMonth()],Q=P=>{const F=new Date;return F.setHours(0,0,0,0),P.setHours(0,0,0,0),P<F},J=()=>{t(-1)},ee=()=>{t("/")},O=P=>{c(P)},W=P=>{h(P),m(null)},K=P=>{m(P);const F={date:d,time:P},I=e||"1",N=v||{id:parseInt(I),name:I==="1"?"МедЦентр «Здоровье»":"Клиника «Семейный Доктор»",address:I==="1"?"ул. Тверская, 15":"ул. Арбат, 25"};t(`/clinic/${I}/confirmation`,{state:{selectedServices:g,selectedSpecialist:o,selectedDateTime:F,clinicData:N}})};return s(RC,{children:x(OC,{children:[s(IC,{}),s(DC,{children:x(LC,{children:[s(yp,{onClick:J,children:s(NC,{})}),s(BC,{children:s(MC,{children:"Дата и время"})}),s(yp,{onClick:ee,children:s(zC,{})})]})}),s(jC,{children:x(UC,{children:[x(HC,{children:[s(Sp,{selected:!a,onClick:()=>O(!1),children:s(wp,{children:o?o.name.split(" ")[0]+" "+o.name.split(" ")[1]:"Специалист"})}),s(Sp,{selected:a,onClick:()=>O(!0),children:s(wp,{children:"Все доступные"})})]}),s(QC,{children:x(VC,{children:[x(WC,{children:[s(KC,{children:d?D(d):"Июнь"}),s("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:s("path",{d:"M15 18L9 12L15 6",stroke:"#B8B8B8",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),s("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:s("path",{d:"M9 18L15 12L9 6",stroke:"#B8B8B8",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]}),s(GC,{children:w.map((P,F)=>x(qC,{disabled:Q(P),selected:d&&P.toDateString()===d.toDateString(),onClick:()=>!Q(P)&&W(P),children:[s(YC,{disabled:Q(P),selected:d&&P.toDateString()===d.toDateString(),children:V(P)}),s(XC,{disabled:Q(P),selected:d&&P.toDateString()===d.toDateString(),children:P.getDate()})]},F))})]})}),$.length>0&&s(ha,{children:x(ga,{children:[s(ma,{children:s(va,{children:"Утро"})}),s(xa,{children:$.map((P,F)=>s(ya,{disabled:!P.available,selected:p===P.time,onClick:()=>P.available&&K(P.time),children:s(Sa,{disabled:!P.available,selected:p===P.time,children:P.time})},F))})]})}),L.length>0&&s(ha,{children:x(ga,{children:[s(ma,{children:s(va,{children:"День"})}),s(xa,{children:L.map((P,F)=>s(ya,{disabled:!P.available,selected:p===P.time,onClick:()=>P.available&&K(P.time),children:s(Sa,{disabled:!P.available,selected:p===P.time,children:P.time})},F))})]})}),z.length>0&&s(ha,{children:x(ga,{children:[s(ma,{children:s(va,{children:"Вечер"})}),s(xa,{children:z.map((P,F)=>s(ya,{disabled:!P.available,selected:p===P.time,onClick:()=>P.available&&K(P.time),children:s(Sa,{disabled:!P.available,selected:p===P.time,children:P.time})},F))})]})})]})}),s(ZC,{children:s(JC,{children:s(e3,{children:"В сотрудничестве с СберЗдоровье"})})}),s(t3,{})]})})},r3=u.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), 
              url('/assets/images/ac1a736678ef011fb9dd2811df6a312eb7f804bd_750.jpg') lightgray 50% / cover no-repeat;
  position: relative;
  font-family: 'SB Sans Text', -apple-system, Roboto, Helvetica, sans-serif;
  margin: 0 auto;
  max-width: 100vw;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-top: 64px;
`,i3=u.div`
  display: flex;
  padding: 16px 0px 12px 0px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 16px 16px 0px 0px;
  background: #F1F1F1;
  position: relative;
  min-height: calc(100vh - 64px);
  overflow: hidden;
`,o3=u.div`
  display: flex;
  height: 0px;
  padding-bottom: 6px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  align-self: stretch;
  position: relative;

  &::after {
    content: '';
    width: 40px;
    height: 4px;
    border-radius: 6px;
    background: rgba(137, 137, 137, 0.25);
  }
`,l3=u.div`
  display: flex;
  height: 56px;
  align-items: center;
  align-self: stretch;
  position: relative;
`,a3=u.div`
  display: flex;
  padding: 0px 16px;
  align-items: center;
  gap: 12px;
  flex: 1 0 0;
  position: relative;
`,s3=u.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1 0 0;
  position: relative;
`,c3=u.div`
  flex: 1 0 0;
  color: #141414;
  font-family: 'SB Sans Text';
  font-size: 19px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.437px;
  padding: 7px 0px 1px 0px;
`,u3=u.div`
  flex: 1 0 0;
  color: #898989;
  font-family: 'SB Sans Text';
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.3px;
  padding: 1px 0px 3px 0px;
`,d3=u.button`
  display: flex;
  align-items: flex-start;
  border-radius: 8px;
  background: rgba(20, 20, 20, 0.06);
  border: none;
  cursor: pointer;
  padding: 8px;
  
  &:hover {
    background: rgba(20, 20, 20, 0.12);
  }
`,p3=u.div`
  width: 24px;
  height: 24px;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 13px;
    height: 2px;
    background-color: #141414;
    transform-origin: center;
  }
  
  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  
  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`,f3=u.div`
  display: flex;
  padding: 4px 12px 12px 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  background: #F1F1F1;
  position: relative;
  flex: 1;
  overflow-y: auto;
`,wa=u.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 12px;
  background: #FFF;
  box-shadow: 0px 0px 0px 0.5px rgba(0, 0, 0, 0.04), 0px 1px 4px 0px rgba(0, 0, 0, 0.08);
  position: relative;
`,Ca=u.div`
  display: flex;
  padding: 12px 16px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  flex: 1 0 0;
  position: relative;
`,ka=u.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  padding: 2px 0px 4px 0px;
  
  div {
    flex: 1 0 0;
    color: #141414;
    font-family: 'SB Sans Text';
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: -0.24px;
  }
`,ba=u.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  padding: 8px 0px 4px 0px;
  
  div {
    flex: 1 0 0;
    color: #141414;
    font-family: 'SB Sans Text';
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.24px;
  }
  
  .price {
    color: #898989;
  }
  
  .specialization {
    color: #898989;
  }
`,Ea=u.div`
  display: flex;
  padding: 15px 16px 15px 0px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  
  &::after {
    content: '';
    width: 14px;
    height: 14px;
    background-color: #B8B8B8;
    position: relative;
    clip-path: polygon(0 0, 80% 0, 100% 20%, 100% 100%, 20% 100%, 0 80%);
  }
`,Cp=u.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 12px;
  background: #FFF;
  align-self: stretch;
  position: relative;
`,kp=u.div`
  display: flex;
  padding: 4px 0px 15px 0px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  position: relative;
`,bp=u.div`
  display: flex;
  padding: 15px 16px 11px 16px;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  
  div {
    flex: 1 0 0;
    color: #141414;
    font-family: 'SB Sans Text';
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: -0.24px;
    padding-top: 2px;
  }
`,Ep=u.div`
  display: flex;
  padding: 0px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  background: #FFF;
  position: relative;
`,Ta=u.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
`,Tp=u.input`
  display: flex;
  height: 48px;
  padding: 13px 16px 15px 16px;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 12px;
  background: rgba(20, 20, 20, 0.06);
  border: none;
  outline: none;
  
  color: #141414;
  font-family: 'SB Sans Text';
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.24px;
  
  &::placeholder {
    color: #898989;
  }
`,h3=u.textarea`
  display: flex;
  padding: 13px 16px 16px 16px;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 12px;
  background: rgba(20, 20, 20, 0.06);
  border: none;
  outline: none;
  min-height: 80px;
  resize: vertical;
  
  color: #141414;
  font-family: 'SB Sans Text';
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.24px;
  
  &::placeholder {
    color: #898989;
  }
`,g3=u.div`
  display: flex;
  padding-top: 12px;
  flex-direction: column;
  align-items: flex-start;
  background: #FFF;
  box-shadow: 0px 0px 0px 0.5px rgba(0, 0, 0, 0.04), 0px 1px 4px 0px rgba(0, 0, 0, 0.08);
  position: relative;
  align-self: stretch;
`,m3=u.div`
  display: flex;
  padding: 0px 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  position: relative;
`,v3=u.button`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background: #1DB93C;
  padding: 13px 16px 15px 16px;
  
  div {
    flex: 1 0 0;
    color: #FFF;
    text-align: center;
    font-family: 'SB Sans Text';
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.24px;
  }
`,x3=u.div`
  display: flex;
  padding: 0px 16px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  
  div {
    flex: 1 0 0;
    font-family: 'SB Sans Text';
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -0.234px;
    padding: 19px 0px 5px 0px;
  }
  
  .text {
    color: #898989;
  }
  
  .link {
    color: #0059D6;
  }
`,y3=u.div`
  display: flex;
  height: 34px;
  padding: 21px 114px 9px 115px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  position: relative;
  
  &::after {
    content: '';
    width: 146px;
    height: 4px;
    border-radius: 100px;
    background: #000;
    position: absolute;
  }
`;function S3(){const e=Ve(),t=$t(),{clinicId:n}=wr(),{state:r}=Gt(),[i,o]=_.useState({name:r.currentUser.name,phone:r.currentUser.phone,comment:""}),l=t.state||{},{selectedServices:a=[],selectedSpecialist:c=null,selectedDateTime:d=null,clinicData:h={}}=l;_.useEffect(()=>{console.log("🔸 ConfirmationScreen: Received booking data:",l),console.log("🔸 ConfirmationScreen: selectedServices:",a),console.log("🔸 ConfirmationScreen: selectedSpecialist:",c),console.log("🔸 ConfirmationScreen: selectedDateTime:",d),console.log("🔸 ConfirmationScreen: Validation checks:"),console.log("  - selectedServices.length:",a.length),console.log("  - selectedSpecialist exists:",!!c),console.log("  - selectedDateTime exists:",!!d),!a.length||!c||!d?(console.log("🔸 ConfirmationScreen: Missing data, redirecting to home"),e("/")):console.log("🔸 ConfirmationScreen: All data present, staying on confirmation screen")},[a,c,d,e]);const p=(g,f)=>{o(v=>({...v,[g]:f}))},m=()=>{e("/")},y=()=>a.reduce((g,f)=>{const v=parseInt(f.price.replace(/[^\d]/g,""))||0;return g+v},0),S=g=>{if(!g)return"";const f=new Date(g.date),v=["вс","пн","вт","ср","чт","пт","сб"],k=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],T=v[f.getDay()],$=f.getDate(),L=k[f.getMonth()];return`${$} ${L}, ${T} ${g.time}, 1 час`},w=()=>{const g={services:a,specialist:c,dateTime:d,contactInfo:i,clinic:h,totalPrice:y()};console.log("Confirmation data:",g),e(`/clinic/${n||"1"}/done`,{state:{selectedServices:a,selectedSpecialist:c,selectedDateTime:d,clinicData:h,contactInfo:i}})},C=()=>i.name.trim()&&i.phone.trim();return s(r3,{children:x(i3,{children:[s(o3,{}),s(l3,{children:x(a3,{children:[x(s3,{children:[s(c3,{children:"Запись онлайн"}),s(u3,{children:h.name||"МедЦентр «Здоровье»"})]}),s(d3,{onClick:m,children:s(p3,{})})]})}),x(f3,{children:[x(wa,{children:[x(Ca,{children:[s(ka,{children:s("div",{children:"Услуги"})}),a.map((g,f)=>s(ba,{children:x("div",{children:[g.name," ",s("span",{className:"price",children:g.price})]})},f))]}),s(Ea,{})]}),x(wa,{children:[x(Ca,{children:[s(ka,{children:s("div",{children:"Специалист"})}),s(ba,{children:x("div",{children:[(c==null?void 0:c.name)||"Анжелика Павленко"," ",s("span",{className:"specialization",children:(c==null?void 0:c.specialty)||"Стилист - парикмахер"})]})})]}),s(Ea,{})]}),x(wa,{children:[x(Ca,{children:[s(ka,{children:s("div",{children:"Дата и время"})}),s(ba,{children:s("div",{children:S(d)||"14 июня, вт 10:30–11:30, 1 час"})})]}),s(Ea,{})]}),s(Cp,{children:x(kp,{children:[s(bp,{children:s("div",{children:"Контактные данные"})}),x(Ep,{children:[s(Ta,{children:s(Tp,{type:"text",placeholder:"Имя",value:i.name,onChange:g=>p("name",g.target.value)})}),s(Ta,{children:s(Tp,{type:"tel",placeholder:"Телефон",value:i.phone,onChange:g=>p("phone",g.target.value)})})]})]})}),s(Cp,{children:x(kp,{children:[s(bp,{children:s("div",{children:"Комментарий"})}),s(Ep,{children:s(Ta,{children:s(h3,{placeholder:"Текст",value:i.comment,onChange:g=>p("comment",g.target.value)})})})]})})]}),x(g3,{children:[s(m3,{children:s(v3,{onClick:w,disabled:!C(),style:{opacity:C()?1:.5},children:x("div",{children:["Подтвердить запись • ",y()," ₽"]})})}),s(x3,{children:x("div",{children:[s("span",{className:"text",children:"Нажимая «Подтвердить запись» я даю 2ГИС согласие на обработку и передачу третьим лицам своих персональных данных и согласен с "}),s("span",{className:"link",children:"«Политикой конфиденциальности»"})]})}),s(y3,{})]})]})})}const w3=u.div`
  display: flex;
  padding: 16px 0px 0px 0px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 16px 16px 0px 0px;
  background: #F1F1F1;
  position: relative;
  min-height: calc(100vh - 64px);
`,C3=u.div`
  display: flex;
  height: 0px;
  padding-bottom: 6px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  align-self: stretch;
  position: relative;

  &::after {
    content: '';
    width: 40px;
    height: 4px;
    flex-shrink: 0;
    border-radius: 6px;
    background: rgba(137, 137, 137, 0.25);
    position: relative;
  }
`,k3=u.div`
  display: flex;
  height: 56px;
  align-items: center;
  align-self: stretch;
  position: relative;
`,b3=u.div`
  display: flex;
  padding: 0px 16px;
  align-items: center;
  gap: 12px;
  flex: 1 0 0;
  position: relative;
`,E3=u.div`
  display: flex;
  padding-bottom: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1 0 0;
  position: relative;
`,T3=u.div`
  display: flex;
  padding: 7px 0px 1px 0px;
  align-items: flex-start;
  flex: 1 0 0;
  position: relative;
  
  color: #141414;
  font-family: 'SB Sans Text';
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.437px;
`,$3=u.button`
  display: flex;
  align-items: flex-start;
  border-radius: 8px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  background: rgba(20, 20, 20, 0.06);
  
  &:hover {
    background: rgba(20, 20, 20, 0.1);
  }
`,_3=u.div`
  width: 24px;
  height: 24px;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 13px;
    height: 1px;
    background: #141414;
    transform: translate(-50%, -50%);
  }
  
  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  
  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`,F3=u.div`
  display: flex;
  padding: 4px 12px 12px 12px;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  flex: 1;
  align-self: stretch;
  background: #F1F1F1;
  position: relative;
`,P3=u.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 12px;
  background: #FFF;
  box-shadow: 0px 0px 0px 0.5px rgba(0, 0, 0, 0.04), 0px 1px 4px 0px rgba(0, 0, 0, 0.08);
  position: relative;
`,A3=u.div`
  display: flex;
  padding: 12px 16px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  align-self: stretch;
  position: relative;
`,$p=u.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
  
  div {
    flex: 1 0 0;
    color: #141414;
    font-family: 'SB Sans Text';
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: -0.24px;
    padding: 2px 0px 4px 0px;
  }
`,_p=u.div`
  display: flex;
  align-items: flex-start; 
  align-self: stretch;
  position: relative;
  
  div {
    flex: 1 0 0;
    color: #141414;
    font-family: 'SB Sans Text';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.24px;
    padding: 8px 0px 4px 0px;
  }
`,R3=u.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 12px;
  background: #FFF;
  box-shadow: 0px 0px 0px 0.5px rgba(0, 0, 0, 0.04), 0px 1px 4px 0px rgba(0, 0, 0, 0.08);
  position: relative;
`,O3=u.div`
  display: flex;
  padding: 12px 16px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  flex: 1 0 0;
  position: relative;
`,I3=u.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
  
  div {
    flex: 1 0 0;
    font-family: 'SB Sans Text';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.24px;
    padding: 8px 0px 4px 0px;
    
    .service-name {
      color: #141414;
    }
    
    .service-price {
      color: #898989;
    }
  }
`,D3=u.div`
  display: flex;
  padding: 16px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;
  position: relative;
  
  svg {
    max-width: 351px;
    width: 100%;
    height: auto;
  }
`,L3=u.div`
  display: flex;
  padding-top: 12px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  background: #FFF;
  position: relative;
  margin-top: auto;
`,N3=u.div`
  display: flex;
  padding: 0px 12px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 12px;
  position: relative;
`,Fp=u.button`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 10px;
  position: relative;
  border: none;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
  
  div {
    display: flex;
    padding: 13px 16px 15px 16px;
    align-items: flex-start;
    gap: 8px;
    flex: 1 0 0;
    background: #1DB93C;
    border-radius: 10px;
    
    span {
      flex: 1 0 0;
      color: #FFF;
      text-align: center;
      font-family: 'SB Sans Text';
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: -0.24px;
    }
  }
`,z3=u.button`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 10px;
  position: relative;
  border: none;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
  
  div {
    display: flex;
    padding: 13px 16px 15px 16px;
    align-items: flex-start;
    gap: 8px;
    flex: 1 0 0;
    background: rgba(239, 68, 68, 0.1);
    border: 1px solid #EF4444;
    border-radius: 10px;
    
    span {
      flex: 1 0 0;
      color: #EF4444;
      text-align: center;
      font-family: 'SB Sans Text';
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: -0.24px;
    }
  }
`,B3=u.div`
  display: flex;
  height: 34px;
  padding: 21px 0px 9px 0px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  position: relative;
  
  &::after {
    content: '';
    width: 146px;
    height: 4px;
    flex-shrink: 0;
    border-radius: 100px;
    background: #000;
    position: absolute;
    top: 21px;
    left: 50%;
    transform: translateX(-50%);
  }
`;function Pp(){const e=Ve(),t=$t();wr();const{state:n,actions:r}=Gt(),i=t.pathname==="/appointment";let o;if(i&&n.activeAppointment)o={selectedServices:n.activeAppointment.services||[],selectedSpecialist:n.activeAppointment.specialist,selectedDateTime:n.activeAppointment.dateTime,clinicData:n.activeAppointment.clinic||{name:"МедЦентр «Здоровье»"},contactInfo:n.activeAppointment.patient||{}};else{const C=t.state||{};o={selectedServices:C.selectedServices||n.selectedServices||[],selectedSpecialist:C.selectedSpecialist||n.selectedSpecialist||null,selectedDateTime:C.selectedDateTime||(n.selectedDate&&n.selectedTime?{date:n.selectedDate,time:n.selectedTime}:null),clinicData:C.clinicData||n.selectedClinic||{name:"МедЦентр «Здоровье»"},contactInfo:C.contactInfo||n.patientInfo||{}}}const{selectedServices:l,selectedSpecialist:a,selectedDateTime:c,clinicData:d,contactInfo:h}=o,p=()=>{e("/")},m=()=>{if(i)e("/");else{const C={id:`appointment-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,clinic:d,services:l,specialist:a,dateTime:c,patient:h,status:"active",createdAt:new Date().toISOString(),bookingNumber:`MP${Date.now().toString().slice(-6)}`};r.addAppointment(C),r.setActiveAppointment(C),r.showToast("Запись успешно создана!","success"),r.resetBookingFlow(),console.log("🔸 DoneScreen: Appointment created successfully:",C),e("/")}},y=C=>{if(!C)return"14 июня, вт, 10:30";const g=new Date(C.date),f=["вс","пн","вт","ср","чт","пт","сб"],v=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],k=f[g.getDay()],T=g.getDate(),$=v[g.getMonth()];return`${T} ${$}, ${k}, ${C.time}`},S=[{name:"Маникюр (только форма)",price:700},{name:"Маникюр с покрытием лак",price:1100}],w=l.length?l:S;return s(Cr,{mapImage:"/assets/images/ac1a736678ef011fb9dd2811df6a312eb7f804bd_750.jpg",contentTop:"64px",contentMinHeight:"calc(100vh - 64px)",noRadius:!0,children:x(w3,{children:[s(C3,{}),s(k3,{children:x(b3,{children:[s(E3,{children:s(T3,{children:i?"Ваш талон":"Вы записаны"})}),s($3,{onClick:p,children:s(_3,{})})]})}),x(F3,{children:[s(P3,{children:x(A3,{children:[s($p,{children:x("div",{children:["Запись в ",d.name]})}),s(_p,{children:s("div",{children:y(c)})}),s(_p,{children:s("div",{children:"Новинский бульвар, 12, Москва"})})]})}),s(R3,{children:x(O3,{children:[s($p,{children:s("div",{children:"Услуги"})}),w.map((C,g)=>s(I3,{children:x("div",{children:[x("span",{className:"service-name",children:[C.name," "]}),x("span",{className:"service-price",children:[C.price," ₽"]})]})},g))]})}),s(D3,{children:x("svg",{viewBox:"0 0 351 262",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s("path",{d:"M174.348 125.049C165.46 152.48 178.199 186.896 206.634 191.673C238.345 197.001 264.794 184.664 273.681 157.234C275.794 150.711 276.602 143.837 276.059 137.002C275.515 130.168 273.631 123.507 270.513 117.401C267.395 111.294 263.105 105.862 257.888 101.414C252.671 96.9653 246.629 93.5881 240.107 91.4749C231.535 88.6975 222.381 88.2959 214.222 88.0222C196.014 91.4164 180.458 106.191 174.348 125.049Z",fill:"url(#paint0_linear)"}),s("path",{d:"M215.566 192.436C186.732 192.436 163.358 169.062 163.358 140.228C163.358 111.394 186.732 88.0192 215.566 88.0192C244.4 88.0192 267.775 111.394 267.775 140.228C267.775 169.062 244.4 192.436 215.566 192.436Z",fill:"url(#paint1_linear)"}),s("path",{d:"M213.933 118.515C210.843 124.002 208.764 130 207.794 136.223",stroke:"black",strokeWidth:"2.1213",strokeMiterlimit:"10"}),s("path",{d:"M228.317 123.495C225.406 128.713 223.641 134.492 223.138 140.446",stroke:"black",strokeWidth:"2.1213",strokeMiterlimit:"10"}),s("path",{d:"M241.987 151.291C224.409 179.054 183.208 163.881 186.771 134.056",stroke:"black",strokeWidth:"2.1213",strokeMiterlimit:"10"}),x("defs",{children:[x("linearGradient",{id:"paint0_linear",x1:"276.237",y1:"140.455",x2:"171.555",y2:"140.455",gradientUnits:"userSpaceOnUse",children:[s("stop",{offset:"0.09",stopColor:"#195441"}),s("stop",{offset:"0.1",stopColor:"#195640"}),s("stop",{offset:"0.36",stopColor:"#197A31"}),s("stop",{offset:"0.61",stopColor:"#198E27"}),s("stop",{offset:"0.83",stopColor:"#199E20"}),s("stop",{offset:"1",stopColor:"#19A41E"})]}),x("linearGradient",{id:"paint1_linear",x1:"267.789",y1:"140.228",x2:"163.344",y2:"140.228",gradientUnits:"userSpaceOnUse",children:[s("stop",{stopColor:"#19A41E"}),s("stop",{offset:"0.97622",stopColor:"#23C629"})]})]})]})})]}),x(L3,{children:[s(N3,{children:i?x(Us,{children:[s(Fp,{onClick:m,style:{marginBottom:"8px"},children:s("div",{children:s("span",{children:"Назад"})})}),s(z3,{onClick:()=>{var C;(C=n.activeAppointment)!=null&&C.id&&r.removeAppointment(n.activeAppointment.id),r.clearActiveAppointment(),e("/")},children:s("div",{children:s("span",{children:"Отменить запись"})})})]}):s(Fp,{onClick:m,children:s("div",{children:s("span",{children:"Хорошо"})})})}),s(B3,{})]})]})})}const M3=u.div`
  background: white;
  padding: 60px 16px 16px 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`,j3=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,U3=u.button`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  border: none;
  background: #F8F8F8;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #EEEEEE;
  }
`,H3=u.div`
  width: 24px;
  height: 24px;
  position: relative;
  
  &::after {
    content: '';
    width: 10px;
    height: 17px;
    background-color: #141414;
    position: absolute;
    left: 7px;
    top: 3px;
    clip-path: polygon(100% 0%, 0% 50%, 100% 100%, 85% 50%);
  }
`,Q3=u.h1`
  font-size: 20px;
  font-weight: 600;
  color: #141414;
  margin: 0;
`,V3=u.div`
  display: flex;
  background: #F8F8F8;
  border-radius: 12px;
  padding: 4px;
  margin-top: 16px;
`,Wi=u.button`
  flex: 1;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  background: ${e=>e.active?"white":"transparent"};
  color: ${e=>e.active?"#141414":"#898989"};
  font-weight: ${e=>e.active?"600":"400"};
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${e=>e.active?"white":"#EEEEEE"};
  }
`,W3=u.div`
  padding: 16px;
`,K3=u.div`
  text-align: center;
  padding: 60px 20px;
  color: #898989;
`,G3=u.div`
  font-size: 48px;
  margin-bottom: 16px;
`,q3=u.h3`
  font-size: 18px;
  color: #141414;
  margin: 0 0 8px 0;
`,Y3=u.p`
  font-size: 15px;
  color: #898989;
  margin: 0 0 24px 0;
  line-height: 1.4;
`,X3=u.button`
  background: #1BA136;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    background: #169A2E;
  }
`,Z3=u.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,J3=u.h2`
  font-size: 16px;
  font-weight: 600;
  color: #141414;
  margin: 0 0 12px 0;
`,ek=()=>{const e=Ve(),{appointments:t}=Gt(),[n,r]=_.useState("all"),i=()=>{e(-1)},o=()=>{e("/search?q=Клиника")},l=(d,h)=>{switch(h){case"active":return d.filter(p=>p.status==="active"||!p.status);case"completed":return d.filter(p=>p.status==="completed");case"cancelled":return d.filter(p=>p.status==="cancelled");default:return d}},a=l(t,n),c=d=>{switch(d){case"active":return"Активные записи";case"completed":return"Завершенные записи";case"cancelled":return"Отмененные записи";default:return"Все записи"}};return x(Cr,{mapImage:"/assets/images/dbeabc5ac0f4d8edc9feb4b0b06f4520eafc61ab_750.jpg",contentTop:"0px",noRadius:!0,children:[x(M3,{children:[x(j3,{children:[s(U3,{onClick:i,children:s(H3,{})}),s(Q3,{children:"Мои записи"}),s("div",{style:{width:"40px"}})," "]}),x(V3,{children:[x(Wi,{active:n==="all",onClick:()=>r("all"),children:["Все (",t.length,")"]}),x(Wi,{active:n==="active",onClick:()=>r("active"),children:["Активные (",l(t,"active").length,")"]}),x(Wi,{active:n==="completed",onClick:()=>r("completed"),children:["Завершенные (",l(t,"completed").length,")"]}),x(Wi,{active:n==="cancelled",onClick:()=>r("cancelled"),children:["Отмененные (",l(t,"cancelled").length,")"]})]})]}),s(W3,{children:a.length===0?x(K3,{children:[s(G3,{children:"📅"}),s(q3,{children:n==="all"?"У вас пока нет записей":`Нет ${c(n).toLowerCase()}`}),s(Y3,{children:n==="all"?"Запишитесь на прием к врачу или в салон красоты":"В этой категории записей не найдено"}),n==="all"&&s(X3,{onClick:o,children:"Записаться"})]}):x(Z3,{children:[s(J3,{children:c(n)}),a.map(d=>s(Rl,{appointment:d},d.id))]})})]})},tk=u.div`
  width: 100%;
  min-height: 100vh;
  background: #F5F5F5;
  position: relative;
  font-family: 'SB Sans Text', -apple-system, Roboto, Helvetica, sans-serif;
`,nk=u.div`
  background: white;
  padding: 60px 16px 20px 16px;
`,rk=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`,ik=u.button`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  border: none;
  background: #F8F8F8;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #EEEEEE;
  }
`,ok=u.div`
  width: 24px;
  height: 24px;
  position: relative;
  
  &::after {
    content: '';
    width: 10px;
    height: 17px;
    background-color: #141414;
    position: absolute;
    left: 7px;
    top: 3px;
    clip-path: polygon(100% 0%, 0% 50%, 100% 100%, 85% 50%);
  }
`,lk=u.button`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  border: none;
  background: #F8F8F8;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #EEEEEE;
  }
`,ak=u.div`
  width: 24px;
  height: 24px;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    background: #141414;
    border-radius: 50%;
  }
  
  &::before {
    top: 6px;
    left: 10px;
  }
  
  &::after {
    top: 14px;
    left: 10px;
  }
  
  & {
    &::before {
      box-shadow: 0 4px 0 #141414, 0 8px 0 #141414;
    }
  }
`,sk=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
`,ck=u.div`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background-image: url('${e=>e.src}');
  background-size: cover;
  background-position: center;
  margin-bottom: 16px;
  border: 3px solid #FFF;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`,uk=u.h1`
  font-size: 24px;
  font-weight: 600;
  color: #141414;
  margin: 0;
  text-align: center;
`,dk=u.p`
  font-size: 16px;
  font-weight: 400;
  color: #898989;
  margin: 4px 0 0 0;
  text-align: center;
`,pk=u.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`,Ap=u.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 20px;
  border: none;
  background: #F0F0F0;
  color: #141414;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background: #E8E8E8;
  }
  
  &.selected {
    background: #1BA136;
    color: white;
  }
`,W0=u.div`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`,fk=u(W0)`
  background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 2C10.55 2 11 2.45 11 3V4.07C13.39 4.54 15.46 6.61 15.93 9H17C17.55 9 18 9.45 18 10C18 10.55 17.55 11 17 11H15.93C15.46 13.39 13.39 15.46 11 15.93V17C11 17.55 10.55 18 10 18C9.45 18 9 17.55 9 17V15.93C6.61 15.46 4.54 13.39 4.07 11H3C2.45 11 2 10.55 2 10C2 9.45 2.45 9 3 9H4.07C4.54 6.61 6.61 4.54 9 4.07V3C9 2.45 9.45 2 10 2ZM10 6C7.79 6 6 7.79 6 10C6 12.21 7.79 14 10 14C12.21 14 14 12.21 14 10C14 7.79 12.21 6 10 6Z' fill='%23898989'/%3E%3C/svg%3E") no-repeat center;
`,hk=u(W0)`
  background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 2C4.45 2 4 2.45 4 3V18L10 15L16 18V3C16 2.45 15.55 2 15 2H5Z' fill='%23898989'/%3E%3C/svg%3E") no-repeat center;
`,gk=u.div`
  display: flex;
  background: white;
  border-bottom: 1px solid #E8E8E8;
`,mk=u.button`
  flex: 1;
  padding: 16px 12px;
  border: none;
  background: none;
  color: ${e=>e.active?"#1BA136":"#898989"};
  font-size: 14px;
  font-weight: ${e=>e.active?"600":"500"};
  cursor: pointer;
  position: relative;
  border-bottom: ${e=>e.active?"2px solid #1BA136":"2px solid transparent"};
  
  &:hover {
    color: ${e=>e.active?"#1BA136":"#141414"};
  }
`,vk=u.span`
  margin-right: 4px;
`,xk=u.span`
  color: ${e=>e.active?"#1BA136":"#898989"};
  font-weight: 500;
`,yk=u.div`
  background: #F5F5F5;
  min-height: calc(100vh - 400px);
  padding: 16px;
`,Sk=u.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Rp=u.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.08);
`,Op=u.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
`,Ip=u.div`
  flex: 1;
`,Dp=u.div`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  background-image: url('${e=>e.src}');
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`,Lp=u.h3`
  font-size: 16px;
  font-weight: 600;
  color: #141414;
  margin: 0 0 4px 0;
`,Np=u.p`
  font-size: 14px;
  color: #898989;
  margin: 0 0 4px 0;
`,zp=u.p`
  font-size: 14px;
  color: #898989;
  margin: 0 0 8px 0;
`,Bp=u.p`
  font-size: 12px;
  color: #C4C4C4;
  margin: 0 0 12px 0;
  text-align: center;
`,wk=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #F8F8F8;
  border-radius: 8px;
  padding: 12px;
`,Ck=u.div`
  display: flex;
  gap: 4px;
`,kk=u.div`
  width: 24px;
  height: 24px;
  background: #E8E8E8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #C4C4C4;
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    background: #FFD700;
    color: white;
  }
`,bk=u.div`
  display: flex;
  gap: 16px;
`,Mp=u.button`
  background: none;
  border: none;
  color: #898989;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    color: #141414;
  }
`,$a=u.div`
  text-align: center;
  padding: 60px 20px;
  color: #898989;
`,_a=u.div`
  font-size: 48px;
  margin-bottom: 16px;
`,Fa=u.h3`
  font-size: 18px;
  color: #141414;
  margin: 0 0 8px 0;
`,Pa=u.p`
  font-size: 15px;
  color: #898989;
  margin: 0;
  line-height: 1.4;
`,Ek=()=>{const e=Ve(),{appointments:t,state:n}=Gt(),[r,i]=_.useState("appointments"),o=()=>{e("/")},l=[{id:"appointments",label:"Записи",count:t.length},{id:"photos",label:"Фото",count:5},{id:"reviews",label:"Отзывы",count:8},{id:"notes",label:"Уточнения",count:0}],a=()=>{switch(r){case"appointments":return s(Sk,{children:t.length>0?t.map(c=>s(Rl,{appointment:c},c.id)):x($a,{children:[s(_a,{children:"📅"}),s(Fa,{children:"У вас пока нет записей"}),s(Pa,{children:"Запишитесь на прием к врачу через поиск"})]})});case"photos":return x($a,{children:[s(_a,{children:"📷"}),s(Fa,{children:"Фотографии"}),s(Pa,{children:"Здесь будут отображаться ваши фотографии"})]});case"reviews":return x("div",{children:[x(Rp,{children:[s(Bp,{children:"24 June"}),x(Op,{children:[x(Ip,{children:[s(Lp,{children:"МедЦентр «Здоровье»"}),s(Np,{children:"Медицинский центр"}),s(zp,{children:"Тверская, 15, Москва"})]}),s(Dp,{src:"/assets/clinic_placeholder.svg"})]}),x(wk,{children:[s(Ck,{children:[1,2,3,4,5].map(c=>s(kk,{children:"★"},c))}),x(bk,{children:[s(Mp,{children:"Пропустить"}),s(Mp,{children:"Не был здесь"})]})]})]}),x(Rp,{children:[s(Bp,{children:"23 June"}),x(Op,{children:[x(Ip,{children:[s(Lp,{children:"Клиника «ПремиумМед»"}),s(Np,{children:"Частная клиника"}),s(zp,{children:"Арбат, 25, Москва"})]}),s(Dp,{src:"/assets/clinic_placeholder.svg"})]}),x("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#1BA136",fontSize:"14px",fontWeight:"500"},children:[s("div",{style:{width:"20px",height:"20px",borderRadius:"50%",background:"#1BA136",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"12px"},children:"✓"}),"Был друг"]})]})]});case"notes":return x($a,{children:[s(_a,{children:"📝"}),s(Fa,{children:"Уточнения"}),s(Pa,{children:"Здесь будут отображаться ваши уточнения"})]});default:return null}};return x(tk,{children:[x(nk,{children:[x(rk,{children:[s(ik,{onClick:o,children:s(ok,{})}),s("div",{})," ",s(lk,{children:s(ak,{})})]}),x(sk,{children:[s(ck,{src:n.currentUser.avatar}),s(uk,{children:n.currentUser.name}),s(dk,{children:n.currentUser.phone})]}),x(pk,{children:[x(Ap,{children:[s(fk,{}),"Делиться геопозицией"]}),x(Ap,{className:"selected",children:[s(hk,{}),"Избранное"]})]})]}),s(gk,{children:l.map(c=>x(mk,{active:r===c.id,onClick:()=>i(c.id),children:[s(vk,{children:c.label}),s(xk,{active:r===c.id,children:c.count})]},c.id))}),s(yk,{children:a()})]})},Tk=u.div`
  display: flex;
  padding: ${b.spacing.xs} ${b.spacing.md} ${b.spacing.md} ${b.spacing.md};
  flex-direction: column;
  align-items: flex-start;
  gap: ${b.spacing.md};
  align-self: stretch;
  background: ${b.colors.backgroundPrimary};
  position: relative;
  flex: 1;
  overflow-y: auto;
`,$k=u.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${b.spacing.md};
  align-self: stretch;
  background: ${b.colors.backgroundPrimary};
  position: relative;
`,Ki=u.div`
  ${he.body}
  color: ${b.colors.textPrimary};
  font-weight: ${b.fontWeights.semibold};
  margin-bottom: ${b.spacing.sm};
`,Gi=u.div`
  ${he.footnote}
  color: ${b.colors.textSecondary};
  margin-bottom: ${b.spacing.md};
`,_k=u.div`
  ${z0}
  gap: ${b.spacing.sm};
  width: 100%;
`,Fk=()=>{var d;const e=Ve(),[t,n]=_.useState(""),[r,i]=_.useState("all"),o=()=>{e(-1)},l=()=>{e("/")},a=h=>{n(h.target.value)},c=[{label:"Все",value:"all"},{label:"Врачи",value:"doctors"},{label:"Услуги",value:"services"}];return s(Cr,{mapImage:"/assets/images/ac1a736678ef011fb9dd2811df6a312eb7f804bd_750.jpg",children:x(j0,{showDragger:!0,scrollable:!0,children:[s(Jy,{title:"Пример экрана",subtitle:"Демонстрация новых компонентов",onBack:o,onClose:l,showBackButton:!0,showCloseButton:!0}),x(Tk,{children:[x($k,{children:[s(U0,{placeholder:"Поиск...",value:t,onChange:a,large:!0,background:b.colors.backgroundSecondary,height:"48px"}),s(d2,{options:c,selectedValue:r,onChange:i})]}),x(Vi,{hoverable:!0,fullWidth:!0,children:[s(Ki,{children:"Интерактивная карточка"}),s(Gi,{children:"Эта карточка использует новый компонент Card с эффектом наведения"})]}),x(Vi,{fullWidth:!0,children:[s(Ki,{children:"Кнопки"}),s(Gi,{children:"Примеры различных вариантов кнопок"}),x(_k,{children:[s(zd,{variant:"primary",fullWidth:!0,children:"Основная кнопка"}),s(zd,{variant:"secondary",fullWidth:!0,children:"Вторичная кнопка"})]})]}),x(Vi,{fullWidth:!0,children:[s(Ki,{children:"Поиск и фильтры"}),x(Gi,{children:['Поле поиска: "',t||"не введено",'"',s("br",{}),"Выбранная категория: ",(d=c.find(h=>h.value===r))==null?void 0:d.label]})]}),x(Vi,{fullWidth:!0,padding:b.spacing.xl,customStyles:`
              background: linear-gradient(135deg, ${b.colors.brandPrimary} 0%, ${b.colors.brandAccent} 100%);
              color: ${b.colors.textWhite};
            `,children:[s(Ki,{style:{color:b.colors.textWhite},children:"Кастомная карточка"}),s(Gi,{style:{color:b.colors.textWhite,opacity:.9},children:"Эта карточка использует кастомные стили с градиентом"})]})]})]})})},Pk=u.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f1f1f1;
  font-family: 'SB Sans Text', -apple-system, BlinkMacSystemFont, sans-serif;
`;function Ak(){return s(N0,{children:x(Pk,{children:[x(dv,{children:[s(Xe,{path:"/",element:s(E2,{})}),s(Xe,{path:"/search",element:s(v4,{})}),s(Xe,{path:"/appointments",element:s(ek,{})}),s(Xe,{path:"/profile",element:s(Ek,{})}),s(Xe,{path:"/example",element:s(Fk,{})}),s(Xe,{path:"/clinic/:clinicId",element:s(Mw,{})}),s(Xe,{path:"/clinic/:clinicId/services",element:s(pC,{})}),s(Xe,{path:"/clinic/:clinicId/specialists",element:s(AC,{})}),s(Xe,{path:"/clinic/:clinicId/datetime",element:s(n3,{})}),s(Xe,{path:"/clinic/:clinicId/confirmation",element:s(S3,{})}),s(Xe,{path:"/clinic/:clinicId/done",element:s(Pp,{})}),s(Xe,{path:"/appointment",element:s(Pp,{})}),s(Xe,{path:"*",element:s(cv,{to:"/",replace:!0})})]}),s(ty,{})]})})}const Rk=Xx`
  :root {
    /* Colors from original design */
    --Background-01: #F1F1F1;
    --Background-02: #FFF;
    --Surface-02: rgba(20, 20, 20, 0.09);
    --Surface-01: rgba(20, 20, 20, 0.06);
    --text-icons-secondary: #898989;
    --Button-Secondary: rgba(20, 20, 20, 0.06);
    --text-icons-primary: #141414;
    --text-icons-traffic-heavy: #F5373C;
    --text-icons-traffic-average: #EFA701;
    --text-icons-traffic-light: #1BA136;
    --text-icons-accent-brand: #1BA136;
    --Special-Divider: rgba(137, 137, 137, 0.40);
    --Surface-Section-02: rgba(20, 20, 20, 0.06);
    --Surface-Section-01: #FFF;
    --text-icons-tertiary: #B8B8B8;
    --text-icons-accent-subtle: #5A5A5A;
    --Surface-00: rgba(0, 0, 0, 0.00);
    --Button-Primary-brand: #1DB93C;
    --text-icons-global-white-primary: #FFF;
    --Background-Blur-02: rgba(255, 255, 255, 0.70);
    --text-icons-status-success: #1BA136;
    --Background-Blur-01: rgba(241, 241, 241, 0.70);
    --text-icons-accen-link-green: #1BA136;
    --Background-Default-white: #FFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${b.fonts.primary};
    line-height: 1.5;
    color: ${b.colors.textPrimary};
    background-color: ${b.colors.backgroundPrimary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  /* Typography styles */
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: ${b.fontWeights.semibold};
    line-height: 1.2;
  }

  h1 { ${he.largeTitle} }
  h2 { ${he.title1} }
  h3 { ${he.title2} }
  h4 { ${he.title3} }

  p {
    margin: 0;
    line-height: 1.5;
  }

  /* Utility classes for typography */
  .body-text { ${he.body} }
  .subhead-text { ${he.subhead} }
  .footnote-text { ${he.footnote} }
  .caption-text { ${he.caption} }
  .caption2-text { ${he.caption2} }

  /* Button styles */
  button {
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
    outline: none;
    transition: ${b.transitions.normal};
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 16px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: -0.3px;
    text-decoration: none;
    transition: all 0.2s ease;
    border: none;
    cursor: pointer;
  }

  .btn-primary {
    background: var(--Button-Primary-brand);
    color: var(--text-icons-global-white-primary);
  }

  .btn-primary:hover {
    background: #16a32e;
  }

  .btn-secondary {
    background: var(--Button-Secondary);
    color: var(--text-icons-primary);
  }

  .btn-secondary:hover {
    background: rgba(20, 20, 20, 0.12);
  }

  .btn-icon {
    padding: 8px;
    width: 40px;
    height: 40px;
  }

  /* Form elements */
  input, textarea, select {
    font-family: inherit;
    border: none;
    outline: none;
    background: transparent;
  }

  /* Scrollbar styles */
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${b.colors.textTertiary};
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${b.colors.textSecondary};
  }

  /* Focus styles */
  ${Iy}

  /* Selection styles */
  ${Dy}

  /* Mobile optimizations */
  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
    
    body {
      -webkit-text-size-adjust: 100%;
    }
  }

  /* Touch targets */
  @media (pointer: coarse) {
    .btn, button, [role="button"] {
      min-height: 44px;
      min-width: 44px;
    }
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    :root {
      --text-icons-secondary: #000;
      --text-icons-tertiary: #000;
    }
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  /* Dark mode support (for future use) */
  @media (prefers-color-scheme: dark) {
    /* Will be implemented when dark theme is required */
  }
`,Ok=new jv({defaultOptions:{queries:{refetchOnWindowFocus:!1,retry:1,staleTime:0,cacheTime:0}}}),Ik=Aa.createRoot(document.getElementById("root"));Ik.render(s(ke.StrictMode,{children:s(xv,{children:s(Kv,{client:Ok,children:x(N0,{children:[s(Rk,{}),s(Ak,{})]})})})}));
//# sourceMappingURL=index-312bb1ba.js.map
