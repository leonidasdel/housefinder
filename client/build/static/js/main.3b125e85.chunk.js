(this["webpackJsonprent-a-house-dot-com"]=this["webpackJsonprent-a-house-dot-com"]||[]).push([[0],{34:function(e,t,a){e.exports=a.p+"static/media/logo.022c2883.png"},36:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAEPElEQVRYhbWXW2wUZRTHf2dmemFpu73YQirR0rSiiRASQ3zgAV7ACHarDU2b0lsoxBjhxWAgxkRfJDHGxAdNJBK5VJGmse1yUcDEC15iJNIHAhapQAtEoKG0224ve5njw9Jm7c62nbb8n+bLOXP+/3O+mfOdT3CJXt+2Qlvs1So8JWp7AFSMEVH+xox0FrV98a+beDIbp2u+7UtMCb+qUA08M4P7JURaIhLdX9LefG9eAu5srFs8vkh2KvIWkDUbsXEIKvJxJBTeV/rtlwHXAq6X1z0vGG1AoUviqbhti1YUdxz5w8loOJPXVwnGDwtADvC4oXKup7yh3smYUIEeX2OlirY42eYJBakt8h86mlRAz8sNz6lyDvAsMPkExmzRdfHbMSmgy7ctM12iXSxM2afDrfRR++mlZ5uDEPcNpEl0txtyMzeb3KYacptqMHOz3QhYNuYx35hYCMT+c0PC3UDGjMTeLLLKXyDzpQ1IaioAGokQ/P4XBlr8RO8/mI2IoYhhl5S0N9+zAB42mWnJzbwcvBWbydiwDklNASD6YCBmy8kmY+N6Fq9fy/B3PzHYdmomIZmWLduBfQJwo7zhMkk6nFPG0cAQgY7ThHtugq2Y+XlkV5Vj5uVMqchxovf7HRUoXFzuP7xKYr09ejtpxhvXIynWZMaDbd8Q7rmFd0sZ6atimse7ugn4T2M+lou3YhNmTuyb0FA4VpGvTxLtH0jQoGEplBu+hs0IJ6da8998Hc/aNYnElWWkr3Q+DsavdBPoSBQy8ut5+j74JLEKKi9aYkixqiZGMwyigwEC/jOEuq/HiJtqHIknkLaihPw9Oxm/0k3//maMrEyyq8rBcO5pgl1iqa1ep5438FU7kTt3ydvVRE595bTEjkL27iL48+/cfm0PKYVLnB1FvFayIOHeWwBYBfmuyONhFeSjoRChGzeT+4ghg45bkASBE2cZbPED4K3YhDU6wEhrK57aWjxbtrjVOGCprdfcHDsaCmMPByefNRJBQyGIRNySoyr/WFjRC0RN1y9PYPHWrXiqqxEr6W4m58fqNB7OcJfnrMCykLQ0MF0ncbH4+IG7scNI5NicBcwRqhwDsADCKfJpSkh34zD3BX/8jfFLXZPr+Oexv64ibaeSkkT6nNswMKSkfA5x80CPr/4dFXnXRRLzwdtF/sPvQdw8sCht9EMg4Ux4BOhNH7U/mlhMCihobR3GNnzAyCMkH7NFKyemof8JACg6cfACyA5g9p1p9lBFG6eO5wljeZH/0FERqlnYSoyJSMNy/5GWqYakPbC3rHGNbWgbsGye5L0iVDzZcfhPJ6PjxQTgiROHzqfaaSsE3QsMzoE4qMj7Y2o+m4wcZnn56H6lrsCyjR0KVQIrp3FV4CJoSzjV/Ky09WDfTLFd336ub2pcisVqw6BU1c4EEDGGbJuritVZfPzAXTfx/gMM1aSqmN2FbwAAAABJRU5ErkJggg=="},38:function(e,t,a){e.exports=a(73)},43:function(e,t,a){},44:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=70},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),o=a.n(r),s=(a(43),a(8)),i=a(9),c=a(12),m=a(13),u=a(5),p=a(1),d=(a(44),a(34)),g=a.n(d),_=a(7),f=a.n(_),h=new(function(){function e(){Object(s.a)(this,e)}return Object(i.a)(e,[{key:"registerSuccessfulLoginForJwt",value:function(e,t,a,n){sessionStorage.setItem("authenticatedUser",e),sessionStorage.setItem("firstName",a),sessionStorage.setItem("lastName",n),console.log(sessionStorage.getItem("authenticatedUser")),console.log("ji"),this.setupAxiosInterceptors(this.createJWTToken(t))}},{key:"createJWTToken",value:function(e){return"Bearer "+e}},{key:"setupAxiosInterceptors",value:function(e){var t=this;f.a.interceptors.request.use((function(a){return console.log("interceptorrr"),t.isUserLoggedIn()&&(a.headers.authorization=e),a}))}},{key:"isUserLoggedIn",value:function(){return null!==sessionStorage.getItem("authenticatedUser")}},{key:"logout",value:function(){sessionStorage.removeItem("authenticatedUser"),sessionStorage.removeItem("firstname"),sessionStorage.removeItem("lastname"),window.location="".concat(window.location.origin,"/login-register")}}]),e}()),E=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){var e=h.isUserLoggedIn(),t=sessionStorage.getItem("authenticatedUser");return l.a.createElement("header",{className:"header"},l.a.createElement("nav",null,l.a.createElement("ul",{className:"header_list"},l.a.createElement("li",{className:"header_list_item"},l.a.createElement(u.b,{to:"/houses",className:"header_list_item_text"},"Rent")),l.a.createElement("li",{className:"header_list_item"},l.a.createElement(u.b,{to:"/houses",className:"header_list_item_text"},"Buy")),l.a.createElement("li",{className:"header_list_item"},l.a.createElement(u.b,{to:"/sell-house",className:"header_list_item_text"},"Rent your house")),!e&&l.a.createElement("li",{className:"header_list_item"},l.a.createElement(u.b,{to:"/login-register",className:"header_list_item_text"},"Login")),!e&&l.a.createElement("li",{className:"header_list_item"},l.a.createElement(u.b,{to:"/login-register",className:"header_list_item_text"},"Register")),e&&l.a.createElement("li",{className:"header_list_item"},l.a.createElement(u.b,{to:"/sell-house",className:"header_list_item_text"},t)),e&&l.a.createElement("li",{className:"header_list_item"},l.a.createElement("a",{onClick:h.logout,className:"header_list_item_text"},"LogOut")))),l.a.createElement(u.b,{className:"header_image",to:"/"},l.a.createElement("img",{src:g.a,alt:"header-logo",className:"header_image_icon"})))}}]),a}(n.Component),N=(a(66),a(2)),y=function(e){return{type:"CHANGE_PROPERTIES",payload:e}},b=function(e){return{type:"CHANGE_BEDROOMS",payload:e}},v=function(e){return{type:"CHANGE_BATHROOMS",payload:e}},w=function(e){return{type:"CHANGE_SORT",payload:e}},x=window.google=window.google?window.google:{},A={types:["(cities)"],componentRestrictions:{country:"gb"}};var O,S,C,j=function(e){Object(N.c)((function(e){return e.searchReducer}));var t=Object(N.b)();return Object(n.useEffect)((function(){new x.maps.places.Autocomplete(document.getElementById("address_input"),A)})),l.a.createElement("main",{className:"mainPage"},l.a.createElement("section",{className:"mainPage_search"},l.a.createElement("h1",{className:"mainPage_search_title"},"\u0395\u03cd\u03c1\u03b5\u03c3\u03b7 \u0394\u03b9\u03b1\u03bc\u03b5\u03c1\u03b9\u03c3\u03bc\u03ac\u03c4\u03c9\u03bd",l.a.createElement("span",{className:"mainPage_search_title_span"},"\u039c\u03b5 \u03ad\u03bd\u03b1 \u03bc\u03cc\u03bd\u03bf \u03ba\u03bb\u03b9\u03ba!")),l.a.createElement("form",{onSubmit:function(a){return function(a){a.preventDefault();var n=document.getElementById("address_input").value;t(function(e){return{type:"CHANGE_SEARCH",payload:e}}(n)),e.history.push("/houses")}(a)},action:"",className:"mainPage_search_bar"},l.a.createElement("input",{type:"search",id:"address_input",placeholder:"Manchester, Blackpool, Liverpool...",className:"mainPage_search_bar_input"}),l.a.createElement("i",{className:"fas fa-search"}))))},I=(a(68),a(36)),B=a.n(I),R=window.google=window.google?window.google:{},k=[],P=new R.maps.InfoWindow,L={types:["(cities)"],componentRestrictions:{country:"gr"}};var F=function(e){var t=Object(N.c)((function(e){return e.searchReducer})),a=Object(N.b)(),r=Object(N.c)((function(e){return e.propertiesReducer}));Object(n.useEffect)((function(){new R.maps.places.Autocomplete(document.getElementById("autocomplete"),L);O=new R.maps.Geocoder,S=new R.maps.Map(document.getElementById("mapContainer"),{center:{lat:54.3005,lng:-3.2522809},zoom:6,scrollwheel:!1}),""!=t&&o(t)}),[]),Object(n.useEffect)((function(){k=[];for(var e=function(e){console.log(e),C=new R.maps.Marker({position:new R.maps.LatLng(r[e].lat,r[e].lng),map:S,icon:B.a}),k.push(C),R.maps.event.addListener(k[e],"click",(function(){P.setContent(r[e].streetAddress),P.open(S,k[e])}))},t=0;t<r.length;t++)e(t)}),[r]);var o=function(e){var t;console.log(e),O.geocode({address:e},(function(e,n){if(console.log(e,n),"OK"===n){S.setCenter(e[0].geometry.location),S.fitBounds(e[0].geometry.viewport);for(var l=e[0].address_components,r=0;r<l.length;r++)if(console.log(l),"locality"==l[r].types[0]||"postal_town"==l[r].types[0]){t=l[r].long_name,a({type:"CHANGE_CITY",payload:t});break}console.log(t)}}))};return l.a.createElement("div",{style:{width:"46%",height:"100%"},id:"mapContainer"})},T=(a(69),f.a.create({baseURL:""}));T.interceptors.request.use((function(e){var t=h.getLoggedInUser();return t.user&&(e.headers.Authorization=t.token),e}),(function(e){return console.log(e),Promise.reject(e)}));var G=T,H="displayNone",M="displayNone",D="displayNone";var J=function(e){var t=Object(N.c)((function(e){return e.cityReducer})),r=Object(N.c)((function(e){return e.propertiesReducer})),o=Object(N.c)((function(e){return e.bedroomsReducer})),s=Object(N.c)((function(e){return e.bathroomsReducer})),i=Object(N.c)((function(e){return e.sortReducer})),c=["All","1+","2+","3+","4+"],m=["All","1+","2+","3+","4+"],u=["Default","Price low -> high","Price high -> low"],p=Object(N.b)(),d=function(e){(c=c.filter((function(t){return t!==e.target.textContent}))).unshift(e.target.textContent),console.log(H),p(b(c));for(var t=document.querySelectorAll(".properties-container_filter_house_options_li"),a=0;a<t.length;++a)console.log("trigg"),0==a&&"displayAll"===H?t[a].classList.add("border-helper"):0==a&&"displayNone"===H?t[a].classList.remove("border-helper"):"displayAll"===H?t[a].classList.add("show-helper"):"displayNone"===H&&t[a].classList.remove("show-helper");"displayAll"===H?(console.log("jjjjh"),H="displayNone",console.log(H)):H="displayAll",console.log(H)},g=function(e){(m=m.filter((function(t){return t!==e.target.textContent}))).unshift(e.target.textContent),console.log(M),p(v(m));for(var t=document.querySelectorAll(".properties-container_filter_house_options_li_2"),a=0;a<t.length;++a)console.log("trigg"),0==a&&"displayAll"===M?t[a].classList.add("border-helper"):0==a&&"displayNone"===M?t[a].classList.remove("border-helper"):"displayAll"===M?t[a].classList.add("show-helper"):"displayNone"===M&&t[a].classList.remove("show-helper");"displayAll"===M?(console.log("jjjjh"),M="displayNone",console.log(M)):M="displayAll",console.log(M)},_=function(e){(u=u.filter((function(t){return t!==e.target.textContent}))).unshift(e.target.textContent),console.log(D),p(w(u));for(var t=document.querySelectorAll(".properties-container_filter_house_options_li_3"),a=0;a<t.length;++a)console.log("trigg"),0==a&&"displayAll"===D?t[a].classList.add("border-helper"):0==a&&"displayNone"==D?t[a].classList.remove("border-helper"):"displayAll"===D?t[a].classList.add("show-helper"):"displayNone"===D&&t[a].classList.remove("show-helper");"displayAll"===D?(console.log("jjjjh"),D="displayNone",console.log(D)):D="displayAll",console.log(D)};return Object(n.useEffect)((function(){p(b(c)),p(v(m)),p(w(u))}),[]),Object(n.useEffect)((function(){console.log(r==[]),""!=t&&f.a.get("".concat("","/houses/").concat(t)).then((function(e){console.log(e),p(y(e.data))})).catch((function(e){return console.log(e)}))}),[t]),l.a.createElement("section",{className:"properties-container"},l.a.createElement("div",{className:"properties-container_title"},l.a.createElement("h3",{className:"properties-container_title_text"},""!=t&&"Showing ".concat(r.length," properties in ").concat(t))),l.a.createElement("div",{className:"properties-container_filter"},l.a.createElement("h4",{className:"properties-container_filter_title"},"Price Range"),l.a.createElement("input",{id:"price_min",type:"text",inputMode:"decimal",name:"price_min",placeholder:"From \u20ac"}),l.a.createElement("input",{id:"price_max",type:"text",inputMode:"decimal",name:"price_max",placeholder:"To \u20ac"}),l.a.createElement("h4",{className:"properties-container_filter_title"},"Bedrooms"),l.a.createElement("div",{className:"properties-container_filter_house_options"},l.a.createElement("ul",null,o.map((function(e,t){return 0==t?l.a.createElement("li",{className:"properties-container_filter_house_options_li border-helper",onClick:function(e){return d(e)}},e):l.a.createElement("li",{onClick:function(e){return d(e)},className:"properties-container_filter_house_options_li show-helper"},e)})))),l.a.createElement("h4",{className:"properties-container_filter_title"},"WC"),l.a.createElement("div",{className:"properties-container_filter_house_options"},l.a.createElement("ul",null,s.map((function(e,t){return 0==t?l.a.createElement("li",{className:"properties-container_filter_house_options_li_2 border-helper",onClick:function(e){return g(e)}},e):l.a.createElement("li",{onClick:function(e){return g(e)},className:"properties-container_filter_house_options_li_2 show-helper"},e)})))),l.a.createElement("h4",{className:"properties-container_filter_title"},"Sort"),l.a.createElement("div",{className:"properties-container_filter_house_options"},l.a.createElement("ul",{id:"width-helper"},i.map((function(e,t){return 0==t?l.a.createElement("li",{className:"properties-container_filter_house_options_li_3 border-helper",onClick:function(e){return _(e)}},e):l.a.createElement("li",{onClick:function(e){return _(e)},className:"properties-container_filter_house_options_li_3 show-helper"},e)})))),l.a.createElement("button",{className:"properties-container_filter_submit",onClick:function(e){return function(e){JSON.parse(JSON.stringify(r));var t=parseInt(document.getElementById("price_min").value)||0,a=parseInt(document.getElementById("price_max").value)||2500,n=document.getElementsByClassName("properties-container_filter_house_options_li")[0].textContent;n=parseInt(n[0])||0;var l=document.getElementsByClassName("properties-container_filter_house_options_li_2")[0].textContent;l=parseInt(l[0])||0,console.log(l[l.length-1]);var o=document.getElementsByClassName("properties-container_filter_house_options_li_3")[0].textContent,s=r.filter((function(e){return e.price>=t&&e.price<=a&&Number(e.bathrooms)>=l&&Number(e.bedrooms)>=n}));"Price low -> high"===o?s=s.sort((function(e,t){return e.price-t.price})):"Price high -> low"===o&&(s=s.sort((function(e,t){return t.price-e.price}))),p(y(s))}()},type:"submit"},">")),l.a.createElement("section",{className:"properties-container_houses"},r.map((function(e){return l.a.createElement("div",{className:"properties-container_houses_box"},l.a.createElement("div",{className:"properties-container_houses_box_img",style:{backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(".concat(a(70)("./"+(null!=e.houses_path?e.houses_path.pathLocation:"home-main.jpg")),")")}}),l.a.createElement("div",{className:"properties-container_houses_box_description"},l.a.createElement("div",{className:"properties-container_houses_box_description_first"},l.a.createElement("h3",{className:"properties-container_houses_box_description_first_text"}," ",e.streetAddress,", ",e.city)),l.a.createElement("div",{className:"properties-container_houses_box_description_second"},l.a.createElement("h3",{className:"properties-container_houses_box_description_second_text"}," ",e.bedrooms," BD "),l.a.createElement("h3",{className:"properties-container_houses_box_description_second_text"}," ",e.bathrooms," WC "),l.a.createElement("h3",{className:"properties-container_houses_box_description_second_text"}," ",e.price," \u20ac"))))}))))};var U=function(e){return l.a.createElement("section",{className:"properties_section"},l.a.createElement(F,null),l.a.createElement(J,null))},q=a(11),Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BATHROOMS":return e;case"CHANGE_BATHROOMS":return console.log(t),t.payload;default:return e}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BEDROOMS":return e;case"CHANGE_BEDROOMS":return console.log(t),t.payload;default:return e}},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CITY":return e;case"CHANGE_CITY":return console.log(t),t.payload;default:return e}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PROPERTIES":return e;case"CHANGE_PROPERTIES":return console.log(t),t.payload;default:return e}},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_SEARCH":return e;case"CHANGE_SEARCH":return console.log(t),t.payload;default:return e}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_SORT":return e;case"CHANGE_SORT":return console.log(t),t.payload;default:return e}},K=Object(q.b)({searchReducer:X,cityReducer:W,propertiesReducer:V,bedroomsReducer:z,bathroomsReducer:Y,sortReducer:Q}),Z=a(17);a(71);var $=Object(p.g)((function(e){var t=Object(n.useState)(!1),a=Object(Z.a)(t,2),r=a[0],o=a[1];return l.a.createElement("section",{className:"container_page"},l.a.createElement("section",{className:"container_page_form"},l.a.createElement("div",{id:"clicky",className:"container_page_form_moving-element"}),l.a.createElement("div",{className:"container_page_form_login-signup"},l.a.createElement("div",{id:"login",className:"container_page_form_login-signup_login index"},l.a.createElement("h2",{className:"container_page_form_login-signup_login_text login-signup"},"Sign in"),l.a.createElement("h6",{id:"alertwrongpassword",className:"alertwrongpassword"},'""'),l.a.createElement("div",{className:"form-container"},l.a.createElement("form",{onSubmit:function(e){return function(e){console.log("hi"),e.preventDefault();var t=document.getElementById("email").value,a=document.getElementById("password").value,n=JSON.stringify({email:t,password:a});return f.a.post("".concat("","/users/login"),n,{headers:{"Content-Type":"application/json"}}).then((function(e){return e})).then((function(e){console.log(e.headers),h.registerSuccessfulLoginForJwt(e.headers.username,e.headers.token,e.headers.firstname,e.headers.lastname)})).then((function(e){console.log("hi"),window.location=window.location.origin})).catch((function(e){console.log("hi"),o(!0)}))}(e)},className:"col s12"},l.a.createElement("div",{className:"flexible-thing"},l.a.createElement("div",{className:"input-field marginclass col s12"},l.a.createElement("input",{id:"email",type:"text",className:"input-field_text",placeholder:"Email"}),l.a.createElement("label",{className:"input-field_label",htmlFor:"email"},"Email"))),l.a.createElement("div",{className:" flexible-thing"},l.a.createElement("div",{className:"input-field marginclass col s12"},l.a.createElement("input",{id:"password",type:"password",className:"input-field_text",placeholder:"Password"}),l.a.createElement("label",{className:"input-field_label",htmlFor:"password"},"Password"))),l.a.createElement("div",{className:"login-button-div"},l.a.createElement("button",{type:"submit",id:"signinbutton",className:"login-button"},"Sign In"))),r&&l.a.createElement("h3",{className:"error-helper"},"Wrong username and/or password!"))),l.a.createElement("div",{id:"signup",className:"Signup"},l.a.createElement("div",{className:"Login"},l.a.createElement("h2",{className:"signin login-signup"},"Sign up"),l.a.createElement("div",{className:""},l.a.createElement("form",{className:"col s12",onSubmit:function(e){return function(e){e.preventDefault();var t=document.getElementById("email-register").value,a=document.getElementById("password-register").value,n=document.getElementById("first_name").value,l=document.getElementById("last_name").value,r=JSON.stringify({email:t,password:a,firstName:n,lastName:l});return console.log(r),f.a.post("".concat("","/users"),r,{headers:{"Content-Type":"application/json"}}).then((function(e){return e})).then((function(e){console.log(e,e.headers)})).catch((function(e){return console.log(e)}))}(e)}},l.a.createElement("div",{className:"flexible-thing"},l.a.createElement("div",{className:"input-field marginclass col s12"},l.a.createElement("input",{id:"email-register",type:"email",className:"input-field_text",placeholder:"Email"}),l.a.createElement("label",{className:"input-field_label",htmlFor:"email-register"},"Email"))),l.a.createElement("div",{className:"flexible-thing"},l.a.createElement("div",{className:"input-field marginclass col s12"},l.a.createElement("input",{id:"password-register",type:"password",className:"input-field_text",placeholder:"Password"}),l.a.createElement("label",{className:"input-field_label",htmlFor:"password"},"Password"))),l.a.createElement("div",{className:"flexible-thing"},l.a.createElement("div",{className:"input-field marginclass col s12"},l.a.createElement("input",{id:"first_name",type:"text",className:"input-field_text",placeholder:"First Name"}),l.a.createElement("label",{className:"input-field_label",htmlFor:"first_name"},"First Name"))),l.a.createElement("div",{className:"flexible-thing"},l.a.createElement("div",{className:"input-field marginclass col s12"},l.a.createElement("input",{id:"last_name",type:"text",className:"input-field_text",placeholder:"Last Name"}),l.a.createElement("label",{className:"input-field_label",htmlFor:"last_name"},"Username"))),l.a.createElement("div",{className:"login-button-div"},l.a.createElement("button",{type:"submit",id:"signupbutton",className:"login-button"},"Sign up")))))),l.a.createElement("div",{id:"mprosta",className:"Signupalert"},l.a.createElement("h4",{className:"SignupHeader"},"\u0394\u03b5\u03c2 \u03b5\u03af\u03c3\u03c4\u03b5 \u03b5\u03b3\u03b5\u03b3\u03b3\u03c1\u03b1\u03bc\u03ad\u03bd\u03bf\u03c2 \u03c7\u03c1\u03ae\u03c3\u03c4\u03b7\u03c2?"),l.a.createElement("h5",{className:"SignupSub"},"\u0395\u03b3\u03b3\u03c1\u03b1\u03c6\u03b5\u03af\u03c4\u03b5 \u03c4\u03ce\u03c1\u03b1!"),l.a.createElement("div",{className:"login-button-div"},l.a.createElement("button",{onClick:function(){return document.getElementById("clicky").setAttribute("style","animation: opposite  1s forwards;"),document.getElementById("mprosta").setAttribute("style","animation: mprosta 1s forwards;display: flex;"),document.getElementById("signinalert").setAttribute("style","animation: signinalert 1.3s forwards;display: flex;"),document.getElementById("signup").setAttribute("style","animation: signup 1s forwards ;"),void document.getElementById("login").setAttribute("style","animation: periergi 1s forwards")},id:"signupalert",className:"signup-button mrg-bg"},"Sign up"))),l.a.createElement("div",{id:"signinalert",className:"Signinalert"},l.a.createElement("h4",{className:"SignupHeader"},"\u0388\u03c7\u03b5\u03c4\u03b5 \u03ae\u03b4\u03b7 \u03b5\u03b3\u03b3\u03c1\u03b1\u03c6\u03b5\u03b9;"),l.a.createElement("h5",{className:"SignupSub"},"\u03a3\u03c5\u03bd\u03b4\u03b5\u03b8\u03b5\u03af\u03c4\u03b5 \u03c4\u03ce\u03c1\u03b1!"),l.a.createElement("div",{className:"login-button-div"},l.a.createElement("button",{onClick:function(){return document.getElementById("clicky").setAttribute("style","animation: opposite2  1s forwards;"),document.getElementById("mprosta").setAttribute("style","animation: mprosta2 1s forwards;display: flex;"),document.getElementById("signinalert").setAttribute("style","animation: signinalert2 1.3s forwards;display: flex;"),document.getElementById("signup").setAttribute("style","animation: signup2 1s forwards ;"),void document.getElementById("login").setAttribute("style","animation: periergi2 1s forwards;")},className:"signup-button mrg-bg"},"Sign in"))))))}));var ee,te,ae,ne,le=function(e){return l.a.createElement("section",{className:"login_section"},l.a.createElement($,null))},re=a(37),oe=(a(72),window.google=window.google?window.google:{}),se={componentRestrictions:{country:"gb"}};var ie=function(e){var t=sessionStorage.getItem("authenticatedUser"),a=sessionStorage.getItem("firstName"),r=sessionStorage.getItem("lastName");return Object(n.useEffect)((function(){new oe.maps.places.Autocomplete(document.getElementById("street_address"),se);ae=new oe.maps.Geocoder,ne=new FormData})),document.querySelector("#file"),l.a.createElement("section",{className:"container_page_form"},l.a.createElement("div",{id:"picture"}),l.a.createElement("div",{id:"form_sell",className:"form_sell"},l.a.createElement("div",{className:"form_sell_container"},l.a.createElement("form",{onSubmit:function(e){return function(e){console.log(e),e.preventDefault();var t={firstName:e.target[0].value,lastName:e.target[1].value,email:e.target[2].value,phoneNumber:e.target[3].value,streetAddress:e.target[4].value,postalCode:e.target[5].value,city:e.target[6].value,country:e.target[7].value,bedrooms:e.target[8].value,bathrooms:e.target[9].value,squareMeters:e.target[10].value,price:e.target[11].value,typeOfProperty:"RENT",lat:ee,lng:te};ne.append("objArr",JSON.stringify(t));var a,n=Object(re.a)(ne.entries());try{for(n.s();!(a=n.n()).done;){var l=a.value;console.log(l[0]+", "+l[1])}}catch(r){n.e(r)}finally{n.f()}G({method:"post",url:"".concat("","/put-house"),data:ne,headers:{"Content-Type":"multipart/form-data"}}).then((function(e){console.log(e),ee=null,te=null})).then((function(e){return window.location=window.location.origin})).catch((function(e){console.log(e)}))}(e)}},l.a.createElement("div",{className:"form_sell_container_row"},l.a.createElement("div",{className:"form_sell_container_row_item"},l.a.createElement("input",{id:"first_name",type:"text",className:"input-field_text",defaultValue:a,placeholder:"First Name"}),l.a.createElement("label",{className:"input-field_label",htmlFor:"first_name"},"First Name")),l.a.createElement("div",{className:"form_sell_container_row_item"},l.a.createElement("input",{id:"last_name",type:"text",className:"input-field_text",defaultValue:r,placeholder:"Last Name"}),l.a.createElement("label",{className:"input-field_label",htmlFor:"last_name"},"Last Name"))),l.a.createElement("div",{className:"form_sell_container_row"},l.a.createElement("div",{className:"form_sell_container_row_item"},l.a.createElement("input",{id:"email",type:"text",className:"input-field_text",defaultValue:t,placeholder:"Email"}),l.a.createElement("label",{className:"input-field_label",htmlFor:"email"},"Email")),l.a.createElement("div",{className:"form_sell_container_row_item"},l.a.createElement("input",{id:"phone_number",type:"text",className:"input-field_text",placeholder:"Phone Number"}),l.a.createElement("label",{className:"input-field_label",htmlFor:"phone_number"},"Phone Number"))),l.a.createElement("div",{className:"form_sell_container_row"},l.a.createElement("div",{className:"form_sell_container_row_item"},l.a.createElement("input",{id:"street_address",type:"text",className:"input-field_text",placeholder:"Street Address",onBlur:function(e){return function(e){ae.geocode({address:e.target.value},(function(e,t){if(null!=e[0]){var a=e[0].address_components;console.log(e[0].geometry.location.lat),ee=e[0].geometry.location.lat(),te=e[0].geometry.location.lng(),console.log(a);for(var n=0;n<a.length;n++)"postal_town"===a[n].types[0]?document.getElementById("city").value=a[n].long_name:"country"===a[n].types[0]?document.getElementById("country").value=a[n].long_name:"postal_code"===a[n].types[0]&&(document.getElementById("postal_code").value=a[n].long_name)}}))}(e)}}),l.a.createElement("label",{className:"input-field_label",htmlFor:"street_address"},"Street Address")),l.a.createElement("div",{className:"form_sell_container_row_item"},l.a.createElement("input",{id:"postal_code",type:"text",className:"input-field_text",placeholder:"Postal Code"}),l.a.createElement("label",{className:"input-field_label",htmlFor:"postal_code"},"Postal Code"))),l.a.createElement("div",{className:"form_sell_container_row"},l.a.createElement("div",{className:"form_sell_container_row_item"},l.a.createElement("input",{id:"city",type:"text",className:"input-field_text",placeholder:"City"}),l.a.createElement("label",{className:"input-field_label",htmlFor:"city"},"City")),l.a.createElement("div",{className:"form_sell_container_row_item"},l.a.createElement("input",{id:"country",type:"text",className:"input-field_text",placeholder:"Country"}),l.a.createElement("label",{className:"input-field_label",htmlFor:"country"},"Country"))),l.a.createElement("div",{className:"form_sell_container_row"},l.a.createElement("div",{className:"form_sell_container_row_item"},l.a.createElement("input",{id:"bedrooms",type:"text",className:"input-field_text",placeholder:"Bedrooms(only numbers)"}),l.a.createElement("label",{className:"input-field_label",htmlFor:"bedrooms"},"Bedrooms")),l.a.createElement("div",{className:"form_sell_container_row_item"},l.a.createElement("input",{id:"bathrooms",type:"text",className:"input-field_text",placeholder:"Bathrooms(only numbers)"}),l.a.createElement("label",{className:"input-field_label",htmlFor:"bathrooms"},"Bathrooms"))),l.a.createElement("div",{className:"form_sell_container_row"},l.a.createElement("div",{className:"form_sell_container_row_item"},l.a.createElement("input",{id:"square_meters",type:"text",className:"input-field_text",placeholder:"Sqm(only numbers)"}),l.a.createElement("label",{className:"input-field_label",htmlFor:"square_meters"},"Square Meters")),l.a.createElement("div",{className:"form_sell_container_row_item"},l.a.createElement("input",{id:"price",type:"text",className:"input-field_text",placeholder:"Price(only numbers)"}),l.a.createElement("label",{className:"input-field_label",htmlFor:"price"},"Price"))),l.a.createElement("div",{class:"file-input"},l.a.createElement("input",{type:"file",id:"file",class:"file",accept:"image/x-png,image/jpg,image/jpeg",onChange:function(e){return function(e){var t=Object(Z.a)(e.target.files,1)[0],a=t.name,n=(t.size,a.lastIndexOf(".")+1),l=a.substr(n,a.length).toLowerCase();"jpg"==l||"jpeg"==l||"png"==l?(document.getElementById("helper-notify").style.display="none",document.querySelector(".file-name").textContent=a,console.log(e.target.files[0]),(ne=new FormData).append("file",e.target.files[0]),console.log(ne)):alert("Only jpg/jpeg and png files are allowed!")}(e)}}),l.a.createElement("label",{for:"file"},"Select file",l.a.createElement("p",{className:"file-name"})),l.a.createElement("span",{id:"helper-notify"},"(Only accepts png,jpeg and jpg)"),l.a.createElement("div",{className:"form_sell_container_button"}," ",l.a.createElement("button",{type:"submit",className:"form_sell_container_button_btn"},"Submit")))))))};var ce=function(e){return l.a.createElement("section",{className:"container_page"},l.a.createElement(ie,null))},me=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return h.isUserLoggedIn()?l.a.createElement(p.b,this.props):l.a.createElement(p.a,{to:"/login-register"})}}]),a}(n.Component),ue=Object(q.c)(K,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),pe=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(N.a,{store:ue},l.a.createElement(u.a,null,l.a.createElement(E,null),l.a.createElement(p.d,null,l.a.createElement(p.b,{exact:!0,path:"/",props:this.props,component:j}),l.a.createElement(p.b,{exact:!0,path:"/houses",props:this.props,component:U}),l.a.createElement(p.b,{exact:!0,path:"/login-register",history:this.props.history,props:this.props,component:le}),l.a.createElement(me,{exact:!0,path:"/sell-house",props:this.props,component:ce}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.3b125e85.chunk.js.map