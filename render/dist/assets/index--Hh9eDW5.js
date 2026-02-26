var Yo=Object.create;var dr=Object.defineProperty;var Xo=Object.getOwnPropertyDescriptor;var Bi=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),nt=e=>{throw TypeError(e)};var Ui=(e,t,u)=>t in e?dr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[t]=u;var Li=(e,t)=>dr(e,"name",{value:t,configurable:!0});var qi=e=>[,,,Yo((e==null?void 0:e[Bi("metadata")])??null)],Hi=["class","method","getter","setter","accessor","field","value","get","set"],Pt=e=>e!==void 0&&typeof e!="function"?nt("Function expected"):e,ea=(e,t,u,r,i)=>({kind:Hi[e],name:t,metadata:r,addInitializer:s=>u._?nt("Already initialized"):i.push(Pt(s||null))}),ta=(e,t)=>Ui(t,Bi("metadata"),e[3]),we=(e,t,u,r)=>{for(var i=0,s=e[t>>1],n=s&&s.length;i<n;i++)t&1?s[i].call(u):r=s[i].call(u,r);return r},ot=(e,t,u,r,i,s)=>{var n,o,a,l,d,c=t&7,p=!!(t&8),f=!!(t&16),h=c>3?e.length+1:c?p?1:2:0,m=Hi[c+5],b=c>3&&(e[h-1]=[]),_=e[h]||(e[h]=[]),w=c&&(!f&&!p&&(i=i.prototype),c<5&&(c>3||!f)&&Xo(c<4?i:{get[u](){return D(this,s)},set[u](y){return z(this,s,y)}},u));c?f&&c<4&&Li(s,(c>2?"set ":c>1?"get ":"")+u):Li(i,u);for(var v=r.length-1;v>=0;v--)l=ea(c,u,a={},e[3],_),c&&(l.static=p,l.private=f,d=l.access={has:f?y=>vu(i,y):y=>u in y},c^3&&(d.get=f?y=>(c^1?D:R)(y,i,c^4?s:w.get):y=>y[u]),c>2&&(d.set=f?(y,g)=>z(y,i,g,c^4?s:w.set):(y,g)=>y[u]=g)),o=(0,r[v])(c?c<4?f?s:w[m]:c>4?void 0:{get:w.get,set:w.set}:i,l),a._=1,c^4||o===void 0?Pt(o)&&(c>4?b.unshift(o):c?f?s=o:w[m]=o:i=o):typeof o!="object"||o===null?nt("Object expected"):(Pt(n=o.get)&&(w.get=n),Pt(n=o.set)&&(w.set=n),Pt(n=o.init)&&b.unshift(n));return c||ta(e,i),w&&dr(i,u,w),f?c^4?s:w:i},fe=(e,t,u)=>Ui(e,typeof t!="symbol"?t+"":t,u),hr=(e,t,u)=>t.has(e)||nt("Cannot "+u),vu=(e,t)=>Object(t)!==t?nt('Cannot use the "in" operator on this value'):e.has(t),D=(e,t,u)=>(hr(e,t,"read from private field"),u?u.call(e):t.get(e)),T=(e,t,u)=>t.has(e)?nt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,u),z=(e,t,u,r)=>(hr(e,t,"write to private field"),r?r.call(e,u):t.set(e,u),u),R=(e,t,u)=>(hr(e,t,"access private method"),u);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function u(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=u(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Su=globalThis,gi=Su.ShadowRoot&&(Su.ShadyCSS===void 0||Su.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,yi=Symbol(),Vi=new WeakMap;let sn=class{constructor(t,u,r){if(this._$cssResult$=!0,r!==yi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=u}get styleSheet(){let t=this.o;const u=this.t;if(gi&&t===void 0){const r=u!==void 0&&u.length===1;r&&(t=Vi.get(u)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Vi.set(u,t))}return t}toString(){return this.cssText}};const nn=e=>new sn(typeof e=="string"?e:e+"",void 0,yi),K=(e,...t)=>{const u=e.length===1?e[0]:t.reduce((r,i,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new sn(u,e,yi)},ua=(e,t)=>{if(gi)e.adoptedStyleSheets=t.map(u=>u instanceof CSSStyleSheet?u:u.styleSheet);else for(const u of t){const r=document.createElement("style"),i=Su.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=u.cssText,e.appendChild(r)}},Wi=gi?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let u="";for(const r of t.cssRules)u+=r.cssText;return nn(u)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ra,defineProperty:ia,getOwnPropertyDescriptor:sa,getOwnPropertyNames:na,getOwnPropertySymbols:oa,getPrototypeOf:aa}=Object,He=globalThis,Zi=He.trustedTypes,ca=Zi?Zi.emptyScript:"",fr=He.reactiveElementPolyfillSupport,Gt=(e,t)=>e,Mu={toAttribute(e,t){switch(t){case Boolean:e=e?ca:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let u=e;switch(t){case Boolean:u=e!==null;break;case Number:u=e===null?null:Number(e);break;case Object:case Array:try{u=JSON.parse(e)}catch{u=null}}return u}},xi=(e,t)=>!ra(e,t),Gi={attribute:!0,type:String,converter:Mu,reflect:!1,useDefault:!1,hasChanged:xi};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),He.litPropertyMetadata??(He.litPropertyMetadata=new WeakMap);let ht=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,u=Gi){if(u.state&&(u.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((u=Object.create(u)).wrapped=!0),this.elementProperties.set(t,u),!u.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,u);i!==void 0&&ia(this.prototype,t,i)}}static getPropertyDescriptor(t,u,r){const{get:i,set:s}=sa(this.prototype,t)??{get(){return this[u]},set(n){this[u]=n}};return{get:i,set(n){const o=i==null?void 0:i.call(this);s==null||s.call(this,n),this.requestUpdate(t,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Gi}static _$Ei(){if(this.hasOwnProperty(Gt("elementProperties")))return;const t=aa(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Gt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Gt("properties"))){const u=this.properties,r=[...na(u),...oa(u)];for(const i of r)this.createProperty(i,u[i])}const t=this[Symbol.metadata];if(t!==null){const u=litPropertyMetadata.get(t);if(u!==void 0)for(const[r,i]of u)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[u,r]of this.elementProperties){const i=this._$Eu(u,r);i!==void 0&&this._$Eh.set(i,u)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const u=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)u.unshift(Wi(i))}else t!==void 0&&u.push(Wi(t));return u}static _$Eu(t,u){const r=u.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(u=>this.enableUpdating=u),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(u=>u(this))}addController(t){var u;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((u=t.hostConnected)==null||u.call(t))}removeController(t){var u;(u=this._$EO)==null||u.delete(t)}_$E_(){const t=new Map,u=this.constructor.elementProperties;for(const r of u.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ua(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(u=>{var r;return(r=u.hostConnected)==null?void 0:r.call(u)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(u=>{var r;return(r=u.hostDisconnected)==null?void 0:r.call(u)})}attributeChangedCallback(t,u,r){this._$AK(t,r)}_$ET(t,u){var s;const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const n=(((s=r.converter)==null?void 0:s.toAttribute)!==void 0?r.converter:Mu).toAttribute(u,r.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,u){var s,n;const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=r.getPropertyOptions(i),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)==null?void 0:s.fromAttribute)!==void 0?o.converter:Mu;this._$Em=i;const l=a.fromAttribute(u,o.type);this[i]=l??((n=this._$Ej)==null?void 0:n.get(i))??l,this._$Em=null}}requestUpdate(t,u,r,i=!1,s){var n;if(t!==void 0){const o=this.constructor;if(i===!1&&(s=this[t]),r??(r=o.getPropertyOptions(t)),!((r.hasChanged??xi)(s,u)||r.useDefault&&r.reflect&&s===((n=this._$Ej)==null?void 0:n.get(t))&&!this.hasAttribute(o._$Eu(t,r))))return;this.C(t,u,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,u,{useDefault:r,reflect:i,wrapped:s},n){r&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??u??this[t]),s!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(u=void 0),this._$AL.set(t,u)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(u){Promise.reject(u)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,n]of i){const{wrapped:o}=n,a=this[s];o!==!0||this._$AL.has(s)||a===void 0||this.C(s,void 0,n,a)}}let t=!1;const u=this._$AL;try{t=this.shouldUpdate(u),t?(this.willUpdate(u),(r=this._$EO)==null||r.forEach(i=>{var s;return(s=i.hostUpdate)==null?void 0:s.call(i)}),this.update(u)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(u)}willUpdate(t){}_$AE(t){var u;(u=this._$EO)==null||u.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(u=>this._$ET(u,this[u]))),this._$EM()}updated(t){}firstUpdated(t){}};ht.elementStyles=[],ht.shadowRootOptions={mode:"open"},ht[Gt("elementProperties")]=new Map,ht[Gt("finalized")]=new Map,fr==null||fr({ReactiveElement:ht}),(He.reactiveElementVersions??(He.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kt=globalThis,Ki=e=>e,ju=Kt.trustedTypes,Ji=ju?ju.createPolicy("lit-html",{createHTML:e=>e}):void 0,on="$lit$",je=`lit$${Math.random().toFixed(9).slice(2)}$`,an="?"+je,la=`<${an}>`,it=document,iu=()=>it.createComment(""),su=e=>e===null||typeof e!="object"&&typeof e!="function",vi=Array.isArray,da=e=>vi(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",pr=`[ 	
\f\r]`,zt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Qi=/-->/g,Yi=/>/g,Ge=RegExp(`>|${pr}(?:([^\\s"'>=/]+)(${pr}*=${pr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Xi=/'/g,es=/"/g,cn=/^(?:script|style|textarea|title)$/i,ha=e=>(t,...u)=>({_$litType$:e,strings:t,values:u}),E=ha(1),ve=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),ts=new WeakMap,Xe=it.createTreeWalker(it,129);function ln(e,t){if(!vi(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ji!==void 0?Ji.createHTML(t):t}const fa=(e,t)=>{const u=e.length-1,r=[];let i,s=t===2?"<svg>":t===3?"<math>":"",n=zt;for(let o=0;o<u;o++){const a=e[o];let l,d,c=-1,p=0;for(;p<a.length&&(n.lastIndex=p,d=n.exec(a),d!==null);)p=n.lastIndex,n===zt?d[1]==="!--"?n=Qi:d[1]!==void 0?n=Yi:d[2]!==void 0?(cn.test(d[2])&&(i=RegExp("</"+d[2],"g")),n=Ge):d[3]!==void 0&&(n=Ge):n===Ge?d[0]===">"?(n=i??zt,c=-1):d[1]===void 0?c=-2:(c=n.lastIndex-d[2].length,l=d[1],n=d[3]===void 0?Ge:d[3]==='"'?es:Xi):n===es||n===Xi?n=Ge:n===Qi||n===Yi?n=zt:(n=Ge,i=void 0);const f=n===Ge&&e[o+1].startsWith("/>")?" ":"";s+=n===zt?a+la:c>=0?(r.push(l),a.slice(0,c)+on+a.slice(c)+je+f):a+je+(c===-2?o:f)}return[ln(e,s+(e[u]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};let Yr=class dn{constructor({strings:t,_$litType$:u},r){let i;this.parts=[];let s=0,n=0;const o=t.length-1,a=this.parts,[l,d]=fa(t,u);if(this.el=dn.createElement(l,r),Xe.currentNode=this.el.content,u===2||u===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=Xe.nextNode())!==null&&a.length<o;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(on)){const p=d[n++],f=i.getAttribute(c).split(je),h=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:h[2],strings:f,ctor:h[1]==="."?ba:h[1]==="?"?ma:h[1]==="@"?_a:Xu}),i.removeAttribute(c)}else c.startsWith(je)&&(a.push({type:6,index:s}),i.removeAttribute(c));if(cn.test(i.tagName)){const c=i.textContent.split(je),p=c.length-1;if(p>0){i.textContent=ju?ju.emptyScript:"";for(let f=0;f<p;f++)i.append(c[f],iu()),Xe.nextNode(),a.push({type:2,index:++s});i.append(c[p],iu())}}}else if(i.nodeType===8)if(i.data===an)a.push({type:2,index:s});else{let c=-1;for(;(c=i.data.indexOf(je,c+1))!==-1;)a.push({type:7,index:s}),c+=je.length-1}s++}}static createElement(t,u){const r=it.createElement("template");return r.innerHTML=t,r}};function $t(e,t,u=e,r){var n,o;if(t===ve)return t;let i=r!==void 0?(n=u._$Co)==null?void 0:n[r]:u._$Cl;const s=su(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==s&&((o=i==null?void 0:i._$AO)==null||o.call(i,!1),s===void 0?i=void 0:(i=new s(e),i._$AT(e,u,r)),r!==void 0?(u._$Co??(u._$Co=[]))[r]=i:u._$Cl=i),i!==void 0&&(t=$t(e,i._$AS(e,t.values),i,r)),t}let pa=class{constructor(t,u){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=u}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:u},parts:r}=this._$AD,i=((t==null?void 0:t.creationScope)??it).importNode(u,!0);Xe.currentNode=i;let s=Xe.nextNode(),n=0,o=0,a=r[0];for(;a!==void 0;){if(n===a.index){let l;a.type===2?l=new Yu(s,s.nextSibling,this,t):a.type===1?l=new a.ctor(s,a.name,a.strings,this,t):a.type===6&&(l=new ga(s,this,t)),this._$AV.push(l),a=r[++o]}n!==(a==null?void 0:a.index)&&(s=Xe.nextNode(),n++)}return Xe.currentNode=it,i}p(t){let u=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,u),u+=r.strings.length-2):r._$AI(t[u])),u++}},Yu=class hn{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,u,r,i){this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=u,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const u=this._$AM;return u!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=u.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,u=this){t=$t(this,t,u),su(t)?t===P||t==null||t===""?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==ve&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):da(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==P&&su(this._$AH)?this._$AA.nextSibling.data=t:this.T(it.createTextNode(t)),this._$AH=t}$(t){var s;const{values:u,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Yr.createElement(ln(r.h,r.h[0]),this.options)),r);if(((s=this._$AH)==null?void 0:s._$AD)===i)this._$AH.p(u);else{const n=new pa(i,this),o=n.u(this.options);n.p(u),this.T(o),this._$AH=n}}_$AC(t){let u=ts.get(t.strings);return u===void 0&&ts.set(t.strings,u=new Yr(t)),u}k(t){vi(this._$AH)||(this._$AH=[],this._$AR());const u=this._$AH;let r,i=0;for(const s of t)i===u.length?u.push(r=new hn(this.O(iu()),this.O(iu()),this,this.options)):r=u[i],r._$AI(s),i++;i<u.length&&(this._$AR(r&&r._$AB.nextSibling,i),u.length=i)}_$AR(t=this._$AA.nextSibling,u){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,u);t!==this._$AB;){const i=Ki(t).nextSibling;Ki(t).remove(),t=i}}setConnected(t){var u;this._$AM===void 0&&(this._$Cv=t,(u=this._$AP)==null||u.call(this,t))}},Xu=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,u,r,i,s){this.type=1,this._$AH=P,this._$AN=void 0,this.element=t,this.name=u,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=P}_$AI(t,u=this,r,i){const s=this.strings;let n=!1;if(s===void 0)t=$t(this,t,u,0),n=!su(t)||t!==this._$AH&&t!==ve,n&&(this._$AH=t);else{const o=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=$t(this,o[r+a],u,a),l===ve&&(l=this._$AH[a]),n||(n=!su(l)||l!==this._$AH[a]),l===P?t=P:t!==P&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}n&&!i&&this.j(t)}j(t){t===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ba=class extends Xu{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===P?void 0:t}},ma=class extends Xu{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==P)}},_a=class extends Xu{constructor(t,u,r,i,s){super(t,u,r,i,s),this.type=5}_$AI(t,u=this){if((t=$t(this,t,u,0)??P)===ve)return;const r=this._$AH,i=t===P&&r!==P||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==P&&(r===P||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var u;typeof this._$AH=="function"?this._$AH.call(((u=this.options)==null?void 0:u.host)??this.element,t):this._$AH.handleEvent(t)}},ga=class{constructor(t,u,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=u,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){$t(this,t)}};const ya={I:Yu},br=Kt.litHtmlPolyfillSupport;br==null||br(Yr,Yu),(Kt.litHtmlVersions??(Kt.litHtmlVersions=[])).push("3.3.2");const $i=(e,t,u)=>{const r=(u==null?void 0:u.renderBefore)??t;let i=r._$litPart$;if(i===void 0){const s=(u==null?void 0:u.renderBefore)??null;r._$litPart$=i=new Yu(t.insertBefore(iu(),s),s,void 0,u??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tt=globalThis;let Jt=class extends ht{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var u;const t=super.createRenderRoot();return(u=this.renderOptions).renderBefore??(u.renderBefore=t.firstChild),t}update(t){const u=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=$i(u,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return ve}};var Js;Jt._$litElement$=!0,Jt.finalized=!0,(Js=tt.litElementHydrateSupport)==null||Js.call(tt,{LitElement:Jt});const mr=tt.litElementPolyfillSupport;mr==null||mr({LitElement:Jt});(tt.litElementVersions??(tt.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=e=>(t,u)=>{u!==void 0?u.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xa={attribute:!0,type:String,converter:Mu,reflect:!1,hasChanged:xi},va=(e=xa,t,u)=>{const{kind:r,metadata:i}=u;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(u.name,e),r==="accessor"){const{name:n}=u;return{set(o){const a=t.get.call(this);t.set.call(this,o),this.requestUpdate(n,a,e,!0,o)},init(o){return o!==void 0&&this.C(n,void 0,e,o),o}}}if(r==="setter"){const{name:n}=u;return function(o){const a=this[n];t.call(this,o),this.requestUpdate(n,a,e,!0,o)}}throw Error("Unsupported decorator location: "+r)};function j(e){return(t,u)=>typeof u=="object"?va(e,t,u):((r,i,s)=>{const n=i.hasOwnProperty(s);return i.constructor.createProperty(s,r),n?Object.getOwnPropertyDescriptor(i,s):void 0})(e,t,u)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function fn(e){return j({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $a=(e,t,u)=>(u.configurable=!0,u.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,u),u);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ca(e,t){return(u,r,i)=>{const s=n=>{var o;return((o=n.renderRoot)==null?void 0:o.querySelector(e))??null};return $a(u,r,{get(){return s(this)}})}}var wa=Object.defineProperty,ka=(e,t,u)=>t in e?wa(e,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[t]=u,_r=(e,t,u)=>(ka(e,typeof t!="symbol"?t+"":t,u),u),Ea=(e,t,u)=>{if(!t.has(e))throw TypeError("Cannot "+u)},gr=(e,t)=>{if(Object(t)!==t)throw TypeError('Cannot use the "in" operator on this value');return e.has(t)},$u=(e,t,u)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,u)},us=(e,t,u)=>(Ea(e,t,"access private method"),u);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function pn(e,t){return Object.is(e,t)}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Z=null,Qt=!1,Fu=1;const Lu=Symbol("SIGNAL");function bt(e){const t=Z;return Z=e,t}function Aa(){return Z}function Da(){return Qt}const Ci={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function er(e){if(Qt)throw new Error(typeof ngDevMode<"u"&&ngDevMode?"Assertion error: signal read during notification phase":"");if(Z===null)return;Z.consumerOnSignalRead(e);const t=Z.nextProducerIndex++;if(Ct(Z),t<Z.producerNode.length&&Z.producerNode[t]!==e&&Xr(Z)){const u=Z.producerNode[t];tr(u,Z.producerIndexOfThis[t])}Z.producerNode[t]!==e&&(Z.producerNode[t]=e,Z.producerIndexOfThis[t]=Xr(Z)?_n(e,Z,t):0),Z.producerLastReadVersion[t]=e.version}function Sa(){Fu++}function bn(e){if(!(!e.dirty&&e.lastCleanEpoch===Fu)){if(!e.producerMustRecompute(e)&&!Pa(e)){e.dirty=!1,e.lastCleanEpoch=Fu;return}e.producerRecomputeValue(e),e.dirty=!1,e.lastCleanEpoch=Fu}}function mn(e){if(e.liveConsumerNode===void 0)return;const t=Qt;Qt=!0;try{for(const u of e.liveConsumerNode)u.dirty||Ta(u)}finally{Qt=t}}function Fa(){return(Z==null?void 0:Z.consumerAllowSignalWrites)!==!1}function Ta(e){var t;e.dirty=!0,mn(e),(t=e.consumerMarkedDirty)==null||t.call(e.wrapper??e)}function Oa(e){return e&&(e.nextProducerIndex=0),bt(e)}function Ia(e,t){if(bt(t),!(!e||e.producerNode===void 0||e.producerIndexOfThis===void 0||e.producerLastReadVersion===void 0)){if(Xr(e))for(let u=e.nextProducerIndex;u<e.producerNode.length;u++)tr(e.producerNode[u],e.producerIndexOfThis[u]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}function Pa(e){Ct(e);for(let t=0;t<e.producerNode.length;t++){const u=e.producerNode[t],r=e.producerLastReadVersion[t];if(r!==u.version||(bn(u),r!==u.version))return!0}return!1}function _n(e,t,u){var r;if(wi(e),Ct(e),e.liveConsumerNode.length===0){(r=e.watched)==null||r.call(e.wrapper);for(let i=0;i<e.producerNode.length;i++)e.producerIndexOfThis[i]=_n(e.producerNode[i],e,i)}return e.liveConsumerIndexOfThis.push(u),e.liveConsumerNode.push(t)-1}function tr(e,t){var u;if(wi(e),Ct(e),typeof ngDevMode<"u"&&ngDevMode&&t>=e.liveConsumerNode.length)throw new Error(`Assertion error: active consumer index ${t} is out of bounds of ${e.liveConsumerNode.length} consumers)`);if(e.liveConsumerNode.length===1){(u=e.unwatched)==null||u.call(e.wrapper);for(let i=0;i<e.producerNode.length;i++)tr(e.producerNode[i],e.producerIndexOfThis[i])}const r=e.liveConsumerNode.length-1;if(e.liveConsumerNode[t]=e.liveConsumerNode[r],e.liveConsumerIndexOfThis[t]=e.liveConsumerIndexOfThis[r],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,t<e.liveConsumerNode.length){const i=e.liveConsumerIndexOfThis[t],s=e.liveConsumerNode[t];Ct(s),s.producerIndexOfThis[i]=t}}function Xr(e){var t;return e.consumerIsAlwaysLive||(((t=e==null?void 0:e.liveConsumerNode)==null?void 0:t.length)??0)>0}function Ct(e){e.producerNode??(e.producerNode=[]),e.producerIndexOfThis??(e.producerIndexOfThis=[]),e.producerLastReadVersion??(e.producerLastReadVersion=[])}function wi(e){e.liveConsumerNode??(e.liveConsumerNode=[]),e.liveConsumerIndexOfThis??(e.liveConsumerIndexOfThis=[])}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function gn(e){if(bn(e),er(e),e.value===ei)throw e.error;return e.value}function za(e){const t=Object.create(Na);t.computation=e;const u=()=>gn(t);return u[Lu]=t,u}const yr=Symbol("UNSET"),xr=Symbol("COMPUTING"),ei=Symbol("ERRORED"),Na={...Ci,value:yr,dirty:!0,error:null,equal:pn,producerMustRecompute(e){return e.value===yr||e.value===xr},producerRecomputeValue(e){if(e.value===xr)throw new Error("Detected cycle in computations.");const t=e.value;e.value=xr;const u=Oa(e);let r,i=!1;try{r=e.computation.call(e.wrapper),i=t!==yr&&t!==ei&&e.equal.call(e.wrapper,t,r)}catch(s){r=ei,e.error=s}finally{Ia(e,u)}if(i){e.value=t;return}e.value=r,e.version++}};/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ra(){throw new Error}let Ma=Ra;function ja(){Ma()}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function La(e){const t=Object.create(qa);t.value=e;const u=()=>(er(t),t.value);return u[Lu]=t,u}function Ba(){return er(this),this.value}function Ua(e,t){Fa()||ja(),e.equal.call(e.wrapper,e.value,t)||(e.value=t,Ha(e))}const qa={...Ci,equal:pn,value:void 0};function Ha(e){e.version++,Sa(),mn(e)}/**
 * @license
 * Copyright 2024 Bloomberg Finance L.P.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=Symbol("node");var De;(e=>{var t,u,r,i;class s{constructor(a,l={}){$u(this,u),_r(this,t);const c=La(a)[Lu];if(this[ne]=c,c.wrapper=this,l){const p=l.equals;p&&(c.equal=p),c.watched=l[e.subtle.watched],c.unwatched=l[e.subtle.unwatched]}}get(){if(!(0,e.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return Ba.call(this[ne])}set(a){if(!(0,e.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(Da())throw new Error("Writes to signals not permitted during Watcher callback");const l=this[ne];Ua(l,a)}}t=ne,u=new WeakSet,e.isState=o=>typeof o=="object"&&gr(u,o),e.State=s;class n{constructor(a,l){$u(this,i),_r(this,r);const c=za(a)[Lu];if(c.consumerAllowSignalWrites=!0,this[ne]=c,c.wrapper=this,l){const p=l.equals;p&&(c.equal=p),c.watched=l[e.subtle.watched],c.unwatched=l[e.subtle.unwatched]}}get(){if(!(0,e.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return gn(this[ne])}}r=ne,i=new WeakSet,e.isComputed=o=>typeof o=="object"&&gr(i,o),e.Computed=n,(o=>{var a,l,d,c;function p(v){let y,g=null;try{g=bt(null),y=v()}finally{bt(g)}return y}o.untrack=p;function f(v){var y;if(!(0,e.isComputed)(v)&&!(0,e.isWatcher)(v))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return((y=v[ne].producerNode)==null?void 0:y.map(g=>g.wrapper))??[]}o.introspectSources=f;function h(v){var y;if(!(0,e.isComputed)(v)&&!(0,e.isState)(v))throw new TypeError("Called introspectSinks without a Signal argument");return((y=v[ne].liveConsumerNode)==null?void 0:y.map(g=>g.wrapper))??[]}o.introspectSinks=h;function m(v){if(!(0,e.isComputed)(v)&&!(0,e.isState)(v))throw new TypeError("Called hasSinks without a Signal argument");const y=v[ne].liveConsumerNode;return y?y.length>0:!1}o.hasSinks=m;function b(v){if(!(0,e.isComputed)(v)&&!(0,e.isWatcher)(v))throw new TypeError("Called hasSources without a Computed or Watcher argument");const y=v[ne].producerNode;return y?y.length>0:!1}o.hasSources=b;class _{constructor(y){$u(this,l),$u(this,d),_r(this,a);let g=Object.create(Ci);g.wrapper=this,g.consumerMarkedDirty=y,g.consumerIsAlwaysLive=!0,g.consumerAllowSignalWrites=!1,g.producerNode=[],this[ne]=g}watch(...y){if(!(0,e.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");us(this,d,c).call(this,y);const g=this[ne];g.dirty=!1;const $=bt(g);for(const C of y)er(C[ne]);bt($)}unwatch(...y){if(!(0,e.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");us(this,d,c).call(this,y);const g=this[ne];Ct(g);for(let $=g.producerNode.length-1;$>=0;$--)if(y.includes(g.producerNode[$].wrapper)){tr(g.producerNode[$],g.producerIndexOfThis[$]);const C=g.producerNode.length-1;if(g.producerNode[$]=g.producerNode[C],g.producerIndexOfThis[$]=g.producerIndexOfThis[C],g.producerNode.length--,g.producerIndexOfThis.length--,g.nextProducerIndex--,$<g.producerNode.length){const S=g.producerIndexOfThis[$],N=g.producerNode[$];wi(N),N.liveConsumerIndexOfThis[S]=$}}}getPending(){if(!(0,e.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[ne].producerNode.filter(g=>g.dirty).map(g=>g.wrapper)}}a=ne,l=new WeakSet,d=new WeakSet,c=function(v){for(const y of v)if(!(0,e.isComputed)(y)&&!(0,e.isState)(y))throw new TypeError("Called watch/unwatch without a Computed or State argument")},e.isWatcher=v=>gr(l,v),o.Watcher=_;function w(){var v;return(v=Aa())==null?void 0:v.wrapper}o.currentComputed=w,o.watched=Symbol("watched"),o.unwatched=Symbol("unwatched")})(e.subtle||(e.subtle={}))})(De||(De={}));/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Va=Symbol("SignalWatcherBrand"),Wa=new FinalizationRegistry(({watcher:e,signal:t})=>{e.unwatch(t)}),rs=new WeakMap;function Za(e){return e[Va]===!0?(console.warn("SignalWatcher should not be applied to the same class more than once."),e):class extends e{constructor(){super(...arguments),this._$St=new De.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set}_$Sl(){if(this._$Su!==void 0)return;this._$Sv=new De.Computed(()=>{this._$St.get(),super.performUpdate()});const t=this._$Su=new De.subtle.Watcher(function(){const u=rs.get(this);u!==void 0&&(u._$Si===!1&&u.requestUpdate(),this.watch())});rs.set(t,this),Wa.register(this,{watcher:t,signal:this._$Sv}),t.watch(this._$Sv)}_$Sp(){this._$Su!==void 0&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0)}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get())}update(t){try{this._$So?(this._$So=!1,super.update(t)):this._$Sh.forEach(u=>u.commit())}finally{this.isUpdatePending=!1,this._$Sh.clear()}}requestUpdate(t,u,r){this._$So=!0,super.requestUpdate(t,u,r)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{this.isConnected===!1&&this._$Sp()})}_(t){this._$Sh.add(t);const u=this._$So;this.requestUpdate(),this._$So=u}m(t){this._$Sh.delete(t)}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mu={ATTRIBUTE:1,CHILD:2},Tt=e=>(...t)=>({_$litDirective$:e,values:t});let Ot=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,u,r){this._$Ct=t,this._$AM=u,this._$Ci=r}_$AS(t,u){return this.update(t,u)}update(t,u){return this.render(...u)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Ga}=ya,is=e=>e,Ka=e=>e.strings===void 0,ss=()=>document.createComment(""),Nt=(e,t,u)=>{var s;const r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(u===void 0){const n=r.insertBefore(ss(),i),o=r.insertBefore(ss(),i);u=new Ga(n,o,e,e.options)}else{const n=u._$AB.nextSibling,o=u._$AM,a=o!==e;if(a){let l;(s=u._$AQ)==null||s.call(u,e),u._$AM=e,u._$AP!==void 0&&(l=e._$AU)!==o._$AU&&u._$AP(l)}if(n!==i||a){let l=u._$AA;for(;l!==n;){const d=is(l).nextSibling;is(r).insertBefore(l,i),l=d}}}return u},Ke=(e,t,u=e)=>(e._$AI(t,u),e),Ja={},Qa=(e,t=Ja)=>e._$AH=t,Ya=e=>e._$AH,vr=e=>{e._$AR(),e._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yt=(e,t)=>{var r;const u=e._$AN;if(u===void 0)return!1;for(const i of u)(r=i._$AO)==null||r.call(i,t,!1),Yt(i,t);return!0},Bu=e=>{let t,u;do{if((t=e._$AM)===void 0)break;u=t._$AN,u.delete(e),e=t}while((u==null?void 0:u.size)===0)},yn=e=>{for(let t;t=e._$AM;e=t){let u=t._$AN;if(u===void 0)t._$AN=u=new Set;else if(u.has(e))break;u.add(e),tc(t)}};function Xa(e){this._$AN!==void 0?(Bu(this),this._$AM=e,yn(this)):this._$AM=e}function ec(e,t=!1,u=0){const r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let s=u;s<r.length;s++)Yt(r[s],!1),Bu(r[s]);else r!=null&&(Yt(r,!1),Bu(r));else Yt(this,e)}const tc=e=>{e.type==mu.CHILD&&(e._$AP??(e._$AP=ec),e._$AQ??(e._$AQ=Xa))};let uc=class extends Ot{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,u,r){super._$AT(t,u,r),yn(this),this.isConnected=t._$AU}_$AO(t,u=!0){var r,i;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)==null||r.call(this):(i=this.disconnected)==null||i.call(this)),u&&(Yt(this,t),Bu(this))}setValue(t){if(Ka(this._$Ct))this._$Ct._$AI(t,this);else{const u=[...this._$Ct._$AH];u[this._$Ci]=t,this._$Ct._$AI(u,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */De.State;De.Computed;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let rc=class extends Event{constructor(t,u,r,i){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=u,this.callback=r,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ns=class{constructor(t,u,r,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(s,n)=>{this.unsubscribe&&(this.unsubscribe!==n&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=s,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(s,n)),this.unsubscribe=n},this.host=t,u.context!==void 0){const s=u;this.context=s.context,this.callback=s.callback,this.subscribe=s.subscribe??!1}else this.context=u,this.callback=r,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new rc(this.context,this.host,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ic({context:e,subscribe:t}){return(u,r)=>{typeof r=="object"?r.addInitializer(function(){new ns(this,{context:e,callback:i=>{u.set.call(this,i)},subscribe:t})}):u.constructor.addInitializer(i=>{new ns(i,{context:e,callback:s=>{i[r]=s},subscribe:t})})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*sc(e,t){if(e!==void 0){let u=0;for(const r of e)yield t(r,u++)}}let $r=!1,Uu=new De.subtle.Watcher(()=>{$r||($r=!0,queueMicrotask(()=>{$r=!1,nc()}))});function nc(){for(const e of Uu.getPending())e.get();Uu.watch()}function oc(e){let t=new De.Computed(()=>e());return Uu.watch(t),t.get(),()=>{Uu.unwatch(t)}}const xn="A2UITheme",ac=`
  &:not([disabled]) {
    cursor: pointer;
    opacity: var(--opacity, 0);
    transition: opacity var(--speed, 0.2s) cubic-bezier(0, 0, 0.3, 1);

    &:hover,
    &:focus {
      opacity: 1;
    }
  }`,cc=`
  ${new Array(21).fill(0).map((e,t)=>`.behavior-ho-${t*5} {
          --opacity: ${t/20};
          ${ac}
        }`).join(`
`)}

  .behavior-o-s {
    overflow: scroll;
  }

  .behavior-o-a {
    overflow: auto;
  }

  .behavior-o-h {
    overflow: hidden;
  }

  .behavior-sw-n {
    scrollbar-width: none;
  }
`,Y=4,lc=`
  ${new Array(25).fill(0).map((e,t)=>`
        .border-bw-${t} { border-width: ${t}px; }
        .border-btw-${t} { border-top-width: ${t}px; }
        .border-bbw-${t} { border-bottom-width: ${t}px; }
        .border-blw-${t} { border-left-width: ${t}px; }
        .border-brw-${t} { border-right-width: ${t}px; }

        .border-ow-${t} { outline-width: ${t}px; }
        .border-br-${t} { border-radius: ${t*Y}px; overflow: hidden;}`).join(`
`)}

  .border-br-50pc {
    border-radius: 50%;
  }

  .border-bs-s {
    border-style: solid;
  }
`,vn=[0,5,10,15,20,25,30,35,40,50,60,70,80,90,95,98,99,100];function ki(...e){const t={};for(const u of e)for(const[r,i]of Object.entries(u)){const s=r.split("-").with(-1,"").join("-"),n=Object.keys(t).filter(o=>o.startsWith(s));for(const o of n)delete t[o];t[r]=i}return t}function dc(e,t,...u){const r=structuredClone(e);for(const i of u)for(const s of Object.keys(i)){const n=s.split("-").with(-1,"").join("-");for(const[o,a]of Object.entries(r)){if(t.includes(o))continue;let l=!1;for(let d=0;d<a.length;d++)a[d].startsWith(n)&&(l=!0,a[d]=s);l||a.push(s)}}return r}function ke(e){return e.startsWith("nv")?`--nv-${e.slice(2)}`:`--${e[0]}-${e.slice(1)}`}const at=e=>`
    ${e.map(t=>{const u=Cr(t);return`.color-bc-${t} { border-color: light-dark(var(${ke(t)}), var(${ke(u)})); }`}).join(`
`)}

    ${e.map(t=>{const u=Cr(t),r=[`.color-bgc-${t} { background-color: light-dark(var(${ke(t)}), var(${ke(u)})); }`,`.color-bbgc-${t}::backdrop { background-color: light-dark(var(${ke(t)}), var(${ke(u)})); }`];for(let i=.1;i<1;i+=.1)r.push(`.color-bbgc-${t}_${(i*100).toFixed(0)}::backdrop {
            background-color: light-dark(oklch(from var(${ke(t)}) l c h / calc(alpha * ${i.toFixed(1)})), oklch(from var(${ke(u)}) l c h / calc(alpha * ${i.toFixed(1)})) );
          }
        `);return r.join(`
`)}).join(`
`)}

  ${e.map(t=>{const u=Cr(t);return`.color-c-${t} { color: light-dark(var(${ke(t)}), var(${ke(u)})); }`}).join(`
`)}
  `,Cr=e=>{const t=e.match(/^([a-z]+)(\d+)$/);if(!t)return e;const[,u,r]=t,s=100-parseInt(r,10),n=vn.reduce((o,a)=>Math.abs(a-s)<Math.abs(o-s)?a:o);return`${u}${n}`},ct=e=>vn.map(t=>`${e}${t}`),hc=[at(ct("p")),at(ct("s")),at(ct("t")),at(ct("n")),at(ct("nv")),at(ct("e")),`
    .color-bgc-transparent {
      background-color: transparent;
    }

    :host {
      color-scheme: var(--color-scheme);
    }
  `],fc=`
  .g-icon {
    font-family: "Material Symbols Outlined", "Google Symbols";
    font-weight: normal;
    font-style: normal;
    font-display: optional;
    font-size: 20px;
    width: 1em;
    height: 1em;
    user-select: none;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: "liga";
    -webkit-font-smoothing: antialiased;
    overflow: hidden;

    font-variation-settings: "FILL" 0, "wght" 300, "GRAD" 0, "opsz" 48,
      "ROND" 100;

    &.filled {
      font-variation-settings: "FILL" 1, "wght" 300, "GRAD" 0, "opsz" 48,
        "ROND" 100;
    }

    &.filled-heavy {
      font-variation-settings: "FILL" 1, "wght" 700, "GRAD" 0, "opsz" 48,
        "ROND" 100;
    }
  }
`,pc=`
  :host {
    ${new Array(16).fill(0).map((e,t)=>`--g-${t+1}: ${(t+1)*Y}px;`).join(`
`)}
  }

  ${new Array(49).fill(0).map((e,t)=>{const u=t-24,r=u<0?`n${Math.abs(u)}`:u.toString();return`
        .layout-p-${r} { --padding: ${u*Y}px; padding: var(--padding); }
        .layout-pt-${r} { padding-top: ${u*Y}px; }
        .layout-pr-${r} { padding-right: ${u*Y}px; }
        .layout-pb-${r} { padding-bottom: ${u*Y}px; }
        .layout-pl-${r} { padding-left: ${u*Y}px; }

        .layout-m-${r} { --margin: ${u*Y}px; margin: var(--margin); }
        .layout-mt-${r} { margin-top: ${u*Y}px; }
        .layout-mr-${r} { margin-right: ${u*Y}px; }
        .layout-mb-${r} { margin-bottom: ${u*Y}px; }
        .layout-ml-${r} { margin-left: ${u*Y}px; }

        .layout-t-${r} { top: ${u*Y}px; }
        .layout-r-${r} { right: ${u*Y}px; }
        .layout-b-${r} { bottom: ${u*Y}px; }
        .layout-l-${r} { left: ${u*Y}px; }`}).join(`
`)}

  ${new Array(25).fill(0).map((e,t)=>`
        .layout-g-${t} { gap: ${t*Y}px; }`).join(`
`)}

  ${new Array(8).fill(0).map((e,t)=>`
        .layout-grd-col${t+1} { grid-template-columns: ${"1fr ".repeat(t+1).trim()}; }`).join(`
`)}

  .layout-pos-a {
    position: absolute;
  }

  .layout-pos-rel {
    position: relative;
  }

  .layout-dsp-none {
    display: none;
  }

  .layout-dsp-block {
    display: block;
  }

  .layout-dsp-grid {
    display: grid;
  }

  .layout-dsp-iflex {
    display: inline-flex;
  }

  .layout-dsp-flexvert {
    display: flex;
    flex-direction: column;
  }

  .layout-dsp-flexhor {
    display: flex;
    flex-direction: row;
  }

  .layout-fw-w {
    flex-wrap: wrap;
  }

  .layout-al-fs {
    align-items: start;
  }

  .layout-al-fe {
    align-items: end;
  }

  .layout-al-c {
    align-items: center;
  }

  .layout-as-n {
    align-self: normal;
  }

  .layout-js-c {
    justify-self: center;
  }

  .layout-sp-c {
    justify-content: center;
  }

  .layout-sp-ev {
    justify-content: space-evenly;
  }

  .layout-sp-bt {
    justify-content: space-between;
  }

  .layout-sp-s {
    justify-content: start;
  }

  .layout-sp-e {
    justify-content: end;
  }

  .layout-ji-e {
    justify-items: end;
  }

  .layout-r-none {
    resize: none;
  }

  .layout-fs-c {
    field-sizing: content;
  }

  .layout-fs-n {
    field-sizing: none;
  }

  .layout-flx-0 {
    flex: 0 0 auto;
  }

  .layout-flx-1 {
    flex: 1 0 auto;
  }

  .layout-c-s {
    contain: strict;
  }

  /** Widths **/

  ${new Array(10).fill(0).map((e,t)=>{const u=(t+1)*10;return`.layout-w-${u} { width: ${u}%; max-width: ${u}%; }`}).join(`
`)}

  ${new Array(16).fill(0).map((e,t)=>{const u=t*Y;return`.layout-wp-${t} { width: ${u}px; }`}).join(`
`)}

  /** Heights **/

  ${new Array(10).fill(0).map((e,t)=>{const u=(t+1)*10;return`.layout-h-${u} { height: ${u}%; }`}).join(`
`)}

  ${new Array(16).fill(0).map((e,t)=>{const u=t*Y;return`.layout-hp-${t} { height: ${u}px; }`}).join(`
`)}

  .layout-el-cv {
    & img,
    & video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      margin: 0;
    }
  }

  .layout-ar-sq {
    aspect-ratio: 1 / 1;
  }

  .layout-ex-fb {
    margin: calc(var(--padding) * -1) 0 0 calc(var(--padding) * -1);
    width: calc(100% + var(--padding) * 2);
    height: calc(100% + var(--padding) * 2);
  }
`,bc=`
  ${new Array(21).fill(0).map((e,t)=>`.opacity-el-${t*5} { opacity: ${t/20}; }`).join(`
`)}
`,mc=`
  :host {
    --default-font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    --default-font-family-mono: "Courier New", Courier, monospace;
  }

  .typography-f-s {
    font-family: var(--font-family, var(--default-font-family));
    font-optical-sizing: auto;
    font-variation-settings: "slnt" 0, "wdth" 100, "GRAD" 0;
  }

  .typography-f-sf {
    font-family: var(--font-family-flex, var(--default-font-family));
    font-optical-sizing: auto;
  }

  .typography-f-c {
    font-family: var(--font-family-mono, var(--default-font-family));
    font-optical-sizing: auto;
    font-variation-settings: "slnt" 0, "wdth" 100, "GRAD" 0;
  }

  .typography-v-r {
    font-variation-settings: "slnt" 0, "wdth" 100, "GRAD" 0, "ROND" 100;
  }

  .typography-ta-s {
    text-align: start;
  }

  .typography-ta-c {
    text-align: center;
  }

  .typography-fs-n {
    font-style: normal;
  }

  .typography-fs-i {
    font-style: italic;
  }

  .typography-sz-ls {
    font-size: 11px;
    line-height: 16px;
  }

  .typography-sz-lm {
    font-size: 12px;
    line-height: 16px;
  }

  .typography-sz-ll {
    font-size: 14px;
    line-height: 20px;
  }

  .typography-sz-bs {
    font-size: 12px;
    line-height: 16px;
  }

  .typography-sz-bm {
    font-size: 14px;
    line-height: 20px;
  }

  .typography-sz-bl {
    font-size: 16px;
    line-height: 24px;
  }

  .typography-sz-ts {
    font-size: 14px;
    line-height: 20px;
  }

  .typography-sz-tm {
    font-size: 16px;
    line-height: 24px;
  }

  .typography-sz-tl {
    font-size: 22px;
    line-height: 28px;
  }

  .typography-sz-hs {
    font-size: 24px;
    line-height: 32px;
  }

  .typography-sz-hm {
    font-size: 28px;
    line-height: 36px;
  }

  .typography-sz-hl {
    font-size: 32px;
    line-height: 40px;
  }

  .typography-sz-ds {
    font-size: 36px;
    line-height: 44px;
  }

  .typography-sz-dm {
    font-size: 45px;
    line-height: 52px;
  }

  .typography-sz-dl {
    font-size: 57px;
    line-height: 64px;
  }

  .typography-ws-p {
    white-space: pre-line;
  }

  .typography-ws-nw {
    white-space: nowrap;
  }

  .typography-td-none {
    text-decoration: none;
  }

  /** Weights **/

  ${new Array(9).fill(0).map((e,t)=>{const u=(t+1)*100;return`.typography-w-${u} { font-weight: ${u}; }`}).join(`
`)}
`,_c=[cc,lc,hc,fc,pc,bc,mc].flat(1/0).join(`
`),X=nn(_c);class gc{constructor(){this.schemas=new Map,this.registry=new Map}register(t,u,r,i){if(!/^[a-zA-Z0-9]+$/.test(t))throw new Error(`[Registry] Invalid typeName '${t}'. Must be alphanumeric.`);this.registry.set(t,u),i&&this.schemas.set(t,i);const s=r||`a2ui-custom-${t.toLowerCase()}`,n=customElements.getName(u);if(n){if(n!==s)throw new Error(`Component ${t} is already registered as ${n}, but requested as ${s}.`);return}customElements.get(s)||customElements.define(s,u)}get(t){return this.registry.get(t)}getInlineCatalog(){const t={};for(const[u,r]of this.schemas)t[u]=r;return{components:t}}}const os=new gc;var ce=function(e,t,u){for(var r=arguments.length>2,i=0;i<t.length;i++)u=r?t[i].call(e,u):t[i].call(e);return r?u:void 0},Te=function(e,t,u,r,i,s){function n(_){if(_!==void 0&&typeof _!="function")throw new TypeError("Function expected");return _}for(var o=r.kind,a=o==="getter"?"get":o==="setter"?"set":"value",l=!t&&e?r.static?e:e.prototype:null,d=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),c,p=!1,f=u.length-1;f>=0;f--){var h={};for(var m in r)h[m]=m==="access"?{}:r[m];for(var m in r.access)h.access[m]=r.access[m];h.addInitializer=function(_){if(p)throw new TypeError("Cannot add initializers after decoration has completed");s.push(n(_||null))};var b=(0,u[f])(o==="accessor"?{get:d.get,set:d.set}:d[a],h);if(o==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(c=n(b.get))&&(d.get=c),(c=n(b.set))&&(d.set=c),(c=n(b.init))&&i.unshift(c)}else(c=n(b))&&(o==="field"?i.unshift(c):d[a]=c)}l&&Object.defineProperty(l,r.name,d),p=!0};let ee=(()=>{var O,V,_e,k,I,B,de,ge,ye,te;let e=[J("a2ui-root")],t,u=[],r,i=Za(Jt),s=[],n,o=[],a=[],l,d=[],c=[],p,f=[],h=[],m,b=[],_=[],w,v=[],y=[],g,$=[],C=[],S,N=[],M=[],A;return te=class extends i{constructor(){super(...arguments);T(this,O,(ce(this,s),ce(this,o,null)));T(this,V,(ce(this,a),ce(this,d,null)));T(this,_e,(ce(this,c),ce(this,f,void 0)));T(this,k,(ce(this,h),ce(this,b,null)));T(this,I,(ce(this,_),ce(this,v,null)));T(this,B,(ce(this,y),ce(this,$,"")));T(this,de,(ce(this,C),ce(this,N,!1)));T(this,ge,(ce(this,M),1));T(this,ye,null)}get surfaceId(){return D(this,O)}set surfaceId(L){z(this,O,L)}get component(){return D(this,V)}set component(L){z(this,V,L)}get theme(){return D(this,_e)}set theme(L){z(this,_e,L)}get childComponents(){return D(this,k)}set childComponents(L){z(this,k,L)}get processor(){return D(this,I)}set processor(L){z(this,I,L)}get dataContextPath(){return D(this,B)}set dataContextPath(L){z(this,B,L)}get enableCustomElements(){return D(this,de)}set enableCustomElements(L){z(this,de,L)}set weight(L){z(this,ge,L),this.style.setProperty("--weight",`${L}`)}get weight(){return D(this,ge)}willUpdate(L){L.has("childComponents")&&(D(this,ye)&&D(this,ye).call(this),z(this,ye,oc(()=>{const F=this.childComponents??null,x=this.renderComponentTree(F);$i(x,this,{host:this})})))}disconnectedCallback(){super.disconnectedCallback(),D(this,ye)&&D(this,ye).call(this)}renderComponentTree(L){return!L||!Array.isArray(L)?P:E` ${sc(L,F=>{if(this.enableCustomElements){const ae=os.get(F.type)||customElements.get(F.type);if(ae){const Q=F,he=new ae;he.id=Q.id,Q.slotName&&(he.slot=Q.slotName),he.component=Q,he.weight=Q.weight??"initial",he.processor=this.processor,he.surfaceId=this.surfaceId,he.dataContextPath=Q.dataContextPath??"/";for(const[lr,Qo]of Object.entries(F.properties))he[lr]=Qo;return E`${he}`}}switch(F.type){case"List":{const x=F,ae=x.properties.children;return E`<a2ui-list
            id=${x.id}
            slot=${x.slotName?x.slotName:P}
            .component=${x}
            .weight=${x.weight??"initial"}
            .direction=${x.properties.direction??"vertical"}
            .processor=${this.processor}
            .surfaceId=${this.surfaceId}
            .childComponents=${ae}
            .enableCustomElements=${this.enableCustomElements}
          ></a2ui-list>`}case"Card":{const x=F;let ae=x.properties.children;return!ae&&x.properties.child&&(ae=[x.properties.child]),E`<a2ui-card
            id=${x.id}
            slot=${x.slotName?x.slotName:P}
            .component=${x}
            .weight=${x.weight??"initial"}
            .processor=${this.processor}
            .surfaceId=${this.surfaceId}
            .childComponents=${ae}
            .dataContextPath=${x.dataContextPath??""}
            .enableCustomElements=${this.enableCustomElements}
          ></a2ui-card>`}case"Column":{const x=F;return E`<a2ui-column
            id=${x.id}
            slot=${x.slotName?x.slotName:P}
            .component=${x}
            .weight=${x.weight??"initial"}
            .processor=${this.processor}
            .surfaceId=${this.surfaceId}
            .childComponents=${x.properties.children??null}
            .dataContextPath=${x.dataContextPath??""}
            .alignment=${x.properties.alignment??"stretch"}
            .distribution=${x.properties.distribution??"start"}
            .enableCustomElements=${this.enableCustomElements}
          ></a2ui-column>`}case"Row":{const x=F;return E`<a2ui-row
            id=${x.id}
            slot=${x.slotName?x.slotName:P}
            .component=${x}
            .weight=${x.weight??"initial"}
            .processor=${this.processor}
            .surfaceId=${this.surfaceId}
            .childComponents=${x.properties.children??null}
            .dataContextPath=${x.dataContextPath??""}
            .alignment=${x.properties.alignment??"stretch"}
            .distribution=${x.properties.distribution??"start"}
            .enableCustomElements=${this.enableCustomElements}
          ></a2ui-row>`}case"Image":{const x=F;return E`<a2ui-image
            id=${x.id}
            slot=${x.slotName?x.slotName:P}
            .component=${x}
            .weight=${x.weight??"initial"}
            .processor=${this.processor}
            .surfaceId=${this.surfaceId}
            .url=${x.properties.url??null}
            .dataContextPath=${x.dataContextPath??""}
            .usageHint=${x.properties.usageHint}
            .fit=${x.properties.fit}
            .enableCustomElements=${this.enableCustomElements}
          ></a2ui-image>`}case"Icon":{const x=F;return E`<a2ui-icon
            id=${x.id}
            slot=${x.slotName?x.slotName:P}
            .component=${x}
            .weight=${x.weight??"initial"}
            .processor=${this.processor}
            .surfaceId=${this.surfaceId}
            .name=${x.properties.name??null}
            .dataContextPath=${x.dataContextPath??""}
            .enableCustomElements=${this.enableCustomElements}
          ></a2ui-icon>`}case"AudioPlayer":{const x=F;return E`<a2ui-audioplayer
            id=${x.id}
            slot=${x.slotName?x.slotName:P}
            .component=${x}
            .weight=${x.weight??"initial"}
            .processor=${this.processor}
            .surfaceId=${this.surfaceId}
            .url=${x.properties.url??null}
            .dataContextPath=${x.dataContextPath??""}
            .enableCustomElements=${this.enableCustomElements}
          ></a2ui-audioplayer>`}case"Button":{const x=F;return E`<a2ui-button
            id=${x.id}
            slot=${x.slotName?x.slotName:P}
            .component=${x}
            .weight=${x.weight??"initial"}
            .processor=${this.processor}
            .surfaceId=${this.surfaceId}
            .dataContextPath=${x.dataContextPath??""}
            .action=${x.properties.action}
            .childComponents=${[x.properties.child]}
            .enableCustomElements=${this.enableCustomElements}
          ></a2ui-button>`}case"Text":{const x=F;return E`<a2ui-text
            id=${x.id}
            slot=${x.slotName?x.slotName:P}
            .component=${x}
            .weight=${x.weight??"initial"}
            .model=${this.processor}
            .surfaceId=${this.surfaceId}
            .processor=${this.processor}
            .dataContextPath=${x.dataContextPath}
            .text=${x.properties.text}
            .usageHint=${x.properties.usageHint}
            .enableCustomElements=${this.enableCustomElements}
          ></a2ui-text>`}case"CheckBox":{const x=F;return E`<a2ui-checkbox
            id=${x.id}
            slot=${x.slotName?x.slotName:P}
            .component=${x}
            .weight=${x.weight??"initial"}
            .processor=${this.processor}
            .surfaceId=${this.surfaceId}
            .dataContextPath=${x.dataContextPath??""}
            .label=${x.properties.label}
            .value=${x.properties.value}
            .enableCustomElements=${this.enableCustomElements}
          ></a2ui-checkbox>`}case"DateTimeInput":{const x=F;return E`<a2ui-datetimeinput
            id=${x.id}
            slot=${x.slotName?x.slotName:P}
            .component=${x}
            .weight=${x.weight??"initial"}
            .processor=${this.processor}
            .surfaceId=${this.surfaceId}
            .dataContextPath=${x.dataContextPath??""}
            .enableDate=${x.properties.enableDate??!0}
            .enableTime=${x.properties.enableTime??!0}
            .value=${x.properties.value}
            .enableCustomElements=${this.enableCustomElements}
          ></a2ui-datetimeinput>`}case"Divider":{const x=F;return E`<a2ui-divider
            id=${x.id}
            slot=${x.slotName?x.slotName:P}
            .component=${x}
            .weight=${x.weight??"initial"}
            .processor=${this.processor}
            .surfaceId=${this.surfaceId}
            .dataContextPath=${x.dataContextPath}
            .thickness=${x.properties.thickness}
            .axis=${x.properties.axis}
            .color=${x.properties.color}
            .enableCustomElements=${this.enableCustomElements}
          ></a2ui-divider>`}case"MultipleChoice":{const x=F;return E`<a2ui-multiplechoice
            id=${x.id}
            slot=${x.slotName?x.slotName:P}
            .component=${x}
            .weight=${x.weight??"initial"}
            .processor=${this.processor}
            .surfaceId=${this.surfaceId}
            .dataContextPath=${x.dataContextPath}
            .options=${x.properties.options}
            .maxAllowedSelections=${x.properties.maxAllowedSelections}
            .selections=${x.properties.selections}
            .enableCustomElements=${this.enableCustomElements}
          ></a2ui-multiplechoice>`}case"Slider":{const x=F;return E`<a2ui-slider
            id=${x.id}
            slot=${x.slotName?x.slotName:P}
            .component=${x}
            .weight=${x.weight??"initial"}
            .processor=${this.processor}
            .surfaceId=${this.surfaceId}
            .dataContextPath=${x.dataContextPath}
            .value=${x.properties.value}
            .minValue=${x.properties.minValue}
            .maxValue=${x.properties.maxValue}
            .enableCustomElements=${this.enableCustomElements}
          ></a2ui-slider>`}case"TextField":{const x=F;return E`<a2ui-textfield
            id=${x.id}
            slot=${x.slotName?x.slotName:P}
            .component=${x}
            .weight=${x.weight??"initial"}
            .processor=${this.processor}
            .surfaceId=${this.surfaceId}
            .dataContextPath=${x.dataContextPath}
            .label=${x.properties.label}
            .text=${x.properties.text}
            .type=${x.properties.type}
            .validationRegexp=${x.properties.validationRegexp}
            .enableCustomElements=${this.enableCustomElements}
          ></a2ui-textfield>`}case"Video":{const x=F;return E`<a2ui-video
            id=${x.id}
            slot=${x.slotName?x.slotName:P}
            .component=${x}
            .weight=${x.weight??"initial"}
            .processor=${this.processor}
            .surfaceId=${this.surfaceId}
            .dataContextPath=${x.dataContextPath}
            .url=${x.properties.url}
            .enableCustomElements=${this.enableCustomElements}
          ></a2ui-video>`}case"Tabs":{const x=F,ae=[],Q=[];if(x.properties.tabItems)for(const he of x.properties.tabItems)ae.push(he.title),Q.push(he.child);return E`<a2ui-tabs
            id=${x.id}
            slot=${x.slotName?x.slotName:P}
            .component=${x}
            .weight=${x.weight??"initial"}
            .processor=${this.processor}
            .surfaceId=${this.surfaceId}
            .dataContextPath=${x.dataContextPath}
            .titles=${ae}
            .childComponents=${Q}
            .enableCustomElements=${this.enableCustomElements}
          ></a2ui-tabs>`}case"Modal":{const x=F,ae=[x.properties.entryPointChild,x.properties.contentChild];return x.properties.entryPointChild.slotName="entry",E`<a2ui-modal
            id=${x.id}
            slot=${x.slotName?x.slotName:P}
            .component=${x}
            .weight=${x.weight??"initial"}
            .processor=${this.processor}
            .surfaceId=${this.surfaceId}
            .dataContextPath=${x.dataContextPath}
            .childComponents=${ae}
            .enableCustomElements=${this.enableCustomElements}
          ></a2ui-modal>`}default:return this.renderCustomComponent(F)}})}`}renderCustomComponent(L){if(!this.enableCustomElements)return;const F=L,ae=os.get(L.type)||customElements.get(L.type);if(!ae)return E`Unknown element ${L.type}`;const Q=new ae;Q.id=F.id,F.slotName&&(Q.slot=F.slotName),Q.component=F,Q.weight=F.weight??"initial",Q.processor=this.processor,Q.surfaceId=this.surfaceId,Q.dataContextPath=F.dataContextPath??"/";for(const[he,lr]of Object.entries(L.properties))Q[he]=lr;return E`${Q}`}render(){return E`<slot></slot>`}},O=new WeakMap,V=new WeakMap,_e=new WeakMap,k=new WeakMap,I=new WeakMap,B=new WeakMap,de=new WeakMap,ge=new WeakMap,ye=new WeakMap,r=te,(()=>{const L=typeof Symbol=="function"&&Symbol.metadata?Object.create(i[Symbol.metadata]??null):void 0;n=[j()],l=[j()],p=[ic({context:xn})],m=[j({attribute:!1})],w=[j({attribute:!1})],g=[j()],S=[j()],A=[j()],Te(te,null,n,{kind:"accessor",name:"surfaceId",static:!1,private:!1,access:{has:F=>"surfaceId"in F,get:F=>F.surfaceId,set:(F,x)=>{F.surfaceId=x}},metadata:L},o,a),Te(te,null,l,{kind:"accessor",name:"component",static:!1,private:!1,access:{has:F=>"component"in F,get:F=>F.component,set:(F,x)=>{F.component=x}},metadata:L},d,c),Te(te,null,p,{kind:"accessor",name:"theme",static:!1,private:!1,access:{has:F=>"theme"in F,get:F=>F.theme,set:(F,x)=>{F.theme=x}},metadata:L},f,h),Te(te,null,m,{kind:"accessor",name:"childComponents",static:!1,private:!1,access:{has:F=>"childComponents"in F,get:F=>F.childComponents,set:(F,x)=>{F.childComponents=x}},metadata:L},b,_),Te(te,null,w,{kind:"accessor",name:"processor",static:!1,private:!1,access:{has:F=>"processor"in F,get:F=>F.processor,set:(F,x)=>{F.processor=x}},metadata:L},v,y),Te(te,null,g,{kind:"accessor",name:"dataContextPath",static:!1,private:!1,access:{has:F=>"dataContextPath"in F,get:F=>F.dataContextPath,set:(F,x)=>{F.dataContextPath=x}},metadata:L},$,C),Te(te,null,S,{kind:"accessor",name:"enableCustomElements",static:!1,private:!1,access:{has:F=>"enableCustomElements"in F,get:F=>F.enableCustomElements,set:(F,x)=>{F.enableCustomElements=x}},metadata:L},N,M),Te(te,null,A,{kind:"setter",name:"weight",static:!1,private:!1,access:{has:F=>"weight"in F,set:(F,x)=>{F.weight=x}},metadata:L},null,s),Te(null,t={value:r},e,{kind:"class",name:r.name,metadata:L},null,u),r=t.value,L&&Object.defineProperty(r,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:L})})(),te.styles=[X,K`
      :host {
        display: flex;
        flex-direction: column;
        gap: 8px;
        max-height: 80%;
      }
    `],ce(r,u),r})();function yc(e){return U(e)&&"key"in e}function $n(e,t){return e==="path"&&typeof t=="string"}function U(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function Cn(e){return U(e)?"explicitList"in e||"template"in e:!1}function Ne(e){return U(e)&&("path"in e||"literal"in e&&typeof e.literal=="string"||"literalString"in e)}function xc(e){return U(e)&&("path"in e||"literal"in e&&typeof e.literal=="number"||"literalNumber"in e)}function vc(e){return U(e)&&("path"in e||"literal"in e&&typeof e.literal=="boolean"||"literalBoolean"in e)}function ze(e){return!(!U(e)||!("id"in e&&"type"in e&&"properties"in e))}function wn(e){return U(e)&&"url"in e&&Ne(e.url)}function kn(e){return U(e)&&"child"in e&&ze(e.child)&&"action"in e}function En(e){return U(e)?"child"in e?ze(e.child):"children"in e?Array.isArray(e.children)&&e.children.every(ze):!1:!1}function An(e){return U(e)&&"label"in e&&Ne(e.label)&&"value"in e&&vc(e.value)}function Dn(e){return U(e)&&"children"in e&&Array.isArray(e.children)&&e.children.every(ze)}function Sn(e){return U(e)&&"value"in e&&Ne(e.value)}function Fn(e){return U(e)}function Tn(e){return U(e)&&"url"in e&&Ne(e.url)}function On(e){return U(e)&&"name"in e&&Ne(e.name)}function In(e){return U(e)&&"children"in e&&Array.isArray(e.children)&&e.children.every(ze)}function Pn(e){return U(e)&&"entryPointChild"in e&&ze(e.entryPointChild)&&"contentChild"in e&&ze(e.contentChild)}function zn(e){return U(e)&&"selections"in e}function Nn(e){return U(e)&&"children"in e&&Array.isArray(e.children)&&e.children.every(ze)}function Rn(e){return U(e)&&"value"in e&&xc(e.value)}function $c(e){return U(e)&&"title"in e&&Ne(e.title)&&"child"in e&&ze(e.child)}function Mn(e){return U(e)&&"tabItems"in e&&Array.isArray(e.tabItems)&&e.tabItems.every($c)}function jn(e){return U(e)&&"text"in e&&Ne(e.text)}function Ln(e){return U(e)&&"label"in e&&Ne(e.label)}function Bn(e){return U(e)&&"url"in e&&Ne(e.url)}const Cc=Object.freeze(Object.defineProperty({__proto__:null,isComponentArrayReference:Cn,isObject:U,isPath:$n,isResolvedAudioPlayer:wn,isResolvedButton:kn,isResolvedCard:En,isResolvedCheckbox:An,isResolvedColumn:Dn,isResolvedDateTimeInput:Sn,isResolvedDivider:Fn,isResolvedIcon:On,isResolvedImage:Tn,isResolvedList:In,isResolvedModal:Pn,isResolvedMultipleChoice:zn,isResolvedRow:Nn,isResolvedSlider:Rn,isResolvedTabs:Mn,isResolvedText:jn,isResolvedTextField:Ln,isResolvedVideo:Bn,isValueMap:yc},Symbol.toStringTag,{value:"Module"})),ru=class ru{constructor(t={mapCtor:Map,arrayCtor:Array,setCtor:Set,objCtor:Object}){this.opts=t,this.mapCtor=Map,this.arrayCtor=Array,this.setCtor=Set,this.objCtor=Object,this.arrayCtor=t.arrayCtor,this.mapCtor=t.mapCtor,this.setCtor=t.setCtor,this.objCtor=t.objCtor,this.surfaces=new t.mapCtor}getSurfaces(){return this.surfaces}clearSurfaces(){this.surfaces.clear()}processMessages(t){for(const u of t)u.beginRendering&&this.handleBeginRendering(u.beginRendering,u.beginRendering.surfaceId),u.surfaceUpdate&&this.handleSurfaceUpdate(u.surfaceUpdate,u.surfaceUpdate.surfaceId),u.dataModelUpdate&&this.handleDataModelUpdate(u.dataModelUpdate,u.dataModelUpdate.surfaceId),u.deleteSurface&&this.handleDeleteSurface(u.deleteSurface)}getData(t,u,r=ru.DEFAULT_SURFACE_ID){const i=this.getOrCreateSurface(r);if(!i)return null;let s;return u==="."||u===""?s=t.dataContextPath??"/":s=this.resolvePath(u,t.dataContextPath),this.getDataByPath(i.dataModel,s)}setData(t,u,r,i=ru.DEFAULT_SURFACE_ID){if(!t){console.warn("No component node set");return}const s=this.getOrCreateSurface(i);if(!s)return;let n;u==="."||u===""?n=t.dataContextPath??"/":n=this.resolvePath(u,t.dataContextPath),this.setDataByPath(s.dataModel,n,r)}resolvePath(t,u){return t.startsWith("/")?t:u&&u!=="/"?u.endsWith("/")?`${u}${t}`:`${u}/${t}`:`/${t}`}parseIfJsonString(t){if(typeof t!="string")return t;const u=t.trim();if(u.startsWith("{")&&u.endsWith("}")||u.startsWith("[")&&u.endsWith("]"))try{return JSON.parse(t)}catch(r){return console.warn(`Failed to parse potential JSON string: "${t.substring(0,50)}..."`,r),t}return t}convertKeyValueArrayToMap(t){const u=new this.mapCtor;for(const r of t){if(!U(r)||!("key"in r))continue;const i=r.key,s=this.findValueKey(r);if(!s)continue;let n=r[s];s==="valueMap"&&Array.isArray(n)?n=this.convertKeyValueArrayToMap(n):typeof n=="string"&&(n=this.parseIfJsonString(n)),this.setDataByPath(u,i,n)}return u}setDataByPath(t,u,r){if(Array.isArray(r)&&(r.length===0||U(r[0])&&"key"in r[0]))if(r.length===1&&U(r[0])&&r[0].key==="."){const a=r[0],l=this.findValueKey(a);l?(r=a[l],l==="valueMap"&&Array.isArray(r)?r=this.convertKeyValueArrayToMap(r):typeof r=="string"&&(r=this.parseIfJsonString(r))):r=this.convertKeyValueArrayToMap(r)}else r=this.convertKeyValueArrayToMap(r);const i=this.normalizePath(u).split("/").filter(a=>a);if(i.length===0){if(r instanceof Map||U(r)){!(r instanceof Map)&&U(r)&&(r=new this.mapCtor(Object.entries(r))),t.clear();for(const[a,l]of r.entries())t.set(a,l)}else console.error("Cannot set root of DataModel to a non-Map value.");return}let s=t;for(let a=0;a<i.length-1;a++){const l=i[a];let d;s instanceof Map?d=s.get(l):Array.isArray(s)&&/^\d+$/.test(l)&&(d=s[parseInt(l,10)]),(d===void 0||typeof d!="object"||d===null)&&(d=new this.mapCtor,s instanceof this.mapCtor?s.set(l,d):Array.isArray(s)&&(s[parseInt(l,10)]=d)),s=d}const n=i[i.length-1],o=r;s instanceof this.mapCtor?s.set(n,o):Array.isArray(s)&&/^\d+$/.test(n)&&(s[parseInt(n,10)]=o)}normalizePath(t){return"/"+t.replace(/\[(\d+)\]/g,".$1").split(".").filter(i=>i.length>0).join("/")}getDataByPath(t,u){const r=this.normalizePath(u).split("/").filter(s=>s);let i=t;for(const s of r){if(i==null)return null;if(i instanceof Map)i=i.get(s);else if(Array.isArray(i)&&/^\d+$/.test(s))i=i[parseInt(s,10)];else if(U(i))i=i[s];else return null}return i}getOrCreateSurface(t){let u=this.surfaces.get(t);return u||(u=new this.objCtor({rootComponentId:null,componentTree:null,dataModel:new this.mapCtor,components:new this.mapCtor,styles:new this.objCtor}),this.surfaces.set(t,u)),u}handleBeginRendering(t,u){const r=this.getOrCreateSurface(u);r.rootComponentId=t.root,r.styles=t.styles??{},this.rebuildComponentTree(r)}handleSurfaceUpdate(t,u){const r=this.getOrCreateSurface(u);for(const i of t.components)r.components.set(i.id,i);this.rebuildComponentTree(r)}handleDataModelUpdate(t,u){const r=this.getOrCreateSurface(u),i=t.path??"/";this.setDataByPath(r.dataModel,i,t.contents),this.rebuildComponentTree(r)}handleDeleteSurface(t){this.surfaces.delete(t.surfaceId)}rebuildComponentTree(t){if(!t.rootComponentId){t.componentTree=null;return}const u=new this.setCtor;t.componentTree=this.buildNodeRecursive(t.rootComponentId,t,u,"/","")}findValueKey(t){return Object.keys(t).find(u=>u.startsWith("value"))}buildNodeRecursive(t,u,r,i,s=""){const n=`${t}${s}`,{components:o}=u;if(!o.has(t))return null;if(r.has(n))throw new Error(`Circular dependency for component "${n}".`);r.add(n);const a=o.get(t),l=a.component??{},d=Object.keys(l)[0],c=l[d],p=new this.objCtor;if(U(c))for(const[h,m]of Object.entries(c))p[h]=this.resolvePropertyValue(m,u,r,i,s);r.delete(n);const f={id:n,dataContextPath:i,weight:a.weight??"initial"};switch(d){case"Text":if(!jn(p))throw new Error(`Invalid data; expected ${d}`);return new this.objCtor({...f,type:"Text",properties:p});case"Image":if(!Tn(p))throw new Error(`Invalid data; expected ${d}`);return new this.objCtor({...f,type:"Image",properties:p});case"Icon":if(!On(p))throw new Error(`Invalid data; expected ${d}`);return new this.objCtor({...f,type:"Icon",properties:p});case"Video":if(!Bn(p))throw new Error(`Invalid data; expected ${d}`);return new this.objCtor({...f,type:"Video",properties:p});case"AudioPlayer":if(!wn(p))throw new Error(`Invalid data; expected ${d}`);return new this.objCtor({...f,type:"AudioPlayer",properties:p});case"Row":if(!Nn(p))throw new Error(`Invalid data; expected ${d}`);return new this.objCtor({...f,type:"Row",properties:p});case"Column":if(!Dn(p))throw new Error(`Invalid data; expected ${d}`);return new this.objCtor({...f,type:"Column",properties:p});case"List":if(!In(p))throw new Error(`Invalid data; expected ${d}`);return new this.objCtor({...f,type:"List",properties:p});case"Card":if(!En(p))throw new Error(`Invalid data; expected ${d}`);return new this.objCtor({...f,type:"Card",properties:p});case"Tabs":if(!Mn(p))throw new Error(`Invalid data; expected ${d}`);return new this.objCtor({...f,type:"Tabs",properties:p});case"Divider":if(!Fn(p))throw new Error(`Invalid data; expected ${d}`);return new this.objCtor({...f,type:"Divider",properties:p});case"Modal":if(!Pn(p))throw new Error(`Invalid data; expected ${d}`);return new this.objCtor({...f,type:"Modal",properties:p});case"Button":if(!kn(p))throw new Error(`Invalid data; expected ${d}`);return new this.objCtor({...f,type:"Button",properties:p});case"CheckBox":if(!An(p))throw new Error(`Invalid data; expected ${d}`);return new this.objCtor({...f,type:"CheckBox",properties:p});case"TextField":if(!Ln(p))throw new Error(`Invalid data; expected ${d}`);return new this.objCtor({...f,type:"TextField",properties:p});case"DateTimeInput":if(!Sn(p))throw new Error(`Invalid data; expected ${d}`);return new this.objCtor({...f,type:"DateTimeInput",properties:p});case"MultipleChoice":if(!zn(p))throw new Error(`Invalid data; expected ${d}`);return new this.objCtor({...f,type:"MultipleChoice",properties:p});case"Slider":if(!Rn(p))throw new Error(`Invalid data; expected ${d}`);return new this.objCtor({...f,type:"Slider",properties:p});default:return new this.objCtor({...f,type:d,properties:p})}}resolvePropertyValue(t,u,r,i,s=""){if(typeof t=="string"&&u.components.has(t))return this.buildNodeRecursive(t,u,r,i,s);if(Cn(t)){if(t.explicitList)return t.explicitList.map(n=>this.buildNodeRecursive(n,u,r,i,s));if(t.template){const n=this.resolvePath(t.template.dataBinding,i),o=this.getDataByPath(u.dataModel,n),a=t.template;if(Array.isArray(o))return o.map((d,c)=>{const h=`:${[...i.split("/").filter(b=>/^\d+$/.test(b)),c].join(":")}`,m=`${n}/${c}`;return this.buildNodeRecursive(a.componentId,u,r,m,h)});const l=this.mapCtor;return o instanceof l?Array.from(o.keys(),d=>{const c=`:${d}`,p=`${n}/${d}`;return this.buildNodeRecursive(a.componentId,u,r,p,c)}):new this.arrayCtor}}if(Array.isArray(t))return t.map(n=>this.resolvePropertyValue(n,u,r,i,s));if(U(t)){const n=new this.objCtor;for(const[o,a]of Object.entries(t)){let l=a;if($n(o,a)&&i!=="/"){l=a.replace(/^\.?\/item/,"").replace(/^\.?\/text/,"").replace(/^\.?\/label/,"").replace(/^\.?\//,""),n[o]=l;continue}n[o]=this.resolvePropertyValue(l,u,r,i,s)}return n}return t}};ru.DEFAULT_SURFACE_ID="@default";let W=ru;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=Tt(class extends Ot{constructor(e){var t;if(super(e),e.type!==mu.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,i;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!((r=this.nt)!=null&&r.has(s))&&this.st.add(s);return this.render(t)}const u=e.element.classList;for(const s of this.st)s in t||(u.remove(s),this.st.delete(s));for(const s in t){const n=!!t[s];n===this.st.has(s)||(i=this.nt)!=null&&i.has(s)||(n?(u.add(s),this.st.add(s)):(u.remove(s),this.st.delete(s)))}return ve}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Un="important",wc=" !"+Un,se=Tt(class extends Ot{constructor(e){var t;if(super(e),e.type!==mu.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,u)=>{const r=e[u];return r==null?t:t+`${u=u.includes("-")?u:u.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(e,[t]){const{style:u}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const r of this.ft)t[r]==null&&(this.ft.delete(r),r.includes("-")?u.removeProperty(r):u[r]=null);for(const r in t){const i=t[r];if(i!=null){this.ft.add(r);const s=typeof i=="string"&&i.endsWith(wc);r.includes("-")||s?u.setProperty(r,s?i.slice(0,-11):i,s?Un:""):u[r]=i}}return ve}});var as=function(e,t,u,r,i,s){function n(_){if(_!==void 0&&typeof _!="function")throw new TypeError("Function expected");return _}for(var o=r.kind,a=o==="getter"?"get":o==="setter"?"set":"value",l=!t&&e?r.static?e:e.prototype:null,d=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),c,p=!1,f=u.length-1;f>=0;f--){var h={};for(var m in r)h[m]=m==="access"?{}:r[m];for(var m in r.access)h.access[m]=r.access[m];h.addInitializer=function(_){if(p)throw new TypeError("Cannot add initializers after decoration has completed");s.push(n(_||null))};var b=(0,u[f])(o==="accessor"?{get:d.get,set:d.set}:d[a],h);if(o==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(c=n(b.get))&&(d.get=c),(c=n(b.set))&&(d.set=c),(c=n(b.init))&&i.unshift(c)}else(c=n(b))&&(o==="field"?i.unshift(c):d[a]=c)}l&&Object.defineProperty(l,r.name,d),p=!0},wr=function(e,t,u){for(var r=arguments.length>2,i=0;i<t.length;i++)u=r?t[i].call(e,u):t[i].call(e);return r?u:void 0};(()=>{var a,l,qn,c;let e=[J("a2ui-audioplayer")],t,u=[],r,i=ee,s,n=[],o=[];return c=class extends i{constructor(){super(...arguments);T(this,l);T(this,a,wr(this,n,null));wr(this,o)}get url(){return D(this,a)}set url(h){z(this,a,h)}render(){var h,m;return E`<section
      class=${q(this.theme.components.AudioPlayer)}
      style=${(h=this.theme.additionalStyles)!=null&&h.AudioPlayer?se((m=this.theme.additionalStyles)==null?void 0:m.AudioPlayer):P}
    >
      ${R(this,l,qn).call(this)}
    </section>`}},a=new WeakMap,l=new WeakSet,qn=function(){if(!this.url)return P;if(this.url&&typeof this.url=="object"){if("literalString"in this.url)return E`<audio controls src=${this.url.literalString} />`;if("literal"in this.url)return E`<audio controls src=${this.url.literal} />`;if(this.url&&"path"in this.url&&this.url.path){if(!this.processor||!this.component)return E`(no processor)`;const h=this.processor.getData(this.component,this.url.path,this.surfaceId??W.DEFAULT_SURFACE_ID);return h?typeof h!="string"?E`Invalid audio URL`:E`<audio controls src=${h} />`:E`Invalid audio URL`}}return E`(empty)`},r=c,(()=>{const h=typeof Symbol=="function"&&Symbol.metadata?Object.create(i[Symbol.metadata]??null):void 0;s=[j()],as(c,null,s,{kind:"accessor",name:"url",static:!1,private:!1,access:{has:m=>"url"in m,get:m=>m.url,set:(m,b)=>{m.url=b}},metadata:h},n,o),as(null,t={value:r},e,{kind:"class",name:r.name,metadata:h},null,u),r=t.value,h&&Object.defineProperty(r,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:h})})(),c.styles=[X,K`
      * {
        box-sizing: border-box;
      }

      :host {
        display: block;
        flex: var(--weight);
        min-height: 0;
        overflow: auto;
      }

      audio {
        display: block;
        width: 100%;
      }
    `],wr(r,u),r})();const kc={bubbles:!0,cancelable:!0,composed:!0},Ju=class Ju extends CustomEvent{constructor(t){super(Ju.eventName,{detail:t,...kc}),this.payload=t}};Ju.eventName="a2uiaction";let ti=Ju;var cs=function(e,t,u,r,i,s){function n(_){if(_!==void 0&&typeof _!="function")throw new TypeError("Function expected");return _}for(var o=r.kind,a=o==="getter"?"get":o==="setter"?"set":"value",l=!t&&e?r.static?e:e.prototype:null,d=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),c,p=!1,f=u.length-1;f>=0;f--){var h={};for(var m in r)h[m]=m==="access"?{}:r[m];for(var m in r.access)h.access[m]=r.access[m];h.addInitializer=function(_){if(p)throw new TypeError("Cannot add initializers after decoration has completed");s.push(n(_||null))};var b=(0,u[f])(o==="accessor"?{get:d.get,set:d.set}:d[a],h);if(o==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(c=n(b.get))&&(d.get=c),(c=n(b.set))&&(d.set=c),(c=n(b.init))&&i.unshift(c)}else(c=n(b))&&(o==="field"?i.unshift(c):d[a]=c)}l&&Object.defineProperty(l,r.name,d),p=!0},kr=function(e,t,u){for(var r=arguments.length>2,i=0;i<t.length;i++)u=r?t[i].call(e,u):t[i].call(e);return r?u:void 0};(()=>{var a,l;let e=[J("a2ui-button")],t,u=[],r,i=ee,s,n=[],o=[];return l=class extends i{constructor(){super(...arguments);T(this,a,kr(this,n,null));kr(this,o)}get action(){return D(this,a)}set action(p){z(this,a,p)}render(){var p,f;return E`<button
      class=${q(this.theme.components.Button)}
      style=${(p=this.theme.additionalStyles)!=null&&p.Button?se((f=this.theme.additionalStyles)==null?void 0:f.Button):P}
      @click=${()=>{if(!this.action)return;const h=new ti({eventType:"a2ui.action",action:this.action,dataContextPath:this.dataContextPath,sourceComponentId:this.id,sourceComponent:this.component});this.dispatchEvent(h)}}
    >
      <slot></slot>
    </button>`}},a=new WeakMap,r=l,(()=>{const p=typeof Symbol=="function"&&Symbol.metadata?Object.create(i[Symbol.metadata]??null):void 0;s=[j()],cs(l,null,s,{kind:"accessor",name:"action",static:!1,private:!1,access:{has:f=>"action"in f,get:f=>f.action,set:(f,h)=>{f.action=h}},metadata:p},n,o),cs(null,t={value:r},e,{kind:"class",name:r.name,metadata:p},null,u),r=t.value,p&&Object.defineProperty(r,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:p})})(),l.styles=[X,K`
      :host {
        display: block;
        flex: var(--weight);
        min-height: 0;
      }
    `],kr(r,u),r})();var Ec=function(e,t,u,r,i,s){function n(_){if(_!==void 0&&typeof _!="function")throw new TypeError("Function expected");return _}for(var o=r.kind,a=o==="getter"?"get":o==="setter"?"set":"value",l=!t&&e?r.static?e:e.prototype:null,d=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),c,p=!1,f=u.length-1;f>=0;f--){var h={};for(var m in r)h[m]=m==="access"?{}:r[m];for(var m in r.access)h.access[m]=r.access[m];h.addInitializer=function(_){if(p)throw new TypeError("Cannot add initializers after decoration has completed");s.push(n(_||null))};var b=(0,u[f])(o==="accessor"?{get:d.get,set:d.set}:d[a],h);if(o==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(c=n(b.get))&&(d.get=c),(c=n(b.set))&&(d.set=c),(c=n(b.init))&&i.unshift(c)}else(c=n(b))&&(o==="field"?i.unshift(c):d[a]=c)}l&&Object.defineProperty(l,r.name,d),p=!0},Ac=function(e,t,u){for(var r=arguments.length>2,i=0;i<t.length;i++)u=r?t[i].call(e,u):t[i].call(e);return r?u:void 0};(()=>{var s;let e=[J("a2ui-card")],t,u=[],r,i=ee;return s=class extends i{render(){var o,a;return E` <section
      class=${q(this.theme.components.Card)}
      style=${(o=this.theme.additionalStyles)!=null&&o.Card?se((a=this.theme.additionalStyles)==null?void 0:a.Card):P}
    >
      <slot></slot>
    </section>`}},r=s,(()=>{const o=typeof Symbol=="function"&&Symbol.metadata?Object.create(i[Symbol.metadata]??null):void 0;Ec(null,t={value:r},e,{kind:"class",name:r.name,metadata:o},null,u),r=t.value,o&&Object.defineProperty(r,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:o})})(),s.styles=[X,K`
      * {
        box-sizing: border-box;
      }

      :host {
        display: block;
        flex: var(--weight);
        min-height: 0;
        overflow: auto;
      }

      section {
        height: 100%;
        width: 100%;
        min-height: 0;
        overflow: auto;

        ::slotted(*) {
          height: 100%;
          width: 100%;
        }
      }
    `],Ac(r,u),r})();var Er=function(e,t,u,r,i,s){function n(_){if(_!==void 0&&typeof _!="function")throw new TypeError("Function expected");return _}for(var o=r.kind,a=o==="getter"?"get":o==="setter"?"set":"value",l=!t&&e?r.static?e:e.prototype:null,d=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),c,p=!1,f=u.length-1;f>=0;f--){var h={};for(var m in r)h[m]=m==="access"?{}:r[m];for(var m in r.access)h.access[m]=r.access[m];h.addInitializer=function(_){if(p)throw new TypeError("Cannot add initializers after decoration has completed");s.push(n(_||null))};var b=(0,u[f])(o==="accessor"?{get:d.get,set:d.set}:d[a],h);if(o==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(c=n(b.get))&&(d.get=c),(c=n(b.set))&&(d.set=c),(c=n(b.init))&&i.unshift(c)}else(c=n(b))&&(o==="field"?i.unshift(c):d[a]=c)}l&&Object.defineProperty(l,r.name,d),p=!0},Rt=function(e,t,u){for(var r=arguments.length>2,i=0;i<t.length;i++)u=r?t[i].call(e,u):t[i].call(e);return r?u:void 0};(()=>{var c,p,f,Hn,Tu,b;let e=[J("a2ui-checkbox")],t,u=[],r,i=ee,s,n=[],o=[],a,l=[],d=[];return b=class extends i{constructor(){super(...arguments);T(this,f);T(this,c,Rt(this,n,null));T(this,p,(Rt(this,o),Rt(this,l,null)));Rt(this,d)}get value(){return D(this,c)}set value(v){z(this,c,v)}get label(){return D(this,p)}set label(v){z(this,p,v)}render(){if(this.value&&typeof this.value=="object"){if("literalBoolean"in this.value&&this.value.literalBoolean)return R(this,f,Tu).call(this,this.value.literalBoolean);if("literal"in this.value&&this.value.literal!==void 0)return R(this,f,Tu).call(this,this.value.literal);if(this.value&&"path"in this.value&&this.value.path){if(!this.processor||!this.component)return E`(no model)`;const v=this.processor.getData(this.component,this.value.path,this.surfaceId??W.DEFAULT_SURFACE_ID);return v===null?E`Invalid label`:typeof v!="boolean"?E`Invalid label`:R(this,f,Tu).call(this,v)}}return P}},c=new WeakMap,p=new WeakMap,f=new WeakSet,Hn=function(v){!this.value||!this.processor||"path"in this.value&&this.value.path&&this.processor.setData(this.component,this.value.path,v,this.surfaceId??W.DEFAULT_SURFACE_ID)},Tu=function(v){var y,g,$;return E` <section
      class=${q(this.theme.components.CheckBox.container)}
      style=${(y=this.theme.additionalStyles)!=null&&y.CheckBox?se((g=this.theme.additionalStyles)==null?void 0:g.CheckBox):P}
    >
      <input
        class=${q(this.theme.components.CheckBox.element)}
        autocomplete="off"
        @input=${C=>{C.target instanceof HTMLInputElement&&R(this,f,Hn).call(this,C.target.checked)}}
        id="data"
        type="checkbox"
        .checked=${v}
      />
      <label class=${q(this.theme.components.CheckBox.label)} for="data"
        >${($=this.label)==null?void 0:$.literalString}</label
      >
    </section>`},r=b,(()=>{const v=typeof Symbol=="function"&&Symbol.metadata?Object.create(i[Symbol.metadata]??null):void 0;s=[j()],a=[j()],Er(b,null,s,{kind:"accessor",name:"value",static:!1,private:!1,access:{has:y=>"value"in y,get:y=>y.value,set:(y,g)=>{y.value=g}},metadata:v},n,o),Er(b,null,a,{kind:"accessor",name:"label",static:!1,private:!1,access:{has:y=>"label"in y,get:y=>y.label,set:(y,g)=>{y.label=g}},metadata:v},l,d),Er(null,t={value:r},e,{kind:"class",name:r.name,metadata:v},null,u),r=t.value,v&&Object.defineProperty(r,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:v})})(),b.styles=[X,K`
      * {
        box-sizing: border-box;
      }

      :host {
        display: block;
        flex: var(--weight);
        min-height: 0;
        overflow: auto;
      }

      input {
        display: block;
        width: 100%;
      }

      .description {
        font-size: 14px;
        margin-bottom: 4px;
      }
    `],Rt(r,u),r})();var Ar=function(e,t,u,r,i,s){function n(_){if(_!==void 0&&typeof _!="function")throw new TypeError("Function expected");return _}for(var o=r.kind,a=o==="getter"?"get":o==="setter"?"set":"value",l=!t&&e?r.static?e:e.prototype:null,d=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),c,p=!1,f=u.length-1;f>=0;f--){var h={};for(var m in r)h[m]=m==="access"?{}:r[m];for(var m in r.access)h.access[m]=r.access[m];h.addInitializer=function(_){if(p)throw new TypeError("Cannot add initializers after decoration has completed");s.push(n(_||null))};var b=(0,u[f])(o==="accessor"?{get:d.get,set:d.set}:d[a],h);if(o==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(c=n(b.get))&&(d.get=c),(c=n(b.set))&&(d.set=c),(c=n(b.init))&&i.unshift(c)}else(c=n(b))&&(o==="field"?i.unshift(c):d[a]=c)}l&&Object.defineProperty(l,r.name,d),p=!0},Mt=function(e,t,u){for(var r=arguments.length>2,i=0;i<t.length;i++)u=r?t[i].call(e,u):t[i].call(e);return r?u:void 0};(()=>{var c,p,f;let e=[J("a2ui-column")],t,u=[],r,i=ee,s,n=[],o=[],a,l=[],d=[];return f=class extends i{constructor(){super(...arguments);T(this,c,Mt(this,n,"stretch"));T(this,p,(Mt(this,o),Mt(this,l,"start")));Mt(this,d)}get alignment(){return D(this,c)}set alignment(b){z(this,c,b)}get distribution(){return D(this,p)}set distribution(b){z(this,p,b)}render(){var b,_;return E`<section
      class=${q(this.theme.components.Column)}
      style=${(b=this.theme.additionalStyles)!=null&&b.Column?se((_=this.theme.additionalStyles)==null?void 0:_.Column):P}
    >
      <slot></slot>
    </section>`}},c=new WeakMap,p=new WeakMap,r=f,(()=>{const b=typeof Symbol=="function"&&Symbol.metadata?Object.create(i[Symbol.metadata]??null):void 0;s=[j({reflect:!0,type:String})],a=[j({reflect:!0,type:String})],Ar(f,null,s,{kind:"accessor",name:"alignment",static:!1,private:!1,access:{has:_=>"alignment"in _,get:_=>_.alignment,set:(_,w)=>{_.alignment=w}},metadata:b},n,o),Ar(f,null,a,{kind:"accessor",name:"distribution",static:!1,private:!1,access:{has:_=>"distribution"in _,get:_=>_.distribution,set:(_,w)=>{_.distribution=w}},metadata:b},l,d),Ar(null,t={value:r},e,{kind:"class",name:r.name,metadata:b},null,u),r=t.value,b&&Object.defineProperty(r,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:b})})(),f.styles=[X,K`
      * {
        box-sizing: border-box;
      }

      :host {
        display: flex;
        flex: var(--weight);
      }

      section {
        display: flex;
        flex-direction: column;
        min-width: 100%;
        height: 100%;
      }

      :host([alignment="start"]) section {
        align-items: start;
      }

      :host([alignment="center"]) section {
        align-items: center;
      }

      :host([alignment="end"]) section {
        align-items: end;
      }

      :host([alignment="stretch"]) section {
        align-items: stretch;
      }

      :host([distribution="start"]) section {
        justify-content: start;
      }

      :host([distribution="center"]) section {
        justify-content: center;
      }

      :host([distribution="end"]) section {
        justify-content: end;
      }

      :host([distribution="spaceBetween"]) section {
        justify-content: space-between;
      }

      :host([distribution="spaceAround"]) section {
        justify-content: space-around;
      }

      :host([distribution="spaceEvenly"]) section {
        justify-content: space-evenly;
      }
    `],Mt(r,u),r})();var jt=function(e,t,u,r,i,s){function n(_){if(_!==void 0&&typeof _!="function")throw new TypeError("Function expected");return _}for(var o=r.kind,a=o==="getter"?"get":o==="setter"?"set":"value",l=!t&&e?r.static?e:e.prototype:null,d=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),c,p=!1,f=u.length-1;f>=0;f--){var h={};for(var m in r)h[m]=m==="access"?{}:r[m];for(var m in r.access)h.access[m]=r.access[m];h.addInitializer=function(_){if(p)throw new TypeError("Cannot add initializers after decoration has completed");s.push(n(_||null))};var b=(0,u[f])(o==="accessor"?{get:d.get,set:d.set}:d[a],h);if(o==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(c=n(b.get))&&(d.get=c),(c=n(b.set))&&(d.set=c),(c=n(b.init))&&i.unshift(c)}else(c=n(b))&&(o==="field"?i.unshift(c):d[a]=c)}l&&Object.defineProperty(l,r.name,d),p=!0},Oe=function(e,t,u){for(var r=arguments.length>2,i=0;i<t.length;i++)u=r?t[i].call(e,u):t[i].call(e);return r?u:void 0};(()=>{var _,w,v,y,g,Vn,Ou,Iu,Wn,ft,ui,O;let e=[J("a2ui-datetimeinput")],t,u=[],r,i=ee,s,n=[],o=[],a,l=[],d=[],c,p=[],f=[],h,m=[],b=[];return O=class extends i{constructor(){super(...arguments);T(this,g);T(this,_,Oe(this,n,null));T(this,w,(Oe(this,o),Oe(this,l,null)));T(this,v,(Oe(this,d),Oe(this,p,!0)));T(this,y,(Oe(this,f),Oe(this,m,!0)));Oe(this,b)}get value(){return D(this,_)}set value(k){z(this,_,k)}get label(){return D(this,w)}set label(k){z(this,w,k)}get enableDate(){return D(this,v)}set enableDate(k){z(this,v,k)}get enableTime(){return D(this,y)}set enableTime(k){z(this,y,k)}render(){if(this.value&&typeof this.value=="object"){if("literalString"in this.value&&this.value.literalString)return R(this,g,Ou).call(this,this.value.literalString);if("literal"in this.value&&this.value.literal!==void 0)return R(this,g,Ou).call(this,this.value.literal);if(this.value&&"path"in this.value&&this.value.path){if(!this.processor||!this.component)return E`(no model)`;const k=this.processor.getData(this.component,this.value.path,this.surfaceId??W.DEFAULT_SURFACE_ID);return typeof k!="string"?E`(invalid)`:R(this,g,Ou).call(this,k)}}return P}},_=new WeakMap,w=new WeakMap,v=new WeakMap,y=new WeakMap,g=new WeakSet,Vn=function(k){!this.value||!this.processor||"path"in this.value&&this.value.path&&this.processor.setData(this.component,this.value.path,k,this.surfaceId??W.DEFAULT_SURFACE_ID)},Ou=function(k){var I,B;return E`<section
      class=${q(this.theme.components.DateTimeInput.container)}
    >
      <label
        for="data"
        class=${q(this.theme.components.DateTimeInput.label)}
        >${R(this,g,ui).call(this)}</label
      >
      <input
        autocomplete="off"
        class=${q(this.theme.components.DateTimeInput.element)}
        style=${(I=this.theme.additionalStyles)!=null&&I.DateTimeInput?se((B=this.theme.additionalStyles)==null?void 0:B.DateTimeInput):P}
        @input=${de=>{de.target instanceof HTMLInputElement&&R(this,g,Vn).call(this,de.target.value)}}
        id="data"
        name="data"
        .value=${R(this,g,Wn).call(this,k)}
        .placeholder=${R(this,g,ui).call(this)}
        .type=${R(this,g,Iu).call(this)}
      />
    </section>`},Iu=function(){return this.enableDate&&this.enableTime?"datetime-local":this.enableDate?"date":this.enableTime?"time":"datetime-local"},Wn=function(k){const I=R(this,g,Iu).call(this),B=k?new Date(k):null;if(!B||isNaN(B.getTime()))return"";const de=R(this,g,ft).call(this,B.getFullYear()),ge=R(this,g,ft).call(this,B.getMonth()),ye=R(this,g,ft).call(this,B.getDate()),te=R(this,g,ft).call(this,B.getHours()),cr=R(this,g,ft).call(this,B.getMinutes());return I==="date"?`${de}-${ge}-${ye}`:I==="time"?`${te}:${cr}`:`${de}-${ge}-${ye}T${te}:${cr}`},ft=function(k){return k.toString().padStart(2,"0")},ui=function(){const k=R(this,g,Iu).call(this);return k==="date"?"Date":k==="time"?"Time":"Date & Time"},r=O,(()=>{const k=typeof Symbol=="function"&&Symbol.metadata?Object.create(i[Symbol.metadata]??null):void 0;s=[j()],a=[j()],c=[j({reflect:!1,type:Boolean})],h=[j({reflect:!1,type:Boolean})],jt(O,null,s,{kind:"accessor",name:"value",static:!1,private:!1,access:{has:I=>"value"in I,get:I=>I.value,set:(I,B)=>{I.value=B}},metadata:k},n,o),jt(O,null,a,{kind:"accessor",name:"label",static:!1,private:!1,access:{has:I=>"label"in I,get:I=>I.label,set:(I,B)=>{I.label=B}},metadata:k},l,d),jt(O,null,c,{kind:"accessor",name:"enableDate",static:!1,private:!1,access:{has:I=>"enableDate"in I,get:I=>I.enableDate,set:(I,B)=>{I.enableDate=B}},metadata:k},p,f),jt(O,null,h,{kind:"accessor",name:"enableTime",static:!1,private:!1,access:{has:I=>"enableTime"in I,get:I=>I.enableTime,set:(I,B)=>{I.enableTime=B}},metadata:k},m,b),jt(null,t={value:r},e,{kind:"class",name:r.name,metadata:k},null,u),r=t.value,k&&Object.defineProperty(r,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:k})})(),O.styles=[X,K`
      * {
        box-sizing: border-box;
      }

      :host {
        display: block;
        flex: var(--weight);
        min-height: 0;
        overflow: auto;
      }

      input {
        display: block;
        border-radius: 8px;
        padding: 8px;
        border: 1px solid #ccc;
        width: 100%;
      }
    `],Oe(r,u),r})();var Dc=function(e,t,u,r,i,s){function n(_){if(_!==void 0&&typeof _!="function")throw new TypeError("Function expected");return _}for(var o=r.kind,a=o==="getter"?"get":o==="setter"?"set":"value",l=!t&&e?r.static?e:e.prototype:null,d=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),c,p=!1,f=u.length-1;f>=0;f--){var h={};for(var m in r)h[m]=m==="access"?{}:r[m];for(var m in r.access)h.access[m]=r.access[m];h.addInitializer=function(_){if(p)throw new TypeError("Cannot add initializers after decoration has completed");s.push(n(_||null))};var b=(0,u[f])(o==="accessor"?{get:d.get,set:d.set}:d[a],h);if(o==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(c=n(b.get))&&(d.get=c),(c=n(b.set))&&(d.set=c),(c=n(b.init))&&i.unshift(c)}else(c=n(b))&&(o==="field"?i.unshift(c):d[a]=c)}l&&Object.defineProperty(l,r.name,d),p=!0},Sc=function(e,t,u){for(var r=arguments.length>2,i=0;i<t.length;i++)u=r?t[i].call(e,u):t[i].call(e);return r?u:void 0};(()=>{var s;let e=[J("a2ui-divider")],t,u=[],r,i=ee;return s=class extends i{render(){var o,a;return E`<hr
      class=${q(this.theme.components.Divider)}
      style=${(o=this.theme.additionalStyles)!=null&&o.Divider?se((a=this.theme.additionalStyles)==null?void 0:a.Divider):P}
    />`}},r=s,(()=>{const o=typeof Symbol=="function"&&Symbol.metadata?Object.create(i[Symbol.metadata]??null):void 0;Dc(null,t={value:r},e,{kind:"class",name:r.name,metadata:o},null,u),r=t.value,o&&Object.defineProperty(r,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:o})})(),s.styles=[X,K`
      :host {
        display: block;
        min-height: 0;
        overflow: auto;
      }

      hr {
        height: 1px;
        background: #ccc;
        border: none;
      }
    `],Sc(r,u),r})();var ls=function(e,t,u,r,i,s){function n(_){if(_!==void 0&&typeof _!="function")throw new TypeError("Function expected");return _}for(var o=r.kind,a=o==="getter"?"get":o==="setter"?"set":"value",l=!t&&e?r.static?e:e.prototype:null,d=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),c,p=!1,f=u.length-1;f>=0;f--){var h={};for(var m in r)h[m]=m==="access"?{}:r[m];for(var m in r.access)h.access[m]=r.access[m];h.addInitializer=function(_){if(p)throw new TypeError("Cannot add initializers after decoration has completed");s.push(n(_||null))};var b=(0,u[f])(o==="accessor"?{get:d.get,set:d.set}:d[a],h);if(o==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(c=n(b.get))&&(d.get=c),(c=n(b.set))&&(d.set=c),(c=n(b.init))&&i.unshift(c)}else(c=n(b))&&(o==="field"?i.unshift(c):d[a]=c)}l&&Object.defineProperty(l,r.name,d),p=!0},Dr=function(e,t,u){for(var r=arguments.length>2,i=0;i<t.length;i++)u=r?t[i].call(e,u):t[i].call(e);return r?u:void 0};(()=>{var a,l,Zn,c;let e=[J("a2ui-icon")],t,u=[],r,i=ee,s,n=[],o=[];return c=class extends i{constructor(){super(...arguments);T(this,l);T(this,a,Dr(this,n,null));Dr(this,o)}get name(){return D(this,a)}set name(h){z(this,a,h)}render(){var h,m;return E`<section
      class=${q(this.theme.components.Icon)}
      style=${(h=this.theme.additionalStyles)!=null&&h.Icon?se((m=this.theme.additionalStyles)==null?void 0:m.Icon):P}
    >
      ${R(this,l,Zn).call(this)}
    </section>`}},a=new WeakMap,l=new WeakSet,Zn=function(){if(!this.name)return P;const h=m=>(m=m.replace(/([A-Z])/gm,"_$1").toLocaleLowerCase(),E`<span class="g-icon">${m}</span>`);if(this.name&&typeof this.name=="object"){if("literalString"in this.name){const m=this.name.literalString??"";return h(m)}else if("literal"in this.name){const m=this.name.literal??"";return h(m)}else if(this.name&&"path"in this.name&&this.name.path){if(!this.processor||!this.component)return E`(no model)`;const m=this.processor.getData(this.component,this.name.path,this.surfaceId??W.DEFAULT_SURFACE_ID);return m?typeof m!="string"?E`Invalid icon name`:h(m):E`Invalid icon name`}}return E`(empty)`},r=c,(()=>{const h=typeof Symbol=="function"&&Symbol.metadata?Object.create(i[Symbol.metadata]??null):void 0;s=[j()],ls(c,null,s,{kind:"accessor",name:"name",static:!1,private:!1,access:{has:m=>"name"in m,get:m=>m.name,set:(m,b)=>{m.name=b}},metadata:h},n,o),ls(null,t={value:r},e,{kind:"class",name:r.name,metadata:h},null,u),r=t.value,h&&Object.defineProperty(r,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:h})})(),c.styles=[X,K`
      * {
        box-sizing: border-box;
      }

      :host {
        display: block;
        flex: var(--weight);
        min-height: 0;
        overflow: auto;
      }
    `],Dr(r,u),r})();const We=(e=null)=>new De.State(e,{equals:()=>!1}),Fc=new Set([Symbol.iterator,"concat","entries","every","filter","find","findIndex","flat","flatMap","forEach","includes","indexOf","join","keys","lastIndexOf","map","reduce","reduceRight","slice","some","values"]),Tc=new Set(["fill","push","unshift"]);function ds(e){if(typeof e=="symbol")return null;const t=Number(e);return isNaN(t)?null:t%1===0?t:null}var Ue,yt,St,Gn,Kn;const _t=class _t{constructor(t=[]){T(this,St);T(this,Ue,We());T(this,yt,new Map);let u=t.slice(),r=this,i=new Map,s=!1;return new Proxy(u,{get(n,o){var l;let a=ds(o);if(a!==null)return R(l=r,St,Gn).call(l,a),D(r,Ue).get(),n[a];if(o==="length")return s?s=!1:D(r,Ue).get(),n[o];if(Tc.has(o)&&(s=!0),Fc.has(o)){let d=i.get(o);return d===void 0&&(d=(...c)=>(D(r,Ue).get(),n[o](...c)),i.set(o,d)),d}return n[o]},set(n,o,a){var d;n[o]=a;let l=ds(o);return l!==null?(R(d=r,St,Kn).call(d,l),D(r,Ue).set(null)):o==="length"&&D(r,Ue).set(null),!0},getPrototypeOf(){return _t.prototype}})}static from(t,u,r){return u?new _t(Array.from(t,u,r)):new _t(Array.from(t))}static of(...t){return new _t(t)}};Ue=new WeakMap,yt=new WeakMap,St=new WeakSet,Gn=function(t){let u=D(this,yt).get(t);u===void 0&&(u=We(),D(this,yt).set(t,u)),u.get()},Kn=function(t){const u=D(this,yt).get(t);u&&u.set(null)};let qu=_t;Object.setPrototypeOf(qu.prototype,Array.prototype);class Jn{constructor(t){fe(this,"collection",We());fe(this,"storages",new Map);fe(this,"vals");this.vals=t?new Map(t):new Map}readStorageFor(t){const{storages:u}=this;let r=u.get(t);r===void 0&&(r=We(),u.set(t,r)),r.get()}dirtyStorageFor(t){const u=this.storages.get(t);u&&u.set(null)}get(t){return this.readStorageFor(t),this.vals.get(t)}has(t){return this.readStorageFor(t),this.vals.has(t)}entries(){return this.collection.get(),this.vals.entries()}keys(){return this.collection.get(),this.vals.keys()}values(){return this.collection.get(),this.vals.values()}forEach(t){this.collection.get(),this.vals.forEach(t)}get size(){return this.collection.get(),this.vals.size}[Symbol.iterator](){return this.collection.get(),this.vals[Symbol.iterator]()}get[Symbol.toStringTag](){return this.vals[Symbol.toStringTag]}set(t,u){return this.dirtyStorageFor(t),this.collection.set(null),this.vals.set(t,u),this}delete(t){return this.dirtyStorageFor(t),this.collection.set(null),this.vals.delete(t)}clear(){this.storages.forEach(t=>t.set(null)),this.collection.set(null),this.vals.clear()}}Object.setPrototypeOf(Jn.prototype,Map.prototype);var xt,hu,$e,ii,si,ni;const Qu=class Qu{constructor(t={}){T(this,$e);T(this,xt,new Map);T(this,hu,We());let u=Object.getPrototypeOf(t),r=Object.getOwnPropertyDescriptors(t),i=Object.create(u);for(let n in r)Object.defineProperty(i,n,r[n]);let s=this;return new Proxy(i,{get(n,o,a){var l;return R(l=s,$e,ii).call(l,o),Reflect.get(n,o,a)},has(n,o){var a;return R(a=s,$e,ii).call(a,o),o in n},ownKeys(n){return D(s,hu).get(),Reflect.ownKeys(n)},set(n,o,a,l){var c,p;let d=Reflect.set(n,o,a,l);return R(c=s,$e,si).call(c,o),R(p=s,$e,ni).call(p),d},deleteProperty(n,o){var a,l;return o in n&&(delete n[o],R(a=s,$e,si).call(a,o),R(l=s,$e,ni).call(l)),!0},getPrototypeOf(){return Qu.prototype}})}static fromEntries(t){return new Qu(Object.fromEntries(t))}};xt=new WeakMap,hu=new WeakMap,$e=new WeakSet,ii=function(t){let u=D(this,xt).get(t);u===void 0&&(u=We(),D(this,xt).set(t,u)),u.get()},si=function(t){const u=D(this,xt).get(t);u&&u.set(null)},ni=function(){D(this,hu).set(null)};let ri=Qu;const Oc=ri;class Qn{constructor(t){fe(this,"collection",We());fe(this,"storages",new Map);fe(this,"vals");this.vals=new Set(t)}storageFor(t){const u=this.storages;let r=u.get(t);return r===void 0&&(r=We(),u.set(t,r)),r}dirtyStorageFor(t){const u=this.storages.get(t);u&&u.set(null)}has(t){return this.storageFor(t).get(),this.vals.has(t)}entries(){return this.collection.get(),this.vals.entries()}keys(){return this.collection.get(),this.vals.keys()}values(){return this.collection.get(),this.vals.values()}forEach(t){this.collection.get(),this.vals.forEach(t)}get size(){return this.collection.get(),this.vals.size}[Symbol.iterator](){return this.collection.get(),this.vals[Symbol.iterator]()}get[Symbol.toStringTag](){return this.vals[Symbol.toStringTag]}add(t){return this.dirtyStorageFor(t),this.collection.set(null),this.vals.add(t),this}delete(t){return this.dirtyStorageFor(t),this.collection.set(null),this.vals.delete(t)}clear(){this.storages.forEach(t=>t.set(null)),this.collection.set(null),this.vals.clear()}}Object.setPrototypeOf(Qn.prototype,Set.prototype);function Ic(){return new W({arrayCtor:qu,mapCtor:Jn,objCtor:Oc,setCtor:Qn})}const hs={createSignalA2uiMessageProcessor:Ic,A2uiMessageProcessor:W,Guards:Cc};var Cu=function(e,t,u,r,i,s){function n(_){if(_!==void 0&&typeof _!="function")throw new TypeError("Function expected");return _}for(var o=r.kind,a=o==="getter"?"get":o==="setter"?"set":"value",l=!t&&e?r.static?e:e.prototype:null,d=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),c,p=!1,f=u.length-1;f>=0;f--){var h={};for(var m in r)h[m]=m==="access"?{}:r[m];for(var m in r.access)h.access[m]=r.access[m];h.addInitializer=function(_){if(p)throw new TypeError("Cannot add initializers after decoration has completed");s.push(n(_||null))};var b=(0,u[f])(o==="accessor"?{get:d.get,set:d.set}:d[a],h);if(o==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(c=n(b.get))&&(d.get=c),(c=n(b.set))&&(d.set=c),(c=n(b.init))&&i.unshift(c)}else(c=n(b))&&(o==="field"?i.unshift(c):d[a]=c)}l&&Object.defineProperty(l,r.name,d),p=!0},Je=function(e,t,u){for(var r=arguments.length>2,i=0;i<t.length;i++)u=r?t[i].call(e,u):t[i].call(e);return r?u:void 0};(()=>{var h,m,b,_,Yn,v;let e=[J("a2ui-image")],t,u=[],r,i=ee,s,n=[],o=[],a,l=[],d=[],c,p=[],f=[];return v=class extends i{constructor(){super(...arguments);T(this,_);T(this,h,Je(this,n,null));T(this,m,(Je(this,o),Je(this,l,null)));T(this,b,(Je(this,d),Je(this,p,null)));Je(this,f)}get url(){return D(this,h)}set url($){z(this,h,$)}get usageHint(){return D(this,m)}set usageHint($){z(this,m,$)}get fit(){return D(this,b)}set fit($){z(this,b,$)}render(){var C;const $=ki(this.theme.components.Image.all,this.usageHint?this.theme.components.Image[this.usageHint]:{});return E`<section
      class=${q($)}
      style=${se({...((C=this.theme.additionalStyles)==null?void 0:C.Image)??{},"--object-fit":this.fit??"fill"})}
    >
      ${R(this,_,Yn).call(this)}
    </section>`}},h=new WeakMap,m=new WeakMap,b=new WeakMap,_=new WeakSet,Yn=function(){if(!this.url)return P;const $=C=>E`<img src=${C} />`;if(this.url&&typeof this.url=="object"){if("literalString"in this.url){const C=this.url.literalString??"";return $(C)}else if("literal"in this.url){const C=this.url.literal??"";return $(C)}else if(this.url&&"path"in this.url&&this.url.path){if(!this.processor||!this.component)return E`(no model)`;const C=this.processor.getData(this.component,this.url.path,this.surfaceId??W.DEFAULT_SURFACE_ID);return C?typeof C!="string"?E`Invalid image URL`:$(C):E`Invalid image URL`}}return E`(empty)`},r=v,(()=>{const $=typeof Symbol=="function"&&Symbol.metadata?Object.create(i[Symbol.metadata]??null):void 0;s=[j()],a=[j()],c=[j()],Cu(v,null,s,{kind:"accessor",name:"url",static:!1,private:!1,access:{has:C=>"url"in C,get:C=>C.url,set:(C,S)=>{C.url=S}},metadata:$},n,o),Cu(v,null,a,{kind:"accessor",name:"usageHint",static:!1,private:!1,access:{has:C=>"usageHint"in C,get:C=>C.usageHint,set:(C,S)=>{C.usageHint=S}},metadata:$},l,d),Cu(v,null,c,{kind:"accessor",name:"fit",static:!1,private:!1,access:{has:C=>"fit"in C,get:C=>C.fit,set:(C,S)=>{C.fit=S}},metadata:$},p,f),Cu(null,t={value:r},e,{kind:"class",name:r.name,metadata:$},null,u),r=t.value,$&&Object.defineProperty(r,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:$})})(),v.styles=[X,K`
      * {
        box-sizing: border-box;
      }

      :host {
        display: block;
        flex: var(--weight);
        min-height: 0;
        overflow: auto;
      }

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: var(--object-fit, fill);
      }
    `],Je(r,u),r})();var fs=function(e,t,u,r,i,s){function n(_){if(_!==void 0&&typeof _!="function")throw new TypeError("Function expected");return _}for(var o=r.kind,a=o==="getter"?"get":o==="setter"?"set":"value",l=!t&&e?r.static?e:e.prototype:null,d=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),c,p=!1,f=u.length-1;f>=0;f--){var h={};for(var m in r)h[m]=m==="access"?{}:r[m];for(var m in r.access)h.access[m]=r.access[m];h.addInitializer=function(_){if(p)throw new TypeError("Cannot add initializers after decoration has completed");s.push(n(_||null))};var b=(0,u[f])(o==="accessor"?{get:d.get,set:d.set}:d[a],h);if(o==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(c=n(b.get))&&(d.get=c),(c=n(b.set))&&(d.set=c),(c=n(b.init))&&i.unshift(c)}else(c=n(b))&&(o==="field"?i.unshift(c):d[a]=c)}l&&Object.defineProperty(l,r.name,d),p=!0},Sr=function(e,t,u){for(var r=arguments.length>2,i=0;i<t.length;i++)u=r?t[i].call(e,u):t[i].call(e);return r?u:void 0};(()=>{var a,l;let e=[J("a2ui-list")],t,u=[],r,i=ee,s,n=[],o=[];return l=class extends i{constructor(){super(...arguments);T(this,a,Sr(this,n,"vertical"));Sr(this,o)}get direction(){return D(this,a)}set direction(p){z(this,a,p)}render(){var p,f;return E`<section
      class=${q(this.theme.components.List)}
      style=${(p=this.theme.additionalStyles)!=null&&p.List?se((f=this.theme.additionalStyles)==null?void 0:f.List):P}
    >
      <slot></slot>
    </section>`}},a=new WeakMap,r=l,(()=>{const p=typeof Symbol=="function"&&Symbol.metadata?Object.create(i[Symbol.metadata]??null):void 0;s=[j({reflect:!0,type:String})],fs(l,null,s,{kind:"accessor",name:"direction",static:!1,private:!1,access:{has:f=>"direction"in f,get:f=>f.direction,set:(f,h)=>{f.direction=h}},metadata:p},n,o),fs(null,t={value:r},e,{kind:"class",name:r.name,metadata:p},null,u),r=t.value,p&&Object.defineProperty(r,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:p})})(),l.styles=[X,K`
      * {
        box-sizing: border-box;
      }

      :host {
        display: block;
        flex: var(--weight);
        min-height: 0;
        overflow: auto;
      }

      :host([direction="vertical"]) section {
        display: grid;
      }

      :host([direction="horizontal"]) section {
        display: flex;
        max-width: 100%;
        overflow-x: scroll;
        overflow-y: hidden;
        scrollbar-width: none;

        > ::slotted(*) {
          flex: 1 0 fit-content;
          max-width: min(80%, 400px);
        }
      }
    `],Sr(r,u),r})();function oi(e,t,u,r){if(e!==null&&typeof e=="object"){if("literalString"in e)return e.literalString??"";if("literal"in e&&e.literal!==void 0)return e.literal??"";if(e&&"path"in e&&e.path){if(!u||!t)return"(no model)";const i=u.getData(t,e.path,r??W.DEFAULT_SURFACE_ID);return i===null||typeof i!="string"?"":i}}return""}function Pc(e,t,u,r){if(e!==null&&typeof e=="object"){if("literalNumber"in e)return e.literalNumber??0;if("literal"in e&&e.literal!==void 0)return e.literal??0;if(e&&"path"in e&&e.path){if(!u||!t)return-1;let i=u.getData(t,e.path,r??W.DEFAULT_SURFACE_ID);return typeof i=="string"&&(i=Number.parseInt(i,10),Number.isNaN(i)&&(i=null)),i===null||typeof i!="number"?-1:i}}return 0}var Lt=function(e,t,u,r,i,s){function n(_){if(_!==void 0&&typeof _!="function")throw new TypeError("Function expected");return _}for(var o=r.kind,a=o==="getter"?"get":o==="setter"?"set":"value",l=!t&&e?r.static?e:e.prototype:null,d=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),c,p=!1,f=u.length-1;f>=0;f--){var h={};for(var m in r)h[m]=m==="access"?{}:r[m];for(var m in r.access)h.access[m]=r.access[m];h.addInitializer=function(_){if(p)throw new TypeError("Cannot add initializers after decoration has completed");s.push(n(_||null))};var b=(0,u[f])(o==="accessor"?{get:d.get,set:d.set}:d[a],h);if(o==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(c=n(b.get))&&(d.get=c),(c=n(b.set))&&(d.set=c),(c=n(b.init))&&i.unshift(c)}else(c=n(b))&&(o==="field"?i.unshift(c):d[a]=c)}l&&Object.defineProperty(l,r.name,d),p=!0},Ie=function(e,t,u){for(var r=arguments.length>2,i=0;i<t.length;i++)u=r?t[i].call(e,u):t[i].call(e);return r?u:void 0};(()=>{var _,w,v,y,g,ai,C;let e=[J("a2ui-multiplechoice")],t,u=[],r,i=ee,s,n=[],o=[],a,l=[],d=[],c,p=[],f=[],h,m=[],b=[];return C=class extends i{constructor(){super(...arguments);T(this,g);T(this,_,Ie(this,n,null));T(this,w,(Ie(this,o),Ie(this,l,[])));T(this,v,(Ie(this,d),Ie(this,p,[])));T(this,y,(Ie(this,f),Ie(this,m,!1)));Ie(this,b)}get description(){return D(this,_)}set description(M){z(this,_,M)}get options(){return D(this,w)}set options(M){z(this,w,M)}get selections(){return D(this,v)}set selections(M){z(this,v,M)}get isOpen(){return D(this,y)}set isOpen(M){z(this,y,M)}getCurrentSelections(){if(!this.processor||!this.component||Array.isArray(this.selections))return[];const M=this.processor.getData(this.component,this.selections.path,this.surfaceId??W.DEFAULT_SURFACE_ID);return Array.isArray(M)?M:[]}toggleSelection(M){const A=this.getCurrentSelections();A.includes(M)?R(this,g,ai).call(this,A.filter(O=>O!==M)):R(this,g,ai).call(this,[...A,M]),this.requestUpdate()}render(){const M=this.getCurrentSelections(),A=M.length,O=A>0?`${A} Selected`:this.description??"Select items";return E`
      <div class="container">
        <div 
          class="dropdown-header" 
          @click=${()=>this.isOpen=!this.isOpen}
        >
          <span class="header-text">${O}</span>
          <span class="chevron ${this.isOpen?"open":""}">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
              <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/>
            </svg>
          </span>
        </div>

        <div class="options-list ${this.isOpen?"open":""}">
          ${this.options.map(V=>{const _e=oi(V.label,this.component,this.processor,this.surfaceId),k=M.includes(V.value);return E`
              <div 
                class="option-item ${k?"selected":""}"
                @click=${I=>{I.stopPropagation(),this.toggleSelection(V.value)}}
              >
                <div class="checkbox">
                  <span class="checkbox-icon">✓</span>
                </div>
                <span>${_e}</span>
              </div>
            `})}
        </div>
      </div>
    `}},_=new WeakMap,w=new WeakMap,v=new WeakMap,y=new WeakMap,g=new WeakSet,ai=function(M){!this.selections||!this.processor||"path"in this.selections&&this.selections.path&&this.processor.setData(this.component,this.selections.path,M,this.surfaceId??W.DEFAULT_SURFACE_ID)},r=C,(()=>{const M=typeof Symbol=="function"&&Symbol.metadata?Object.create(i[Symbol.metadata]??null):void 0;s=[j()],a=[j()],c=[j()],h=[fn()],Lt(C,null,s,{kind:"accessor",name:"description",static:!1,private:!1,access:{has:A=>"description"in A,get:A=>A.description,set:(A,O)=>{A.description=O}},metadata:M},n,o),Lt(C,null,a,{kind:"accessor",name:"options",static:!1,private:!1,access:{has:A=>"options"in A,get:A=>A.options,set:(A,O)=>{A.options=O}},metadata:M},l,d),Lt(C,null,c,{kind:"accessor",name:"selections",static:!1,private:!1,access:{has:A=>"selections"in A,get:A=>A.selections,set:(A,O)=>{A.selections=O}},metadata:M},p,f),Lt(C,null,h,{kind:"accessor",name:"isOpen",static:!1,private:!1,access:{has:A=>"isOpen"in A,get:A=>A.isOpen,set:(A,O)=>{A.isOpen=O}},metadata:M},m,b),Lt(null,t={value:r},e,{kind:"class",name:r.name,metadata:M},null,u),r=t.value,M&&Object.defineProperty(r,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:M})})(),C.styles=[X,K`
      * {
        box-sizing: border-box;
      }

      :host {
        display: block;
        flex: var(--weight);
        min-height: 0;
        position: relative;
        font-family: 'Google Sans', 'Roboto', sans-serif;
      }

      .container {
        display: flex;
        flex-direction: column;
        gap: 4px;
        position: relative;
      }

      /* Header / Trigger */
      .dropdown-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 16px;
        background: var(--md-sys-color-surface);
        border: 1px solid var(--md-sys-color-outline-variant);
        border-radius: 8px;
        cursor: pointer;
        user-select: none;
        transition: background-color 0.2s;
        box-shadow: var(--md-sys-elevation-level1);
      }

      .dropdown-header:hover {
        background: var(--md-sys-color-surface-container-low);
      }

      .header-text {
        font-size: 1rem;
        color: var(--md-sys-color-on-surface);
        font-weight: 400;
      }

      .chevron {
        color: var(--md-sys-color-primary);
        font-size: 1.2rem;
        transition: transform 0.2s ease;
      }

      .chevron.open {
        transform: rotate(180deg);
      }

      /* Dropdown List */
      .options-list {
        background: var(--md-sys-color-surface);
        border: 1px solid var(--md-sys-color-outline-variant);
        border-radius: 8px; /* Consistent rounding */
        box-shadow: none; /* Remove shadow for inline feel, or keep subtle */
        overflow-y: auto;
        padding: 0;
        display: none;
        flex-direction: column;
        margin-top: 4px; /* Small gap */
        max-height: 0; /* Animate height? */
        transition: max-height 0.2s ease-out;
      }

      .options-list.open {
        display: flex;
        max-height: 300px; /* Limit height but allow scrolling */
        border: 1px solid var(--md-sys-color-outline-variant); /* efficient border */
      }

      /* Option Item (Checkbox style) */
      .option-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 16px;
        cursor: pointer;
        color: var(--md-sys-color-on-surface);
        font-size: 0.95rem;
        transition: background-color 0.1s;
      }

      .option-item:hover {
        background: var(--md-sys-color-surface-container-highest);
      }

      /* Custom Checkbox */
      .checkbox {
        width: 18px;
        height: 18px;
        border: 2px solid var(--md-sys-color-outline);
        border-radius: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s;
        flex-shrink: 0;
      }

      .option-item.selected .checkbox {
        background: var(--md-sys-color-primary);
        border-color: var(--md-sys-color-primary);
      }

      .checkbox-icon {
        color: var(--md-sys-color-on-primary);
        font-size: 14px;
        font-weight: bold;
        opacity: 0;
        transform: scale(0.5);
        transition: all 0.2s;
      }

      .option-item.selected .checkbox-icon {
        opacity: 1;
        transform: scale(1);
      }

      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-8px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `],Ie(r,u),r})();const Fr=new WeakMap,zc=Tt(class extends uc{render(e){return P}update(e,[t]){var r;const u=t!==this.G;return u&&this.G!==void 0&&this.rt(void 0),(u||this.lt!==this.ct)&&(this.G=t,this.ht=(r=e.options)==null?void 0:r.host,this.rt(this.ct=e.element)),P}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let u=Fr.get(t);u===void 0&&(u=new WeakMap,Fr.set(t,u)),u.get(this.G)!==void 0&&this.G.call(this.ht,void 0),u.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){var e,t;return typeof this.G=="function"?(e=Fr.get(this.ht??globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Tr=function(e,t,u,r,i,s){function n(_){if(_!==void 0&&typeof _!="function")throw new TypeError("Function expected");return _}for(var o=r.kind,a=o==="getter"?"get":o==="setter"?"set":"value",l=!t&&e?r.static?e:e.prototype:null,d=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),c,p=!1,f=u.length-1;f>=0;f--){var h={};for(var m in r)h[m]=m==="access"?{}:r[m];for(var m in r.access)h.access[m]=r.access[m];h.addInitializer=function(_){if(p)throw new TypeError("Cannot add initializers after decoration has completed");s.push(n(_||null))};var b=(0,u[f])(o==="accessor"?{get:d.get,set:d.set}:d[a],h);if(o==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(c=n(b.get))&&(d.get=c),(c=n(b.set))&&(d.set=c),(c=n(b.init))&&i.unshift(c)}else(c=n(b))&&(o==="field"?i.unshift(c):d[a]=c)}l&&Object.defineProperty(l,r.name,d),p=!0},Bt=function(e,t,u){for(var r=arguments.length>2,i=0;i<t.length;i++)u=r?t[i].call(e,u):t[i].call(e);return r?u:void 0},wu=function(e,t,u){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:u?"".concat(u," ",t):t})};(()=>{var f,h,ci,Pu,_,Zt,Xn,li,g;let e=[J("a2ui-modal")],t,u=[],r,i=ee,s,n=[],o=[],a,l,d=[],c=[],p;return g=class extends i{constructor(){super(...arguments);T(this,h);T(this,f,Bt(this,n,!1));T(this,_,(Bt(this,o),Bt(this,d,null)));Bt(this,c)}render(){var S,N;return D(this,h,ci)?E`<dialog
      class=${q(this.theme.components.Modal.backdrop)}
      @click=${M=>{const[A]=M.composedPath();A instanceof HTMLDialogElement&&R(this,h,li).call(this)}}
      ${zc(M=>{requestAnimationFrame(()=>{!(M&&M instanceof HTMLDialogElement)||M.open||M.showModal()})})}
    >
      <section
        class=${q(this.theme.components.Modal.element)}
        style=${(S=this.theme.additionalStyles)!=null&&S.Modal?se((N=this.theme.additionalStyles)==null?void 0:N.Modal):P}
      >
        <div id="controls">
          <button
            @click=${()=>{R(this,h,li).call(this)}}
          >
            <span class="g-icon">close</span>
          </button>
        </div>
        <slot></slot>
      </section>
    </dialog>`:E`<section
        @click=${()=>{z(this,h,!0,Pu)}}
      >
        <slot name="entry"></slot>
      </section>`}},f=new WeakMap,h=new WeakSet,ci=function(){return a.get.call(this)},Pu=function(S){return a.set.call(this,S)},_=new WeakMap,Zt=function(){return p.get.call(this)},Xn=function(S){return p.set.call(this,S)},li=function(){D(this,h,Zt)&&(D(this,h,Zt).open&&D(this,h,Zt).close(),z(this,h,!1,Pu))},r=g,(()=>{const S=typeof Symbol=="function"&&Symbol.metadata?Object.create(i[Symbol.metadata]??null):void 0;s=[fn()],l=[Ca("dialog")],Tr(g,a={get:wu(function(){return D(this,f)},"#showModal","get"),set:wu(function(N){z(this,f,N)},"#showModal","set")},s,{kind:"accessor",name:"#showModal",static:!1,private:!0,access:{has:N=>vu(h,N),get:N=>D(N,h,ci),set:(N,M)=>{z(N,h,M,Pu)}},metadata:S},n,o),Tr(g,p={get:wu(function(){return D(this,_)},"#modalRef","get"),set:wu(function(N){z(this,_,N)},"#modalRef","set")},l,{kind:"accessor",name:"#modalRef",static:!1,private:!0,access:{has:N=>vu(h,N),get:N=>D(N,h,Zt),set:(N,M)=>{z(N,h,M,Xn)}},metadata:S},d,c),Tr(null,t={value:r},e,{kind:"class",name:r.name,metadata:S},null,u),r=t.value,S&&Object.defineProperty(r,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:S})})(),g.styles=[X,K`
      * {
        box-sizing: border-box;
      }

      dialog {
        padding: 0 0 0 0;
        border: none;
        background: none;

        & section {
          & #controls {
            display: flex;
            justify-content: end;
            margin-bottom: 4px;

            & button {
              padding: 0;
              background: none;
              width: 20px;
              height: 20px;
              pointer: cursor;
              border: none;
              cursor: pointer;
            }
          }
        }
      }
    `],Bt(r,u),r})();var Or=function(e,t,u,r,i,s){function n(_){if(_!==void 0&&typeof _!="function")throw new TypeError("Function expected");return _}for(var o=r.kind,a=o==="getter"?"get":o==="setter"?"set":"value",l=!t&&e?r.static?e:e.prototype:null,d=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),c,p=!1,f=u.length-1;f>=0;f--){var h={};for(var m in r)h[m]=m==="access"?{}:r[m];for(var m in r.access)h.access[m]=r.access[m];h.addInitializer=function(_){if(p)throw new TypeError("Cannot add initializers after decoration has completed");s.push(n(_||null))};var b=(0,u[f])(o==="accessor"?{get:d.get,set:d.set}:d[a],h);if(o==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(c=n(b.get))&&(d.get=c),(c=n(b.set))&&(d.set=c),(c=n(b.init))&&i.unshift(c)}else(c=n(b))&&(o==="field"?i.unshift(c):d[a]=c)}l&&Object.defineProperty(l,r.name,d),p=!0},Ut=function(e,t,u){for(var r=arguments.length>2,i=0;i<t.length;i++)u=r?t[i].call(e,u):t[i].call(e);return r?u:void 0};(()=>{var c,p,f;let e=[J("a2ui-row")],t,u=[],r,i=ee,s,n=[],o=[],a,l=[],d=[];return f=class extends i{constructor(){super(...arguments);T(this,c,Ut(this,n,"stretch"));T(this,p,(Ut(this,o),Ut(this,l,"start")));Ut(this,d)}get alignment(){return D(this,c)}set alignment(b){z(this,c,b)}get distribution(){return D(this,p)}set distribution(b){z(this,p,b)}render(){var b,_;return E`<section
      class=${q(this.theme.components.Row)}
      style=${(b=this.theme.additionalStyles)!=null&&b.Row?se((_=this.theme.additionalStyles)==null?void 0:_.Row):P}
    >
      <slot></slot>
    </section>`}},c=new WeakMap,p=new WeakMap,r=f,(()=>{const b=typeof Symbol=="function"&&Symbol.metadata?Object.create(i[Symbol.metadata]??null):void 0;s=[j({reflect:!0,type:String})],a=[j({reflect:!0,type:String})],Or(f,null,s,{kind:"accessor",name:"alignment",static:!1,private:!1,access:{has:_=>"alignment"in _,get:_=>_.alignment,set:(_,w)=>{_.alignment=w}},metadata:b},n,o),Or(f,null,a,{kind:"accessor",name:"distribution",static:!1,private:!1,access:{has:_=>"distribution"in _,get:_=>_.distribution,set:(_,w)=>{_.distribution=w}},metadata:b},l,d),Or(null,t={value:r},e,{kind:"class",name:r.name,metadata:b},null,u),r=t.value,b&&Object.defineProperty(r,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:b})})(),f.styles=[X,K`
      * {
        box-sizing: border-box;
      }

      :host {
        display: flex;
        flex: var(--weight);
      }

      section {
        display: flex;
        flex-direction: row;
        width: 100%;
        min-height: 100%;
      }

      :host([alignment="start"]) section {
        align-items: start;
      }

      :host([alignment="center"]) section {
        align-items: center;
      }

      :host([alignment="end"]) section {
        align-items: end;
      }

      :host([alignment="stretch"]) section {
        align-items: stretch;
      }

      :host([distribution="start"]) section {
        justify-content: start;
      }

      :host([distribution="center"]) section {
        justify-content: center;
      }

      :host([distribution="end"]) section {
        justify-content: end;
      }

      :host([distribution="spaceBetween"]) section {
        justify-content: space-between;
      }

      :host([distribution="spaceAround"]) section {
        justify-content: space-around;
      }

      :host([distribution="spaceEvenly"]) section {
        justify-content: space-evenly;
      }
    `],Ut(r,u),r})();var lt=function(e,t,u,r,i,s){function n(_){if(_!==void 0&&typeof _!="function")throw new TypeError("Function expected");return _}for(var o=r.kind,a=o==="getter"?"get":o==="setter"?"set":"value",l=!t&&e?r.static?e:e.prototype:null,d=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),c,p=!1,f=u.length-1;f>=0;f--){var h={};for(var m in r)h[m]=m==="access"?{}:r[m];for(var m in r.access)h.access[m]=r.access[m];h.addInitializer=function(_){if(p)throw new TypeError("Cannot add initializers after decoration has completed");s.push(n(_||null))};var b=(0,u[f])(o==="accessor"?{get:d.get,set:d.set}:d[a],h);if(o==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(c=n(b.get))&&(d.get=c),(c=n(b.set))&&(d.set=c),(c=n(b.init))&&i.unshift(c)}else(c=n(b))&&(o==="field"?i.unshift(c):d[a]=c)}l&&Object.defineProperty(l,r.name,d),p=!0},xe=function(e,t,u){for(var r=arguments.length>2,i=0;i<t.length;i++)u=r?t[i].call(e,u):t[i].call(e);return r?u:void 0};(()=>{var y,g,$,C,S,N,eo,zu,O;let e=[J("a2ui-slider")],t,u=[],r,i=ee,s,n=[],o=[],a,l=[],d=[],c,p=[],f=[],h,m=[],b=[],_,w=[],v=[];return O=class extends i{constructor(){super(...arguments);T(this,N);T(this,y,xe(this,n,null));T(this,g,(xe(this,o),xe(this,l,0)));T(this,$,(xe(this,d),xe(this,p,0)));T(this,C,(xe(this,f),xe(this,m,null)));T(this,S,(xe(this,b),xe(this,w,null)));xe(this,v)}get value(){return D(this,y)}set value(k){z(this,y,k)}get minValue(){return D(this,g)}set minValue(k){z(this,g,k)}get maxValue(){return D(this,$)}set maxValue(k){z(this,$,k)}get label(){return D(this,C)}set label(k){z(this,C,k)}get inputType(){return D(this,S)}set inputType(k){z(this,S,k)}render(){if(this.value&&typeof this.value=="object"){if("literalNumber"in this.value&&this.value.literalNumber)return R(this,N,zu).call(this,this.value.literalNumber);if("literal"in this.value&&this.value.literal!==void 0)return R(this,N,zu).call(this,this.value.literal);if(this.value&&"path"in this.value&&this.value.path){if(!this.processor||!this.component)return E`(no processor)`;const k=this.processor.getData(this.component,this.value.path,this.surfaceId??W.DEFAULT_SURFACE_ID);return k===null?E`Invalid value`:typeof k!="string"&&typeof k!="number"?E`Invalid value`:R(this,N,zu).call(this,k)}}return P}},y=new WeakMap,g=new WeakMap,$=new WeakMap,C=new WeakMap,S=new WeakMap,N=new WeakSet,eo=function(k){!this.value||!this.processor||"path"in this.value&&this.value.path&&this.processor.setData(this.component,this.value.path,k,this.surfaceId??W.DEFAULT_SURFACE_ID)},zu=function(k){var I,B,de;return E`<section
      class=${q(this.theme.components.Slider.container)}
    >
      <label class=${q(this.theme.components.Slider.label)} for="data">
        ${((I=this.label)==null?void 0:I.literalString)??""}
      </label>
      <input
        autocomplete="off"
        class=${q(this.theme.components.Slider.element)}
        style=${(B=this.theme.additionalStyles)!=null&&B.Slider?se((de=this.theme.additionalStyles)==null?void 0:de.Slider):P}
        @input=${ge=>{ge.target instanceof HTMLInputElement&&R(this,N,eo).call(this,ge.target.value)}}
        id="data"
        name="data"
        .value=${k}
        type="range"
        min=${this.minValue??"0"}
        max=${this.maxValue??"0"}
      />
      <span class=${q(this.theme.components.Slider.label)}
        >${this.value?Pc(this.value,this.component,this.processor,this.surfaceId):"0"}</span
      >
    </section>`},r=O,(()=>{const k=typeof Symbol=="function"&&Symbol.metadata?Object.create(i[Symbol.metadata]??null):void 0;s=[j()],a=[j()],c=[j()],h=[j()],_=[j()],lt(O,null,s,{kind:"accessor",name:"value",static:!1,private:!1,access:{has:I=>"value"in I,get:I=>I.value,set:(I,B)=>{I.value=B}},metadata:k},n,o),lt(O,null,a,{kind:"accessor",name:"minValue",static:!1,private:!1,access:{has:I=>"minValue"in I,get:I=>I.minValue,set:(I,B)=>{I.minValue=B}},metadata:k},l,d),lt(O,null,c,{kind:"accessor",name:"maxValue",static:!1,private:!1,access:{has:I=>"maxValue"in I,get:I=>I.maxValue,set:(I,B)=>{I.maxValue=B}},metadata:k},p,f),lt(O,null,h,{kind:"accessor",name:"label",static:!1,private:!1,access:{has:I=>"label"in I,get:I=>I.label,set:(I,B)=>{I.label=B}},metadata:k},m,b),lt(O,null,_,{kind:"accessor",name:"inputType",static:!1,private:!1,access:{has:I=>"inputType"in I,get:I=>I.inputType,set:(I,B)=>{I.inputType=B}},metadata:k},w,v),lt(null,t={value:r},e,{kind:"class",name:r.name,metadata:k},null,u),r=t.value,k&&Object.defineProperty(r,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:k})})(),O.styles=[X,K`
      * {
        box-sizing: border-box;
      }

      :host {
        display: block;
        flex: var(--weight);
      }

      input {
        display: block;
        width: 100%;
      }

      .description {
      }
    `],xe(r,u),r})();var qt=function(e,t,u,r,i,s){function n(_){if(_!==void 0&&typeof _!="function")throw new TypeError("Function expected");return _}for(var o=r.kind,a=o==="getter"?"get":o==="setter"?"set":"value",l=!t&&e?r.static?e:e.prototype:null,d=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),c,p=!1,f=u.length-1;f>=0;f--){var h={};for(var m in r)h[m]=m==="access"?{}:r[m];for(var m in r.access)h.access[m]=r.access[m];h.addInitializer=function(_){if(p)throw new TypeError("Cannot add initializers after decoration has completed");s.push(n(_||null))};var b=(0,u[f])(o==="accessor"?{get:d.get,set:d.set}:d[a],h);if(o==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(c=n(b.get))&&(d.get=c),(c=n(b.set))&&(d.set=c),(c=n(b.init))&&i.unshift(c)}else(c=n(b))&&(o==="field"?i.unshift(c):d[a]=c)}l&&Object.defineProperty(l,r.name,d),p=!0},Pe=function(e,t,u){for(var r=arguments.length>2,i=0;i<t.length;i++)u=r?t[i].call(e,u):t[i].call(e);return r?u:void 0};(()=>{var _,w,v,y,to,$,uo,S;let e=[J("a2ui-surface")],t,u=[],r,i=ee,s,n=[],o=[],a,l=[],d=[],c,p=[],f=[],h,m=[],b=[];return S=class extends i{constructor(){super(...arguments);T(this,y);T(this,_,Pe(this,n,null));T(this,w,(Pe(this,o),Pe(this,l,null)));T(this,v,(Pe(this,d),Pe(this,p,null)));T(this,$,(Pe(this,f),Pe(this,m,!1)));Pe(this,b)}get surfaceId(){return D(this,_)}set surfaceId(A){z(this,_,A)}get surface(){return D(this,w)}set surface(A){z(this,w,A)}get processor(){return D(this,v)}set processor(A){z(this,v,A)}get enableCustomElements(){return D(this,$)}set enableCustomElements(A){z(this,$,A)}render(){return this.surface?E`${[R(this,y,to).call(this),R(this,y,uo).call(this)]}`:P}},_=new WeakMap,w=new WeakMap,v=new WeakMap,y=new WeakSet,to=function(){var A;return(A=this.surface)!=null&&A.styles.logoUrl?E`<div id="surface-logo">
      <img src=${this.surface.styles.logoUrl} />
    </div>`:P},$=new WeakMap,uo=function(){var O,V;const A={};if((O=this.surface)!=null&&O.styles)for(const[_e,k]of Object.entries(this.surface.styles))switch(_e){case"primaryColor":{A["--p-100"]="#ffffff",A["--p-99"]=`color-mix(in srgb, ${k} 2%, white 98%)`,A["--p-98"]=`color-mix(in srgb, ${k} 4%, white 96%)`,A["--p-95"]=`color-mix(in srgb, ${k} 10%, white 90%)`,A["--p-90"]=`color-mix(in srgb, ${k} 20%, white 80%)`,A["--p-80"]=`color-mix(in srgb, ${k} 40%, white 60%)`,A["--p-70"]=`color-mix(in srgb, ${k} 60%, white 40%)`,A["--p-60"]=`color-mix(in srgb, ${k} 80%, white 20%)`,A["--p-50"]=k,A["--p-40"]=`color-mix(in srgb, ${k} 80%, black 20%)`,A["--p-35"]=`color-mix(in srgb, ${k} 70%, black 30%)`,A["--p-30"]=`color-mix(in srgb, ${k} 60%, black 40%)`,A["--p-25"]=`color-mix(in srgb, ${k} 50%, black 50%)`,A["--p-20"]=`color-mix(in srgb, ${k} 40%, black 60%)`,A["--p-15"]=`color-mix(in srgb, ${k} 30%, black 70%)`,A["--p-10"]=`color-mix(in srgb, ${k} 20%, black 80%)`,A["--p-5"]=`color-mix(in srgb, ${k} 10%, black 90%)`,A["--0"]="#00000";break}case"font":{A["--font-family"]=k,A["--font-family-flex"]=k;break}}return E`<a2ui-root
      style=${se(A)}
      .surfaceId=${this.surfaceId}
      .processor=${this.processor}
      .childComponents=${(V=this.surface)!=null&&V.componentTree?[this.surface.componentTree]:null}
      .enableCustomElements=${this.enableCustomElements}
    ></a2ui-root>`},r=S,(()=>{const A=typeof Symbol=="function"&&Symbol.metadata?Object.create(i[Symbol.metadata]??null):void 0;s=[j()],a=[j()],c=[j()],h=[j()],qt(S,null,s,{kind:"accessor",name:"surfaceId",static:!1,private:!1,access:{has:O=>"surfaceId"in O,get:O=>O.surfaceId,set:(O,V)=>{O.surfaceId=V}},metadata:A},n,o),qt(S,null,a,{kind:"accessor",name:"surface",static:!1,private:!1,access:{has:O=>"surface"in O,get:O=>O.surface,set:(O,V)=>{O.surface=V}},metadata:A},l,d),qt(S,null,c,{kind:"accessor",name:"processor",static:!1,private:!1,access:{has:O=>"processor"in O,get:O=>O.processor,set:(O,V)=>{O.processor=V}},metadata:A},p,f),qt(S,null,h,{kind:"accessor",name:"enableCustomElements",static:!1,private:!1,access:{has:O=>"enableCustomElements"in O,get:O=>O.enableCustomElements,set:(O,V)=>{O.enableCustomElements=V}},metadata:A},m,b),qt(null,t={value:r},e,{kind:"class",name:r.name,metadata:A},null,u),r=t.value,A&&Object.defineProperty(r,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:A})})(),S.styles=[K`
      :host {
        display: flex;
        min-height: 0;
        max-height: 100%;
        flex-direction: column;
        gap: 16px;
      }

      #surface-logo {
        display: flex;
        justify-content: center;

        & img {
          width: 50%;
          max-width: 220px;
        }
      }

      a2ui-root {
        flex: 1;
      }
    `],Pe(r,u),r})();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ps=(e,t,u)=>{const r=new Map;for(let i=t;i<=u;i++)r.set(e[i],i);return r},Nc=Tt(class extends Ot{constructor(e){if(super(e),e.type!==mu.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,u){let r;u===void 0?u=t:t!==void 0&&(r=t);const i=[],s=[];let n=0;for(const o of e)i[n]=r?r(o,n):n,s[n]=u(o,n),n++;return{values:s,keys:i}}render(e,t,u){return this.dt(e,t,u).values}update(e,[t,u,r]){const i=Ya(e),{values:s,keys:n}=this.dt(t,u,r);if(!Array.isArray(i))return this.ut=n,s;const o=this.ut??(this.ut=[]),a=[];let l,d,c=0,p=i.length-1,f=0,h=s.length-1;for(;c<=p&&f<=h;)if(i[c]===null)c++;else if(i[p]===null)p--;else if(o[c]===n[f])a[f]=Ke(i[c],s[f]),c++,f++;else if(o[p]===n[h])a[h]=Ke(i[p],s[h]),p--,h--;else if(o[c]===n[h])a[h]=Ke(i[c],s[h]),Nt(e,a[h+1],i[c]),c++,h--;else if(o[p]===n[f])a[f]=Ke(i[p],s[f]),Nt(e,i[c],i[p]),p--,f++;else if(l===void 0&&(l=ps(n,f,h),d=ps(o,c,p)),l.has(o[c]))if(l.has(o[p])){const m=d.get(n[f]),b=m!==void 0?i[m]:null;if(b===null){const _=Nt(e,i[c]);Ke(_,s[f]),a[f]=_}else a[f]=Ke(b,s[f]),Nt(e,i[c],b),i[m]=null;f++}else vr(i[p]),p--;else vr(i[c]),c++;for(;f<=h;){const m=Nt(e,a[h+1]);Ke(m,s[f]),a[f++]=m}for(;c<=p;){const m=i[c++];m!==null&&vr(m)}return this.ut=n,Qa(e,a),ve}});var Ir=function(e,t,u,r,i,s){function n(_){if(_!==void 0&&typeof _!="function")throw new TypeError("Function expected");return _}for(var o=r.kind,a=o==="getter"?"get":o==="setter"?"set":"value",l=!t&&e?r.static?e:e.prototype:null,d=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),c,p=!1,f=u.length-1;f>=0;f--){var h={};for(var m in r)h[m]=m==="access"?{}:r[m];for(var m in r.access)h.access[m]=r.access[m];h.addInitializer=function(_){if(p)throw new TypeError("Cannot add initializers after decoration has completed");s.push(n(_||null))};var b=(0,u[f])(o==="accessor"?{get:d.get,set:d.set}:d[a],h);if(o==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(c=n(b.get))&&(d.get=c),(c=n(b.set))&&(d.set=c),(c=n(b.init))&&i.unshift(c)}else(c=n(b))&&(o==="field"?i.unshift(c):d[a]=c)}l&&Object.defineProperty(l,r.name,d),p=!0},Ht=function(e,t,u){for(var r=arguments.length>2,i=0;i<t.length;i++)u=r?t[i].call(e,u):t[i].call(e);return r?u:void 0};(()=>{var c,p,f,ro,io,b;let e=[J("a2ui-tabs")],t,u=[],r,i=ee,s,n=[],o=[],a,l=[],d=[];return b=class extends i{constructor(){super(...arguments);T(this,f);T(this,c,Ht(this,n,null));T(this,p,(Ht(this,o),Ht(this,l,0)));Ht(this,d)}get titles(){return D(this,c)}set titles(v){z(this,c,v)}get selected(){return D(this,p)}set selected(v){z(this,p,v)}willUpdate(v){if(super.willUpdate(v),v.has("selected")){for(const g of this.children)g.removeAttribute("slot");const y=this.children[this.selected];if(!y)return;y.slot="current"}}render(){var v,y;return E`<section
      class=${q(this.theme.components.Tabs.container)}
      style=${(v=this.theme.additionalStyles)!=null&&v.Tabs?se((y=this.theme.additionalStyles)==null?void 0:y.Tabs):P}
    >
      ${[R(this,f,ro).call(this),R(this,f,io).call(this)]}
    </section>`}},c=new WeakMap,p=new WeakMap,f=new WeakSet,ro=function(){return this.titles?E`<div
      id="buttons"
      class=${q(this.theme.components.Tabs.element)}
    >
      ${Nc(this.titles,(v,y)=>{let g="";if("literalString"in v&&v.literalString)g=v.literalString;else if("literal"in v&&v.literal!==void 0)g=v.literal;else if(v&&"path"in v&&v.path){if(!this.processor||!this.component)return E`(no model)`;const C=this.processor.getData(this.component,v.path,this.surfaceId??W.DEFAULT_SURFACE_ID);if(typeof C!="string")return E`(invalid)`;g=C}let $;return this.selected===y?$=ki(this.theme.components.Tabs.controls.all,this.theme.components.Tabs.controls.selected):$={...this.theme.components.Tabs.controls.all},E`<button
          ?disabled=${this.selected===y}
          class=${q($)}
          @click=${()=>{this.selected=y}}
        >
          ${g}
        </button>`})}
    </div>`:P},io=function(){return E`<slot name="current"></slot>`},r=b,(()=>{const v=typeof Symbol=="function"&&Symbol.metadata?Object.create(i[Symbol.metadata]??null):void 0;s=[j()],a=[j()],Ir(b,null,s,{kind:"accessor",name:"titles",static:!1,private:!1,access:{has:y=>"titles"in y,get:y=>y.titles,set:(y,g)=>{y.titles=g}},metadata:v},n,o),Ir(b,null,a,{kind:"accessor",name:"selected",static:!1,private:!1,access:{has:y=>"selected"in y,get:y=>y.selected,set:(y,g)=>{y.selected=g}},metadata:v},l,d),Ir(null,t={value:r},e,{kind:"class",name:r.name,metadata:v},null,u),r=t.value,v&&Object.defineProperty(r,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:v})})(),b.styles=[X,K`
      :host {
        display: block;
        flex: var(--weight);
      }
    `],Ht(r,u),r})();var ku=function(e,t,u,r,i,s){function n(_){if(_!==void 0&&typeof _!="function")throw new TypeError("Function expected");return _}for(var o=r.kind,a=o==="getter"?"get":o==="setter"?"set":"value",l=!t&&e?r.static?e:e.prototype:null,d=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),c,p=!1,f=u.length-1;f>=0;f--){var h={};for(var m in r)h[m]=m==="access"?{}:r[m];for(var m in r.access)h.access[m]=r.access[m];h.addInitializer=function(_){if(p)throw new TypeError("Cannot add initializers after decoration has completed");s.push(n(_||null))};var b=(0,u[f])(o==="accessor"?{get:d.get,set:d.set}:d[a],h);if(o==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(c=n(b.get))&&(d.get=c),(c=n(b.set))&&(d.set=c),(c=n(b.init))&&i.unshift(c)}else(c=n(b))&&(o==="field"?i.unshift(c):d[a]=c)}l&&Object.defineProperty(l,r.name,d),p=!0},Qe=function(e,t,u){for(var r=arguments.length>2,i=0;i<t.length;i++)u=r?t[i].call(e,u):t[i].call(e);return r?u:void 0};(()=>{var h,m,b,_,so,no,y;let e=[J("a2ui-textfield")],t,u=[],r,i=ee,s,n=[],o=[],a,l=[],d=[],c,p=[],f=[];return y=class extends i{constructor(){super(...arguments);T(this,_);T(this,h,Qe(this,n,null));T(this,m,(Qe(this,o),Qe(this,l,null)));T(this,b,(Qe(this,d),Qe(this,p,null)));Qe(this,f)}get text(){return D(this,h)}set text(C){z(this,h,C)}get label(){return D(this,m)}set label(C){z(this,m,C)}get inputType(){return D(this,b)}set inputType(C){z(this,b,C)}render(){const C=oi(this.label,this.component,this.processor,this.surfaceId),S=oi(this.text,this.component,this.processor,this.surfaceId);return R(this,_,no).call(this,S,C)}},h=new WeakMap,m=new WeakMap,b=new WeakMap,_=new WeakSet,so=function(C){!this.text||!this.processor||"path"in this.text&&this.text.path&&this.processor.setData(this.component,this.text.path,C,this.surfaceId??W.DEFAULT_SURFACE_ID)},no=function(C,S){var N,M;return E` <section
      class=${q(this.theme.components.TextField.container)}
    >
      ${S&&S!==""?E`<label
            class=${q(this.theme.components.TextField.label)}
            for="data"
            >${S}</label
          >`:P}
      <input
        autocomplete="off"
        class=${q(this.theme.components.TextField.element)}
        style=${(N=this.theme.additionalStyles)!=null&&N.TextField?se((M=this.theme.additionalStyles)==null?void 0:M.TextField):P}
        @input=${A=>{A.target instanceof HTMLInputElement&&R(this,_,so).call(this,A.target.value)}}
        name="data"
        id="data"
        .value=${C}
        .placeholder=${"Please enter a value"}
        type=${this.inputType==="number"?"number":"text"}
      />
    </section>`},r=y,(()=>{const C=typeof Symbol=="function"&&Symbol.metadata?Object.create(i[Symbol.metadata]??null):void 0;s=[j()],a=[j()],c=[j()],ku(y,null,s,{kind:"accessor",name:"text",static:!1,private:!1,access:{has:S=>"text"in S,get:S=>S.text,set:(S,N)=>{S.text=N}},metadata:C},n,o),ku(y,null,a,{kind:"accessor",name:"label",static:!1,private:!1,access:{has:S=>"label"in S,get:S=>S.label,set:(S,N)=>{S.label=N}},metadata:C},l,d),ku(y,null,c,{kind:"accessor",name:"inputType",static:!1,private:!1,access:{has:S=>"inputType"in S,get:S=>S.inputType,set:(S,N)=>{S.inputType=N}},metadata:C},p,f),ku(null,t={value:r},e,{kind:"class",name:r.name,metadata:C},null,u),r=t.value,C&&Object.defineProperty(r,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:C})})(),y.styles=[X,K`
      * {
        box-sizing: border-box;
      }

      :host {
        display: flex;
        flex: var(--weight);
      }

      input {
        display: block;
        width: 100%;
      }

      label {
        display: block;
        margin-bottom: 4px;
      }
    `],Qe(r,u),r})();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let di=class extends Ot{constructor(t){if(super(t),this.it=P,t.type!==mu.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===P||t==null)return this._t=void 0,this.it=t;if(t===ve)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const u=[t];return u.raw=u,this._t={_$litType$:this.constructor.resultType,strings:u,values:[]}}};di.directiveName="unsafeHTML",di.resultType=1;const Rc=Tt(di),bs={};function Mc(e){let t=bs[e];if(t)return t;t=bs[e]=[];for(let u=0;u<128;u++){const r=String.fromCharCode(u);t.push(r)}for(let u=0;u<e.length;u++){const r=e.charCodeAt(u);t[r]="%"+("0"+r.toString(16).toUpperCase()).slice(-2)}return t}function wt(e,t){typeof t!="string"&&(t=wt.defaultChars);const u=Mc(t);return e.replace(/(%[a-f0-9]{2})+/gi,function(r){let i="";for(let s=0,n=r.length;s<n;s+=3){const o=parseInt(r.slice(s+1,s+3),16);if(o<128){i+=u[o];continue}if((o&224)===192&&s+3<n){const a=parseInt(r.slice(s+4,s+6),16);if((a&192)===128){const l=o<<6&1984|a&63;l<128?i+="��":i+=String.fromCharCode(l),s+=3;continue}}if((o&240)===224&&s+6<n){const a=parseInt(r.slice(s+4,s+6),16),l=parseInt(r.slice(s+7,s+9),16);if((a&192)===128&&(l&192)===128){const d=o<<12&61440|a<<6&4032|l&63;d<2048||d>=55296&&d<=57343?i+="���":i+=String.fromCharCode(d),s+=6;continue}}if((o&248)===240&&s+9<n){const a=parseInt(r.slice(s+4,s+6),16),l=parseInt(r.slice(s+7,s+9),16),d=parseInt(r.slice(s+10,s+12),16);if((a&192)===128&&(l&192)===128&&(d&192)===128){let c=o<<18&1835008|a<<12&258048|l<<6&4032|d&63;c<65536||c>1114111?i+="����":(c-=65536,i+=String.fromCharCode(55296+(c>>10),56320+(c&1023))),s+=9;continue}}i+="�"}return i})}wt.defaultChars=";/?:@&=+$,#";wt.componentChars="";const ms={};function jc(e){let t=ms[e];if(t)return t;t=ms[e]=[];for(let u=0;u<128;u++){const r=String.fromCharCode(u);/^[0-9a-z]$/i.test(r)?t.push(r):t.push("%"+("0"+u.toString(16).toUpperCase()).slice(-2))}for(let u=0;u<e.length;u++)t[e.charCodeAt(u)]=e[u];return t}function _u(e,t,u){typeof t!="string"&&(u=t,t=_u.defaultChars),typeof u>"u"&&(u=!0);const r=jc(t);let i="";for(let s=0,n=e.length;s<n;s++){const o=e.charCodeAt(s);if(u&&o===37&&s+2<n&&/^[0-9a-f]{2}$/i.test(e.slice(s+1,s+3))){i+=e.slice(s,s+3),s+=2;continue}if(o<128){i+=r[o];continue}if(o>=55296&&o<=57343){if(o>=55296&&o<=56319&&s+1<n){const a=e.charCodeAt(s+1);if(a>=56320&&a<=57343){i+=encodeURIComponent(e[s]+e[s+1]),s++;continue}}i+="%EF%BF%BD";continue}i+=encodeURIComponent(e[s])}return i}_u.defaultChars=";/?:@&=+$,-_.!~*'()#";_u.componentChars="-_.!~*'()";function Ei(e){let t="";return t+=e.protocol||"",t+=e.slashes?"//":"",t+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?t+="["+e.hostname+"]":t+=e.hostname||"",t+=e.port?":"+e.port:"",t+=e.pathname||"",t+=e.search||"",t+=e.hash||"",t}function Hu(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const Lc=/^([a-z0-9.+-]+:)/i,Bc=/:[0-9]*$/,Uc=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,qc=["<",">",'"',"`"," ","\r",`
`,"	"],Hc=["{","}","|","\\","^","`"].concat(qc),Vc=["'"].concat(Hc),_s=["%","/","?",";","#"].concat(Vc),gs=["/","?","#"],Wc=255,ys=/^[+a-z0-9A-Z_-]{0,63}$/,Zc=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,xs={javascript:!0,"javascript:":!0},vs={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function Ai(e,t){if(e&&e instanceof Hu)return e;const u=new Hu;return u.parse(e,t),u}Hu.prototype.parse=function(e,t){let u,r,i,s=e;if(s=s.trim(),!t&&e.split("#").length===1){const l=Uc.exec(s);if(l)return this.pathname=l[1],l[2]&&(this.search=l[2]),this}let n=Lc.exec(s);if(n&&(n=n[0],u=n.toLowerCase(),this.protocol=n,s=s.substr(n.length)),(t||n||s.match(/^\/\/[^@\/]+@[^@\/]+/))&&(i=s.substr(0,2)==="//",i&&!(n&&xs[n])&&(s=s.substr(2),this.slashes=!0)),!xs[n]&&(i||n&&!vs[n])){let l=-1;for(let h=0;h<gs.length;h++)r=s.indexOf(gs[h]),r!==-1&&(l===-1||r<l)&&(l=r);let d,c;l===-1?c=s.lastIndexOf("@"):c=s.lastIndexOf("@",l),c!==-1&&(d=s.slice(0,c),s=s.slice(c+1),this.auth=d),l=-1;for(let h=0;h<_s.length;h++)r=s.indexOf(_s[h]),r!==-1&&(l===-1||r<l)&&(l=r);l===-1&&(l=s.length),s[l-1]===":"&&l--;const p=s.slice(0,l);s=s.slice(l),this.parseHost(p),this.hostname=this.hostname||"";const f=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!f){const h=this.hostname.split(/\./);for(let m=0,b=h.length;m<b;m++){const _=h[m];if(_&&!_.match(ys)){let w="";for(let v=0,y=_.length;v<y;v++)_.charCodeAt(v)>127?w+="x":w+=_[v];if(!w.match(ys)){const v=h.slice(0,m),y=h.slice(m+1),g=_.match(Zc);g&&(v.push(g[1]),y.unshift(g[2])),y.length&&(s=y.join(".")+s),this.hostname=v.join(".");break}}}}this.hostname.length>Wc&&(this.hostname=""),f&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const o=s.indexOf("#");o!==-1&&(this.hash=s.substr(o),s=s.slice(0,o));const a=s.indexOf("?");return a!==-1&&(this.search=s.substr(a),s=s.slice(0,a)),s&&(this.pathname=s),vs[u]&&this.hostname&&!this.pathname&&(this.pathname=""),this};Hu.prototype.parseHost=function(e){let t=Bc.exec(e);t&&(t=t[0],t!==":"&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};const Gc=Object.freeze(Object.defineProperty({__proto__:null,decode:wt,encode:_u,format:Ei,parse:Ai},Symbol.toStringTag,{value:"Module"})),oo=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,ao=/[\0-\x1F\x7F-\x9F]/,Kc=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,Di=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,co=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,lo=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,Jc=Object.freeze(Object.defineProperty({__proto__:null,Any:oo,Cc:ao,Cf:Kc,P:Di,S:co,Z:lo},Symbol.toStringTag,{value:"Module"})),Qc=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),Yc=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(e=>e.charCodeAt(0)));var Pr;const Xc=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),el=(Pr=String.fromCodePoint)!==null&&Pr!==void 0?Pr:function(e){let t="";return e>65535&&(e-=65536,t+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),t+=String.fromCharCode(e),t};function tl(e){var t;return e>=55296&&e<=57343||e>1114111?65533:(t=Xc.get(e))!==null&&t!==void 0?t:e}var ie;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(ie||(ie={}));const ul=32;var qe;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(qe||(qe={}));function hi(e){return e>=ie.ZERO&&e<=ie.NINE}function rl(e){return e>=ie.UPPER_A&&e<=ie.UPPER_F||e>=ie.LOWER_A&&e<=ie.LOWER_F}function il(e){return e>=ie.UPPER_A&&e<=ie.UPPER_Z||e>=ie.LOWER_A&&e<=ie.LOWER_Z||hi(e)}function sl(e){return e===ie.EQUALS||il(e)}var ue;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(ue||(ue={}));var Le;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(Le||(Le={}));class nl{constructor(t,u,r){this.decodeTree=t,this.emitCodePoint=u,this.errors=r,this.state=ue.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=Le.Strict}startEntity(t){this.decodeMode=t,this.state=ue.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(t,u){switch(this.state){case ue.EntityStart:return t.charCodeAt(u)===ie.NUM?(this.state=ue.NumericStart,this.consumed+=1,this.stateNumericStart(t,u+1)):(this.state=ue.NamedEntity,this.stateNamedEntity(t,u));case ue.NumericStart:return this.stateNumericStart(t,u);case ue.NumericDecimal:return this.stateNumericDecimal(t,u);case ue.NumericHex:return this.stateNumericHex(t,u);case ue.NamedEntity:return this.stateNamedEntity(t,u)}}stateNumericStart(t,u){return u>=t.length?-1:(t.charCodeAt(u)|ul)===ie.LOWER_X?(this.state=ue.NumericHex,this.consumed+=1,this.stateNumericHex(t,u+1)):(this.state=ue.NumericDecimal,this.stateNumericDecimal(t,u))}addToNumericResult(t,u,r,i){if(u!==r){const s=r-u;this.result=this.result*Math.pow(i,s)+parseInt(t.substr(u,s),i),this.consumed+=s}}stateNumericHex(t,u){const r=u;for(;u<t.length;){const i=t.charCodeAt(u);if(hi(i)||rl(i))u+=1;else return this.addToNumericResult(t,r,u,16),this.emitNumericEntity(i,3)}return this.addToNumericResult(t,r,u,16),-1}stateNumericDecimal(t,u){const r=u;for(;u<t.length;){const i=t.charCodeAt(u);if(hi(i))u+=1;else return this.addToNumericResult(t,r,u,10),this.emitNumericEntity(i,2)}return this.addToNumericResult(t,r,u,10),-1}emitNumericEntity(t,u){var r;if(this.consumed<=u)return(r=this.errors)===null||r===void 0||r.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(t===ie.SEMI)this.consumed+=1;else if(this.decodeMode===Le.Strict)return 0;return this.emitCodePoint(tl(this.result),this.consumed),this.errors&&(t!==ie.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(t,u){const{decodeTree:r}=this;let i=r[this.treeIndex],s=(i&qe.VALUE_LENGTH)>>14;for(;u<t.length;u++,this.excess++){const n=t.charCodeAt(u);if(this.treeIndex=ol(r,i,this.treeIndex+Math.max(1,s),n),this.treeIndex<0)return this.result===0||this.decodeMode===Le.Attribute&&(s===0||sl(n))?0:this.emitNotTerminatedNamedEntity();if(i=r[this.treeIndex],s=(i&qe.VALUE_LENGTH)>>14,s!==0){if(n===ie.SEMI)return this.emitNamedEntityData(this.treeIndex,s,this.consumed+this.excess);this.decodeMode!==Le.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var t;const{result:u,decodeTree:r}=this,i=(r[u]&qe.VALUE_LENGTH)>>14;return this.emitNamedEntityData(u,i,this.consumed),(t=this.errors)===null||t===void 0||t.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(t,u,r){const{decodeTree:i}=this;return this.emitCodePoint(u===1?i[t]&~qe.VALUE_LENGTH:i[t+1],r),u===3&&this.emitCodePoint(i[t+2],r),r}end(){var t;switch(this.state){case ue.NamedEntity:return this.result!==0&&(this.decodeMode!==Le.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case ue.NumericDecimal:return this.emitNumericEntity(0,2);case ue.NumericHex:return this.emitNumericEntity(0,3);case ue.NumericStart:return(t=this.errors)===null||t===void 0||t.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case ue.EntityStart:return 0}}}function ho(e){let t="";const u=new nl(e,r=>t+=el(r));return function(i,s){let n=0,o=0;for(;(o=i.indexOf("&",o))>=0;){t+=i.slice(n,o),u.startEntity(s);const l=u.write(i,o+1);if(l<0){n=o+u.end();break}n=o+l,o=l===0?n+1:n}const a=t+i.slice(n);return t="",a}}function ol(e,t,u,r){const i=(t&qe.BRANCH_LENGTH)>>7,s=t&qe.JUMP_TABLE;if(i===0)return s!==0&&r===s?u:-1;if(s){const a=r-s;return a<0||a>=i?-1:e[u+a]-1}let n=u,o=n+i-1;for(;n<=o;){const a=n+o>>>1,l=e[a];if(l<r)n=a+1;else if(l>r)o=a-1;else return e[a+i]}return-1}const al=ho(Qc);ho(Yc);function fo(e,t=Le.Legacy){return al(e,t)}function cl(e){return Object.prototype.toString.call(e)}function Si(e){return cl(e)==="[object String]"}const ll=Object.prototype.hasOwnProperty;function dl(e,t){return ll.call(e,t)}function ur(e){return Array.prototype.slice.call(arguments,1).forEach(function(u){if(u){if(typeof u!="object")throw new TypeError(u+"must be object");Object.keys(u).forEach(function(r){e[r]=u[r]})}}),e}function po(e,t,u){return[].concat(e.slice(0,t),u,e.slice(t+1))}function Fi(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function Vu(e){if(e>65535){e-=65536;const t=55296+(e>>10),u=56320+(e&1023);return String.fromCharCode(t,u)}return String.fromCharCode(e)}const bo=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,hl=/&([a-z#][a-z0-9]{1,31});/gi,fl=new RegExp(bo.source+"|"+hl.source,"gi"),pl=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function bl(e,t){if(t.charCodeAt(0)===35&&pl.test(t)){const r=t[1].toLowerCase()==="x"?parseInt(t.slice(2),16):parseInt(t.slice(1),10);return Fi(r)?Vu(r):e}const u=fo(e);return u!==e?u:e}function ml(e){return e.indexOf("\\")<0?e:e.replace(bo,"$1")}function kt(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(fl,function(t,u,r){return u||bl(t,r)})}const _l=/[&<>"]/,gl=/[&<>"]/g,yl={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function xl(e){return yl[e]}function Ze(e){return _l.test(e)?e.replace(gl,xl):e}const vl=/[.?*+^$[\]\\(){}|-]/g;function $l(e){return e.replace(vl,"\\$&")}function H(e){switch(e){case 9:case 32:return!0}return!1}function nu(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function ou(e){return Di.test(e)||co.test(e)}function au(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function rr(e){return e=e.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(e=e.replace(/ẞ/g,"ß")),e.toLowerCase().toUpperCase()}const Cl={mdurl:Gc,ucmicro:Jc},wl=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:po,assign:ur,escapeHtml:Ze,escapeRE:$l,fromCodePoint:Vu,has:dl,isMdAsciiPunct:au,isPunctChar:ou,isSpace:H,isString:Si,isValidEntityCode:Fi,isWhiteSpace:nu,lib:Cl,normalizeReference:rr,unescapeAll:kt,unescapeMd:ml},Symbol.toStringTag,{value:"Module"}));function kl(e,t,u){let r,i,s,n;const o=e.posMax,a=e.pos;for(e.pos=t+1,r=1;e.pos<o;){if(s=e.src.charCodeAt(e.pos),s===93&&(r--,r===0)){i=!0;break}if(n=e.pos,e.md.inline.skipToken(e),s===91){if(n===e.pos-1)r++;else if(u)return e.pos=a,-1}}let l=-1;return i&&(l=e.pos),e.pos=a,l}function El(e,t,u){let r,i=t;const s={ok:!1,pos:0,str:""};if(e.charCodeAt(i)===60){for(i++;i<u;){if(r=e.charCodeAt(i),r===10||r===60)return s;if(r===62)return s.pos=i+1,s.str=kt(e.slice(t+1,i)),s.ok=!0,s;if(r===92&&i+1<u){i+=2;continue}i++}return s}let n=0;for(;i<u&&(r=e.charCodeAt(i),!(r===32||r<32||r===127));){if(r===92&&i+1<u){if(e.charCodeAt(i+1)===32)break;i+=2;continue}if(r===40&&(n++,n>32))return s;if(r===41){if(n===0)break;n--}i++}return t===i||n!==0||(s.str=kt(e.slice(t,i)),s.pos=i,s.ok=!0),s}function Al(e,t,u,r){let i,s=t;const n={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(r)n.str=r.str,n.marker=r.marker;else{if(s>=u)return n;let o=e.charCodeAt(s);if(o!==34&&o!==39&&o!==40)return n;t++,s++,o===40&&(o=41),n.marker=o}for(;s<u;){if(i=e.charCodeAt(s),i===n.marker)return n.pos=s+1,n.str+=kt(e.slice(t,s)),n.ok=!0,n;if(i===40&&n.marker===41)return n;i===92&&s+1<u&&s++,s++}return n.can_continue=!0,n.str+=kt(e.slice(t,s)),n}const Dl=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:El,parseLinkLabel:kl,parseLinkTitle:Al},Symbol.toStringTag,{value:"Module"})),Se={};Se.code_inline=function(e,t,u,r,i){const s=e[t];return"<code"+i.renderAttrs(s)+">"+Ze(s.content)+"</code>"};Se.code_block=function(e,t,u,r,i){const s=e[t];return"<pre"+i.renderAttrs(s)+"><code>"+Ze(e[t].content)+`</code></pre>
`};Se.fence=function(e,t,u,r,i){const s=e[t],n=s.info?kt(s.info).trim():"";let o="",a="";if(n){const d=n.split(/(\s+)/g);o=d[0],a=d.slice(2).join("")}let l;if(u.highlight?l=u.highlight(s.content,o,a)||Ze(s.content):l=Ze(s.content),l.indexOf("<pre")===0)return l+`
`;if(n){const d=s.attrIndex("class"),c=s.attrs?s.attrs.slice():[];d<0?c.push(["class",u.langPrefix+o]):(c[d]=c[d].slice(),c[d][1]+=" "+u.langPrefix+o);const p={attrs:c};return`<pre><code${i.renderAttrs(p)}>${l}</code></pre>
`}return`<pre><code${i.renderAttrs(s)}>${l}</code></pre>
`};Se.image=function(e,t,u,r,i){const s=e[t];return s.attrs[s.attrIndex("alt")][1]=i.renderInlineAsText(s.children,u,r),i.renderToken(e,t,u)};Se.hardbreak=function(e,t,u){return u.xhtmlOut?`<br />
`:`<br>
`};Se.softbreak=function(e,t,u){return u.breaks?u.xhtmlOut?`<br />
`:`<br>
`:`
`};Se.text=function(e,t){return Ze(e[t].content)};Se.html_block=function(e,t){return e[t].content};Se.html_inline=function(e,t){return e[t].content};function It(){this.rules=ur({},Se)}It.prototype.renderAttrs=function(t){let u,r,i;if(!t.attrs)return"";for(i="",u=0,r=t.attrs.length;u<r;u++)i+=" "+Ze(t.attrs[u][0])+'="'+Ze(t.attrs[u][1])+'"';return i};It.prototype.renderToken=function(t,u,r){const i=t[u];let s="";if(i.hidden)return"";i.block&&i.nesting!==-1&&u&&t[u-1].hidden&&(s+=`
`),s+=(i.nesting===-1?"</":"<")+i.tag,s+=this.renderAttrs(i),i.nesting===0&&r.xhtmlOut&&(s+=" /");let n=!1;if(i.block&&(n=!0,i.nesting===1&&u+1<t.length)){const o=t[u+1];(o.type==="inline"||o.hidden||o.nesting===-1&&o.tag===i.tag)&&(n=!1)}return s+=n?`>
`:">",s};It.prototype.renderInline=function(e,t,u){let r="";const i=this.rules;for(let s=0,n=e.length;s<n;s++){const o=e[s].type;typeof i[o]<"u"?r+=i[o](e,s,t,u,this):r+=this.renderToken(e,s,t)}return r};It.prototype.renderInlineAsText=function(e,t,u){let r="";for(let i=0,s=e.length;i<s;i++)switch(e[i].type){case"text":r+=e[i].content;break;case"image":r+=this.renderInlineAsText(e[i].children,t,u);break;case"html_inline":case"html_block":r+=e[i].content;break;case"softbreak":case"hardbreak":r+=`
`;break}return r};It.prototype.render=function(e,t,u){let r="";const i=this.rules;for(let s=0,n=e.length;s<n;s++){const o=e[s].type;o==="inline"?r+=this.renderInline(e[s].children,t,u):typeof i[o]<"u"?r+=i[o](e,s,t,u,this):r+=this.renderToken(e,s,t,u)}return r};function pe(){this.__rules__=[],this.__cache__=null}pe.prototype.__find__=function(e){for(let t=0;t<this.__rules__.length;t++)if(this.__rules__[t].name===e)return t;return-1};pe.prototype.__compile__=function(){const e=this,t=[""];e.__rules__.forEach(function(u){u.enabled&&u.alt.forEach(function(r){t.indexOf(r)<0&&t.push(r)})}),e.__cache__={},t.forEach(function(u){e.__cache__[u]=[],e.__rules__.forEach(function(r){r.enabled&&(u&&r.alt.indexOf(u)<0||e.__cache__[u].push(r.fn))})})};pe.prototype.at=function(e,t,u){const r=this.__find__(e),i=u||{};if(r===-1)throw new Error("Parser rule not found: "+e);this.__rules__[r].fn=t,this.__rules__[r].alt=i.alt||[],this.__cache__=null};pe.prototype.before=function(e,t,u,r){const i=this.__find__(e),s=r||{};if(i===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(i,0,{name:t,enabled:!0,fn:u,alt:s.alt||[]}),this.__cache__=null};pe.prototype.after=function(e,t,u,r){const i=this.__find__(e),s=r||{};if(i===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(i+1,0,{name:t,enabled:!0,fn:u,alt:s.alt||[]}),this.__cache__=null};pe.prototype.push=function(e,t,u){const r=u||{};this.__rules__.push({name:e,enabled:!0,fn:t,alt:r.alt||[]}),this.__cache__=null};pe.prototype.enable=function(e,t){Array.isArray(e)||(e=[e]);const u=[];return e.forEach(function(r){const i=this.__find__(r);if(i<0){if(t)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[i].enabled=!0,u.push(r)},this),this.__cache__=null,u};pe.prototype.enableOnly=function(e,t){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(u){u.enabled=!1}),this.enable(e,t)};pe.prototype.disable=function(e,t){Array.isArray(e)||(e=[e]);const u=[];return e.forEach(function(r){const i=this.__find__(r);if(i<0){if(t)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[i].enabled=!1,u.push(r)},this),this.__cache__=null,u};pe.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function Ce(e,t,u){this.type=e,this.tag=t,this.attrs=null,this.map=null,this.nesting=u,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}Ce.prototype.attrIndex=function(t){if(!this.attrs)return-1;const u=this.attrs;for(let r=0,i=u.length;r<i;r++)if(u[r][0]===t)return r;return-1};Ce.prototype.attrPush=function(t){this.attrs?this.attrs.push(t):this.attrs=[t]};Ce.prototype.attrSet=function(t,u){const r=this.attrIndex(t),i=[t,u];r<0?this.attrPush(i):this.attrs[r]=i};Ce.prototype.attrGet=function(t){const u=this.attrIndex(t);let r=null;return u>=0&&(r=this.attrs[u][1]),r};Ce.prototype.attrJoin=function(t,u){const r=this.attrIndex(t);r<0?this.attrPush([t,u]):this.attrs[r][1]=this.attrs[r][1]+" "+u};function mo(e,t,u){this.src=e,this.env=u,this.tokens=[],this.inlineMode=!1,this.md=t}mo.prototype.Token=Ce;const Sl=/\r\n?|\n/g,Fl=/\0/g;function Tl(e){let t;t=e.src.replace(Sl,`
`),t=t.replace(Fl,"�"),e.src=t}function Ol(e){let t;e.inlineMode?(t=new e.Token("inline","",0),t.content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function Il(e){const t=e.tokens;for(let u=0,r=t.length;u<r;u++){const i=t[u];i.type==="inline"&&e.md.inline.parse(i.content,e.md,e.env,i.children)}}function Pl(e){return/^<a[>\s]/i.test(e)}function zl(e){return/^<\/a\s*>/i.test(e)}function Nl(e){const t=e.tokens;if(e.md.options.linkify)for(let u=0,r=t.length;u<r;u++){if(t[u].type!=="inline"||!e.md.linkify.pretest(t[u].content))continue;let i=t[u].children,s=0;for(let n=i.length-1;n>=0;n--){const o=i[n];if(o.type==="link_close"){for(n--;i[n].level!==o.level&&i[n].type!=="link_open";)n--;continue}if(o.type==="html_inline"&&(Pl(o.content)&&s>0&&s--,zl(o.content)&&s++),!(s>0)&&o.type==="text"&&e.md.linkify.test(o.content)){const a=o.content;let l=e.md.linkify.match(a);const d=[];let c=o.level,p=0;l.length>0&&l[0].index===0&&n>0&&i[n-1].type==="text_special"&&(l=l.slice(1));for(let f=0;f<l.length;f++){const h=l[f].url,m=e.md.normalizeLink(h);if(!e.md.validateLink(m))continue;let b=l[f].text;l[f].schema?l[f].schema==="mailto:"&&!/^mailto:/i.test(b)?b=e.md.normalizeLinkText("mailto:"+b).replace(/^mailto:/,""):b=e.md.normalizeLinkText(b):b=e.md.normalizeLinkText("http://"+b).replace(/^http:\/\//,"");const _=l[f].index;if(_>p){const g=new e.Token("text","",0);g.content=a.slice(p,_),g.level=c,d.push(g)}const w=new e.Token("link_open","a",1);w.attrs=[["href",m]],w.level=c++,w.markup="linkify",w.info="auto",d.push(w);const v=new e.Token("text","",0);v.content=b,v.level=c,d.push(v);const y=new e.Token("link_close","a",-1);y.level=--c,y.markup="linkify",y.info="auto",d.push(y),p=l[f].lastIndex}if(p<a.length){const f=new e.Token("text","",0);f.content=a.slice(p),f.level=c,d.push(f)}t[u].children=i=po(i,n,d)}}}}const _o=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,Rl=/\((c|tm|r)\)/i,Ml=/\((c|tm|r)\)/ig,jl={c:"©",r:"®",tm:"™"};function Ll(e,t){return jl[t.toLowerCase()]}function Bl(e){let t=0;for(let u=e.length-1;u>=0;u--){const r=e[u];r.type==="text"&&!t&&(r.content=r.content.replace(Ml,Ll)),r.type==="link_open"&&r.info==="auto"&&t--,r.type==="link_close"&&r.info==="auto"&&t++}}function Ul(e){let t=0;for(let u=e.length-1;u>=0;u--){const r=e[u];r.type==="text"&&!t&&_o.test(r.content)&&(r.content=r.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),r.type==="link_open"&&r.info==="auto"&&t--,r.type==="link_close"&&r.info==="auto"&&t++}}function ql(e){let t;if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type==="inline"&&(Rl.test(e.tokens[t].content)&&Bl(e.tokens[t].children),_o.test(e.tokens[t].content)&&Ul(e.tokens[t].children))}const Hl=/['"]/,$s=/['"]/g,Cs="’";function Eu(e,t,u){return e.slice(0,t)+u+e.slice(t+1)}function Vl(e,t){let u;const r=[];for(let i=0;i<e.length;i++){const s=e[i],n=e[i].level;for(u=r.length-1;u>=0&&!(r[u].level<=n);u--);if(r.length=u+1,s.type!=="text")continue;let o=s.content,a=0,l=o.length;e:for(;a<l;){$s.lastIndex=a;const d=$s.exec(o);if(!d)break;let c=!0,p=!0;a=d.index+1;const f=d[0]==="'";let h=32;if(d.index-1>=0)h=o.charCodeAt(d.index-1);else for(u=i-1;u>=0&&!(e[u].type==="softbreak"||e[u].type==="hardbreak");u--)if(e[u].content){h=e[u].content.charCodeAt(e[u].content.length-1);break}let m=32;if(a<l)m=o.charCodeAt(a);else for(u=i+1;u<e.length&&!(e[u].type==="softbreak"||e[u].type==="hardbreak");u++)if(e[u].content){m=e[u].content.charCodeAt(0);break}const b=au(h)||ou(String.fromCharCode(h)),_=au(m)||ou(String.fromCharCode(m)),w=nu(h),v=nu(m);if(v?c=!1:_&&(w||b||(c=!1)),w?p=!1:b&&(v||_||(p=!1)),m===34&&d[0]==='"'&&h>=48&&h<=57&&(p=c=!1),c&&p&&(c=b,p=_),!c&&!p){f&&(s.content=Eu(s.content,d.index,Cs));continue}if(p)for(u=r.length-1;u>=0;u--){let y=r[u];if(r[u].level<n)break;if(y.single===f&&r[u].level===n){y=r[u];let g,$;f?(g=t.md.options.quotes[2],$=t.md.options.quotes[3]):(g=t.md.options.quotes[0],$=t.md.options.quotes[1]),s.content=Eu(s.content,d.index,$),e[y.token].content=Eu(e[y.token].content,y.pos,g),a+=$.length-1,y.token===i&&(a+=g.length-1),o=s.content,l=o.length,r.length=u;continue e}}c?r.push({token:i,pos:d.index,single:f,level:n}):p&&f&&(s.content=Eu(s.content,d.index,Cs))}}}function Wl(e){if(e.md.options.typographer)for(let t=e.tokens.length-1;t>=0;t--)e.tokens[t].type!=="inline"||!Hl.test(e.tokens[t].content)||Vl(e.tokens[t].children,e)}function Zl(e){let t,u;const r=e.tokens,i=r.length;for(let s=0;s<i;s++){if(r[s].type!=="inline")continue;const n=r[s].children,o=n.length;for(t=0;t<o;t++)n[t].type==="text_special"&&(n[t].type="text");for(t=u=0;t<o;t++)n[t].type==="text"&&t+1<o&&n[t+1].type==="text"?n[t+1].content=n[t].content+n[t+1].content:(t!==u&&(n[u]=n[t]),u++);t!==u&&(n.length=u)}}const zr=[["normalize",Tl],["block",Ol],["inline",Il],["linkify",Nl],["replacements",ql],["smartquotes",Wl],["text_join",Zl]];function Ti(){this.ruler=new pe;for(let e=0;e<zr.length;e++)this.ruler.push(zr[e][0],zr[e][1])}Ti.prototype.process=function(e){const t=this.ruler.getRules("");for(let u=0,r=t.length;u<r;u++)t[u](e)};Ti.prototype.State=mo;function Fe(e,t,u,r){this.src=e,this.md=t,this.env=u,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const i=this.src;for(let s=0,n=0,o=0,a=0,l=i.length,d=!1;n<l;n++){const c=i.charCodeAt(n);if(!d)if(H(c)){o++,c===9?a+=4-a%4:a++;continue}else d=!0;(c===10||n===l-1)&&(c!==10&&n++,this.bMarks.push(s),this.eMarks.push(n),this.tShift.push(o),this.sCount.push(a),this.bsCount.push(0),d=!1,o=0,a=0,s=n+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}Fe.prototype.push=function(e,t,u){const r=new Ce(e,t,u);return r.block=!0,u<0&&this.level--,r.level=this.level,u>0&&this.level++,this.tokens.push(r),r};Fe.prototype.isEmpty=function(t){return this.bMarks[t]+this.tShift[t]>=this.eMarks[t]};Fe.prototype.skipEmptyLines=function(t){for(let u=this.lineMax;t<u&&!(this.bMarks[t]+this.tShift[t]<this.eMarks[t]);t++);return t};Fe.prototype.skipSpaces=function(t){for(let u=this.src.length;t<u;t++){const r=this.src.charCodeAt(t);if(!H(r))break}return t};Fe.prototype.skipSpacesBack=function(t,u){if(t<=u)return t;for(;t>u;)if(!H(this.src.charCodeAt(--t)))return t+1;return t};Fe.prototype.skipChars=function(t,u){for(let r=this.src.length;t<r&&this.src.charCodeAt(t)===u;t++);return t};Fe.prototype.skipCharsBack=function(t,u,r){if(t<=r)return t;for(;t>r;)if(u!==this.src.charCodeAt(--t))return t+1;return t};Fe.prototype.getLines=function(t,u,r,i){if(t>=u)return"";const s=new Array(u-t);for(let n=0,o=t;o<u;o++,n++){let a=0;const l=this.bMarks[o];let d=l,c;for(o+1<u||i?c=this.eMarks[o]+1:c=this.eMarks[o];d<c&&a<r;){const p=this.src.charCodeAt(d);if(H(p))p===9?a+=4-(a+this.bsCount[o])%4:a++;else if(d-l<this.tShift[o])a++;else break;d++}a>r?s[n]=new Array(a-r+1).join(" ")+this.src.slice(d,c):s[n]=this.src.slice(d,c)}return s.join("")};Fe.prototype.Token=Ce;const Gl=65536;function Nr(e,t){const u=e.bMarks[t]+e.tShift[t],r=e.eMarks[t];return e.src.slice(u,r)}function ws(e){const t=[],u=e.length;let r=0,i=e.charCodeAt(r),s=!1,n=0,o="";for(;r<u;)i===124&&(s?(o+=e.substring(n,r-1),n=r):(t.push(o+e.substring(n,r)),o="",n=r+1)),s=i===92,r++,i=e.charCodeAt(r);return t.push(o+e.substring(n)),t}function Kl(e,t,u,r){if(t+2>u)return!1;let i=t+1;if(e.sCount[i]<e.blkIndent||e.sCount[i]-e.blkIndent>=4)return!1;let s=e.bMarks[i]+e.tShift[i];if(s>=e.eMarks[i])return!1;const n=e.src.charCodeAt(s++);if(n!==124&&n!==45&&n!==58||s>=e.eMarks[i])return!1;const o=e.src.charCodeAt(s++);if(o!==124&&o!==45&&o!==58&&!H(o)||n===45&&H(o))return!1;for(;s<e.eMarks[i];){const y=e.src.charCodeAt(s);if(y!==124&&y!==45&&y!==58&&!H(y))return!1;s++}let a=Nr(e,t+1),l=a.split("|");const d=[];for(let y=0;y<l.length;y++){const g=l[y].trim();if(!g){if(y===0||y===l.length-1)continue;return!1}if(!/^:?-+:?$/.test(g))return!1;g.charCodeAt(g.length-1)===58?d.push(g.charCodeAt(0)===58?"center":"right"):g.charCodeAt(0)===58?d.push("left"):d.push("")}if(a=Nr(e,t).trim(),a.indexOf("|")===-1||e.sCount[t]-e.blkIndent>=4)return!1;l=ws(a),l.length&&l[0]===""&&l.shift(),l.length&&l[l.length-1]===""&&l.pop();const c=l.length;if(c===0||c!==d.length)return!1;if(r)return!0;const p=e.parentType;e.parentType="table";const f=e.md.block.ruler.getRules("blockquote"),h=e.push("table_open","table",1),m=[t,0];h.map=m;const b=e.push("thead_open","thead",1);b.map=[t,t+1];const _=e.push("tr_open","tr",1);_.map=[t,t+1];for(let y=0;y<l.length;y++){const g=e.push("th_open","th",1);d[y]&&(g.attrs=[["style","text-align:"+d[y]]]);const $=e.push("inline","",0);$.content=l[y].trim(),$.children=[],e.push("th_close","th",-1)}e.push("tr_close","tr",-1),e.push("thead_close","thead",-1);let w,v=0;for(i=t+2;i<u&&!(e.sCount[i]<e.blkIndent);i++){let y=!1;for(let $=0,C=f.length;$<C;$++)if(f[$](e,i,u,!0)){y=!0;break}if(y||(a=Nr(e,i).trim(),!a)||e.sCount[i]-e.blkIndent>=4||(l=ws(a),l.length&&l[0]===""&&l.shift(),l.length&&l[l.length-1]===""&&l.pop(),v+=c-l.length,v>Gl))break;if(i===t+2){const $=e.push("tbody_open","tbody",1);$.map=w=[t+2,0]}const g=e.push("tr_open","tr",1);g.map=[i,i+1];for(let $=0;$<c;$++){const C=e.push("td_open","td",1);d[$]&&(C.attrs=[["style","text-align:"+d[$]]]);const S=e.push("inline","",0);S.content=l[$]?l[$].trim():"",S.children=[],e.push("td_close","td",-1)}e.push("tr_close","tr",-1)}return w&&(e.push("tbody_close","tbody",-1),w[1]=i),e.push("table_close","table",-1),m[1]=i,e.parentType=p,e.line=i,!0}function Jl(e,t,u){if(e.sCount[t]-e.blkIndent<4)return!1;let r=t+1,i=r;for(;r<u;){if(e.isEmpty(r)){r++;continue}if(e.sCount[r]-e.blkIndent>=4){r++,i=r;continue}break}e.line=i;const s=e.push("code_block","code",0);return s.content=e.getLines(t,i,4+e.blkIndent,!1)+`
`,s.map=[t,e.line],!0}function Ql(e,t,u,r){let i=e.bMarks[t]+e.tShift[t],s=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||i+3>s)return!1;const n=e.src.charCodeAt(i);if(n!==126&&n!==96)return!1;let o=i;i=e.skipChars(i,n);let a=i-o;if(a<3)return!1;const l=e.src.slice(o,i),d=e.src.slice(i,s);if(n===96&&d.indexOf(String.fromCharCode(n))>=0)return!1;if(r)return!0;let c=t,p=!1;for(;c++,!(c>=u||(i=o=e.bMarks[c]+e.tShift[c],s=e.eMarks[c],i<s&&e.sCount[c]<e.blkIndent));)if(e.src.charCodeAt(i)===n&&!(e.sCount[c]-e.blkIndent>=4)&&(i=e.skipChars(i,n),!(i-o<a)&&(i=e.skipSpaces(i),!(i<s)))){p=!0;break}a=e.sCount[t],e.line=c+(p?1:0);const f=e.push("fence","code",0);return f.info=d,f.content=e.getLines(t+1,c,a,!0),f.markup=l,f.map=[t,e.line],!0}function Yl(e,t,u,r){let i=e.bMarks[t]+e.tShift[t],s=e.eMarks[t];const n=e.lineMax;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==62)return!1;if(r)return!0;const o=[],a=[],l=[],d=[],c=e.md.block.ruler.getRules("blockquote"),p=e.parentType;e.parentType="blockquote";let f=!1,h;for(h=t;h<u;h++){const v=e.sCount[h]<e.blkIndent;if(i=e.bMarks[h]+e.tShift[h],s=e.eMarks[h],i>=s)break;if(e.src.charCodeAt(i++)===62&&!v){let g=e.sCount[h]+1,$,C;e.src.charCodeAt(i)===32?(i++,g++,C=!1,$=!0):e.src.charCodeAt(i)===9?($=!0,(e.bsCount[h]+g)%4===3?(i++,g++,C=!1):C=!0):$=!1;let S=g;for(o.push(e.bMarks[h]),e.bMarks[h]=i;i<s;){const N=e.src.charCodeAt(i);if(H(N))N===9?S+=4-(S+e.bsCount[h]+(C?1:0))%4:S++;else break;i++}f=i>=s,a.push(e.bsCount[h]),e.bsCount[h]=e.sCount[h]+1+($?1:0),l.push(e.sCount[h]),e.sCount[h]=S-g,d.push(e.tShift[h]),e.tShift[h]=i-e.bMarks[h];continue}if(f)break;let y=!1;for(let g=0,$=c.length;g<$;g++)if(c[g](e,h,u,!0)){y=!0;break}if(y){e.lineMax=h,e.blkIndent!==0&&(o.push(e.bMarks[h]),a.push(e.bsCount[h]),d.push(e.tShift[h]),l.push(e.sCount[h]),e.sCount[h]-=e.blkIndent);break}o.push(e.bMarks[h]),a.push(e.bsCount[h]),d.push(e.tShift[h]),l.push(e.sCount[h]),e.sCount[h]=-1}const m=e.blkIndent;e.blkIndent=0;const b=e.push("blockquote_open","blockquote",1);b.markup=">";const _=[t,0];b.map=_,e.md.block.tokenize(e,t,h);const w=e.push("blockquote_close","blockquote",-1);w.markup=">",e.lineMax=n,e.parentType=p,_[1]=e.line;for(let v=0;v<d.length;v++)e.bMarks[v+t]=o[v],e.tShift[v+t]=d[v],e.sCount[v+t]=l[v],e.bsCount[v+t]=a[v];return e.blkIndent=m,!0}function Xl(e,t,u,r){const i=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let s=e.bMarks[t]+e.tShift[t];const n=e.src.charCodeAt(s++);if(n!==42&&n!==45&&n!==95)return!1;let o=1;for(;s<i;){const l=e.src.charCodeAt(s++);if(l!==n&&!H(l))return!1;l===n&&o++}if(o<3)return!1;if(r)return!0;e.line=t+1;const a=e.push("hr","hr",0);return a.map=[t,e.line],a.markup=Array(o+1).join(String.fromCharCode(n)),!0}function ks(e,t){const u=e.eMarks[t];let r=e.bMarks[t]+e.tShift[t];const i=e.src.charCodeAt(r++);if(i!==42&&i!==45&&i!==43)return-1;if(r<u){const s=e.src.charCodeAt(r);if(!H(s))return-1}return r}function Es(e,t){const u=e.bMarks[t]+e.tShift[t],r=e.eMarks[t];let i=u;if(i+1>=r)return-1;let s=e.src.charCodeAt(i++);if(s<48||s>57)return-1;for(;;){if(i>=r)return-1;if(s=e.src.charCodeAt(i++),s>=48&&s<=57){if(i-u>=10)return-1;continue}if(s===41||s===46)break;return-1}return i<r&&(s=e.src.charCodeAt(i),!H(s))?-1:i}function e0(e,t){const u=e.level+2;for(let r=t+2,i=e.tokens.length-2;r<i;r++)e.tokens[r].level===u&&e.tokens[r].type==="paragraph_open"&&(e.tokens[r+2].hidden=!0,e.tokens[r].hidden=!0,r+=2)}function t0(e,t,u,r){let i,s,n,o,a=t,l=!0;if(e.sCount[a]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[a]-e.listIndent>=4&&e.sCount[a]<e.blkIndent)return!1;let d=!1;r&&e.parentType==="paragraph"&&e.sCount[a]>=e.blkIndent&&(d=!0);let c,p,f;if((f=Es(e,a))>=0){if(c=!0,n=e.bMarks[a]+e.tShift[a],p=Number(e.src.slice(n,f-1)),d&&p!==1)return!1}else if((f=ks(e,a))>=0)c=!1;else return!1;if(d&&e.skipSpaces(f)>=e.eMarks[a])return!1;if(r)return!0;const h=e.src.charCodeAt(f-1),m=e.tokens.length;c?(o=e.push("ordered_list_open","ol",1),p!==1&&(o.attrs=[["start",p]])):o=e.push("bullet_list_open","ul",1);const b=[a,0];o.map=b,o.markup=String.fromCharCode(h);let _=!1;const w=e.md.block.ruler.getRules("list"),v=e.parentType;for(e.parentType="list";a<u;){s=f,i=e.eMarks[a];const y=e.sCount[a]+f-(e.bMarks[a]+e.tShift[a]);let g=y;for(;s<i;){const k=e.src.charCodeAt(s);if(k===9)g+=4-(g+e.bsCount[a])%4;else if(k===32)g++;else break;s++}const $=s;let C;$>=i?C=1:C=g-y,C>4&&(C=1);const S=y+C;o=e.push("list_item_open","li",1),o.markup=String.fromCharCode(h);const N=[a,0];o.map=N,c&&(o.info=e.src.slice(n,f-1));const M=e.tight,A=e.tShift[a],O=e.sCount[a],V=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=S,e.tight=!0,e.tShift[a]=$-e.bMarks[a],e.sCount[a]=g,$>=i&&e.isEmpty(a+1)?e.line=Math.min(e.line+2,u):e.md.block.tokenize(e,a,u,!0),(!e.tight||_)&&(l=!1),_=e.line-a>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=V,e.tShift[a]=A,e.sCount[a]=O,e.tight=M,o=e.push("list_item_close","li",-1),o.markup=String.fromCharCode(h),a=e.line,N[1]=a,a>=u||e.sCount[a]<e.blkIndent||e.sCount[a]-e.blkIndent>=4)break;let _e=!1;for(let k=0,I=w.length;k<I;k++)if(w[k](e,a,u,!0)){_e=!0;break}if(_e)break;if(c){if(f=Es(e,a),f<0)break;n=e.bMarks[a]+e.tShift[a]}else if(f=ks(e,a),f<0)break;if(h!==e.src.charCodeAt(f-1))break}return c?o=e.push("ordered_list_close","ol",-1):o=e.push("bullet_list_close","ul",-1),o.markup=String.fromCharCode(h),b[1]=a,e.line=a,e.parentType=v,l&&e0(e,m),!0}function u0(e,t,u,r){let i=e.bMarks[t]+e.tShift[t],s=e.eMarks[t],n=t+1;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==91)return!1;function o(w){const v=e.lineMax;if(w>=v||e.isEmpty(w))return null;let y=!1;if(e.sCount[w]-e.blkIndent>3&&(y=!0),e.sCount[w]<0&&(y=!0),!y){const C=e.md.block.ruler.getRules("reference"),S=e.parentType;e.parentType="reference";let N=!1;for(let M=0,A=C.length;M<A;M++)if(C[M](e,w,v,!0)){N=!0;break}if(e.parentType=S,N)return null}const g=e.bMarks[w]+e.tShift[w],$=e.eMarks[w];return e.src.slice(g,$+1)}let a=e.src.slice(i,s+1);s=a.length;let l=-1;for(i=1;i<s;i++){const w=a.charCodeAt(i);if(w===91)return!1;if(w===93){l=i;break}else if(w===10){const v=o(n);v!==null&&(a+=v,s=a.length,n++)}else if(w===92&&(i++,i<s&&a.charCodeAt(i)===10)){const v=o(n);v!==null&&(a+=v,s=a.length,n++)}}if(l<0||a.charCodeAt(l+1)!==58)return!1;for(i=l+2;i<s;i++){const w=a.charCodeAt(i);if(w===10){const v=o(n);v!==null&&(a+=v,s=a.length,n++)}else if(!H(w))break}const d=e.md.helpers.parseLinkDestination(a,i,s);if(!d.ok)return!1;const c=e.md.normalizeLink(d.str);if(!e.md.validateLink(c))return!1;i=d.pos;const p=i,f=n,h=i;for(;i<s;i++){const w=a.charCodeAt(i);if(w===10){const v=o(n);v!==null&&(a+=v,s=a.length,n++)}else if(!H(w))break}let m=e.md.helpers.parseLinkTitle(a,i,s);for(;m.can_continue;){const w=o(n);if(w===null)break;a+=w,i=s,s=a.length,n++,m=e.md.helpers.parseLinkTitle(a,i,s,m)}let b;for(i<s&&h!==i&&m.ok?(b=m.str,i=m.pos):(b="",i=p,n=f);i<s;){const w=a.charCodeAt(i);if(!H(w))break;i++}if(i<s&&a.charCodeAt(i)!==10&&b)for(b="",i=p,n=f;i<s;){const w=a.charCodeAt(i);if(!H(w))break;i++}if(i<s&&a.charCodeAt(i)!==10)return!1;const _=rr(a.slice(1,l));return _?(r||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[_]>"u"&&(e.env.references[_]={title:b,href:c}),e.line=n),!0):!1}const r0=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],i0="[a-zA-Z_:][a-zA-Z0-9:._-]*",s0="[^\"'=<>`\\x00-\\x20]+",n0="'[^']*'",o0='"[^"]*"',a0="(?:"+s0+"|"+n0+"|"+o0+")",c0="(?:\\s+"+i0+"(?:\\s*=\\s*"+a0+")?)",go="<[A-Za-z][A-Za-z0-9\\-]*"+c0+"*\\s*\\/?>",yo="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",l0="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",d0="<[?][\\s\\S]*?[?]>",h0="<![A-Za-z][^>]*>",f0="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",p0=new RegExp("^(?:"+go+"|"+yo+"|"+l0+"|"+d0+"|"+h0+"|"+f0+")"),b0=new RegExp("^(?:"+go+"|"+yo+")"),dt=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+r0.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(b0.source+"\\s*$"),/^$/,!1]];function m0(e,t,u,r){let i=e.bMarks[t]+e.tShift[t],s=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(i)!==60)return!1;let n=e.src.slice(i,s),o=0;for(;o<dt.length&&!dt[o][0].test(n);o++);if(o===dt.length)return!1;if(r)return dt[o][2];let a=t+1;if(!dt[o][1].test(n)){for(;a<u&&!(e.sCount[a]<e.blkIndent);a++)if(i=e.bMarks[a]+e.tShift[a],s=e.eMarks[a],n=e.src.slice(i,s),dt[o][1].test(n)){n.length!==0&&a++;break}}e.line=a;const l=e.push("html_block","",0);return l.map=[t,a],l.content=e.getLines(t,a,e.blkIndent,!0),!0}function _0(e,t,u,r){let i=e.bMarks[t]+e.tShift[t],s=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let n=e.src.charCodeAt(i);if(n!==35||i>=s)return!1;let o=1;for(n=e.src.charCodeAt(++i);n===35&&i<s&&o<=6;)o++,n=e.src.charCodeAt(++i);if(o>6||i<s&&!H(n))return!1;if(r)return!0;s=e.skipSpacesBack(s,i);const a=e.skipCharsBack(s,35,i);a>i&&H(e.src.charCodeAt(a-1))&&(s=a),e.line=t+1;const l=e.push("heading_open","h"+String(o),1);l.markup="########".slice(0,o),l.map=[t,e.line];const d=e.push("inline","",0);d.content=e.src.slice(i,s).trim(),d.map=[t,e.line],d.children=[];const c=e.push("heading_close","h"+String(o),-1);return c.markup="########".slice(0,o),!0}function g0(e,t,u){const r=e.md.block.ruler.getRules("paragraph");if(e.sCount[t]-e.blkIndent>=4)return!1;const i=e.parentType;e.parentType="paragraph";let s=0,n,o=t+1;for(;o<u&&!e.isEmpty(o);o++){if(e.sCount[o]-e.blkIndent>3)continue;if(e.sCount[o]>=e.blkIndent){let f=e.bMarks[o]+e.tShift[o];const h=e.eMarks[o];if(f<h&&(n=e.src.charCodeAt(f),(n===45||n===61)&&(f=e.skipChars(f,n),f=e.skipSpaces(f),f>=h))){s=n===61?1:2;break}}if(e.sCount[o]<0)continue;let p=!1;for(let f=0,h=r.length;f<h;f++)if(r[f](e,o,u,!0)){p=!0;break}if(p)break}if(!s)return!1;const a=e.getLines(t,o,e.blkIndent,!1).trim();e.line=o+1;const l=e.push("heading_open","h"+String(s),1);l.markup=String.fromCharCode(n),l.map=[t,e.line];const d=e.push("inline","",0);d.content=a,d.map=[t,e.line-1],d.children=[];const c=e.push("heading_close","h"+String(s),-1);return c.markup=String.fromCharCode(n),e.parentType=i,!0}function y0(e,t,u){const r=e.md.block.ruler.getRules("paragraph"),i=e.parentType;let s=t+1;for(e.parentType="paragraph";s<u&&!e.isEmpty(s);s++){if(e.sCount[s]-e.blkIndent>3||e.sCount[s]<0)continue;let l=!1;for(let d=0,c=r.length;d<c;d++)if(r[d](e,s,u,!0)){l=!0;break}if(l)break}const n=e.getLines(t,s,e.blkIndent,!1).trim();e.line=s;const o=e.push("paragraph_open","p",1);o.map=[t,e.line];const a=e.push("inline","",0);return a.content=n,a.map=[t,e.line],a.children=[],e.push("paragraph_close","p",-1),e.parentType=i,!0}const Au=[["table",Kl,["paragraph","reference"]],["code",Jl],["fence",Ql,["paragraph","reference","blockquote","list"]],["blockquote",Yl,["paragraph","reference","blockquote","list"]],["hr",Xl,["paragraph","reference","blockquote","list"]],["list",t0,["paragraph","reference","blockquote"]],["reference",u0],["html_block",m0,["paragraph","reference","blockquote"]],["heading",_0,["paragraph","reference","blockquote"]],["lheading",g0],["paragraph",y0]];function ir(){this.ruler=new pe;for(let e=0;e<Au.length;e++)this.ruler.push(Au[e][0],Au[e][1],{alt:(Au[e][2]||[]).slice()})}ir.prototype.tokenize=function(e,t,u){const r=this.ruler.getRules(""),i=r.length,s=e.md.options.maxNesting;let n=t,o=!1;for(;n<u&&(e.line=n=e.skipEmptyLines(n),!(n>=u||e.sCount[n]<e.blkIndent));){if(e.level>=s){e.line=u;break}const a=e.line;let l=!1;for(let d=0;d<i;d++)if(l=r[d](e,n,u,!1),l){if(a>=e.line)throw new Error("block rule didn't increment state.line");break}if(!l)throw new Error("none of the block rules matched");e.tight=!o,e.isEmpty(e.line-1)&&(o=!0),n=e.line,n<u&&e.isEmpty(n)&&(o=!0,n++,e.line=n)}};ir.prototype.parse=function(e,t,u,r){if(!e)return;const i=new this.State(e,t,u,r);this.tokenize(i,i.line,i.lineMax)};ir.prototype.State=Fe;function gu(e,t,u,r){this.src=e,this.env=u,this.md=t,this.tokens=r,this.tokens_meta=Array(r.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}gu.prototype.pushPending=function(){const e=new Ce("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e};gu.prototype.push=function(e,t,u){this.pending&&this.pushPending();const r=new Ce(e,t,u);let i=null;return u<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),r.level=this.level,u>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],i={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(r),this.tokens_meta.push(i),r};gu.prototype.scanDelims=function(e,t){const u=this.posMax,r=this.src.charCodeAt(e),i=e>0?this.src.charCodeAt(e-1):32;let s=e;for(;s<u&&this.src.charCodeAt(s)===r;)s++;const n=s-e,o=s<u?this.src.charCodeAt(s):32,a=au(i)||ou(String.fromCharCode(i)),l=au(o)||ou(String.fromCharCode(o)),d=nu(i),c=nu(o),p=!c&&(!l||d||a),f=!d&&(!a||c||l);return{can_open:p&&(t||!f||a),can_close:f&&(t||!p||l),length:n}};gu.prototype.Token=Ce;function x0(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function v0(e,t){let u=e.pos;for(;u<e.posMax&&!x0(e.src.charCodeAt(u));)u++;return u===e.pos?!1:(t||(e.pending+=e.src.slice(e.pos,u)),e.pos=u,!0)}const $0=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function C0(e,t){if(!e.md.options.linkify||e.linkLevel>0)return!1;const u=e.pos,r=e.posMax;if(u+3>r||e.src.charCodeAt(u)!==58||e.src.charCodeAt(u+1)!==47||e.src.charCodeAt(u+2)!==47)return!1;const i=e.pending.match($0);if(!i)return!1;const s=i[1],n=e.md.linkify.matchAtStart(e.src.slice(u-s.length));if(!n)return!1;let o=n.url;if(o.length<=s.length)return!1;o=o.replace(/\*+$/,"");const a=e.md.normalizeLink(o);if(!e.md.validateLink(a))return!1;if(!t){e.pending=e.pending.slice(0,-s.length);const l=e.push("link_open","a",1);l.attrs=[["href",a]],l.markup="linkify",l.info="auto";const d=e.push("text","",0);d.content=e.md.normalizeLinkText(o);const c=e.push("link_close","a",-1);c.markup="linkify",c.info="auto"}return e.pos+=o.length-s.length,!0}function w0(e,t){let u=e.pos;if(e.src.charCodeAt(u)!==10)return!1;const r=e.pending.length-1,i=e.posMax;if(!t)if(r>=0&&e.pending.charCodeAt(r)===32)if(r>=1&&e.pending.charCodeAt(r-1)===32){let s=r-1;for(;s>=1&&e.pending.charCodeAt(s-1)===32;)s--;e.pending=e.pending.slice(0,s),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(u++;u<i&&H(e.src.charCodeAt(u));)u++;return e.pos=u,!0}const Oi=[];for(let e=0;e<256;e++)Oi.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){Oi[e.charCodeAt(0)]=1});function k0(e,t){let u=e.pos;const r=e.posMax;if(e.src.charCodeAt(u)!==92||(u++,u>=r))return!1;let i=e.src.charCodeAt(u);if(i===10){for(t||e.push("hardbreak","br",0),u++;u<r&&(i=e.src.charCodeAt(u),!!H(i));)u++;return e.pos=u,!0}let s=e.src[u];if(i>=55296&&i<=56319&&u+1<r){const o=e.src.charCodeAt(u+1);o>=56320&&o<=57343&&(s+=e.src[u+1],u++)}const n="\\"+s;if(!t){const o=e.push("text_special","",0);i<256&&Oi[i]!==0?o.content=s:o.content=n,o.markup=n,o.info="escape"}return e.pos=u+1,!0}function E0(e,t){let u=e.pos;if(e.src.charCodeAt(u)!==96)return!1;const i=u;u++;const s=e.posMax;for(;u<s&&e.src.charCodeAt(u)===96;)u++;const n=e.src.slice(i,u),o=n.length;if(e.backticksScanned&&(e.backticks[o]||0)<=i)return t||(e.pending+=n),e.pos+=o,!0;let a=u,l;for(;(l=e.src.indexOf("`",a))!==-1;){for(a=l+1;a<s&&e.src.charCodeAt(a)===96;)a++;const d=a-l;if(d===o){if(!t){const c=e.push("code_inline","code",0);c.markup=n,c.content=e.src.slice(u,l).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return e.pos=a,!0}e.backticks[d]=l}return e.backticksScanned=!0,t||(e.pending+=n),e.pos+=o,!0}function A0(e,t){const u=e.pos,r=e.src.charCodeAt(u);if(t||r!==126)return!1;const i=e.scanDelims(e.pos,!0);let s=i.length;const n=String.fromCharCode(r);if(s<2)return!1;let o;s%2&&(o=e.push("text","",0),o.content=n,s--);for(let a=0;a<s;a+=2)o=e.push("text","",0),o.content=n+n,e.delimiters.push({marker:r,length:0,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return e.pos+=i.length,!0}function As(e,t){let u;const r=[],i=t.length;for(let s=0;s<i;s++){const n=t[s];if(n.marker!==126||n.end===-1)continue;const o=t[n.end];u=e.tokens[n.token],u.type="s_open",u.tag="s",u.nesting=1,u.markup="~~",u.content="",u=e.tokens[o.token],u.type="s_close",u.tag="s",u.nesting=-1,u.markup="~~",u.content="",e.tokens[o.token-1].type==="text"&&e.tokens[o.token-1].content==="~"&&r.push(o.token-1)}for(;r.length;){const s=r.pop();let n=s+1;for(;n<e.tokens.length&&e.tokens[n].type==="s_close";)n++;n--,s!==n&&(u=e.tokens[n],e.tokens[n]=e.tokens[s],e.tokens[s]=u)}}function D0(e){const t=e.tokens_meta,u=e.tokens_meta.length;As(e,e.delimiters);for(let r=0;r<u;r++)t[r]&&t[r].delimiters&&As(e,t[r].delimiters)}const xo={tokenize:A0,postProcess:D0};function S0(e,t){const u=e.pos,r=e.src.charCodeAt(u);if(t||r!==95&&r!==42)return!1;const i=e.scanDelims(e.pos,r===42);for(let s=0;s<i.length;s++){const n=e.push("text","",0);n.content=String.fromCharCode(r),e.delimiters.push({marker:r,length:i.length,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close})}return e.pos+=i.length,!0}function Ds(e,t){const u=t.length;for(let r=u-1;r>=0;r--){const i=t[r];if(i.marker!==95&&i.marker!==42||i.end===-1)continue;const s=t[i.end],n=r>0&&t[r-1].end===i.end+1&&t[r-1].marker===i.marker&&t[r-1].token===i.token-1&&t[i.end+1].token===s.token+1,o=String.fromCharCode(i.marker),a=e.tokens[i.token];a.type=n?"strong_open":"em_open",a.tag=n?"strong":"em",a.nesting=1,a.markup=n?o+o:o,a.content="";const l=e.tokens[s.token];l.type=n?"strong_close":"em_close",l.tag=n?"strong":"em",l.nesting=-1,l.markup=n?o+o:o,l.content="",n&&(e.tokens[t[r-1].token].content="",e.tokens[t[i.end+1].token].content="",r--)}}function F0(e){const t=e.tokens_meta,u=e.tokens_meta.length;Ds(e,e.delimiters);for(let r=0;r<u;r++)t[r]&&t[r].delimiters&&Ds(e,t[r].delimiters)}const vo={tokenize:S0,postProcess:F0};function T0(e,t){let u,r,i,s,n="",o="",a=e.pos,l=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;const d=e.pos,c=e.posMax,p=e.pos+1,f=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(f<0)return!1;let h=f+1;if(h<c&&e.src.charCodeAt(h)===40){for(l=!1,h++;h<c&&(u=e.src.charCodeAt(h),!(!H(u)&&u!==10));h++);if(h>=c)return!1;if(a=h,i=e.md.helpers.parseLinkDestination(e.src,h,e.posMax),i.ok){for(n=e.md.normalizeLink(i.str),e.md.validateLink(n)?h=i.pos:n="",a=h;h<c&&(u=e.src.charCodeAt(h),!(!H(u)&&u!==10));h++);if(i=e.md.helpers.parseLinkTitle(e.src,h,e.posMax),h<c&&a!==h&&i.ok)for(o=i.str,h=i.pos;h<c&&(u=e.src.charCodeAt(h),!(!H(u)&&u!==10));h++);}(h>=c||e.src.charCodeAt(h)!==41)&&(l=!0),h++}if(l){if(typeof e.env.references>"u")return!1;if(h<c&&e.src.charCodeAt(h)===91?(a=h+1,h=e.md.helpers.parseLinkLabel(e,h),h>=0?r=e.src.slice(a,h++):h=f+1):h=f+1,r||(r=e.src.slice(p,f)),s=e.env.references[rr(r)],!s)return e.pos=d,!1;n=s.href,o=s.title}if(!t){e.pos=p,e.posMax=f;const m=e.push("link_open","a",1),b=[["href",n]];m.attrs=b,o&&b.push(["title",o]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push("link_close","a",-1)}return e.pos=h,e.posMax=c,!0}function O0(e,t){let u,r,i,s,n,o,a,l,d="";const c=e.pos,p=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;const f=e.pos+2,h=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(h<0)return!1;if(s=h+1,s<p&&e.src.charCodeAt(s)===40){for(s++;s<p&&(u=e.src.charCodeAt(s),!(!H(u)&&u!==10));s++);if(s>=p)return!1;for(l=s,o=e.md.helpers.parseLinkDestination(e.src,s,e.posMax),o.ok&&(d=e.md.normalizeLink(o.str),e.md.validateLink(d)?s=o.pos:d=""),l=s;s<p&&(u=e.src.charCodeAt(s),!(!H(u)&&u!==10));s++);if(o=e.md.helpers.parseLinkTitle(e.src,s,e.posMax),s<p&&l!==s&&o.ok)for(a=o.str,s=o.pos;s<p&&(u=e.src.charCodeAt(s),!(!H(u)&&u!==10));s++);else a="";if(s>=p||e.src.charCodeAt(s)!==41)return e.pos=c,!1;s++}else{if(typeof e.env.references>"u")return!1;if(s<p&&e.src.charCodeAt(s)===91?(l=s+1,s=e.md.helpers.parseLinkLabel(e,s),s>=0?i=e.src.slice(l,s++):s=h+1):s=h+1,i||(i=e.src.slice(f,h)),n=e.env.references[rr(i)],!n)return e.pos=c,!1;d=n.href,a=n.title}if(!t){r=e.src.slice(f,h);const m=[];e.md.inline.parse(r,e.md,e.env,m);const b=e.push("image","img",0),_=[["src",d],["alt",""]];b.attrs=_,b.children=m,b.content=r,a&&_.push(["title",a])}return e.pos=s,e.posMax=p,!0}const I0=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,P0=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function z0(e,t){let u=e.pos;if(e.src.charCodeAt(u)!==60)return!1;const r=e.pos,i=e.posMax;for(;;){if(++u>=i)return!1;const n=e.src.charCodeAt(u);if(n===60)return!1;if(n===62)break}const s=e.src.slice(r+1,u);if(P0.test(s)){const n=e.md.normalizeLink(s);if(!e.md.validateLink(n))return!1;if(!t){const o=e.push("link_open","a",1);o.attrs=[["href",n]],o.markup="autolink",o.info="auto";const a=e.push("text","",0);a.content=e.md.normalizeLinkText(s);const l=e.push("link_close","a",-1);l.markup="autolink",l.info="auto"}return e.pos+=s.length+2,!0}if(I0.test(s)){const n=e.md.normalizeLink("mailto:"+s);if(!e.md.validateLink(n))return!1;if(!t){const o=e.push("link_open","a",1);o.attrs=[["href",n]],o.markup="autolink",o.info="auto";const a=e.push("text","",0);a.content=e.md.normalizeLinkText(s);const l=e.push("link_close","a",-1);l.markup="autolink",l.info="auto"}return e.pos+=s.length+2,!0}return!1}function N0(e){return/^<a[>\s]/i.test(e)}function R0(e){return/^<\/a\s*>/i.test(e)}function M0(e){const t=e|32;return t>=97&&t<=122}function j0(e,t){if(!e.md.options.html)return!1;const u=e.posMax,r=e.pos;if(e.src.charCodeAt(r)!==60||r+2>=u)return!1;const i=e.src.charCodeAt(r+1);if(i!==33&&i!==63&&i!==47&&!M0(i))return!1;const s=e.src.slice(r).match(p0);if(!s)return!1;if(!t){const n=e.push("html_inline","",0);n.content=s[0],N0(n.content)&&e.linkLevel++,R0(n.content)&&e.linkLevel--}return e.pos+=s[0].length,!0}const L0=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,B0=/^&([a-z][a-z0-9]{1,31});/i;function U0(e,t){const u=e.pos,r=e.posMax;if(e.src.charCodeAt(u)!==38||u+1>=r)return!1;if(e.src.charCodeAt(u+1)===35){const s=e.src.slice(u).match(L0);if(s){if(!t){const n=s[1][0].toLowerCase()==="x"?parseInt(s[1].slice(1),16):parseInt(s[1],10),o=e.push("text_special","",0);o.content=Fi(n)?Vu(n):Vu(65533),o.markup=s[0],o.info="entity"}return e.pos+=s[0].length,!0}}else{const s=e.src.slice(u).match(B0);if(s){const n=fo(s[0]);if(n!==s[0]){if(!t){const o=e.push("text_special","",0);o.content=n,o.markup=s[0],o.info="entity"}return e.pos+=s[0].length,!0}}}return!1}function Ss(e){const t={},u=e.length;if(!u)return;let r=0,i=-2;const s=[];for(let n=0;n<u;n++){const o=e[n];if(s.push(0),(e[r].marker!==o.marker||i!==o.token-1)&&(r=n),i=o.token,o.length=o.length||0,!o.close)continue;t.hasOwnProperty(o.marker)||(t[o.marker]=[-1,-1,-1,-1,-1,-1]);const a=t[o.marker][(o.open?3:0)+o.length%3];let l=r-s[r]-1,d=l;for(;l>a;l-=s[l]+1){const c=e[l];if(c.marker===o.marker&&c.open&&c.end<0){let p=!1;if((c.close||o.open)&&(c.length+o.length)%3===0&&(c.length%3!==0||o.length%3!==0)&&(p=!0),!p){const f=l>0&&!e[l-1].open?s[l-1]+1:0;s[n]=n-l+f,s[l]=f,o.open=!1,c.end=n,c.close=!1,d=-1,i=-2;break}}}d!==-1&&(t[o.marker][(o.open?3:0)+(o.length||0)%3]=d)}}function q0(e){const t=e.tokens_meta,u=e.tokens_meta.length;Ss(e.delimiters);for(let r=0;r<u;r++)t[r]&&t[r].delimiters&&Ss(t[r].delimiters)}function H0(e){let t,u,r=0;const i=e.tokens,s=e.tokens.length;for(t=u=0;t<s;t++)i[t].nesting<0&&r--,i[t].level=r,i[t].nesting>0&&r++,i[t].type==="text"&&t+1<s&&i[t+1].type==="text"?i[t+1].content=i[t].content+i[t+1].content:(t!==u&&(i[u]=i[t]),u++);t!==u&&(i.length=u)}const Rr=[["text",v0],["linkify",C0],["newline",w0],["escape",k0],["backticks",E0],["strikethrough",xo.tokenize],["emphasis",vo.tokenize],["link",T0],["image",O0],["autolink",z0],["html_inline",j0],["entity",U0]],Mr=[["balance_pairs",q0],["strikethrough",xo.postProcess],["emphasis",vo.postProcess],["fragments_join",H0]];function yu(){this.ruler=new pe;for(let e=0;e<Rr.length;e++)this.ruler.push(Rr[e][0],Rr[e][1]);this.ruler2=new pe;for(let e=0;e<Mr.length;e++)this.ruler2.push(Mr[e][0],Mr[e][1])}yu.prototype.skipToken=function(e){const t=e.pos,u=this.ruler.getRules(""),r=u.length,i=e.md.options.maxNesting,s=e.cache;if(typeof s[t]<"u"){e.pos=s[t];return}let n=!1;if(e.level<i){for(let o=0;o<r;o++)if(e.level++,n=u[o](e,!0),e.level--,n){if(t>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}else e.pos=e.posMax;n||e.pos++,s[t]=e.pos};yu.prototype.tokenize=function(e){const t=this.ruler.getRules(""),u=t.length,r=e.posMax,i=e.md.options.maxNesting;for(;e.pos<r;){const s=e.pos;let n=!1;if(e.level<i){for(let o=0;o<u;o++)if(n=t[o](e,!1),n){if(s>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}if(n){if(e.pos>=r)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()};yu.prototype.parse=function(e,t,u,r){const i=new this.State(e,t,u,r);this.tokenize(i);const s=this.ruler2.getRules(""),n=s.length;for(let o=0;o<n;o++)s[o](i)};yu.prototype.State=gu;function V0(e){const t={};e=e||{},t.src_Any=oo.source,t.src_Cc=ao.source,t.src_Z=lo.source,t.src_P=Di.source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join("|"),t.src_ZCc=[t.src_Z,t.src_Cc].join("|");const u="[><｜]";return t.src_pseudo_letter="(?:(?!"+u+"|"+t.src_ZPCc+")"+t.src_Any+")",t.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",t.src_auth="(?:(?:(?!"+t.src_ZCc+"|[@/\\[\\]()]).)+@)?",t.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",t.src_host_terminator="(?=$|"+u+"|"+t.src_ZPCc+")(?!"+(e["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+t.src_ZPCc+"))",t.src_path="(?:[/?#](?:(?!"+t.src_ZCc+"|"+u+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+t.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+t.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+t.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+t.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+t.src_ZCc+"|[']).)+\\'|\\'(?="+t.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+t.src_ZCc+"|[.]|$)|"+(e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+t.src_ZCc+"|$)|;(?!"+t.src_ZCc+"|$)|\\!+(?!"+t.src_ZCc+"|[!]|$)|\\?(?!"+t.src_ZCc+"|[?]|$))+|\\/)?",t.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',t.src_xn="xn--[a-z0-9\\-]{1,59}",t.src_domain_root="(?:"+t.src_xn+"|"+t.src_pseudo_letter+"{1,63})",t.src_domain="(?:"+t.src_xn+"|(?:"+t.src_pseudo_letter+")|(?:"+t.src_pseudo_letter+"(?:-|"+t.src_pseudo_letter+"){0,61}"+t.src_pseudo_letter+"))",t.src_host="(?:(?:(?:(?:"+t.src_domain+")\\.)*"+t.src_domain+"))",t.tpl_host_fuzzy="(?:"+t.src_ip4+"|(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%)))",t.tpl_host_no_ip_fuzzy="(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%))",t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+t.src_ZPCc+"|>|$))",t.tpl_email_fuzzy="(^|"+u+'|"|\\(|'+t.src_ZCc+")("+t.src_email_name+"@"+t.tpl_host_fuzzy_strict+")",t.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_fuzzy_strict+t.src_path+")",t.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_no_ip_fuzzy_strict+t.src_path+")",t}function fi(e){return Array.prototype.slice.call(arguments,1).forEach(function(u){u&&Object.keys(u).forEach(function(r){e[r]=u[r]})}),e}function sr(e){return Object.prototype.toString.call(e)}function W0(e){return sr(e)==="[object String]"}function Z0(e){return sr(e)==="[object Object]"}function G0(e){return sr(e)==="[object RegExp]"}function Fs(e){return sr(e)==="[object Function]"}function K0(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const $o={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function J0(e){return Object.keys(e||{}).reduce(function(t,u){return t||$o.hasOwnProperty(u)},!1)}const Q0={"http:":{validate:function(e,t,u){const r=e.slice(t);return u.re.http||(u.re.http=new RegExp("^\\/\\/"+u.re.src_auth+u.re.src_host_port_strict+u.re.src_path,"i")),u.re.http.test(r)?r.match(u.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,t,u){const r=e.slice(t);return u.re.no_http||(u.re.no_http=new RegExp("^"+u.re.src_auth+"(?:localhost|(?:(?:"+u.re.src_domain+")\\.)+"+u.re.src_domain_root+")"+u.re.src_port+u.re.src_host_terminator+u.re.src_path,"i")),u.re.no_http.test(r)?t>=3&&e[t-3]===":"||t>=3&&e[t-3]==="/"?0:r.match(u.re.no_http)[0].length:0}},"mailto:":{validate:function(e,t,u){const r=e.slice(t);return u.re.mailto||(u.re.mailto=new RegExp("^"+u.re.src_email_name+"@"+u.re.src_host_strict,"i")),u.re.mailto.test(r)?r.match(u.re.mailto)[0].length:0}}},Y0="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",X0="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function ed(e){e.__index__=-1,e.__text_cache__=""}function td(e){return function(t,u){const r=t.slice(u);return e.test(r)?r.match(e)[0].length:0}}function Ts(){return function(e,t){t.normalize(e)}}function Wu(e){const t=e.re=V0(e.__opts__),u=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||u.push(Y0),u.push(t.src_xn),t.src_tlds=u.join("|");function r(o){return o.replace("%TLDS%",t.src_tlds)}t.email_fuzzy=RegExp(r(t.tpl_email_fuzzy),"i"),t.link_fuzzy=RegExp(r(t.tpl_link_fuzzy),"i"),t.link_no_ip_fuzzy=RegExp(r(t.tpl_link_no_ip_fuzzy),"i"),t.host_fuzzy_test=RegExp(r(t.tpl_host_fuzzy_test),"i");const i=[];e.__compiled__={};function s(o,a){throw new Error('(LinkifyIt) Invalid schema "'+o+'": '+a)}Object.keys(e.__schemas__).forEach(function(o){const a=e.__schemas__[o];if(a===null)return;const l={validate:null,link:null};if(e.__compiled__[o]=l,Z0(a)){G0(a.validate)?l.validate=td(a.validate):Fs(a.validate)?l.validate=a.validate:s(o,a),Fs(a.normalize)?l.normalize=a.normalize:a.normalize?s(o,a):l.normalize=Ts();return}if(W0(a)){i.push(o);return}s(o,a)}),i.forEach(function(o){e.__compiled__[e.__schemas__[o]]&&(e.__compiled__[o].validate=e.__compiled__[e.__schemas__[o]].validate,e.__compiled__[o].normalize=e.__compiled__[e.__schemas__[o]].normalize)}),e.__compiled__[""]={validate:null,normalize:Ts()};const n=Object.keys(e.__compiled__).filter(function(o){return o.length>0&&e.__compiled__[o]}).map(K0).join("|");e.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+t.src_ZPCc+"))("+n+")","i"),e.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+t.src_ZPCc+"))("+n+")","ig"),e.re.schema_at_start=RegExp("^"+e.re.schema_search.source,"i"),e.re.pretest=RegExp("("+e.re.schema_test.source+")|("+e.re.host_fuzzy_test.source+")|@","i"),ed(e)}function ud(e,t){const u=e.__index__,r=e.__last_index__,i=e.__text_cache__.slice(u,r);this.schema=e.__schema__.toLowerCase(),this.index=u+t,this.lastIndex=r+t,this.raw=i,this.text=i,this.url=i}function pi(e,t){const u=new ud(e,t);return e.__compiled__[u.schema].normalize(u,e),u}function be(e,t){if(!(this instanceof be))return new be(e,t);t||J0(e)&&(t=e,e={}),this.__opts__=fi({},$o,t),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=fi({},Q0,e),this.__compiled__={},this.__tlds__=X0,this.__tlds_replaced__=!1,this.re={},Wu(this)}be.prototype.add=function(t,u){return this.__schemas__[t]=u,Wu(this),this};be.prototype.set=function(t){return this.__opts__=fi(this.__opts__,t),this};be.prototype.test=function(t){if(this.__text_cache__=t,this.__index__=-1,!t.length)return!1;let u,r,i,s,n,o,a,l,d;if(this.re.schema_test.test(t)){for(a=this.re.schema_search,a.lastIndex=0;(u=a.exec(t))!==null;)if(s=this.testSchemaAt(t,u[2],a.lastIndex),s){this.__schema__=u[2],this.__index__=u.index+u[1].length,this.__last_index__=u.index+u[0].length+s;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(l=t.search(this.re.host_fuzzy_test),l>=0&&(this.__index__<0||l<this.__index__)&&(r=t.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(n=r.index+r[1].length,(this.__index__<0||n<this.__index__)&&(this.__schema__="",this.__index__=n,this.__last_index__=r.index+r[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(d=t.indexOf("@"),d>=0&&(i=t.match(this.re.email_fuzzy))!==null&&(n=i.index+i[1].length,o=i.index+i[0].length,(this.__index__<0||n<this.__index__||n===this.__index__&&o>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=n,this.__last_index__=o))),this.__index__>=0};be.prototype.pretest=function(t){return this.re.pretest.test(t)};be.prototype.testSchemaAt=function(t,u,r){return this.__compiled__[u.toLowerCase()]?this.__compiled__[u.toLowerCase()].validate(t,r,this):0};be.prototype.match=function(t){const u=[];let r=0;this.__index__>=0&&this.__text_cache__===t&&(u.push(pi(this,r)),r=this.__last_index__);let i=r?t.slice(r):t;for(;this.test(i);)u.push(pi(this,r)),i=i.slice(this.__last_index__),r+=this.__last_index__;return u.length?u:null};be.prototype.matchAtStart=function(t){if(this.__text_cache__=t,this.__index__=-1,!t.length)return null;const u=this.re.schema_at_start.exec(t);if(!u)return null;const r=this.testSchemaAt(t,u[2],u[0].length);return r?(this.__schema__=u[2],this.__index__=u.index+u[1].length,this.__last_index__=u.index+u[0].length+r,pi(this,0)):null};be.prototype.tlds=function(t,u){return t=Array.isArray(t)?t:[t],u?(this.__tlds__=this.__tlds__.concat(t).sort().filter(function(r,i,s){return r!==s[i-1]}).reverse(),Wu(this),this):(this.__tlds__=t.slice(),this.__tlds_replaced__=!0,Wu(this),this)};be.prototype.normalize=function(t){t.schema||(t.url="http://"+t.url),t.schema==="mailto:"&&!/^mailto:/i.test(t.url)&&(t.url="mailto:"+t.url)};be.prototype.onCompile=function(){};const gt=2147483647,Ee=36,Ii=1,cu=26,rd=38,id=700,Co=72,wo=128,ko="-",sd=/^xn--/,nd=/[^\0-\x7F]/,od=/[\x2E\u3002\uFF0E\uFF61]/g,ad={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},jr=Ee-Ii,Ae=Math.floor,Lr=String.fromCharCode;function Me(e){throw new RangeError(ad[e])}function cd(e,t){const u=[];let r=e.length;for(;r--;)u[r]=t(e[r]);return u}function Eo(e,t){const u=e.split("@");let r="";u.length>1&&(r=u[0]+"@",e=u[1]),e=e.replace(od,".");const i=e.split("."),s=cd(i,t).join(".");return r+s}function Ao(e){const t=[];let u=0;const r=e.length;for(;u<r;){const i=e.charCodeAt(u++);if(i>=55296&&i<=56319&&u<r){const s=e.charCodeAt(u++);(s&64512)==56320?t.push(((i&1023)<<10)+(s&1023)+65536):(t.push(i),u--)}else t.push(i)}return t}const ld=e=>String.fromCodePoint(...e),dd=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:Ee},Os=function(e,t){return e+22+75*(e<26)-((t!=0)<<5)},Do=function(e,t,u){let r=0;for(e=u?Ae(e/id):e>>1,e+=Ae(e/t);e>jr*cu>>1;r+=Ee)e=Ae(e/jr);return Ae(r+(jr+1)*e/(e+rd))},So=function(e){const t=[],u=e.length;let r=0,i=wo,s=Co,n=e.lastIndexOf(ko);n<0&&(n=0);for(let o=0;o<n;++o)e.charCodeAt(o)>=128&&Me("not-basic"),t.push(e.charCodeAt(o));for(let o=n>0?n+1:0;o<u;){const a=r;for(let d=1,c=Ee;;c+=Ee){o>=u&&Me("invalid-input");const p=dd(e.charCodeAt(o++));p>=Ee&&Me("invalid-input"),p>Ae((gt-r)/d)&&Me("overflow"),r+=p*d;const f=c<=s?Ii:c>=s+cu?cu:c-s;if(p<f)break;const h=Ee-f;d>Ae(gt/h)&&Me("overflow"),d*=h}const l=t.length+1;s=Do(r-a,l,a==0),Ae(r/l)>gt-i&&Me("overflow"),i+=Ae(r/l),r%=l,t.splice(r++,0,i)}return String.fromCodePoint(...t)},Fo=function(e){const t=[];e=Ao(e);const u=e.length;let r=wo,i=0,s=Co;for(const a of e)a<128&&t.push(Lr(a));const n=t.length;let o=n;for(n&&t.push(ko);o<u;){let a=gt;for(const d of e)d>=r&&d<a&&(a=d);const l=o+1;a-r>Ae((gt-i)/l)&&Me("overflow"),i+=(a-r)*l,r=a;for(const d of e)if(d<r&&++i>gt&&Me("overflow"),d===r){let c=i;for(let p=Ee;;p+=Ee){const f=p<=s?Ii:p>=s+cu?cu:p-s;if(c<f)break;const h=c-f,m=Ee-f;t.push(Lr(Os(f+h%m,0))),c=Ae(h/m)}t.push(Lr(Os(c,0))),s=Do(i,l,o===n),i=0,++o}++i,++r}return t.join("")},hd=function(e){return Eo(e,function(t){return sd.test(t)?So(t.slice(4).toLowerCase()):t})},fd=function(e){return Eo(e,function(t){return nd.test(t)?"xn--"+Fo(t):t})},To={version:"2.3.1",ucs2:{decode:Ao,encode:ld},decode:So,encode:Fo,toASCII:fd,toUnicode:hd},pd={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},bd={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},md={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},_d={default:pd,zero:bd,commonmark:md},gd=/^(vbscript|javascript|file|data):/,yd=/^data:image\/(gif|png|jpeg|webp);/;function xd(e){const t=e.trim().toLowerCase();return gd.test(t)?yd.test(t):!0}const Oo=["http:","https:","mailto:"];function vd(e){const t=Ai(e,!0);if(t.hostname&&(!t.protocol||Oo.indexOf(t.protocol)>=0))try{t.hostname=To.toASCII(t.hostname)}catch{}return _u(Ei(t))}function $d(e){const t=Ai(e,!0);if(t.hostname&&(!t.protocol||Oo.indexOf(t.protocol)>=0))try{t.hostname=To.toUnicode(t.hostname)}catch{}return wt(Ei(t),wt.defaultChars+"%")}function me(e,t){if(!(this instanceof me))return new me(e,t);t||Si(e)||(t=e||{},e="default"),this.inline=new yu,this.block=new ir,this.core=new Ti,this.renderer=new It,this.linkify=new be,this.validateLink=xd,this.normalizeLink=vd,this.normalizeLinkText=$d,this.utils=wl,this.helpers=ur({},Dl),this.options={},this.configure(e),t&&this.set(t)}me.prototype.set=function(e){return ur(this.options,e),this};me.prototype.configure=function(e){const t=this;if(Si(e)){const u=e;if(e=_d[u],!e)throw new Error('Wrong `markdown-it` preset "'+u+'", check name')}if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach(function(u){e.components[u].rules&&t[u].ruler.enableOnly(e.components[u].rules),e.components[u].rules2&&t[u].ruler2.enableOnly(e.components[u].rules2)}),this};me.prototype.enable=function(e,t){let u=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(i){u=u.concat(this[i].ruler.enable(e,!0))},this),u=u.concat(this.inline.ruler2.enable(e,!0));const r=e.filter(function(i){return u.indexOf(i)<0});if(r.length&&!t)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+r);return this};me.prototype.disable=function(e,t){let u=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(i){u=u.concat(this[i].ruler.disable(e,!0))},this),u=u.concat(this.inline.ruler2.disable(e,!0));const r=e.filter(function(i){return u.indexOf(i)<0});if(r.length&&!t)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+r);return this};me.prototype.use=function(e){const t=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,t),this};me.prototype.parse=function(e,t){if(typeof e!="string")throw new Error("Input data should be a String");const u=new this.core.State(e,this,t);return this.core.process(u),u.tokens};me.prototype.render=function(e,t){return t=t||{},this.renderer.render(this.parse(e,t),this.options,t)};me.prototype.parseInline=function(e,t){const u=new this.core.State(e,this,t);return u.inlineMode=!0,this.core.process(u),u.tokens};me.prototype.renderInline=function(e,t){return t=t||{},this.renderer.render(this.parseInline(e,t),this.options,t)};function Cd(e){const t=document.createElement("div");return $i(E`${e}`,t),t.innerHTML.replaceAll(/<!--([^-]*)-->/gim,"")}var vt,fu,pu,bu,Ft,Io,Po;class wd extends Ot{constructor(){super(...arguments);T(this,Ft);T(this,vt,me({highlight:(u,r)=>{switch(r){case"html":{const i=document.createElement("iframe");return i.classList.add("html-view"),i.srcdoc=u,i.sandbox="",i.innerHTML}default:return Cd(u)}}}));T(this,fu,null);T(this,pu,null);T(this,bu,new Map)}update(u,[r,i]){return D(this,fu)===r&&JSON.stringify(i)===D(this,pu)?ve:(z(this,fu,r),z(this,pu,JSON.stringify(i)),this.render(r,i))}render(u,r){r&&R(this,Ft,Io).call(this,r);const i=D(this,vt).render(u);return R(this,Ft,Po).call(this),Rc(i)}}vt=new WeakMap,fu=new WeakMap,pu=new WeakMap,bu=new WeakMap,Ft=new WeakSet,Io=function(u){Object.entries(u).forEach(([r])=>{let i;switch(r){case"p":i="paragraph";break;case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":i="heading";break;case"ul":i="bullet_list";break;case"ol":i="ordered_list";break;case"li":i="list_item";break;case"a":i="link";break;case"strong":i="strong";break;case"em":i="em";break}if(!i)return;const s=`${i}_open`;D(this,vt).renderer.rules[s]=(n,o,a,l,d)=>{const c=n[o],p=u[c.tag]??[];for(const f of p)c.attrJoin("class",f);return d.renderToken(n,o,a)}})},Po=function(){for(const[u]of D(this,bu))delete D(this,vt).renderer.rules[u];D(this,bu).clear()};const kd=Tt(wd);me();var Br=function(e,t,u,r,i,s){function n(_){if(_!==void 0&&typeof _!="function")throw new TypeError("Function expected");return _}for(var o=r.kind,a=o==="getter"?"get":o==="setter"?"set":"value",l=!t&&e?r.static?e:e.prototype:null,d=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),c,p=!1,f=u.length-1;f>=0;f--){var h={};for(var m in r)h[m]=m==="access"?{}:r[m];for(var m in r.access)h.access[m]=r.access[m];h.addInitializer=function(_){if(p)throw new TypeError("Cannot add initializers after decoration has completed");s.push(n(_||null))};var b=(0,u[f])(o==="accessor"?{get:d.get,set:d.set}:d[a],h);if(o==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(c=n(b.get))&&(d.get=c),(c=n(b.set))&&(d.set=c),(c=n(b.init))&&i.unshift(c)}else(c=n(b))&&(o==="field"?i.unshift(c):d[a]=c)}l&&Object.defineProperty(l,r.name,d),p=!0},Vt=function(e,t,u){for(var r=arguments.length>2,i=0;i<t.length;i++)u=r?t[i].call(e,u):t[i].call(e);return r?u:void 0};(()=>{var c,p,f,zo,No,Ro,_;let e=[J("a2ui-text")],t,u=[],r,i=ee,s,n=[],o=[],a,l=[],d=[];return _=class extends i{constructor(){super(...arguments);T(this,f);T(this,c,Vt(this,n,null));T(this,p,(Vt(this,o),Vt(this,l,null)));Vt(this,d)}get text(){return D(this,c)}set text(y){z(this,c,y)}get usageHint(){return D(this,p)}set usageHint(y){z(this,p,y)}render(){var g;const y=ki(this.theme.components.Text.all,this.usageHint?this.theme.components.Text[this.usageHint]:{});return E`<section
      class=${q(y)}
      style=${(g=this.theme.additionalStyles)!=null&&g.Text?se(R(this,f,Ro).call(this)):P}
    >
      ${R(this,f,zo).call(this)}
    </section>`}},c=new WeakMap,p=new WeakMap,f=new WeakSet,zo=function(){let y=null;if(this.text&&typeof this.text=="object"){if("literalString"in this.text&&this.text.literalString)y=this.text.literalString;else if("literal"in this.text&&this.text.literal!==void 0)y=this.text.literal;else if(this.text&&"path"in this.text&&this.text.path){if(!this.processor||!this.component)return E`(no model)`;const $=this.processor.getData(this.component,this.text.path,this.surfaceId??W.DEFAULT_SURFACE_ID);$!=null&&(y=$.toString())}}if(y==null)return E`(empty)`;let g=y;switch(this.usageHint){case"h1":g=`# ${g}`;break;case"h2":g=`## ${g}`;break;case"h3":g=`### ${g}`;break;case"h4":g=`#### ${g}`;break;case"h5":g=`##### ${g}`;break;case"caption":g=`*${g}*`;break}return E`${kd(g,dc(this.theme.markdown,["ol","ul","li"],{}))}`},No=function(y){return typeof y!="object"||Array.isArray(y)||!y?!1:["h1","h2","h3","h4","h5","h6","caption","body"].every($=>$ in y)},Ro=function(){var $;let y={};const g=($=this.theme.additionalStyles)==null?void 0:$.Text;if(!g)return y;if(R(this,f,No).call(this,g)){const C=this.usageHint??"body";y=g[C]}else y=g;return y},r=_,(()=>{const y=typeof Symbol=="function"&&Symbol.metadata?Object.create(i[Symbol.metadata]??null):void 0;s=[j()],a=[j({reflect:!0,attribute:"usage-hint"})],Br(_,null,s,{kind:"accessor",name:"text",static:!1,private:!1,access:{has:g=>"text"in g,get:g=>g.text,set:(g,$)=>{g.text=$}},metadata:y},n,o),Br(_,null,a,{kind:"accessor",name:"usageHint",static:!1,private:!1,access:{has:g=>"usageHint"in g,get:g=>g.usageHint,set:(g,$)=>{g.usageHint=$}},metadata:y},l,d),Br(null,t={value:r},e,{kind:"class",name:r.name,metadata:y},null,u),r=t.value,y&&Object.defineProperty(r,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:y})})(),_.styles=[X,K`
      :host {
        display: block;
        flex: var(--weight);
      }

      h1,
      h2,
      h3,
      h4,
      h5 {
        line-height: inherit;
        font: inherit;
      }
    `],Vt(r,u),r})();var Is=function(e,t,u,r,i,s){function n(_){if(_!==void 0&&typeof _!="function")throw new TypeError("Function expected");return _}for(var o=r.kind,a=o==="getter"?"get":o==="setter"?"set":"value",l=!t&&e?r.static?e:e.prototype:null,d=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),c,p=!1,f=u.length-1;f>=0;f--){var h={};for(var m in r)h[m]=m==="access"?{}:r[m];for(var m in r.access)h.access[m]=r.access[m];h.addInitializer=function(_){if(p)throw new TypeError("Cannot add initializers after decoration has completed");s.push(n(_||null))};var b=(0,u[f])(o==="accessor"?{get:d.get,set:d.set}:d[a],h);if(o==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(c=n(b.get))&&(d.get=c),(c=n(b.set))&&(d.set=c),(c=n(b.init))&&i.unshift(c)}else(c=n(b))&&(o==="field"?i.unshift(c):d[a]=c)}l&&Object.defineProperty(l,r.name,d),p=!0},Ur=function(e,t,u){for(var r=arguments.length>2,i=0;i<t.length;i++)u=r?t[i].call(e,u):t[i].call(e);return r?u:void 0};(()=>{var a,l,Mo,c;let e=[J("a2ui-video")],t,u=[],r,i=ee,s,n=[],o=[];return c=class extends i{constructor(){super(...arguments);T(this,l);T(this,a,Ur(this,n,null));Ur(this,o)}get url(){return D(this,a)}set url(h){z(this,a,h)}render(){var h,m;return E`<section
      class=${q(this.theme.components.Video)}
      style=${(h=this.theme.additionalStyles)!=null&&h.Video?se((m=this.theme.additionalStyles)==null?void 0:m.Video):P}
    >
      ${R(this,l,Mo).call(this)}
    </section>`}},a=new WeakMap,l=new WeakSet,Mo=function(){if(!this.url)return P;if(this.url&&typeof this.url=="object"){if("literalString"in this.url)return E`<video controls src=${this.url.literalString} />`;if("literal"in this.url)return E`<video controls src=${this.url.literal} />`;if(this.url&&"path"in this.url&&this.url.path){if(!this.processor||!this.component)return E`(no processor)`;const h=this.processor.getData(this.component,this.url.path,this.surfaceId??W.DEFAULT_SURFACE_ID);return h?typeof h!="string"?E`Invalid video URL`:E`<video controls src=${h} />`:E`Invalid video URL`}}return E`(empty)`},r=c,(()=>{const h=typeof Symbol=="function"&&Symbol.metadata?Object.create(i[Symbol.metadata]??null):void 0;s=[j()],Is(c,null,s,{kind:"accessor",name:"url",static:!1,private:!1,access:{has:m=>"url"in m,get:m=>m.url,set:(m,b)=>{m.url=b}},metadata:h},n,o),Is(null,t={value:r},e,{kind:"class",name:r.name,metadata:h},null,u),r=t.value,h&&Object.defineProperty(r,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:h})})(),c.styles=[X,K`
      * {
        box-sizing: border-box;
      }

      :host {
        display: block;
        flex: var(--weight);
        min-height: 0;
        overflow: auto;
      }

      video {
        display: block;
        width: 100%;
      }
    `],Ur(r,u),r})();var Ed=Object.defineProperty,Ad=(e,t,u)=>t in e?Ed(e,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[t]=u,qr=(e,t,u)=>(Ad(e,typeof t!="symbol"?t+"":t,u),u),Dd=(e,t,u)=>{if(!t.has(e))throw TypeError("Cannot "+u)},Hr=(e,t)=>{if(Object(t)!==t)throw TypeError('Cannot use the "in" operator on this value');return e.has(t)},Du=(e,t,u)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,u)},Ps=(e,t,u)=>(Dd(e,t,"access private method"),u);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function jo(e,t){return Object.is(e,t)}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let G=null,Xt=!1,Nu=1;const Zu=Symbol("SIGNAL");function mt(e){const t=G;return G=e,t}function Sd(){return G}function Fd(){return Xt}const Pi={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function nr(e){if(Xt)throw new Error(typeof ngDevMode<"u"&&ngDevMode?"Assertion error: signal read during notification phase":"");if(G===null)return;G.consumerOnSignalRead(e);const t=G.nextProducerIndex++;if(Et(G),t<G.producerNode.length&&G.producerNode[t]!==e&&bi(G)){const u=G.producerNode[t];or(u,G.producerIndexOfThis[t])}G.producerNode[t]!==e&&(G.producerNode[t]=e,G.producerIndexOfThis[t]=bi(G)?Uo(e,G,t):0),G.producerLastReadVersion[t]=e.version}function Td(){Nu++}function Lo(e){if(!(!e.dirty&&e.lastCleanEpoch===Nu)){if(!e.producerMustRecompute(e)&&!Nd(e)){e.dirty=!1,e.lastCleanEpoch=Nu;return}e.producerRecomputeValue(e),e.dirty=!1,e.lastCleanEpoch=Nu}}function Bo(e){if(e.liveConsumerNode===void 0)return;const t=Xt;Xt=!0;try{for(const u of e.liveConsumerNode)u.dirty||Id(u)}finally{Xt=t}}function Od(){return(G==null?void 0:G.consumerAllowSignalWrites)!==!1}function Id(e){var t;e.dirty=!0,Bo(e),(t=e.consumerMarkedDirty)==null||t.call(e.wrapper??e)}function Pd(e){return e&&(e.nextProducerIndex=0),mt(e)}function zd(e,t){if(mt(t),!(!e||e.producerNode===void 0||e.producerIndexOfThis===void 0||e.producerLastReadVersion===void 0)){if(bi(e))for(let u=e.nextProducerIndex;u<e.producerNode.length;u++)or(e.producerNode[u],e.producerIndexOfThis[u]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}function Nd(e){Et(e);for(let t=0;t<e.producerNode.length;t++){const u=e.producerNode[t],r=e.producerLastReadVersion[t];if(r!==u.version||(Lo(u),r!==u.version))return!0}return!1}function Uo(e,t,u){var r;if(zi(e),Et(e),e.liveConsumerNode.length===0){(r=e.watched)==null||r.call(e.wrapper);for(let i=0;i<e.producerNode.length;i++)e.producerIndexOfThis[i]=Uo(e.producerNode[i],e,i)}return e.liveConsumerIndexOfThis.push(u),e.liveConsumerNode.push(t)-1}function or(e,t){var u;if(zi(e),Et(e),typeof ngDevMode<"u"&&ngDevMode&&t>=e.liveConsumerNode.length)throw new Error(`Assertion error: active consumer index ${t} is out of bounds of ${e.liveConsumerNode.length} consumers)`);if(e.liveConsumerNode.length===1){(u=e.unwatched)==null||u.call(e.wrapper);for(let i=0;i<e.producerNode.length;i++)or(e.producerNode[i],e.producerIndexOfThis[i])}const r=e.liveConsumerNode.length-1;if(e.liveConsumerNode[t]=e.liveConsumerNode[r],e.liveConsumerIndexOfThis[t]=e.liveConsumerIndexOfThis[r],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,t<e.liveConsumerNode.length){const i=e.liveConsumerIndexOfThis[t],s=e.liveConsumerNode[t];Et(s),s.producerIndexOfThis[i]=t}}function bi(e){var t;return e.consumerIsAlwaysLive||(((t=e==null?void 0:e.liveConsumerNode)==null?void 0:t.length)??0)>0}function Et(e){e.producerNode??(e.producerNode=[]),e.producerIndexOfThis??(e.producerIndexOfThis=[]),e.producerLastReadVersion??(e.producerLastReadVersion=[])}function zi(e){e.liveConsumerNode??(e.liveConsumerNode=[]),e.liveConsumerIndexOfThis??(e.liveConsumerIndexOfThis=[])}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function qo(e){if(Lo(e),nr(e),e.value===mi)throw e.error;return e.value}function Rd(e){const t=Object.create(Md);t.computation=e;const u=()=>qo(t);return u[Zu]=t,u}const Vr=Symbol("UNSET"),Wr=Symbol("COMPUTING"),mi=Symbol("ERRORED"),Md={...Pi,value:Vr,dirty:!0,error:null,equal:jo,producerMustRecompute(e){return e.value===Vr||e.value===Wr},producerRecomputeValue(e){if(e.value===Wr)throw new Error("Detected cycle in computations.");const t=e.value;e.value=Wr;const u=Pd(e);let r,i=!1;try{r=e.computation.call(e.wrapper),i=t!==Vr&&t!==mi&&e.equal.call(e.wrapper,t,r)}catch(s){r=mi,e.error=s}finally{zd(e,u)}if(i){e.value=t;return}e.value=r,e.version++}};/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function jd(){throw new Error}let Ld=jd;function Bd(){Ld()}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ud(e){const t=Object.create(Vd);t.value=e;const u=()=>(nr(t),t.value);return u[Zu]=t,u}function qd(){return nr(this),this.value}function Hd(e,t){Od()||Bd(),e.equal.call(e.wrapper,e.value,t)||(e.value=t,Wd(e))}const Vd={...Pi,equal:jo,value:void 0};function Wd(e){e.version++,Td(),Bo(e)}/**
 * @license
 * Copyright 2024 Bloomberg Finance L.P.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe=Symbol("node");var ut;(e=>{var t,u,r,i;class s{constructor(a,l={}){Du(this,u),qr(this,t);const c=Ud(a)[Zu];if(this[oe]=c,c.wrapper=this,l){const p=l.equals;p&&(c.equal=p),c.watched=l[e.subtle.watched],c.unwatched=l[e.subtle.unwatched]}}get(){if(!(0,e.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return qd.call(this[oe])}set(a){if(!(0,e.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(Fd())throw new Error("Writes to signals not permitted during Watcher callback");const l=this[oe];Hd(l,a)}}t=oe,u=new WeakSet,e.isState=o=>typeof o=="object"&&Hr(u,o),e.State=s;class n{constructor(a,l){Du(this,i),qr(this,r);const c=Rd(a)[Zu];if(c.consumerAllowSignalWrites=!0,this[oe]=c,c.wrapper=this,l){const p=l.equals;p&&(c.equal=p),c.watched=l[e.subtle.watched],c.unwatched=l[e.subtle.unwatched]}}get(){if(!(0,e.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return qo(this[oe])}}r=oe,i=new WeakSet,e.isComputed=o=>typeof o=="object"&&Hr(i,o),e.Computed=n,(o=>{var a,l,d,c;function p(v){let y,g=null;try{g=mt(null),y=v()}finally{mt(g)}return y}o.untrack=p;function f(v){var y;if(!(0,e.isComputed)(v)&&!(0,e.isWatcher)(v))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return((y=v[oe].producerNode)==null?void 0:y.map(g=>g.wrapper))??[]}o.introspectSources=f;function h(v){var y;if(!(0,e.isComputed)(v)&&!(0,e.isState)(v))throw new TypeError("Called introspectSinks without a Signal argument");return((y=v[oe].liveConsumerNode)==null?void 0:y.map(g=>g.wrapper))??[]}o.introspectSinks=h;function m(v){if(!(0,e.isComputed)(v)&&!(0,e.isState)(v))throw new TypeError("Called hasSinks without a Signal argument");const y=v[oe].liveConsumerNode;return y?y.length>0:!1}o.hasSinks=m;function b(v){if(!(0,e.isComputed)(v)&&!(0,e.isWatcher)(v))throw new TypeError("Called hasSources without a Computed or Watcher argument");const y=v[oe].producerNode;return y?y.length>0:!1}o.hasSources=b;class _{constructor(y){Du(this,l),Du(this,d),qr(this,a);let g=Object.create(Pi);g.wrapper=this,g.consumerMarkedDirty=y,g.consumerIsAlwaysLive=!0,g.consumerAllowSignalWrites=!1,g.producerNode=[],this[oe]=g}watch(...y){if(!(0,e.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");Ps(this,d,c).call(this,y);const g=this[oe];g.dirty=!1;const $=mt(g);for(const C of y)nr(C[oe]);mt($)}unwatch(...y){if(!(0,e.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");Ps(this,d,c).call(this,y);const g=this[oe];Et(g);for(let $=g.producerNode.length-1;$>=0;$--)if(y.includes(g.producerNode[$].wrapper)){or(g.producerNode[$],g.producerIndexOfThis[$]);const C=g.producerNode.length-1;if(g.producerNode[$]=g.producerNode[C],g.producerIndexOfThis[$]=g.producerIndexOfThis[C],g.producerNode.length--,g.producerIndexOfThis.length--,g.nextProducerIndex--,$<g.producerNode.length){const S=g.producerIndexOfThis[$],N=g.producerNode[$];zi(N),N.liveConsumerIndexOfThis[S]=$}}}getPending(){if(!(0,e.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[oe].producerNode.filter(g=>g.dirty).map(g=>g.wrapper)}}a=oe,l=new WeakSet,d=new WeakSet,c=function(v){for(const y of v)if(!(0,e.isComputed)(y)&&!(0,e.isState)(y))throw new TypeError("Called watch/unwatch without a Computed or State argument")},e.isWatcher=v=>Hr(l,v),o.Watcher=_;function w(){var v;return(v=Sd())==null?void 0:v.wrapper}o.currentComputed=w,o.watched=Symbol("watched"),o.unwatched=Symbol("unwatched")})(e.subtle||(e.subtle={}))})(ut||(ut={}));/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zd=Symbol("SignalWatcherBrand"),Gd=new FinalizationRegistry(({watcher:e,signal:t})=>{e.unwatch(t)}),zs=new WeakMap;function Kd(e){return e[Zd]===!0?(console.warn("SignalWatcher should not be applied to the same class more than once."),e):class extends e{constructor(){super(...arguments),this._$St=new ut.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set}_$Sl(){if(this._$Su!==void 0)return;this._$Sv=new ut.Computed(()=>{this._$St.get(),super.performUpdate()});const t=this._$Su=new ut.subtle.Watcher(function(){const u=zs.get(this);u!==void 0&&(u._$Si===!1&&u.requestUpdate(),this.watch())});zs.set(t,this),Gd.register(this,{watcher:t,signal:this._$Sv}),t.watch(this._$Sv)}_$Sp(){this._$Su!==void 0&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0)}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get())}update(t){try{this._$So?(this._$So=!1,super.update(t)):this._$Sh.forEach(u=>u.commit())}finally{this.isUpdatePending=!1,this._$Sh.clear()}}requestUpdate(t,u,r){this._$So=!0,super.requestUpdate(t,u,r)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{this.isConnected===!1&&this._$Sp()})}_(t){this._$Sh.add(t);const u=this._$So;this.requestUpdate(),this._$So=u}m(t){this._$Sh.delete(t)}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const eu=globalThis,Ns=e=>e,Gu=eu.trustedTypes,Rs=Gu?Gu.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ho="$lit$",Be=`lit$${Math.random().toFixed(9).slice(2)}$`,Vo="?"+Be,Jd=`<${Vo}>`,st=document,lu=()=>st.createComment(""),du=e=>e===null||typeof e!="object"&&typeof e!="function",Ni=Array.isArray,Qd=e=>Ni(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Zr=`[ 	
\f\r]`,Wt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ms=/-->/g,js=/>/g,Ye=RegExp(`>|${Zr}(?:([^\\s"'>=/]+)(${Zr}*=${Zr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ls=/'/g,Bs=/"/g,Wo=/^(?:script|style|textarea|title)$/i,Yd=e=>(t,...u)=>({_$litType$:e,strings:t,values:u}),Us=Yd(1),At=Symbol.for("lit-noChange"),re=Symbol.for("lit-nothing"),qs=new WeakMap,et=st.createTreeWalker(st,129);function Zo(e,t){if(!Ni(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Rs!==void 0?Rs.createHTML(t):t}const Xd=(e,t)=>{const u=e.length-1,r=[];let i,s=t===2?"<svg>":t===3?"<math>":"",n=Wt;for(let o=0;o<u;o++){const a=e[o];let l,d,c=-1,p=0;for(;p<a.length&&(n.lastIndex=p,d=n.exec(a),d!==null);)p=n.lastIndex,n===Wt?d[1]==="!--"?n=Ms:d[1]!==void 0?n=js:d[2]!==void 0?(Wo.test(d[2])&&(i=RegExp("</"+d[2],"g")),n=Ye):d[3]!==void 0&&(n=Ye):n===Ye?d[0]===">"?(n=i??Wt,c=-1):d[1]===void 0?c=-2:(c=n.lastIndex-d[2].length,l=d[1],n=d[3]===void 0?Ye:d[3]==='"'?Bs:Ls):n===Bs||n===Ls?n=Ye:n===Ms||n===js?n=Wt:(n=Ye,i=void 0);const f=n===Ye&&e[o+1].startsWith("/>")?" ":"";s+=n===Wt?a+Jd:c>=0?(r.push(l),a.slice(0,c)+Ho+a.slice(c)+Be+f):a+Be+(c===-2?o:f)}return[Zo(e,s+(e[u]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};let _i=class Go{constructor({strings:t,_$litType$:u},r){let i;this.parts=[];let s=0,n=0;const o=t.length-1,a=this.parts,[l,d]=Xd(t,u);if(this.el=Go.createElement(l,r),et.currentNode=this.el.content,u===2||u===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=et.nextNode())!==null&&a.length<o;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(Ho)){const p=d[n++],f=i.getAttribute(c).split(Be),h=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:h[2],strings:f,ctor:h[1]==="."?th:h[1]==="?"?uh:h[1]==="@"?rh:ar}),i.removeAttribute(c)}else c.startsWith(Be)&&(a.push({type:6,index:s}),i.removeAttribute(c));if(Wo.test(i.tagName)){const c=i.textContent.split(Be),p=c.length-1;if(p>0){i.textContent=Gu?Gu.emptyScript:"";for(let f=0;f<p;f++)i.append(c[f],lu()),et.nextNode(),a.push({type:2,index:++s});i.append(c[p],lu())}}}else if(i.nodeType===8)if(i.data===Vo)a.push({type:2,index:s});else{let c=-1;for(;(c=i.data.indexOf(Be,c+1))!==-1;)a.push({type:7,index:s}),c+=Be.length-1}s++}}static createElement(t,u){const r=st.createElement("template");return r.innerHTML=t,r}};function Dt(e,t,u=e,r){var n,o;if(t===At)return t;let i=r!==void 0?(n=u._$Co)==null?void 0:n[r]:u._$Cl;const s=du(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==s&&((o=i==null?void 0:i._$AO)==null||o.call(i,!1),s===void 0?i=void 0:(i=new s(e),i._$AT(e,u,r)),r!==void 0?(u._$Co??(u._$Co=[]))[r]=i:u._$Cl=i),i!==void 0&&(t=Dt(e,i._$AS(e,t.values),i,r)),t}class eh{constructor(t,u){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=u}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:u},parts:r}=this._$AD,i=((t==null?void 0:t.creationScope)??st).importNode(u,!0);et.currentNode=i;let s=et.nextNode(),n=0,o=0,a=r[0];for(;a!==void 0;){if(n===a.index){let l;a.type===2?l=new xu(s,s.nextSibling,this,t):a.type===1?l=new a.ctor(s,a.name,a.strings,this,t):a.type===6&&(l=new ih(s,this,t)),this._$AV.push(l),a=r[++o]}n!==(a==null?void 0:a.index)&&(s=et.nextNode(),n++)}return et.currentNode=st,i}p(t){let u=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,u),u+=r.strings.length-2):r._$AI(t[u])),u++}}class xu{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,u,r,i){this.type=2,this._$AH=re,this._$AN=void 0,this._$AA=t,this._$AB=u,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const u=this._$AM;return u!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=u.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,u=this){t=Dt(this,t,u),du(t)?t===re||t==null||t===""?(this._$AH!==re&&this._$AR(),this._$AH=re):t!==this._$AH&&t!==At&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Qd(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==re&&du(this._$AH)?this._$AA.nextSibling.data=t:this.T(st.createTextNode(t)),this._$AH=t}$(t){var s;const{values:u,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=_i.createElement(Zo(r.h,r.h[0]),this.options)),r);if(((s=this._$AH)==null?void 0:s._$AD)===i)this._$AH.p(u);else{const n=new eh(i,this),o=n.u(this.options);n.p(u),this.T(o),this._$AH=n}}_$AC(t){let u=qs.get(t.strings);return u===void 0&&qs.set(t.strings,u=new _i(t)),u}k(t){Ni(this._$AH)||(this._$AH=[],this._$AR());const u=this._$AH;let r,i=0;for(const s of t)i===u.length?u.push(r=new xu(this.O(lu()),this.O(lu()),this,this.options)):r=u[i],r._$AI(s),i++;i<u.length&&(this._$AR(r&&r._$AB.nextSibling,i),u.length=i)}_$AR(t=this._$AA.nextSibling,u){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,u);t!==this._$AB;){const i=Ns(t).nextSibling;Ns(t).remove(),t=i}}setConnected(t){var u;this._$AM===void 0&&(this._$Cv=t,(u=this._$AP)==null||u.call(this,t))}}class ar{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,u,r,i,s){this.type=1,this._$AH=re,this._$AN=void 0,this.element=t,this.name=u,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=re}_$AI(t,u=this,r,i){const s=this.strings;let n=!1;if(s===void 0)t=Dt(this,t,u,0),n=!du(t)||t!==this._$AH&&t!==At,n&&(this._$AH=t);else{const o=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=Dt(this,o[r+a],u,a),l===At&&(l=this._$AH[a]),n||(n=!du(l)||l!==this._$AH[a]),l===re?t=re:t!==re&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}n&&!i&&this.j(t)}j(t){t===re?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class th extends ar{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===re?void 0:t}}class uh extends ar{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==re)}}class rh extends ar{constructor(t,u,r,i,s){super(t,u,r,i,s),this.type=5}_$AI(t,u=this){if((t=Dt(this,t,u,0)??re)===At)return;const r=this._$AH,i=t===re&&r!==re||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==re&&(r===re||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var u;typeof this._$AH=="function"?this._$AH.call(((u=this.options)==null?void 0:u.host)??this.element,t):this._$AH.handleEvent(t)}}class ih{constructor(t,u,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=u,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Dt(this,t)}}const Gr=eu.litHtmlPolyfillSupport;Gr==null||Gr(_i,xu),(eu.litHtmlVersions??(eu.litHtmlVersions=[])).push("3.3.2");const sh=(e,t,u)=>{const r=(u==null?void 0:u.renderBefore)??t;let i=r._$litPart$;if(i===void 0){const s=(u==null?void 0:u.renderBefore)??null;r._$litPart$=i=new xu(t.insertBefore(lu(),s),s,void 0,u??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ut.State;ut.Computed;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ru=globalThis,Ri=Ru.ShadowRoot&&(Ru.ShadyCSS===void 0||Ru.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Mi=Symbol(),Hs=new WeakMap;let Ko=class{constructor(t,u,r){if(this._$cssResult$=!0,r!==Mi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=u}get styleSheet(){let t=this.o;const u=this.t;if(Ri&&t===void 0){const r=u!==void 0&&u.length===1;r&&(t=Hs.get(u)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Hs.set(u,t))}return t}toString(){return this.cssText}};const nh=e=>new Ko(typeof e=="string"?e:e+"",void 0,Mi),oh=(e,...t)=>{const u=e.length===1?e[0]:t.reduce((r,i,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new Ko(u,e,Mi)},ah=(e,t)=>{if(Ri)e.adoptedStyleSheets=t.map(u=>u instanceof CSSStyleSheet?u:u.styleSheet);else for(const u of t){const r=document.createElement("style"),i=Ru.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=u.cssText,e.appendChild(r)}},Vs=Ri?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let u="";for(const r of t.cssRules)u+=r.cssText;return nh(u)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ch,defineProperty:lh,getOwnPropertyDescriptor:dh,getOwnPropertyNames:hh,getOwnPropertySymbols:fh,getPrototypeOf:ph}=Object,Ve=globalThis,Ws=Ve.trustedTypes,bh=Ws?Ws.emptyScript:"",Kr=Ve.reactiveElementPolyfillSupport,tu=(e,t)=>e,Ku={toAttribute(e,t){switch(t){case Boolean:e=e?bh:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let u=e;switch(t){case Boolean:u=e!==null;break;case Number:u=e===null?null:Number(e);break;case Object:case Array:try{u=JSON.parse(e)}catch{u=null}}return u}},ji=(e,t)=>!ch(e,t),Zs={attribute:!0,type:String,converter:Ku,reflect:!1,useDefault:!1,hasChanged:ji};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ve.litPropertyMetadata??(Ve.litPropertyMetadata=new WeakMap);class pt extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,u=Zs){if(u.state&&(u.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((u=Object.create(u)).wrapped=!0),this.elementProperties.set(t,u),!u.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,u);i!==void 0&&lh(this.prototype,t,i)}}static getPropertyDescriptor(t,u,r){const{get:i,set:s}=dh(this.prototype,t)??{get(){return this[u]},set(n){this[u]=n}};return{get:i,set(n){const o=i==null?void 0:i.call(this);s==null||s.call(this,n),this.requestUpdate(t,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Zs}static _$Ei(){if(this.hasOwnProperty(tu("elementProperties")))return;const t=ph(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(tu("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(tu("properties"))){const u=this.properties,r=[...hh(u),...fh(u)];for(const i of r)this.createProperty(i,u[i])}const t=this[Symbol.metadata];if(t!==null){const u=litPropertyMetadata.get(t);if(u!==void 0)for(const[r,i]of u)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[u,r]of this.elementProperties){const i=this._$Eu(u,r);i!==void 0&&this._$Eh.set(i,u)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const u=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)u.unshift(Vs(i))}else t!==void 0&&u.push(Vs(t));return u}static _$Eu(t,u){const r=u.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(u=>this.enableUpdating=u),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(u=>u(this))}addController(t){var u;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((u=t.hostConnected)==null||u.call(t))}removeController(t){var u;(u=this._$EO)==null||u.delete(t)}_$E_(){const t=new Map,u=this.constructor.elementProperties;for(const r of u.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ah(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(u=>{var r;return(r=u.hostConnected)==null?void 0:r.call(u)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(u=>{var r;return(r=u.hostDisconnected)==null?void 0:r.call(u)})}attributeChangedCallback(t,u,r){this._$AK(t,r)}_$ET(t,u){var s;const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const n=(((s=r.converter)==null?void 0:s.toAttribute)!==void 0?r.converter:Ku).toAttribute(u,r.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,u){var s,n;const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=r.getPropertyOptions(i),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)==null?void 0:s.fromAttribute)!==void 0?o.converter:Ku;this._$Em=i;const l=a.fromAttribute(u,o.type);this[i]=l??((n=this._$Ej)==null?void 0:n.get(i))??l,this._$Em=null}}requestUpdate(t,u,r,i=!1,s){var n;if(t!==void 0){const o=this.constructor;if(i===!1&&(s=this[t]),r??(r=o.getPropertyOptions(t)),!((r.hasChanged??ji)(s,u)||r.useDefault&&r.reflect&&s===((n=this._$Ej)==null?void 0:n.get(t))&&!this.hasAttribute(o._$Eu(t,r))))return;this.C(t,u,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,u,{useDefault:r,reflect:i,wrapped:s},n){r&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??u??this[t]),s!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(u=void 0),this._$AL.set(t,u)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(u){Promise.reject(u)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,n]of i){const{wrapped:o}=n,a=this[s];o!==!0||this._$AL.has(s)||a===void 0||this.C(s,void 0,n,a)}}let t=!1;const u=this._$AL;try{t=this.shouldUpdate(u),t?(this.willUpdate(u),(r=this._$EO)==null||r.forEach(i=>{var s;return(s=i.hostUpdate)==null?void 0:s.call(i)}),this.update(u)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(u)}willUpdate(t){}_$AE(t){var u;(u=this._$EO)==null||u.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(u=>this._$ET(u,this[u]))),this._$EM()}updated(t){}firstUpdated(t){}}pt.elementStyles=[],pt.shadowRootOptions={mode:"open"},pt[tu("elementProperties")]=new Map,pt[tu("finalized")]=new Map,Kr==null||Kr({ReactiveElement:pt}),(Ve.reactiveElementVersions??(Ve.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rt=globalThis;let uu=class extends pt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var u;const t=super.createRenderRoot();return(u=this.renderOptions).renderBefore??(u.renderBefore=t.firstChild),t}update(t){const u=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=sh(u,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return At}};var Qs;uu._$litElement$=!0,uu.finalized=!0,(Qs=rt.litElementHydrateSupport)==null||Qs.call(rt,{LitElement:uu});const Jr=rt.litElementPolyfillSupport;Jr==null||Jr({LitElement:uu});(rt.litElementVersions??(rt.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mh=e=>(t,u)=>{u!==void 0?u.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _h={attribute:!0,type:String,converter:Ku,reflect:!1,hasChanged:ji},gh=(e=_h,t,u)=>{const{kind:r,metadata:i}=u;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(u.name,e),r==="accessor"){const{name:n}=u;return{set(o){const a=t.get.call(this);t.set.call(this,o),this.requestUpdate(n,a,e,!0,o)},init(o){return o!==void 0&&this.C(n,void 0,e,o),o}}}if(r==="setter"){const{name:n}=u;return function(o){const a=this[n];t.call(this,o),this.requestUpdate(n,a,e,!0,o)}}throw Error("Unsupported decorator location: "+r)};function Qr(e){return(t,u)=>typeof u=="object"?gh(e,t,u):((r,i,s)=>{const n=i.hasOwnProperty(s);return i.constructor.createProperty(s,r),n?Object.getOwnPropertyDescriptor(i,s):void 0})(e,t,u)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let yh=class extends Event{constructor(t,u,r,i){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=u,this.callback=r,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class xh{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,u=!1){const r=u||!Object.is(t,this.o);this.o=t,r&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[u,{disposer:r}]of this.subscriptions)u(this.o,r)},t!==void 0&&(this.value=t)}addCallback(t,u,r){if(!r)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:u});const{disposer:i}=this.subscriptions.get(t);t(this.value,i)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let vh=class extends Event{constructor(t,u){super("context-provider",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=u}};class Gs extends xh{constructor(t,u,r){var i,s;super(u.context!==void 0?u.initialValue:r),this.onContextRequest=n=>{if(n.context!==this.context)return;const o=n.contextTarget??n.composedPath()[0];o!==this.host&&(n.stopPropagation(),this.addCallback(n.callback,o,n.subscribe))},this.onProviderRequest=n=>{if(n.context!==this.context||(n.contextTarget??n.composedPath()[0])===this.host)return;const o=new Set;for(const[a,{consumerHost:l}]of this.subscriptions)o.has(a)||(o.add(a),l.dispatchEvent(new yh(this.context,l,a,!0)));n.stopPropagation()},this.host=t,u.context!==void 0?this.context=u.context:this.context=u,this.attachListeners(),(s=(i=this.host).addController)==null||s.call(i,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new vh(this.context,this.host))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $h({context:e}){return(t,u)=>{const r=new WeakMap;if(typeof u=="object")return{get(){return t.get.call(this)},set(i){return r.get(this).setValue(i),t.set.call(this,i)},init(i){return r.set(this,new Gs(this,{context:e,initialValue:i})),i}};{t.constructor.addInitializer(n=>{r.set(n,new Gs(n,{context:e}))});const i=Object.getOwnPropertyDescriptor(t,u);let s;if(i===void 0){const n=new WeakMap;s={get(){return n.get(this)},set(o){r.get(this).setValue(o),n.set(this,o)},configurable:!0,enumerable:!0}}else{const n=i.set;s={...i,set(o){r.get(this).setValue(o),n==null||n.call(this,o)}}}return void Object.defineProperty(t,u,s)}}}const Ch={additionalStyles:{},components:{AudioPlayer:{},Button:{"layout-pt-2":!0,"layout-pb-2":!0,"layout-pl-3":!0,"layout-pr-3":!0,"border-br-12":!0,"border-bw-0":!0,"color-bgc-p30":!0},Card:{"border-br-9":!0,"layout-p-4":!0,"color-bgc-n100":!0},CheckBox:{element:{},label:{},container:{}},Column:{"layout-g-2":!0},DateTimeInput:{container:{},label:{},element:{}},Divider:{},Image:{all:{"border-br-5":!0,"layout-w-100":!0},avatar:{},header:{},icon:{},largeFeature:{},mediumFeature:{},smallFeature:{}},Icon:{},List:{"layout-g-4":!0,"layout-p-2":!0},Modal:{backdrop:{},element:{}},MultipleChoice:{container:{},label:{},element:{}},Row:{"layout-g-4":!0},Slider:{container:{},label:{},element:{}},Tabs:{container:{},controls:{all:{},selected:{}},element:{}},Text:{all:{"layout-w-100":!0},h1:{"typography-f-sf":!0,"typography-w-400":!0,"layout-m-0":!0,"typography-sz-hs":!0},h2:{"typography-f-sf":!0,"typography-w-400":!0,"layout-m-0":!0,"typography-sz-tl":!0},h3:{"typography-f-sf":!0,"typography-w-400":!0,"layout-m-0":!0,"typography-sz-tl":!0},h4:{"typography-f-sf":!0,"typography-w-400":!0,"layout-m-0":!0,"typography-sz-bl":!0},h5:{"typography-f-sf":!0,"typography-w-400":!0,"layout-m-0":!0,"typography-sz-bm":!0},body:{},caption:{}},TextField:{container:{},label:{},element:{}},Video:{"border-br-5":!0}},elements:{a:{},audio:{},body:{},button:{},h1:{},h2:{},h3:{},h4:{},h5:{},iframe:{},input:{},p:{},pre:{},textarea:{},video:{}},markdown:{p:[],h1:[],h2:[],h3:[],h4:[],h5:[],ul:[],ol:[],li:[],a:[],strong:[],em:[]}};var Ys,Xs,en,tn,un,rn,le;rn=[mh("a2ui-theme-provider")];class Re extends(un=Kd(uu),tn=[$h({context:xn})],en=[Qr({type:String})],Xs=[Qr({type:Object})],Ys=[Qr({type:Object})],un){constructor(){super(...arguments);fe(this,"theme",we(le,8,this,Ch)),we(le,11,this);fe(this,"surfaceId",we(le,12,this,"")),we(le,15,this);fe(this,"surface",we(le,16,this)),we(le,19,this);fe(this,"processor",we(le,20,this)),we(le,23,this)}render(){return!this.surface||!this.processor?Us``:Us`
      <a2ui-surface
        .surfaceId=${this.surfaceId}
        .surface=${this.surface}
        .processor=${this.processor}
      ></a2ui-surface>
    `}}le=qi(un),ot(le,5,"theme",tn,Re),ot(le,5,"surfaceId",en,Re),ot(le,5,"surface",Xs,Re),ot(le,5,"processor",Ys,Re),Re=ot(le,0,"A2UIThemeProvider",rn,Re),fe(Re,"styles",oh`
    :host {
      display: block;
    }
  `),we(le,1,Re);class wh{constructor(t){fe(this,"processor");fe(this,"container");this.container=t,this.processor=hs.createSignalA2uiMessageProcessor()}processTurn(t){if(!t||t.length===0)return;if(t.some(r=>r.deleteSurface!==void 0)){this.clear();return}try{this.processor.processMessages(t)}catch(r){console.error("[A2UIRenderer] Error processing messages:",r)}this.rebuildDOM()}rebuildDOM(){this.container.innerHTML="";const t=this.processor.getSurfaces();for(const[u,r]of t.entries()){const i=document.createElement("a2ui-theme-provider");i.surfaceId=u,i.surface=r,i.processor=this.processor,i.style.display="block",this.container.appendChild(i)}}clear(){this.container.innerHTML="",this.processor=hs.createSignalA2uiMessageProcessor()}}const Jo=document.getElementById("surface-container");if(!Jo)throw new Error("Missing #surface-container element");const Ks=new wh(Jo);function kh(e){return e.some(t=>(t==null?void 0:t.deleteSurface)!==void 0)}function Eh(e=2){return new Promise(t=>{const u=r=>{if(r<=0){t();return}requestAnimationFrame(()=>u(r-1))};u(e)})}const Ah={reset(){Ks.clear()},async processTurn(e){if(!e||e.length===0)return{shouldCapture:!1};const t=kh(e);return Ks.processTurn(e),await Eh(2),{shouldCapture:!t}}};window.__A2UI_RENDER__=Ah;
