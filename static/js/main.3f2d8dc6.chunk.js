(this["webpackJsonppwa-rqpay-proto"]=this["webpackJsonppwa-rqpay-proto"]||[]).push([[0],{101:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),o=n(10),c=n.n(o),i=(n(78),n(35)),l=n(63),s=n(134),u=n(141),d=n(145),m=n(142),p=n(144),f=n(146),g=n(143),b=n(137),v=n(42),h=n.n(v),w="https://virtserver.swaggerhub.com/CPGFinanceSystems/rqpay/1.0.0/requests/",E={transactionId:"1324354657689",terminalId:"123456789",ibanPayer:"DE33100205000001194700",amount:12525.68,purposeCode:"Bikers Best Shop, Strasbourg, 17.09.2020, TransactionID 123456789, TerminalID 1324354657689",createdAt:"2020-09-17T13:59:31.238Z"},y=Object(s.a)((function(e){return Object(f.a)({form:{margin:"2rem"},input:{marginTop:"1rem",width:"100%"},container:{display:"flex",justifyContent:"center",flexDirection:"column"},button:{width:"60%",alignSelf:"center"}})}));var j=function(e){var a=e.changeStep,n=e.toggleLoading,t=y();return r.a.createElement("section",{className:t.container},r.a.createElement("form",{className:t.form},r.a.createElement(g.a,{className:t.input,label:"IBAN",disabled:!0,variant:"outlined",defaultValue:E.ibanPayer}),r.a.createElement(g.a,{className:t.input,label:"Amout",disabled:!0,variant:"outlined",defaultValue:E.amount}),r.a.createElement(g.a,{className:t.input,disabled:!0,variant:"outlined",placeholder:"Purpose",multiline:!0,rowsMax:4,defaultValue:E.purposeCode})),r.a.createElement(b.a,{onClick:function(){n(),setTimeout((function(){var e;(e=E,h.a.post("".concat(w,"create"),e)).then((function(e){return a(2)})).finally((function(){return n()}))}),500)},variant:"contained",color:"primary",className:t.button},"Click here to Pay"))},k=n(138),x=n(139),O=n(61),S=n.n(O),I=Object(s.a)((function(e){return Object(f.a)({image:{height:"150px",width:"150px",marginBottom:"2rem"},container:{opacity:0,display:"flex",flexDirection:"column",alignItems:"center",animation:"$fadeIn 1.5s forwards"},"@keyframes fadeIn":{"100%":{opacity:1}}})}));var N=function(e){var a=I();return r.a.createElement(k.a,{className:a.container},r.a.createElement("img",{className:a.image,src:S.a,alt:"Our Logo"}),r.a.createElement(x.a,null,"Payment Made Simple"))},C=n(140),A=n(62),P=n.n(A),T=Object(s.a)((function(e){return Object(f.a)({container:{display:"flex",alignItems:"center",flexDirection:"column"},iconSuccess:{color:"green",fontSize:"5rem"},fadeIn:{opacity:0,animation:"$fadeIn 1.5s forwards"},"@keyframes fadeIn":{"100%":{opacity:1}}})}));var W=function(e){var a=T(),n=Object(t.useState)(!1),o=Object(i.a)(n,2),c=o[0],l=o[1];return setTimeout((function(){return l(!0)}),1e3),r.a.createElement(k.a,{className:a.container},c?r.a.createElement("div",{className:"".concat(a.container," ").concat(a.fadeIn)},r.a.createElement(P.a,{className:a.iconSuccess}),r.a.createElement(x.a,null,"All good!")):r.a.createElement(C.a,{color:"inherit"}))},L=n(147);function q(e){var a=e.children,n=e.value,t=e.index,o=Object(l.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:n!==t,id:"simple-tabpanel-".concat(t),"aria-labelledby":"simple-tab-".concat(t)},o),n===t&&r.a.createElement(p.a,{p:3},a))}function B(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var D=Object(s.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}));function z(){var e=D(),a=Object(t.useState)(0),n=Object(i.a)(a,2),o=n[0],c=n[1],l=Object(t.useState)(!1),s=Object(i.a)(l,2),p=s[0],f=s[1],g=function(e){c(e)},b=function(){return f((function(e){return!e}))};return r.a.createElement("div",{className:e.root},r.a.createElement(L.a,{open:p,className:e.backdrop},r.a.createElement(C.a,{color:"inherit"})),r.a.createElement(u.a,{position:"static"},r.a.createElement(d.a,{value:o,onChange:function(e,a){c(a)},"aria-label":"simple tabs example"},r.a.createElement(m.a,Object.assign({label:"Start"},B(0))),r.a.createElement(m.a,Object.assign({label:"Payment"},B(1))),r.a.createElement(m.a,Object.assign({label:"Feedback"},B(3))))),r.a.createElement(q,{value:o,index:0},r.a.createElement(N,{changeStep:g,toggleLoading:b})),r.a.createElement(q,{value:o,index:1},r.a.createElement(j,{changeStep:g,toggleLoading:b})),r.a.createElement(q,{value:o,index:2},r.a.createElement(W,{changeStep:g,toggleLoading:b})))}var R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function U(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(z,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pwa-rqpay-proto",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/pwa-rqpay-proto","/service-worker.js");R?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var t=n.headers.get("content-type");404===n.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):U(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):U(a,e)}))}}()},61:function(e,a,n){e.exports=n.p+"static/media/logo.4dd7db78.png"},73:function(e,a,n){e.exports=n(101)},78:function(e,a,n){}},[[73,1,2]]]);
//# sourceMappingURL=main.3f2d8dc6.chunk.js.map