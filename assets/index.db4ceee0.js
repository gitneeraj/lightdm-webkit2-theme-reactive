import{w as e,S as t,i as a,s,a as n,c as l,b as r,d as o,e as c,f as i,n as $,g as m,h as u,j as f,t as h,k as d,l as p,m as g,o as v,p as w,q as b,r as y,u as x,v as k,x as E,y as _,z as D,A as M,B as I,C as S,D as A,E as C,F as H,G as z,H as V,I as L,J as T,K as N,L as P,M as U,N as q,O as B,P as F,R as O,Q as R}from"./vendor.ffa93eb9.js";var j=(()=>{const e={in_authentication:!1,is_authenticated:!1,authentication_user:null,default_session:"default",can_suspend:!0,can_hibernate:!0,can_shutdown:!0,can_restart:!0,select_user:"johnny",sessions:[{name:"DWM",key:"dwm"},{name:"awesome wm",key:"awesome"},{name:"bspwm",key:"bspwm"},{name:"KDE Plasma",key:"plasma"},{name:"Gnome 3",key:"gnome"},{name:"XFCE 4",key:"xfce"},{name:"Cinnamon",key:"cinnamon"},{name:"i3wm",key:"i3"},{name:"xmonad",key:"xmonad"},{name:"Deepin",key:"deepin"},{name:"Budgie",key:"budgie"}],users:[{display_name:"Captain America",username:"captain",image:"images/profiles/captain.png"},{display_name:"Tony Stark",username:"stark",image:"images/profiles/stark.png"}],languages:[{name:"American English",code:"en_US.utf8"}],language:"American English",authenticate:e=>setTimeout((()=>Promise.resolve()),1e3),cancel_authentication:()=>{e.is_authenticated=!1,console.log("cancelling authentication...")},respond:t=>{"toor"===t&&(e.is_authenticated=!0),window.authentication_complete()},start_session_sync:e=>{console.log(`Logged with session: '${e}'!`)},shutdown:()=>{console.log("System is shutting down...")},restart:()=>{console.log("System is rebooting...")},hibernate:()=>{console.log("System is hibernating...")},suspend:()=>{console.log("System is suspending...")}};return window.lightdm||e})();const J=e(j.default_session),G=e(j.is_authenticated);e(j.in_authentication);const K=e(!1),Q=e(!1);function W(e){let t,a,s=e[4].svg+"";return{c(){t=n("svg"),this.h()},l(e){t=l(e,"svg",{class:!0,focusable:!0,width:!0,height:!0,fill:!0,viewBox:!0},1),r(t).forEach(o),this.h()},h(){c(t,"class",a=e[5].class),c(t,"focusable",e[2]),c(t,"width",e[0]),c(t,"height",e[1]),c(t,"fill",e[3]),c(t,"viewBox","0 0 "+e[4].box+" "+e[4].box)},m(e,a){i(e,t,a),t.innerHTML=s},p(e,[s]){32&s&&a!==(a=e[5].class)&&c(t,"class",a),4&s&&c(t,"focusable",e[2]),1&s&&c(t,"width",e[0]),2&s&&c(t,"height",e[1]),8&s&&c(t,"fill",e[3])},i:$,o:$,d(e){e&&o(t)}}}function X(e,t,a){let{name:s}=t,{width:n="1rem"}=t,{height:l="1rem"}=t,{focusable:r="false"}=t,{fill:o="currentColor"}=t,c=[{box:32,name:"laptop",svg:`<path d="M28 4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v4H8v2h16v-2h-4v-4h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM18 28h-4v-4h4zm10-6H4V6h24z" fill="${o}"/><rect x="0" y="0" width="32" height="32" fill="rgba(0, 0, 0, 0)" />`},{box:512,name:"power",svg:`<path d="M378 108a191.41 191.41 0 0 1 70 148c0 106-86 192-192 192S64 362 64 256a192 192 0 0 1 69-148" fill="none" stroke="${o}" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="${o}" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 64v192"/><rect x="0" y="0" width="512" height="512" fill="rgba(0, 0, 0, 0)" />`},{box:16,name:"arrow-right",svg:`<g fill="${o}"><path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/></g><rect x="0" y="0" width="16" height="16" fill="rgba(0, 0, 0, 0)" />`},{box:36,name:"cog",svg:`<path class="clr-i-outline clr-i-outline-path-1" d="M18.1 11c-3.9 0-7 3.1-7 7s3.1 7 7 7s7-3.1 7-7s-3.1-7-7-7zm0 12c-2.8 0-5-2.2-5-5s2.2-5 5-5s5 2.2 5 5s-2.2 5-5 5z" fill="${o}"/><path class="clr-i-outline clr-i-outline-path-2" d="M32.8 14.7l-2.8-.9l-.6-1.5l1.4-2.6c.3-.6.2-1.4-.3-1.9l-2.4-2.4c-.5-.5-1.3-.6-1.9-.3l-2.6 1.4l-1.5-.6l-.9-2.8C21 2.5 20.4 2 19.7 2h-3.4c-.7 0-1.3.5-1.4 1.2L14 6c-.6.1-1.1.3-1.6.6L9.8 5.2c-.6-.3-1.4-.2-1.9.3L5.5 7.9c-.5.5-.6 1.3-.3 1.9l1.3 2.5c-.2.5-.4 1.1-.6 1.6l-2.8.9c-.6.2-1.1.8-1.1 1.5v3.4c0 .7.5 1.3 1.2 1.5l2.8.9l.6 1.5l-1.4 2.6c-.3.6-.2 1.4.3 1.9l2.4 2.4c.5.5 1.3.6 1.9.3l2.6-1.4l1.5.6l.9 2.9c.2.6.8 1.1 1.5 1.1h3.4c.7 0 1.3-.5 1.5-1.1l.9-2.9l1.5-.6l2.6 1.4c.6.3 1.4.2 1.9-.3l2.4-2.4c.5-.5.6-1.3.3-1.9l-1.4-2.6l.6-1.5l2.9-.9c.6-.2 1.1-.8 1.1-1.5v-3.4c0-.7-.5-1.4-1.2-1.6zm-.8 4.7l-3.6 1.1l-.1.5l-.9 2.1l-.3.5l1.8 3.3l-2 2l-3.3-1.8l-.5.3c-.7.4-1.4.7-2.1.9l-.5.1l-1.1 3.6h-2.8l-1.1-3.6l-.5-.1l-2.1-.9l-.5-.3l-3.3 1.8l-2-2l1.8-3.3l-.3-.5c-.4-.7-.7-1.4-.9-2.1l-.1-.5L4 19.4v-2.8l3.4-1l.2-.5c.2-.8.5-1.5.9-2.2l.3-.5l-1.7-3.3l2-2l3.2 1.8l.5-.3c.7-.4 1.4-.7 2.2-.9l.5-.2L16.6 4h2.8l1.1 3.5l.5.2c.7.2 1.4.5 2.1.9l.5.3l3.3-1.8l2 2l-1.8 3.3l.3.5c.4.7.7 1.4.9 2.1l.1.5l3.6 1.1v2.8z" fill="${o}"/><rect x="0" y="0" width="36" height="36" fill="rgba(0, 0, 0, 0)" />`},{box:1024,name:"loading",svg:`<path d="M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3c22.2 52.4 53.9 99.5 94.3 139.9c40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6c52.4-22.2 99.5-53.9 139.9-94.3c40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9a437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7c-63.1 26.8-130.2 40.3-199.3 40.3z" fill="${o}"/>`},{box:15,name:"tick",svg:`<g fill="none"><path d="M4 7.5L7 10l4-5m-3.5 9.5a7 7 0 1 1 0-14a7 7 0 0 1 0 14z" stroke="${o}"/></g>`},{box:16,name:"arrow-left",svg:`<g fill="${o}"><path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/></g>`},{box:32,name:"refresh",svg:`<g fill="${o}"><path d="M26.631 4H31.5a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0V4.783l.611.611c2.833 2.833 4.394 6.6 4.394 10.606s-1.561 7.773-4.394 10.606a15.01 15.01 0 0 1-16.051 3.375a.499.499 0 1 0-.362.931a16.007 16.007 0 0 0 17.12-3.6c3.022-3.021 4.687-7.04 4.687-11.313S30.34 7.708 27.318 4.687L26.631 4z"/><path d="M6.5 22a.5.5 0 0 0-.5.5v4.84l-.713-.713C2.454 23.794.893 20.027.893 16.021S2.454 8.247 5.287 5.414a15.04 15.04 0 0 1 15.836-3.456a.501.501 0 0 0 .348-.938A16.048 16.048 0 0 0 4.58 4.707C1.558 7.728-.107 11.747-.107 16.02s1.665 8.292 4.687 11.313l.666.667H.5a.5.5 0 0 0 0 1h5.856c.04.01.376-.025.474-.123c.004-.004.005-.009.009-.013A.496.496 0 0 0 7 28.5v-6a.5.5 0 0 0-.5-.5z"/></g>`},{box:15,name:"refresh-2",svg:`<g fill="none"><path d="M.5 7.5A7 7 0 0 1 13 3.17m1.5 4.33A7 7 0 0 1 2 11.83m3-.33H1.5V15m12-15v3.5H10" stroke="${o}"/></g>`},{box:24,name:"sleep",svg:`<path d="M2 13h5v1l-3.74 5H7v1H2v-1l3.75-5H2v-1zm7-4h5v1l-3.74 5H14v1H9v-1l3.75-5H9V9zm7-4h5v1l-3.74 5H21v1h-5v-1l3.75-5H16V5z" fill="${o}"/>`}].find((e=>e.name===s));return e.$$set=e=>{a(5,t=m(m({},t),u(e))),"name"in e&&a(6,s=e.name),"width"in e&&a(0,n=e.width),"height"in e&&a(1,l=e.height),"focusable"in e&&a(2,r=e.focusable),"fill"in e&&a(3,o=e.fill)},t=u(t),[n,l,r,o,c,t,s]}class Y extends t{constructor(e){super(),a(this,e,X,W,s,{name:6,width:0,height:1,focusable:2,fill:3})}}const Z=()=>{window.authentication_complete=()=>{j.is_authenticated?(J.subscribe((e=>e)),K.update((()=>!1)),Q.update((()=>!1)),G.update((()=>!0)),j.start_session_sync()):(G.update((()=>!1)),Q.update((()=>!1)),K.update((()=>!0)),setTimeout((()=>{K.update((()=>!1))}),5e3))}};function ee(e){let t,a,s,n;return{c(){t=f("span"),a=h("Invalid Credentials"),this.h()},l(e){t=l(e,"SPAN",{class:!0});var s=r(t);a=d(s,"Invalid Credentials"),s.forEach(o),this.h()},h(){c(t,"class","error-message svelte-yb3a6b")},m(e,s){i(e,t,s),p(t,a),n=!0},i(e){n||(g((()=>{s||(s=v(t,H,{},!0)),s.run(1)})),n=!0)},o(e){s||(s=v(t,H,{},!1)),s.run(0),n=!1},d(e){e&&o(t),e&&s&&s.end()}}}function te(e){let t,a;return t=new Y({props:{name:"arrow-right",class:"dm-laptop",width:"32",height:"32"}}),{c(){V(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,s){T(t,e,s),a=!0},i(e){a||(_(t.$$.fragment,e),a=!0)},o(e){M(t.$$.fragment,e),a=!1},d(e){N(t,e)}}}function ae(e){let t,a;return t=new Y({props:{name:"tick",class:"tick",width:"32",height:"32",fill:"#00d2a6"}}),{c(){V(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,s){T(t,e,s),a=!0},i(e){a||(_(t.$$.fragment,e),a=!0)},o(e){M(t.$$.fragment,e),a=!1},d(e){N(t,e)}}}function se(e){let t,a;return t=new Y({props:{name:"loading",class:"loading spinner",width:"32",height:"32"}}),{c(){V(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,s){T(t,e,s),a=!0},i(e){a||(_(t.$$.fragment,e),a=!0)},o(e){M(t.$$.fragment,e),a=!1},d(e){N(t,e)}}}function ne(e){let t,a,s,n,$,m,u,h,d,v,C,H,V,L,T,N,P,U=e[3]&&ee();const q=[se,ae,te],B=[];function F(e,t){return e[4]?0:e[5]?1:2}return H=F(e),V=B[H]=q[H](e),{c(){t=f("div"),a=f("div"),s=w(),U&&U.c(),n=w(),$=f("form"),m=f("input"),h=w(),d=f("input"),v=w(),C=f("button"),V.c(),this.h()},l(e){t=l(e,"DIV",{class:!0});var c=r(t);a=l(c,"DIV",{class:!0,style:!0}),r(a).forEach(o),s=b(c),U&&U.l(c),n=b(c),$=l(c,"FORM",{class:!0});var i=r($);m=l(i,"INPUT",{type:!0,placeholder:!0,autocomplete:!0,class:!0}),h=b(i),d=l(i,"INPUT",{type:!0,placeholder:!0,autocomplete:!0,class:!0}),v=b(i),C=l(i,"BUTTON",{type:!0,disabled:!0,class:!0});var u=r(C);V.l(u),u.forEach(o),i.forEach(o),c.forEach(o),this.h()},h(){c(a,"class","user-profile-image svelte-yb3a6b"),c(a,"style",`background-image: url('${"file:"===window.location.protocol?"/usr/share/lightdm-webkit/themes/reactive/":""}images/default-profile.png')`),c(m,"type","text"),c(m,"placeholder","Username"),c(m,"autocomplete","off"),c(m,"class",u=y(""+(e[2]?"shake error-border":""))+" svelte-yb3a6b"),c(d,"type","password"),c(d,"placeholder","Password"),c(d,"autocomplete","off"),c(d,"class","svelte-yb3a6b"),c(C,"type","submit"),C.disabled=e[4],c(C,"class","svelte-yb3a6b"),c($,"class","svelte-yb3a6b"),c(t,"class","login-wrapper svelte-yb3a6b")},m(l,r){i(l,t,r),p(t,a),p(t,s),U&&U.m(t,null),p(t,n),p(t,$),p($,m),x(m,e[0]),p($,h),p($,d),x(d,e[1]),p($,v),p($,C),B[H].m(C,null),T=!0,N||(P=[k(m,"input",e[7]),k(d,"input",e[8]),k($,"submit",E(e[6]))],N=!0)},p(e,[a]){e[3]?U?8&a&&_(U,1):(U=ee(),U.c(),_(U,1),U.m(t,n)):U&&(D(),M(U,1,1,(()=>{U=null})),I()),(!T||4&a&&u!==(u=y(""+(e[2]?"shake error-border":""))+" svelte-yb3a6b"))&&c(m,"class",u),1&a&&m.value!==e[0]&&x(m,e[0]),2&a&&d.value!==e[1]&&x(d,e[1]);let s=H;H=F(e),H!==s&&(D(),M(B[s],1,1,(()=>{B[s]=null})),I(),V=B[H],V||(V=B[H]=q[H](e),V.c()),_(V,1),V.m(C,null)),(!T||16&a)&&(C.disabled=e[4])},i(e){T||(_(U),_(V),L||g((()=>{L=S(t,z,{}),L.start()})),T=!0)},o(e){M(U),M(V),T=!1},d(e){e&&o(t),U&&U.d(),B[H].d(),N=!1,A(P)}}}function le(e,t,a){let s,n,l;C(e,K,(e=>a(3,s=e))),C(e,Q,(e=>a(4,n=e))),C(e,G,(e=>a(5,l=e)));let r=(o="r-defaultUsername",window.localStorage.getItem(o)||null);var o;let c,i="";return[r,i,c,s,n,l,()=>{a(2,c=!1),r?(((e,t)=>{window.localStorage.setItem(e,t)})("r-defaultUsername",r),Q.update((()=>!0)),K.update((()=>!1)),j.cancel_authentication(),j.authenticate(r),setTimeout((()=>{console.log(`responding for user ${r} password ${i}`),j.respond(i)}),1e3)):a(2,c=!0)},function(){r=this.value,a(0,r)},function(){i=this.value,a(1,i)}]}class re extends t{constructor(e){super(),a(this,e,le,ne,s,{})}}function oe(e){let t,a,s;return{c(){t=f("div"),a=h("DMList")},l(e){t=l(e,"DIV",{});var s=r(t);a=d(s,"DMList"),s.forEach(o)},m(e,s){i(e,t,s),p(t,a)},p:$,i(e){s||g((()=>{s=S(t,z,{}),s.start()}))},o:$,d(e){e&&o(t)}}}class ce extends t{constructor(e){super(),a(this,e,null,oe,s,{})}}function ie(e){let t,a,s,n,c;return t=new Y({props:{name:"arrow-left",class:"cancel",width:"22",height:"22"}}),{c(){V(t.$$.fragment),a=w(),s=f("span"),n=h("Cancel")},l(e){L(t.$$.fragment,e),a=b(e),s=l(e,"SPAN",{});var c=r(s);n=d(c,"Cancel"),c.forEach(o)},m(e,l){T(t,e,l),i(e,a,l),i(e,s,l),p(s,n),c=!0},p:$,i(e){c||(_(t.$$.fragment,e),c=!0)},o(e){M(t.$$.fragment,e),c=!1},d(e){N(t,e),e&&o(a),e&&o(s)}}}function $e(e){let t,a;return t=new P({props:{to:"/",class:"link-icon",$$slots:{default:[ie]},$$scope:{ctx:e}}}),{c(){V(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,s){T(t,e,s),a=!0},p(e,[a]){const s={};1&a&&(s.$$scope={dirty:a,ctx:e}),t.$set(s)},i(e){a||(_(t.$$.fragment,e),a=!0)},o(e){M(t.$$.fragment,e),a=!1},d(e){N(t,e)}}}class me extends t{constructor(e){super(),a(this,e,null,$e,s,{})}}function ue(e){let t,a,s,n,m,u,v,y,x,E,D,I,C,H,P,U,q,B,F,O,R,j,J,G,K;return n=new Y({props:{name:"power",class:"power",width:"48",height:"48"}}),E=new Y({props:{name:"refresh-2",class:"refresh-2",width:"48",height:"48"}}),U=new Y({props:{name:"sleep",class:"sleep",width:"48",height:"48"}}),R=new me({}),{c(){t=f("div"),a=f("div"),s=f("div"),V(n.$$.fragment),m=w(),u=f("span"),v=h("Shutdown"),y=w(),x=f("div"),V(E.$$.fragment),D=w(),I=f("span"),C=h("Restart"),H=w(),P=f("div"),V(U.$$.fragment),q=w(),B=f("span"),F=h("Suspend"),O=w(),V(R.$$.fragment),this.h()},l(e){t=l(e,"DIV",{class:!0});var c=r(t);a=l(c,"DIV",{class:!0});var i=r(a);s=l(i,"DIV",{class:!0});var $=r(s);L(n.$$.fragment,$),m=b($),u=l($,"SPAN",{class:!0});var f=r(u);v=d(f,"Shutdown"),f.forEach(o),$.forEach(o),y=b(i),x=l(i,"DIV",{class:!0});var h=r(x);L(E.$$.fragment,h),D=b(h),I=l(h,"SPAN",{class:!0});var p=r(I);C=d(p,"Restart"),p.forEach(o),h.forEach(o),H=b(i),P=l(i,"DIV",{class:!0});var g=r(P);L(U.$$.fragment,g),q=b(g),B=l(g,"SPAN",{class:!0});var w=r(B);F=d(w,"Suspend"),w.forEach(o),g.forEach(o),i.forEach(o),O=b(c),L(R.$$.fragment,c),c.forEach(o),this.h()},h(){c(u,"class","svelte-1mq3unt"),c(s,"class","poweroff power-options svelte-1mq3unt"),c(I,"class","svelte-1mq3unt"),c(x,"class","restart power-options svelte-1mq3unt"),c(B,"class","svelte-1mq3unt"),c(P,"class","sleep power-options svelte-1mq3unt"),c(a,"class","power-wrapper svelte-1mq3unt"),c(t,"class","power-outer-wrapper svelte-1mq3unt")},m(l,r){i(l,t,r),p(t,a),p(a,s),T(n,s,null),p(s,m),p(s,u),p(u,v),p(a,y),p(a,x),T(E,x,null),p(x,D),p(x,I),p(I,C),p(a,H),p(a,P),T(U,P,null),p(P,q),p(P,B),p(B,F),p(t,O),T(R,t,null),J=!0,G||(K=[k(s,"click",e[0]),k(x,"click",e[1]),k(P,"click",e[2])],G=!0)},p:$,i(e){J||(_(n.$$.fragment,e),_(E.$$.fragment,e),_(U.$$.fragment,e),_(R.$$.fragment,e),j||g((()=>{j=S(t,z,{}),j.start()})),J=!0)},o(e){M(n.$$.fragment,e),M(E.$$.fragment,e),M(U.$$.fragment,e),M(R.$$.fragment,e),J=!1},d(e){e&&o(t),N(n),N(E),N(U),N(R),G=!1,A(K)}}}function fe(e){return[()=>{j.shutdown()},()=>{j.restart()},()=>{j.suspend()}]}class he extends t{constructor(e){super(),a(this,e,fe,ue,s,{})}}function de(e){let t,a,s,n,c,m,u,g,v,y,x,k,E=e[6][e[3]]+"",_=(e[2]<=9?`0${e[2]}`:e[2])+"";return{c(){t=f("div"),a=h(e[4]),s=w(),n=h(E),c=w(),m=h(e[5]),u=w(),g=h(e[0]),v=h(" : "),y=h(e[1]),x=h(" : "),k=h(_)},l(i){t=l(i,"DIV",{});var $=r(t);a=d($,e[4]),s=b($),n=d($,E),c=b($),m=d($,e[5]),u=b($),g=d($,e[0]),v=d($," : "),y=d($,e[1]),x=d($," : "),k=d($,_),$.forEach(o)},m(e,l){i(e,t,l),p(t,a),p(t,s),p(t,n),p(t,c),p(t,m),p(t,u),p(t,g),p(t,v),p(t,y),p(t,x),p(t,k)},p(e,[t]){16&t&&U(a,e[4]),8&t&&E!==(E=e[6][e[3]]+"")&&U(n,E),32&t&&U(m,e[5]),1&t&&U(g,e[0]),2&t&&U(y,e[1]),4&t&&_!==(_=(e[2]<=9?`0${e[2]}`:e[2])+"")&&U(k,_)},i:$,o:$,d(e){e&&o(t)}}}function pe(e,t,a){let s,n,l,r,o,c;let i=new Date;return q((()=>{setInterval((()=>{a(7,i=new Date)}),1e3)})),e.$$.update=()=>{128&e.$$.dirty&&a(0,s=i.getHours()),128&e.$$.dirty&&a(1,n=i.getMinutes()),128&e.$$.dirty&&a(2,l=i.getSeconds()),128&e.$$.dirty&&a(3,r=i.getUTCMonth()+1),128&e.$$.dirty&&a(4,o=i.getUTCDate()),128&e.$$.dirty&&a(5,c=i.getUTCFullYear())},[s,n,l,r,o,c,{0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December"},i]}class ge extends t{constructor(e){super(),a(this,e,pe,de,s,{})}}function ve(e){let t,a,s,n,m,u;return m=new ge({}),{c(){t=f("header"),a=f("div"),s=w(),n=f("div"),V(m.$$.fragment),this.h()},l(e){t=l(e,"HEADER",{class:!0});var c=r(t);a=l(c,"DIV",{id:!0}),r(a).forEach(o),s=b(c),n=l(c,"DIV",{id:!0});var i=r(n);L(m.$$.fragment,i),i.forEach(o),c.forEach(o),this.h()},h(){c(a,"id","settings"),c(n,"id","system-info"),c(t,"class","header-wrapper")},m(e,l){i(e,t,l),p(t,a),p(t,s),p(t,n),T(m,n,null),u=!0},p:$,i(e){u||(_(m.$$.fragment,e),u=!0)},o(e){M(m.$$.fragment,e),u=!1},d(e){e&&o(t),N(m)}}}class we extends t{constructor(e){super(),a(this,e,null,ve,s,{})}}function be(e){let t,a;return t=new Y({props:{name:"power",class:"power",width:"32",height:"32"}}),{c(){V(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,s){T(t,e,s),a=!0},p:$,i(e){a||(_(t.$$.fragment,e),a=!0)},o(e){M(t.$$.fragment,e),a=!1},d(e){N(t,e)}}}function ye(e){let t,a,s,n,$,m,u,g,v,y,x;return n=new Y({props:{name:"laptop",class:"dm-laptop",width:"32",height:"32"}}),y=new P({props:{to:"power",class:"link-icon",$$slots:{default:[be]},$$scope:{ctx:e}}}),{c(){t=f("footer"),a=f("div"),s=f("div"),V(n.$$.fragment),$=w(),m=f("span"),u=h(e[0]),g=w(),v=f("div"),V(y.$$.fragment),this.h()},l(c){t=l(c,"FOOTER",{class:!0});var i=r(t);a=l(i,"DIV",{class:!0});var f=r(a);s=l(f,"DIV",{class:!0});var h=r(s);L(n.$$.fragment,h),$=b(h),m=l(h,"SPAN",{});var p=r(m);u=d(p,e[0]),p.forEach(o),h.forEach(o),f.forEach(o),g=b(i),v=l(i,"DIV",{class:!0});var w=r(v);L(y.$$.fragment,w),w.forEach(o),i.forEach(o),this.h()},h(){c(s,"class","link-icon"),c(a,"class","dm-list"),c(v,"class","power-options"),c(t,"class","footer-wrapper")},m(e,l){i(e,t,l),p(t,a),p(a,s),T(n,s,null),p(s,$),p(s,m),p(m,u),p(t,g),p(t,v),T(y,v,null),x=!0},p(e,[t]){(!x||1&t)&&U(u,e[0]);const a={};2&t&&(a.$$scope={dirty:t,ctx:e}),y.$set(a)},i(e){x||(_(n.$$.fragment,e),_(y.$$.fragment,e),x=!0)},o(e){M(n.$$.fragment,e),M(y.$$.fragment,e),x=!1},d(e){e&&o(t),N(n),N(y)}}}function xe(e,t,a){let s=null;return q((()=>{a(0,s="default"===j.default_session?j.sessions[0].name:j.default_session)})),[s]}class ke extends t{constructor(e){super(),a(this,e,xe,ye,s,{})}}function Ee(e){let t,a,s,n,$,m,u;a=new we({});const h=e[1].default,d=B(h,e,e[0],null);return m=new ke({}),{c(){t=f("div"),V(a.$$.fragment),s=w(),n=f("main"),d&&d.c(),$=w(),V(m.$$.fragment),this.h()},l(e){t=l(e,"DIV",{class:!0});var c=r(t);L(a.$$.fragment,c),s=b(c),n=l(c,"MAIN",{class:!0});var i=r(n);d&&d.l(i),i.forEach(o),$=b(c),L(m.$$.fragment,c),c.forEach(o),this.h()},h(){c(n,"class","main main-wrapper"),c(t,"class","sitelayout-wrapper")},m(e,l){i(e,t,l),T(a,t,null),p(t,s),p(t,n),d&&d.m(n,null),p(t,$),T(m,t,null),u=!0},p(e,[t]){d&&d.p&&(!u||1&t)&&F(d,h,e,e[0],t,null,null)},i(e){u||(_(a.$$.fragment,e),_(d,e),_(m.$$.fragment,e),u=!0)},o(e){M(a.$$.fragment,e),M(d,e),M(m.$$.fragment,e),u=!1},d(e){e&&o(t),N(a),d&&d.d(e),N(m)}}}function _e(e,t,a){let{$$slots:s={},$$scope:n}=t;return e.$$set=e=>{"$$scope"in e&&a(0,n=e.$$scope)},[n,s]}class De extends t{constructor(e){super(),a(this,e,_e,Ee,s,{})}}function Me(e){let t,a;return t=new ce({}),{c(){V(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,s){T(t,e,s),a=!0},i(e){a||(_(t.$$.fragment,e),a=!0)},o(e){M(t.$$.fragment,e),a=!1},d(e){N(t,e)}}}function Ie(e){let t,a;return t=new he({}),{c(){V(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,s){T(t,e,s),a=!0},i(e){a||(_(t.$$.fragment,e),a=!0)},o(e){M(t.$$.fragment,e),a=!1},d(e){N(t,e)}}}function Se(e){let t,a;return t=new re({}),{c(){V(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,s){T(t,e,s),a=!0},i(e){a||(_(t.$$.fragment,e),a=!0)},o(e){M(t.$$.fragment,e),a=!1},d(e){N(t,e)}}}function Ae(e){let t,a,s,n,l,r;return t=new R({props:{path:"dmlist",$$slots:{default:[Me]},$$scope:{ctx:e}}}),s=new R({props:{path:"power",$$slots:{default:[Ie]},$$scope:{ctx:e}}}),l=new R({props:{path:"*",$$slots:{default:[Se]},$$scope:{ctx:e}}}),{c(){V(t.$$.fragment),a=w(),V(s.$$.fragment),n=w(),V(l.$$.fragment)},l(e){L(t.$$.fragment,e),a=b(e),L(s.$$.fragment,e),n=b(e),L(l.$$.fragment,e)},m(e,o){T(t,e,o),i(e,a,o),T(s,e,o),i(e,n,o),T(l,e,o),r=!0},p(e,a){const n={};1&a&&(n.$$scope={dirty:a,ctx:e}),t.$set(n);const r={};1&a&&(r.$$scope={dirty:a,ctx:e}),s.$set(r);const o={};1&a&&(o.$$scope={dirty:a,ctx:e}),l.$set(o)},i(e){r||(_(t.$$.fragment,e),_(s.$$.fragment,e),_(l.$$.fragment,e),r=!0)},o(e){M(t.$$.fragment,e),M(s.$$.fragment,e),M(l.$$.fragment,e),r=!1},d(e){N(t,e),e&&o(a),N(s,e),e&&o(n),N(l,e)}}}function Ce(e){let t,a;return t=new De({props:{$$slots:{default:[Ae]},$$scope:{ctx:e}}}),{c(){V(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,s){T(t,e,s),a=!0},p(e,a){const s={};1&a&&(s.$$scope={dirty:a,ctx:e}),t.$set(s)},i(e){a||(_(t.$$.fragment,e),a=!0)},o(e){M(t.$$.fragment,e),a=!1},d(e){N(t,e)}}}function He(e){let t,a;return t=new O({props:{$$slots:{default:[Ce]},$$scope:{ctx:e}}}),{c(){V(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,s){T(t,e,s),a=!0},p(e,[a]){const s={};1&a&&(s.$$scope={dirty:a,ctx:e}),t.$set(s)},i(e){a||(_(t.$$.fragment,e),a=!0)},o(e){M(t.$$.fragment,e),a=!1},d(e){N(t,e)}}}function ze(e){return q((()=>{Z()})),[]}new class extends t{constructor(e){super(),a(this,e,ze,He,s,{})}}({target:document.getElementById("app")});
