"use strict";(self.webpackChunkrestaurant_page=self.webpackChunkrestaurant_page||[]).push([[826,177,860,631,160],{28:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),a=n.n(o),r=n(645),i=n.n(r)()(a());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;600;700&family=Poiret+One&family=Red+Hat+Display:wght@300;400&display=swap);"]),i.push([e.id,'::-webkit-scrollbar { \n  display: none; \n  }\n\nbody {\n  margin: 0;\n  background: no-repeat\n    url("https://images.unsplash.com/photo-1558030154-d3605e91d892?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&w=2560&q=60");\n  background-attachment: fixed;\n  background-size: cover;\n  background-color: rgb(0, 0, 0);\n}\n\n#content {\n  /* position: relative; */\n  margin: 0 auto;\n  min-height: 100vh;\n}\n\nh1,\nh2 {\n  font-family: "Dancing Script", cursive;\n  margin: 1rem 0;\n}\n\nh1 {\n  font-size: 4rem;\n  font-weight: 700;\n  margin: 0 0 -10px;\n}\n\nh2 {\n  font-size: 2rem;\n  font-weight: 400;\n}\n\nh3 {\n  font-family: "Poiret One", cursive;\n}\n\nheader {\n  background-color: rgba(0, 0, 0, 0.6);\n  color: white;\n  padding: 5px 0;\n  text-align: center;\n}\n\nheader h1,\nheader h2 {\n  margin-bottom: -5px;\n}\n\nnav {\n  position: sticky;\n  top: 0px;\n  background-color: rgba(0, 0, 0, 0.6);\n  color: white;\n  padding: 10px 0 10px;\n  text-align: center;\n}\n\nnav > ul {\n  display: flex;\n  gap: 50px;\n  justify-content: center;\n}\n\nul,\nli {\n  margin: 0;\n  padding: 0;\n}\n\n.nav-btn {\n  padding-bottom: 5px;\n  border-bottom: 3px solid transparent;\n  list-style: none;\n  font-family: "Poiret One", cursive;\n  font-size: 1.2rem;\n  transition: transform 0.05s;\n}\n\n.nav-btn:hover {\n  cursor: pointer;\n  border-bottom: 1px solid white;\n  transform: translate(0, 2px);\n}\n\n.nav-btn.active {\n  cursor: pointer;\n  /* border-bottom: 3px solid white; */\n  font-weight: bolder;\n  border-bottom: 3px solid white;\n}\n\nfooter {\n  position: sticky;\n  top: 100vh;\n  height: 40px;\n  width: 100%;\n  margin: 0;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\nfooter p,\nfooter a {\n  text-align: center;\n}\n\nmain {\n  position: relative;\n}\n\np.description {\n  font-size: 1.5rem;\n}\n\ntable {\n  width: clamp(400px, 50%, 500px);\n  border-collapse: collapse;\n  font-family: "Red Hat Display", sans-serif;\n  font-size: 16px;\n  text-indent: 0;\n}\n\ntable td {\n  text-align: center;\n}\n\ntable td:first-child {\n  text-align: left;\n}\n\nth {\n  font-weight: bold;\n}\n\nth,\ntd {\n  padding: 10px;\n  /* text-align: center; */\n  border-bottom: 1px solid #ddd;\n}\n\n.home {\n  max-width: 2560px;\n  margin: 0 auto;\n  padding: 2rem max(3rem, 10%);\n  top: 2rem;\n  color: white;\n\n  /* display: none; */\n}\n\n.home h1,\n.home h2 {\n  margin: 15px 0;\n}\n\n.menu {\n  background-color: rgba(0, 0, 0, 0.5);\n  box-sizing: border-box;\n  max-width: 950px;\n  width: 100%;\n  margin: 2rem auto;\n  padding: 2rem 0;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  /* display: none; */\n}\n\n.menu-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(250px, 350px));\n  grid-template-rows: 4rem 1fr 1fr 4rem 1fr 1fr;\n  column-gap: 25px;\n  row-gap: 15px;\n}\n\n.menu h1 {\n  font-size: 3rem;\n}\n\n.menu h2 {\n  text-align: center;\n}\n\n.menu-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n#steak {\n  grid-column: span 2;\n  text-align: center;\n}\n\n#poultry,\n#vegetarian {\n  grid-row-start: 4;\n}\n#vegetarian + .menu-item {\n  grid-column-start: 2;\n  grid-row-start: 5;\n}\n\n.menu img {\n  width: 250px;\n  height: 250px;\n  object-fit: cover;\n  object-position: center;\n}\n\n.menu h3,\n.menu p {\n  margin: 0;\n  padding: 0;\n}\n\n.contact {\n  background-color: rgba(0, 0, 0, 0.5);\n  box-sizing: border-box;\n  max-width: 950px;\n  width: 100%;\n  margin: 2rem auto;\n  padding: 2rem 0;\n  color: white;\n  text-align: center;\n}\n\n.contact-card {\n  text-align: left;\n  display: flex;\n  align-items: start;\n  justify-content: space-evenly;\n  \n\n}\n\np,\na {\n  box-sizing: border-box;\n  margin: 0;\n  color: white;\n  font-family: "Red Hat Display", sans-serif;\n  font-size: 16px;\n  padding: 10px 0;\n}\n',""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},i=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],l=r[d]||0,m="".concat(d," ").concat(l);r[d]=l+1;var p=n(m),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(u);else{var h=a(u,o);o.byIndex=c,t.splice(c,0,{identifier:m,updater:h,references:1})}i.push(m)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var c=n(r[i]);t[c].references--}for(var s=o(e,a),d=0;d<r.length;d++){var l=n(r[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}r=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,a&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},554:(e,t,n)=>{n.d(t,{DH:()=>r,Fs:()=>o,Mv:()=>i,mx:()=>a});const o=()=>{const e=document.createElement("header"),t=document.createElement("h1");t.id="restaurant-name",t.innerText="Stekys Estancia";const n=document.createElement("h2");return n.id="motto",n.innerText="Serving Steaks e.s.t. 1999",e.append(t,n),e},a=()=>{const e=document.createElement("nav"),t=document.createElement("ul"),n=document.createElement("li");n.classList.add("nav-btn"),n.id="nav-home",n.textContent="Home";const o=document.createElement("li");o.classList.add("nav-btn"),o.id="nav-menu",o.textContent="Menu";const a=document.createElement("li");return a.classList.add("nav-btn"),a.id="nav-contact",a.textContent="Contact",t.append(n,o,a),e.appendChild(t),e},r=()=>{const e=document.createElement("main");return e.appendChild(a()),e},i=()=>{const e=document.createElement("footer"),t=document.createElement("p"),n=document.createElement("a");n.setAttribute("href","https://unsplash.com/@emersonvieira?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"),n.textContent="Emerson Vieira";const o=document.createElement("a");return o.setAttribute("href","https://unsplash.com/photos/Mq1LDuswX2o?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"),o.textContent="Unsplash",t.append("Background image by ",n," on ",o),e.appendChild(t),e}},637:(e,t,n)=>{n.d(t,{Z:()=>o});const o=()=>{const e=document.createElement("div");e.classList.add("contact");const t=document.createElement("h1");t.textContent="Contact Us";const n=document.createElement("h2");return n.textContent="Get in Touch",e.append(t,n,(()=>{const e=document.createElement("div");return e.classList.add("contact-card"),e.append((()=>{const e=document.createElement("div");e.classList.add("contact-info");const t=document.createElement("h3");t.textContent="Location:";const n=document.createElement("p");n.textContent="123 Main Street, City, State";const o=document.createElement("h3");o.textContent="Telephone:";const a=document.createElement("p");a.textContent="123-456-7890";const r=document.createElement("h3");r.textContent="Email:";const i=document.createElement("p");return i.textContent="info@example.com",e.append(t,n,o,a,r,i),e})(),(()=>{const e=document.createElement("div");e.classList.add("embed-map");const t=document.createElement("iframe");return t.setAttribute("width","600"),t.setAttribute("height","400"),t.setAttribute("style","border:0"),t.setAttribute("loading","lazy"),t.setAttribute("allowfullscreen",""),t.setAttribute("referrerrpolicy","no-referrer-when-downgrade"),t.setAttribute("src","https://www.google.com/maps/embed/v1/place?key=AIzaSyAGtHqF8CGT6Gd6mK8vfaoejPbmYfX2_8s&q=Estancia+Jakarta"),e.appendChild(t),e})()),e})()),e}},666:(e,t,n)=>{n.d(t,{Z:()=>o});const o=()=>{const e=document.createElement("div");return e.classList.add("home"),e.append((()=>{const e=document.createElement("div");e.classList.add("front-text");const t=document.createElement("h1");t.innerText="Exquisite &<br />Hedonistic Food";const n=document.createElement("p");n.classList.add("description"),n.textContent="Indulge in our signature steaks, meticulously prepared to perfection";const o=document.createElement("p");return o.classList.add("description"),o.textContent="From tender filet mignon to juicy ribeye and robust porterhouse, each bite is pure pleasure.",e.append(t,n,o),e})(),(()=>{const e=document.createElement("div");e.classList.add("timetable");const t=document.createElement("h2");t.textContent="Opening Hours";const n=document.createElement("table");return n.classList.add="open-hours",n.innerHTML='<colgroup><col style="align: center" /><col style="align: center" /></colgroup>\n  <thead><tr><th>Day</th><th>Opening Time</th><th>Closing Time</th></tr></thead>\n  <tbody>\n    <tr><td>Monday</td><td>10:00</td><td>21:30</td></tr>\n    <tr><td>Tuesday</td><td>10:00</td><td>21:30</td></tr>\n    <tr><td>Wednesday</td><td colspan="2">Closed</td></tr>\n    <tr><td>Thursday</td><td>10:00</td><td>21:30</td></tr>\n    <tr><td>Friday</td><td>10:00</td><td>21:30</td></tr>\n    <tr><td>Saturday</td><td>10:00</td><td>24:00</td></tr>\n    <tr><td>Sunday</td><td>14:00</td><td>22:00</td></tr>\n  </tbody>',e.append(t,n),e})()),e}},910:(e,t,n)=>{var o=n(554),a=n(637),r=n(666),i=n(83),c=n(379),s=n.n(c),d=n(795),l=n.n(d),m=n(569),p=n.n(m),u=n(565),h=n.n(u),f=n(216),g=n.n(f),b=n(589),x=n.n(b),y=n(28),v={};v.styleTagTransform=x(),v.setAttributes=h(),v.insert=p().bind(null,"head"),v.domAPI=l(),v.insertStyleElement=g(),s()(y.Z,v),y.Z&&y.Z.locals&&y.Z.locals;const w=()=>{const e=document.getElementsByClassName("nav-btn");let t="";[...e].forEach((e=>{e.addEventListener("click",(()=>{console.log(e.textContent),t=e.textContent,C(t)}))}))},C=(e="Home")=>{const t=document.getElementsByTagName("main")[0];for(;t.hasChildNodes();)t.removeChild(t.lastChild);let n;switch(t.appendChild((0,o.mx)()),e){case"Home":t.appendChild((0,r.Z)()),n=document.getElementById("nav-home"),n.classList.add("active");break;case"Menu":t.appendChild((0,i.Z)()),n=document.getElementById("nav-menu"),n.classList.add("active");break;case"Contact":t.appendChild((0,a.Z)()),n=document.getElementById("nav-menu"),n.classList.add("active")}w()};(()=>{const e=document.getElementsByTagName("body")[0],t=document.createElement("div");t.id="content",t.appendChild((0,o.Fs)()),t.appendChild((0,o.DH)()),t.appendChild((0,o.Mv)()),e.appendChild(t),w()})(),C()},83:(e,t,n)=>{n.d(t,{Z:()=>i});const o=(e,t,n,o,a)=>({name:e,category:t,imageLink:n,imageAlt:o,description:a}),a=[o("Filet Mignon","Steak Selection","https://images.unsplash.com/photo-1559847844-d9d2bc807d82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80","Filet Mignon","Tender and juicy, a melt-in-your-mouth steak experience"),o("Ribeye","Steak Selection","https://images.unsplash.com/photo-1546964124-0cce460f38ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80","Ribeye","Indulge in the rich marbling and bold, beefy flavor"),o("New York Strip","Steak Selection","https://crowdcow-images.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fjigso8mmhmq2%2F5BczCDlt775vEkajw0Ljft%2F4e8fd08580f3cc1b1a106c78a3c0fdcf%2F20191218_CrowdCow0230__1_.jpg?ixlib=rails-2.1.4&fit=crop&auto=compress&w=1900&cs=srgb&s=bff9afdb80ee38612ab5bc96d40b2f99","New York Strip","Savor the perfect balance of tenderness and a hearty bite."),o("Porterhouse","Steak Selection","https://assets.bonappetit.com/photos/57ad5452f1c801a1038bcb97/1:1/w_2560%2Cc_limit/perfect-porterhouse-steak.jpg","Porterhouse","Experience the best of both worlds with a combination of tender filet mignon and flavorful strip steak."),o("Roasted Chicken","Steak Selection","https://assets.bonappetit.com/photos/62f5674caf9bae430097be0f/1:1/w_500%2Cc_limit/0810-no-fail-roast-chicken-v2.jpg","Roasted Chicken","Enjoy tender and succulent roasted chicken, infused with aromatic herbs and spices."),o("Cripsy Skin Cornish Hen","Steak Selection","https://www.spendwithpennies.com/wp-content/uploads/2020/07/Roasted-Cornish-Hen-SpendWithPennies-6.jpg","Cripsy Skin Cornish Hen","Delight in perfectly cooked Cornish hen with irresistibly crispy skin."),o("Grilled Vegetable Skewers","Steak Selection","https://www.aspicyperspective.com/wp-content/uploads/2016/06/grilled-fajita-vegetable-skewers-15.jpg","Grilled Vegetable Skewers","Satisfy your palate with a medley of grilled vegetables served on skewers."),o("Portobello Mushroom Steak","Steak Selection","https://veganhuggs.com/wp-content/uploads/2019/07/grilled-portobello-mushroom-steaks-4.jpg","Portobello Mushroom Steak","Indulge in the meaty and robust flavors of a Portobello mushroom steak.")],r=e=>{const t=document.createElement("div");t.classList.add("menu-item");const n=document.createElement("img");n.setAttribute("src",e.imageLink),n.setAttribute("alt",e.imageAlt);const o=document.createElement("h3");o.textContent=e.name;const a=document.createElement("p");return a.textContent=e.description,t.append(n,o,a),t},i=()=>{const e=document.createElement("div");e.classList.add("menu");const t=document.createElement("h1");return t.textContent="Menu",e.append(t,(()=>{const e=document.createElement("div");e.classList.add("menu-grid");const t=document.createElement("h2");t.id="steak",t.textContent="Steak Selection";const n=r(a[0]),o=r(a[1]),i=r(a[2]),c=r(a[3]),s=document.createElement("h2");s.id="poultry",s.textContent="Poultry Delights";const d=r(a[4]),l=r(a[5]),m=document.createElement("h2");m.id="vegetarian",m.textContent="Vegetarian Selection";const p=r(a[6]),u=r(a[7]);return e.append(t,n,o,i,c,s,d,l,m,p,u),e})()),e}}},e=>{e(e.s=910)}]);