(this["webpackJsonprent-a-house-dot-com"]=this["webpackJsonprent-a-house-dot-com"]||[]).push([[0],{34:function(e,t,a){e.exports=a.p+"static/media/logo.022c2883.png"},36:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAEPElEQVRYhbWXW2wUZRTHf2dmemFpu73YQirR0rSiiRASQ3zgAV7ACHarDU2b0lsoxBjhxWAgxkRfJDHGxAdNJBK5VJGmse1yUcDEC15iJNIHAhapQAtEoKG0224ve5njw9Jm7c62nbb8n+bLOXP+/3O+mfOdT3CJXt+2Qlvs1So8JWp7AFSMEVH+xox0FrV98a+beDIbp2u+7UtMCb+qUA08M4P7JURaIhLdX9LefG9eAu5srFs8vkh2KvIWkDUbsXEIKvJxJBTeV/rtlwHXAq6X1z0vGG1AoUviqbhti1YUdxz5w8loOJPXVwnGDwtADvC4oXKup7yh3smYUIEeX2OlirY42eYJBakt8h86mlRAz8sNz6lyDvAsMPkExmzRdfHbMSmgy7ctM12iXSxM2afDrfRR++mlZ5uDEPcNpEl0txtyMzeb3KYacptqMHOz3QhYNuYx35hYCMT+c0PC3UDGjMTeLLLKXyDzpQ1IaioAGokQ/P4XBlr8RO8/mI2IoYhhl5S0N9+zAB42mWnJzbwcvBWbydiwDklNASD6YCBmy8kmY+N6Fq9fy/B3PzHYdmomIZmWLduBfQJwo7zhMkk6nFPG0cAQgY7ThHtugq2Y+XlkV5Vj5uVMqchxovf7HRUoXFzuP7xKYr09ejtpxhvXIynWZMaDbd8Q7rmFd0sZ6atimse7ugn4T2M+lou3YhNmTuyb0FA4VpGvTxLtH0jQoGEplBu+hs0IJ6da8998Hc/aNYnElWWkr3Q+DsavdBPoSBQy8ut5+j74JLEKKi9aYkixqiZGMwyigwEC/jOEuq/HiJtqHIknkLaihPw9Oxm/0k3//maMrEyyq8rBcO5pgl1iqa1ep5438FU7kTt3ydvVRE595bTEjkL27iL48+/cfm0PKYVLnB1FvFayIOHeWwBYBfmuyONhFeSjoRChGzeT+4ghg45bkASBE2cZbPED4K3YhDU6wEhrK57aWjxbtrjVOGCprdfcHDsaCmMPByefNRJBQyGIRNySoyr/WFjRC0RN1y9PYPHWrXiqqxEr6W4m58fqNB7OcJfnrMCykLQ0MF0ncbH4+IG7scNI5NicBcwRqhwDsADCKfJpSkh34zD3BX/8jfFLXZPr+Oexv64ibaeSkkT6nNswMKSkfA5x80CPr/4dFXnXRRLzwdtF/sPvQdw8sCht9EMg4Ux4BOhNH7U/mlhMCihobR3GNnzAyCMkH7NFKyemof8JACg6cfACyA5g9p1p9lBFG6eO5wljeZH/0FERqlnYSoyJSMNy/5GWqYakPbC3rHGNbWgbsGye5L0iVDzZcfhPJ6PjxQTgiROHzqfaaSsE3QsMzoE4qMj7Y2o+m4wcZnn56H6lrsCyjR0KVQIrp3FV4CJoSzjV/Ky09WDfTLFd336ub2pcisVqw6BU1c4EEDGGbJuritVZfPzAXTfx/gMM1aSqmN2FbwAAAABJRU5ErkJggg=="},38:function(e,t,a){e.exports=a(72)},43:function(e,t,a){},44:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),o=a.n(r),s=(a(43),a(8)),i=a(9),c=a(12),m=a(13),u=a(5),d=a(1),p=(a(44),a(34)),g=a.n(p),_=a(7),f=a.n(_),h=new(function(){function e(){Object(s.a)(this,e)}return Object(i.a)(e,[{key:"registerSuccessfulLoginForJwt",value:function(e,t,a,n){sessionStorage.setItem("authenticatedUser",e),sessionStorage.setItem("firstName",a),sessionStorage.setItem("lastName",n),sessionStorage.setItem("token",this.createJWTToken(t))}},{key:"createJWTToken",value:function(e){return"Bearer "+e}},{key:"setupAxiosInterceptors",value:function(e){var t=this;f.a.interceptors.request.use((function(a){return console.log("interceptorrr"),t.isUserLoggedIn()&&(a.headers.authorization=e),a}))}},{key:"isUserLoggedIn",value:function(){return null!==sessionStorage.getItem("authenticatedUser")}},{key:"getLoggedInUser",value:function(){return{user:sessionStorage.getItem("authenticatedUser"),token:sessionStorage.getItem("token")}}},{key:"logout",value:function(){sessionStorage.removeItem("authenticatedUser"),sessionStorage.removeItem("firstname"),sessionStorage.removeItem("lastname"),sessionStorage.removeItem("token"),window.location="".concat(window.location.origin,"/login-register")}}]),e}()),E=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){var e=h.isUserLoggedIn(),t=sessionStorage.getItem("authenticatedUser");return l.a.createElement("header",{className:"header"},l.a.createElement("nav",null,l.a.createElement("ul",{className:"header_list"},l.a.createElement("li",{className:"header_list_item"},l.a.createElement(u.b,{to:"/houses",className:"header_list_item_text"},"Rent")),l.a.createElement("li",{className:"header_list_item"},l.a.createElement(u.b,{to:"/houses",className:"header_list_item_text"},"Buy")),l.a.createElement("li",{className:"header_list_item"},l.a.createElement(u.b,{to:"/sell-house",className:"header_list_item_text"},"Rent your house")),!e&&l.a.createElement("li",{className:"header_list_item"},l.a.createElement(u.b,{to:"/login-register",className:"header_list_item_text"},"Login")),!e&&l.a.createElement("li",{className:"header_list_item"},l.a.createElement(u.b,{to:"/login-register",className:"header_list_item_text"},"Register")),e&&l.a.createElement("li",{className:"header_list_item"},l.a.createElement(u.b,{to:"/sell-house",className:"header_list_item_text"},t)),e&&l.a.createElement("li",{className:"header_list_item"},l.a.createElement("a",{onClick:h.logout,className:"header_list_item_text"},"LogOut")))),l.a.createElement(u.b,{className:"header_image",to:"/"},l.a.createElement("img",{src:g.a,alt:"header-logo",className:"header_image_icon"})))}}]),a}(n.Component),y=(a(66),a(2)),N=function(e){return{type:"CHANGE_PROPERTIES",payload:e}},b=function(e){return{type:"CHANGE_BEDROOMS",payload:e}},v=function(e){return{type:"CHANGE_BATHROOMS",payload:e}},w=function(e){return{type:"CHANGE_SORT",payload:e}},x=window.google=window.google?window.google:{},A={types:["(cities)"],componentRestrictions:{country:"gb"}};var S,O,C,I=function(e){Object(y.c)((function(e){return e.searchReducer}));var t=Object(y.b)();return Object(n.useEffect)((function(){new x.maps.places.Autocomplete(document.getElementById("address_input"),A)})),l.a.createElement("main",{className:"mainPage"},l.a.createElement("section",{className:"mainPage_search"},l.a.createElement("h1",{className:"mainPage_search_title"},"\u0395\u03cd\u03c1\u03b5\u03c3\u03b7 \u0394\u03b9\u03b1\u03bc\u03b5\u03c1\u03b9\u03c3\u03bc\u03ac\u03c4\u03c9\u03bd",l.a.createElement("span",{className:"mainPage_search_title_span"},"\u039c\u03b5 \u03ad\u03bd\u03b1 \u03bc\u03cc\u03bd\u03bf \u03ba\u03bb\u03b9\u03ba!")),l.a.createElement("form",{onSubmit:function(a){return function(a){a.preventDefault();var n=document.getElementById("address_input").value;t(function(e){return{type:"CHANGE_SEARCH",payload:e}}(n)),e.history.push("/houses")}(a)},action:"",className:"mainPage_search_bar"},l.a.createElement("input",{type:"search",id:"address_input",placeholder:"Manchester, Blackpool, Liverpool...",className:"mainPage_search_bar_input"}),l.a.createElement("button",{type:"submit",class:"btn btn-success"},l.a.createElement("i",{type:"submit",className:"fas fa-search"})))))},j=(a(68),a(36)),B=a.n(j),k=window.google=window.google?window.google:{},R=[],L=new k.maps.InfoWindow,P={types:["(cities)"],componentRestrictions:{country:"gr"}};var F=function(e){var t=Object(y.c)((function(e){return e.searchReducer})),a=Object(y.b)(),r=Object(y.c)((function(e){return e.propertiesReducer}));Object(n.useEffect)((function(){new k.maps.places.Autocomplete(document.getElementById("autocomplete"),P);S=new k.maps.Geocoder,O=new k.maps.Map(document.getElementById("mapContainer"),{center:{lat:54.3005,lng:-3.2522809},zoom:6,scrollwheel:!1}),""!=t&&o(t)}),[]),Object(n.useEffect)((function(){R=[];for(var e=function(e){console.log(e),C=new k.maps.Marker({position:new k.maps.LatLng(r[e].lat,r[e].lng),map:O,icon:B.a}),R.push(C),k.maps.event.addListener(R[e],"click",(function(){L.setContent(r[e].streetAddress),L.open(O,R[e])}))},t=0;t<r.length;t++)e(t)}),[r]);var o=function(e){var t;console.log(e),S.geocode({address:e},(function(e,n){if(console.log(e,n),"OK"===n){O.setCenter(e[0].geometry.location),O.fitBounds(e[0].geometry.viewport);for(var l=e[0].address_components,r=0;r<l.length;r++)if(console.log(l),"locality"==l[r].types[0]||"postal_town"==l[r].types[0]){t=l[r].long_name,a({type:"CHANGE_CITY",payload:t});break}console.log(t)}}))};return l.a.createElement("div",{style:{width:"46%",height:"100%"},id:"mapContainer"})},T=(a(69),"displayNone"),G="displayNone",H="displayNone";var M=function(e){var t=Object(y.c)((function(e){return e.cityReducer})),a=Object(y.c)((function(e){return e.propertiesReducer})),r=Object(y.c)((function(e){return e.bedroomsReducer})),o=Object(y.c)((function(e){return e.bathroomsReducer})),s=Object(y.c)((function(e){return e.sortReducer})),i=["All","1+","2+","3+","4+"],c=["All","1+","2+","3+","4+"],m=["Default","Price low -> high","Price high -> low"],u=Object(y.b)(),d=function(e){(i=i.filter((function(t){return t!==e.target.textContent}))).unshift(e.target.textContent),console.log(T),u(b(i));for(var t=document.querySelectorAll(".properties-container_filter_house_options_li"),a=0;a<t.length;++a)console.log("trigg"),0==a&&"displayAll"===T?t[a].classList.add("border-helper"):0==a&&"displayNone"===T?t[a].classList.remove("border-helper"):"displayAll"===T?t[a].classList.add("show-helper"):"displayNone"===T&&t[a].classList.remove("show-helper");"displayAll"===T?(console.log("jjjjh"),T="displayNone",console.log(T)):T="displayAll",console.log(T)},p=function(e){(c=c.filter((function(t){return t!==e.target.textContent}))).unshift(e.target.textContent),console.log(G),u(v(c));for(var t=document.querySelectorAll(".properties-container_filter_house_options_li_2"),a=0;a<t.length;++a)console.log("trigg"),0==a&&"displayAll"===G?t[a].classList.add("border-helper"):0==a&&"displayNone"===G?t[a].classList.remove("border-helper"):"displayAll"===G?t[a].classList.add("show-helper"):"displayNone"===G&&t[a].classList.remove("show-helper");"displayAll"===G?(console.log("jjjjh"),G="displayNone",console.log(G)):G="displayAll",console.log(G)},g=function(e){(m=m.filter((function(t){return t!==e.target.textContent}))).unshift(e.target.textContent),console.log(H),u(w(m));for(var t=document.querySelectorAll(".properties-container_filter_house_options_li_3"),a=0;a<t.length;++a)console.log("trigg"),0==a&&"displayAll"===H?t[a].classList.add("border-helper"):0==a&&"displayNone"==H?t[a].classList.remove("border-helper"):"displayAll"===H?t[a].classList.add("show-helper"):"displayNone"===H&&t[a].classList.remove("show-helper");"displayAll"===H?(console.log("jjjjh"),H="displayNone",console.log(H)):H="displayAll",console.log(H)};return Object(n.useEffect)((function(){u(b(i)),u(v(c)),u(w(m))}),[]),Object(n.useEffect)((function(){console.log(a==[]),""!=t&&f.a.get("".concat("","/houses/").concat(t)).then((function(e){console.log(e),u(N(e.data))})).catch((function(e){return console.log(e)}))}),[t]),l.a.createElement("section",{className:"properties-container"},l.a.createElement("div",{className:"properties-container_title"},l.a.createElement("h3",{className:"properties-container_title_text"},""!=t&&"Showing ".concat(a.length," properties in ").concat(t))),l.a.createElement("div",{className:"properties-container_filter"},l.a.createElement("h4",{className:"properties-container_filter_title"},"Price Range"),l.a.createElement("input",{id:"price_min",type:"text",inputMode:"decimal",name:"price_min",placeholder:"From \u20ac"}),l.a.createElement("input",{id:"price_max",type:"text",inputMode:"decimal",name:"price_max",placeholder:"To \u20ac"}),l.a.createElement("h4",{className:"properties-container_filter_title"},"Bedrooms"),l.a.createElement("div",{className:"properties-container_filter_house_options"},l.a.createElement("ul",null,r.map((function(e,t){return 0==t?l.a.createElement("li",{className:"properties-container_filter_house_options_li border-helper",onClick:function(e){return d(e)}},e):l.a.createElement("li",{onClick:function(e){return d(e)},className:"properties-container_filter_house_options_li show-helper"},e)})))),l.a.createElement("h4",{className:"properties-container_filter_title"},"WC"),l.a.createElement("div",{className:"properties-container_filter_house_options"},l.a.createElement("ul",null,o.map((function(e,t){return 0==t?l.a.createElement("li",{className:"properties-container_filter_house_options_li_2 border-helper",onClick:function(e){return p(e)}},e):l.a.createElement("li",{onClick:function(e){return p(e)},className:"properties-container_filter_house_options_li_2 show-helper"},e)})))),l.a.createElement("h4",{className:"properties-container_filter_title"},"Sort"),l.a.createElement("div",{className:"properties-container_filter_house_options"},l.a.createElement("ul",{id:"width-helper"},s.map((function(e,t){return 0==t?l.a.createElement("li",{className:"properties-container_filter_house_options_li_3 border-helper",onClick:function(e){return g(e)}},e):l.a.createElement("li",{onClick:function(e){return g(e)},className:"properties-container_filter_house_options_li_3 show-helper"},e)})))),l.a.createElement("button",{className:"properties-container_filter_submit",onClick:function(e){return function(e){JSON.parse(JSON.stringify(a));var t=parseInt(document.getElementById("price_min").value)||0,n=parseInt(document.getElementById("price_max").value)||2500,l=document.getElementsByClassName("properties-container_filter_house_options_li")[0].textContent;l=parseInt(l[0])||0;var r=document.getElementsByClassName("properties-container_filter_house_options_li_2")[0].textContent;r=parseInt(r[0])||0,console.log(r[r.length-1]);var o=document.getElementsByClassName("properties-container_filter_house_options_li_3")[0].textContent,s=a.filter((function(e){return e.price>=t&&e.price<=n&&Number(e.bathrooms)>=r&&Number(e.bedrooms)>=l}));"Price low -> high"===o?s=s.sort((function(e,t){return e.price-t.price})):"Price high -> low"===o&&(s=s.sort((function(e,t){return t.price-e.price}))),u(N(s))}()},type:"submit"},">")),l.a.createElement("section",{className:"properties-container_houses"},a.map((function(e){return l.a.createElement("div",{className:"properties-container_houses_box"},console.log("url(https://house.fra1.digitaloceanspaces.com/files/".concat(null!=e.houses_path?e.houses_path.pathLocation:"30875dfa-338a-49fd-b498-b5c83900e6d5.jpg")),l.a.createElement("div",{className:"properties-container_houses_box_img",style:{backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(https://house.fra1.digitaloceanspaces.com/files/".concat(null!=e.houses_path?e.houses_path.pathLocation:"30875dfa-338a-49fd-b498-b5c83900e6d5.jpg",")")}}),l.a.createElement("div",{className:"properties-container_houses_box_description"},l.a.createElement("div",{className:"properties-container_houses_box_description_first"},l.a.createElement("h3",{className:"properties-container_houses_box_description_first_text"}," ",e.streetAddress,", ",e.city)),l.a.createElement("div",{className:"properties-container_houses_box_description_second"},l.a.createElement("h3",{className:"properties-container_houses_box_description_second_text"}," ",e.bedrooms," BD "),l.a.createElement("h3",{className:"properties-container_houses_box_description_second_text"}," ",e.bathrooms," WC "),l.a.createElement("h3",{className:"properties-container_houses_box_description_second_text"}," ",e.price," \u20ac"))))}))))};var D=function(e){return l.a.createElement("section",{className:"properties_section"},l.a.createElement(F,null),l.a.createElement(M,null))},J=a(11),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BATHROOMS":return e;case"CHANGE_BATHROOMS":return console.log(t),t.payload;default:return e}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BEDROOMS":return e;case"CHANGE_BEDROOMS":return console.log(t),t.payload;default:return e}},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CITY":return e;case"CHANGE_CITY":return console.log(t),t.payload;default:return e}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PROPERTIES":return e;case"CHANGE_PROPERTIES":return console.log(t),t.payload;default:return e}},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_SEARCH":return e;case"CHANGE_SEARCH":return console.log(t),t.payload;default:return e}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_SORT":return e;case"CHANGE_SORT":return console.log(t),t.payload;default:return e}},X=Object(J.b)({searchReducer:W,cityReducer:Y,propertiesReducer:z,bedroomsReducer:q,bathroomsReducer:U,sortReducer:V}),Q=a(14);a(70);var K=Object(d.g)((function(e){var t=Object(n.useState)(!1),a=Object(Q.a)(t,2),r=a[0],o=a[1],s=Object(n.useState)(!0),i=Object(Q.a)(s,2),c=i[0],m=i[1],u=Object(n.useState)(!1),d=Object(Q.a)(u,2),p=d[0],g=d[1];return Object(n.useEffect)((function(){e.location.state&&m(!1)}),[]),l.a.createElement("section",{className:"container_page"},!c&&l.a.createElement("div",{className:"alert"},l.a.createElement("h5",{className:"alert_text"},"You need to be logged in to access this link"),l.a.createElement("span",{className:"closebtn",onClick:function(e){document.getElementsByClassName("alert")[0].style.opacity="0",setTimeout((function(){document.getElementsByClassName("alert")[0].style.display="none"}),600)}},"\xd7")),l.a.createElement("section",{className:"container_page_form"},l.a.createElement("div",{id:"clicky",className:"container_page_form_moving-element"}),l.a.createElement("div",{className:"container_page_form_login-signup"},l.a.createElement("div",{id:"login",className:"container_page_form_login-signup_login index"},l.a.createElement("h2",{className:"container_page_form_login-signup_login_text login-signup"},"Sign in"),l.a.createElement("h6",{id:"alertwrongpassword",className:"alertwrongpassword"},'""'),l.a.createElement("div",{className:"form-container"},l.a.createElement("form",{onSubmit:function(e){return function(e){console.log("hi"),e.preventDefault();var t=document.getElementById("email").value,a=document.getElementById("password").value,n=JSON.stringify({email:t,password:a});return f.a.post("".concat("","/users/login"),n,{headers:{"Content-Type":"application/json"}}).then((function(e){return e})).then((function(e){console.log(e.headers),h.registerSuccessfulLoginForJwt(e.headers.username,e.headers.token,e.headers.firstname,e.headers.lastname)})).then((function(e){console.log("hi"),window.location=window.location.origin})).catch((function(e){console.log("hi"),o(!0)}))}(e)},className:"col s12"},l.a.createElement("div",{className:"flexible-thing"},l.a.createElement("div",{className:"input-field marginclass col s12"},l.a.createElement("input",{id:"email",type:"text",className:"input-field_text",placeholder:"Email"}),l.a.createElement("label",{className:"input-field_label",htmlFor:"email"},"Email"))),l.a.createElement("div",{className:" flexible-thing"},l.a.createElement("div",{className:"input-field marginclass col s12"},l.a.createElement("input",{id:"password",type:"password",className:"input-field_text",placeholder:"Password"}),l.a.createElement("label",{className:"input-field_label",htmlFor:"password"},"Password"))),l.a.createElement("div",{className:"login-button-div"},l.a.createElement("button",{type:"submit",id:"signinbutton",className:"login-button"},"Sign In")))),r&&l.a.createElement("div",{className:"alert",id:"wrong-creds"},l.a.createElement("h5",{className:"alert_text"},"Wrong email and/or password"),l.a.createElement("span",{className:"closebtn",onClick:function(e){document.getElementById("wrong-creds").style.opacity="0",setTimeout((function(){document.getElementById("wrong-creds").style.display="none"}),600)}},"\xd7"))),l.a.createElement("div",{id:"signup",className:"Signup"},l.a.createElement("div",{className:"Login"},l.a.createElement("h2",{className:"signin login-signup"},"Sign up"),l.a.createElement("div",{className:""},l.a.createElement("form",{className:"col s12",onSubmit:function(e){return function(e){e.preventDefault();var t=document.getElementById("email-register").value,a=document.getElementById("password-register").value,n=document.getElementById("first_name").value,l=document.getElementById("last_name").value,r=JSON.stringify({email:t,password:a,firstName:n,lastName:l});return console.log(r),f.a.post("".concat("","/users"),r,{headers:{"Content-Type":"application/json"}}).then((function(e){return e})).then((function(e){console.log(e,e.headers),g(!0)})).catch((function(e){return console.log(e)}))}(e)}},l.a.createElement("div",{className:"flexible-thing"},l.a.createElement("div",{className:"input-field marginclass col s12"},l.a.createElement("input",{id:"email-register",type:"email",className:"input-field_text",placeholder:"Email"}),l.a.createElement("label",{className:"input-field_label",htmlFor:"email-register"},"Email"))),l.a.createElement("div",{className:"flexible-thing"},l.a.createElement("div",{className:"input-field marginclass col s12"},l.a.createElement("input",{id:"password-register",type:"password",className:"input-field_text",placeholder:"Password"}),l.a.createElement("label",{className:"input-field_label",htmlFor:"password"},"Password"))),l.a.createElement("div",{className:"flexible-thing"},l.a.createElement("div",{className:"input-field marginclass col s12"},l.a.createElement("input",{id:"first_name",type:"text",className:"input-field_text",placeholder:"First Name"}),l.a.createElement("label",{className:"input-field_label",htmlFor:"first_name"},"First Name"))),l.a.createElement("div",{className:"flexible-thing"},l.a.createElement("div",{className:"input-field marginclass col s12"},l.a.createElement("input",{id:"last_name",type:"text",className:"input-field_text",placeholder:"Last Name"}),l.a.createElement("label",{className:"input-field_label",htmlFor:"last_name"},"Username"))),l.a.createElement("div",{className:"login-button-div"},l.a.createElement("button",{type:"submit",id:"signupbutton",className:"login-button"},"Sign up"))),p&&l.a.createElement("div",{className:"alert",id:"success-register"},l.a.createElement("h5",{className:"alert_text"},"Registration successful! You can now login."),l.a.createElement("span",{className:"closebtn",onClick:function(e){document.getElementById("success-register").style.opacity="0",setTimeout((function(){document.getElementById("success-register").style.display="none"}),600)}},"\xd7"))))),l.a.createElement("div",{id:"mprosta",className:"Signupalert"},l.a.createElement("h4",{className:"SignupHeader"},"\u0394\u03b5\u03c2 \u03b5\u03af\u03c3\u03c4\u03b5 \u03b5\u03b3\u03b5\u03b3\u03b3\u03c1\u03b1\u03bc\u03ad\u03bd\u03bf\u03c2 \u03c7\u03c1\u03ae\u03c3\u03c4\u03b7\u03c2?"),l.a.createElement("h5",{className:"SignupSub"},"\u0395\u03b3\u03b3\u03c1\u03b1\u03c6\u03b5\u03af\u03c4\u03b5 \u03c4\u03ce\u03c1\u03b1!"),l.a.createElement("div",{className:"login-button-div"},l.a.createElement("button",{onClick:function(){return document.getElementById("clicky").setAttribute("style","animation: opposite  1s forwards;"),document.getElementById("mprosta").setAttribute("style","animation: mprosta 1s forwards;display: flex;"),document.getElementById("signinalert").setAttribute("style","animation: signinalert 1.3s forwards;display: flex;"),document.getElementById("signup").setAttribute("style","animation: signup 1s forwards ;"),void document.getElementById("login").setAttribute("style","animation: periergi 1s forwards")},id:"signupalert",className:"signup-button mrg-bg"},"Sign up"))),l.a.createElement("div",{id:"signinalert",className:"Signinalert"},l.a.createElement("h4",{className:"SignupHeader"},"\u0388\u03c7\u03b5\u03c4\u03b5 \u03ae\u03b4\u03b7 \u03b5\u03b3\u03b3\u03c1\u03b1\u03c6\u03b5\u03b9;"),l.a.createElement("h5",{className:"SignupSub"},"\u03a3\u03c5\u03bd\u03b4\u03b5\u03b8\u03b5\u03af\u03c4\u03b5 \u03c4\u03ce\u03c1\u03b1!"),l.a.createElement("div",{className:"login-button-div"},l.a.createElement("button",{onClick:function(){return document.getElementById("clicky").setAttribute("style","animation: opposite2  1s forwards;"),document.getElementById("mprosta").setAttribute("style","animation: mprosta2 1s forwards;display: flex;"),document.getElementById("signinalert").setAttribute("style","animation: signinalert2 1.3s forwards;display: flex;"),document.getElementById("signup").setAttribute("style","animation: signup2 1s forwards ;"),void document.getElementById("login").setAttribute("style","animation: periergi2 1s forwards;")},className:"signup-button mrg-bg"},"Sign in"))))))}));var Z=function(e){return l.a.createElement("section",{className:"login_section"},l.a.createElement(K,null))},$=a(37),ee=(a(71),f.a.create({baseURL:""}));ee.interceptors.request.use((function(e){var t=h.getLoggedInUser();return t.user&&(e.headers.Authorization=t.token),e}),(function(e){return console.log(e),Promise.reject(e)}));var te,ae,ne,le,re=ee,oe=window.google=window.google?window.google:{},se={componentRestrictions:{country:"gb"}};var ie=function(e){var t=sessionStorage.getItem("authenticatedUser"),a=sessionStorage.getItem("firstName"),r=sessionStorage.getItem("lastName");return Object(n.useEffect)((function(){new oe.maps.places.Autocomplete(document.getElementById("street_address"),se);ne=new oe.maps.Geocoder,le=new FormData})),document.querySelector("#file"),l.a.createElement("section",{className:"container_page_form"},l.a.createElement("div",{id:"picture"}),l.a.createElement("div",{id:"form_sell",className:"form_sell"},l.a.createElement("div",{className:"form_sell_container"},l.a.createElement("form",{onSubmit:function(e){return function(e){console.log(e),e.preventDefault();var t={firstName:e.target[0].value,lastName:e.target[1].value,email:e.target[2].value,phoneNumber:e.target[3].value,streetAddress:e.target[4].value,postalCode:e.target[5].value,city:e.target[6].value,country:e.target[7].value,bedrooms:e.target[8].value,bathrooms:e.target[9].value,squareMeters:e.target[10].value,price:e.target[11].value,typeOfProperty:"RENT",lat:te,lng:ae};le.append("objArr",JSON.stringify(t));var a,n=Object($.a)(le.entries());try{for(n.s();!(a=n.n()).done;){var l=a.value;console.log(l[0]+", "+l[1])}}catch(r){n.e(r)}finally{n.f()}re({method:"post",url:"".concat("","/put-house"),data:le,headers:{"Content-Type":"multipart/form-data"}}).then((function(e){console.log(e),te=null,ae=null})).then((function(e){return window.location=window.location.origin})).catch((function(e){console.log(e)}))}(e)}},l.a.createElement("div",{className:"form_sell_container_row"},l.a.createElement("div",{className:"form_sell_container_row_item"},l.a.createElement("input",{id:"first_name",type:"text",className:"input-field_text",defaultValue:a,placeholder:"First Name"}),l.a.createElement("label",{className:"input-field_label",htmlFor:"first_name"},"First Name")),l.a.createElement("div",{className:"form_sell_container_row_item"},l.a.createElement("input",{id:"last_name",type:"text",className:"input-field_text",defaultValue:r,placeholder:"Last Name"}),l.a.createElement("label",{className:"input-field_label",htmlFor:"last_name"},"Last Name"))),l.a.createElement("div",{className:"form_sell_container_row"},l.a.createElement("div",{className:"form_sell_container_row_item"},l.a.createElement("input",{id:"email",type:"text",className:"input-field_text",defaultValue:t,placeholder:"Email"}),l.a.createElement("label",{className:"input-field_label",htmlFor:"email"},"Email")),l.a.createElement("div",{className:"form_sell_container_row_item"},l.a.createElement("input",{id:"phone_number",type:"text",className:"input-field_text",placeholder:"Phone Number"}),l.a.createElement("label",{className:"input-field_label",htmlFor:"phone_number"},"Phone Number"))),l.a.createElement("div",{className:"form_sell_container_row"},l.a.createElement("div",{className:"form_sell_container_row_item"},l.a.createElement("input",{id:"street_address",type:"text",className:"input-field_text",placeholder:"Street Address",onBlur:function(e){return function(e){ne.geocode({address:e.target.value},(function(e,t){if(null!=e[0]){var a=e[0].address_components;console.log(e[0].geometry.location.lat),te=e[0].geometry.location.lat(),ae=e[0].geometry.location.lng(),console.log(a);for(var n=0;n<a.length;n++)"postal_town"===a[n].types[0]?document.getElementById("city").value=a[n].long_name:"country"===a[n].types[0]?document.getElementById("country").value=a[n].long_name:"postal_code"===a[n].types[0]&&(document.getElementById("postal_code").value=a[n].long_name)}}))}(e)}}),l.a.createElement("label",{className:"input-field_label",htmlFor:"street_address"},"Street Address")),l.a.createElement("div",{className:"form_sell_container_row_item"},l.a.createElement("input",{id:"postal_code",type:"text",className:"input-field_text",placeholder:"Postal Code"}),l.a.createElement("label",{className:"input-field_label",htmlFor:"postal_code"},"Postal Code"))),l.a.createElement("div",{className:"form_sell_container_row"},l.a.createElement("div",{className:"form_sell_container_row_item"},l.a.createElement("input",{id:"city",type:"text",className:"input-field_text",placeholder:"City"}),l.a.createElement("label",{className:"input-field_label",htmlFor:"city"},"City")),l.a.createElement("div",{className:"form_sell_container_row_item"},l.a.createElement("input",{id:"country",type:"text",className:"input-field_text",placeholder:"Country"}),l.a.createElement("label",{className:"input-field_label",htmlFor:"country"},"Country"))),l.a.createElement("div",{className:"form_sell_container_row"},l.a.createElement("div",{className:"form_sell_container_row_item"},l.a.createElement("input",{id:"bedrooms",type:"text",className:"input-field_text",placeholder:"Bedrooms(only numbers)"}),l.a.createElement("label",{className:"input-field_label",htmlFor:"bedrooms"},"Bedrooms")),l.a.createElement("div",{className:"form_sell_container_row_item"},l.a.createElement("input",{id:"bathrooms",type:"text",className:"input-field_text",placeholder:"Bathrooms(only numbers)"}),l.a.createElement("label",{className:"input-field_label",htmlFor:"bathrooms"},"Bathrooms"))),l.a.createElement("div",{className:"form_sell_container_row"},l.a.createElement("div",{className:"form_sell_container_row_item"},l.a.createElement("input",{id:"square_meters",type:"text",className:"input-field_text",placeholder:"Sqm(only numbers)"}),l.a.createElement("label",{className:"input-field_label",htmlFor:"square_meters"},"Square Meters")),l.a.createElement("div",{className:"form_sell_container_row_item"},l.a.createElement("input",{id:"price",type:"text",className:"input-field_text",placeholder:"Price(only numbers)"}),l.a.createElement("label",{className:"input-field_label",htmlFor:"price"},"Price"))),l.a.createElement("div",{class:"file-input"},l.a.createElement("input",{type:"file",id:"file",class:"file",accept:"image/x-png,image/jpg,image/jpeg",onChange:function(e){return function(e){var t=Object(Q.a)(e.target.files,1)[0],a=t.name,n=(t.size,a.lastIndexOf(".")+1),l=a.substr(n,a.length).toLowerCase();"jpg"==l||"jpeg"==l||"png"==l?(document.getElementById("helper-notify").style.display="none",document.querySelector(".file-name").textContent=a,console.log(e.target.files[0]),(le=new FormData).append("file",e.target.files[0]),console.log(le)):alert("Only jpg/jpeg and png files are allowed!")}(e)}}),l.a.createElement("label",{for:"file"},"Select file",l.a.createElement("p",{className:"file-name"})),l.a.createElement("span",{id:"helper-notify"},"(Only accepts png,jpeg and jpg)"),l.a.createElement("div",{className:"form_sell_container_button"}," ",l.a.createElement("button",{type:"submit",className:"form_sell_container_button_btn"},"Submit")))))))};var ce=function(e){return l.a.createElement("section",{className:"container_page"},l.a.createElement(ie,null))},me=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return h.isUserLoggedIn()?l.a.createElement(d.b,this.props):l.a.createElement(d.a,{to:{pathname:"/login-register",state:{isNotLoggedIn:!0}}})}}]),a}(n.Component),ue=Object(J.c)(X,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),de=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(y.a,{store:ue},l.a.createElement(u.a,null,l.a.createElement(E,null),l.a.createElement(d.d,null,l.a.createElement(d.b,{exact:!0,path:"/",props:this.props,component:I}),l.a.createElement(d.b,{exact:!0,path:"/houses",props:this.props,component:D}),l.a.createElement(d.b,{exact:!0,path:"/login-register",history:this.props.history,props:this.props,component:Z}),l.a.createElement(me,{exact:!0,path:"/sell-house",props:this.props,component:ce}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.4c8ea29b.chunk.js.map