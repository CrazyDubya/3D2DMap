(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function ux(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Bg={exports:{}},gu={},Hg={exports:{}},Be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ha=Symbol.for("react.element"),cx=Symbol.for("react.portal"),fx=Symbol.for("react.fragment"),dx=Symbol.for("react.strict_mode"),hx=Symbol.for("react.profiler"),px=Symbol.for("react.provider"),mx=Symbol.for("react.context"),gx=Symbol.for("react.forward_ref"),vx=Symbol.for("react.suspense"),_x=Symbol.for("react.memo"),xx=Symbol.for("react.lazy"),Lh=Symbol.iterator;function Sx(t){return t===null||typeof t!="object"?null:(t=Lh&&t[Lh]||t["@@iterator"],typeof t=="function"?t:null)}var Gg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vg=Object.assign,Wg={};function Jo(t,e,n){this.props=t,this.context=e,this.refs=Wg,this.updater=n||Gg}Jo.prototype.isReactComponent={};Jo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Jo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Xg(){}Xg.prototype=Jo.prototype;function gd(t,e,n){this.props=t,this.context=e,this.refs=Wg,this.updater=n||Gg}var vd=gd.prototype=new Xg;vd.constructor=gd;Vg(vd,Jo.prototype);vd.isPureReactComponent=!0;var bh=Array.isArray,jg=Object.prototype.hasOwnProperty,_d={current:null},qg={key:!0,ref:!0,__self:!0,__source:!0};function Yg(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)jg.call(e,i)&&!qg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ha,type:t,key:o,ref:s,props:r,_owner:_d.current}}function yx(t,e){return{$$typeof:ha,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function xd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ha}function Mx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Dh=/\/+/g;function Hu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Mx(""+t.key):e.toString(36)}function ml(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case ha:case cx:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+Hu(s,0):i,bh(r)?(n="",t!=null&&(n=t.replace(Dh,"$&/")+"/"),ml(r,e,n,"",function(u){return u})):r!=null&&(xd(r)&&(r=yx(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Dh,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",bh(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+Hu(o,a);s+=ml(o,e,n,l,r)}else if(l=Sx(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+Hu(o,a++),s+=ml(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Ta(t,e,n){if(t==null)return t;var i=[],r=0;return ml(t,i,"","",function(o){return e.call(n,o,r++)}),i}function Ex(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var tn={current:null},gl={transition:null},Tx={ReactCurrentDispatcher:tn,ReactCurrentBatchConfig:gl,ReactCurrentOwner:_d};function $g(){throw Error("act(...) is not supported in production builds of React.")}Be.Children={map:Ta,forEach:function(t,e,n){Ta(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ta(t,function(){e++}),e},toArray:function(t){return Ta(t,function(e){return e})||[]},only:function(t){if(!xd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Be.Component=Jo;Be.Fragment=fx;Be.Profiler=hx;Be.PureComponent=gd;Be.StrictMode=dx;Be.Suspense=vx;Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tx;Be.act=$g;Be.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Vg({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=_d.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)jg.call(e,l)&&!qg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ha,type:t.type,key:r,ref:o,props:i,_owner:s}};Be.createContext=function(t){return t={$$typeof:mx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:px,_context:t},t.Consumer=t};Be.createElement=Yg;Be.createFactory=function(t){var e=Yg.bind(null,t);return e.type=t,e};Be.createRef=function(){return{current:null}};Be.forwardRef=function(t){return{$$typeof:gx,render:t}};Be.isValidElement=xd;Be.lazy=function(t){return{$$typeof:xx,_payload:{_status:-1,_result:t},_init:Ex}};Be.memo=function(t,e){return{$$typeof:_x,type:t,compare:e===void 0?null:e}};Be.startTransition=function(t){var e=gl.transition;gl.transition={};try{t()}finally{gl.transition=e}};Be.unstable_act=$g;Be.useCallback=function(t,e){return tn.current.useCallback(t,e)};Be.useContext=function(t){return tn.current.useContext(t)};Be.useDebugValue=function(){};Be.useDeferredValue=function(t){return tn.current.useDeferredValue(t)};Be.useEffect=function(t,e){return tn.current.useEffect(t,e)};Be.useId=function(){return tn.current.useId()};Be.useImperativeHandle=function(t,e,n){return tn.current.useImperativeHandle(t,e,n)};Be.useInsertionEffect=function(t,e){return tn.current.useInsertionEffect(t,e)};Be.useLayoutEffect=function(t,e){return tn.current.useLayoutEffect(t,e)};Be.useMemo=function(t,e){return tn.current.useMemo(t,e)};Be.useReducer=function(t,e,n){return tn.current.useReducer(t,e,n)};Be.useRef=function(t){return tn.current.useRef(t)};Be.useState=function(t){return tn.current.useState(t)};Be.useSyncExternalStore=function(t,e,n){return tn.current.useSyncExternalStore(t,e,n)};Be.useTransition=function(){return tn.current.useTransition()};Be.version="18.3.1";Hg.exports=Be;var mt=Hg.exports;const wx=ux(mt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ax=mt,Rx=Symbol.for("react.element"),Cx=Symbol.for("react.fragment"),Px=Object.prototype.hasOwnProperty,Lx=Ax.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bx={key:!0,ref:!0,__self:!0,__source:!0};function Kg(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)Px.call(e,i)&&!bx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Rx,type:t,key:o,ref:s,props:r,_owner:Lx.current}}gu.Fragment=Cx;gu.jsx=Kg;gu.jsxs=Kg;Bg.exports=gu;var xe=Bg.exports,Kc={},Zg={exports:{}},wn={},Qg={exports:{}},Jg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,k){var z=N.length;N.push(k);e:for(;0<z;){var D=z-1>>>1,O=N[D];if(0<r(O,k))N[D]=k,N[z]=O,z=D;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var k=N[0],z=N.pop();if(z!==k){N[0]=z;e:for(var D=0,O=N.length,ne=O>>>1;D<ne;){var se=2*(D+1)-1,le=N[se],ge=se+1,be=N[ge];if(0>r(le,z))ge<O&&0>r(be,le)?(N[D]=be,N[ge]=z,D=ge):(N[D]=le,N[se]=z,D=se);else if(ge<O&&0>r(be,z))N[D]=be,N[ge]=z,D=ge;else break e}}return k}function r(N,k){var z=N.sortIndex-k.sortIndex;return z!==0?z:N.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,h=3,m=!1,_=!1,x=!1,p=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(N){for(var k=n(u);k!==null;){if(k.callback===null)i(u);else if(k.startTime<=N)i(u),k.sortIndex=k.expirationTime,e(l,k);else break;k=n(u)}}function S(N){if(x=!1,g(N),!_)if(n(l)!==null)_=!0,G(M);else{var k=n(u);k!==null&&B(S,k.startTime-N)}}function M(N,k){_=!1,x&&(x=!1,d(L),L=-1),m=!0;var z=h;try{for(g(k),f=n(l);f!==null&&(!(f.expirationTime>k)||N&&!I());){var D=f.callback;if(typeof D=="function"){f.callback=null,h=f.priorityLevel;var O=D(f.expirationTime<=k);k=t.unstable_now(),typeof O=="function"?f.callback=O:f===n(l)&&i(l),g(k)}else i(l);f=n(l)}if(f!==null)var ne=!0;else{var se=n(u);se!==null&&B(S,se.startTime-k),ne=!1}return ne}finally{f=null,h=z,m=!1}}var T=!1,R=null,L=-1,y=5,A=-1;function I(){return!(t.unstable_now()-A<y)}function Y(){if(R!==null){var N=t.unstable_now();A=N;var k=!0;try{k=R(!0,N)}finally{k?$():(T=!1,R=null)}}else T=!1}var $;if(typeof v=="function")$=function(){v(Y)};else if(typeof MessageChannel<"u"){var b=new MessageChannel,P=b.port2;b.port1.onmessage=Y,$=function(){P.postMessage(null)}}else $=function(){p(Y,0)};function G(N){R=N,T||(T=!0,$())}function B(N,k){L=p(function(){N(t.unstable_now())},k)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,G(M))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var k=3;break;default:k=h}var z=h;h=k;try{return N()}finally{h=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,k){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var z=h;h=N;try{return k()}finally{h=z}},t.unstable_scheduleCallback=function(N,k,z){var D=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?D+z:D):z=D,N){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=z+O,N={id:c++,callback:k,priorityLevel:N,startTime:z,expirationTime:O,sortIndex:-1},z>D?(N.sortIndex=z,e(u,N),n(l)===null&&N===n(u)&&(x?(d(L),L=-1):x=!0,B(S,z-D))):(N.sortIndex=O,e(l,N),_||m||(_=!0,G(M))),N},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(N){var k=h;return function(){var z=h;h=k;try{return N.apply(this,arguments)}finally{h=z}}}})(Jg);Qg.exports=Jg;var Dx=Qg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ux=mt,En=Dx;function Z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var e0=new Set,Xs={};function $r(t,e){Bo(t,e),Bo(t+"Capture",e)}function Bo(t,e){for(Xs[t]=e,t=0;t<e.length;t++)e0.add(e[t])}var Li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zc=Object.prototype.hasOwnProperty,Nx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uh={},Nh={};function Ix(t){return Zc.call(Nh,t)?!0:Zc.call(Uh,t)?!1:Nx.test(t)?Nh[t]=!0:(Uh[t]=!0,!1)}function Fx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ox(t,e,n,i){if(e===null||typeof e>"u"||Fx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function nn(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Bt[t]=new nn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Bt[e]=new nn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Bt[t]=new nn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Bt[t]=new nn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Bt[t]=new nn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Bt[t]=new nn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Bt[t]=new nn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Bt[t]=new nn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Bt[t]=new nn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Sd=/[\-:]([a-z])/g;function yd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Sd,yd);Bt[e]=new nn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Sd,yd);Bt[e]=new nn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Sd,yd);Bt[e]=new nn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Bt[t]=new nn(t,1,!1,t.toLowerCase(),null,!1,!1)});Bt.xlinkHref=new nn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Bt[t]=new nn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Md(t,e,n,i){var r=Bt.hasOwnProperty(e)?Bt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ox(e,n,r,i)&&(n=null),i||r===null?Ix(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ii=Ux.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wa=Symbol.for("react.element"),vo=Symbol.for("react.portal"),_o=Symbol.for("react.fragment"),Ed=Symbol.for("react.strict_mode"),Qc=Symbol.for("react.profiler"),t0=Symbol.for("react.provider"),n0=Symbol.for("react.context"),Td=Symbol.for("react.forward_ref"),Jc=Symbol.for("react.suspense"),ef=Symbol.for("react.suspense_list"),wd=Symbol.for("react.memo"),Gi=Symbol.for("react.lazy"),i0=Symbol.for("react.offscreen"),Ih=Symbol.iterator;function ss(t){return t===null||typeof t!="object"?null:(t=Ih&&t[Ih]||t["@@iterator"],typeof t=="function"?t:null)}var ft=Object.assign,Gu;function xs(t){if(Gu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Gu=e&&e[1]||""}return`
`+Gu+t}var Vu=!1;function Wu(t,e){if(!t||Vu)return"";Vu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Vu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?xs(t):""}function kx(t){switch(t.tag){case 5:return xs(t.type);case 16:return xs("Lazy");case 13:return xs("Suspense");case 19:return xs("SuspenseList");case 0:case 2:case 15:return t=Wu(t.type,!1),t;case 11:return t=Wu(t.type.render,!1),t;case 1:return t=Wu(t.type,!0),t;default:return""}}function tf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _o:return"Fragment";case vo:return"Portal";case Qc:return"Profiler";case Ed:return"StrictMode";case Jc:return"Suspense";case ef:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case n0:return(t.displayName||"Context")+".Consumer";case t0:return(t._context.displayName||"Context")+".Provider";case Td:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case wd:return e=t.displayName||null,e!==null?e:tf(t.type)||"Memo";case Gi:e=t._payload,t=t._init;try{return tf(t(e))}catch{}}return null}function zx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tf(e);case 8:return e===Ed?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function r0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Bx(t){var e=r0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Aa(t){t._valueTracker||(t._valueTracker=Bx(t))}function o0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=r0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ll(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function nf(t,e){var n=e.checked;return ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Fh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function s0(t,e){e=e.checked,e!=null&&Md(t,"checked",e,!1)}function rf(t,e){s0(t,e);var n=lr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?of(t,e.type,n):e.hasOwnProperty("defaultValue")&&of(t,e.type,lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Oh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function of(t,e,n){(e!=="number"||Ll(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ss=Array.isArray;function Do(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+lr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function sf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Z(91));return ft({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function kh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Z(92));if(Ss(n)){if(1<n.length)throw Error(Z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:lr(n)}}function a0(t,e){var n=lr(e.value),i=lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function zh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function l0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function af(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?l0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ra,u0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ra=Ra||document.createElement("div"),Ra.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ra.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function js(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var bs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hx=["Webkit","ms","Moz","O"];Object.keys(bs).forEach(function(t){Hx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),bs[e]=bs[t]})});function c0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||bs.hasOwnProperty(t)&&bs[t]?(""+e).trim():e+"px"}function f0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=c0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Gx=ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lf(t,e){if(e){if(Gx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Z(62))}}function uf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cf=null;function Ad(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ff=null,Uo=null,No=null;function Bh(t){if(t=ga(t)){if(typeof ff!="function")throw Error(Z(280));var e=t.stateNode;e&&(e=yu(e),ff(t.stateNode,t.type,e))}}function d0(t){Uo?No?No.push(t):No=[t]:Uo=t}function h0(){if(Uo){var t=Uo,e=No;if(No=Uo=null,Bh(t),e)for(t=0;t<e.length;t++)Bh(e[t])}}function p0(t,e){return t(e)}function m0(){}var Xu=!1;function g0(t,e,n){if(Xu)return t(e,n);Xu=!0;try{return p0(t,e,n)}finally{Xu=!1,(Uo!==null||No!==null)&&(m0(),h0())}}function qs(t,e){var n=t.stateNode;if(n===null)return null;var i=yu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Z(231,e,typeof n));return n}var df=!1;if(Li)try{var as={};Object.defineProperty(as,"passive",{get:function(){df=!0}}),window.addEventListener("test",as,as),window.removeEventListener("test",as,as)}catch{df=!1}function Vx(t,e,n,i,r,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ds=!1,bl=null,Dl=!1,hf=null,Wx={onError:function(t){Ds=!0,bl=t}};function Xx(t,e,n,i,r,o,s,a,l){Ds=!1,bl=null,Vx.apply(Wx,arguments)}function jx(t,e,n,i,r,o,s,a,l){if(Xx.apply(this,arguments),Ds){if(Ds){var u=bl;Ds=!1,bl=null}else throw Error(Z(198));Dl||(Dl=!0,hf=u)}}function Kr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function v0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Hh(t){if(Kr(t)!==t)throw Error(Z(188))}function qx(t){var e=t.alternate;if(!e){if(e=Kr(t),e===null)throw Error(Z(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Hh(r),t;if(o===i)return Hh(r),e;o=o.sibling}throw Error(Z(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(Z(189))}}if(n.alternate!==i)throw Error(Z(190))}if(n.tag!==3)throw Error(Z(188));return n.stateNode.current===n?t:e}function _0(t){return t=qx(t),t!==null?x0(t):null}function x0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=x0(t);if(e!==null)return e;t=t.sibling}return null}var S0=En.unstable_scheduleCallback,Gh=En.unstable_cancelCallback,Yx=En.unstable_shouldYield,$x=En.unstable_requestPaint,_t=En.unstable_now,Kx=En.unstable_getCurrentPriorityLevel,Rd=En.unstable_ImmediatePriority,y0=En.unstable_UserBlockingPriority,Ul=En.unstable_NormalPriority,Zx=En.unstable_LowPriority,M0=En.unstable_IdlePriority,vu=null,di=null;function Qx(t){if(di&&typeof di.onCommitFiberRoot=="function")try{di.onCommitFiberRoot(vu,t,void 0,(t.current.flags&128)===128)}catch{}}var Qn=Math.clz32?Math.clz32:tS,Jx=Math.log,eS=Math.LN2;function tS(t){return t>>>=0,t===0?32:31-(Jx(t)/eS|0)|0}var Ca=64,Pa=4194304;function ys(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Nl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=ys(a):(o&=s,o!==0&&(i=ys(o)))}else s=n&~r,s!==0?i=ys(s):o!==0&&(i=ys(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Qn(e),r=1<<n,i|=t[n],e&=~r;return i}function nS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Qn(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=nS(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function pf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function E0(){var t=Ca;return Ca<<=1,!(Ca&4194240)&&(Ca=64),t}function ju(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function pa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qn(e),t[e]=n}function rS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Qn(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function Cd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ze=0;function T0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var w0,Pd,A0,R0,C0,mf=!1,La=[],Zi=null,Qi=null,Ji=null,Ys=new Map,$s=new Map,Wi=[],oS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vh(t,e){switch(t){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":Qi=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":Ys.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$s.delete(e.pointerId)}}function ls(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=ga(e),e!==null&&Pd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function sS(t,e,n,i,r){switch(e){case"focusin":return Zi=ls(Zi,t,e,n,i,r),!0;case"dragenter":return Qi=ls(Qi,t,e,n,i,r),!0;case"mouseover":return Ji=ls(Ji,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Ys.set(o,ls(Ys.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,$s.set(o,ls($s.get(o)||null,t,e,n,i,r)),!0}return!1}function P0(t){var e=Pr(t.target);if(e!==null){var n=Kr(e);if(n!==null){if(e=n.tag,e===13){if(e=v0(n),e!==null){t.blockedOn=e,C0(t.priority,function(){A0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);cf=i,n.target.dispatchEvent(i),cf=null}else return e=ga(n),e!==null&&Pd(e),t.blockedOn=n,!1;e.shift()}return!0}function Wh(t,e,n){vl(t)&&n.delete(e)}function aS(){mf=!1,Zi!==null&&vl(Zi)&&(Zi=null),Qi!==null&&vl(Qi)&&(Qi=null),Ji!==null&&vl(Ji)&&(Ji=null),Ys.forEach(Wh),$s.forEach(Wh)}function us(t,e){t.blockedOn===e&&(t.blockedOn=null,mf||(mf=!0,En.unstable_scheduleCallback(En.unstable_NormalPriority,aS)))}function Ks(t){function e(r){return us(r,t)}if(0<La.length){us(La[0],t);for(var n=1;n<La.length;n++){var i=La[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Zi!==null&&us(Zi,t),Qi!==null&&us(Qi,t),Ji!==null&&us(Ji,t),Ys.forEach(e),$s.forEach(e),n=0;n<Wi.length;n++)i=Wi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Wi.length&&(n=Wi[0],n.blockedOn===null);)P0(n),n.blockedOn===null&&Wi.shift()}var Io=Ii.ReactCurrentBatchConfig,Il=!0;function lS(t,e,n,i){var r=Ze,o=Io.transition;Io.transition=null;try{Ze=1,Ld(t,e,n,i)}finally{Ze=r,Io.transition=o}}function uS(t,e,n,i){var r=Ze,o=Io.transition;Io.transition=null;try{Ze=4,Ld(t,e,n,i)}finally{Ze=r,Io.transition=o}}function Ld(t,e,n,i){if(Il){var r=gf(t,e,n,i);if(r===null)nc(t,e,i,Fl,n),Vh(t,i);else if(sS(r,t,e,n,i))i.stopPropagation();else if(Vh(t,i),e&4&&-1<oS.indexOf(t)){for(;r!==null;){var o=ga(r);if(o!==null&&w0(o),o=gf(t,e,n,i),o===null&&nc(t,e,i,Fl,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else nc(t,e,i,null,n)}}var Fl=null;function gf(t,e,n,i){if(Fl=null,t=Ad(i),t=Pr(t),t!==null)if(e=Kr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=v0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fl=t,null}function L0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kx()){case Rd:return 1;case y0:return 4;case Ul:case Zx:return 16;case M0:return 536870912;default:return 16}default:return 16}}var qi=null,bd=null,_l=null;function b0(){if(_l)return _l;var t,e=bd,n=e.length,i,r="value"in qi?qi.value:qi.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return _l=r.slice(t,1<i?1-i:void 0)}function xl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ba(){return!0}function Xh(){return!1}function An(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ba:Xh,this.isPropagationStopped=Xh,this}return ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ba)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ba)},persist:function(){},isPersistent:ba}),e}var es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dd=An(es),ma=ft({},es,{view:0,detail:0}),cS=An(ma),qu,Yu,cs,_u=ft({},ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ud,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==cs&&(cs&&t.type==="mousemove"?(qu=t.screenX-cs.screenX,Yu=t.screenY-cs.screenY):Yu=qu=0,cs=t),qu)},movementY:function(t){return"movementY"in t?t.movementY:Yu}}),jh=An(_u),fS=ft({},_u,{dataTransfer:0}),dS=An(fS),hS=ft({},ma,{relatedTarget:0}),$u=An(hS),pS=ft({},es,{animationName:0,elapsedTime:0,pseudoElement:0}),mS=An(pS),gS=ft({},es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vS=An(gS),_S=ft({},es,{data:0}),qh=An(_S),xS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},SS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function MS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=yS[t])?!!e[t]:!1}function Ud(){return MS}var ES=ft({},ma,{key:function(t){if(t.key){var e=xS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?SS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ud,charCode:function(t){return t.type==="keypress"?xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),TS=An(ES),wS=ft({},_u,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yh=An(wS),AS=ft({},ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ud}),RS=An(AS),CS=ft({},es,{propertyName:0,elapsedTime:0,pseudoElement:0}),PS=An(CS),LS=ft({},_u,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),bS=An(LS),DS=[9,13,27,32],Nd=Li&&"CompositionEvent"in window,Us=null;Li&&"documentMode"in document&&(Us=document.documentMode);var US=Li&&"TextEvent"in window&&!Us,D0=Li&&(!Nd||Us&&8<Us&&11>=Us),$h=String.fromCharCode(32),Kh=!1;function U0(t,e){switch(t){case"keyup":return DS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function N0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xo=!1;function NS(t,e){switch(t){case"compositionend":return N0(e);case"keypress":return e.which!==32?null:(Kh=!0,$h);case"textInput":return t=e.data,t===$h&&Kh?null:t;default:return null}}function IS(t,e){if(xo)return t==="compositionend"||!Nd&&U0(t,e)?(t=b0(),_l=bd=qi=null,xo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return D0&&e.locale!=="ko"?null:e.data;default:return null}}var FS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!FS[t.type]:e==="textarea"}function I0(t,e,n,i){d0(i),e=Ol(e,"onChange"),0<e.length&&(n=new Dd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ns=null,Zs=null;function OS(t){j0(t,0)}function xu(t){var e=Mo(t);if(o0(e))return t}function kS(t,e){if(t==="change")return e}var F0=!1;if(Li){var Ku;if(Li){var Zu="oninput"in document;if(!Zu){var Qh=document.createElement("div");Qh.setAttribute("oninput","return;"),Zu=typeof Qh.oninput=="function"}Ku=Zu}else Ku=!1;F0=Ku&&(!document.documentMode||9<document.documentMode)}function Jh(){Ns&&(Ns.detachEvent("onpropertychange",O0),Zs=Ns=null)}function O0(t){if(t.propertyName==="value"&&xu(Zs)){var e=[];I0(e,Zs,t,Ad(t)),g0(OS,e)}}function zS(t,e,n){t==="focusin"?(Jh(),Ns=e,Zs=n,Ns.attachEvent("onpropertychange",O0)):t==="focusout"&&Jh()}function BS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xu(Zs)}function HS(t,e){if(t==="click")return xu(e)}function GS(t,e){if(t==="input"||t==="change")return xu(e)}function VS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ti=typeof Object.is=="function"?Object.is:VS;function Qs(t,e){if(ti(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Zc.call(e,r)||!ti(t[r],e[r]))return!1}return!0}function ep(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tp(t,e){var n=ep(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ep(n)}}function k0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?k0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function z0(){for(var t=window,e=Ll();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ll(t.document)}return e}function Id(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function WS(t){var e=z0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&k0(n.ownerDocument.documentElement,n)){if(i!==null&&Id(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=tp(n,o);var s=tp(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var XS=Li&&"documentMode"in document&&11>=document.documentMode,So=null,vf=null,Is=null,_f=!1;function np(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_f||So==null||So!==Ll(i)||(i=So,"selectionStart"in i&&Id(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Is&&Qs(Is,i)||(Is=i,i=Ol(vf,"onSelect"),0<i.length&&(e=new Dd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=So)))}function Da(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var yo={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionend:Da("Transition","TransitionEnd")},Qu={},B0={};Li&&(B0=document.createElement("div").style,"AnimationEvent"in window||(delete yo.animationend.animation,delete yo.animationiteration.animation,delete yo.animationstart.animation),"TransitionEvent"in window||delete yo.transitionend.transition);function Su(t){if(Qu[t])return Qu[t];if(!yo[t])return t;var e=yo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in B0)return Qu[t]=e[n];return t}var H0=Su("animationend"),G0=Su("animationiteration"),V0=Su("animationstart"),W0=Su("transitionend"),X0=new Map,ip="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(t,e){X0.set(t,e),$r(e,[t])}for(var Ju=0;Ju<ip.length;Ju++){var ec=ip[Ju],jS=ec.toLowerCase(),qS=ec[0].toUpperCase()+ec.slice(1);dr(jS,"on"+qS)}dr(H0,"onAnimationEnd");dr(G0,"onAnimationIteration");dr(V0,"onAnimationStart");dr("dblclick","onDoubleClick");dr("focusin","onFocus");dr("focusout","onBlur");dr(W0,"onTransitionEnd");Bo("onMouseEnter",["mouseout","mouseover"]);Bo("onMouseLeave",["mouseout","mouseover"]);Bo("onPointerEnter",["pointerout","pointerover"]);Bo("onPointerLeave",["pointerout","pointerover"]);$r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$r("onBeforeInput",["compositionend","keypress","textInput","paste"]);$r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ms="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ms));function rp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,jx(i,e,void 0,t),t.currentTarget=null}function j0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;rp(r,a,u),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;rp(r,a,u),o=l}}}if(Dl)throw t=hf,Dl=!1,hf=null,t}function ot(t,e){var n=e[Ef];n===void 0&&(n=e[Ef]=new Set);var i=t+"__bubble";n.has(i)||(q0(e,t,2,!1),n.add(i))}function tc(t,e,n){var i=0;e&&(i|=4),q0(n,t,i,e)}var Ua="_reactListening"+Math.random().toString(36).slice(2);function Js(t){if(!t[Ua]){t[Ua]=!0,e0.forEach(function(n){n!=="selectionchange"&&(YS.has(n)||tc(n,!1,t),tc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ua]||(e[Ua]=!0,tc("selectionchange",!1,e))}}function q0(t,e,n,i){switch(L0(e)){case 1:var r=lS;break;case 4:r=uS;break;default:r=Ld}n=r.bind(null,e,n,t),r=void 0,!df||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function nc(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Pr(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}g0(function(){var u=o,c=Ad(n),f=[];e:{var h=X0.get(t);if(h!==void 0){var m=Dd,_=t;switch(t){case"keypress":if(xl(n)===0)break e;case"keydown":case"keyup":m=TS;break;case"focusin":_="focus",m=$u;break;case"focusout":_="blur",m=$u;break;case"beforeblur":case"afterblur":m=$u;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=jh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=dS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=RS;break;case H0:case G0:case V0:m=mS;break;case W0:m=PS;break;case"scroll":m=cS;break;case"wheel":m=bS;break;case"copy":case"cut":case"paste":m=vS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Yh}var x=(e&4)!==0,p=!x&&t==="scroll",d=x?h!==null?h+"Capture":null:h;x=[];for(var v=u,g;v!==null;){g=v;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,d!==null&&(S=qs(v,d),S!=null&&x.push(ea(v,S,g)))),p)break;v=v.return}0<x.length&&(h=new m(h,_,null,n,c),f.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==cf&&(_=n.relatedTarget||n.fromElement)&&(Pr(_)||_[bi]))break e;if((m||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=u,_=_?Pr(_):null,_!==null&&(p=Kr(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=u),m!==_)){if(x=jh,S="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=Yh,S="onPointerLeave",d="onPointerEnter",v="pointer"),p=m==null?h:Mo(m),g=_==null?h:Mo(_),h=new x(S,v+"leave",m,n,c),h.target=p,h.relatedTarget=g,S=null,Pr(c)===u&&(x=new x(d,v+"enter",_,n,c),x.target=g,x.relatedTarget=p,S=x),p=S,m&&_)t:{for(x=m,d=_,v=0,g=x;g;g=Zr(g))v++;for(g=0,S=d;S;S=Zr(S))g++;for(;0<v-g;)x=Zr(x),v--;for(;0<g-v;)d=Zr(d),g--;for(;v--;){if(x===d||d!==null&&x===d.alternate)break t;x=Zr(x),d=Zr(d)}x=null}else x=null;m!==null&&op(f,h,m,x,!1),_!==null&&p!==null&&op(f,p,_,x,!0)}}e:{if(h=u?Mo(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var M=kS;else if(Zh(h))if(F0)M=GS;else{M=BS;var T=zS}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(M=HS);if(M&&(M=M(t,u))){I0(f,M,n,c);break e}T&&T(t,h,u),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&of(h,"number",h.value)}switch(T=u?Mo(u):window,t){case"focusin":(Zh(T)||T.contentEditable==="true")&&(So=T,vf=u,Is=null);break;case"focusout":Is=vf=So=null;break;case"mousedown":_f=!0;break;case"contextmenu":case"mouseup":case"dragend":_f=!1,np(f,n,c);break;case"selectionchange":if(XS)break;case"keydown":case"keyup":np(f,n,c)}var R;if(Nd)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else xo?U0(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(D0&&n.locale!=="ko"&&(xo||L!=="onCompositionStart"?L==="onCompositionEnd"&&xo&&(R=b0()):(qi=c,bd="value"in qi?qi.value:qi.textContent,xo=!0)),T=Ol(u,L),0<T.length&&(L=new qh(L,t,null,n,c),f.push({event:L,listeners:T}),R?L.data=R:(R=N0(n),R!==null&&(L.data=R)))),(R=US?NS(t,n):IS(t,n))&&(u=Ol(u,"onBeforeInput"),0<u.length&&(c=new qh("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=R))}j0(f,e)})}function ea(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ol(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=qs(t,n),o!=null&&i.unshift(ea(t,o,r)),o=qs(t,e),o!=null&&i.push(ea(t,o,r))),t=t.return}return i}function Zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function op(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=qs(n,o),l!=null&&s.unshift(ea(n,l,a))):r||(l=qs(n,o),l!=null&&s.push(ea(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var $S=/\r\n?/g,KS=/\u0000|\uFFFD/g;function sp(t){return(typeof t=="string"?t:""+t).replace($S,`
`).replace(KS,"")}function Na(t,e,n){if(e=sp(e),sp(t)!==e&&n)throw Error(Z(425))}function kl(){}var xf=null,Sf=null;function yf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Mf=typeof setTimeout=="function"?setTimeout:void 0,ZS=typeof clearTimeout=="function"?clearTimeout:void 0,ap=typeof Promise=="function"?Promise:void 0,QS=typeof queueMicrotask=="function"?queueMicrotask:typeof ap<"u"?function(t){return ap.resolve(null).then(t).catch(JS)}:Mf;function JS(t){setTimeout(function(){throw t})}function ic(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ks(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ks(e)}function er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function lp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ts=Math.random().toString(36).slice(2),ui="__reactFiber$"+ts,ta="__reactProps$"+ts,bi="__reactContainer$"+ts,Ef="__reactEvents$"+ts,ey="__reactListeners$"+ts,ty="__reactHandles$"+ts;function Pr(t){var e=t[ui];if(e)return e;for(var n=t.parentNode;n;){if(e=n[bi]||n[ui]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=lp(t);t!==null;){if(n=t[ui])return n;t=lp(t)}return e}t=n,n=t.parentNode}return null}function ga(t){return t=t[ui]||t[bi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Mo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Z(33))}function yu(t){return t[ta]||null}var Tf=[],Eo=-1;function hr(t){return{current:t}}function at(t){0>Eo||(t.current=Tf[Eo],Tf[Eo]=null,Eo--)}function rt(t,e){Eo++,Tf[Eo]=t.current,t.current=e}var ur={},Yt=hr(ur),un=hr(!1),kr=ur;function Ho(t,e){var n=t.type.contextTypes;if(!n)return ur;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function cn(t){return t=t.childContextTypes,t!=null}function zl(){at(un),at(Yt)}function up(t,e,n){if(Yt.current!==ur)throw Error(Z(168));rt(Yt,e),rt(un,n)}function Y0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Z(108,zx(t)||"Unknown",r));return ft({},n,i)}function Bl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ur,kr=Yt.current,rt(Yt,t),rt(un,un.current),!0}function cp(t,e,n){var i=t.stateNode;if(!i)throw Error(Z(169));n?(t=Y0(t,e,kr),i.__reactInternalMemoizedMergedChildContext=t,at(un),at(Yt),rt(Yt,t)):at(un),rt(un,n)}var Ei=null,Mu=!1,rc=!1;function $0(t){Ei===null?Ei=[t]:Ei.push(t)}function ny(t){Mu=!0,$0(t)}function pr(){if(!rc&&Ei!==null){rc=!0;var t=0,e=Ze;try{var n=Ei;for(Ze=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ei=null,Mu=!1}catch(r){throw Ei!==null&&(Ei=Ei.slice(t+1)),S0(Rd,pr),r}finally{Ze=e,rc=!1}}return null}var To=[],wo=0,Hl=null,Gl=0,Pn=[],Ln=0,zr=null,wi=1,Ai="";function Mr(t,e){To[wo++]=Gl,To[wo++]=Hl,Hl=t,Gl=e}function K0(t,e,n){Pn[Ln++]=wi,Pn[Ln++]=Ai,Pn[Ln++]=zr,zr=t;var i=wi;t=Ai;var r=32-Qn(i)-1;i&=~(1<<r),n+=1;var o=32-Qn(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,wi=1<<32-Qn(e)+r|n<<r|i,Ai=o+t}else wi=1<<o|n<<r|i,Ai=t}function Fd(t){t.return!==null&&(Mr(t,1),K0(t,1,0))}function Od(t){for(;t===Hl;)Hl=To[--wo],To[wo]=null,Gl=To[--wo],To[wo]=null;for(;t===zr;)zr=Pn[--Ln],Pn[Ln]=null,Ai=Pn[--Ln],Pn[Ln]=null,wi=Pn[--Ln],Pn[Ln]=null}var Mn=null,yn=null,lt=!1,jn=null;function Z0(t,e){var n=Nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function fp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Mn=t,yn=er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Mn=t,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=zr!==null?{id:wi,overflow:Ai}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Mn=t,yn=null,!0):!1;default:return!1}}function wf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Af(t){if(lt){var e=yn;if(e){var n=e;if(!fp(t,e)){if(wf(t))throw Error(Z(418));e=er(n.nextSibling);var i=Mn;e&&fp(t,e)?Z0(i,n):(t.flags=t.flags&-4097|2,lt=!1,Mn=t)}}else{if(wf(t))throw Error(Z(418));t.flags=t.flags&-4097|2,lt=!1,Mn=t}}}function dp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Mn=t}function Ia(t){if(t!==Mn)return!1;if(!lt)return dp(t),lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!yf(t.type,t.memoizedProps)),e&&(e=yn)){if(wf(t))throw Q0(),Error(Z(418));for(;e;)Z0(t,e),e=er(e.nextSibling)}if(dp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yn=er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yn=null}}else yn=Mn?er(t.stateNode.nextSibling):null;return!0}function Q0(){for(var t=yn;t;)t=er(t.nextSibling)}function Go(){yn=Mn=null,lt=!1}function kd(t){jn===null?jn=[t]:jn.push(t)}var iy=Ii.ReactCurrentBatchConfig;function fs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Z(309));var i=n.stateNode}if(!i)throw Error(Z(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(Z(284));if(!n._owner)throw Error(Z(290,t))}return t}function Fa(t,e){throw t=Object.prototype.toString.call(e),Error(Z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function hp(t){var e=t._init;return e(t._payload)}function J0(t){function e(d,v){if(t){var g=d.deletions;g===null?(d.deletions=[v],d.flags|=16):g.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=rr(d,v),d.index=0,d.sibling=null,d}function o(d,v,g){return d.index=g,t?(g=d.alternate,g!==null?(g=g.index,g<v?(d.flags|=2,v):g):(d.flags|=2,v)):(d.flags|=1048576,v)}function s(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,v,g,S){return v===null||v.tag!==6?(v=fc(g,d.mode,S),v.return=d,v):(v=r(v,g),v.return=d,v)}function l(d,v,g,S){var M=g.type;return M===_o?c(d,v,g.props.children,S,g.key):v!==null&&(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Gi&&hp(M)===v.type)?(S=r(v,g.props),S.ref=fs(d,v,g),S.return=d,S):(S=Al(g.type,g.key,g.props,null,d.mode,S),S.ref=fs(d,v,g),S.return=d,S)}function u(d,v,g,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=dc(g,d.mode,S),v.return=d,v):(v=r(v,g.children||[]),v.return=d,v)}function c(d,v,g,S,M){return v===null||v.tag!==7?(v=Ur(g,d.mode,S,M),v.return=d,v):(v=r(v,g),v.return=d,v)}function f(d,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=fc(""+v,d.mode,g),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case wa:return g=Al(v.type,v.key,v.props,null,d.mode,g),g.ref=fs(d,null,v),g.return=d,g;case vo:return v=dc(v,d.mode,g),v.return=d,v;case Gi:var S=v._init;return f(d,S(v._payload),g)}if(Ss(v)||ss(v))return v=Ur(v,d.mode,g,null),v.return=d,v;Fa(d,v)}return null}function h(d,v,g,S){var M=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return M!==null?null:a(d,v,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case wa:return g.key===M?l(d,v,g,S):null;case vo:return g.key===M?u(d,v,g,S):null;case Gi:return M=g._init,h(d,v,M(g._payload),S)}if(Ss(g)||ss(g))return M!==null?null:c(d,v,g,S,null);Fa(d,g)}return null}function m(d,v,g,S,M){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(g)||null,a(v,d,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case wa:return d=d.get(S.key===null?g:S.key)||null,l(v,d,S,M);case vo:return d=d.get(S.key===null?g:S.key)||null,u(v,d,S,M);case Gi:var T=S._init;return m(d,v,g,T(S._payload),M)}if(Ss(S)||ss(S))return d=d.get(g)||null,c(v,d,S,M,null);Fa(v,S)}return null}function _(d,v,g,S){for(var M=null,T=null,R=v,L=v=0,y=null;R!==null&&L<g.length;L++){R.index>L?(y=R,R=null):y=R.sibling;var A=h(d,R,g[L],S);if(A===null){R===null&&(R=y);break}t&&R&&A.alternate===null&&e(d,R),v=o(A,v,L),T===null?M=A:T.sibling=A,T=A,R=y}if(L===g.length)return n(d,R),lt&&Mr(d,L),M;if(R===null){for(;L<g.length;L++)R=f(d,g[L],S),R!==null&&(v=o(R,v,L),T===null?M=R:T.sibling=R,T=R);return lt&&Mr(d,L),M}for(R=i(d,R);L<g.length;L++)y=m(R,d,L,g[L],S),y!==null&&(t&&y.alternate!==null&&R.delete(y.key===null?L:y.key),v=o(y,v,L),T===null?M=y:T.sibling=y,T=y);return t&&R.forEach(function(I){return e(d,I)}),lt&&Mr(d,L),M}function x(d,v,g,S){var M=ss(g);if(typeof M!="function")throw Error(Z(150));if(g=M.call(g),g==null)throw Error(Z(151));for(var T=M=null,R=v,L=v=0,y=null,A=g.next();R!==null&&!A.done;L++,A=g.next()){R.index>L?(y=R,R=null):y=R.sibling;var I=h(d,R,A.value,S);if(I===null){R===null&&(R=y);break}t&&R&&I.alternate===null&&e(d,R),v=o(I,v,L),T===null?M=I:T.sibling=I,T=I,R=y}if(A.done)return n(d,R),lt&&Mr(d,L),M;if(R===null){for(;!A.done;L++,A=g.next())A=f(d,A.value,S),A!==null&&(v=o(A,v,L),T===null?M=A:T.sibling=A,T=A);return lt&&Mr(d,L),M}for(R=i(d,R);!A.done;L++,A=g.next())A=m(R,d,L,A.value,S),A!==null&&(t&&A.alternate!==null&&R.delete(A.key===null?L:A.key),v=o(A,v,L),T===null?M=A:T.sibling=A,T=A);return t&&R.forEach(function(Y){return e(d,Y)}),lt&&Mr(d,L),M}function p(d,v,g,S){if(typeof g=="object"&&g!==null&&g.type===_o&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case wa:e:{for(var M=g.key,T=v;T!==null;){if(T.key===M){if(M=g.type,M===_o){if(T.tag===7){n(d,T.sibling),v=r(T,g.props.children),v.return=d,d=v;break e}}else if(T.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Gi&&hp(M)===T.type){n(d,T.sibling),v=r(T,g.props),v.ref=fs(d,T,g),v.return=d,d=v;break e}n(d,T);break}else e(d,T);T=T.sibling}g.type===_o?(v=Ur(g.props.children,d.mode,S,g.key),v.return=d,d=v):(S=Al(g.type,g.key,g.props,null,d.mode,S),S.ref=fs(d,v,g),S.return=d,d=S)}return s(d);case vo:e:{for(T=g.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(d,v.sibling),v=r(v,g.children||[]),v.return=d,d=v;break e}else{n(d,v);break}else e(d,v);v=v.sibling}v=dc(g,d.mode,S),v.return=d,d=v}return s(d);case Gi:return T=g._init,p(d,v,T(g._payload),S)}if(Ss(g))return _(d,v,g,S);if(ss(g))return x(d,v,g,S);Fa(d,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(d,v.sibling),v=r(v,g),v.return=d,d=v):(n(d,v),v=fc(g,d.mode,S),v.return=d,d=v),s(d)):n(d,v)}return p}var Vo=J0(!0),ev=J0(!1),Vl=hr(null),Wl=null,Ao=null,zd=null;function Bd(){zd=Ao=Wl=null}function Hd(t){var e=Vl.current;at(Vl),t._currentValue=e}function Rf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Fo(t,e){Wl=t,zd=Ao=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(an=!0),t.firstContext=null)}function On(t){var e=t._currentValue;if(zd!==t)if(t={context:t,memoizedValue:e,next:null},Ao===null){if(Wl===null)throw Error(Z(308));Ao=t,Wl.dependencies={lanes:0,firstContext:t}}else Ao=Ao.next=t;return e}var Lr=null;function Gd(t){Lr===null?Lr=[t]:Lr.push(t)}function tv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Gd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Di(t,i)}function Di(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Vi=!1;function Vd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function tr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Xe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Di(t,n)}return r=i.interleaved,r===null?(e.next=e,Gd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Di(t,n)}function Sl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Cd(t,n)}}function pp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Xl(t,e,n,i){var r=t.updateQueue;Vi=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=r.baseState;s=0,c=u=l=null,a=o;do{var h=a.lane,m=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,x=a;switch(h=e,m=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){f=_.call(m,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,h=typeof _=="function"?_.call(m,f,h):_,h==null)break e;f=ft({},f,h);break e;case 2:Vi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=f):c=c.next=m,s|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Hr|=s,t.lanes=s,t.memoizedState=f}}function mp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Z(191,r));r.call(i)}}}var va={},hi=hr(va),na=hr(va),ia=hr(va);function br(t){if(t===va)throw Error(Z(174));return t}function Wd(t,e){switch(rt(ia,e),rt(na,t),rt(hi,va),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:af(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=af(e,t)}at(hi),rt(hi,e)}function Wo(){at(hi),at(na),at(ia)}function iv(t){br(ia.current);var e=br(hi.current),n=af(e,t.type);e!==n&&(rt(na,t),rt(hi,n))}function Xd(t){na.current===t&&(at(hi),at(na))}var ut=hr(0);function jl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var oc=[];function jd(){for(var t=0;t<oc.length;t++)oc[t]._workInProgressVersionPrimary=null;oc.length=0}var yl=Ii.ReactCurrentDispatcher,sc=Ii.ReactCurrentBatchConfig,Br=0,ct=null,Tt=null,bt=null,ql=!1,Fs=!1,ra=0,ry=0;function Gt(){throw Error(Z(321))}function qd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ti(t[n],e[n]))return!1;return!0}function Yd(t,e,n,i,r,o){if(Br=o,ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,yl.current=t===null||t.memoizedState===null?ly:uy,t=n(i,r),Fs){o=0;do{if(Fs=!1,ra=0,25<=o)throw Error(Z(301));o+=1,bt=Tt=null,e.updateQueue=null,yl.current=cy,t=n(i,r)}while(Fs)}if(yl.current=Yl,e=Tt!==null&&Tt.next!==null,Br=0,bt=Tt=ct=null,ql=!1,e)throw Error(Z(300));return t}function $d(){var t=ra!==0;return ra=0,t}function ai(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?ct.memoizedState=bt=t:bt=bt.next=t,bt}function kn(){if(Tt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=Tt.next;var e=bt===null?ct.memoizedState:bt.next;if(e!==null)bt=e,Tt=t;else{if(t===null)throw Error(Z(310));Tt=t,t={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},bt===null?ct.memoizedState=bt=t:bt=bt.next=t}return bt}function oa(t,e){return typeof e=="function"?e(t):e}function ac(t){var e=kn(),n=e.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=t;var i=Tt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Br&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=i):l=l.next=f,ct.lanes|=c,Hr|=c}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=a,ti(i,e.memoizedState)||(an=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,ct.lanes|=o,Hr|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function lc(t){var e=kn(),n=e.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);ti(o,e.memoizedState)||(an=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function rv(){}function ov(t,e){var n=ct,i=kn(),r=e(),o=!ti(i.memoizedState,r);if(o&&(i.memoizedState=r,an=!0),i=i.queue,Kd(lv.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||bt!==null&&bt.memoizedState.tag&1){if(n.flags|=2048,sa(9,av.bind(null,n,i,r,e),void 0,null),Ut===null)throw Error(Z(349));Br&30||sv(n,e,r)}return r}function sv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function av(t,e,n,i){e.value=n,e.getSnapshot=i,uv(e)&&cv(t)}function lv(t,e,n){return n(function(){uv(e)&&cv(t)})}function uv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ti(t,n)}catch{return!0}}function cv(t){var e=Di(t,1);e!==null&&Jn(e,t,1,-1)}function gp(t){var e=ai();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:t},e.queue=t,t=t.dispatch=ay.bind(null,ct,t),[e.memoizedState,t]}function sa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function fv(){return kn().memoizedState}function Ml(t,e,n,i){var r=ai();ct.flags|=t,r.memoizedState=sa(1|e,n,void 0,i===void 0?null:i)}function Eu(t,e,n,i){var r=kn();i=i===void 0?null:i;var o=void 0;if(Tt!==null){var s=Tt.memoizedState;if(o=s.destroy,i!==null&&qd(i,s.deps)){r.memoizedState=sa(e,n,o,i);return}}ct.flags|=t,r.memoizedState=sa(1|e,n,o,i)}function vp(t,e){return Ml(8390656,8,t,e)}function Kd(t,e){return Eu(2048,8,t,e)}function dv(t,e){return Eu(4,2,t,e)}function hv(t,e){return Eu(4,4,t,e)}function pv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function mv(t,e,n){return n=n!=null?n.concat([t]):null,Eu(4,4,pv.bind(null,e,t),n)}function Zd(){}function gv(t,e){var n=kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&qd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function vv(t,e){var n=kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&qd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function _v(t,e,n){return Br&21?(ti(n,e)||(n=E0(),ct.lanes|=n,Hr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,an=!0),t.memoizedState=n)}function oy(t,e){var n=Ze;Ze=n!==0&&4>n?n:4,t(!0);var i=sc.transition;sc.transition={};try{t(!1),e()}finally{Ze=n,sc.transition=i}}function xv(){return kn().memoizedState}function sy(t,e,n){var i=ir(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Sv(t))yv(e,n);else if(n=tv(t,e,n,i),n!==null){var r=en();Jn(n,t,i,r),Mv(n,e,i)}}function ay(t,e,n){var i=ir(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sv(t))yv(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,ti(a,s)){var l=e.interleaved;l===null?(r.next=r,Gd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=tv(t,e,r,i),n!==null&&(r=en(),Jn(n,t,i,r),Mv(n,e,i))}}function Sv(t){var e=t.alternate;return t===ct||e!==null&&e===ct}function yv(t,e){Fs=ql=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Mv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Cd(t,n)}}var Yl={readContext:On,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},ly={readContext:On,useCallback:function(t,e){return ai().memoizedState=[t,e===void 0?null:e],t},useContext:On,useEffect:vp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ml(4194308,4,pv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ml(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ml(4,2,t,e)},useMemo:function(t,e){var n=ai();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ai();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=sy.bind(null,ct,t),[i.memoizedState,t]},useRef:function(t){var e=ai();return t={current:t},e.memoizedState=t},useState:gp,useDebugValue:Zd,useDeferredValue:function(t){return ai().memoizedState=t},useTransition:function(){var t=gp(!1),e=t[0];return t=oy.bind(null,t[1]),ai().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ct,r=ai();if(lt){if(n===void 0)throw Error(Z(407));n=n()}else{if(n=e(),Ut===null)throw Error(Z(349));Br&30||sv(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,vp(lv.bind(null,i,o,t),[t]),i.flags|=2048,sa(9,av.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=ai(),e=Ut.identifierPrefix;if(lt){var n=Ai,i=wi;n=(i&~(1<<32-Qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ra++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ry++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},uy={readContext:On,useCallback:gv,useContext:On,useEffect:Kd,useImperativeHandle:mv,useInsertionEffect:dv,useLayoutEffect:hv,useMemo:vv,useReducer:ac,useRef:fv,useState:function(){return ac(oa)},useDebugValue:Zd,useDeferredValue:function(t){var e=kn();return _v(e,Tt.memoizedState,t)},useTransition:function(){var t=ac(oa)[0],e=kn().memoizedState;return[t,e]},useMutableSource:rv,useSyncExternalStore:ov,useId:xv,unstable_isNewReconciler:!1},cy={readContext:On,useCallback:gv,useContext:On,useEffect:Kd,useImperativeHandle:mv,useInsertionEffect:dv,useLayoutEffect:hv,useMemo:vv,useReducer:lc,useRef:fv,useState:function(){return lc(oa)},useDebugValue:Zd,useDeferredValue:function(t){var e=kn();return Tt===null?e.memoizedState=t:_v(e,Tt.memoizedState,t)},useTransition:function(){var t=lc(oa)[0],e=kn().memoizedState;return[t,e]},useMutableSource:rv,useSyncExternalStore:ov,useId:xv,unstable_isNewReconciler:!1};function Wn(t,e){if(t&&t.defaultProps){e=ft({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Cf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ft({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Tu={isMounted:function(t){return(t=t._reactInternals)?Kr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=en(),r=ir(t),o=Pi(i,r);o.payload=e,n!=null&&(o.callback=n),e=tr(t,o,r),e!==null&&(Jn(e,t,r,i),Sl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=en(),r=ir(t),o=Pi(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=tr(t,o,r),e!==null&&(Jn(e,t,r,i),Sl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=en(),i=ir(t),r=Pi(n,i);r.tag=2,e!=null&&(r.callback=e),e=tr(t,r,i),e!==null&&(Jn(e,t,i,n),Sl(e,t,i))}};function _p(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!Qs(n,i)||!Qs(r,o):!0}function Ev(t,e,n){var i=!1,r=ur,o=e.contextType;return typeof o=="object"&&o!==null?o=On(o):(r=cn(e)?kr:Yt.current,i=e.contextTypes,o=(i=i!=null)?Ho(t,r):ur),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Tu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function xp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Tu.enqueueReplaceState(e,e.state,null)}function Pf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Vd(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=On(o):(o=cn(e)?kr:Yt.current,r.context=Ho(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Cf(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Tu.enqueueReplaceState(r,r.state,null),Xl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Xo(t,e){try{var n="",i=e;do n+=kx(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function uc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Lf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var fy=typeof WeakMap=="function"?WeakMap:Map;function Tv(t,e,n){n=Pi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Kl||(Kl=!0,Bf=i),Lf(t,e)},n}function wv(t,e,n){n=Pi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Lf(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Lf(t,e),typeof i!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Sp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new fy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=wy.bind(null,t,e,n),e.then(t,t))}function yp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Mp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Pi(-1,1),e.tag=2,tr(n,e,1))),n.lanes|=1),t)}var dy=Ii.ReactCurrentOwner,an=!1;function Qt(t,e,n,i){e.child=t===null?ev(e,null,n,i):Vo(e,t.child,n,i)}function Ep(t,e,n,i,r){n=n.render;var o=e.ref;return Fo(e,r),i=Yd(t,e,n,i,o,r),n=$d(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ui(t,e,r)):(lt&&n&&Fd(e),e.flags|=1,Qt(t,e,i,r),e.child)}function Tp(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!oh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Av(t,e,o,i,r)):(t=Al(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Qs,n(s,i)&&t.ref===e.ref)return Ui(t,e,r)}return e.flags|=1,t=rr(o,i),t.ref=e.ref,t.return=e,e.child=t}function Av(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(Qs(o,i)&&t.ref===e.ref)if(an=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(an=!0);else return e.lanes=t.lanes,Ui(t,e,r)}return bf(t,e,n,i,r)}function Rv(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(Co,Sn),Sn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,rt(Co,Sn),Sn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,rt(Co,Sn),Sn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,rt(Co,Sn),Sn|=i;return Qt(t,e,r,n),e.child}function Cv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function bf(t,e,n,i,r){var o=cn(n)?kr:Yt.current;return o=Ho(e,o),Fo(e,r),n=Yd(t,e,n,i,o,r),i=$d(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ui(t,e,r)):(lt&&i&&Fd(e),e.flags|=1,Qt(t,e,n,r),e.child)}function wp(t,e,n,i,r){if(cn(n)){var o=!0;Bl(e)}else o=!1;if(Fo(e,r),e.stateNode===null)El(t,e),Ev(e,n,i),Pf(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=On(u):(u=cn(n)?kr:Yt.current,u=Ho(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==u)&&xp(e,s,i,u),Vi=!1;var h=e.memoizedState;s.state=h,Xl(e,i,s,r),l=e.memoizedState,a!==i||h!==l||un.current||Vi?(typeof c=="function"&&(Cf(e,n,c,i),l=e.memoizedState),(a=Vi||_p(e,n,a,i,h,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,nv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Wn(e.type,a),s.props=u,f=e.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=On(l):(l=cn(n)?kr:Yt.current,l=Ho(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||h!==l)&&xp(e,s,i,l),Vi=!1,h=e.memoizedState,s.state=h,Xl(e,i,s,r);var _=e.memoizedState;a!==f||h!==_||un.current||Vi?(typeof m=="function"&&(Cf(e,n,m,i),_=e.memoizedState),(u=Vi||_p(e,n,u,i,h,_,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,_,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,_,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),s.props=i,s.state=_,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Df(t,e,n,i,o,r)}function Df(t,e,n,i,r,o){Cv(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&cp(e,n,!1),Ui(t,e,o);i=e.stateNode,dy.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Vo(e,t.child,null,o),e.child=Vo(e,null,a,o)):Qt(t,e,a,o),e.memoizedState=i.state,r&&cp(e,n,!0),e.child}function Pv(t){var e=t.stateNode;e.pendingContext?up(t,e.pendingContext,e.pendingContext!==e.context):e.context&&up(t,e.context,!1),Wd(t,e.containerInfo)}function Ap(t,e,n,i,r){return Go(),kd(r),e.flags|=256,Qt(t,e,n,i),e.child}var Uf={dehydrated:null,treeContext:null,retryLane:0};function Nf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Lv(t,e,n){var i=e.pendingProps,r=ut.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),rt(ut,r&1),t===null)return Af(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ru(s,i,0,null),t=Ur(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Nf(n),e.memoizedState=Uf,t):Qd(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return hy(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=rr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=rr(a,o):(o=Ur(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?Nf(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Uf,i}return o=t.child,t=o.sibling,i=rr(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Qd(t,e){return e=Ru({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Oa(t,e,n,i){return i!==null&&kd(i),Vo(e,t.child,null,n),t=Qd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hy(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=uc(Error(Z(422))),Oa(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=Ru({mode:"visible",children:i.children},r,0,null),o=Ur(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Vo(e,t.child,null,s),e.child.memoizedState=Nf(s),e.memoizedState=Uf,o);if(!(e.mode&1))return Oa(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(Z(419)),i=uc(o,i,void 0),Oa(t,e,s,i)}if(a=(s&t.childLanes)!==0,an||a){if(i=Ut,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Di(t,r),Jn(i,t,r,-1))}return rh(),i=uc(Error(Z(421))),Oa(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ay.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,yn=er(r.nextSibling),Mn=e,lt=!0,jn=null,t!==null&&(Pn[Ln++]=wi,Pn[Ln++]=Ai,Pn[Ln++]=zr,wi=t.id,Ai=t.overflow,zr=e),e=Qd(e,i.children),e.flags|=4096,e)}function Rp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Rf(t.return,e,n)}function cc(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function bv(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(Qt(t,e,i.children,n),i=ut.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rp(t,n,e);else if(t.tag===19)Rp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(rt(ut,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&jl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),cc(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&jl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}cc(e,!0,n,null,o);break;case"together":cc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function El(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ui(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Z(153));if(e.child!==null){for(t=e.child,n=rr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=rr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function py(t,e,n){switch(e.tag){case 3:Pv(e),Go();break;case 5:iv(e);break;case 1:cn(e.type)&&Bl(e);break;case 4:Wd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;rt(Vl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(rt(ut,ut.current&1),e.flags|=128,null):n&e.child.childLanes?Lv(t,e,n):(rt(ut,ut.current&1),t=Ui(t,e,n),t!==null?t.sibling:null);rt(ut,ut.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return bv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),rt(ut,ut.current),i)break;return null;case 22:case 23:return e.lanes=0,Rv(t,e,n)}return Ui(t,e,n)}var Dv,If,Uv,Nv;Dv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};If=function(){};Uv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,br(hi.current);var o=null;switch(n){case"input":r=nf(t,r),i=nf(t,i),o=[];break;case"select":r=ft({},r,{value:void 0}),i=ft({},i,{value:void 0}),o=[];break;case"textarea":r=sf(t,r),i=sf(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=kl)}lf(n,i);var s;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xs.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ot("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};Nv=function(t,e,n,i){n!==i&&(e.flags|=4)};function ds(t,e){if(!lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function my(t,e,n){var i=e.pendingProps;switch(Od(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return cn(e.type)&&zl(),Vt(e),null;case 3:return i=e.stateNode,Wo(),at(un),at(Yt),jd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ia(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jn!==null&&(Vf(jn),jn=null))),If(t,e),Vt(e),null;case 5:Xd(e);var r=br(ia.current);if(n=e.type,t!==null&&e.stateNode!=null)Uv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Z(166));return Vt(e),null}if(t=br(hi.current),Ia(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[ui]=e,i[ta]=o,t=(e.mode&1)!==0,n){case"dialog":ot("cancel",i),ot("close",i);break;case"iframe":case"object":case"embed":ot("load",i);break;case"video":case"audio":for(r=0;r<Ms.length;r++)ot(Ms[r],i);break;case"source":ot("error",i);break;case"img":case"image":case"link":ot("error",i),ot("load",i);break;case"details":ot("toggle",i);break;case"input":Fh(i,o),ot("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},ot("invalid",i);break;case"textarea":kh(i,o),ot("invalid",i)}lf(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&Na(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Na(i.textContent,a,t),r=["children",""+a]):Xs.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ot("scroll",i)}switch(n){case"input":Aa(i),Oh(i,o,!0);break;case"textarea":Aa(i),zh(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=kl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=l0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[ui]=e,t[ta]=i,Dv(t,e,!1,!1),e.stateNode=t;e:{switch(s=uf(n,i),n){case"dialog":ot("cancel",t),ot("close",t),r=i;break;case"iframe":case"object":case"embed":ot("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ms.length;r++)ot(Ms[r],t);r=i;break;case"source":ot("error",t),r=i;break;case"img":case"image":case"link":ot("error",t),ot("load",t),r=i;break;case"details":ot("toggle",t),r=i;break;case"input":Fh(t,i),r=nf(t,i),ot("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ft({},i,{value:void 0}),ot("invalid",t);break;case"textarea":kh(t,i),r=sf(t,i),ot("invalid",t);break;default:r=i}lf(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?f0(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&u0(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&js(t,l):typeof l=="number"&&js(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Xs.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ot("scroll",t):l!=null&&Md(t,o,l,s))}switch(n){case"input":Aa(t),Oh(t,i,!1);break;case"textarea":Aa(t),zh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+lr(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?Do(t,!!i.multiple,o,!1):i.defaultValue!=null&&Do(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=kl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(t&&e.stateNode!=null)Nv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Z(166));if(n=br(ia.current),br(hi.current),Ia(e)){if(i=e.stateNode,n=e.memoizedProps,i[ui]=e,(o=i.nodeValue!==n)&&(t=Mn,t!==null))switch(t.tag){case 3:Na(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Na(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ui]=e,e.stateNode=i}return Vt(e),null;case 13:if(at(ut),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(lt&&yn!==null&&e.mode&1&&!(e.flags&128))Q0(),Go(),e.flags|=98560,o=!1;else if(o=Ia(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(Z(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(Z(317));o[ui]=e}else Go(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),o=!1}else jn!==null&&(Vf(jn),jn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ut.current&1?wt===0&&(wt=3):rh())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return Wo(),If(t,e),t===null&&Js(e.stateNode.containerInfo),Vt(e),null;case 10:return Hd(e.type._context),Vt(e),null;case 17:return cn(e.type)&&zl(),Vt(e),null;case 19:if(at(ut),o=e.memoizedState,o===null)return Vt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)ds(o,!1);else{if(wt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=jl(t),s!==null){for(e.flags|=128,ds(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return rt(ut,ut.current&1|2),e.child}t=t.sibling}o.tail!==null&&_t()>jo&&(e.flags|=128,i=!0,ds(o,!1),e.lanes=4194304)}else{if(!i)if(t=jl(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ds(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!lt)return Vt(e),null}else 2*_t()-o.renderingStartTime>jo&&n!==1073741824&&(e.flags|=128,i=!0,ds(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=_t(),e.sibling=null,n=ut.current,rt(ut,i?n&1|2:n&1),e):(Vt(e),null);case 22:case 23:return ih(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Sn&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(Z(156,e.tag))}function gy(t,e){switch(Od(e),e.tag){case 1:return cn(e.type)&&zl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Wo(),at(un),at(Yt),jd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Xd(e),null;case 13:if(at(ut),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Z(340));Go()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return at(ut),null;case 4:return Wo(),null;case 10:return Hd(e.type._context),null;case 22:case 23:return ih(),null;case 24:return null;default:return null}}var ka=!1,jt=!1,vy=typeof WeakSet=="function"?WeakSet:Set,de=null;function Ro(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){gt(t,e,i)}else n.current=null}function Ff(t,e,n){try{n()}catch(i){gt(t,e,i)}}var Cp=!1;function _y(t,e){if(xf=Il,t=z0(),Id(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=t,h=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(a=s+r),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===t)break t;if(h===n&&++u===r&&(a=s),h===o&&++c===i&&(l=s),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sf={focusedElem:t,selectionRange:n},Il=!1,de=e;de!==null;)if(e=de,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,de=t;else for(;de!==null;){e=de;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,p=_.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?x:Wn(e.type,x),p);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Z(163))}}catch(S){gt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,de=t;break}de=e.return}return _=Cp,Cp=!1,_}function Os(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&Ff(e,n,o)}r=r.next}while(r!==i)}}function wu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Of(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Iv(t){var e=t.alternate;e!==null&&(t.alternate=null,Iv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ui],delete e[ta],delete e[Ef],delete e[ey],delete e[ty])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Fv(t){return t.tag===5||t.tag===3||t.tag===4}function Pp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Fv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=kl));else if(i!==4&&(t=t.child,t!==null))for(kf(t,e,n),t=t.sibling;t!==null;)kf(t,e,n),t=t.sibling}function zf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(zf(t,e,n),t=t.sibling;t!==null;)zf(t,e,n),t=t.sibling}var Nt=null,Xn=!1;function Fi(t,e,n){for(n=n.child;n!==null;)Ov(t,e,n),n=n.sibling}function Ov(t,e,n){if(di&&typeof di.onCommitFiberUnmount=="function")try{di.onCommitFiberUnmount(vu,n)}catch{}switch(n.tag){case 5:jt||Ro(n,e);case 6:var i=Nt,r=Xn;Nt=null,Fi(t,e,n),Nt=i,Xn=r,Nt!==null&&(Xn?(t=Nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(Xn?(t=Nt,n=n.stateNode,t.nodeType===8?ic(t.parentNode,n):t.nodeType===1&&ic(t,n),Ks(t)):ic(Nt,n.stateNode));break;case 4:i=Nt,r=Xn,Nt=n.stateNode.containerInfo,Xn=!0,Fi(t,e,n),Nt=i,Xn=r;break;case 0:case 11:case 14:case 15:if(!jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ff(n,e,s),r=r.next}while(r!==i)}Fi(t,e,n);break;case 1:if(!jt&&(Ro(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){gt(n,e,a)}Fi(t,e,n);break;case 21:Fi(t,e,n);break;case 22:n.mode&1?(jt=(i=jt)||n.memoizedState!==null,Fi(t,e,n),jt=i):Fi(t,e,n);break;default:Fi(t,e,n)}}function Lp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new vy),e.forEach(function(i){var r=Ry.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Bn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Nt=a.stateNode,Xn=!1;break e;case 3:Nt=a.stateNode.containerInfo,Xn=!0;break e;case 4:Nt=a.stateNode.containerInfo,Xn=!0;break e}a=a.return}if(Nt===null)throw Error(Z(160));Ov(o,s,r),Nt=null,Xn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){gt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)kv(e,t),e=e.sibling}function kv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bn(e,t),si(t),i&4){try{Os(3,t,t.return),wu(3,t)}catch(x){gt(t,t.return,x)}try{Os(5,t,t.return)}catch(x){gt(t,t.return,x)}}break;case 1:Bn(e,t),si(t),i&512&&n!==null&&Ro(n,n.return);break;case 5:if(Bn(e,t),si(t),i&512&&n!==null&&Ro(n,n.return),t.flags&32){var r=t.stateNode;try{js(r,"")}catch(x){gt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&s0(r,o),uf(a,s);var u=uf(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?f0(r,f):c==="dangerouslySetInnerHTML"?u0(r,f):c==="children"?js(r,f):Md(r,c,f,u)}switch(a){case"input":rf(r,o);break;case"textarea":a0(r,o);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?Do(r,!!o.multiple,m,!1):h!==!!o.multiple&&(o.defaultValue!=null?Do(r,!!o.multiple,o.defaultValue,!0):Do(r,!!o.multiple,o.multiple?[]:"",!1))}r[ta]=o}catch(x){gt(t,t.return,x)}}break;case 6:if(Bn(e,t),si(t),i&4){if(t.stateNode===null)throw Error(Z(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(x){gt(t,t.return,x)}}break;case 3:if(Bn(e,t),si(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ks(e.containerInfo)}catch(x){gt(t,t.return,x)}break;case 4:Bn(e,t),si(t);break;case 13:Bn(e,t),si(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(th=_t())),i&4&&Lp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(jt=(u=jt)||c,Bn(e,t),jt=u):Bn(e,t),si(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(de=t,c=t.child;c!==null;){for(f=de=c;de!==null;){switch(h=de,m=h.child,h.tag){case 0:case 11:case 14:case 15:Os(4,h,h.return);break;case 1:Ro(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){gt(i,n,x)}}break;case 5:Ro(h,h.return);break;case 22:if(h.memoizedState!==null){Dp(f);continue}}m!==null?(m.return=h,de=m):Dp(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=c0("display",s))}catch(x){gt(t,t.return,x)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){gt(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Bn(e,t),si(t),i&4&&Lp(t);break;case 21:break;default:Bn(e,t),si(t)}}function si(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Fv(n)){var i=n;break e}n=n.return}throw Error(Z(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(js(r,""),i.flags&=-33);var o=Pp(t);zf(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=Pp(t);kf(t,a,s);break;default:throw Error(Z(161))}}catch(l){gt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function xy(t,e,n){de=t,zv(t)}function zv(t,e,n){for(var i=(t.mode&1)!==0;de!==null;){var r=de,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||ka;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||jt;a=ka;var u=jt;if(ka=s,(jt=l)&&!u)for(de=r;de!==null;)s=de,l=s.child,s.tag===22&&s.memoizedState!==null?Up(r):l!==null?(l.return=s,de=l):Up(r);for(;o!==null;)de=o,zv(o),o=o.sibling;de=r,ka=a,jt=u}bp(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,de=o):bp(t)}}function bp(t){for(;de!==null;){var e=de;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||wu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Wn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&mp(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}mp(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ks(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Z(163))}jt||e.flags&512&&Of(e)}catch(h){gt(e,e.return,h)}}if(e===t){de=null;break}if(n=e.sibling,n!==null){n.return=e.return,de=n;break}de=e.return}}function Dp(t){for(;de!==null;){var e=de;if(e===t){de=null;break}var n=e.sibling;if(n!==null){n.return=e.return,de=n;break}de=e.return}}function Up(t){for(;de!==null;){var e=de;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{wu(4,e)}catch(l){gt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){gt(e,r,l)}}var o=e.return;try{Of(e)}catch(l){gt(e,o,l)}break;case 5:var s=e.return;try{Of(e)}catch(l){gt(e,s,l)}}}catch(l){gt(e,e.return,l)}if(e===t){de=null;break}var a=e.sibling;if(a!==null){a.return=e.return,de=a;break}de=e.return}}var Sy=Math.ceil,$l=Ii.ReactCurrentDispatcher,Jd=Ii.ReactCurrentOwner,Fn=Ii.ReactCurrentBatchConfig,Xe=0,Ut=null,Mt=null,kt=0,Sn=0,Co=hr(0),wt=0,aa=null,Hr=0,Au=0,eh=0,ks=null,on=null,th=0,jo=1/0,Mi=null,Kl=!1,Bf=null,nr=null,za=!1,Yi=null,Zl=0,zs=0,Hf=null,Tl=-1,wl=0;function en(){return Xe&6?_t():Tl!==-1?Tl:Tl=_t()}function ir(t){return t.mode&1?Xe&2&&kt!==0?kt&-kt:iy.transition!==null?(wl===0&&(wl=E0()),wl):(t=Ze,t!==0||(t=window.event,t=t===void 0?16:L0(t.type)),t):1}function Jn(t,e,n,i){if(50<zs)throw zs=0,Hf=null,Error(Z(185));pa(t,n,i),(!(Xe&2)||t!==Ut)&&(t===Ut&&(!(Xe&2)&&(Au|=n),wt===4&&Xi(t,kt)),fn(t,i),n===1&&Xe===0&&!(e.mode&1)&&(jo=_t()+500,Mu&&pr()))}function fn(t,e){var n=t.callbackNode;iS(t,e);var i=Nl(t,t===Ut?kt:0);if(i===0)n!==null&&Gh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Gh(n),e===1)t.tag===0?ny(Np.bind(null,t)):$0(Np.bind(null,t)),QS(function(){!(Xe&6)&&pr()}),n=null;else{switch(T0(i)){case 1:n=Rd;break;case 4:n=y0;break;case 16:n=Ul;break;case 536870912:n=M0;break;default:n=Ul}n=qv(n,Bv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Bv(t,e){if(Tl=-1,wl=0,Xe&6)throw Error(Z(327));var n=t.callbackNode;if(Oo()&&t.callbackNode!==n)return null;var i=Nl(t,t===Ut?kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ql(t,i);else{e=i;var r=Xe;Xe|=2;var o=Gv();(Ut!==t||kt!==e)&&(Mi=null,jo=_t()+500,Dr(t,e));do try{Ey();break}catch(a){Hv(t,a)}while(1);Bd(),$l.current=o,Xe=r,Mt!==null?e=0:(Ut=null,kt=0,e=wt)}if(e!==0){if(e===2&&(r=pf(t),r!==0&&(i=r,e=Gf(t,r))),e===1)throw n=aa,Dr(t,0),Xi(t,i),fn(t,_t()),n;if(e===6)Xi(t,i);else{if(r=t.current.alternate,!(i&30)&&!yy(r)&&(e=Ql(t,i),e===2&&(o=pf(t),o!==0&&(i=o,e=Gf(t,o))),e===1))throw n=aa,Dr(t,0),Xi(t,i),fn(t,_t()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Z(345));case 2:Er(t,on,Mi);break;case 3:if(Xi(t,i),(i&130023424)===i&&(e=th+500-_t(),10<e)){if(Nl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){en(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Mf(Er.bind(null,t,on,Mi),e);break}Er(t,on,Mi);break;case 4:if(Xi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-Qn(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=_t()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Sy(i/1960))-i,10<i){t.timeoutHandle=Mf(Er.bind(null,t,on,Mi),i);break}Er(t,on,Mi);break;case 5:Er(t,on,Mi);break;default:throw Error(Z(329))}}}return fn(t,_t()),t.callbackNode===n?Bv.bind(null,t):null}function Gf(t,e){var n=ks;return t.current.memoizedState.isDehydrated&&(Dr(t,e).flags|=256),t=Ql(t,e),t!==2&&(e=on,on=n,e!==null&&Vf(e)),t}function Vf(t){on===null?on=t:on.push.apply(on,t)}function yy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!ti(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xi(t,e){for(e&=~eh,e&=~Au,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qn(e),i=1<<n;t[n]=-1,e&=~i}}function Np(t){if(Xe&6)throw Error(Z(327));Oo();var e=Nl(t,0);if(!(e&1))return fn(t,_t()),null;var n=Ql(t,e);if(t.tag!==0&&n===2){var i=pf(t);i!==0&&(e=i,n=Gf(t,i))}if(n===1)throw n=aa,Dr(t,0),Xi(t,e),fn(t,_t()),n;if(n===6)throw Error(Z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Er(t,on,Mi),fn(t,_t()),null}function nh(t,e){var n=Xe;Xe|=1;try{return t(e)}finally{Xe=n,Xe===0&&(jo=_t()+500,Mu&&pr())}}function Gr(t){Yi!==null&&Yi.tag===0&&!(Xe&6)&&Oo();var e=Xe;Xe|=1;var n=Fn.transition,i=Ze;try{if(Fn.transition=null,Ze=1,t)return t()}finally{Ze=i,Fn.transition=n,Xe=e,!(Xe&6)&&pr()}}function ih(){Sn=Co.current,at(Co)}function Dr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ZS(n)),Mt!==null)for(n=Mt.return;n!==null;){var i=n;switch(Od(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&zl();break;case 3:Wo(),at(un),at(Yt),jd();break;case 5:Xd(i);break;case 4:Wo();break;case 13:at(ut);break;case 19:at(ut);break;case 10:Hd(i.type._context);break;case 22:case 23:ih()}n=n.return}if(Ut=t,Mt=t=rr(t.current,null),kt=Sn=e,wt=0,aa=null,eh=Au=Hr=0,on=ks=null,Lr!==null){for(e=0;e<Lr.length;e++)if(n=Lr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}Lr=null}return t}function Hv(t,e){do{var n=Mt;try{if(Bd(),yl.current=Yl,ql){for(var i=ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ql=!1}if(Br=0,bt=Tt=ct=null,Fs=!1,ra=0,Jd.current=null,n===null||n.return===null){wt=1,aa=e,Mt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=kt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=yp(s);if(m!==null){m.flags&=-257,Mp(m,s,a,o,e),m.mode&1&&Sp(o,u,e),e=m,l=u;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){Sp(o,u,e),rh();break e}l=Error(Z(426))}}else if(lt&&a.mode&1){var p=yp(s);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Mp(p,s,a,o,e),kd(Xo(l,a));break e}}o=l=Xo(l,a),wt!==4&&(wt=2),ks===null?ks=[o]:ks.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var d=Tv(o,l,e);pp(o,d);break e;case 1:a=l;var v=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(nr===null||!nr.has(g)))){o.flags|=65536,e&=-e,o.lanes|=e;var S=wv(o,a,e);pp(o,S);break e}}o=o.return}while(o!==null)}Wv(n)}catch(M){e=M,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(1)}function Gv(){var t=$l.current;return $l.current=Yl,t===null?Yl:t}function rh(){(wt===0||wt===3||wt===2)&&(wt=4),Ut===null||!(Hr&268435455)&&!(Au&268435455)||Xi(Ut,kt)}function Ql(t,e){var n=Xe;Xe|=2;var i=Gv();(Ut!==t||kt!==e)&&(Mi=null,Dr(t,e));do try{My();break}catch(r){Hv(t,r)}while(1);if(Bd(),Xe=n,$l.current=i,Mt!==null)throw Error(Z(261));return Ut=null,kt=0,wt}function My(){for(;Mt!==null;)Vv(Mt)}function Ey(){for(;Mt!==null&&!Yx();)Vv(Mt)}function Vv(t){var e=jv(t.alternate,t,Sn);t.memoizedProps=t.pendingProps,e===null?Wv(t):Mt=e,Jd.current=null}function Wv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=gy(n,e),n!==null){n.flags&=32767,Mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{wt=6,Mt=null;return}}else if(n=my(n,e,Sn),n!==null){Mt=n;return}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=t}while(e!==null);wt===0&&(wt=5)}function Er(t,e,n){var i=Ze,r=Fn.transition;try{Fn.transition=null,Ze=1,Ty(t,e,n,i)}finally{Fn.transition=r,Ze=i}return null}function Ty(t,e,n,i){do Oo();while(Yi!==null);if(Xe&6)throw Error(Z(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Z(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(rS(t,o),t===Ut&&(Mt=Ut=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||za||(za=!0,qv(Ul,function(){return Oo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Fn.transition,Fn.transition=null;var s=Ze;Ze=1;var a=Xe;Xe|=4,Jd.current=null,_y(t,n),kv(n,t),WS(Sf),Il=!!xf,Sf=xf=null,t.current=n,xy(n),$x(),Xe=a,Ze=s,Fn.transition=o}else t.current=n;if(za&&(za=!1,Yi=t,Zl=r),o=t.pendingLanes,o===0&&(nr=null),Qx(n.stateNode),fn(t,_t()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Kl)throw Kl=!1,t=Bf,Bf=null,t;return Zl&1&&t.tag!==0&&Oo(),o=t.pendingLanes,o&1?t===Hf?zs++:(zs=0,Hf=t):zs=0,pr(),null}function Oo(){if(Yi!==null){var t=T0(Zl),e=Fn.transition,n=Ze;try{if(Fn.transition=null,Ze=16>t?16:t,Yi===null)var i=!1;else{if(t=Yi,Yi=null,Zl=0,Xe&6)throw Error(Z(331));var r=Xe;for(Xe|=4,de=t.current;de!==null;){var o=de,s=o.child;if(de.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(de=u;de!==null;){var c=de;switch(c.tag){case 0:case 11:case 15:Os(8,c,o)}var f=c.child;if(f!==null)f.return=c,de=f;else for(;de!==null;){c=de;var h=c.sibling,m=c.return;if(Iv(c),c===u){de=null;break}if(h!==null){h.return=m,de=h;break}de=m}}}var _=o.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var p=x.sibling;x.sibling=null,x=p}while(x!==null)}}de=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,de=s;else e:for(;de!==null;){if(o=de,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Os(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,de=d;break e}de=o.return}}var v=t.current;for(de=v;de!==null;){s=de;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,de=g;else e:for(s=v;de!==null;){if(a=de,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:wu(9,a)}}catch(M){gt(a,a.return,M)}if(a===s){de=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,de=S;break e}de=a.return}}if(Xe=r,pr(),di&&typeof di.onPostCommitFiberRoot=="function")try{di.onPostCommitFiberRoot(vu,t)}catch{}i=!0}return i}finally{Ze=n,Fn.transition=e}}return!1}function Ip(t,e,n){e=Xo(n,e),e=Tv(t,e,1),t=tr(t,e,1),e=en(),t!==null&&(pa(t,1,e),fn(t,e))}function gt(t,e,n){if(t.tag===3)Ip(t,t,n);else for(;e!==null;){if(e.tag===3){Ip(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(nr===null||!nr.has(i))){t=Xo(n,t),t=wv(e,t,1),e=tr(e,t,1),t=en(),e!==null&&(pa(e,1,t),fn(e,t));break}}e=e.return}}function wy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=en(),t.pingedLanes|=t.suspendedLanes&n,Ut===t&&(kt&n)===n&&(wt===4||wt===3&&(kt&130023424)===kt&&500>_t()-th?Dr(t,0):eh|=n),fn(t,e)}function Xv(t,e){e===0&&(t.mode&1?(e=Pa,Pa<<=1,!(Pa&130023424)&&(Pa=4194304)):e=1);var n=en();t=Di(t,e),t!==null&&(pa(t,e,n),fn(t,n))}function Ay(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Xv(t,n)}function Ry(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Z(314))}i!==null&&i.delete(e),Xv(t,n)}var jv;jv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||un.current)an=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return an=!1,py(t,e,n);an=!!(t.flags&131072)}else an=!1,lt&&e.flags&1048576&&K0(e,Gl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;El(t,e),t=e.pendingProps;var r=Ho(e,Yt.current);Fo(e,n),r=Yd(null,e,i,t,r,n);var o=$d();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,cn(i)?(o=!0,Bl(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Vd(e),r.updater=Tu,e.stateNode=r,r._reactInternals=e,Pf(e,i,t,n),e=Df(null,e,i,!0,o,n)):(e.tag=0,lt&&o&&Fd(e),Qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(El(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Py(i),t=Wn(i,t),r){case 0:e=bf(null,e,i,t,n);break e;case 1:e=wp(null,e,i,t,n);break e;case 11:e=Ep(null,e,i,t,n);break e;case 14:e=Tp(null,e,i,Wn(i.type,t),n);break e}throw Error(Z(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),bf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),wp(t,e,i,r,n);case 3:e:{if(Pv(e),t===null)throw Error(Z(387));i=e.pendingProps,o=e.memoizedState,r=o.element,nv(t,e),Xl(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=Xo(Error(Z(423)),e),e=Ap(t,e,i,n,r);break e}else if(i!==r){r=Xo(Error(Z(424)),e),e=Ap(t,e,i,n,r);break e}else for(yn=er(e.stateNode.containerInfo.firstChild),Mn=e,lt=!0,jn=null,n=ev(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Go(),i===r){e=Ui(t,e,n);break e}Qt(t,e,i,n)}e=e.child}return e;case 5:return iv(e),t===null&&Af(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,yf(i,r)?s=null:o!==null&&yf(i,o)&&(e.flags|=32),Cv(t,e),Qt(t,e,s,n),e.child;case 6:return t===null&&Af(e),null;case 13:return Lv(t,e,n);case 4:return Wd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Vo(e,null,i,n):Qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),Ep(t,e,i,r,n);case 7:return Qt(t,e,e.pendingProps,n),e.child;case 8:return Qt(t,e,e.pendingProps.children,n),e.child;case 12:return Qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,rt(Vl,i._currentValue),i._currentValue=s,o!==null)if(ti(o.value,s)){if(o.children===r.children&&!un.current){e=Ui(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Pi(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Rf(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(Z(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Rf(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Fo(e,n),r=On(r),i=i(r),e.flags|=1,Qt(t,e,i,n),e.child;case 14:return i=e.type,r=Wn(i,e.pendingProps),r=Wn(i.type,r),Tp(t,e,i,r,n);case 15:return Av(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),El(t,e),e.tag=1,cn(i)?(t=!0,Bl(e)):t=!1,Fo(e,n),Ev(e,i,r),Pf(e,i,r,n),Df(null,e,i,!0,t,n);case 19:return bv(t,e,n);case 22:return Rv(t,e,n)}throw Error(Z(156,e.tag))};function qv(t,e){return S0(t,e)}function Cy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(t,e,n,i){return new Cy(t,e,n,i)}function oh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Py(t){if(typeof t=="function")return oh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Td)return 11;if(t===wd)return 14}return 2}function rr(t,e){var n=t.alternate;return n===null?(n=Nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Al(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")oh(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case _o:return Ur(n.children,r,o,e);case Ed:s=8,r|=8;break;case Qc:return t=Nn(12,n,e,r|2),t.elementType=Qc,t.lanes=o,t;case Jc:return t=Nn(13,n,e,r),t.elementType=Jc,t.lanes=o,t;case ef:return t=Nn(19,n,e,r),t.elementType=ef,t.lanes=o,t;case i0:return Ru(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case t0:s=10;break e;case n0:s=9;break e;case Td:s=11;break e;case wd:s=14;break e;case Gi:s=16,i=null;break e}throw Error(Z(130,t==null?t:typeof t,""))}return e=Nn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function Ur(t,e,n,i){return t=Nn(7,t,i,e),t.lanes=n,t}function Ru(t,e,n,i){return t=Nn(22,t,i,e),t.elementType=i0,t.lanes=n,t.stateNode={isHidden:!1},t}function fc(t,e,n){return t=Nn(6,t,null,e),t.lanes=n,t}function dc(t,e,n){return e=Nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ly(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ju(0),this.expirationTimes=ju(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ju(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function sh(t,e,n,i,r,o,s,a,l){return t=new Ly(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Nn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vd(o),t}function by(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Yv(t){if(!t)return ur;t=t._reactInternals;e:{if(Kr(t)!==t||t.tag!==1)throw Error(Z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(cn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Z(171))}if(t.tag===1){var n=t.type;if(cn(n))return Y0(t,n,e)}return e}function $v(t,e,n,i,r,o,s,a,l){return t=sh(n,i,!0,t,r,o,s,a,l),t.context=Yv(null),n=t.current,i=en(),r=ir(n),o=Pi(i,r),o.callback=e??null,tr(n,o,r),t.current.lanes=r,pa(t,r,i),fn(t,i),t}function Cu(t,e,n,i){var r=e.current,o=en(),s=ir(r);return n=Yv(n),e.context===null?e.context=n:e.pendingContext=n,e=Pi(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=tr(r,e,s),t!==null&&(Jn(t,r,s,o),Sl(t,r,s)),s}function Jl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Fp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ah(t,e){Fp(t,e),(t=t.alternate)&&Fp(t,e)}function Dy(){return null}var Kv=typeof reportError=="function"?reportError:function(t){console.error(t)};function lh(t){this._internalRoot=t}Pu.prototype.render=lh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Z(409));Cu(t,e,null,null)};Pu.prototype.unmount=lh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Gr(function(){Cu(null,t,null,null)}),e[bi]=null}};function Pu(t){this._internalRoot=t}Pu.prototype.unstable_scheduleHydration=function(t){if(t){var e=R0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wi.length&&e!==0&&e<Wi[n].priority;n++);Wi.splice(n,0,t),n===0&&P0(t)}};function uh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Lu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Op(){}function Uy(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=Jl(s);o.call(u)}}var s=$v(e,i,t,0,null,!1,!1,"",Op);return t._reactRootContainer=s,t[bi]=s.current,Js(t.nodeType===8?t.parentNode:t),Gr(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Jl(l);a.call(u)}}var l=sh(t,0,!1,null,null,!1,!1,"",Op);return t._reactRootContainer=l,t[bi]=l.current,Js(t.nodeType===8?t.parentNode:t),Gr(function(){Cu(e,l,n,i)}),l}function bu(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=Jl(s);a.call(l)}}Cu(e,s,t,r)}else s=Uy(n,e,t,r,i);return Jl(s)}w0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ys(e.pendingLanes);n!==0&&(Cd(e,n|1),fn(e,_t()),!(Xe&6)&&(jo=_t()+500,pr()))}break;case 13:Gr(function(){var i=Di(t,1);if(i!==null){var r=en();Jn(i,t,1,r)}}),ah(t,1)}};Pd=function(t){if(t.tag===13){var e=Di(t,134217728);if(e!==null){var n=en();Jn(e,t,134217728,n)}ah(t,134217728)}};A0=function(t){if(t.tag===13){var e=ir(t),n=Di(t,e);if(n!==null){var i=en();Jn(n,t,e,i)}ah(t,e)}};R0=function(){return Ze};C0=function(t,e){var n=Ze;try{return Ze=t,e()}finally{Ze=n}};ff=function(t,e,n){switch(e){case"input":if(rf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=yu(i);if(!r)throw Error(Z(90));o0(i),rf(i,r)}}}break;case"textarea":a0(t,n);break;case"select":e=n.value,e!=null&&Do(t,!!n.multiple,e,!1)}};p0=nh;m0=Gr;var Ny={usingClientEntryPoint:!1,Events:[ga,Mo,yu,d0,h0,nh]},hs={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Iy={bundleType:hs.bundleType,version:hs.version,rendererPackageName:hs.rendererPackageName,rendererConfig:hs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ii.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=_0(t),t===null?null:t.stateNode},findFiberByHostInstance:hs.findFiberByHostInstance||Dy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ba=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ba.isDisabled&&Ba.supportsFiber)try{vu=Ba.inject(Iy),di=Ba}catch{}}wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ny;wn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!uh(e))throw Error(Z(200));return by(t,e,null,n)};wn.createRoot=function(t,e){if(!uh(t))throw Error(Z(299));var n=!1,i="",r=Kv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=sh(t,1,!1,null,null,n,!1,i,r),t[bi]=e.current,Js(t.nodeType===8?t.parentNode:t),new lh(e)};wn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Z(188)):(t=Object.keys(t).join(","),Error(Z(268,t)));return t=_0(e),t=t===null?null:t.stateNode,t};wn.flushSync=function(t){return Gr(t)};wn.hydrate=function(t,e,n){if(!Lu(e))throw Error(Z(200));return bu(null,t,e,!0,n)};wn.hydrateRoot=function(t,e,n){if(!uh(t))throw Error(Z(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=Kv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=$v(e,null,t,1,n??null,r,!1,o,s),t[bi]=e.current,Js(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Pu(e)};wn.render=function(t,e,n){if(!Lu(e))throw Error(Z(200));return bu(null,t,e,!1,n)};wn.unmountComponentAtNode=function(t){if(!Lu(t))throw Error(Z(40));return t._reactRootContainer?(Gr(function(){bu(null,null,t,!1,function(){t._reactRootContainer=null,t[bi]=null})}),!0):!1};wn.unstable_batchedUpdates=nh;wn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Lu(n))throw Error(Z(200));if(t==null||t._reactInternals===void 0)throw Error(Z(38));return bu(t,e,n,!1,i)};wn.version="18.3.1-next-f1338f8080-20240426";function Zv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zv)}catch(t){console.error(t)}}Zv(),Zg.exports=wn;var Fy=Zg.exports,kp=Fy;Kc.createRoot=kp.createRoot,Kc.hydrateRoot=kp.hydrateRoot;class Vr{constructor(){this._partials=new Float64Array(32),this._n=0}add(e){const n=this._partials;let i=0;for(let r=0;r<this._n&&r<32;r++){const o=n[r],s=e+o,a=Math.abs(e)<Math.abs(o)?e-(s-o):o-(s-e);a&&(n[i++]=a),e=s}return n[i]=e,this._n=i+1,this}valueOf(){const e=this._partials;let n=this._n,i,r,o,s=0;if(n>0){for(s=e[--n];n>0&&(i=s,r=e[--n],s=i+r,o=r-(s-i),!o););n>0&&(o<0&&e[n-1]<0||o>0&&e[n-1]>0)&&(r=o*2,i=s+r,r==i-s&&(s=i))}return s}}function*Oy(t){for(const e of t)yield*e}function Qv(t){return Array.from(Oy(t))}function Po(t,e,n){t=+t,e=+e,n=(r=arguments.length)<2?(e=t,t=0,1):r<3?1:+n;for(var i=-1,r=Math.max(0,Math.ceil((e-t)/n))|0,o=new Array(r);++i<r;)o[i]=t+i*n;return o}var ze=1e-6,Jv=1e-12,Ge=Math.PI,ln=Ge/2,zp=Ge/4,Tn=Ge*2,It=180/Ge,it=Ge/180,Ke=Math.abs,e_=Math.atan,Wr=Math.atan2,tt=Math.cos,Ha=Math.ceil,ky=Math.exp,zy=Math.log,Ye=Math.sin,Rl=Math.sign||function(t){return t>0?1:t<0?-1:0},ni=Math.sqrt,By=Math.tan;function Hy(t){return t>1?0:t<-1?Ge:Math.acos(t)}function ii(t){return t>1?ln:t<-1?-ln:Math.asin(t)}function In(){}function eu(t,e){t&&Hp.hasOwnProperty(t.type)&&Hp[t.type](t,e)}var Bp={Feature:function(t,e){eu(t.geometry,e)},FeatureCollection:function(t,e){for(var n=t.features,i=-1,r=n.length;++i<r;)eu(n[i].geometry,e)}},Hp={Sphere:function(t,e){e.sphere()},Point:function(t,e){t=t.coordinates,e.point(t[0],t[1],t[2])},MultiPoint:function(t,e){for(var n=t.coordinates,i=-1,r=n.length;++i<r;)t=n[i],e.point(t[0],t[1],t[2])},LineString:function(t,e){Wf(t.coordinates,e,0)},MultiLineString:function(t,e){for(var n=t.coordinates,i=-1,r=n.length;++i<r;)Wf(n[i],e,0)},Polygon:function(t,e){Gp(t.coordinates,e)},MultiPolygon:function(t,e){for(var n=t.coordinates,i=-1,r=n.length;++i<r;)Gp(n[i],e)},GeometryCollection:function(t,e){for(var n=t.geometries,i=-1,r=n.length;++i<r;)eu(n[i],e)}};function Wf(t,e,n){var i=-1,r=t.length-n,o;for(e.lineStart();++i<r;)o=t[i],e.point(o[0],o[1],o[2]);e.lineEnd()}function Gp(t,e){var n=-1,i=t.length;for(e.polygonStart();++n<i;)Wf(t[n],e,1);e.polygonEnd()}function go(t,e){t&&Bp.hasOwnProperty(t.type)?Bp[t.type](t,e):eu(t,e)}function Xf(t){return[Wr(t[1],t[0]),ii(t[2])]}function qo(t){var e=t[0],n=t[1],i=tt(n);return[i*tt(e),i*Ye(e),Ye(n)]}function Ga(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function tu(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}function hc(t,e){t[0]+=e[0],t[1]+=e[1],t[2]+=e[2]}function Va(t,e){return[t[0]*e,t[1]*e,t[2]*e]}function jf(t){var e=ni(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]/=e,t[1]/=e,t[2]/=e}function Qr(t){return function(){return t}}function qf(t,e){function n(i,r){return i=t(i,r),e(i[0],i[1])}return t.invert&&e.invert&&(n.invert=function(i,r){return i=e.invert(i,r),i&&t.invert(i[0],i[1])}),n}function Yf(t,e){return Ke(t)>Ge&&(t-=Math.round(t/Tn)*Tn),[t,e]}Yf.invert=Yf;function ch(t,e,n){return(t%=Tn)?e||n?qf(Wp(t),Xp(e,n)):Wp(t):e||n?Xp(e,n):Yf}function Vp(t){return function(e,n){return e+=t,Ke(e)>Ge&&(e-=Math.round(e/Tn)*Tn),[e,n]}}function Wp(t){var e=Vp(t);return e.invert=Vp(-t),e}function Xp(t,e){var n=tt(t),i=Ye(t),r=tt(e),o=Ye(e);function s(a,l){var u=tt(l),c=tt(a)*u,f=Ye(a)*u,h=Ye(l),m=h*n+c*i;return[Wr(f*r-m*o,c*n-h*i),ii(m*r+f*o)]}return s.invert=function(a,l){var u=tt(l),c=tt(a)*u,f=Ye(a)*u,h=Ye(l),m=h*r-f*o;return[Wr(f*r+h*o,c*n+m*i),ii(m*n-c*i)]},s}function Gy(t){t=ch(t[0]*it,t[1]*it,t.length>2?t[2]*it:0);function e(n){return n=t(n[0]*it,n[1]*it),n[0]*=It,n[1]*=It,n}return e.invert=function(n){return n=t.invert(n[0]*it,n[1]*it),n[0]*=It,n[1]*=It,n},e}function t_(t,e,n,i,r,o){if(n){var s=tt(e),a=Ye(e),l=i*n;r==null?(r=e+i*Tn,o=e-l/2):(r=jp(s,r),o=jp(s,o),(i>0?r<o:r>o)&&(r+=i*Tn));for(var u,c=r;i>0?c>o:c<o;c-=l)u=Xf([s,-a*tt(c),-a*Ye(c)]),t.point(u[0],u[1])}}function jp(t,e){e=qo(e),e[0]-=t,jf(e);var n=Hy(-e[1]);return((-e[2]<0?-n:n)+Tn-ze)%Tn}function Vy(){var t=Qr([0,0]),e=Qr(90),n=Qr(2),i,r,o={point:s};function s(l,u){i.push(l=r(l,u)),l[0]*=It,l[1]*=It}function a(){var l=t.apply(this,arguments),u=e.apply(this,arguments)*it,c=n.apply(this,arguments)*it;return i=[],r=ch(-l[0]*it,-l[1]*it,0).invert,t_(o,u,c,1),l={type:"Polygon",coordinates:[i]},i=r=null,l}return a.center=function(l){return arguments.length?(t=typeof l=="function"?l:Qr([+l[0],+l[1]]),a):t},a.radius=function(l){return arguments.length?(e=typeof l=="function"?l:Qr(+l),a):e},a.precision=function(l){return arguments.length?(n=typeof l=="function"?l:Qr(+l),a):n},a}function n_(){var t=[],e;return{point:function(n,i,r){e.push([n,i,r])},lineStart:function(){t.push(e=[])},lineEnd:In,rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))},result:function(){var n=t;return t=[],e=null,n}}}function Cl(t,e){return Ke(t[0]-e[0])<ze&&Ke(t[1]-e[1])<ze}function Wa(t,e,n,i){this.x=t,this.z=e,this.o=n,this.e=i,this.v=!1,this.n=this.p=null}function i_(t,e,n,i,r){var o=[],s=[],a,l;if(t.forEach(function(_){if(!((x=_.length-1)<=0)){var x,p=_[0],d=_[x],v;if(Cl(p,d)){if(!p[2]&&!d[2]){for(r.lineStart(),a=0;a<x;++a)r.point((p=_[a])[0],p[1]);r.lineEnd();return}d[0]+=2*ze}o.push(v=new Wa(p,_,null,!0)),s.push(v.o=new Wa(p,null,v,!1)),o.push(v=new Wa(d,_,null,!1)),s.push(v.o=new Wa(d,null,v,!0))}}),!!o.length){for(s.sort(e),qp(o),qp(s),a=0,l=s.length;a<l;++a)s[a].e=n=!n;for(var u=o[0],c,f;;){for(var h=u,m=!0;h.v;)if((h=h.n)===u)return;c=h.z,r.lineStart();do{if(h.v=h.o.v=!0,h.e){if(m)for(a=0,l=c.length;a<l;++a)r.point((f=c[a])[0],f[1]);else i(h.x,h.n.x,1,r);h=h.n}else{if(m)for(c=h.p.z,a=c.length-1;a>=0;--a)r.point((f=c[a])[0],f[1]);else i(h.x,h.p.x,-1,r);h=h.p}h=h.o,c=h.z,m=!m}while(!h.v);r.lineEnd()}}}function qp(t){if(e=t.length){for(var e,n=0,i=t[0],r;++n<e;)i.n=r=t[n],r.p=i,i=r;i.n=r=t[0],r.p=i}}function pc(t){return Ke(t[0])<=Ge?t[0]:Rl(t[0])*((Ke(t[0])+Ge)%Tn-Ge)}function Wy(t,e){var n=pc(e),i=e[1],r=Ye(i),o=[Ye(n),-tt(n),0],s=0,a=0,l=new Vr;r===1?i=ln+ze:r===-1&&(i=-ln-ze);for(var u=0,c=t.length;u<c;++u)if(h=(f=t[u]).length)for(var f,h,m=f[h-1],_=pc(m),x=m[1]/2+zp,p=Ye(x),d=tt(x),v=0;v<h;++v,_=S,p=T,d=R,m=g){var g=f[v],S=pc(g),M=g[1]/2+zp,T=Ye(M),R=tt(M),L=S-_,y=L>=0?1:-1,A=y*L,I=A>Ge,Y=p*T;if(l.add(Wr(Y*y*Ye(A),d*R+Y*tt(A))),s+=I?L+y*Tn:L,I^_>=n^S>=n){var $=tu(qo(m),qo(g));jf($);var b=tu(o,$);jf(b);var P=(I^L>=0?-1:1)*ii(b[2]);(i>P||i===P&&($[0]||$[1]))&&(a+=I^L>=0?1:-1)}}return(s<-ze||s<ze&&l<-Jv)^a&1}function r_(t,e,n,i){return function(r){var o=e(r),s=n_(),a=e(s),l=!1,u,c,f,h={point:m,lineStart:x,lineEnd:p,polygonStart:function(){h.point=d,h.lineStart=v,h.lineEnd=g,c=[],u=[]},polygonEnd:function(){h.point=m,h.lineStart=x,h.lineEnd=p,c=Qv(c);var S=Wy(u,i);c.length?(l||(r.polygonStart(),l=!0),i_(c,jy,S,n,r)):S&&(l||(r.polygonStart(),l=!0),r.lineStart(),n(null,null,1,r),r.lineEnd()),l&&(r.polygonEnd(),l=!1),c=u=null},sphere:function(){r.polygonStart(),r.lineStart(),n(null,null,1,r),r.lineEnd(),r.polygonEnd()}};function m(S,M){t(S,M)&&r.point(S,M)}function _(S,M){o.point(S,M)}function x(){h.point=_,o.lineStart()}function p(){h.point=m,o.lineEnd()}function d(S,M){f.push([S,M]),a.point(S,M)}function v(){a.lineStart(),f=[]}function g(){d(f[0][0],f[0][1]),a.lineEnd();var S=a.clean(),M=s.result(),T,R=M.length,L,y,A;if(f.pop(),u.push(f),f=null,!!R){if(S&1){if(y=M[0],(L=y.length-1)>0){for(l||(r.polygonStart(),l=!0),r.lineStart(),T=0;T<L;++T)r.point((A=y[T])[0],A[1]);r.lineEnd()}return}R>1&&S&2&&M.push(M.pop().concat(M.shift())),c.push(M.filter(Xy))}}return h}}function Xy(t){return t.length>1}function jy(t,e){return((t=t.x)[0]<0?t[1]-ln-ze:ln-t[1])-((e=e.x)[0]<0?e[1]-ln-ze:ln-e[1])}const Yp=r_(function(){return!0},qy,$y,[-Ge,-ln]);function qy(t){var e=NaN,n=NaN,i=NaN,r;return{lineStart:function(){t.lineStart(),r=1},point:function(o,s){var a=o>0?Ge:-Ge,l=Ke(o-e);Ke(l-Ge)<ze?(t.point(e,n=(n+s)/2>0?ln:-ln),t.point(i,n),t.lineEnd(),t.lineStart(),t.point(a,n),t.point(o,n),r=0):i!==a&&l>=Ge&&(Ke(e-i)<ze&&(e-=i*ze),Ke(o-a)<ze&&(o-=a*ze),n=Yy(e,n,o,s),t.point(i,n),t.lineEnd(),t.lineStart(),t.point(a,n),r=0),t.point(e=o,n=s),i=a},lineEnd:function(){t.lineEnd(),e=n=NaN},clean:function(){return 2-r}}}function Yy(t,e,n,i){var r,o,s=Ye(t-n);return Ke(s)>ze?e_((Ye(e)*(o=tt(i))*Ye(n)-Ye(i)*(r=tt(e))*Ye(t))/(r*o*s)):(e+i)/2}function $y(t,e,n,i){var r;if(t==null)r=n*ln,i.point(-Ge,r),i.point(0,r),i.point(Ge,r),i.point(Ge,0),i.point(Ge,-r),i.point(0,-r),i.point(-Ge,-r),i.point(-Ge,0),i.point(-Ge,r);else if(Ke(t[0]-e[0])>ze){var o=t[0]<e[0]?Ge:-Ge;r=n*o/2,i.point(-o,r),i.point(0,r),i.point(o,r)}else i.point(e[0],e[1])}function Ky(t){var e=tt(t),n=2*it,i=e>0,r=Ke(e)>ze;function o(c,f,h,m){t_(m,t,n,h,c,f)}function s(c,f){return tt(c)*tt(f)>e}function a(c){var f,h,m,_,x;return{lineStart:function(){_=m=!1,x=1},point:function(p,d){var v=[p,d],g,S=s(p,d),M=i?S?0:u(p,d):S?u(p+(p<0?Ge:-Ge),d):0;if(!f&&(_=m=S)&&c.lineStart(),S!==m&&(g=l(f,v),(!g||Cl(f,g)||Cl(v,g))&&(v[2]=1)),S!==m)x=0,S?(c.lineStart(),g=l(v,f),c.point(g[0],g[1])):(g=l(f,v),c.point(g[0],g[1],2),c.lineEnd()),f=g;else if(r&&f&&i^S){var T;!(M&h)&&(T=l(v,f,!0))&&(x=0,i?(c.lineStart(),c.point(T[0][0],T[0][1]),c.point(T[1][0],T[1][1]),c.lineEnd()):(c.point(T[1][0],T[1][1]),c.lineEnd(),c.lineStart(),c.point(T[0][0],T[0][1],3)))}S&&(!f||!Cl(f,v))&&c.point(v[0],v[1]),f=v,m=S,h=M},lineEnd:function(){m&&c.lineEnd(),f=null},clean:function(){return x|(_&&m)<<1}}}function l(c,f,h){var m=qo(c),_=qo(f),x=[1,0,0],p=tu(m,_),d=Ga(p,p),v=p[0],g=d-v*v;if(!g)return!h&&c;var S=e*d/g,M=-e*v/g,T=tu(x,p),R=Va(x,S),L=Va(p,M);hc(R,L);var y=T,A=Ga(R,y),I=Ga(y,y),Y=A*A-I*(Ga(R,R)-1);if(!(Y<0)){var $=ni(Y),b=Va(y,(-A-$)/I);if(hc(b,R),b=Xf(b),!h)return b;var P=c[0],G=f[0],B=c[1],N=f[1],k;G<P&&(k=P,P=G,G=k);var z=G-P,D=Ke(z-Ge)<ze,O=D||z<ze;if(!D&&N<B&&(k=B,B=N,N=k),O?D?B+N>0^b[1]<(Ke(b[0]-P)<ze?B:N):B<=b[1]&&b[1]<=N:z>Ge^(P<=b[0]&&b[0]<=G)){var ne=Va(y,(-A+$)/I);return hc(ne,R),[b,Xf(ne)]}}}function u(c,f){var h=i?t:Ge-t,m=0;return c<-h?m|=1:c>h&&(m|=2),f<-h?m|=4:f>h&&(m|=8),m}return r_(s,a,o,i?[0,-t]:[-Ge,t-Ge])}function Zy(t,e,n,i,r,o){var s=t[0],a=t[1],l=e[0],u=e[1],c=0,f=1,h=l-s,m=u-a,_;if(_=n-s,!(!h&&_>0)){if(_/=h,h<0){if(_<c)return;_<f&&(f=_)}else if(h>0){if(_>f)return;_>c&&(c=_)}if(_=r-s,!(!h&&_<0)){if(_/=h,h<0){if(_>f)return;_>c&&(c=_)}else if(h>0){if(_<c)return;_<f&&(f=_)}if(_=i-a,!(!m&&_>0)){if(_/=m,m<0){if(_<c)return;_<f&&(f=_)}else if(m>0){if(_>f)return;_>c&&(c=_)}if(_=o-a,!(!m&&_<0)){if(_/=m,m<0){if(_>f)return;_>c&&(c=_)}else if(m>0){if(_<c)return;_<f&&(f=_)}return c>0&&(t[0]=s+c*h,t[1]=a+c*m),f<1&&(e[0]=s+f*h,e[1]=a+f*m),!0}}}}}var Es=1e9,Xa=-Es;function Qy(t,e,n,i){function r(u,c){return t<=u&&u<=n&&e<=c&&c<=i}function o(u,c,f,h){var m=0,_=0;if(u==null||(m=s(u,f))!==(_=s(c,f))||l(u,c)<0^f>0)do h.point(m===0||m===3?t:n,m>1?i:e);while((m=(m+f+4)%4)!==_);else h.point(c[0],c[1])}function s(u,c){return Ke(u[0]-t)<ze?c>0?0:3:Ke(u[0]-n)<ze?c>0?2:1:Ke(u[1]-e)<ze?c>0?1:0:c>0?3:2}function a(u,c){return l(u.x,c.x)}function l(u,c){var f=s(u,1),h=s(c,1);return f!==h?f-h:f===0?c[1]-u[1]:f===1?u[0]-c[0]:f===2?u[1]-c[1]:c[0]-u[0]}return function(u){var c=u,f=n_(),h,m,_,x,p,d,v,g,S,M,T,R={point:L,lineStart:Y,lineEnd:$,polygonStart:A,polygonEnd:I};function L(P,G){r(P,G)&&c.point(P,G)}function y(){for(var P=0,G=0,B=m.length;G<B;++G)for(var N=m[G],k=1,z=N.length,D=N[0],O,ne,se=D[0],le=D[1];k<z;++k)O=se,ne=le,D=N[k],se=D[0],le=D[1],ne<=i?le>i&&(se-O)*(i-ne)>(le-ne)*(t-O)&&++P:le<=i&&(se-O)*(i-ne)<(le-ne)*(t-O)&&--P;return P}function A(){c=f,h=[],m=[],T=!0}function I(){var P=y(),G=T&&P,B=(h=Qv(h)).length;(G||B)&&(u.polygonStart(),G&&(u.lineStart(),o(null,null,1,u),u.lineEnd()),B&&i_(h,a,P,o,u),u.polygonEnd()),c=u,h=m=_=null}function Y(){R.point=b,m&&m.push(_=[]),M=!0,S=!1,v=g=NaN}function $(){h&&(b(x,p),d&&S&&f.rejoin(),h.push(f.result())),R.point=L,S&&c.lineEnd()}function b(P,G){var B=r(P,G);if(m&&_.push([P,G]),M)x=P,p=G,d=B,M=!1,B&&(c.lineStart(),c.point(P,G));else if(B&&S)c.point(P,G);else{var N=[v=Math.max(Xa,Math.min(Es,v)),g=Math.max(Xa,Math.min(Es,g))],k=[P=Math.max(Xa,Math.min(Es,P)),G=Math.max(Xa,Math.min(Es,G))];Zy(N,k,t,e,n,i)?(S||(c.lineStart(),c.point(N[0],N[1])),c.point(k[0],k[1]),B||c.lineEnd(),T=!1):B&&(c.lineStart(),c.point(P,G),T=!1)}v=P,g=G,S=B}return R}}function $p(t,e,n){var i=Po(t,e-ze,n).concat(e);return function(r){return i.map(function(o){return[r,o]})}}function Kp(t,e,n){var i=Po(t,e-ze,n).concat(e);return function(r){return i.map(function(o){return[o,r]})}}function Zp(){var t,e,n,i,r,o,s,a,l=10,u=l,c=90,f=360,h,m,_,x,p=2.5;function d(){return{type:"MultiLineString",coordinates:v()}}function v(){return Po(Ha(i/c)*c,n,c).map(_).concat(Po(Ha(a/f)*f,s,f).map(x)).concat(Po(Ha(e/l)*l,t,l).filter(function(g){return Ke(g%c)>ze}).map(h)).concat(Po(Ha(o/u)*u,r,u).filter(function(g){return Ke(g%f)>ze}).map(m))}return d.lines=function(){return v().map(function(g){return{type:"LineString",coordinates:g}})},d.outline=function(){return{type:"Polygon",coordinates:[_(i).concat(x(s).slice(1),_(n).reverse().slice(1),x(a).reverse().slice(1))]}},d.extent=function(g){return arguments.length?d.extentMajor(g).extentMinor(g):d.extentMinor()},d.extentMajor=function(g){return arguments.length?(i=+g[0][0],n=+g[1][0],a=+g[0][1],s=+g[1][1],i>n&&(g=i,i=n,n=g),a>s&&(g=a,a=s,s=g),d.precision(p)):[[i,a],[n,s]]},d.extentMinor=function(g){return arguments.length?(e=+g[0][0],t=+g[1][0],o=+g[0][1],r=+g[1][1],e>t&&(g=e,e=t,t=g),o>r&&(g=o,o=r,r=g),d.precision(p)):[[e,o],[t,r]]},d.step=function(g){return arguments.length?d.stepMajor(g).stepMinor(g):d.stepMinor()},d.stepMajor=function(g){return arguments.length?(c=+g[0],f=+g[1],d):[c,f]},d.stepMinor=function(g){return arguments.length?(l=+g[0],u=+g[1],d):[l,u]},d.precision=function(g){return arguments.length?(p=+g,h=$p(o,r,90),m=Kp(e,t,p),_=$p(a,s,90),x=Kp(i,n,p),d):p},d.extentMajor([[-180,-90+ze],[180,90-ze]]).extentMinor([[-180,-80-ze],[180,80+ze]])}const $f=t=>t;var mc=new Vr,Kf=new Vr,o_,s_,Zf,Qf,ji={point:In,lineStart:In,lineEnd:In,polygonStart:function(){ji.lineStart=Jy,ji.lineEnd=tM},polygonEnd:function(){ji.lineStart=ji.lineEnd=ji.point=In,mc.add(Ke(Kf)),Kf=new Vr},result:function(){var t=mc/2;return mc=new Vr,t}};function Jy(){ji.point=eM}function eM(t,e){ji.point=a_,o_=Zf=t,s_=Qf=e}function a_(t,e){Kf.add(Qf*t-Zf*e),Zf=t,Qf=e}function tM(){a_(o_,s_)}const Qp=ji;var Yo=1/0,nu=Yo,la=-Yo,iu=la,nM={point:iM,lineStart:In,lineEnd:In,polygonStart:In,polygonEnd:In,result:function(){var t=[[Yo,nu],[la,iu]];return la=iu=-(nu=Yo=1/0),t}};function iM(t,e){t<Yo&&(Yo=t),t>la&&(la=t),e<nu&&(nu=e),e>iu&&(iu=e)}const ru=nM;var Jf=0,ed=0,Ts=0,ou=0,su=0,Lo=0,td=0,nd=0,ws=0,l_,u_,ci,fi,Yn={point:Xr,lineStart:Jp,lineEnd:em,polygonStart:function(){Yn.lineStart=sM,Yn.lineEnd=aM},polygonEnd:function(){Yn.point=Xr,Yn.lineStart=Jp,Yn.lineEnd=em},result:function(){var t=ws?[td/ws,nd/ws]:Lo?[ou/Lo,su/Lo]:Ts?[Jf/Ts,ed/Ts]:[NaN,NaN];return Jf=ed=Ts=ou=su=Lo=td=nd=ws=0,t}};function Xr(t,e){Jf+=t,ed+=e,++Ts}function Jp(){Yn.point=rM}function rM(t,e){Yn.point=oM,Xr(ci=t,fi=e)}function oM(t,e){var n=t-ci,i=e-fi,r=ni(n*n+i*i);ou+=r*(ci+t)/2,su+=r*(fi+e)/2,Lo+=r,Xr(ci=t,fi=e)}function em(){Yn.point=Xr}function sM(){Yn.point=lM}function aM(){c_(l_,u_)}function lM(t,e){Yn.point=c_,Xr(l_=ci=t,u_=fi=e)}function c_(t,e){var n=t-ci,i=e-fi,r=ni(n*n+i*i);ou+=r*(ci+t)/2,su+=r*(fi+e)/2,Lo+=r,r=fi*t-ci*e,td+=r*(ci+t),nd+=r*(fi+e),ws+=r*3,Xr(ci=t,fi=e)}const tm=Yn;function f_(t){this._context=t}f_.prototype={_radius:4.5,pointRadius:function(t){return this._radius=t,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(t,e){switch(this._point){case 0:{this._context.moveTo(t,e),this._point=1;break}case 1:{this._context.lineTo(t,e);break}default:{this._context.moveTo(t+this._radius,e),this._context.arc(t,e,this._radius,0,Tn);break}}},result:In};var id=new Vr,gc,d_,h_,As,Rs,au={point:In,lineStart:function(){au.point=uM},lineEnd:function(){gc&&p_(d_,h_),au.point=In},polygonStart:function(){gc=!0},polygonEnd:function(){gc=null},result:function(){var t=+id;return id=new Vr,t}};function uM(t,e){au.point=p_,d_=As=t,h_=Rs=e}function p_(t,e){As-=t,Rs-=e,id.add(ni(As*As+Rs*Rs)),As=t,Rs=e}const nm=au;let im,lu,rm,om;class sm{constructor(e){this._append=e==null?m_:cM(e),this._radius=4.5,this._=""}pointRadius(e){return this._radius=+e,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(e,n){switch(this._point){case 0:{this._append`M${e},${n}`,this._point=1;break}case 1:{this._append`L${e},${n}`;break}default:{if(this._append`M${e},${n}`,this._radius!==rm||this._append!==lu){const i=this._radius,r=this._;this._="",this._append`m0,${i}a${i},${i} 0 1,1 0,${-2*i}a${i},${i} 0 1,1 0,${2*i}z`,rm=i,lu=this._append,om=this._,this._=r}this._+=om;break}}}result(){const e=this._;return this._="",e.length?e:null}}function m_(t){let e=1;this._+=t[0];for(const n=t.length;e<n;++e)this._+=arguments[e]+t[e]}function cM(t){const e=Math.floor(t);if(!(e>=0))throw new RangeError(`invalid digits: ${t}`);if(e>15)return m_;if(e!==im){const n=10**e;im=e,lu=function(r){let o=1;this._+=r[0];for(const s=r.length;o<s;++o)this._+=Math.round(arguments[o]*n)/n+r[o]}}return lu}function fM(t,e){let n=3,i=4.5,r,o;function s(a){return a&&(typeof i=="function"&&o.pointRadius(+i.apply(this,arguments)),go(a,r(o))),o.result()}return s.area=function(a){return go(a,r(Qp)),Qp.result()},s.measure=function(a){return go(a,r(nm)),nm.result()},s.bounds=function(a){return go(a,r(ru)),ru.result()},s.centroid=function(a){return go(a,r(tm)),tm.result()},s.projection=function(a){return arguments.length?(r=a==null?(t=null,$f):(t=a).stream,s):t},s.context=function(a){return arguments.length?(o=a==null?(e=null,new sm(n)):new f_(e=a),typeof i!="function"&&o.pointRadius(i),s):e},s.pointRadius=function(a){return arguments.length?(i=typeof a=="function"?a:(o.pointRadius(+a),+a),s):i},s.digits=function(a){if(!arguments.length)return n;if(a==null)n=null;else{const l=Math.floor(a);if(!(l>=0))throw new RangeError(`invalid digits: ${a}`);n=l}return e===null&&(o=new sm(n)),s},s.projection(t).digits(n).context(e)}function fh(t){return function(e){var n=new rd;for(var i in t)n[i]=t[i];return n.stream=e,n}}function rd(){}rd.prototype={constructor:rd,point:function(t,e){this.stream.point(t,e)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function dh(t,e,n){var i=t.clipExtent&&t.clipExtent();return t.scale(150).translate([0,0]),i!=null&&t.clipExtent(null),go(n,t.stream(ru)),e(ru.result()),i!=null&&t.clipExtent(i),t}function g_(t,e,n){return dh(t,function(i){var r=e[1][0]-e[0][0],o=e[1][1]-e[0][1],s=Math.min(r/(i[1][0]-i[0][0]),o/(i[1][1]-i[0][1])),a=+e[0][0]+(r-s*(i[1][0]+i[0][0]))/2,l=+e[0][1]+(o-s*(i[1][1]+i[0][1]))/2;t.scale(150*s).translate([a,l])},n)}function dM(t,e,n){return g_(t,[[0,0],e],n)}function hM(t,e,n){return dh(t,function(i){var r=+e,o=r/(i[1][0]-i[0][0]),s=(r-o*(i[1][0]+i[0][0]))/2,a=-o*i[0][1];t.scale(150*o).translate([s,a])},n)}function pM(t,e,n){return dh(t,function(i){var r=+e,o=r/(i[1][1]-i[0][1]),s=-o*i[0][0],a=(r-o*(i[1][1]+i[0][1]))/2;t.scale(150*o).translate([s,a])},n)}var am=16,mM=tt(30*it);function lm(t,e){return+e?vM(t,e):gM(t)}function gM(t){return fh({point:function(e,n){e=t(e,n),this.stream.point(e[0],e[1])}})}function vM(t,e){function n(i,r,o,s,a,l,u,c,f,h,m,_,x,p){var d=u-i,v=c-r,g=d*d+v*v;if(g>4*e&&x--){var S=s+h,M=a+m,T=l+_,R=ni(S*S+M*M+T*T),L=ii(T/=R),y=Ke(Ke(T)-1)<ze||Ke(o-f)<ze?(o+f)/2:Wr(M,S),A=t(y,L),I=A[0],Y=A[1],$=I-i,b=Y-r,P=v*$-d*b;(P*P/g>e||Ke((d*$+v*b)/g-.5)>.3||s*h+a*m+l*_<mM)&&(n(i,r,o,s,a,l,I,Y,y,S/=R,M/=R,T,x,p),p.point(I,Y),n(I,Y,y,S,M,T,u,c,f,h,m,_,x,p))}}return function(i){var r,o,s,a,l,u,c,f,h,m,_,x,p={point:d,lineStart:v,lineEnd:S,polygonStart:function(){i.polygonStart(),p.lineStart=M},polygonEnd:function(){i.polygonEnd(),p.lineStart=v}};function d(L,y){L=t(L,y),i.point(L[0],L[1])}function v(){f=NaN,p.point=g,i.lineStart()}function g(L,y){var A=qo([L,y]),I=t(L,y);n(f,h,c,m,_,x,f=I[0],h=I[1],c=L,m=A[0],_=A[1],x=A[2],am,i),i.point(f,h)}function S(){p.point=d,i.lineEnd()}function M(){v(),p.point=T,p.lineEnd=R}function T(L,y){g(r=L,y),o=f,s=h,a=m,l=_,u=x,p.point=g}function R(){n(f,h,c,m,_,x,o,s,r,a,l,u,am,i),p.lineEnd=S,S()}return p}}var _M=fh({point:function(t,e){this.stream.point(t*it,e*it)}});function xM(t){return fh({point:function(e,n){var i=t(e,n);return this.stream.point(i[0],i[1])}})}function SM(t,e,n,i,r){function o(s,a){return s*=i,a*=r,[e+t*s,n-t*a]}return o.invert=function(s,a){return[(s-e)/t*i,(n-a)/t*r]},o}function um(t,e,n,i,r,o){if(!o)return SM(t,e,n,i,r);var s=tt(o),a=Ye(o),l=s*t,u=a*t,c=s/t,f=a/t,h=(a*n-s*e)/t,m=(a*e+s*n)/t;function _(x,p){return x*=i,p*=r,[l*x-u*p+e,n-u*x-l*p]}return _.invert=function(x,p){return[i*(c*x-f*p+h),r*(m-f*x-c*p)]},_}function mr(t){return v_(function(){return t})()}function v_(t){var e,n=150,i=480,r=250,o=0,s=0,a=0,l=0,u=0,c,f=0,h=1,m=1,_=null,x=Yp,p=null,d,v,g,S=$f,M=.5,T,R,L,y,A;function I(P){return L(P[0]*it,P[1]*it)}function Y(P){return P=L.invert(P[0],P[1]),P&&[P[0]*It,P[1]*It]}I.stream=function(P){return y&&A===P?y:y=_M(xM(c)(x(T(S(A=P)))))},I.preclip=function(P){return arguments.length?(x=P,_=void 0,b()):x},I.postclip=function(P){return arguments.length?(S=P,p=d=v=g=null,b()):S},I.clipAngle=function(P){return arguments.length?(x=+P?Ky(_=P*it):(_=null,Yp),b()):_*It},I.clipExtent=function(P){return arguments.length?(S=P==null?(p=d=v=g=null,$f):Qy(p=+P[0][0],d=+P[0][1],v=+P[1][0],g=+P[1][1]),b()):p==null?null:[[p,d],[v,g]]},I.scale=function(P){return arguments.length?(n=+P,$()):n},I.translate=function(P){return arguments.length?(i=+P[0],r=+P[1],$()):[i,r]},I.center=function(P){return arguments.length?(o=P[0]%360*it,s=P[1]%360*it,$()):[o*It,s*It]},I.rotate=function(P){return arguments.length?(a=P[0]%360*it,l=P[1]%360*it,u=P.length>2?P[2]%360*it:0,$()):[a*It,l*It,u*It]},I.angle=function(P){return arguments.length?(f=P%360*it,$()):f*It},I.reflectX=function(P){return arguments.length?(h=P?-1:1,$()):h<0},I.reflectY=function(P){return arguments.length?(m=P?-1:1,$()):m<0},I.precision=function(P){return arguments.length?(T=lm(R,M=P*P),b()):ni(M)},I.fitExtent=function(P,G){return g_(I,P,G)},I.fitSize=function(P,G){return dM(I,P,G)},I.fitWidth=function(P,G){return hM(I,P,G)},I.fitHeight=function(P,G){return pM(I,P,G)};function $(){var P=um(n,0,0,h,m,f).apply(null,e(o,s)),G=um(n,i-P[0],r-P[1],h,m,f);return c=ch(a,l,u),R=qf(e,G),L=qf(c,R),T=lm(R,M),b()}function b(){return y=A=null,I}return function(){return e=t.apply(this,arguments),I.invert=e.invert&&Y,$()}}function yM(t){var e=0,n=Ge/3,i=v_(t),r=i(e,n);return r.parallels=function(o){return arguments.length?i(e=o[0]*it,n=o[1]*it):[e*It,n*It]},r}function MM(t){var e=tt(t);function n(i,r){return[i*e,Ye(r)/e]}return n.invert=function(i,r){return[i/e,ii(r*e)]},n}function EM(t,e){var n=Ye(t),i=(n+Ye(e))/2;if(Ke(i)<ze)return MM(t);var r=1+n*(2*i-n),o=ni(r)/i;function s(a,l){var u=ni(r-2*i*Ye(l))/i;return[u*Ye(a*=i),o-u*tt(a)]}return s.invert=function(a,l){var u=o-l,c=Wr(a,Ke(u))*Rl(u);return u*i<0&&(c-=Ge*Rl(a)*Rl(u)),[c/i,ii((r-(a*a+u*u)*i*i)/(2*i))]},s}function TM(){return yM(EM).scale(155.424).center([0,33.6442])}function wM(){return TM().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7])}function AM(t){return function(e,n){var i=ni(e*e+n*n),r=t(i),o=Ye(r),s=tt(r);return[Wr(e*o,i*s),ii(i&&n*o/i)]}}function hh(t,e){return[t,zy(By((ln+e)/2))]}hh.invert=function(t,e){return[t,2*e_(ky(e))-ln]};function RM(){return CM(hh).scale(961/Tn)}function CM(t){var e=mr(t),n=e.center,i=e.scale,r=e.translate,o=e.clipExtent,s=null,a,l,u;e.scale=function(f){return arguments.length?(i(f),c()):i()},e.translate=function(f){return arguments.length?(r(f),c()):r()},e.center=function(f){return arguments.length?(n(f),c()):n()},e.clipExtent=function(f){return arguments.length?(f==null?s=a=l=u=null:(s=+f[0][0],a=+f[0][1],l=+f[1][0],u=+f[1][1]),c()):s==null?null:[[s,a],[l,u]]};function c(){var f=Ge*i(),h=e(Gy(e.rotate()).invert([0,0]));return o(s==null?[[h[0]-f,h[1]-f],[h[0]+f,h[1]+f]]:t===hh?[[Math.max(h[0]-f,s),a],[Math.min(h[0]+f,l),u]]:[[s,Math.max(h[1]-f,a)],[l,Math.min(h[1]+f,u)]])}return c()}var Bs=1.340264,Hs=-.081106,Gs=893e-6,Vs=.003796,uu=ni(3)/2,PM=12;function __(t,e){var n=ii(uu*Ye(e)),i=n*n,r=i*i*i;return[t*tt(n)/(uu*(Bs+3*Hs*i+r*(7*Gs+9*Vs*i))),n*(Bs+Hs*i+r*(Gs+Vs*i))]}__.invert=function(t,e){for(var n=e,i=n*n,r=i*i*i,o=0,s,a,l;o<PM&&(a=n*(Bs+Hs*i+r*(Gs+Vs*i))-e,l=Bs+3*Hs*i+r*(7*Gs+9*Vs*i),n-=s=a/l,i=n*n,r=i*i*i,!(Ke(s)<Jv));++o);return[uu*t*(Bs+3*Hs*i+r*(7*Gs+9*Vs*i))/tt(n),ii(Ye(n)/uu)]};function LM(){return mr(__).scale(177.158)}function x_(t,e){var n=e*e,i=n*n;return[t*(.8707-.131979*n+i*(-.013791+i*(.003971*n-.001529*i))),e*(1.007226+n*(.015085+i*(-.044475+.028874*n-.005916*i)))]}x_.invert=function(t,e){var n=e,i=25,r;do{var o=n*n,s=o*o;n-=r=(n*(1.007226+o*(.015085+s*(-.044475+.028874*o-.005916*s)))-e)/(1.007226+o*(.015085*3+s*(-.044475*7+.028874*9*o-.005916*11*s)))}while(Ke(r)>ze&&--i>0);return[t/(.8707+(o=n*n)*(-.131979+o*(-.013791+o*o*o*(.003971-.001529*o)))),n]};function bM(){return mr(x_).scale(175.295)}function S_(t,e){return[tt(e)*Ye(t),Ye(e)]}S_.invert=AM(ii);function DM(){return mr(S_).scale(249.5).clipAngle(90+ze)}var Zn=Math.abs,zn=Math.cos,od=Math.floor,UM=Math.max,Ar=Math.min,y_=Math.sign||function(t){return t>0?1:t<0?-1:0},Ot=Math.sin,Nr=1e-6,NM=1e-12,qt=Math.PI,cr=qt/2,cm=jr(2),IM=180/qt,FM=qt/180;function OM(t){return t?t/Math.sin(t):1}function cu(t){return t>1?cr:t<-1?-cr:Math.asin(t)}function ph(t){return t>1?0:t<-1?qt:Math.acos(t)}function jr(t){return t>0?Math.sqrt(t):0}function M_(t,e){var n=zn(e),i=OM(ph(n*zn(t/=2)));return[2*n*Ot(t)*i,Ot(e)*i]}M_.invert=function(t,e){if(!(t*t+4*e*e>qt*qt+Nr)){var n=t,i=e,r=25;do{var o=Ot(n),s=Ot(n/2),a=zn(n/2),l=Ot(i),u=zn(i),c=Ot(2*i),f=l*l,h=u*u,m=s*s,_=1-h*a*a,x=_?ph(u*a)*jr(p=1/_):p=0,p,d=2*x*u*s-t,v=x*l-e,g=p*(h*m+x*u*a*f),S=p*(.5*o*c-x*2*l*s),M=p*.25*(c*s-x*l*h*o),T=p*(f*a+x*m*u),R=S*M-T*g;if(!R)break;var L=(v*S-d*T)/R,y=(d*M-v*g)/R;n-=L,i-=y}while((Zn(L)>Nr||Zn(y)>Nr)&&--r>0);return[n,i]}};function kM(t,e){var n=t*Ot(e),i=30,r;do e-=r=(e+Ot(e)-n)/(1+zn(e));while(Zn(r)>Nr&&--i>0);return e/2}function zM(t,e,n){function i(r,o){return[t*r*zn(o=kM(n,o)),e*Ot(o)]}return i.invert=function(r,o){return o=cu(o/e),[r/(t*zn(o)),cu((2*o+Ot(2*o))/n)]},i}var BM=zM(cm/cr,cm,qt);function HM(){return mr(BM).scale(169.529)}function E_(t,e){var n=(2+cr)*Ot(e);e/=2;for(var i=0,r=1/0;i<10&&Zn(r)>Nr;i++){var o=zn(e);e-=r=(e+Ot(e)*(o+2)-n)/(2*o*(1+o))}return[2/jr(qt*(4+qt))*t*(1+zn(e)),2*jr(qt/(4+qt))*Ot(e)]}E_.invert=function(t,e){var n=e*jr((4+qt)/qt)/2,i=cu(n),r=zn(i);return[t/(2/jr(qt*(4+qt))*(1+r)),cu((i+n*(r+2))/(2+cr))]};function GM(){return mr(E_).scale(180.739)}var xn=[[.9986,-.062],[1,0],[.9986,.062],[.9954,.124],[.99,.186],[.9822,.248],[.973,.31],[.96,.372],[.9427,.434],[.9216,.4958],[.8962,.5571],[.8679,.6176],[.835,.6769],[.7986,.7346],[.7597,.7903],[.7186,.8435],[.6732,.8936],[.6213,.9394],[.5722,.9761],[.5322,1]];xn.forEach(function(t){t[1]*=1.593415793900743});function T_(t,e){var n=Ar(18,Zn(e)*36/qt),i=od(n),r=n-i,o=(f=xn[i])[0],s=f[1],a=(f=xn[++i])[0],l=f[1],u=(f=xn[Ar(19,++i)])[0],c=f[1],f;return[t*(a+r*(u-o)/2+r*r*(u-2*a+o)/2),y_(e)*(l+r*(c-s)/2+r*r*(c-2*l+s)/2)]}T_.invert=function(t,e){var n=e*90,i=Ar(18,Zn(n/5)),r=UM(0,od(i));do{var o=xn[r][1],s=xn[r+1][1],a=xn[Ar(19,r+2)][1],l=a-o,u=a-2*s+o,c=2*(Zn(e)-s)/l,f=u/l,h=c*(1-f*c*(1-2*f*c));if(h>=0||r===1){n=(e>=0?5:-5)*(h+i);var m=50,_;do i=Ar(18,Zn(n)/5),r=od(i),h=i-r,o=xn[r][1],s=xn[r+1][1],a=xn[Ar(19,r+2)][1],n-=(_=y_(e)*(s+h*(a-o)/2+h*h*(a-2*s+o)/2)-e)*IM;while(Zn(_)>NM&&--m>0);break}}while(--r>=0);var x=xn[r][0],p=xn[r+1][0],d=xn[Ar(19,r+2)][0];return[t/(p+h*(d-x)/2+h*h*(d-2*p+x)/2),n*FM]};function VM(){return mr(T_).scale(152.63)}function w_(t,e){var n=M_(t,e);return[(n[0]+t/cr)/2,(n[1]+e)/2]}w_.invert=function(t,e){var n=t,i=e,r=25;do{var o=zn(i),s=Ot(i),a=Ot(2*i),l=s*s,u=o*o,c=Ot(n),f=zn(n/2),h=Ot(n/2),m=h*h,_=1-u*f*f,x=_?ph(o*f)*jr(p=1/_):p=0,p,d=.5*(2*x*o*h+n/cr)-t,v=.5*(x*s+i)-e,g=.5*p*(u*m+x*o*f*l)+.5/cr,S=p*(c*a/4-x*s*h),M=.125*p*(a*h-x*s*u*c),T=.5*p*(l*f+x*m*o)+.5,R=S*M-T*g,L=(v*S-d*T)/R,y=(d*M-v*g)/R;n-=L,i-=y}while((Zn(L)>Nr||Zn(y)>Nr)&&--r>0);return[n,i]};function WM(){return mr(w_).scale(158.837)}const ua={mercator:{name:"Mercator",create:()=>RM(),description:"Conformal cylindrical projection, preserves angles but distorts area near poles",defaultParams:{scale:150},properties:{conformal:!0,equalArea:!1,compromise:!1}},equalEarth:{name:"Equal Earth",create:()=>LM(),description:"Equal-area pseudocylindrical projection with natural appearance",defaultParams:{scale:180},properties:{conformal:!1,equalArea:!0,compromise:!1}},naturalEarth:{name:"Natural Earth",create:()=>bM(),description:"Compromise projection designed for world maps",defaultParams:{scale:170},properties:{conformal:!1,equalArea:!1,compromise:!0}},orthographic:{name:"Orthographic",create:()=>DM(),description:"Azimuthal projection showing Earth as seen from space",defaultParams:{scale:250},properties:{conformal:!1,equalArea:!1,compromise:!1}},albers:{name:"Albers Equal-Area Conic",create:()=>wM(),description:"Conic equal-area projection, good for mid-latitude regions",defaultParams:{scale:200},properties:{conformal:!1,equalArea:!0,compromise:!1}},mollweide:{name:"Mollweide",create:()=>HM(),description:"Equal-area elliptical projection",defaultParams:{scale:150},properties:{conformal:!1,equalArea:!0,compromise:!1}},eckert4:{name:"Eckert IV",create:()=>GM(),description:"Equal-area elliptical projection with curved meridians",defaultParams:{scale:180},properties:{conformal:!1,equalArea:!0,compromise:!1}},winkel3:{name:"Winkel Tripel",create:()=>WM(),description:"Compromise projection minimizing area, distance and angular distortions",defaultParams:{scale:170},properties:{conformal:!1,equalArea:!1,compromise:!0}},robinson:{name:"Robinson",create:()=>VM(),description:"Pseudocylindrical compromise projection",defaultParams:{scale:150},properties:{conformal:!1,equalArea:!1,compromise:!0}}};function XM(t,e={}){const n=ua[t];if(!n)throw new Error(`Unknown projection: ${t}`);const i=n.create();return(e.centerLon!==void 0||e.centerLat!==void 0)&&i.center([e.centerLon||0,e.centerLat||0]),e.rotation!==void 0&&i.rotate([e.rotation||0,0]),e.scale!==void 0&&i.scale(e.scale),t==="albers"&&e.standardParallels&&i.parallels(e.standardParallels),i}function jM({selectedProjection:t,projectionParams:e,showGraticule:n,showTissot:i,onProjectionChange:r,onParamChange:o,onGraticuleToggle:s,onTissotToggle:a,onUnfold:l,isUnfolding:u}){const c=ua[t];return xe.jsxs("div",{className:"controls",children:[xe.jsxs("div",{className:"control-group",children:[xe.jsx("label",{htmlFor:"projection-select",children:"Map Projection"}),xe.jsx("select",{id:"projection-select",value:t,onChange:f=>r(f.target.value),children:Object.entries(ua).map(([f,h])=>xe.jsx("option",{value:f,children:h.name},f))}),c&&xe.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.5rem",opacity:.8},children:c.description})]}),xe.jsxs("div",{className:"control-group",children:[xe.jsxs("label",{htmlFor:"center-lon",children:["Central Longitude: ",e.centerLon,"°"]}),xe.jsx("input",{type:"range",id:"center-lon",min:"-180",max:"180",step:"5",value:e.centerLon,onChange:f=>o("centerLon",parseFloat(f.target.value))})]}),xe.jsxs("div",{className:"control-group",children:[xe.jsxs("label",{htmlFor:"center-lat",children:["Central Latitude: ",e.centerLat,"°"]}),xe.jsx("input",{type:"range",id:"center-lat",min:"-90",max:"90",step:"5",value:e.centerLat,onChange:f=>o("centerLat",parseFloat(f.target.value))})]}),xe.jsxs("div",{className:"control-group",children:[xe.jsxs("label",{htmlFor:"rotation",children:["Rotation: ",e.rotation,"°"]}),xe.jsx("input",{type:"range",id:"rotation",min:"-180",max:"180",step:"5",value:e.rotation,onChange:f=>o("rotation",parseFloat(f.target.value))})]}),xe.jsxs("div",{className:"control-group",children:[xe.jsxs("label",{htmlFor:"scale",children:["Scale: ",e.scale]}),xe.jsx("input",{type:"range",id:"scale",min:"50",max:"500",step:"10",value:e.scale,onChange:f=>o("scale",parseFloat(f.target.value))})]}),xe.jsxs("div",{className:"checkbox-control",children:[xe.jsx("input",{type:"checkbox",id:"show-graticule",checked:n,onChange:f=>s(f.target.checked)}),xe.jsx("label",{htmlFor:"show-graticule",children:"Show Graticule"})]}),xe.jsxs("div",{className:"checkbox-control",children:[xe.jsx("input",{type:"checkbox",id:"show-tissot",checked:i,onChange:f=>a(f.target.checked)}),xe.jsx("label",{htmlFor:"show-tissot",children:"Show Tissot's Indicatrices"})]}),xe.jsx("button",{className:"unfold-button",onClick:l,disabled:u,children:u?"Unfolding...":"Unfold Globe → Projection"}),c&&xe.jsxs("div",{className:"control-group",style:{marginTop:"2rem",fontSize:"0.85rem"},children:[xe.jsx("strong",{children:"Projection Properties:"}),xe.jsxs("div",{style:{marginTop:"0.5rem"},children:[xe.jsxs("div",{children:["• Conformal: ",c.properties.conformal?"Yes":"No"]}),xe.jsxs("div",{children:["• Equal Area: ",c.properties.equalArea?"Yes":"No"]}),xe.jsxs("div",{children:["• Compromise: ",c.properties.compromise?"Yes":"No"]})]})]})]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mh="158",qM=0,fm=1,YM=2,A_=1,$M=2,yi=3,fr=0,dn=1,Ti=2,or=0,ko=1,dm=2,hm=3,pm=4,KM=5,Rr=100,ZM=101,QM=102,mm=103,gm=104,JM=200,eE=201,tE=202,nE=203,sd=204,ad=205,iE=206,rE=207,oE=208,sE=209,aE=210,lE=211,uE=212,cE=213,fE=214,dE=0,hE=1,pE=2,fu=3,mE=4,gE=5,vE=6,_E=7,gh=0,xE=1,SE=2,sr=0,yE=1,ME=2,EE=3,TE=4,wE=5,R_=300,$o=301,Ko=302,ld=303,ud=304,Du=306,cd=1e3,$n=1001,fd=1002,Jt=1003,vm=1004,vc=1005,bn=1006,AE=1007,ca=1008,ar=1009,RE=1010,CE=1011,vh=1012,C_=1013,$i=1014,Ki=1015,fa=1016,P_=1017,L_=1018,Ir=1020,PE=1021,Kn=1023,LE=1024,bE=1025,Fr=1026,Zo=1027,DE=1028,b_=1029,UE=1030,D_=1031,U_=1033,_c=33776,xc=33777,Sc=33778,yc=33779,_m=35840,xm=35841,Sm=35842,ym=35843,NE=36196,Mm=37492,Em=37496,Tm=37808,wm=37809,Am=37810,Rm=37811,Cm=37812,Pm=37813,Lm=37814,bm=37815,Dm=37816,Um=37817,Nm=37818,Im=37819,Fm=37820,Om=37821,Mc=36492,km=36494,zm=36495,IE=36283,Bm=36284,Hm=36285,Gm=36286,N_=3e3,Or=3001,FE=3200,OE=3201,I_=0,kE=1,Un="",Ft="srgb",Ni="srgb-linear",_h="display-p3",Uu="display-p3-linear",du="linear",st="srgb",hu="rec709",pu="p3",Jr=7680,Vm=519,zE=512,BE=513,HE=514,GE=515,VE=516,WE=517,XE=518,jE=519,Wm=35044,Xm="300 es",dd=1035,Ri=2e3,mu=2001;class ns{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ec=Math.PI/180,hd=180/Math.PI;function _a(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function sn(t,e,n){return Math.max(e,Math.min(n,t))}function qE(t,e){return(t%e+e)%e}function Tc(t,e,n){return(1-n)*t+n*e}function jm(t){return(t&t-1)===0&&t!==0}function pd(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ps(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function rn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,n=0){$e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,n,i,r,o,s,a,l,u){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u)}set(e,n,i,r,o,s,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=o,c[5]=l,c[6]=i,c[7]=s,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],m=i[5],_=i[8],x=r[0],p=r[3],d=r[6],v=r[1],g=r[4],S=r[7],M=r[2],T=r[5],R=r[8];return o[0]=s*x+a*v+l*M,o[3]=s*p+a*g+l*T,o[6]=s*d+a*S+l*R,o[1]=u*x+c*v+f*M,o[4]=u*p+c*g+f*T,o[7]=u*d+c*S+f*R,o[2]=h*x+m*v+_*M,o[5]=h*p+m*g+_*T,o[8]=h*d+m*S+_*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*s*c-n*a*u-i*o*c+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*s-a*u,h=a*l-c*o,m=u*o-s*l,_=n*f+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(r*u-c*i)*x,e[2]=(a*i-r*s)*x,e[3]=h*x,e[4]=(c*n-r*l)*x,e[5]=(r*o-a*n)*x,e[6]=m*x,e[7]=(i*l-u*n)*x,e[8]=(s*n-i*o)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(wc.makeScale(e,n)),this}rotate(e){return this.premultiply(wc.makeRotation(-e)),this}translate(e,n){return this.premultiply(wc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wc=new ke;function F_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function da(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function YE(){const t=da("canvas");return t.style.display="block",t}const qm={};function Ws(t){t in qm||(qm[t]=!0,console.warn(t))}const Ym=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$m=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ja={[Ni]:{transfer:du,primaries:hu,toReference:t=>t,fromReference:t=>t},[Ft]:{transfer:st,primaries:hu,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Uu]:{transfer:du,primaries:pu,toReference:t=>t.applyMatrix3($m),fromReference:t=>t.applyMatrix3(Ym)},[_h]:{transfer:st,primaries:pu,toReference:t=>t.convertSRGBToLinear().applyMatrix3($m),fromReference:t=>t.applyMatrix3(Ym).convertLinearToSRGB()}},$E=new Set([Ni,Uu]),Je={enabled:!0,_workingColorSpace:Ni,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!$E.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ja[e].toReference,r=ja[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ja[t].primaries},getTransfer:function(t){return t===Un?du:ja[t].transfer}};function zo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ac(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let eo;class O_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{eo===void 0&&(eo=da("canvas")),eo.width=e.width,eo.height=e.height;const i=eo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=eo}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=da("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=zo(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(zo(n[i]/255)*255):n[i]=zo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let KE=0;class k_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=_a(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Rc(r[s].image)):o.push(Rc(r[s]))}else o=Rc(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function Rc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?O_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ZE=0;class hn extends ns{constructor(e=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,i=$n,r=$n,o=bn,s=ca,a=Kn,l=ar,u=hn.DEFAULT_ANISOTROPY,c=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=_a(),this.name="",this.source=new k_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Or?Ft:Un),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==R_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cd:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case fd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cd:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case fd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ft?Or:N_}set encoding(e){Ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Or?Ft:Un}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=R_;hn.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,n=0,i=0,r=1){Dt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],m=l[5],_=l[9],x=l[2],p=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+x)<.1&&Math.abs(_+p)<.1&&Math.abs(u+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,S=(m+1)/2,M=(d+1)/2,T=(c+h)/4,R=(f+x)/4,L=(_+p)/4;return g>S&&g>M?g<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(g),r=T/i,o=R/i):S>M?S<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(S),i=T/r,o=L/r):M<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(M),i=R/o,r=L/o),this.set(i,r,o,n),this}let v=Math.sqrt((p-_)*(p-_)+(f-x)*(f-x)+(h-c)*(h-c));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(f-x)/v,this.z=(h-c)/v,this.w=Math.acos((u+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class QE extends ns{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Dt(0,0,e,n),this.scissorTest=!1,this.viewport=new Dt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Ws("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Or?Ft:Un),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new hn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new k_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qr extends QE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class z_ extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class JE extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=o[s+0],m=o[s+1],_=o[s+2],x=o[s+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=x;return}if(f!==x||l!==h||u!==m||c!==_){let p=1-a;const d=l*h+u*m+c*_+f*x,v=d>=0?1:-1,g=1-d*d;if(g>Number.EPSILON){const M=Math.sqrt(g),T=Math.atan2(M,d*v);p=Math.sin(p*T)/M,a=Math.sin(a*T)/M}const S=a*v;if(l=l*p+h*S,u=u*p+m*S,c=c*p+_*S,f=f*p+x*S,p===1-a){const M=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=M,u*=M,c*=M,f*=M}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=o[s],h=o[s+1],m=o[s+2],_=o[s+3];return e[n]=a*_+c*f+l*m-u*h,e[n+1]=l*_+c*h+u*f-a*m,e[n+2]=u*_+c*m+a*h-l*f,e[n+3]=c*_-a*f-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(o/2),h=l(i/2),m=l(r/2),_=l(o/2);switch(s){case"XYZ":this._x=h*c*f+u*m*_,this._y=u*m*f-h*c*_,this._z=u*c*_+h*m*f,this._w=u*c*f-h*m*_;break;case"YXZ":this._x=h*c*f+u*m*_,this._y=u*m*f-h*c*_,this._z=u*c*_-h*m*f,this._w=u*c*f+h*m*_;break;case"ZXY":this._x=h*c*f-u*m*_,this._y=u*m*f+h*c*_,this._z=u*c*_+h*m*f,this._w=u*c*f-h*m*_;break;case"ZYX":this._x=h*c*f-u*m*_,this._y=u*m*f+h*c*_,this._z=u*c*_-h*m*f,this._w=u*c*f+h*m*_;break;case"YZX":this._x=h*c*f+u*m*_,this._y=u*m*f+h*c*_,this._z=u*c*_-h*m*f,this._w=u*c*f-h*m*_;break;case"XZY":this._x=h*c*f-u*m*_,this._y=u*m*f-h*c*_,this._z=u*c*_+h*m*f,this._w=u*c*f+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],c=n[6],f=n[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(c-l)*m,this._y=(o-u)*m,this._z=(s-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(c-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+u)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(o-u)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(s-r)/m,this._x=(o+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+s*a+r*u-o*l,this._y=r*c+s*l+o*a-i*u,this._z=o*c+s*u+i*l-r*a,this._w=s*c-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*s+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*o+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-n)*c)/u,h=Math.sin(n*c)/u;return this._w=s*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=o*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(o),i*Math.cos(o),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,n=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Km.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Km.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=2*(s*r-a*i),c=2*(a*n-o*r),f=2*(o*i-s*n);return this.x=n+l*u+s*f-a*c,this.y=i+l*c+a*u-o*f,this.z=r+l*f+o*c-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Cc.copy(this).projectOnVector(e),this.sub(Cc)}reflect(e){return this.sub(Cc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cc=new H,Km=new xa;class Sa{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Hn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Hn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Hn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Hn):Hn.fromBufferAttribute(o,s),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qa.copy(i.boundingBox)),qa.applyMatrix4(e.matrixWorld),this.union(qa)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ms),Ya.subVectors(this.max,ms),to.subVectors(e.a,ms),no.subVectors(e.b,ms),io.subVectors(e.c,ms),Oi.subVectors(no,to),ki.subVectors(io,no),_r.subVectors(to,io);let n=[0,-Oi.z,Oi.y,0,-ki.z,ki.y,0,-_r.z,_r.y,Oi.z,0,-Oi.x,ki.z,0,-ki.x,_r.z,0,-_r.x,-Oi.y,Oi.x,0,-ki.y,ki.x,0,-_r.y,_r.x,0];return!Pc(n,to,no,io,Ya)||(n=[1,0,0,0,1,0,0,0,1],!Pc(n,to,no,io,Ya))?!1:($a.crossVectors(Oi,ki),n=[$a.x,$a.y,$a.z],Pc(n,to,no,io,Ya))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gi=[new H,new H,new H,new H,new H,new H,new H,new H],Hn=new H,qa=new Sa,to=new H,no=new H,io=new H,Oi=new H,ki=new H,_r=new H,ms=new H,Ya=new H,$a=new H,xr=new H;function Pc(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){xr.fromArray(t,o);const a=r.x*Math.abs(xr.x)+r.y*Math.abs(xr.y)+r.z*Math.abs(xr.z),l=e.dot(xr),u=n.dot(xr),c=i.dot(xr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const e1=new Sa,gs=new H,Lc=new H;class Nu{constructor(e=new H,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):e1.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gs.subVectors(e,this.center);const n=gs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(gs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gs.copy(e.center).add(Lc)),this.expandByPoint(gs.copy(e.center).sub(Lc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vi=new H,bc=new H,Ka=new H,zi=new H,Dc=new H,Za=new H,Uc=new H;class B_{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=vi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,n),vi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){bc.copy(e).add(n).multiplyScalar(.5),Ka.copy(n).sub(e).normalize(),zi.copy(this.origin).sub(bc);const o=e.distanceTo(n)*.5,s=-this.direction.dot(Ka),a=zi.dot(this.direction),l=-zi.dot(Ka),u=zi.lengthSq(),c=Math.abs(1-s*s);let f,h,m,_;if(c>0)if(f=s*l-a,h=s*a-l,_=o*c,f>=0)if(h>=-_)if(h<=_){const x=1/c;f*=x,h*=x,m=f*(f+s*h+2*a)+h*(s*f+h+2*l)+u}else h=o,f=Math.max(0,-(s*h+a)),m=-f*f+h*(h+2*l)+u;else h=-o,f=Math.max(0,-(s*h+a)),m=-f*f+h*(h+2*l)+u;else h<=-_?(f=Math.max(0,-(-s*o+a)),h=f>0?-o:Math.min(Math.max(-o,-l),o),m=-f*f+h*(h+2*l)+u):h<=_?(f=0,h=Math.min(Math.max(-o,-l),o),m=h*(h+2*l)+u):(f=Math.max(0,-(s*o+a)),h=f>0?o:Math.min(Math.max(-o,-l),o),m=-f*f+h*(h+2*l)+u);else h=s>0?-o:o,f=Math.max(0,-(s*h+a)),m=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(bc).addScaledVector(Ka,h),m}intersectSphere(e,n){vi.subVectors(e.center,this.origin);const i=vi.dot(this.direction),r=vi.dot(vi)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(o=(e.min.y-h.y)*c,s=(e.max.y-h.y)*c):(o=(e.max.y-h.y)*c,s=(e.min.y-h.y)*c),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,n,i,r,o){Dc.subVectors(n,e),Za.subVectors(i,e),Uc.crossVectors(Dc,Za);let s=this.direction.dot(Uc),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;zi.subVectors(this.origin,e);const l=a*this.direction.dot(Za.crossVectors(zi,Za));if(l<0)return null;const u=a*this.direction.dot(Dc.cross(zi));if(u<0||l+u>s)return null;const c=-a*zi.dot(Uc);return c<0?null:this.at(c/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,n,i,r,o,s,a,l,u,c,f,h,m,_,x,p){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u,c,f,h,m,_,x,p)}set(e,n,i,r,o,s,a,l,u,c,f,h,m,_,x,p){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=o,d[5]=s,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=m,d[7]=_,d[11]=x,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ro.setFromMatrixColumn(e,0).length(),o=1/ro.setFromMatrixColumn(e,1).length(),s=1/ro.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const h=s*c,m=s*f,_=a*c,x=a*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=m+_*u,n[5]=h-x*u,n[9]=-a*l,n[2]=x-h*u,n[6]=_+m*u,n[10]=s*l}else if(e.order==="YXZ"){const h=l*c,m=l*f,_=u*c,x=u*f;n[0]=h+x*a,n[4]=_*a-m,n[8]=s*u,n[1]=s*f,n[5]=s*c,n[9]=-a,n[2]=m*a-_,n[6]=x+h*a,n[10]=s*l}else if(e.order==="ZXY"){const h=l*c,m=l*f,_=u*c,x=u*f;n[0]=h-x*a,n[4]=-s*f,n[8]=_+m*a,n[1]=m+_*a,n[5]=s*c,n[9]=x-h*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const h=s*c,m=s*f,_=a*c,x=a*f;n[0]=l*c,n[4]=_*u-m,n[8]=h*u+x,n[1]=l*f,n[5]=x*u+h,n[9]=m*u-_,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const h=s*l,m=s*u,_=a*l,x=a*u;n[0]=l*c,n[4]=x-h*f,n[8]=_*f+m,n[1]=f,n[5]=s*c,n[9]=-a*c,n[2]=-u*c,n[6]=m*f+_,n[10]=h-x*f}else if(e.order==="XZY"){const h=s*l,m=s*u,_=a*l,x=a*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=h*f+x,n[5]=s*c,n[9]=m*f-_,n[2]=_*f-m,n[6]=a*c,n[10]=x*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(t1,e,n1)}lookAt(e,n,i){const r=this.elements;return vn.subVectors(e,n),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Bi.crossVectors(i,vn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Bi.crossVectors(i,vn)),Bi.normalize(),Qa.crossVectors(vn,Bi),r[0]=Bi.x,r[4]=Qa.x,r[8]=vn.x,r[1]=Bi.y,r[5]=Qa.y,r[9]=vn.y,r[2]=Bi.z,r[6]=Qa.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],m=i[13],_=i[2],x=i[6],p=i[10],d=i[14],v=i[3],g=i[7],S=i[11],M=i[15],T=r[0],R=r[4],L=r[8],y=r[12],A=r[1],I=r[5],Y=r[9],$=r[13],b=r[2],P=r[6],G=r[10],B=r[14],N=r[3],k=r[7],z=r[11],D=r[15];return o[0]=s*T+a*A+l*b+u*N,o[4]=s*R+a*I+l*P+u*k,o[8]=s*L+a*Y+l*G+u*z,o[12]=s*y+a*$+l*B+u*D,o[1]=c*T+f*A+h*b+m*N,o[5]=c*R+f*I+h*P+m*k,o[9]=c*L+f*Y+h*G+m*z,o[13]=c*y+f*$+h*B+m*D,o[2]=_*T+x*A+p*b+d*N,o[6]=_*R+x*I+p*P+d*k,o[10]=_*L+x*Y+p*G+d*z,o[14]=_*y+x*$+p*B+d*D,o[3]=v*T+g*A+S*b+M*N,o[7]=v*R+g*I+S*P+M*k,o[11]=v*L+g*Y+S*G+M*z,o[15]=v*y+g*$+S*B+M*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],m=e[14],_=e[3],x=e[7],p=e[11],d=e[15];return _*(+o*l*f-r*u*f-o*a*h+i*u*h+r*a*m-i*l*m)+x*(+n*l*m-n*u*h+o*s*h-r*s*m+r*u*c-o*l*c)+p*(+n*u*f-n*a*m-o*s*f+i*s*m+o*a*c-i*u*c)+d*(-r*a*c-n*l*f+n*a*h+r*s*f-i*s*h+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],m=e[11],_=e[12],x=e[13],p=e[14],d=e[15],v=f*p*u-x*h*u+x*l*m-a*p*m-f*l*d+a*h*d,g=_*h*u-c*p*u-_*l*m+s*p*m+c*l*d-s*h*d,S=c*x*u-_*f*u+_*a*m-s*x*m-c*a*d+s*f*d,M=_*f*l-c*x*l-_*a*h+s*x*h+c*a*p-s*f*p,T=n*v+i*g+r*S+o*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=v*R,e[1]=(x*h*o-f*p*o-x*r*m+i*p*m+f*r*d-i*h*d)*R,e[2]=(a*p*o-x*l*o+x*r*u-i*p*u-a*r*d+i*l*d)*R,e[3]=(f*l*o-a*h*o-f*r*u+i*h*u+a*r*m-i*l*m)*R,e[4]=g*R,e[5]=(c*p*o-_*h*o+_*r*m-n*p*m-c*r*d+n*h*d)*R,e[6]=(_*l*o-s*p*o-_*r*u+n*p*u+s*r*d-n*l*d)*R,e[7]=(s*h*o-c*l*o+c*r*u-n*h*u-s*r*m+n*l*m)*R,e[8]=S*R,e[9]=(_*f*o-c*x*o-_*i*m+n*x*m+c*i*d-n*f*d)*R,e[10]=(s*x*o-_*a*o+_*i*u-n*x*u-s*i*d+n*a*d)*R,e[11]=(c*a*o-s*f*o-c*i*u+n*f*u+s*i*m-n*a*m)*R,e[12]=M*R,e[13]=(c*x*r-_*f*r+_*i*h-n*x*h-c*i*p+n*f*p)*R,e[14]=(_*a*r-s*x*r-_*i*l+n*x*l+s*i*p-n*a*p)*R,e[15]=(s*f*r-c*a*r+c*i*l-n*f*l-s*i*h+n*a*h)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,c=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*s,0,u*l-r*a,c*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,c=s+s,f=a+a,h=o*u,m=o*c,_=o*f,x=s*c,p=s*f,d=a*f,v=l*u,g=l*c,S=l*f,M=i.x,T=i.y,R=i.z;return r[0]=(1-(x+d))*M,r[1]=(m+S)*M,r[2]=(_-g)*M,r[3]=0,r[4]=(m-S)*T,r[5]=(1-(h+d))*T,r[6]=(p+v)*T,r[7]=0,r[8]=(_+g)*R,r[9]=(p-v)*R,r[10]=(1-(h+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=ro.set(r[0],r[1],r[2]).length();const s=ro.set(r[4],r[5],r[6]).length(),a=ro.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Gn.copy(this);const u=1/o,c=1/s,f=1/a;return Gn.elements[0]*=u,Gn.elements[1]*=u,Gn.elements[2]*=u,Gn.elements[4]*=c,Gn.elements[5]*=c,Gn.elements[6]*=c,Gn.elements[8]*=f,Gn.elements[9]*=f,Gn.elements[10]*=f,n.setFromRotationMatrix(Gn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=Ri){const l=this.elements,u=2*o/(n-e),c=2*o/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let m,_;if(a===Ri)m=-(s+o)/(s-o),_=-2*s*o/(s-o);else if(a===mu)m=-s/(s-o),_=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=Ri){const l=this.elements,u=1/(n-e),c=1/(i-r),f=1/(s-o),h=(n+e)*u,m=(i+r)*c;let _,x;if(a===Ri)_=(s+o)*f,x=-2*f;else if(a===mu)_=o*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ro=new H,Gn=new Et,t1=new H(0,0,0),n1=new H(1,1,1),Bi=new H,Qa=new H,vn=new H,Zm=new Et,Qm=new xa;class Iu{constructor(e=0,n=0,i=0,r=Iu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-sn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-sn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Zm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Qm.setFromEuler(this),this.setFromQuaternion(Qm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Iu.DEFAULT_ORDER="XYZ";class H_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let i1=0;const Jm=new H,oo=new xa,_i=new Et,Ja=new H,vs=new H,r1=new H,o1=new xa,eg=new H(1,0,0),tg=new H(0,1,0),ng=new H(0,0,1),s1={type:"added"},a1={type:"removed"};class zt extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:i1++}),this.uuid=_a(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new H,n=new Iu,i=new xa,r=new H(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new ke}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new H_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return oo.setFromAxisAngle(e,n),this.quaternion.multiply(oo),this}rotateOnWorldAxis(e,n){return oo.setFromAxisAngle(e,n),this.quaternion.premultiply(oo),this}rotateX(e){return this.rotateOnAxis(eg,e)}rotateY(e){return this.rotateOnAxis(tg,e)}rotateZ(e){return this.rotateOnAxis(ng,e)}translateOnAxis(e,n){return Jm.copy(e).applyQuaternion(this.quaternion),this.position.add(Jm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(eg,e)}translateY(e){return this.translateOnAxis(tg,e)}translateZ(e){return this.translateOnAxis(ng,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ja.copy(e):Ja.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(vs,Ja,this.up):_i.lookAt(Ja,vs,this.up),this.quaternion.setFromRotationMatrix(_i),r&&(_i.extractRotation(r.matrixWorld),oo.setFromRotationMatrix(_i),this.quaternion.premultiply(oo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(s1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(a1)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,o=this.children.length;r<o;r++){const s=this.children[r].getObjectsByProperty(e,n);s.length>0&&(i=i.concat(s))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,e,r1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,o1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];o(e.shapes,f)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),c=s(e.images),f=s(e.shapes),h=s(e.skeletons),m=s(e.animations),_=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function s(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}zt.DEFAULT_UP=new H(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new H,xi=new H,Nc=new H,Si=new H,so=new H,ao=new H,ig=new H,Ic=new H,Fc=new H,Oc=new H;let el=!1;class qn{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Vn.subVectors(e,n),r.cross(Vn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Vn.subVectors(r,n),xi.subVectors(i,n),Nc.subVectors(e,n);const s=Vn.dot(Vn),a=Vn.dot(xi),l=Vn.dot(Nc),u=xi.dot(xi),c=xi.dot(Nc),f=s*u-a*a;if(f===0)return o.set(-2,-1,-1);const h=1/f,m=(u*l-a*c)*h,_=(s*c-a*l)*h;return o.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Si),Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getUV(e,n,i,r,o,s,a,l){return el===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),el=!0),this.getInterpolation(e,n,i,r,o,s,a,l)}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,Si),l.setScalar(0),l.addScaledVector(o,Si.x),l.addScaledVector(s,Si.y),l.addScaledVector(a,Si.z),l}static isFrontFacing(e,n,i,r){return Vn.subVectors(i,n),xi.subVectors(e,n),Vn.cross(xi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Vn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return qn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,o){return el===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),el=!0),qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}getInterpolation(e,n,i,r,o){return qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;so.subVectors(r,i),ao.subVectors(o,i),Ic.subVectors(e,i);const l=so.dot(Ic),u=ao.dot(Ic);if(l<=0&&u<=0)return n.copy(i);Fc.subVectors(e,r);const c=so.dot(Fc),f=ao.dot(Fc);if(c>=0&&f<=c)return n.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return s=l/(l-c),n.copy(i).addScaledVector(so,s);Oc.subVectors(e,o);const m=so.dot(Oc),_=ao.dot(Oc);if(_>=0&&m<=_)return n.copy(o);const x=m*u-l*_;if(x<=0&&u>=0&&_<=0)return a=u/(u-_),n.copy(i).addScaledVector(ao,a);const p=c*_-m*f;if(p<=0&&f-c>=0&&m-_>=0)return ig.subVectors(o,r),a=(f-c)/(f-c+(m-_)),n.copy(r).addScaledVector(ig,a);const d=1/(p+x+h);return s=x*d,a=h*d,n.copy(i).addScaledVector(so,s).addScaledVector(ao,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const G_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},tl={h:0,s:0,l:0};function kc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class We{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=qE(e,1),n=sn(n,0,1),i=sn(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=kc(s,o,e+1/3),this.g=kc(s,o,e),this.b=kc(s,o,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=Ft){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ft){const i=G_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zo(e.r),this.g=zo(e.g),this.b=zo(e.b),this}copyLinearToSRGB(e){return this.r=Ac(e.r),this.g=Ac(e.g),this.b=Ac(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return Je.fromWorkingColorSpace(Xt.copy(this),e),Math.round(sn(Xt.r*255,0,255))*65536+Math.round(sn(Xt.g*255,0,255))*256+Math.round(sn(Xt.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(Xt.copy(this),n);const i=Xt.r,r=Xt.g,o=Xt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const c=(a+s)/2;if(a===s)l=0,u=0;else{const f=s-a;switch(u=c<=.5?f/(s+a):f/(2-s-a),s){case i:l=(r-o)/f+(r<o?6:0);break;case r:l=(o-i)/f+2;break;case o:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(Xt.copy(this),n),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Ft){Je.fromWorkingColorSpace(Xt.copy(this),e);const n=Xt.r,i=Xt.g,r=Xt.b;return e!==Ft?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+n,Hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Hi),e.getHSL(tl);const i=Tc(Hi.h,tl.h,n),r=Tc(Hi.s,tl.s,n),o=Tc(Hi.l,tl.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new We;We.NAMES=G_;let l1=0;class is extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:l1++}),this.uuid=_a(),this.name="",this.type="Material",this.blending=ko,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sd,this.blendDst=ad,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=fu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ko&&(i.blending=this.blending),this.side!==fr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sd&&(i.blendSrc=this.blendSrc),this.blendDst!==ad&&(i.blendDst=this.blendDst),this.blendEquation!==Rr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class V_ extends is{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new H,nl=new $e;class pi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Wm,this.updateRange={offset:0,count:-1},this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)nl.fromBufferAttribute(this,n),nl.applyMatrix3(e),this.setXY(n,nl.x,nl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ps(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=rn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ps(n,this.array)),n}setX(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ps(n,this.array)),n}setY(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ps(n,this.array)),n}setZ(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ps(n,this.array)),n}setW(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array),o=rn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wm&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class W_ extends pi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class X_ extends pi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ei extends pi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let u1=0;const Cn=new Et,zc=new zt,lo=new H,_n=new Sa,_s=new Sa,Lt=new H;class ri extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:u1++}),this.uuid=_a(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(F_(e)?X_:W_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new ke().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,n,i){return Cn.makeTranslation(e,n,i),this.applyMatrix4(Cn),this}scale(e,n,i){return Cn.makeScale(e,n,i),this.applyMatrix4(Cn),this}lookAt(e){return zc.lookAt(e),zc.updateMatrix(),this.applyMatrix4(zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lo).negate(),this.translate(lo.x,lo.y,lo.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new ei(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];_n.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];_s.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(_n.min,_s.min),_n.expandByPoint(Lt),Lt.addVectors(_n.max,_s.max),_n.expandByPoint(Lt)):(_n.expandByPoint(_s.min),_n.expandByPoint(_s.max))}_n.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Lt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Lt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Lt.fromBufferAttribute(a,u),l&&(lo.fromBufferAttribute(e,u),Lt.add(lo)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,o=n.normal.array,s=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let A=0;A<a;A++)u[A]=new H,c[A]=new H;const f=new H,h=new H,m=new H,_=new $e,x=new $e,p=new $e,d=new H,v=new H;function g(A,I,Y){f.fromArray(r,A*3),h.fromArray(r,I*3),m.fromArray(r,Y*3),_.fromArray(s,A*2),x.fromArray(s,I*2),p.fromArray(s,Y*2),h.sub(f),m.sub(f),x.sub(_),p.sub(_);const $=1/(x.x*p.y-p.x*x.y);isFinite($)&&(d.copy(h).multiplyScalar(p.y).addScaledVector(m,-x.y).multiplyScalar($),v.copy(m).multiplyScalar(x.x).addScaledVector(h,-p.x).multiplyScalar($),u[A].add(d),u[I].add(d),u[Y].add(d),c[A].add(v),c[I].add(v),c[Y].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let A=0,I=S.length;A<I;++A){const Y=S[A],$=Y.start,b=Y.count;for(let P=$,G=$+b;P<G;P+=3)g(i[P+0],i[P+1],i[P+2])}const M=new H,T=new H,R=new H,L=new H;function y(A){R.fromArray(o,A*3),L.copy(R);const I=u[A];M.copy(I),M.sub(R.multiplyScalar(R.dot(I))).normalize(),T.crossVectors(L,I);const $=T.dot(c[A])<0?-1:1;l[A*4]=M.x,l[A*4+1]=M.y,l[A*4+2]=M.z,l[A*4+3]=$}for(let A=0,I=S.length;A<I;++A){const Y=S[A],$=Y.start,b=Y.count;for(let P=$,G=$+b;P<G;P+=3)y(i[P+0]),y(i[P+1]),y(i[P+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new H,o=new H,s=new H,a=new H,l=new H,u=new H,c=new H,f=new H;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,x),s.fromBufferAttribute(n,p),c.subVectors(s,o),f.subVectors(r,o),c.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),o.fromBufferAttribute(n,h+1),s.fromBufferAttribute(n,h+2),c.subVectors(s,o),f.subVectors(r,o),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Lt.fromBufferAttribute(e,n),Lt.normalize(),e.setXYZ(n,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let m=0,_=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*c;for(let d=0;d<c;d++)h[_++]=u[m++]}return new pi(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ri,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const m=u[f];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const o=e.morphAttributes;for(const u in o){const c=[],f=o[u];for(let h=0,m=f.length;h<m;h++)c.push(f[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,c=s.length;u<c;u++){const f=s[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rg=new Et,Sr=new B_,il=new Nu,og=new H,uo=new H,co=new H,fo=new H,Bc=new H,rl=new H,ol=new $e,sl=new $e,al=new $e,sg=new H,ag=new H,lg=new H,ll=new H,ul=new H;class Ci extends zt{constructor(e=new ri,n=new V_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){rl.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const c=a[l],f=o[l];c!==0&&(Bc.fromBufferAttribute(f,e),s?rl.addScaledVector(Bc,c):rl.addScaledVector(Bc.sub(n),c))}n.add(rl)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),il.copy(i.boundingSphere),il.applyMatrix4(o),Sr.copy(e.ray).recast(e.near),!(il.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(il,og)===null||Sr.origin.distanceToSquared(og)>(e.far-e.near)**2))&&(rg.copy(o).invert(),Sr.copy(e.ray).applyMatrix4(rg),!(i.boundingBox!==null&&Sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Sr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,u=o.attributes.uv,c=o.attributes.uv1,f=o.attributes.normal,h=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(s))for(let _=0,x=h.length;_<x;_++){const p=h[_],d=s[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=v,M=g;S<M;S+=3){const T=a.getX(S),R=a.getX(S+1),L=a.getX(S+2);r=cl(this,d,e,i,u,c,f,T,R,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=_,d=x;p<d;p+=3){const v=a.getX(p),g=a.getX(p+1),S=a.getX(p+2);r=cl(this,s,e,i,u,c,f,v,g,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,x=h.length;_<x;_++){const p=h[_],d=s[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=v,M=g;S<M;S+=3){const T=S,R=S+1,L=S+2;r=cl(this,d,e,i,u,c,f,T,R,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=_,d=x;p<d;p+=3){const v=p,g=p+1,S=p+2;r=cl(this,s,e,i,u,c,f,v,g,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function c1(t,e,n,i,r,o,s,a){let l;if(e.side===dn?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===fr,a),l===null)return null;ul.copy(a),ul.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(ul);return u<n.near||u>n.far?null:{distance:u,point:ul.clone(),object:t}}function cl(t,e,n,i,r,o,s,a,l,u){t.getVertexPosition(a,uo),t.getVertexPosition(l,co),t.getVertexPosition(u,fo);const c=c1(t,e,n,i,uo,co,fo,ll);if(c){r&&(ol.fromBufferAttribute(r,a),sl.fromBufferAttribute(r,l),al.fromBufferAttribute(r,u),c.uv=qn.getInterpolation(ll,uo,co,fo,ol,sl,al,new $e)),o&&(ol.fromBufferAttribute(o,a),sl.fromBufferAttribute(o,l),al.fromBufferAttribute(o,u),c.uv1=qn.getInterpolation(ll,uo,co,fo,ol,sl,al,new $e),c.uv2=c.uv1),s&&(sg.fromBufferAttribute(s,a),ag.fromBufferAttribute(s,l),lg.fromBufferAttribute(s,u),c.normal=qn.getInterpolation(ll,uo,co,fo,sg,ag,lg,new H),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new H,materialIndex:0};qn.getNormal(uo,co,fo,f.normal),c.face=f}return c}class ya extends ri{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],c=[],f=[];let h=0,m=0;_("z","y","x",-1,-1,i,n,e,s,o,0),_("z","y","x",1,-1,i,n,-e,s,o,1),_("x","z","y",1,1,e,i,n,r,s,2),_("x","z","y",1,-1,e,i,-n,r,s,3),_("x","y","z",1,-1,e,n,i,r,o,4),_("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new ei(u,3)),this.setAttribute("normal",new ei(c,3)),this.setAttribute("uv",new ei(f,2));function _(x,p,d,v,g,S,M,T,R,L,y){const A=S/R,I=M/L,Y=S/2,$=M/2,b=T/2,P=R+1,G=L+1;let B=0,N=0;const k=new H;for(let z=0;z<G;z++){const D=z*I-$;for(let O=0;O<P;O++){const ne=O*A-Y;k[x]=ne*v,k[p]=D*g,k[d]=b,u.push(k.x,k.y,k.z),k[x]=0,k[p]=0,k[d]=T>0?1:-1,c.push(k.x,k.y,k.z),f.push(O/R),f.push(1-z/L),B+=1}}for(let z=0;z<L;z++)for(let D=0;D<R;D++){const O=h+D+P*z,ne=h+D+P*(z+1),se=h+(D+1)+P*(z+1),le=h+(D+1)+P*z;l.push(O,ne,le),l.push(ne,se,le),N+=6}a.addGroup(m,N,y),m+=N,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ya(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Zt(t){const e={};for(let n=0;n<t.length;n++){const i=Qo(t[n]);for(const r in i)e[r]=i[r]}return e}function f1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function j_(t){return t.getRenderTarget()===null?t.outputColorSpace:Je.workingColorSpace}const d1={clone:Qo,merge:Zt};var h1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yr extends is{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=h1,this.fragmentShader=p1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qo(e.uniforms),this.uniformsGroups=f1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class q_ extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Ri}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Dn extends q_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=hd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ec*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hd*2*Math.atan(Math.tan(Ec*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ec*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ho=-90,po=1;class m1 extends zt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Dn(ho,po,e,n);r.layers=this.layers,this.add(r);const o=new Dn(ho,po,e,n);o.layers=this.layers,this.add(o);const s=new Dn(ho,po,e,n);s.layers=this.layers,this.add(s);const a=new Dn(ho,po,e,n);a.layers=this.layers,this.add(a);const l=new Dn(ho,po,e,n);l.layers=this.layers,this.add(l);const u=new Dn(ho,po,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const u of n)this.remove(u);if(e===Ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===mu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(f,h,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Y_ extends hn{constructor(e,n,i,r,o,s,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:$o,super(e,n,i,r,o,s,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class g1 extends qr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Ws("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Or?Ft:Un),this.texture=new Y_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:bn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ya(5,5,5),o=new Yr({name:"CubemapFromEquirect",uniforms:Qo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:or});o.uniforms.tEquirect.value=n;const s=new Ci(r,o),a=n.minFilter;return n.minFilter===ca&&(n.minFilter=bn),new m1(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const Hc=new H,v1=new H,_1=new ke;class Tr{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Hc.subVectors(i,n).cross(v1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Hc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||_1.getNormalMatrix(e),r=this.coplanarPoint(Hc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new Nu,fl=new H;class xh{constructor(e=new Tr,n=new Tr,i=new Tr,r=new Tr,o=new Tr,s=new Tr){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ri){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],m=r[8],_=r[9],x=r[10],p=r[11],d=r[12],v=r[13],g=r[14],S=r[15];if(i[0].setComponents(l-o,h-u,p-m,S-d).normalize(),i[1].setComponents(l+o,h+u,p+m,S+d).normalize(),i[2].setComponents(l+s,h+c,p+_,S+v).normalize(),i[3].setComponents(l-s,h-c,p-_,S-v).normalize(),i[4].setComponents(l-a,h-f,p-x,S-g).normalize(),n===Ri)i[5].setComponents(l+a,h+f,p+x,S+g).normalize();else if(n===mu)i[5].setComponents(a,f,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){return yr.center.set(0,0,0),yr.radius=.7071067811865476,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(fl.x=r.normal.x>0?e.max.x:e.min.x,fl.y=r.normal.y>0?e.max.y:e.min.y,fl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $_(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function x1(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,h=u.usage,m=t.createBuffer();t.bindBuffer(c,m),t.bufferData(c,f,h),u.onUploadCallback();let _;if(f instanceof Float32Array)_=t.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=t.SHORT;else if(f instanceof Uint32Array)_=t.UNSIGNED_INT;else if(f instanceof Int32Array)_=t.INT;else if(f instanceof Int8Array)_=t.BYTE;else if(f instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function o(u,c,f){const h=c.array,m=c.updateRange;t.bindBuffer(f,u),m.count===-1?t.bufferSubData(f,0,h):(n?t.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):t.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f===void 0?i.set(u,r(u,c)):f.version<u.version&&(o(f.buffer,u,c),f.version=u.version)}return{get:s,remove:a,update:l}}class Sh extends ri{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=n/l,m=[],_=[],x=[],p=[];for(let d=0;d<c;d++){const v=d*h-s;for(let g=0;g<u;g++){const S=g*f-o;_.push(S,-v,0),x.push(0,0,1),p.push(g/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const g=v+u*d,S=v+u*(d+1),M=v+1+u*(d+1),T=v+1+u*d;m.push(g,S,T),m.push(S,M,T)}this.setIndex(m),this.setAttribute("position",new ei(_,3)),this.setAttribute("normal",new ei(x,3)),this.setAttribute("uv",new ei(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sh(e.width,e.height,e.widthSegments,e.heightSegments)}}var S1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,y1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,M1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,E1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,w1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,A1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,R1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,P1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,L1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,b1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,D1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,U1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,N1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,I1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,F1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,O1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,k1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,z1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,B1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,H1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,G1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,V1=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,W1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,j1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,q1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Y1="gl_FragColor = linearToOutputTexel( gl_FragColor );",$1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,K1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Z1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Q1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,J1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sT=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,aT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,dT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,vT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_T=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ST=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,MT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ET=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,TT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,wT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,CT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,UT=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,NT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,IT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,FT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,OT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,HT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$T=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ZT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ew=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,ow=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,aw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_w=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ew=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Tw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ww=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Aw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Rw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bw=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Dw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Fw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ow=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ww=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qw=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$w=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:S1,alphahash_pars_fragment:y1,alphamap_fragment:M1,alphamap_pars_fragment:E1,alphatest_fragment:T1,alphatest_pars_fragment:w1,aomap_fragment:A1,aomap_pars_fragment:R1,begin_vertex:C1,beginnormal_vertex:P1,bsdfs:L1,iridescence_fragment:b1,bumpmap_pars_fragment:D1,clipping_planes_fragment:U1,clipping_planes_pars_fragment:N1,clipping_planes_pars_vertex:I1,clipping_planes_vertex:F1,color_fragment:O1,color_pars_fragment:k1,color_pars_vertex:z1,color_vertex:B1,common:H1,cube_uv_reflection_fragment:G1,defaultnormal_vertex:V1,displacementmap_pars_vertex:W1,displacementmap_vertex:X1,emissivemap_fragment:j1,emissivemap_pars_fragment:q1,colorspace_fragment:Y1,colorspace_pars_fragment:$1,envmap_fragment:K1,envmap_common_pars_fragment:Z1,envmap_pars_fragment:Q1,envmap_pars_vertex:J1,envmap_physical_pars_fragment:fT,envmap_vertex:eT,fog_vertex:tT,fog_pars_vertex:nT,fog_fragment:iT,fog_pars_fragment:rT,gradientmap_pars_fragment:oT,lightmap_fragment:sT,lightmap_pars_fragment:aT,lights_lambert_fragment:lT,lights_lambert_pars_fragment:uT,lights_pars_begin:cT,lights_toon_fragment:dT,lights_toon_pars_fragment:hT,lights_phong_fragment:pT,lights_phong_pars_fragment:mT,lights_physical_fragment:gT,lights_physical_pars_fragment:vT,lights_fragment_begin:_T,lights_fragment_maps:xT,lights_fragment_end:ST,logdepthbuf_fragment:yT,logdepthbuf_pars_fragment:MT,logdepthbuf_pars_vertex:ET,logdepthbuf_vertex:TT,map_fragment:wT,map_pars_fragment:AT,map_particle_fragment:RT,map_particle_pars_fragment:CT,metalnessmap_fragment:PT,metalnessmap_pars_fragment:LT,morphcolor_vertex:bT,morphnormal_vertex:DT,morphtarget_pars_vertex:UT,morphtarget_vertex:NT,normal_fragment_begin:IT,normal_fragment_maps:FT,normal_pars_fragment:OT,normal_pars_vertex:kT,normal_vertex:zT,normalmap_pars_fragment:BT,clearcoat_normal_fragment_begin:HT,clearcoat_normal_fragment_maps:GT,clearcoat_pars_fragment:VT,iridescence_pars_fragment:WT,opaque_fragment:XT,packing:jT,premultiplied_alpha_fragment:qT,project_vertex:YT,dithering_fragment:$T,dithering_pars_fragment:KT,roughnessmap_fragment:ZT,roughnessmap_pars_fragment:QT,shadowmap_pars_fragment:JT,shadowmap_pars_vertex:ew,shadowmap_vertex:tw,shadowmask_pars_fragment:nw,skinbase_vertex:iw,skinning_pars_vertex:rw,skinning_vertex:ow,skinnormal_vertex:sw,specularmap_fragment:aw,specularmap_pars_fragment:lw,tonemapping_fragment:uw,tonemapping_pars_fragment:cw,transmission_fragment:fw,transmission_pars_fragment:dw,uv_pars_fragment:hw,uv_pars_vertex:pw,uv_vertex:mw,worldpos_vertex:gw,background_vert:vw,background_frag:_w,backgroundCube_vert:xw,backgroundCube_frag:Sw,cube_vert:yw,cube_frag:Mw,depth_vert:Ew,depth_frag:Tw,distanceRGBA_vert:ww,distanceRGBA_frag:Aw,equirect_vert:Rw,equirect_frag:Cw,linedashed_vert:Pw,linedashed_frag:Lw,meshbasic_vert:bw,meshbasic_frag:Dw,meshlambert_vert:Uw,meshlambert_frag:Nw,meshmatcap_vert:Iw,meshmatcap_frag:Fw,meshnormal_vert:Ow,meshnormal_frag:kw,meshphong_vert:zw,meshphong_frag:Bw,meshphysical_vert:Hw,meshphysical_frag:Gw,meshtoon_vert:Vw,meshtoon_frag:Ww,points_vert:Xw,points_frag:jw,shadow_vert:qw,shadow_frag:Yw,sprite_vert:$w,sprite_frag:Kw},ae={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},li={basic:{uniforms:Zt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Zt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new We(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Zt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Zt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Zt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new We(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Zt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Zt([ae.points,ae.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Zt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Zt([ae.common,ae.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Zt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Zt([ae.sprite,ae.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Zt([ae.common,ae.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Zt([ae.lights,ae.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};li.physical={uniforms:Zt([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const dl={r:0,b:0,g:0};function Zw(t,e,n,i,r,o,s){const a=new We(0);let l=o===!0?0:1,u,c,f=null,h=0,m=null;function _(p,d){let v=!1,g=d.isScene===!0?d.background:null;g&&g.isTexture&&(g=(d.backgroundBlurriness>0?n:e).get(g)),g===null?x(a,l):g&&g.isColor&&(x(g,1),v=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Du)?(c===void 0&&(c=new Ci(new ya(1,1,1),new Yr({name:"BackgroundCubeMaterial",uniforms:Qo(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Je.getTransfer(g.colorSpace)!==st,(f!==g||h!==g.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,f=g,h=g.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new Ci(new Sh(2,2),new Yr({name:"BackgroundMaterial",uniforms:Qo(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Je.getTransfer(g.colorSpace)!==st,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||h!==g.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,f=g,h=g.version,m=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function x(p,d){p.getRGB(dl,j_(t)),i.buffers.color.setClear(dl.r,dl.g,dl.b,d,s)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),l=d,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(a,l)},render:_}}function Qw(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},l=p(null);let u=l,c=!1;function f(b,P,G,B,N){let k=!1;if(s){const z=x(B,G,P);u!==z&&(u=z,m(u.object)),k=d(b,B,G,N),k&&v(b,B,G,N)}else{const z=P.wireframe===!0;(u.geometry!==B.id||u.program!==G.id||u.wireframe!==z)&&(u.geometry=B.id,u.program=G.id,u.wireframe=z,k=!0)}N!==null&&n.update(N,t.ELEMENT_ARRAY_BUFFER),(k||c)&&(c=!1,L(b,P,G,B),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(N).buffer))}function h(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function m(b){return i.isWebGL2?t.bindVertexArray(b):o.bindVertexArrayOES(b)}function _(b){return i.isWebGL2?t.deleteVertexArray(b):o.deleteVertexArrayOES(b)}function x(b,P,G){const B=G.wireframe===!0;let N=a[b.id];N===void 0&&(N={},a[b.id]=N);let k=N[P.id];k===void 0&&(k={},N[P.id]=k);let z=k[B];return z===void 0&&(z=p(h()),k[B]=z),z}function p(b){const P=[],G=[],B=[];for(let N=0;N<r;N++)P[N]=0,G[N]=0,B[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:G,attributeDivisors:B,object:b,attributes:{},index:null}}function d(b,P,G,B){const N=u.attributes,k=P.attributes;let z=0;const D=G.getAttributes();for(const O in D)if(D[O].location>=0){const se=N[O];let le=k[O];if(le===void 0&&(O==="instanceMatrix"&&b.instanceMatrix&&(le=b.instanceMatrix),O==="instanceColor"&&b.instanceColor&&(le=b.instanceColor)),se===void 0||se.attribute!==le||le&&se.data!==le.data)return!0;z++}return u.attributesNum!==z||u.index!==B}function v(b,P,G,B){const N={},k=P.attributes;let z=0;const D=G.getAttributes();for(const O in D)if(D[O].location>=0){let se=k[O];se===void 0&&(O==="instanceMatrix"&&b.instanceMatrix&&(se=b.instanceMatrix),O==="instanceColor"&&b.instanceColor&&(se=b.instanceColor));const le={};le.attribute=se,se&&se.data&&(le.data=se.data),N[O]=le,z++}u.attributes=N,u.attributesNum=z,u.index=B}function g(){const b=u.newAttributes;for(let P=0,G=b.length;P<G;P++)b[P]=0}function S(b){M(b,0)}function M(b,P){const G=u.newAttributes,B=u.enabledAttributes,N=u.attributeDivisors;G[b]=1,B[b]===0&&(t.enableVertexAttribArray(b),B[b]=1),N[b]!==P&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](b,P),N[b]=P)}function T(){const b=u.newAttributes,P=u.enabledAttributes;for(let G=0,B=P.length;G<B;G++)P[G]!==b[G]&&(t.disableVertexAttribArray(G),P[G]=0)}function R(b,P,G,B,N,k,z){z===!0?t.vertexAttribIPointer(b,P,G,N,k):t.vertexAttribPointer(b,P,G,B,N,k)}function L(b,P,G,B){if(i.isWebGL2===!1&&(b.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const N=B.attributes,k=G.getAttributes(),z=P.defaultAttributeValues;for(const D in k){const O=k[D];if(O.location>=0){let ne=N[D];if(ne===void 0&&(D==="instanceMatrix"&&b.instanceMatrix&&(ne=b.instanceMatrix),D==="instanceColor"&&b.instanceColor&&(ne=b.instanceColor)),ne!==void 0){const se=ne.normalized,le=ne.itemSize,ge=n.get(ne);if(ge===void 0)continue;const be=ge.buffer,Ae=ge.type,De=ge.bytesPerElement,dt=i.isWebGL2===!0&&(Ae===t.INT||Ae===t.UNSIGNED_INT||ne.gpuType===C_);if(ne.isInterleavedBufferAttribute){const Ie=ne.data,V=Ie.stride,pn=ne.offset;if(Ie.isInstancedInterleavedBuffer){for(let ve=0;ve<O.locationSize;ve++)M(O.location+ve,Ie.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let ve=0;ve<O.locationSize;ve++)S(O.location+ve);t.bindBuffer(t.ARRAY_BUFFER,be);for(let ve=0;ve<O.locationSize;ve++)R(O.location+ve,le/O.locationSize,Ae,se,V*De,(pn+le/O.locationSize*ve)*De,dt)}else{if(ne.isInstancedBufferAttribute){for(let Ie=0;Ie<O.locationSize;Ie++)M(O.location+Ie,ne.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Ie=0;Ie<O.locationSize;Ie++)S(O.location+Ie);t.bindBuffer(t.ARRAY_BUFFER,be);for(let Ie=0;Ie<O.locationSize;Ie++)R(O.location+Ie,le/O.locationSize,Ae,se,le*De,le/O.locationSize*Ie*De,dt)}}else if(z!==void 0){const se=z[D];if(se!==void 0)switch(se.length){case 2:t.vertexAttrib2fv(O.location,se);break;case 3:t.vertexAttrib3fv(O.location,se);break;case 4:t.vertexAttrib4fv(O.location,se);break;default:t.vertexAttrib1fv(O.location,se)}}}}T()}function y(){Y();for(const b in a){const P=a[b];for(const G in P){const B=P[G];for(const N in B)_(B[N].object),delete B[N];delete P[G]}delete a[b]}}function A(b){if(a[b.id]===void 0)return;const P=a[b.id];for(const G in P){const B=P[G];for(const N in B)_(B[N].object),delete B[N];delete P[G]}delete a[b.id]}function I(b){for(const P in a){const G=a[P];if(G[b.id]===void 0)continue;const B=G[b.id];for(const N in B)_(B[N].object),delete B[N];delete G[b.id]}}function Y(){$(),c=!0,u!==l&&(u=l,m(u.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:Y,resetDefaultState:$,dispose:y,releaseStatesOfGeometry:A,releaseStatesOfProgram:I,initAttributes:g,enableAttribute:S,disableUnusedAttributes:T}}function Jw(t,e,n,i){const r=i.isWebGL2;let o;function s(u){o=u}function a(u,c){t.drawArrays(o,u,c),n.update(c,o,1)}function l(u,c,f){if(f===0)return;let h,m;if(r)h=t,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](o,u,c,f),n.update(c,o,f)}this.setMode=s,this.render=a,this.renderInstances=l}function eA(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=s||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,S=s||e.has("OES_texture_float"),M=g&&S,T=s?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:S,floatVertexTextures:M,maxSamples:T}}function tA(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new Tr,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,h){n=c(f,h,0)},this.setState=function(f,h,m){const _=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,d=t.get(f);if(!r||_===null||_.length===0||o&&!p)o?c(null):u();else{const v=o?0:i,g=v*4;let S=d.clippingState||null;l.value=S,S=c(_,h,g,m);for(let M=0;M!==g;++M)S[M]=n[M];d.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,m,_){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=l.value,_!==!0||p===null){const d=m+x*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<d)&&(p=new Float32Array(d));for(let g=0,S=m;g!==x;++g,S+=4)s.copy(f[g]).applyMatrix4(v,a),s.normal.toArray(p,S),p[S+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function nA(t){let e=new WeakMap;function n(s,a){return a===ld?s.mapping=$o:a===ud&&(s.mapping=Ko),s}function i(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===ld||a===ud)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new g1(l.height/2);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class K_ extends q_{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const bo=4,ug=[.125,.215,.35,.446,.526,.582],Cr=20,Gc=new K_,cg=new We;let Vc=null,Wc=0,Xc=0;const wr=(1+Math.sqrt(5))/2,mo=1/wr,fg=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,wr,mo),new H(0,wr,-mo),new H(mo,0,wr),new H(-mo,0,wr),new H(wr,mo,0),new H(-wr,mo,0)];class dg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Vc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vc,Wc,Xc),e.scissorTest=!1,hl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===$o||e.mapping===Ko?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:fa,format:Kn,colorSpace:Ni,depthBuffer:!1},r=hg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hg(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iA(o)),this._blurMaterial=rA(o,e,n)}return r}_compileMaterial(e){const n=new Ci(this._lodPlanes[0],e);this._renderer.compile(n,Gc)}_sceneToCubeUV(e,n,i,r){const a=new Dn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(cg),c.toneMapping=sr,c.autoClear=!1;const m=new V_({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),_=new Ci(new ya,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(cg),x=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const g=this._cubeSize;hl(r,v*g,d>2?g:0,g,g),c.setRenderTarget(r),x&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===$o||e.mapping===Ko;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pg());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new Ci(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;hl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Gc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=fg[(r-1)%fg.length];this._blur(e,r-1,r,o,s)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Ci(this._lodPlanes[r],u),h=u.uniforms,m=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*Cr-1),x=o/_,p=isFinite(o)?1+Math.floor(c*x):Cr;p>Cr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Cr}`);const d=[];let v=0;for(let R=0;R<Cr;++R){const L=R/x,y=Math.exp(-L*L/2);d.push(y),R===0?v+=y:R<p&&(v+=2*y)}for(let R=0;R<d.length;R++)d[R]=d[R]/v;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=_,h.mipInt.value=g-i;const S=this._sizeLods[r],M=3*S*(r>g-bo?r-g+bo:0),T=4*(this._cubeSize-S);hl(n,M,T,3*S,2*S),l.setRenderTarget(n),l.render(f,Gc)}}function iA(t){const e=[],n=[],i=[];let r=t;const o=t-bo+1+ug.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-bo?l=ug[s-t+bo-1]:s===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],m=6,_=6,x=3,p=2,d=1,v=new Float32Array(x*_*m),g=new Float32Array(p*_*m),S=new Float32Array(d*_*m);for(let T=0;T<m;T++){const R=T%3*2/3-1,L=T>2?0:-1,y=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];v.set(y,x*_*T),g.set(h,p*_*T);const A=[T,T,T,T,T,T];S.set(A,d*_*T)}const M=new ri;M.setAttribute("position",new pi(v,x)),M.setAttribute("uv",new pi(g,p)),M.setAttribute("faceIndex",new pi(S,d)),e.push(M),r>bo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function hg(t,e,n){const i=new qr(t,e,n);return i.texture.mapping=Du,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function rA(t,e,n){const i=new Float32Array(Cr),r=new H(0,1,0);return new Yr({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function pg(){return new Yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function mg(){return new Yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function yh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function oA(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===ld||l===ud,c=l===$o||l===Ko;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new dg(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){n===null&&(n=new dg(t));const h=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",o),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function o(a){const l=a.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function sA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function aA(t,e,n,i){const r={},o=new WeakMap;function s(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const x=h.morphAttributes[_];for(let p=0,d=x.length;p<d;p++)e.remove(x[p])}h.removeEventListener("dispose",s),delete r[h.id];const m=o.get(h);m&&(e.remove(m),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const m=f.morphAttributes;for(const _ in m){const x=m[_];for(let p=0,d=x.length;p<d;p++)e.update(x[p],t.ARRAY_BUFFER)}}function u(f){const h=[],m=f.index,_=f.attributes.position;let x=0;if(m!==null){const v=m.array;x=m.version;for(let g=0,S=v.length;g<S;g+=3){const M=v[g+0],T=v[g+1],R=v[g+2];h.push(M,T,T,R,R,M)}}else if(_!==void 0){const v=_.array;x=_.version;for(let g=0,S=v.length/3-1;g<S;g+=3){const M=g+0,T=g+1,R=g+2;h.push(M,T,T,R,R,M)}}else return;const p=new(F_(h)?X_:W_)(h,1);p.version=x;const d=o.get(f);d&&e.remove(d),o.set(f,p)}function c(f){const h=o.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&u(f)}else u(f);return o.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function lA(t,e,n,i){const r=i.isWebGL2;let o;function s(h){o=h}let a,l;function u(h){a=h.type,l=h.bytesPerElement}function c(h,m){t.drawElements(o,m,a,h*l),n.update(m,o,1)}function f(h,m,_){if(_===0)return;let x,p;if(r)x=t,p="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[p](o,m,a,h*l,_),n.update(m,o,_)}this.setMode=s,this.setIndex=u,this.render=c,this.renderInstances=f}function uA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function cA(t,e){return t[0]-e[0]}function fA(t,e){return Math.abs(e[1])-Math.abs(t[1])}function dA(t,e,n){const i={},r=new Float32Array(8),o=new WeakMap,s=new Dt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,x=_!==void 0?_.length:0;let p=o.get(c);if(p===void 0||p.count!==x){let P=function(){$.dispose(),o.delete(c),c.removeEventListener("dispose",P)};var m=P;p!==void 0&&p.texture.dispose();const g=c.morphAttributes.position!==void 0,S=c.morphAttributes.normal!==void 0,M=c.morphAttributes.color!==void 0,T=c.morphAttributes.position||[],R=c.morphAttributes.normal||[],L=c.morphAttributes.color||[];let y=0;g===!0&&(y=1),S===!0&&(y=2),M===!0&&(y=3);let A=c.attributes.position.count*y,I=1;A>e.maxTextureSize&&(I=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const Y=new Float32Array(A*I*4*x),$=new z_(Y,A,I,x);$.type=Ki,$.needsUpdate=!0;const b=y*4;for(let G=0;G<x;G++){const B=T[G],N=R[G],k=L[G],z=A*I*4*G;for(let D=0;D<B.count;D++){const O=D*b;g===!0&&(s.fromBufferAttribute(B,D),Y[z+O+0]=s.x,Y[z+O+1]=s.y,Y[z+O+2]=s.z,Y[z+O+3]=0),S===!0&&(s.fromBufferAttribute(N,D),Y[z+O+4]=s.x,Y[z+O+5]=s.y,Y[z+O+6]=s.z,Y[z+O+7]=0),M===!0&&(s.fromBufferAttribute(k,D),Y[z+O+8]=s.x,Y[z+O+9]=s.y,Y[z+O+10]=s.z,Y[z+O+11]=k.itemSize===4?s.w:1)}}p={count:x,texture:$,size:new $e(A,I)},o.set(c,p),c.addEventListener("dispose",P)}let d=0;for(let g=0;g<h.length;g++)d+=h[g];const v=c.morphTargetsRelative?1:1-d;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const _=h===void 0?0:h.length;let x=i[c.id];if(x===void 0||x.length!==_){x=[];for(let S=0;S<_;S++)x[S]=[S,0];i[c.id]=x}for(let S=0;S<_;S++){const M=x[S];M[0]=S,M[1]=h[S]}x.sort(fA);for(let S=0;S<8;S++)S<_&&x[S][1]?(a[S][0]=x[S][0],a[S][1]=x[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(cA);const p=c.morphAttributes.position,d=c.morphAttributes.normal;let v=0;for(let S=0;S<8;S++){const M=a[S],T=M[0],R=M[1];T!==Number.MAX_SAFE_INTEGER&&R?(p&&c.getAttribute("morphTarget"+S)!==p[T]&&c.setAttribute("morphTarget"+S,p[T]),d&&c.getAttribute("morphNormal"+S)!==d[T]&&c.setAttribute("morphNormal"+S,d[T]),r[S]=R,v+=R):(p&&c.hasAttribute("morphTarget"+S)===!0&&c.deleteAttribute("morphTarget"+S),d&&c.hasAttribute("morphNormal"+S)===!0&&c.deleteAttribute("morphNormal"+S),r[S]=0)}const g=c.morphTargetsRelative?1:1-v;f.getUniforms().setValue(t,"morphTargetBaseInfluence",g),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function hA(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function s(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:s}}const Z_=new hn,Q_=new z_,J_=new JE,ex=new Y_,gg=[],vg=[],_g=new Float32Array(16),xg=new Float32Array(9),Sg=new Float32Array(4);function rs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=gg[r];if(o===void 0&&(o=new Float32Array(r),gg[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function At(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Rt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Fu(t,e){let n=vg[e];n===void 0&&(n=new Int32Array(e),vg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function pA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function mA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2fv(this.addr,e),Rt(n,e)}}function gA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(At(n,e))return;t.uniform3fv(this.addr,e),Rt(n,e)}}function vA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4fv(this.addr,e),Rt(n,e)}}function _A(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Rt(n,e)}else{if(At(n,i))return;Sg.set(i),t.uniformMatrix2fv(this.addr,!1,Sg),Rt(n,i)}}function xA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Rt(n,e)}else{if(At(n,i))return;xg.set(i),t.uniformMatrix3fv(this.addr,!1,xg),Rt(n,i)}}function SA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Rt(n,e)}else{if(At(n,i))return;_g.set(i),t.uniformMatrix4fv(this.addr,!1,_g),Rt(n,i)}}function yA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function MA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2iv(this.addr,e),Rt(n,e)}}function EA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3iv(this.addr,e),Rt(n,e)}}function TA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4iv(this.addr,e),Rt(n,e)}}function wA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function AA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2uiv(this.addr,e),Rt(n,e)}}function RA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3uiv(this.addr,e),Rt(n,e)}}function CA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4uiv(this.addr,e),Rt(n,e)}}function PA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||Z_,r)}function LA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||J_,r)}function bA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||ex,r)}function DA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Q_,r)}function UA(t){switch(t){case 5126:return pA;case 35664:return mA;case 35665:return gA;case 35666:return vA;case 35674:return _A;case 35675:return xA;case 35676:return SA;case 5124:case 35670:return yA;case 35667:case 35671:return MA;case 35668:case 35672:return EA;case 35669:case 35673:return TA;case 5125:return wA;case 36294:return AA;case 36295:return RA;case 36296:return CA;case 35678:case 36198:case 36298:case 36306:case 35682:return PA;case 35679:case 36299:case 36307:return LA;case 35680:case 36300:case 36308:case 36293:return bA;case 36289:case 36303:case 36311:case 36292:return DA}}function NA(t,e){t.uniform1fv(this.addr,e)}function IA(t,e){const n=rs(e,this.size,2);t.uniform2fv(this.addr,n)}function FA(t,e){const n=rs(e,this.size,3);t.uniform3fv(this.addr,n)}function OA(t,e){const n=rs(e,this.size,4);t.uniform4fv(this.addr,n)}function kA(t,e){const n=rs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function zA(t,e){const n=rs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function BA(t,e){const n=rs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function HA(t,e){t.uniform1iv(this.addr,e)}function GA(t,e){t.uniform2iv(this.addr,e)}function VA(t,e){t.uniform3iv(this.addr,e)}function WA(t,e){t.uniform4iv(this.addr,e)}function XA(t,e){t.uniform1uiv(this.addr,e)}function jA(t,e){t.uniform2uiv(this.addr,e)}function qA(t,e){t.uniform3uiv(this.addr,e)}function YA(t,e){t.uniform4uiv(this.addr,e)}function $A(t,e,n){const i=this.cache,r=e.length,o=Fu(n,r);At(i,o)||(t.uniform1iv(this.addr,o),Rt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||Z_,o[s])}function KA(t,e,n){const i=this.cache,r=e.length,o=Fu(n,r);At(i,o)||(t.uniform1iv(this.addr,o),Rt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||J_,o[s])}function ZA(t,e,n){const i=this.cache,r=e.length,o=Fu(n,r);At(i,o)||(t.uniform1iv(this.addr,o),Rt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||ex,o[s])}function QA(t,e,n){const i=this.cache,r=e.length,o=Fu(n,r);At(i,o)||(t.uniform1iv(this.addr,o),Rt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||Q_,o[s])}function JA(t){switch(t){case 5126:return NA;case 35664:return IA;case 35665:return FA;case 35666:return OA;case 35674:return kA;case 35675:return zA;case 35676:return BA;case 5124:case 35670:return HA;case 35667:case 35671:return GA;case 35668:case 35672:return VA;case 35669:case 35673:return WA;case 5125:return XA;case 36294:return jA;case 36295:return qA;case 36296:return YA;case 35678:case 36198:case 36298:case 36306:case 35682:return $A;case 35679:case 36299:case 36307:return KA;case 35680:case 36300:case 36308:case 36293:return ZA;case 36289:case 36303:case 36311:case 36292:return QA}}class eR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=UA(n.type)}}class tR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=JA(n.type)}}class nR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const jc=/(\w+)(\])?(\[|\.)?/g;function yg(t,e){t.seq.push(e),t.map[e.id]=e}function iR(t,e,n){const i=t.name,r=i.length;for(jc.lastIndex=0;;){const o=jc.exec(i),s=jc.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){yg(n,u===void 0?new eR(a,t,e):new tR(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new nR(a),yg(n,f)),n=f}}}class Pl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);iR(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function Mg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const rR=37297;let oR=0;function sR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function aR(t){const e=Je.getPrimaries(Je.workingColorSpace),n=Je.getPrimaries(t);let i;switch(e===n?i="":e===pu&&n===hu?i="LinearDisplayP3ToLinearSRGB":e===hu&&n===pu&&(i="LinearSRGBToLinearDisplayP3"),t){case Ni:case Uu:return[i,"LinearTransferOETF"];case Ft:case _h:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Eg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+sR(t.getShaderSource(e),s)}else return r}function lR(t,e){const n=aR(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function uR(t,e){let n;switch(e){case yE:n="Linear";break;case ME:n="Reinhard";break;case EE:n="OptimizedCineon";break;case TE:n="ACESFilmic";break;case wE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function cR(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Cs).join(`
`)}function fR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function dR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function Cs(t){return t!==""}function Tg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hR=/^[ \t]*#include +<([\w\d./]+)>/gm;function md(t){return t.replace(hR,mR)}const pR=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function mR(t,e){let n=Ue[e];if(n===void 0){const i=pR.get(e);if(i!==void 0)n=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return md(n)}const gR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ag(t){return t.replace(gR,vR)}function vR(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Rg(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _R(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===A_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===$M?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function xR(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case $o:case Ko:e="ENVMAP_TYPE_CUBE";break;case Du:e="ENVMAP_TYPE_CUBE_UV";break}return e}function SR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ko:e="ENVMAP_MODE_REFRACTION";break}return e}function yR(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case gh:e="ENVMAP_BLENDING_MULTIPLY";break;case xE:e="ENVMAP_BLENDING_MIX";break;case SE:e="ENVMAP_BLENDING_ADD";break}return e}function MR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ER(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=_R(n),u=xR(n),c=SR(n),f=yR(n),h=MR(n),m=n.isWebGL2?"":cR(n),_=fR(o),x=r.createProgram();let p,d,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Cs).join(`
`),p.length>0&&(p+=`
`),d=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Cs).join(`
`),d.length>0&&(d+=`
`)):(p=[Rg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),d=[m,Rg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==sr?"#define TONE_MAPPING":"",n.toneMapping!==sr?Ue.tonemapping_pars_fragment:"",n.toneMapping!==sr?uR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,lR("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Cs).join(`
`)),s=md(s),s=Tg(s,n),s=wg(s,n),a=md(a),a=Tg(a,n),a=wg(a,n),s=Ag(s),a=Ag(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Xm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const g=v+p+s,S=v+d+a,M=Mg(r,r.VERTEX_SHADER,g),T=Mg(r,r.FRAGMENT_SHADER,S);r.attachShader(x,M),r.attachShader(x,T),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(I){if(t.debug.checkShaderErrors){const Y=r.getProgramInfoLog(x).trim(),$=r.getShaderInfoLog(M).trim(),b=r.getShaderInfoLog(T).trim();let P=!0,G=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(P=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,M,T);else{const B=Eg(r,M,"vertex"),N=Eg(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+Y+`
`+B+`
`+N)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):($===""||b==="")&&(G=!1);G&&(I.diagnostics={runnable:P,programLog:Y,vertexShader:{log:$,prefix:p},fragmentShader:{log:b,prefix:d}})}r.deleteShader(M),r.deleteShader(T),L=new Pl(r,x),y=dR(r,x)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(x,rR)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=oR++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=T,this}let TR=0;class wR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new AR(e),n.set(e,i)),i}}class AR{constructor(e){this.id=TR++,this.code=e,this.usedTimes=0}}function RR(t,e,n,i,r,o,s){const a=new H_,l=new wR,u=[],c=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return y===0?"uv":`uv${y}`}function p(y,A,I,Y,$){const b=Y.fog,P=$.geometry,G=y.isMeshStandardMaterial?Y.environment:null,B=(y.isMeshStandardMaterial?n:e).get(y.envMap||G),N=B&&B.mapping===Du?B.image.height:null,k=_[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const z=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,D=z!==void 0?z.length:0;let O=0;P.morphAttributes.position!==void 0&&(O=1),P.morphAttributes.normal!==void 0&&(O=2),P.morphAttributes.color!==void 0&&(O=3);let ne,se,le,ge;if(k){const xt=li[k];ne=xt.vertexShader,se=xt.fragmentShader}else ne=y.vertexShader,se=y.fragmentShader,l.update(y),le=l.getVertexShaderID(y),ge=l.getFragmentShaderID(y);const be=t.getRenderTarget(),Ae=$.isInstancedMesh===!0,De=!!y.map,dt=!!y.matcap,Ie=!!B,V=!!y.aoMap,pn=!!y.lightMap,ve=!!y.bumpMap,Re=!!y.normalMap,we=!!y.displacementMap,ht=!!y.emissiveMap,Fe=!!y.metalnessMap,Oe=!!y.roughnessMap,et=y.anisotropy>0,Ct=y.clearcoat>0,Ht=y.iridescence>0,C=y.sheen>0,E=y.transmission>0,W=et&&!!y.anisotropyMap,ee=Ct&&!!y.clearcoatMap,Q=Ct&&!!y.clearcoatNormalMap,te=Ct&&!!y.clearcoatRoughnessMap,pe=Ht&&!!y.iridescenceMap,oe=Ht&&!!y.iridescenceThicknessMap,ce=C&&!!y.sheenColorMap,Me=C&&!!y.sheenRoughnessMap,je=!!y.specularMap,J=!!y.specularColorMap,Qe=!!y.specularIntensityMap,Ce=E&&!!y.transmissionMap,Ee=E&&!!y.thicknessMap,_e=!!y.gradientMap,he=!!y.alphaMap,Ve=y.alphaTest>0,U=!!y.alphaHash,ue=!!y.extensions,ie=!!P.attributes.uv1,K=!!P.attributes.uv2,re=!!P.attributes.uv3;let Se=sr;return y.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Se=t.toneMapping),{isWebGL2:c,shaderID:k,shaderType:y.type,shaderName:y.name,vertexShader:ne,fragmentShader:se,defines:y.defines,customVertexShaderID:le,customFragmentShaderID:ge,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:Ae,instancingColor:Ae&&$.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:be===null?t.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Ni,map:De,matcap:dt,envMap:Ie,envMapMode:Ie&&B.mapping,envMapCubeUVHeight:N,aoMap:V,lightMap:pn,bumpMap:ve,normalMap:Re,displacementMap:h&&we,emissiveMap:ht,normalMapObjectSpace:Re&&y.normalMapType===kE,normalMapTangentSpace:Re&&y.normalMapType===I_,metalnessMap:Fe,roughnessMap:Oe,anisotropy:et,anisotropyMap:W,clearcoat:Ct,clearcoatMap:ee,clearcoatNormalMap:Q,clearcoatRoughnessMap:te,iridescence:Ht,iridescenceMap:pe,iridescenceThicknessMap:oe,sheen:C,sheenColorMap:ce,sheenRoughnessMap:Me,specularMap:je,specularColorMap:J,specularIntensityMap:Qe,transmission:E,transmissionMap:Ce,thicknessMap:Ee,gradientMap:_e,opaque:y.transparent===!1&&y.blending===ko,alphaMap:he,alphaTest:Ve,alphaHash:U,combine:y.combine,mapUv:De&&x(y.map.channel),aoMapUv:V&&x(y.aoMap.channel),lightMapUv:pn&&x(y.lightMap.channel),bumpMapUv:ve&&x(y.bumpMap.channel),normalMapUv:Re&&x(y.normalMap.channel),displacementMapUv:we&&x(y.displacementMap.channel),emissiveMapUv:ht&&x(y.emissiveMap.channel),metalnessMapUv:Fe&&x(y.metalnessMap.channel),roughnessMapUv:Oe&&x(y.roughnessMap.channel),anisotropyMapUv:W&&x(y.anisotropyMap.channel),clearcoatMapUv:ee&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Q&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Me&&x(y.sheenRoughnessMap.channel),specularMapUv:je&&x(y.specularMap.channel),specularColorMapUv:J&&x(y.specularColorMap.channel),specularIntensityMapUv:Qe&&x(y.specularIntensityMap.channel),transmissionMapUv:Ce&&x(y.transmissionMap.channel),thicknessMapUv:Ee&&x(y.thicknessMap.channel),alphaMapUv:he&&x(y.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Re||et),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUv1s:ie,vertexUv2s:K,vertexUv3s:re,pointsUvs:$.isPoints===!0&&!!P.attributes.uv&&(De||he),fog:!!b,useFog:y.fog===!0,fogExp2:b&&b.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:$.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:O,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:Se,useLegacyLights:t._useLegacyLights,decodeVideoTexture:De&&y.map.isVideoTexture===!0&&Je.getTransfer(y.map.colorSpace)===st,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ti,flipSided:y.side===dn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ue&&y.extensions.derivatives===!0,extensionFragDepth:ue&&y.extensions.fragDepth===!0,extensionDrawBuffers:ue&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function d(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)A.push(I),A.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(v(A,y),g(A,y),A.push(t.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function v(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function g(y,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function S(y){const A=_[y.type];let I;if(A){const Y=li[A];I=d1.clone(Y.uniforms)}else I=y.uniforms;return I}function M(y,A){let I;for(let Y=0,$=u.length;Y<$;Y++){const b=u[Y];if(b.cacheKey===A){I=b,++I.usedTimes;break}}return I===void 0&&(I=new ER(t,A,y,o),u.push(I)),I}function T(y){if(--y.usedTimes===0){const A=u.indexOf(y);u[A]=u[u.length-1],u.pop(),y.destroy()}}function R(y){l.remove(y)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:S,acquireProgram:M,releaseProgram:T,releaseShaderCache:R,programs:u,dispose:L}}function CR(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function PR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Cg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Pg(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(f,h,m,_,x,p){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:_,renderOrder:f.renderOrder,z:x,group:p},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=x,d.group=p),e++,d}function a(f,h,m,_,x,p){const d=s(f,h,m,_,x,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):n.push(d)}function l(f,h,m,_,x,p){const d=s(f,h,m,_,x,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):n.unshift(d)}function u(f,h){n.length>1&&n.sort(f||PR),i.length>1&&i.sort(h||Cg),r.length>1&&r.sort(h||Cg)}function c(){for(let f=e,h=t.length;f<h;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:c,sort:u}}function LR(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new Pg,t.set(i,[s])):r>=o.length?(s=new Pg,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function bR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new We};break;case"SpotLight":n={position:new H,direction:new H,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new We,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new We,groundColor:new We};break;case"RectAreaLight":n={color:new We,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function DR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let UR=0;function NR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function IR(t,e){const n=new bR,i=DR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new H);const o=new H,s=new Et,a=new Et;function l(c,f){let h=0,m=0,_=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let x=0,p=0,d=0,v=0,g=0,S=0,M=0,T=0,R=0,L=0,y=0;c.sort(NR);const A=f===!0?Math.PI:1;for(let Y=0,$=c.length;Y<$;Y++){const b=c[Y],P=b.color,G=b.intensity,B=b.distance,N=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=P.r*G*A,m+=P.g*G*A,_+=P.b*G*A;else if(b.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(b.sh.coefficients[k],G);y++}else if(b.isDirectionalLight){const k=n.get(b);if(k.color.copy(b.color).multiplyScalar(b.intensity*A),b.castShadow){const z=b.shadow,D=i.get(b);D.shadowBias=z.bias,D.shadowNormalBias=z.normalBias,D.shadowRadius=z.radius,D.shadowMapSize=z.mapSize,r.directionalShadow[x]=D,r.directionalShadowMap[x]=N,r.directionalShadowMatrix[x]=b.shadow.matrix,S++}r.directional[x]=k,x++}else if(b.isSpotLight){const k=n.get(b);k.position.setFromMatrixPosition(b.matrixWorld),k.color.copy(P).multiplyScalar(G*A),k.distance=B,k.coneCos=Math.cos(b.angle),k.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),k.decay=b.decay,r.spot[d]=k;const z=b.shadow;if(b.map&&(r.spotLightMap[R]=b.map,R++,z.updateMatrices(b),b.castShadow&&L++),r.spotLightMatrix[d]=z.matrix,b.castShadow){const D=i.get(b);D.shadowBias=z.bias,D.shadowNormalBias=z.normalBias,D.shadowRadius=z.radius,D.shadowMapSize=z.mapSize,r.spotShadow[d]=D,r.spotShadowMap[d]=N,T++}d++}else if(b.isRectAreaLight){const k=n.get(b);k.color.copy(P).multiplyScalar(G),k.halfWidth.set(b.width*.5,0,0),k.halfHeight.set(0,b.height*.5,0),r.rectArea[v]=k,v++}else if(b.isPointLight){const k=n.get(b);if(k.color.copy(b.color).multiplyScalar(b.intensity*A),k.distance=b.distance,k.decay=b.decay,b.castShadow){const z=b.shadow,D=i.get(b);D.shadowBias=z.bias,D.shadowNormalBias=z.normalBias,D.shadowRadius=z.radius,D.shadowMapSize=z.mapSize,D.shadowCameraNear=z.camera.near,D.shadowCameraFar=z.camera.far,r.pointShadow[p]=D,r.pointShadowMap[p]=N,r.pointShadowMatrix[p]=b.shadow.matrix,M++}r.point[p]=k,p++}else if(b.isHemisphereLight){const k=n.get(b);k.skyColor.copy(b.color).multiplyScalar(G*A),k.groundColor.copy(b.groundColor).multiplyScalar(G*A),r.hemi[g]=k,g++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=_;const I=r.hash;(I.directionalLength!==x||I.pointLength!==p||I.spotLength!==d||I.rectAreaLength!==v||I.hemiLength!==g||I.numDirectionalShadows!==S||I.numPointShadows!==M||I.numSpotShadows!==T||I.numSpotMaps!==R||I.numLightProbes!==y)&&(r.directional.length=x,r.spot.length=d,r.rectArea.length=v,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=T+R-L,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=y,I.directionalLength=x,I.pointLength=p,I.spotLength=d,I.rectAreaLength=v,I.hemiLength=g,I.numDirectionalShadows=S,I.numPointShadows=M,I.numSpotShadows=T,I.numSpotMaps=R,I.numLightProbes=y,r.version=UR++)}function u(c,f){let h=0,m=0,_=0,x=0,p=0;const d=f.matrixWorldInverse;for(let v=0,g=c.length;v<g;v++){const S=c[v];if(S.isDirectionalLight){const M=r.directional[h];M.direction.setFromMatrixPosition(S.matrixWorld),o.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(o),M.direction.transformDirection(d),h++}else if(S.isSpotLight){const M=r.spot[_];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(S.matrixWorld),o.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(o),M.direction.transformDirection(d),_++}else if(S.isRectAreaLight){const M=r.rectArea[x];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(d),a.identity(),s.copy(S.matrixWorld),s.premultiply(d),a.extractRotation(s),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){const M=r.point[m];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(d),m++}else if(S.isHemisphereLight){const M=r.hemi[p];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(d),p++}}}return{setup:l,setupView:u,state:r}}function Lg(t,e){const n=new IR(t,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function u(f){n.setupView(i,f)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:s,pushShadow:a}}function FR(t,e){let n=new WeakMap;function i(o,s=0){const a=n.get(o);let l;return a===void 0?(l=new Lg(t,e),n.set(o,[l])):s>=a.length?(l=new Lg(t,e),a.push(l)):l=a[s],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class OR extends is{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=FE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kR extends is{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function HR(t,e,n){let i=new xh;const r=new $e,o=new $e,s=new Dt,a=new OR({depthPacking:OE}),l=new kR,u={},c=n.maxTextureSize,f={[fr]:dn,[dn]:fr,[Ti]:Ti},h=new Yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:zR,fragmentShader:BR}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new ri;_.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ci(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=A_;let d=this.type;this.render=function(M,T,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const L=t.getRenderTarget(),y=t.getActiveCubeFace(),A=t.getActiveMipmapLevel(),I=t.state;I.setBlending(or),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const Y=d!==yi&&this.type===yi,$=d===yi&&this.type!==yi;for(let b=0,P=M.length;b<P;b++){const G=M[b],B=G.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const N=B.getFrameExtents();if(r.multiply(N),o.copy(B.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(o.x=Math.floor(c/N.x),r.x=o.x*N.x,B.mapSize.x=o.x),r.y>c&&(o.y=Math.floor(c/N.y),r.y=o.y*N.y,B.mapSize.y=o.y)),B.map===null||Y===!0||$===!0){const z=this.type!==yi?{minFilter:Jt,magFilter:Jt}:{};B.map!==null&&B.map.dispose(),B.map=new qr(r.x,r.y,z),B.map.texture.name=G.name+".shadowMap",B.camera.updateProjectionMatrix()}t.setRenderTarget(B.map),t.clear();const k=B.getViewportCount();for(let z=0;z<k;z++){const D=B.getViewport(z);s.set(o.x*D.x,o.y*D.y,o.x*D.z,o.y*D.w),I.viewport(s),B.updateMatrices(G,z),i=B.getFrustum(),S(T,R,B.camera,G,this.type)}B.isPointLightShadow!==!0&&this.type===yi&&v(B,R),B.needsUpdate=!1}d=this.type,p.needsUpdate=!1,t.setRenderTarget(L,y,A)};function v(M,T){const R=e.update(x);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new qr(r.x,r.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(T,null,R,h,x,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(T,null,R,m,x,null)}function g(M,T,R,L){let y=null;const A=R.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(A!==void 0)y=A;else if(y=R.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const I=y.uuid,Y=T.uuid;let $=u[I];$===void 0&&($={},u[I]=$);let b=$[Y];b===void 0&&(b=y.clone(),$[Y]=b),y=b}if(y.visible=T.visible,y.wireframe=T.wireframe,L===yi?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:f[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const I=t.properties.get(y);I.light=R}return y}function S(M,T,R,L,y){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&y===yi)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,M.matrixWorld);const Y=e.update(M),$=M.material;if(Array.isArray($)){const b=Y.groups;for(let P=0,G=b.length;P<G;P++){const B=b[P],N=$[B.materialIndex];if(N&&N.visible){const k=g(M,N,L,y);t.renderBufferDirect(R,null,Y,k,M,B)}}}else if($.visible){const b=g(M,$,L,y);t.renderBufferDirect(R,null,Y,b,M,null)}}const I=M.children;for(let Y=0,$=I.length;Y<$;Y++)S(I[Y],T,R,L,y)}}function GR(t,e,n){const i=n.isWebGL2;function r(){let U=!1;const ue=new Dt;let ie=null;const K=new Dt(0,0,0,0);return{setMask:function(re){ie!==re&&!U&&(t.colorMask(re,re,re,re),ie=re)},setLocked:function(re){U=re},setClear:function(re,Se,qe,xt,Rn){Rn===!0&&(re*=xt,Se*=xt,qe*=xt),ue.set(re,Se,qe,xt),K.equals(ue)===!1&&(t.clearColor(re,Se,qe,xt),K.copy(ue))},reset:function(){U=!1,ie=null,K.set(-1,0,0,0)}}}function o(){let U=!1,ue=null,ie=null,K=null;return{setTest:function(re){re?De(t.DEPTH_TEST):dt(t.DEPTH_TEST)},setMask:function(re){ue!==re&&!U&&(t.depthMask(re),ue=re)},setFunc:function(re){if(ie!==re){switch(re){case dE:t.depthFunc(t.NEVER);break;case hE:t.depthFunc(t.ALWAYS);break;case pE:t.depthFunc(t.LESS);break;case fu:t.depthFunc(t.LEQUAL);break;case mE:t.depthFunc(t.EQUAL);break;case gE:t.depthFunc(t.GEQUAL);break;case vE:t.depthFunc(t.GREATER);break;case _E:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ie=re}},setLocked:function(re){U=re},setClear:function(re){K!==re&&(t.clearDepth(re),K=re)},reset:function(){U=!1,ue=null,ie=null,K=null}}}function s(){let U=!1,ue=null,ie=null,K=null,re=null,Se=null,qe=null,xt=null,Rn=null;return{setTest:function(nt){U||(nt?De(t.STENCIL_TEST):dt(t.STENCIL_TEST))},setMask:function(nt){ue!==nt&&!U&&(t.stencilMask(nt),ue=nt)},setFunc:function(nt,$t,oi){(ie!==nt||K!==$t||re!==oi)&&(t.stencilFunc(nt,$t,oi),ie=nt,K=$t,re=oi)},setOp:function(nt,$t,oi){(Se!==nt||qe!==$t||xt!==oi)&&(t.stencilOp(nt,$t,oi),Se=nt,qe=$t,xt=oi)},setLocked:function(nt){U=nt},setClear:function(nt){Rn!==nt&&(t.clearStencil(nt),Rn=nt)},reset:function(){U=!1,ue=null,ie=null,K=null,re=null,Se=null,qe=null,xt=null,Rn=null}}}const a=new r,l=new o,u=new s,c=new WeakMap,f=new WeakMap;let h={},m={},_=new WeakMap,x=[],p=null,d=!1,v=null,g=null,S=null,M=null,T=null,R=null,L=null,y=new We(0,0,0),A=0,I=!1,Y=null,$=null,b=null,P=null,G=null;const B=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,k=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(z)[1]),N=k>=1):z.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),N=k>=2);let D=null,O={};const ne=t.getParameter(t.SCISSOR_BOX),se=t.getParameter(t.VIEWPORT),le=new Dt().fromArray(ne),ge=new Dt().fromArray(se);function be(U,ue,ie,K){const re=new Uint8Array(4),Se=t.createTexture();t.bindTexture(U,Se),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let qe=0;qe<ie;qe++)i&&(U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY)?t.texImage3D(ue,0,t.RGBA,1,1,K,0,t.RGBA,t.UNSIGNED_BYTE,re):t.texImage2D(ue+qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,re);return Se}const Ae={};Ae[t.TEXTURE_2D]=be(t.TEXTURE_2D,t.TEXTURE_2D,1),Ae[t.TEXTURE_CUBE_MAP]=be(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ae[t.TEXTURE_2D_ARRAY]=be(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ae[t.TEXTURE_3D]=be(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),De(t.DEPTH_TEST),l.setFunc(fu),Fe(!1),Oe(fm),De(t.CULL_FACE),we(or);function De(U){h[U]!==!0&&(t.enable(U),h[U]=!0)}function dt(U){h[U]!==!1&&(t.disable(U),h[U]=!1)}function Ie(U,ue){return m[U]!==ue?(t.bindFramebuffer(U,ue),m[U]=ue,i&&(U===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=ue),U===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=ue)),!0):!1}function V(U,ue){let ie=x,K=!1;if(U)if(ie=_.get(ue),ie===void 0&&(ie=[],_.set(ue,ie)),U.isWebGLMultipleRenderTargets){const re=U.texture;if(ie.length!==re.length||ie[0]!==t.COLOR_ATTACHMENT0){for(let Se=0,qe=re.length;Se<qe;Se++)ie[Se]=t.COLOR_ATTACHMENT0+Se;ie.length=re.length,K=!0}}else ie[0]!==t.COLOR_ATTACHMENT0&&(ie[0]=t.COLOR_ATTACHMENT0,K=!0);else ie[0]!==t.BACK&&(ie[0]=t.BACK,K=!0);K&&(n.isWebGL2?t.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function pn(U){return p!==U?(t.useProgram(U),p=U,!0):!1}const ve={[Rr]:t.FUNC_ADD,[ZM]:t.FUNC_SUBTRACT,[QM]:t.FUNC_REVERSE_SUBTRACT};if(i)ve[mm]=t.MIN,ve[gm]=t.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(ve[mm]=U.MIN_EXT,ve[gm]=U.MAX_EXT)}const Re={[JM]:t.ZERO,[eE]:t.ONE,[tE]:t.SRC_COLOR,[sd]:t.SRC_ALPHA,[aE]:t.SRC_ALPHA_SATURATE,[oE]:t.DST_COLOR,[iE]:t.DST_ALPHA,[nE]:t.ONE_MINUS_SRC_COLOR,[ad]:t.ONE_MINUS_SRC_ALPHA,[sE]:t.ONE_MINUS_DST_COLOR,[rE]:t.ONE_MINUS_DST_ALPHA,[lE]:t.CONSTANT_COLOR,[uE]:t.ONE_MINUS_CONSTANT_COLOR,[cE]:t.CONSTANT_ALPHA,[fE]:t.ONE_MINUS_CONSTANT_ALPHA};function we(U,ue,ie,K,re,Se,qe,xt,Rn,nt){if(U===or){d===!0&&(dt(t.BLEND),d=!1);return}if(d===!1&&(De(t.BLEND),d=!0),U!==KM){if(U!==v||nt!==I){if((g!==Rr||T!==Rr)&&(t.blendEquation(t.FUNC_ADD),g=Rr,T=Rr),nt)switch(U){case ko:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dm:t.blendFunc(t.ONE,t.ONE);break;case hm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case pm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ko:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case hm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case pm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}S=null,M=null,R=null,L=null,y.set(0,0,0),A=0,v=U,I=nt}return}re=re||ue,Se=Se||ie,qe=qe||K,(ue!==g||re!==T)&&(t.blendEquationSeparate(ve[ue],ve[re]),g=ue,T=re),(ie!==S||K!==M||Se!==R||qe!==L)&&(t.blendFuncSeparate(Re[ie],Re[K],Re[Se],Re[qe]),S=ie,M=K,R=Se,L=qe),(xt.equals(y)===!1||Rn!==A)&&(t.blendColor(xt.r,xt.g,xt.b,Rn),y.copy(xt),A=Rn),v=U,I=!1}function ht(U,ue){U.side===Ti?dt(t.CULL_FACE):De(t.CULL_FACE);let ie=U.side===dn;ue&&(ie=!ie),Fe(ie),U.blending===ko&&U.transparent===!1?we(or):we(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const K=U.stencilWrite;u.setTest(K),K&&(u.setMask(U.stencilWriteMask),u.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),u.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ct(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?De(t.SAMPLE_ALPHA_TO_COVERAGE):dt(t.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(U){Y!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),Y=U)}function Oe(U){U!==qM?(De(t.CULL_FACE),U!==$&&(U===fm?t.cullFace(t.BACK):U===YM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):dt(t.CULL_FACE),$=U}function et(U){U!==b&&(N&&t.lineWidth(U),b=U)}function Ct(U,ue,ie){U?(De(t.POLYGON_OFFSET_FILL),(P!==ue||G!==ie)&&(t.polygonOffset(ue,ie),P=ue,G=ie)):dt(t.POLYGON_OFFSET_FILL)}function Ht(U){U?De(t.SCISSOR_TEST):dt(t.SCISSOR_TEST)}function C(U){U===void 0&&(U=t.TEXTURE0+B-1),D!==U&&(t.activeTexture(U),D=U)}function E(U,ue,ie){ie===void 0&&(D===null?ie=t.TEXTURE0+B-1:ie=D);let K=O[ie];K===void 0&&(K={type:void 0,texture:void 0},O[ie]=K),(K.type!==U||K.texture!==ue)&&(D!==ie&&(t.activeTexture(ie),D=ie),t.bindTexture(U,ue||Ae[U]),K.type=U,K.texture=ue)}function W(){const U=O[D];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function je(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Qe(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(U){le.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),le.copy(U))}function Ee(U){ge.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),ge.copy(U))}function _e(U,ue){let ie=f.get(ue);ie===void 0&&(ie=new WeakMap,f.set(ue,ie));let K=ie.get(U);K===void 0&&(K=t.getUniformBlockIndex(ue,U.name),ie.set(U,K))}function he(U,ue){const K=f.get(ue).get(U);c.get(ue)!==K&&(t.uniformBlockBinding(ue,K,U.__bindingPointIndex),c.set(ue,K))}function Ve(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},D=null,O={},m={},_=new WeakMap,x=[],p=null,d=!1,v=null,g=null,S=null,M=null,T=null,R=null,L=null,y=new We(0,0,0),A=0,I=!1,Y=null,$=null,b=null,P=null,G=null,le.set(0,0,t.canvas.width,t.canvas.height),ge.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:De,disable:dt,bindFramebuffer:Ie,drawBuffers:V,useProgram:pn,setBlending:we,setMaterial:ht,setFlipSided:Fe,setCullFace:Oe,setLineWidth:et,setPolygonOffset:Ct,setScissorTest:Ht,activeTexture:C,bindTexture:E,unbindTexture:W,compressedTexImage2D:ee,compressedTexImage3D:Q,texImage2D:J,texImage3D:Qe,updateUBOMapping:_e,uniformBlockBinding:he,texStorage2D:Me,texStorage3D:je,texSubImage2D:te,texSubImage3D:pe,compressedTexSubImage2D:oe,compressedTexSubImage3D:ce,scissor:Ce,viewport:Ee,reset:Ve}}function VR(t,e,n,i,r,o,s){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let x;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,E){return d?new OffscreenCanvas(C,E):da("canvas")}function g(C,E,W,ee){let Q=1;if((C.width>ee||C.height>ee)&&(Q=ee/Math.max(C.width,C.height)),Q<1||E===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const te=E?pd:Math.floor,pe=te(Q*C.width),oe=te(Q*C.height);x===void 0&&(x=v(pe,oe));const ce=W?v(pe,oe):x;return ce.width=pe,ce.height=oe,ce.getContext("2d").drawImage(C,0,0,pe,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+pe+"x"+oe+")."),ce}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function S(C){return jm(C.width)&&jm(C.height)}function M(C){return a?!1:C.wrapS!==$n||C.wrapT!==$n||C.minFilter!==Jt&&C.minFilter!==bn}function T(C,E){return C.generateMipmaps&&E&&C.minFilter!==Jt&&C.minFilter!==bn}function R(C){t.generateMipmap(C)}function L(C,E,W,ee,Q=!1){if(a===!1)return E;if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let te=E;if(E===t.RED&&(W===t.FLOAT&&(te=t.R32F),W===t.HALF_FLOAT&&(te=t.R16F),W===t.UNSIGNED_BYTE&&(te=t.R8)),E===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&(te=t.R8UI),W===t.UNSIGNED_SHORT&&(te=t.R16UI),W===t.UNSIGNED_INT&&(te=t.R32UI),W===t.BYTE&&(te=t.R8I),W===t.SHORT&&(te=t.R16I),W===t.INT&&(te=t.R32I)),E===t.RG&&(W===t.FLOAT&&(te=t.RG32F),W===t.HALF_FLOAT&&(te=t.RG16F),W===t.UNSIGNED_BYTE&&(te=t.RG8)),E===t.RGBA){const pe=Q?du:Je.getTransfer(ee);W===t.FLOAT&&(te=t.RGBA32F),W===t.HALF_FLOAT&&(te=t.RGBA16F),W===t.UNSIGNED_BYTE&&(te=pe===st?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT_4_4_4_4&&(te=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(te=t.RGB5_A1)}return(te===t.R16F||te===t.R32F||te===t.RG16F||te===t.RG32F||te===t.RGBA16F||te===t.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function y(C,E,W){return T(C,W)===!0||C.isFramebufferTexture&&C.minFilter!==Jt&&C.minFilter!==bn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function A(C){return C===Jt||C===vm||C===vc?t.NEAREST:t.LINEAR}function I(C){const E=C.target;E.removeEventListener("dispose",I),$(E),E.isVideoTexture&&_.delete(E)}function Y(C){const E=C.target;E.removeEventListener("dispose",Y),P(E)}function $(C){const E=i.get(C);if(E.__webglInit===void 0)return;const W=C.source,ee=p.get(W);if(ee){const Q=ee[E.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(C),Object.keys(ee).length===0&&p.delete(W)}i.remove(C)}function b(C){const E=i.get(C);t.deleteTexture(E.__webglTexture);const W=C.source,ee=p.get(W);delete ee[E.__cacheKey],s.memory.textures--}function P(C){const E=C.texture,W=i.get(C),ee=i.get(E);if(ee.__webglTexture!==void 0&&(t.deleteTexture(ee.__webglTexture),s.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(W.__webglFramebuffer[Q]))for(let te=0;te<W.__webglFramebuffer[Q].length;te++)t.deleteFramebuffer(W.__webglFramebuffer[Q][te]);else t.deleteFramebuffer(W.__webglFramebuffer[Q]);W.__webglDepthbuffer&&t.deleteRenderbuffer(W.__webglDepthbuffer[Q])}else{if(Array.isArray(W.__webglFramebuffer))for(let Q=0;Q<W.__webglFramebuffer.length;Q++)t.deleteFramebuffer(W.__webglFramebuffer[Q]);else t.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&t.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&t.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let Q=0;Q<W.__webglColorRenderbuffer.length;Q++)W.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(W.__webglColorRenderbuffer[Q]);W.__webglDepthRenderbuffer&&t.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let Q=0,te=E.length;Q<te;Q++){const pe=i.get(E[Q]);pe.__webglTexture&&(t.deleteTexture(pe.__webglTexture),s.memory.textures--),i.remove(E[Q])}i.remove(E),i.remove(C)}let G=0;function B(){G=0}function N(){const C=G;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),G+=1,C}function k(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function z(C,E){const W=i.get(C);if(C.isVideoTexture&&Ct(C),C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){const ee=C.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De(W,C,E);return}}n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+E)}function D(C,E){const W=i.get(C);if(C.version>0&&W.__version!==C.version){De(W,C,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+E)}function O(C,E){const W=i.get(C);if(C.version>0&&W.__version!==C.version){De(W,C,E);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+E)}function ne(C,E){const W=i.get(C);if(C.version>0&&W.__version!==C.version){dt(W,C,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+E)}const se={[cd]:t.REPEAT,[$n]:t.CLAMP_TO_EDGE,[fd]:t.MIRRORED_REPEAT},le={[Jt]:t.NEAREST,[vm]:t.NEAREST_MIPMAP_NEAREST,[vc]:t.NEAREST_MIPMAP_LINEAR,[bn]:t.LINEAR,[AE]:t.LINEAR_MIPMAP_NEAREST,[ca]:t.LINEAR_MIPMAP_LINEAR},ge={[zE]:t.NEVER,[jE]:t.ALWAYS,[BE]:t.LESS,[GE]:t.LEQUAL,[HE]:t.EQUAL,[XE]:t.GEQUAL,[VE]:t.GREATER,[WE]:t.NOTEQUAL};function be(C,E,W){if(W?(t.texParameteri(C,t.TEXTURE_WRAP_S,se[E.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,se[E.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,se[E.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,le[E.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,le[E.minFilter])):(t.texParameteri(C,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(C,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==$n||E.wrapT!==$n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(C,t.TEXTURE_MAG_FILTER,A(E.magFilter)),t.texParameteri(C,t.TEXTURE_MIN_FILTER,A(E.minFilter)),E.minFilter!==Jt&&E.minFilter!==bn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,ge[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Jt||E.minFilter!==vc&&E.minFilter!==ca||E.type===Ki&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===fa&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(t.texParameterf(C,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function Ae(C,E){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",I));const ee=E.source;let Q=p.get(ee);Q===void 0&&(Q={},p.set(ee,Q));const te=k(E);if(te!==C.__cacheKey){Q[te]===void 0&&(Q[te]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,W=!0),Q[te].usedTimes++;const pe=Q[C.__cacheKey];pe!==void 0&&(Q[C.__cacheKey].usedTimes--,pe.usedTimes===0&&b(E)),C.__cacheKey=te,C.__webglTexture=Q[te].texture}return W}function De(C,E,W){let ee=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ee=t.TEXTURE_3D);const Q=Ae(C,E),te=E.source;n.bindTexture(ee,C.__webglTexture,t.TEXTURE0+W);const pe=i.get(te);if(te.version!==pe.__version||Q===!0){n.activeTexture(t.TEXTURE0+W);const oe=Je.getPrimaries(Je.workingColorSpace),ce=E.colorSpace===Un?null:Je.getPrimaries(E.colorSpace),Me=E.colorSpace===Un||oe===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const je=M(E)&&S(E.image)===!1;let J=g(E.image,je,!1,c);J=Ht(E,J);const Qe=S(J)||a,Ce=o.convert(E.format,E.colorSpace);let Ee=o.convert(E.type),_e=L(E.internalFormat,Ce,Ee,E.colorSpace,E.isVideoTexture);be(ee,E,Qe);let he;const Ve=E.mipmaps,U=a&&E.isVideoTexture!==!0,ue=pe.__version===void 0||Q===!0,ie=y(E,J,Qe);if(E.isDepthTexture)_e=t.DEPTH_COMPONENT,a?E.type===Ki?_e=t.DEPTH_COMPONENT32F:E.type===$i?_e=t.DEPTH_COMPONENT24:E.type===Ir?_e=t.DEPTH24_STENCIL8:_e=t.DEPTH_COMPONENT16:E.type===Ki&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Fr&&_e===t.DEPTH_COMPONENT&&E.type!==vh&&E.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=$i,Ee=o.convert(E.type)),E.format===Zo&&_e===t.DEPTH_COMPONENT&&(_e=t.DEPTH_STENCIL,E.type!==Ir&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Ir,Ee=o.convert(E.type))),ue&&(U?n.texStorage2D(t.TEXTURE_2D,1,_e,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,_e,J.width,J.height,0,Ce,Ee,null));else if(E.isDataTexture)if(Ve.length>0&&Qe){U&&ue&&n.texStorage2D(t.TEXTURE_2D,ie,_e,Ve[0].width,Ve[0].height);for(let K=0,re=Ve.length;K<re;K++)he=Ve[K],U?n.texSubImage2D(t.TEXTURE_2D,K,0,0,he.width,he.height,Ce,Ee,he.data):n.texImage2D(t.TEXTURE_2D,K,_e,he.width,he.height,0,Ce,Ee,he.data);E.generateMipmaps=!1}else U?(ue&&n.texStorage2D(t.TEXTURE_2D,ie,_e,J.width,J.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,J.width,J.height,Ce,Ee,J.data)):n.texImage2D(t.TEXTURE_2D,0,_e,J.width,J.height,0,Ce,Ee,J.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){U&&ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ie,_e,Ve[0].width,Ve[0].height,J.depth);for(let K=0,re=Ve.length;K<re;K++)he=Ve[K],E.format!==Kn?Ce!==null?U?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,he.width,he.height,J.depth,Ce,he.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,_e,he.width,he.height,J.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,he.width,he.height,J.depth,Ce,Ee,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,_e,he.width,he.height,J.depth,0,Ce,Ee,he.data)}else{U&&ue&&n.texStorage2D(t.TEXTURE_2D,ie,_e,Ve[0].width,Ve[0].height);for(let K=0,re=Ve.length;K<re;K++)he=Ve[K],E.format!==Kn?Ce!==null?U?n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,he.width,he.height,Ce,he.data):n.compressedTexImage2D(t.TEXTURE_2D,K,_e,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?n.texSubImage2D(t.TEXTURE_2D,K,0,0,he.width,he.height,Ce,Ee,he.data):n.texImage2D(t.TEXTURE_2D,K,_e,he.width,he.height,0,Ce,Ee,he.data)}else if(E.isDataArrayTexture)U?(ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ie,_e,J.width,J.height,J.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Ce,Ee,J.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,_e,J.width,J.height,J.depth,0,Ce,Ee,J.data);else if(E.isData3DTexture)U?(ue&&n.texStorage3D(t.TEXTURE_3D,ie,_e,J.width,J.height,J.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Ce,Ee,J.data)):n.texImage3D(t.TEXTURE_3D,0,_e,J.width,J.height,J.depth,0,Ce,Ee,J.data);else if(E.isFramebufferTexture){if(ue)if(U)n.texStorage2D(t.TEXTURE_2D,ie,_e,J.width,J.height);else{let K=J.width,re=J.height;for(let Se=0;Se<ie;Se++)n.texImage2D(t.TEXTURE_2D,Se,_e,K,re,0,Ce,Ee,null),K>>=1,re>>=1}}else if(Ve.length>0&&Qe){U&&ue&&n.texStorage2D(t.TEXTURE_2D,ie,_e,Ve[0].width,Ve[0].height);for(let K=0,re=Ve.length;K<re;K++)he=Ve[K],U?n.texSubImage2D(t.TEXTURE_2D,K,0,0,Ce,Ee,he):n.texImage2D(t.TEXTURE_2D,K,_e,Ce,Ee,he);E.generateMipmaps=!1}else U?(ue&&n.texStorage2D(t.TEXTURE_2D,ie,_e,J.width,J.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ce,Ee,J)):n.texImage2D(t.TEXTURE_2D,0,_e,Ce,Ee,J);T(E,Qe)&&R(ee),pe.__version=te.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function dt(C,E,W){if(E.image.length!==6)return;const ee=Ae(C,E),Q=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+W);const te=i.get(Q);if(Q.version!==te.__version||ee===!0){n.activeTexture(t.TEXTURE0+W);const pe=Je.getPrimaries(Je.workingColorSpace),oe=E.colorSpace===Un?null:Je.getPrimaries(E.colorSpace),ce=E.colorSpace===Un||pe===oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Me=E.isCompressedTexture||E.image[0].isCompressedTexture,je=E.image[0]&&E.image[0].isDataTexture,J=[];for(let K=0;K<6;K++)!Me&&!je?J[K]=g(E.image[K],!1,!0,u):J[K]=je?E.image[K].image:E.image[K],J[K]=Ht(E,J[K]);const Qe=J[0],Ce=S(Qe)||a,Ee=o.convert(E.format,E.colorSpace),_e=o.convert(E.type),he=L(E.internalFormat,Ee,_e,E.colorSpace),Ve=a&&E.isVideoTexture!==!0,U=te.__version===void 0||ee===!0;let ue=y(E,Qe,Ce);be(t.TEXTURE_CUBE_MAP,E,Ce);let ie;if(Me){Ve&&U&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,he,Qe.width,Qe.height);for(let K=0;K<6;K++){ie=J[K].mipmaps;for(let re=0;re<ie.length;re++){const Se=ie[re];E.format!==Kn?Ee!==null?Ve?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,re,0,0,Se.width,Se.height,Ee,Se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,re,he,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,re,0,0,Se.width,Se.height,Ee,_e,Se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,re,he,Se.width,Se.height,0,Ee,_e,Se.data)}}}else{ie=E.mipmaps,Ve&&U&&(ie.length>0&&ue++,n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,he,J[0].width,J[0].height));for(let K=0;K<6;K++)if(je){Ve?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,J[K].width,J[K].height,Ee,_e,J[K].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,he,J[K].width,J[K].height,0,Ee,_e,J[K].data);for(let re=0;re<ie.length;re++){const qe=ie[re].image[K].image;Ve?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,re+1,0,0,qe.width,qe.height,Ee,_e,qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,re+1,he,qe.width,qe.height,0,Ee,_e,qe.data)}}else{Ve?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ee,_e,J[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,he,Ee,_e,J[K]);for(let re=0;re<ie.length;re++){const Se=ie[re];Ve?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,re+1,0,0,Ee,_e,Se.image[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,re+1,he,Ee,_e,Se.image[K])}}}T(E,Ce)&&R(t.TEXTURE_CUBE_MAP),te.__version=Q.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Ie(C,E,W,ee,Q,te){const pe=o.convert(W.format,W.colorSpace),oe=o.convert(W.type),ce=L(W.internalFormat,pe,oe,W.colorSpace);if(!i.get(E).__hasExternalTextures){const je=Math.max(1,E.width>>te),J=Math.max(1,E.height>>te);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,te,ce,je,J,E.depth,0,pe,oe,null):n.texImage2D(Q,te,ce,je,J,0,pe,oe,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),et(E)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,Q,i.get(W).__webglTexture,0,Oe(E)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,Q,i.get(W).__webglTexture,te),n.bindFramebuffer(t.FRAMEBUFFER,null)}function V(C,E,W){if(t.bindRenderbuffer(t.RENDERBUFFER,C),E.depthBuffer&&!E.stencilBuffer){let ee=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(W||et(E)){const Q=E.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Ki?ee=t.DEPTH_COMPONENT32F:Q.type===$i&&(ee=t.DEPTH_COMPONENT24));const te=Oe(E);et(E)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,ee,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,te,ee,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,ee,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,C)}else if(E.depthBuffer&&E.stencilBuffer){const ee=Oe(E);W&&et(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ee,t.DEPTH24_STENCIL8,E.width,E.height):et(E)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ee,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,C)}else{const ee=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Q=0;Q<ee.length;Q++){const te=ee[Q],pe=o.convert(te.format,te.colorSpace),oe=o.convert(te.type),ce=L(te.internalFormat,pe,oe,te.colorSpace),Me=Oe(E);W&&et(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Me,ce,E.width,E.height):et(E)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Me,ce,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ce,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function pn(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),z(E.depthTexture,0);const ee=i.get(E.depthTexture).__webglTexture,Q=Oe(E);if(E.depthTexture.format===Fr)et(E)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(E.depthTexture.format===Zo)et(E)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function ve(C){const E=i.get(C),W=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");pn(E.__webglFramebuffer,C)}else if(W){E.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ee]),E.__webglDepthbuffer[ee]=t.createRenderbuffer(),V(E.__webglDepthbuffer[ee],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),V(E.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Re(C,E,W){const ee=i.get(C);E!==void 0&&Ie(ee.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&ve(C)}function we(C){const E=C.texture,W=i.get(C),ee=i.get(E);C.addEventListener("dispose",Y),C.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=E.version,s.memory.textures++);const Q=C.isWebGLCubeRenderTarget===!0,te=C.isWebGLMultipleRenderTargets===!0,pe=S(C)||a;if(Q){W.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(a&&E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[oe]=[];for(let ce=0;ce<E.mipmaps.length;ce++)W.__webglFramebuffer[oe][ce]=t.createFramebuffer()}else W.__webglFramebuffer[oe]=t.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let oe=0;oe<E.mipmaps.length;oe++)W.__webglFramebuffer[oe]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(te)if(r.drawBuffers){const oe=C.texture;for(let ce=0,Me=oe.length;ce<Me;ce++){const je=i.get(oe[ce]);je.__webglTexture===void 0&&(je.__webglTexture=t.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&et(C)===!1){const oe=te?E:[E];W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ce=0;ce<oe.length;ce++){const Me=oe[ce];W.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[ce]);const je=o.convert(Me.format,Me.colorSpace),J=o.convert(Me.type),Qe=L(Me.internalFormat,je,J,Me.colorSpace,C.isXRRenderTarget===!0),Ce=Oe(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,Qe,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,W.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),V(W.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),be(t.TEXTURE_CUBE_MAP,E,pe);for(let oe=0;oe<6;oe++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let ce=0;ce<E.mipmaps.length;ce++)Ie(W.__webglFramebuffer[oe][ce],C,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ce);else Ie(W.__webglFramebuffer[oe],C,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);T(E,pe)&&R(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(te){const oe=C.texture;for(let ce=0,Me=oe.length;ce<Me;ce++){const je=oe[ce],J=i.get(je);n.bindTexture(t.TEXTURE_2D,J.__webglTexture),be(t.TEXTURE_2D,je,pe),Ie(W.__webglFramebuffer,C,je,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),T(je,pe)&&R(t.TEXTURE_2D)}n.unbindTexture()}else{let oe=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?oe=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(oe,ee.__webglTexture),be(oe,E,pe),a&&E.mipmaps&&E.mipmaps.length>0)for(let ce=0;ce<E.mipmaps.length;ce++)Ie(W.__webglFramebuffer[ce],C,E,t.COLOR_ATTACHMENT0,oe,ce);else Ie(W.__webglFramebuffer,C,E,t.COLOR_ATTACHMENT0,oe,0);T(E,pe)&&R(oe),n.unbindTexture()}C.depthBuffer&&ve(C)}function ht(C){const E=S(C)||a,W=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ee=0,Q=W.length;ee<Q;ee++){const te=W[ee];if(T(te,E)){const pe=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,oe=i.get(te).__webglTexture;n.bindTexture(pe,oe),R(pe),n.unbindTexture()}}}function Fe(C){if(a&&C.samples>0&&et(C)===!1){const E=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],W=C.width,ee=C.height;let Q=t.COLOR_BUFFER_BIT;const te=[],pe=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=i.get(C),ce=C.isWebGLMultipleRenderTargets===!0;if(ce)for(let Me=0;Me<E.length;Me++)n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let Me=0;Me<E.length;Me++){te.push(t.COLOR_ATTACHMENT0+Me),C.depthBuffer&&te.push(pe);const je=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(je===!1&&(C.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),ce&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,oe.__webglColorRenderbuffer[Me]),je===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[pe]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[pe])),ce){const J=i.get(E[Me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,J,0)}t.blitFramebuffer(0,0,W,ee,0,0,W,ee,Q,t.NEAREST),m&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,te)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let Me=0;Me<E.length;Me++){n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,oe.__webglColorRenderbuffer[Me]);const je=i.get(E[Me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,je,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function Oe(C){return Math.min(f,C.samples)}function et(C){const E=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ct(C){const E=s.render.frame;_.get(C)!==E&&(_.set(C,E),C.update())}function Ht(C,E){const W=C.colorSpace,ee=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===dd||W!==Ni&&W!==Un&&(Je.getTransfer(W)===st?a===!1?e.has("EXT_sRGB")===!0&&ee===Kn?(C.format=dd,C.minFilter=bn,C.generateMipmaps=!1):E=O_.sRGBToLinear(E):(ee!==Kn||Q!==ar)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}this.allocateTextureUnit=N,this.resetTextureUnits=B,this.setTexture2D=z,this.setTexture2DArray=D,this.setTexture3D=O,this.setTextureCube=ne,this.rebindTextures=Re,this.setupRenderTarget=we,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=et}function WR(t,e,n){const i=n.isWebGL2;function r(o,s=Un){let a;const l=Je.getTransfer(s);if(o===ar)return t.UNSIGNED_BYTE;if(o===P_)return t.UNSIGNED_SHORT_4_4_4_4;if(o===L_)return t.UNSIGNED_SHORT_5_5_5_1;if(o===RE)return t.BYTE;if(o===CE)return t.SHORT;if(o===vh)return t.UNSIGNED_SHORT;if(o===C_)return t.INT;if(o===$i)return t.UNSIGNED_INT;if(o===Ki)return t.FLOAT;if(o===fa)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===PE)return t.ALPHA;if(o===Kn)return t.RGBA;if(o===LE)return t.LUMINANCE;if(o===bE)return t.LUMINANCE_ALPHA;if(o===Fr)return t.DEPTH_COMPONENT;if(o===Zo)return t.DEPTH_STENCIL;if(o===dd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===DE)return t.RED;if(o===b_)return t.RED_INTEGER;if(o===UE)return t.RG;if(o===D_)return t.RG_INTEGER;if(o===U_)return t.RGBA_INTEGER;if(o===_c||o===xc||o===Sc||o===yc)if(l===st)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===_c)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===xc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Sc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===yc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===_c)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===xc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Sc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===yc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===_m||o===xm||o===Sm||o===ym)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===_m)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===xm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Sm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===ym)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===NE)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Mm||o===Em)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===Mm)return l===st?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===Em)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Tm||o===wm||o===Am||o===Rm||o===Cm||o===Pm||o===Lm||o===bm||o===Dm||o===Um||o===Nm||o===Im||o===Fm||o===Om)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===Tm)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===wm)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Am)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Rm)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Cm)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Pm)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Lm)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===bm)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Dm)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Um)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Nm)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Im)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Fm)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Om)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Mc||o===km||o===zm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===Mc)return l===st?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===km)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===zm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===IE||o===Bm||o===Hm||o===Gm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===Mc)return a.COMPRESSED_RED_RGTC1_EXT;if(o===Bm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Hm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Gm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Ir?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:r}}class XR extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ps extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jR={type:"move"};class qc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),d=this._getHandJoint(u,x);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),m=.02,_=.005;u.inputState.pinching&&h>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jR)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ps;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class qR extends hn{constructor(e,n,i,r,o,s,a,l,u,c){if(c=c!==void 0?c:Fr,c!==Fr&&c!==Zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Fr&&(i=$i),i===void 0&&c===Zo&&(i=Ir),super(null,r,o,s,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Jt,this.minFilter=l!==void 0?l:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class YR extends ns{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,m=null,_=null;const x=n.getContextAttributes();let p=null,d=null;const v=[],g=[],S=new Dn;S.layers.enable(1),S.viewport=new Dt;const M=new Dn;M.layers.enable(2),M.viewport=new Dt;const T=[S,M],R=new XR;R.layers.enable(1),R.layers.enable(2);let L=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let O=v[D];return O===void 0&&(O=new qc,v[D]=O),O.getTargetRaySpace()},this.getControllerGrip=function(D){let O=v[D];return O===void 0&&(O=new qc,v[D]=O),O.getGripSpace()},this.getHand=function(D){let O=v[D];return O===void 0&&(O=new qc,v[D]=O),O.getHandSpace()};function A(D){const O=g.indexOf(D.inputSource);if(O===-1)return;const ne=v[O];ne!==void 0&&(ne.update(D.inputSource,D.frame,u||s),ne.dispatchEvent({type:D.type,data:D.inputSource}))}function I(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",Y);for(let D=0;D<v.length;D++){const O=g[D];O!==null&&(g[D]=null,v[D].disconnect(O))}L=null,y=null,e.setRenderTarget(p),m=null,h=null,f=null,r=null,d=null,z.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){o=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(D){u=D},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(D){if(r=D,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",I),r.addEventListener("inputsourceschange",Y),x.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const O={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,n,O),r.updateRenderState({baseLayer:m}),d=new qr(m.framebufferWidth,m.framebufferHeight,{format:Kn,type:ar,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let O=null,ne=null,se=null;x.depth&&(se=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,O=x.stencil?Zo:Fr,ne=x.stencil?Ir:$i);const le={colorFormat:n.RGBA8,depthFormat:se,scaleFactor:o};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(le),r.updateRenderState({layers:[h]}),d=new qr(h.textureWidth,h.textureHeight,{format:Kn,type:ar,depthTexture:new qR(h.textureWidth,h.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const ge=e.properties.get(d);ge.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),z.setContext(r),z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Y(D){for(let O=0;O<D.removed.length;O++){const ne=D.removed[O],se=g.indexOf(ne);se>=0&&(g[se]=null,v[se].disconnect(ne))}for(let O=0;O<D.added.length;O++){const ne=D.added[O];let se=g.indexOf(ne);if(se===-1){for(let ge=0;ge<v.length;ge++)if(ge>=g.length){g.push(ne),se=ge;break}else if(g[ge]===null){g[ge]=ne,se=ge;break}if(se===-1)break}const le=v[se];le&&le.connect(ne)}}const $=new H,b=new H;function P(D,O,ne){$.setFromMatrixPosition(O.matrixWorld),b.setFromMatrixPosition(ne.matrixWorld);const se=$.distanceTo(b),le=O.projectionMatrix.elements,ge=ne.projectionMatrix.elements,be=le[14]/(le[10]-1),Ae=le[14]/(le[10]+1),De=(le[9]+1)/le[5],dt=(le[9]-1)/le[5],Ie=(le[8]-1)/le[0],V=(ge[8]+1)/ge[0],pn=be*Ie,ve=be*V,Re=se/(-Ie+V),we=Re*-Ie;O.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(we),D.translateZ(Re),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const ht=be+Re,Fe=Ae+Re,Oe=pn-we,et=ve+(se-we),Ct=De*Ae/Fe*ht,Ht=dt*Ae/Fe*ht;D.projectionMatrix.makePerspective(Oe,et,Ct,Ht,ht,Fe),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}function G(D,O){O===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(O.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(r===null)return;R.near=M.near=S.near=D.near,R.far=M.far=S.far=D.far,(L!==R.near||y!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),L=R.near,y=R.far);const O=D.parent,ne=R.cameras;G(R,O);for(let se=0;se<ne.length;se++)G(ne[se],O);ne.length===2?P(R,S,M):R.projectionMatrix.copy(S.projectionMatrix),B(D,R,O)};function B(D,O,ne){ne===null?D.matrix.copy(O.matrixWorld):(D.matrix.copy(ne.matrixWorld),D.matrix.invert(),D.matrix.multiply(O.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(O.projectionMatrix),D.projectionMatrixInverse.copy(O.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=hd*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(D){l=D,h!==null&&(h.fixedFoveation=D),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=D)};let N=null;function k(D,O){if(c=O.getViewerPose(u||s),_=O,c!==null){const ne=c.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let se=!1;ne.length!==R.cameras.length&&(R.cameras.length=0,se=!0);for(let le=0;le<ne.length;le++){const ge=ne[le];let be=null;if(m!==null)be=m.getViewport(ge);else{const De=f.getViewSubImage(h,ge);be=De.viewport,le===0&&(e.setRenderTargetTextures(d,De.colorTexture,h.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(d))}let Ae=T[le];Ae===void 0&&(Ae=new Dn,Ae.layers.enable(le),Ae.viewport=new Dt,T[le]=Ae),Ae.matrix.fromArray(ge.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(ge.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(be.x,be.y,be.width,be.height),le===0&&(R.matrix.copy(Ae.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),se===!0&&R.cameras.push(Ae)}}for(let ne=0;ne<v.length;ne++){const se=g[ne],le=v[ne];se!==null&&le!==void 0&&le.update(se,O,u||s)}N&&N(D,O),O.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:O}),_=null}const z=new $_;z.setAnimationLoop(k),this.setAnimationLoop=function(D){N=D},this.dispose=function(){}}}function $R(t,e){function n(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,j_(t)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,v,g,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?o(p,d):d.isMeshToonMaterial?(o(p,d),f(p,d)):d.isMeshPhongMaterial?(o(p,d),c(p,d)):d.isMeshStandardMaterial?(o(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,S)):d.isMeshMatcapMaterial?(o(p,d),_(p,d)):d.isMeshDepthMaterial?o(p,d):d.isMeshDistanceMaterial?(o(p,d),x(p,d)):d.isMeshNormalMaterial?o(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,v,g):d.isSpriteMaterial?u(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function o(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,n(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,n(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===dn&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,n(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===dn&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,n(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,n(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const v=e.get(d).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*g,n(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,p.aoMapTransform))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,n(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,v,g){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*v,p.scale.value=g*.5,d.map&&(p.map.value=d.map,n(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,n(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,v){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===dn&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){const v=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function KR(t,e,n,i){let r={},o={},s=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,g){const S=g.program;i.uniformBlockBinding(v,S)}function u(v,g){let S=r[v.id];S===void 0&&(_(v),S=c(v),r[v.id]=S,v.addEventListener("dispose",p));const M=g.program;i.updateUBOMapping(v,M);const T=e.render.frame;o[v.id]!==T&&(h(v),o[v.id]=T)}function c(v){const g=f();v.__bindingPointIndex=g;const S=t.createBuffer(),M=v.__size,T=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,M,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,S),S}function f(){for(let v=0;v<a;v++)if(s.indexOf(v)===-1)return s.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const g=r[v.id],S=v.uniforms,M=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let T=0,R=S.length;T<R;T++){const L=S[T];if(m(L,T,M)===!0){const y=L.__offset,A=Array.isArray(L.value)?L.value:[L.value];let I=0;for(let Y=0;Y<A.length;Y++){const $=A[Y],b=x($);typeof $=="number"?(L.__data[0]=$,t.bufferSubData(t.UNIFORM_BUFFER,y+I,L.__data)):$.isMatrix3?(L.__data[0]=$.elements[0],L.__data[1]=$.elements[1],L.__data[2]=$.elements[2],L.__data[3]=$.elements[0],L.__data[4]=$.elements[3],L.__data[5]=$.elements[4],L.__data[6]=$.elements[5],L.__data[7]=$.elements[0],L.__data[8]=$.elements[6],L.__data[9]=$.elements[7],L.__data[10]=$.elements[8],L.__data[11]=$.elements[0]):($.toArray(L.__data,I),I+=b.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,y,L.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,g,S){const M=v.value;if(S[g]===void 0){if(typeof M=="number")S[g]=M;else{const T=Array.isArray(M)?M:[M],R=[];for(let L=0;L<T.length;L++)R.push(T[L].clone());S[g]=R}return!0}else if(typeof M=="number"){if(S[g]!==M)return S[g]=M,!0}else{const T=Array.isArray(S[g])?S[g]:[S[g]],R=Array.isArray(M)?M:[M];for(let L=0;L<T.length;L++){const y=T[L];if(y.equals(R[L])===!1)return y.copy(R[L]),!0}}return!1}function _(v){const g=v.uniforms;let S=0;const M=16;let T=0;for(let R=0,L=g.length;R<L;R++){const y=g[R],A={boundary:0,storage:0},I=Array.isArray(y.value)?y.value:[y.value];for(let Y=0,$=I.length;Y<$;Y++){const b=I[Y],P=x(b);A.boundary+=P.boundary,A.storage+=P.storage}if(y.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=S,R>0){T=S%M;const Y=M-T;T!==0&&Y-A.boundary<0&&(S+=M-T,y.__offset=S)}S+=A.storage}return T=S%M,T>0&&(S+=M-T),v.__size=S,v.__cache={},this}function x(v){const g={boundary:0,storage:0};return typeof v=="number"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function p(v){const g=v.target;g.removeEventListener("dispose",p);const S=s.indexOf(g.__bindingPointIndex);s.splice(S,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete o[g.id]}function d(){for(const v in r)t.deleteBuffer(r[v]);s=[],r={},o={}}return{bind:l,update:u,dispose:d}}class tx{constructor(e={}){const{canvas:n=YE(),context:i=null,depth:r=!0,stencil:o=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=s;const m=new Uint32Array(4),_=new Int32Array(4);let x=null,p=null;const d=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ft,this._useLegacyLights=!1,this.toneMapping=sr,this.toneMappingExposure=1;const g=this;let S=!1,M=0,T=0,R=null,L=-1,y=null;const A=new Dt,I=new Dt;let Y=null;const $=new We(0);let b=0,P=n.width,G=n.height,B=1,N=null,k=null;const z=new Dt(0,0,P,G),D=new Dt(0,0,P,G);let O=!1;const ne=new xh;let se=!1,le=!1,ge=null;const be=new Et,Ae=new $e,De=new H,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ie(){return R===null?B:1}let V=i;function pn(w,F){for(let X=0;X<w.length;X++){const j=w[X],q=n.getContext(j,F);if(q!==null)return q}return null}try{const w={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${mh}`),n.addEventListener("webglcontextlost",Ve,!1),n.addEventListener("webglcontextrestored",U,!1),n.addEventListener("webglcontextcreationerror",ue,!1),V===null){const F=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&F.shift(),V=pn(F,w),V===null)throw pn(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ve,Re,we,ht,Fe,Oe,et,Ct,Ht,C,E,W,ee,Q,te,pe,oe,ce,Me,je,J,Qe,Ce,Ee;function _e(){ve=new sA(V),Re=new eA(V,ve,e),ve.init(Re),Qe=new WR(V,ve,Re),we=new GR(V,ve,Re),ht=new uA(V),Fe=new CR,Oe=new VR(V,ve,we,Fe,Re,Qe,ht),et=new nA(g),Ct=new oA(g),Ht=new x1(V,Re),Ce=new Qw(V,ve,Ht,Re),C=new aA(V,Ht,ht,Ce),E=new hA(V,C,Ht,ht),Me=new dA(V,Re,Oe),pe=new tA(Fe),W=new RR(g,et,Ct,ve,Re,Ce,pe),ee=new $R(g,Fe),Q=new LR,te=new FR(ve,Re),ce=new Zw(g,et,Ct,we,E,h,l),oe=new HR(g,E,Re),Ee=new KR(V,ht,Re,we),je=new Jw(V,ve,ht,Re),J=new lA(V,ve,ht,Re),ht.programs=W.programs,g.capabilities=Re,g.extensions=ve,g.properties=Fe,g.renderLists=Q,g.shadowMap=oe,g.state=we,g.info=ht}_e();const he=new YR(g,V);this.xr=he,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const w=ve.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ve.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(w){w!==void 0&&(B=w,this.setSize(P,G,!1))},this.getSize=function(w){return w.set(P,G)},this.setSize=function(w,F,X=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=w,G=F,n.width=Math.floor(w*B),n.height=Math.floor(F*B),X===!0&&(n.style.width=w+"px",n.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(P*B,G*B).floor()},this.setDrawingBufferSize=function(w,F,X){P=w,G=F,B=X,n.width=Math.floor(w*X),n.height=Math.floor(F*X),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(z)},this.setViewport=function(w,F,X,j){w.isVector4?z.set(w.x,w.y,w.z,w.w):z.set(w,F,X,j),we.viewport(A.copy(z).multiplyScalar(B).floor())},this.getScissor=function(w){return w.copy(D)},this.setScissor=function(w,F,X,j){w.isVector4?D.set(w.x,w.y,w.z,w.w):D.set(w,F,X,j),we.scissor(I.copy(D).multiplyScalar(B).floor())},this.getScissorTest=function(){return O},this.setScissorTest=function(w){we.setScissorTest(O=w)},this.setOpaqueSort=function(w){N=w},this.setTransparentSort=function(w){k=w},this.getClearColor=function(w){return w.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor.apply(ce,arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha.apply(ce,arguments)},this.clear=function(w=!0,F=!0,X=!0){let j=0;if(w){let q=!1;if(R!==null){const fe=R.texture.format;q=fe===U_||fe===D_||fe===b_}if(q){const fe=R.texture.type,me=fe===ar||fe===$i||fe===vh||fe===Ir||fe===P_||fe===L_,ye=ce.getClearColor(),Te=ce.getClearAlpha(),Ne=ye.r,Pe=ye.g,Le=ye.b;me?(m[0]=Ne,m[1]=Pe,m[2]=Le,m[3]=Te,V.clearBufferuiv(V.COLOR,0,m)):(_[0]=Ne,_[1]=Pe,_[2]=Le,_[3]=Te,V.clearBufferiv(V.COLOR,0,_))}else j|=V.COLOR_BUFFER_BIT}F&&(j|=V.DEPTH_BUFFER_BIT),X&&(j|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ve,!1),n.removeEventListener("webglcontextrestored",U,!1),n.removeEventListener("webglcontextcreationerror",ue,!1),Q.dispose(),te.dispose(),Fe.dispose(),et.dispose(),Ct.dispose(),E.dispose(),Ce.dispose(),Ee.dispose(),W.dispose(),he.dispose(),he.removeEventListener("sessionstart",Rn),he.removeEventListener("sessionend",nt),ge&&(ge.dispose(),ge=null),$t.stop()};function Ve(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=ht.autoReset,F=oe.enabled,X=oe.autoUpdate,j=oe.needsUpdate,q=oe.type;_e(),ht.autoReset=w,oe.enabled=F,oe.autoUpdate=X,oe.needsUpdate=j,oe.type=q}function ue(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ie(w){const F=w.target;F.removeEventListener("dispose",ie),K(F)}function K(w){re(w),Fe.remove(w)}function re(w){const F=Fe.get(w).programs;F!==void 0&&(F.forEach(function(X){W.releaseProgram(X)}),w.isShaderMaterial&&W.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,X,j,q,fe){F===null&&(F=dt);const me=q.isMesh&&q.matrixWorld.determinant()<0,ye=ox(w,F,X,j,q);we.setMaterial(j,me);let Te=X.index,Ne=1;if(j.wireframe===!0){if(Te=C.getWireframeAttribute(X),Te===void 0)return;Ne=2}const Pe=X.drawRange,Le=X.attributes.position;let vt=Pe.start*Ne,mn=(Pe.start+Pe.count)*Ne;fe!==null&&(vt=Math.max(vt,fe.start*Ne),mn=Math.min(mn,(fe.start+fe.count)*Ne)),Te!==null?(vt=Math.max(vt,0),mn=Math.min(mn,Te.count)):Le!=null&&(vt=Math.max(vt,0),mn=Math.min(mn,Le.count));const Pt=mn-vt;if(Pt<0||Pt===1/0)return;Ce.setup(q,j,ye,X,Te);let mi,pt=je;if(Te!==null&&(mi=Ht.get(Te),pt=J,pt.setIndex(mi)),q.isMesh)j.wireframe===!0?(we.setLineWidth(j.wireframeLinewidth*Ie()),pt.setMode(V.LINES)):pt.setMode(V.TRIANGLES);else if(q.isLine){let He=j.linewidth;He===void 0&&(He=1),we.setLineWidth(He*Ie()),q.isLineSegments?pt.setMode(V.LINES):q.isLineLoop?pt.setMode(V.LINE_LOOP):pt.setMode(V.LINE_STRIP)}else q.isPoints?pt.setMode(V.POINTS):q.isSprite&&pt.setMode(V.TRIANGLES);if(q.isInstancedMesh)pt.renderInstances(vt,Pt,q.count);else if(X.isInstancedBufferGeometry){const He=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ou=Math.min(X.instanceCount,He);pt.renderInstances(vt,Pt,Ou)}else pt.render(vt,Pt)};function Se(w,F,X){w.transparent===!0&&w.side===Ti&&w.forceSinglePass===!1?(w.side=dn,w.needsUpdate=!0,Ea(w,F,X),w.side=fr,w.needsUpdate=!0,Ea(w,F,X),w.side=Ti):Ea(w,F,X)}this.compile=function(w,F,X=null){X===null&&(X=w),p=te.get(X),p.init(),v.push(p),X.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),w!==X&&w.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights(g._useLegacyLights);const j=new Set;return w.traverse(function(q){const fe=q.material;if(fe)if(Array.isArray(fe))for(let me=0;me<fe.length;me++){const ye=fe[me];Se(ye,X,q),j.add(ye)}else Se(fe,X,q),j.add(fe)}),v.pop(),p=null,j},this.compileAsync=function(w,F,X=null){const j=this.compile(w,F,X);return new Promise(q=>{function fe(){if(j.forEach(function(me){Fe.get(me).currentProgram.isReady()&&j.delete(me)}),j.size===0){q(w);return}setTimeout(fe,10)}ve.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let qe=null;function xt(w){qe&&qe(w)}function Rn(){$t.stop()}function nt(){$t.start()}const $t=new $_;$t.setAnimationLoop(xt),typeof self<"u"&&$t.setContext(self),this.setAnimationLoop=function(w){qe=w,he.setAnimationLoop(w),w===null?$t.stop():$t.start()},he.addEventListener("sessionstart",Rn),he.addEventListener("sessionend",nt),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(F),F=he.getCamera()),w.isScene===!0&&w.onBeforeRender(g,w,F,R),p=te.get(w,v.length),p.init(),v.push(p),be.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ne.setFromProjectionMatrix(be),le=this.localClippingEnabled,se=pe.init(this.clippingPlanes,le),x=Q.get(w,d.length),x.init(),d.push(x),oi(w,F,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(N,k),this.info.render.frame++,se===!0&&pe.beginShadows();const X=p.state.shadowsArray;if(oe.render(X,w,F),se===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),ce.render(x,w),p.setupLights(g._useLegacyLights),F.isArrayCamera){const j=F.cameras;for(let q=0,fe=j.length;q<fe;q++){const me=j[q];Th(x,w,me,me.viewport)}}else Th(x,w,F);R!==null&&(Oe.updateMultisampleRenderTarget(R),Oe.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(g,w,F),Ce.resetDefaultState(),L=-1,y=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function oi(w,F,X,j){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ne.intersectsSprite(w)){j&&De.setFromMatrixPosition(w.matrixWorld).applyMatrix4(be);const me=E.update(w),ye=w.material;ye.visible&&x.push(w,me,ye,X,De.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ne.intersectsObject(w))){const me=E.update(w),ye=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),De.copy(w.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),De.copy(me.boundingSphere.center)),De.applyMatrix4(w.matrixWorld).applyMatrix4(be)),Array.isArray(ye)){const Te=me.groups;for(let Ne=0,Pe=Te.length;Ne<Pe;Ne++){const Le=Te[Ne],vt=ye[Le.materialIndex];vt&&vt.visible&&x.push(w,me,vt,X,De.z,Le)}}else ye.visible&&x.push(w,me,ye,X,De.z,null)}}const fe=w.children;for(let me=0,ye=fe.length;me<ye;me++)oi(fe[me],F,X,j)}function Th(w,F,X,j){const q=w.opaque,fe=w.transmissive,me=w.transparent;p.setupLightsView(X),se===!0&&pe.setGlobalState(g.clippingPlanes,X),fe.length>0&&rx(q,fe,F,X),j&&we.viewport(A.copy(j)),q.length>0&&Ma(q,F,X),fe.length>0&&Ma(fe,F,X),me.length>0&&Ma(me,F,X),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function rx(w,F,X,j){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const fe=Re.isWebGL2;ge===null&&(ge=new qr(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?fa:ar,minFilter:ca,samples:fe?4:0})),g.getDrawingBufferSize(Ae),fe?ge.setSize(Ae.x,Ae.y):ge.setSize(pd(Ae.x),pd(Ae.y));const me=g.getRenderTarget();g.setRenderTarget(ge),g.getClearColor($),b=g.getClearAlpha(),b<1&&g.setClearColor(16777215,.5),g.clear();const ye=g.toneMapping;g.toneMapping=sr,Ma(w,X,j),Oe.updateMultisampleRenderTarget(ge),Oe.updateRenderTargetMipmap(ge);let Te=!1;for(let Ne=0,Pe=F.length;Ne<Pe;Ne++){const Le=F[Ne],vt=Le.object,mn=Le.geometry,Pt=Le.material,mi=Le.group;if(Pt.side===Ti&&vt.layers.test(j.layers)){const pt=Pt.side;Pt.side=dn,Pt.needsUpdate=!0,wh(vt,X,j,mn,Pt,mi),Pt.side=pt,Pt.needsUpdate=!0,Te=!0}}Te===!0&&(Oe.updateMultisampleRenderTarget(ge),Oe.updateRenderTargetMipmap(ge)),g.setRenderTarget(me),g.setClearColor($,b),g.toneMapping=ye}function Ma(w,F,X){const j=F.isScene===!0?F.overrideMaterial:null;for(let q=0,fe=w.length;q<fe;q++){const me=w[q],ye=me.object,Te=me.geometry,Ne=j===null?me.material:j,Pe=me.group;ye.layers.test(X.layers)&&wh(ye,F,X,Te,Ne,Pe)}}function wh(w,F,X,j,q,fe){w.onBeforeRender(g,F,X,j,q,fe),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),q.onBeforeRender(g,F,X,j,w,fe),q.transparent===!0&&q.side===Ti&&q.forceSinglePass===!1?(q.side=dn,q.needsUpdate=!0,g.renderBufferDirect(X,F,j,q,w,fe),q.side=fr,q.needsUpdate=!0,g.renderBufferDirect(X,F,j,q,w,fe),q.side=Ti):g.renderBufferDirect(X,F,j,q,w,fe),w.onAfterRender(g,F,X,j,q,fe)}function Ea(w,F,X){F.isScene!==!0&&(F=dt);const j=Fe.get(w),q=p.state.lights,fe=p.state.shadowsArray,me=q.state.version,ye=W.getParameters(w,q.state,fe,F,X),Te=W.getProgramCacheKey(ye);let Ne=j.programs;j.environment=w.isMeshStandardMaterial?F.environment:null,j.fog=F.fog,j.envMap=(w.isMeshStandardMaterial?Ct:et).get(w.envMap||j.environment),Ne===void 0&&(w.addEventListener("dispose",ie),Ne=new Map,j.programs=Ne);let Pe=Ne.get(Te);if(Pe!==void 0){if(j.currentProgram===Pe&&j.lightsStateVersion===me)return Rh(w,ye),Pe}else ye.uniforms=W.getUniforms(w),w.onBuild(X,ye,g),w.onBeforeCompile(ye,g),Pe=W.acquireProgram(ye,Te),Ne.set(Te,Pe),j.uniforms=ye.uniforms;const Le=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Le.clippingPlanes=pe.uniform),Rh(w,ye),j.needsLights=ax(w),j.lightsStateVersion=me,j.needsLights&&(Le.ambientLightColor.value=q.state.ambient,Le.lightProbe.value=q.state.probe,Le.directionalLights.value=q.state.directional,Le.directionalLightShadows.value=q.state.directionalShadow,Le.spotLights.value=q.state.spot,Le.spotLightShadows.value=q.state.spotShadow,Le.rectAreaLights.value=q.state.rectArea,Le.ltc_1.value=q.state.rectAreaLTC1,Le.ltc_2.value=q.state.rectAreaLTC2,Le.pointLights.value=q.state.point,Le.pointLightShadows.value=q.state.pointShadow,Le.hemisphereLights.value=q.state.hemi,Le.directionalShadowMap.value=q.state.directionalShadowMap,Le.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Le.spotShadowMap.value=q.state.spotShadowMap,Le.spotLightMatrix.value=q.state.spotLightMatrix,Le.spotLightMap.value=q.state.spotLightMap,Le.pointShadowMap.value=q.state.pointShadowMap,Le.pointShadowMatrix.value=q.state.pointShadowMatrix),j.currentProgram=Pe,j.uniformsList=null,Pe}function Ah(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=Pl.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function Rh(w,F){const X=Fe.get(w);X.outputColorSpace=F.outputColorSpace,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function ox(w,F,X,j,q){F.isScene!==!0&&(F=dt),Oe.resetTextureUnits();const fe=F.fog,me=j.isMeshStandardMaterial?F.environment:null,ye=R===null?g.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ni,Te=(j.isMeshStandardMaterial?Ct:et).get(j.envMap||me),Ne=j.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Pe=!!X.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Le=!!X.morphAttributes.position,vt=!!X.morphAttributes.normal,mn=!!X.morphAttributes.color;let Pt=sr;j.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Pt=g.toneMapping);const mi=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,pt=mi!==void 0?mi.length:0,He=Fe.get(j),Ou=p.state.lights;if(se===!0&&(le===!0||w!==y)){const gn=w===y&&j.id===L;pe.setState(j,w,gn)}let St=!1;j.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Ou.state.version||He.outputColorSpace!==ye||q.isInstancedMesh&&He.instancing===!1||!q.isInstancedMesh&&He.instancing===!0||q.isSkinnedMesh&&He.skinning===!1||!q.isSkinnedMesh&&He.skinning===!0||q.isInstancedMesh&&He.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&He.instancingColor===!1&&q.instanceColor!==null||He.envMap!==Te||j.fog===!0&&He.fog!==fe||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==pe.numPlanes||He.numIntersection!==pe.numIntersection)||He.vertexAlphas!==Ne||He.vertexTangents!==Pe||He.morphTargets!==Le||He.morphNormals!==vt||He.morphColors!==mn||He.toneMapping!==Pt||Re.isWebGL2===!0&&He.morphTargetsCount!==pt)&&(St=!0):(St=!0,He.__version=j.version);let gr=He.currentProgram;St===!0&&(gr=Ea(j,F,q));let Ch=!1,os=!1,ku=!1;const Kt=gr.getUniforms(),vr=He.uniforms;if(we.useProgram(gr.program)&&(Ch=!0,os=!0,ku=!0),j.id!==L&&(L=j.id,os=!0),Ch||y!==w){Kt.setValue(V,"projectionMatrix",w.projectionMatrix),Kt.setValue(V,"viewMatrix",w.matrixWorldInverse);const gn=Kt.map.cameraPosition;gn!==void 0&&gn.setValue(V,De.setFromMatrixPosition(w.matrixWorld)),Re.logarithmicDepthBuffer&&Kt.setValue(V,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Kt.setValue(V,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,os=!0,ku=!0)}if(q.isSkinnedMesh){Kt.setOptional(V,q,"bindMatrix"),Kt.setOptional(V,q,"bindMatrixInverse");const gn=q.skeleton;gn&&(Re.floatVertexTextures?(gn.boneTexture===null&&gn.computeBoneTexture(),Kt.setValue(V,"boneTexture",gn.boneTexture,Oe),Kt.setValue(V,"boneTextureSize",gn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const zu=X.morphAttributes;if((zu.position!==void 0||zu.normal!==void 0||zu.color!==void 0&&Re.isWebGL2===!0)&&Me.update(q,X,gr),(os||He.receiveShadow!==q.receiveShadow)&&(He.receiveShadow=q.receiveShadow,Kt.setValue(V,"receiveShadow",q.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(vr.envMap.value=Te,vr.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),os&&(Kt.setValue(V,"toneMappingExposure",g.toneMappingExposure),He.needsLights&&sx(vr,ku),fe&&j.fog===!0&&ee.refreshFogUniforms(vr,fe),ee.refreshMaterialUniforms(vr,j,B,G,ge),Pl.upload(V,Ah(He),vr,Oe)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Pl.upload(V,Ah(He),vr,Oe),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Kt.setValue(V,"center",q.center),Kt.setValue(V,"modelViewMatrix",q.modelViewMatrix),Kt.setValue(V,"normalMatrix",q.normalMatrix),Kt.setValue(V,"modelMatrix",q.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const gn=j.uniformsGroups;for(let Bu=0,lx=gn.length;Bu<lx;Bu++)if(Re.isWebGL2){const Ph=gn[Bu];Ee.update(Ph,gr),Ee.bind(Ph,gr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gr}function sx(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function ax(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,F,X){Fe.get(w.texture).__webglTexture=F,Fe.get(w.depthTexture).__webglTexture=X;const j=Fe.get(w);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=X===void 0,j.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,F){const X=Fe.get(w);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,X=0){R=w,M=F,T=X;let j=!0,q=null,fe=!1,me=!1;if(w){const Te=Fe.get(w);Te.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(V.FRAMEBUFFER,null),j=!1):Te.__webglFramebuffer===void 0?Oe.setupRenderTarget(w):Te.__hasExternalTextures&&Oe.rebindTextures(w,Fe.get(w.texture).__webglTexture,Fe.get(w.depthTexture).__webglTexture);const Ne=w.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(me=!0);const Pe=Fe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Pe[F])?q=Pe[F][X]:q=Pe[F],fe=!0):Re.isWebGL2&&w.samples>0&&Oe.useMultisampledRTT(w)===!1?q=Fe.get(w).__webglMultisampledFramebuffer:Array.isArray(Pe)?q=Pe[X]:q=Pe,A.copy(w.viewport),I.copy(w.scissor),Y=w.scissorTest}else A.copy(z).multiplyScalar(B).floor(),I.copy(D).multiplyScalar(B).floor(),Y=O;if(we.bindFramebuffer(V.FRAMEBUFFER,q)&&Re.drawBuffers&&j&&we.drawBuffers(w,q),we.viewport(A),we.scissor(I),we.setScissorTest(Y),fe){const Te=Fe.get(w.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+F,Te.__webglTexture,X)}else if(me){const Te=Fe.get(w.texture),Ne=F||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Te.__webglTexture,X||0,Ne)}L=-1},this.readRenderTargetPixels=function(w,F,X,j,q,fe,me){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Fe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(ye=ye[me]),ye){we.bindFramebuffer(V.FRAMEBUFFER,ye);try{const Te=w.texture,Ne=Te.format,Pe=Te.type;if(Ne!==Kn&&Qe.convert(Ne)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=Pe===fa&&(ve.has("EXT_color_buffer_half_float")||Re.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Pe!==ar&&Qe.convert(Pe)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===Ki&&(Re.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-j&&X>=0&&X<=w.height-q&&V.readPixels(F,X,j,q,Qe.convert(Ne),Qe.convert(Pe),fe)}finally{const Te=R!==null?Fe.get(R).__webglFramebuffer:null;we.bindFramebuffer(V.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(w,F,X=0){const j=Math.pow(2,-X),q=Math.floor(F.image.width*j),fe=Math.floor(F.image.height*j);Oe.setTexture2D(F,0),V.copyTexSubImage2D(V.TEXTURE_2D,X,0,0,w.x,w.y,q,fe),we.unbindTexture()},this.copyTextureToTexture=function(w,F,X,j=0){const q=F.image.width,fe=F.image.height,me=Qe.convert(X.format),ye=Qe.convert(X.type);Oe.setTexture2D(X,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment),F.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,j,w.x,w.y,q,fe,me,ye,F.image.data):F.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,j,w.x,w.y,F.mipmaps[0].width,F.mipmaps[0].height,me,F.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,j,w.x,w.y,me,ye,F.image),j===0&&X.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(w,F,X,j,q=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=w.max.x-w.min.x+1,me=w.max.y-w.min.y+1,ye=w.max.z-w.min.z+1,Te=Qe.convert(j.format),Ne=Qe.convert(j.type);let Pe;if(j.isData3DTexture)Oe.setTexture3D(j,0),Pe=V.TEXTURE_3D;else if(j.isDataArrayTexture)Oe.setTexture2DArray(j,0),Pe=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);const Le=V.getParameter(V.UNPACK_ROW_LENGTH),vt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),mn=V.getParameter(V.UNPACK_SKIP_PIXELS),Pt=V.getParameter(V.UNPACK_SKIP_ROWS),mi=V.getParameter(V.UNPACK_SKIP_IMAGES),pt=X.isCompressedTexture?X.mipmaps[0]:X.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,pt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,pt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,w.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,w.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,w.min.z),X.isDataTexture||X.isData3DTexture?V.texSubImage3D(Pe,q,F.x,F.y,F.z,fe,me,ye,Te,Ne,pt.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Pe,q,F.x,F.y,F.z,fe,me,ye,Te,pt.data)):V.texSubImage3D(Pe,q,F.x,F.y,F.z,fe,me,ye,Te,Ne,pt),V.pixelStorei(V.UNPACK_ROW_LENGTH,Le),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,vt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,mn),V.pixelStorei(V.UNPACK_SKIP_ROWS,Pt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,mi),q===0&&j.generateMipmaps&&V.generateMipmap(Pe),we.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Oe.setTextureCube(w,0):w.isData3DTexture?Oe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Oe.setTexture2DArray(w,0):Oe.setTexture2D(w,0),we.unbindTexture()},this.resetState=function(){M=0,T=0,R=null,we.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===_h?"display-p3":"srgb",n.unpackColorSpace=Je.workingColorSpace===Uu?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ft?Or:N_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Or?Ft:Ni}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ZR extends tx{}ZR.prototype.isWebGL1Renderer=!0;class QR extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class nx extends is{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const bg=new H,Dg=new H,Ug=new Et,Yc=new B_,pl=new Nu;class Ng extends zt{constructor(e=new ri,n=new nx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,o=n.count;r<o;r++)bg.fromBufferAttribute(n,r-1),Dg.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=bg.distanceTo(Dg);e.setAttribute("lineDistance",new ei(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pl.copy(i.boundingSphere),pl.applyMatrix4(r),pl.radius+=o,e.ray.intersectsSphere(pl)===!1)return;Ug.copy(r).invert(),Yc.copy(e.ray).applyMatrix4(Ug);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new H,c=new H,f=new H,h=new H,m=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const d=Math.max(0,s.start),v=Math.min(_.count,s.start+s.count);for(let g=d,S=v-1;g<S;g+=m){const M=_.getX(g),T=_.getX(g+1);if(u.fromBufferAttribute(p,M),c.fromBufferAttribute(p,T),Yc.distanceSqToSegment(u,c,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(h);L<e.near||L>e.far||n.push({distance:L,point:f.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,s.start),v=Math.min(p.count,s.start+s.count);for(let g=d,S=v-1;g<S;g+=m){if(u.fromBufferAttribute(p,g),c.fromBufferAttribute(p,g+1),Yc.distanceSqToSegment(u,c,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(h);T<e.near||T>e.far||n.push({distance:T,point:f.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}class Mh extends ri{constructor(e=1,n=32,i=16,r=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:o,thetaStart:s,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(s+a,Math.PI);let u=0;const c=[],f=new H,h=new H,m=[],_=[],x=[],p=[];for(let d=0;d<=i;d++){const v=[],g=d/i;let S=0;d===0&&s===0?S=.5/n:d===i&&l===Math.PI&&(S=-.5/n);for(let M=0;M<=n;M++){const T=M/n;f.x=-e*Math.cos(r+T*o)*Math.sin(s+g*a),f.y=e*Math.cos(s+g*a),f.z=e*Math.sin(r+T*o)*Math.sin(s+g*a),_.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),p.push(T+S,1-g),v.push(u++)}c.push(v)}for(let d=0;d<i;d++)for(let v=0;v<n;v++){const g=c[d][v+1],S=c[d][v],M=c[d+1][v],T=c[d+1][v+1];(d!==0||s>0)&&m.push(g,S,T),(d!==i-1||l<Math.PI)&&m.push(S,M,T)}this.setIndex(m),this.setAttribute("position",new ei(_,3)),this.setAttribute("normal",new ei(x,3)),this.setAttribute("uv",new ei(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class JR extends is{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=I_,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Ig={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class eC{constructor(e,n,i){const r=this;let o=!1,s=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(c){a++,o===!1&&r.onStart!==void 0&&r.onStart(c,s,a),o=!0},this.itemEnd=function(c){s++,r.onProgress!==void 0&&r.onProgress(c,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,h=u.length;f<h;f+=2){const m=u[f],_=u[f+1];if(m.global&&(m.lastIndex=0),m.test(c))return _}return null}}}const tC=new eC;class Eh{constructor(e){this.manager=e!==void 0?e:tC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,o){i.load(e,r,n,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Eh.DEFAULT_MATERIAL_NAME="__DEFAULT";class nC extends Eh{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=Ig.get(e);if(s!==void 0)return o.manager.itemStart(e),setTimeout(function(){n&&n(s),o.manager.itemEnd(e)},0),s;const a=da("img");function l(){c(),Ig.add(e,this),n&&n(this),o.manager.itemEnd(e)}function u(f){c(),r&&r(f),o.manager.itemError(e),o.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class iC extends Eh{constructor(e){super(e)}load(e,n,i,r){const o=new hn,s=new nC(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,n!==void 0&&n(o)},i,r),o}}class ix extends zt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const $c=new Et,Fg=new H,Og=new H;class rC{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xh,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Fg.setFromMatrixPosition(e.matrixWorld),n.position.copy(Fg),Og.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Og),n.updateMatrixWorld(),$c.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($c),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply($c)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class oC extends rC{constructor(){super(new K_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sC extends ix{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new oC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class aC extends ix{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mh);function lC({rotation:t,onRotationChange:e,showGraticule:n,projectionParams:i,isUnfolding:r}){const o=mt.useRef(null),s=mt.useRef(null),a=mt.useRef(null),l=mt.useRef(null),u=mt.useRef(null),c=mt.useRef(null),[f,h]=mt.useState(!1);mt.useEffect(()=>{if(!o.current)return;const _=o.current.clientWidth,x=o.current.clientHeight,p=new QR;p.background=new We(662058),s.current=p;const d=new Dn(45,_/x,.1,1e3);d.position.z=3;const v=new tx({antialias:!0});v.setSize(_,x),v.setPixelRatio(window.devicePixelRatio),a.current=v,o.current.appendChild(v.domElement);const g=new aC(4210752,.6);p.add(g);const S=new sC(16777215,.8);S.position.set(1,1,1),p.add(S);const M=new Mh(1,64,32),R=new iC().load("https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/textures/planets/earth_atmos_2048.jpg",()=>{console.log("Earth texture loaded")},void 0,B=>{console.warn("Could not load Earth texture:",B)}),L=new JR({map:R,transparent:!0}),y=new Ci(M,L);l.current=y,p.add(y),m(p);let A=!1,I={x:0,y:0};const Y=B=>{A=!0,h(!0),I={x:B.clientX,y:B.clientY}},$=B=>{if(!A)return;const N=B.clientX-I.x,k=B.clientY-I.y,z={x:t.x-k*.01,y:t.y+N*.01};z.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,z.x)),e(z),I={x:B.clientX,y:B.clientY}},b=()=>{A=!1,h(!1)};v.domElement.addEventListener("mousedown",Y),window.addEventListener("mousemove",$),window.addEventListener("mouseup",b);const P=()=>{if(c.current=requestAnimationFrame(P),l.current){if(l.current.rotation.x=t.x,l.current.rotation.y=t.y,r){const B=Date.now()*.005;l.current.material.opacity=.8+.2*Math.sin(B);const N=1+.05*Math.sin(B*2);l.current.scale.setScalar(N)}else l.current.material.opacity=1,l.current.scale.setScalar(1);u.current&&(u.current.rotation.x=t.x,u.current.rotation.y=t.y,u.current.visible=n)}v.render(p,d)};P();const G=()=>{var k,z;const B=((k=o.current)==null?void 0:k.clientWidth)||_,N=((z=o.current)==null?void 0:z.clientHeight)||x;d.aspect=B/N,d.updateProjectionMatrix(),v.setSize(B,N)};return window.addEventListener("resize",G),()=>{c.current&&cancelAnimationFrame(c.current),v.domElement.removeEventListener("mousedown",Y),window.removeEventListener("mousemove",$),window.removeEventListener("mouseup",b),window.removeEventListener("resize",G),o.current&&v.domElement&&o.current.removeChild(v.domElement),v.dispose()}},[]),mt.useEffect(()=>{l.current&&(l.current.rotation.x=t.x,l.current.rotation.y=t.y),u.current&&(u.current.rotation.x=t.x,u.current.rotation.y=t.y)},[t]);const m=_=>{const x=new Ps;u.current=x;const p=new nx({color:8947848,transparent:!0,opacity:.5});for(let d=-180;d<=180;d+=15){const v=[];for(let M=-90;M<=90;M+=2){const T=M*Math.PI/180,R=d*Math.PI/180,L=Math.cos(T)*Math.cos(R),y=Math.sin(T),A=Math.cos(T)*Math.sin(R);v.push(new H(L,y,A).multiplyScalar(1.01))}const g=new ri().setFromPoints(v),S=new Ng(g,p);x.add(S)}for(let d=-75;d<=75;d+=15){const v=[],g=d*Math.PI/180;for(let T=-180;T<=180;T+=2){const R=T*Math.PI/180,L=Math.cos(g)*Math.cos(R),y=Math.sin(g),A=Math.cos(g)*Math.sin(R);v.push(new H(L,y,A).multiplyScalar(1.01))}const S=new ri().setFromPoints(v),M=new Ng(S,p);x.add(M)}_.add(x)};return xe.jsx("div",{ref:o,style:{width:"100%",height:"100%",cursor:f?"grabbing":"grab"}})}function Ls(t,e,n){this.k=t,this.x=e,this.y=n}Ls.prototype={constructor:Ls,scale:function(t){return t===1?this:new Ls(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new Ls(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};Ls.prototype;function uC(t){return t}function cC(t){if(t==null)return uC;var e,n,i=t.scale[0],r=t.scale[1],o=t.translate[0],s=t.translate[1];return function(a,l){l||(e=n=0);var u=2,c=a.length,f=new Array(c);for(f[0]=(e+=a[0])*i+o,f[1]=(n+=a[1])*r+s;u<c;)f[u]=a[u],++u;return f}}function fC(t,e){for(var n,i=t.length,r=i-e;r<--i;)n=t[r],t[r++]=t[i],t[i]=n}function kg(t,e){return typeof e=="string"&&(e=t.objects[e]),e.type==="GeometryCollection"?{type:"FeatureCollection",features:e.geometries.map(function(n){return zg(t,n)})}:zg(t,e)}function zg(t,e){var n=e.id,i=e.bbox,r=e.properties==null?{}:e.properties,o=dC(t,e);return n==null&&i==null?{type:"Feature",properties:r,geometry:o}:i==null?{type:"Feature",id:n,properties:r,geometry:o}:{type:"Feature",id:n,bbox:i,properties:r,geometry:o}}function dC(t,e){var n=cC(t.transform),i=t.arcs;function r(c,f){f.length&&f.pop();for(var h=i[c<0?~c:c],m=0,_=h.length;m<_;++m)f.push(n(h[m],m));c<0&&fC(f,_)}function o(c){return n(c)}function s(c){for(var f=[],h=0,m=c.length;h<m;++h)r(c[h],f);return f.length<2&&f.push(f[0]),f}function a(c){for(var f=s(c);f.length<4;)f.push(f[0]);return f}function l(c){return c.map(a)}function u(c){var f=c.type,h;switch(f){case"GeometryCollection":return{type:f,geometries:c.geometries.map(u)};case"Point":h=o(c.coordinates);break;case"MultiPoint":h=c.coordinates.map(o);break;case"LineString":h=s(c.arcs);break;case"MultiLineString":h=c.arcs.map(s);break;case"Polygon":h=l(c.arcs);break;case"MultiPolygon":h=c.arcs.map(l);break;default:return null}return{type:f,coordinates:h}}return u(e)}function hC({projection:t,params:e,showGraticule:n,showTissot:i,globeRotation:r,isUnfolding:o}){const s=mt.useRef(null),a=mt.useRef(null);mt.useEffect(()=>{(async()=>{try{const f=await(await fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")).json();a.current={countries:kg(f,f.objects.countries),land:kg(f,f.objects.land)}}catch(c){console.warn("Could not load world data:",c),a.current={countries:{type:"FeatureCollection",features:[]},land:{type:"FeatureCollection",features:[]}}}})()},[]),mt.useEffect(()=>{if(!a.current)return;const u=s.current;if(!u)return;const c=u.getContext("2d"),f=u.clientWidth,h=u.clientHeight;u.width=f*window.devicePixelRatio,u.height=h*window.devicePixelRatio,c.scale(window.devicePixelRatio,window.devicePixelRatio),c.clearRect(0,0,f,h),c.fillStyle="#0a1a2a",c.fillRect(0,0,f,h);try{const m=XM(t,{...e,scale:e.scale*Math.min(f,h)/400}).translate([f/2,h/2]),_=fM(m,c);if(c.beginPath(),_({type:"Sphere"}),c.fillStyle="#1e3a5f",c.fill(),a.current.countries.features.length>0&&(c.beginPath(),_(a.current.countries),c.fillStyle="#4a7c59",c.fill(),c.strokeStyle="#2c5530",c.lineWidth=.5,c.stroke()),n){const x=Zp();c.beginPath(),_(x()),c.strokeStyle="rgba(255, 255, 255, 0.3)",c.lineWidth=.5,c.stroke();const p=Zp().step([10,10]);c.beginPath(),_(p()),c.strokeStyle="rgba(255, 255, 255, 0.5)",c.lineWidth=.5,c.stroke()}if(i&&l(c,_,m),o){c.fillStyle="rgba(255, 255, 255, 0.1)",c.fillRect(0,0,f,h);const x=Date.now()*.01;c.strokeStyle=`rgba(74, 144, 226, ${.5+.3*Math.sin(x)})`,c.lineWidth=2,c.beginPath(),_({type:"Sphere"}),c.stroke()}}catch(m){console.error("Error rendering projection:",m),c.fillStyle="white",c.font="16px sans-serif",c.textAlign="center",c.fillText("Error rendering projection",f/2,h/2)}},[t,e,n,i,r,o,a.current]);const l=(u,c,f)=>{for(let m=-180;m<=180;m+=30)for(let _=-90;_<=90;_+=30){if(Math.abs(_)>85)continue;const x=Vy().center([m,_]).radius(5);try{f([m,_])&&(u.beginPath(),c(x()),u.strokeStyle="rgba(255, 100, 100, 0.7)",u.lineWidth=1,u.stroke())}catch{continue}}};return xe.jsx("canvas",{ref:s,style:{width:"100%",height:"100%",display:"block"}})}function pC(){var x;const[t,e]=mt.useState("equalEarth"),[n,i]=mt.useState({centerLon:0,centerLat:0,rotation:0,scale:150}),[r,o]=mt.useState(!0),[s,a]=mt.useState(!1),[l,u]=mt.useState(!1),[c,f]=mt.useState({x:0,y:0}),h=p=>{e(p);const d=ua[p];d&&d.defaultParams&&i(v=>({...v,...d.defaultParams}))},m=(p,d)=>{i(v=>({...v,[p]:d}))},_=()=>{u(!0),setTimeout(()=>u(!1),3e3)};return xe.jsxs("div",{className:"app",children:[xe.jsxs("header",{className:"header",children:[xe.jsx("h1",{children:"3D-to-2D Projection Lab"}),xe.jsx("p",{children:"Interactive exploration of map projections and their distortions"})]}),xe.jsxs("div",{className:"main-container",children:[xe.jsx("div",{className:"controls-panel",children:xe.jsx(jM,{selectedProjection:t,projectionParams:n,showGraticule:r,showTissot:s,onProjectionChange:h,onParamChange:m,onGraticuleToggle:o,onTissotToggle:a,onUnfold:_,isUnfolding:l})}),xe.jsxs("div",{className:"visualization-container",children:[xe.jsxs("div",{className:"globe-container",children:[xe.jsx("div",{className:"view-title",children:"3D Globe"}),xe.jsx(lC,{rotation:c,onRotationChange:f,showGraticule:r,projectionParams:n,isUnfolding:l})]}),xe.jsxs("div",{className:"projection-container",children:[xe.jsxs("div",{className:"view-title",children:[((x=ua[t])==null?void 0:x.name)||t," Projection"]}),xe.jsx(hC,{projection:t,params:n,showGraticule:r,showTissot:s,globeRotation:c,isUnfolding:l})]})]})]})]})}Kc.createRoot(document.getElementById("root")).render(xe.jsx(wx.StrictMode,{children:xe.jsx(pC,{})}));
//# sourceMappingURL=index-1f5376e3.js.map
