(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{304:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t(6),r=t.n(a),i=t(3),l=t.n(i),c=t(5),o=t.n(c),m=t(0),s=t(2);function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){var n=e.tag,t=void 0===n?"h2":n,a=e.className,r=o()(e,["tag","className"]);return m.createElement(t,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){l()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({className:Object(s.b)(a,"doc-heading")},r))}u.H3=function(e){return m.createElement(u,r()({tag:"h3"},e))}},305:function(e,n,t){"use strict";var a=t(0),r=t(304),i=t(25);n.a=Object(i.b)((function(e){return{lang:e.lang}}))((function(e){var n=e.data,t=e.lang,i=e.title;return a.createElement("div",null,i&&a.createElement(r.a.H3,null,i),a.createElement("div",{className:"api-container"},a.createElement("table",{className:"table table-bordered table-striped props-table"},a.createElement("thead",null,"zh"===t?a.createElement("tr",null,a.createElement("th",null,"属性"),a.createElement("th",null,"类型"),a.createElement("th",null,"默认值"),a.createElement("th",null,"说明")):a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",null,"Type"),a.createElement("th",null,"Default"),a.createElement("th",null,"Description"))),a.createElement("tbody",null,n.map((function(e,n){return a.createElement("tr",{key:"string"==typeof e.name?e.name:e.name.toString()},a.createElement("td",null,e.name),a.createElement("td",null,e.type),a.createElement("td",{className:"default-value"},e.default||"-"),a.createElement("td",null,e.description))}))))))}))},306:function(e,n,t){"use strict";var a=t(0),r=t(13);n.a=function(e){return a.createElement(r.i,{span:!1,md:9,xl:8,className:"pb-3"},e.children)}},307:function(e,n,t){"use strict";var a=t(9),r=t.n(a),i=t(8),l=t.n(i),c=t(4),o=t.n(c),m=t(10),s=t.n(m),d=t(11),u=t.n(d),p=t(7),v=t.n(p),E=t(3),h=t.n(E),b=t(0),g=t(13),f=t(14),y=t(52);function z(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=v()(e);if(n){var r=v()(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return u()(this,t)}}var w=function(e){s()(t,e);var n=z(t);function t(){var e;r()(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return e=n.call.apply(n,[this].concat(i)),h()(o()(e),"timer",null),h()(o()(e),"isClick",!1),h()(o()(e),"cancel",null),h()(o()(e),"handleScroll",(function(){var n=document.querySelector(".right-nav");if(n&&"none"!==getComputedStyle(n).getPropertyValue("display")&&!e.isClick){for(var t=null,a=0,r=Array.from(document.querySelectorAll(".right-nav .right-nav-link"));a<r.length;a++){var i=r[a],l=void 0;try{l=document.querySelector(i.hash)}catch(e){}if(l){var c=l.getBoundingClientRect().top;if(c>=window.innerHeight/2)break;c<=150&&(t=i)}}e.removeActive(),e.activateElement(t)}})),h()(o()(e),"_handleScroll",(function(){null!==e.timer&&(clearTimeout(e.timer),e.timer=null),e.timer=setTimeout(e.handleScroll,50)})),h()(o()(e),"handleClick",(function(n){var t=n.target,a=t.hash,r=e.props,i=r.location,l=r.history;e.isClick=!0,i.hash!==a&&l.push("".concat(i.pathname).concat(a)),e.removeActive(),e.activateElement(t),e.cancel=Object(y.a)(a,(function(){return e.isClick=!1}))||null,n.preventDefault()})),e}return l()(t,[{key:"componentDidMount",value:function(){var e=this.props.location.hash;window.addEventListener("scroll",this._handleScroll),Object(y.a)(e)}},{key:"componentWillUnmount",value:function(){this.cancel&&this.cancel(),window.removeEventListener("scroll",this._handleScroll)}},{key:"removeActive",value:function(){var e=document.querySelectorAll(".right-nav .active");Array.from(e).forEach((function(e){return e.classList.remove("active")}))}},{key:"activateElement",value:function(e){if(e){var n=this.closest(e,".level-2");if(e.classList.add("active"),n){var t=n.previousElementSibling;t&&t.classList.add("active")}}}},{key:"closest",value:function(e,n){for(var t=document.body,a=e.parentNode;a&&a!==t&&!a.matches(n);)a=a.parentNode;return a===t?null:a}},{key:"handleLink",value:function(e){var n=this,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=e.map((function(e){return b.createElement(g.s.Item,{key:e.href},b.createElement(g.s.Link,{className:"right-nav-link",href:e.href,onClick:n.handleClick},e.name),e.children&&n.handleLink(e.children,t+1))}));return b.createElement(g.s,{className:"level-".concat(t),vertical:!0},a)}},{key:"render",value:function(){return b.createElement(g.i,{span:!1,xl:2,className:"d-none d-xl-block right-nav"},this.handleLink(this.props.data))}}]),t}(b.Component);n.a=Object(f.i)(w)},336:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t(304),i=t(13),l=t(33),c=t(305),o=t(26),m=[{name:"animation",type:'"border" | "grow"',description:a.createElement(o.a,{id:"animApi"})},{name:"variant",type:'"primary" |\n    "secondary" |\n    "success" |\n    "danger" |\n    "warning" |\n    "info" |\n    "dark" |\n    "light"',description:a.createElement(o.a,{id:"variantApi"})},{name:"size",type:'"sm" | number',description:a.createElement(o.a,{id:"sizeApi"})},{name:"borderWidth",type:"number",description:a.createElement(o.a,{id:"borderWidthApi"})}],s=function(){return a.createElement(c.a,{title:"Spinner",data:m})},d=t(306),u=t(51),p={en:{compDesc:"Spinners can be used to show the loading state in your projects. They’re built only with HTML and CSS, meaning you don’t need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, alignment, and sizing can be easily customized.",borderTitle:"Border spinner",variantTitle:"Variants",growingTitle:"Growing spinner",sizeTitle:"Size",sizeDesc:a.createElement(a.Fragment,null,"Add ",a.createElement("code",null,'size="sm"')," to make a smaller spinner that can quickly be used within other components."),sizeDesc2:"Or set a number",btnTitle:"Buttons",btnDesc:"Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed.",animApi:"Animation style of the spinner",variantApi:"The color of the spinner",sizeApi:"Size of the spinner",borderWidthApi:"Border width for the border spinner"},zh:{compDesc:"Spinner可以用来展示加载状态。它们是通过HTML和CSS创建的，意味着不需要任何js。在某些情况下需要用js来切换状态。外观、对齐方式和尺寸都很容易自定义。",borderTitle:"边框spinner",variantTitle:"种类",growingTitle:"缩放的spinner",sizeTitle:"尺寸",sizeDesc:a.createElement(a.Fragment,null,"设置",a.createElement("code",null,'size="sm"'),"来获得更小的spinner。"),sizeDesc2:"或者设置数字",btnTitle:"按钮",btnDesc:"在按钮中使用spinner来指示操作正在处理。如果需要可以在spinner外设置文本。",animApi:"spinner的动画",variantApi:"spinner的颜色",sizeApi:"spinner的尺寸",borderWidthApi:"边框spinner的边框宽度"}},v=t(307),E=a.createElement(o.a,{id:"borderTitle"}),h=a.createElement(o.a,{id:"variantTitle"}),b=a.createElement(o.a,{id:"growingTitle"}),g=a.createElement(o.a,{id:"sizeTitle"}),f=a.createElement(o.a,{id:"btnTitle"}),y=function(){return a.createElement(v.a,{data:[{name:E,href:"#".concat("borderSpinner")},{name:h,href:"#".concat("spinnerVariants")},{name:b,href:"#".concat("growingSpinner")},{name:g,href:"#".concat("spinnerSize")},{name:f,href:"#".concat("spinnerButton")},{name:"API",href:"#".concat("spinnerApi")}]})},z=r.a.H3;n.default=function(){return a.createElement(u.a,{language:p},a.createElement(d.a,null,a.createElement(r.a,null,"Spinner"),a.createElement("div",null,a.createElement(o.a,{id:"compDesc"})),a.createElement(z,{id:"borderSpinner"},E),a.createElement("div",{className:"bd-example"},a.createElement(i.z,{animation:"border"}),a.createElement(l.a,{code:'<Spinner animation="border"/>'})),a.createElement(z,{id:"spinnerVariants"},h),a.createElement("div",{className:"bd-example"},a.createElement(i.z,{animation:"border",variant:"primary"}),a.createElement(i.z,{animation:"border",variant:"secondary"}),a.createElement(i.z,{animation:"border",variant:"success"}),a.createElement(i.z,{animation:"border",variant:"danger"}),a.createElement(i.z,{animation:"border",variant:"warning"}),a.createElement(i.z,{animation:"border",variant:"info"}),a.createElement(i.z,{animation:"border",variant:"light"}),a.createElement(i.z,{animation:"border",variant:"dark"}),a.createElement(l.a,{code:'<>\n    <Spinner animation="border" variant="primary"/>\n    <Spinner animation="border" variant="secondary"/>\n    <Spinner animation="border" variant="success"/>\n    <Spinner animation="border" variant="danger"/>\n    <Spinner animation="border" variant="warning"/>\n    <Spinner animation="border" variant="info"/>\n    <Spinner animation="border" variant="light"/>\n    <Spinner animation="border" variant="dark"/>        \n</>'})),a.createElement(z,{id:"growingSpinner"},b),a.createElement("div",{className:"bd-example"},a.createElement(i.z,{animation:"grow"}),a.createElement(l.a,{code:'<Spinner animation="grow"/>'})),a.createElement("div",{className:"bd-example"},a.createElement(i.z,{animation:"grow",variant:"primary"}),a.createElement(i.z,{animation:"grow",variant:"secondary"}),a.createElement(i.z,{animation:"grow",variant:"success"}),a.createElement(i.z,{animation:"grow",variant:"danger"}),a.createElement(i.z,{animation:"grow",variant:"warning"}),a.createElement(i.z,{animation:"grow",variant:"info"}),a.createElement(i.z,{animation:"grow",variant:"light"}),a.createElement(i.z,{animation:"grow",variant:"dark"}),a.createElement(l.a,{code:'<>\n    <Spinner animation="grow" variant="primary"/>\n    <Spinner animation="grow" variant="secondary"/>\n    <Spinner animation="grow" variant="success"/>\n    <Spinner animation="grow" variant="danger"/>\n    <Spinner animation="grow" variant="warning"/>\n    <Spinner animation="grow" variant="info"/>\n    <Spinner animation="grow" variant="light"/>\n    <Spinner animation="grow" variant="dark"/>        \n</>'})),a.createElement(z,{id:"spinnerSize"},g),a.createElement("div",null,a.createElement(o.a,{id:"sizeDesc"})),a.createElement("div",{className:"bd-example"},a.createElement(i.z,{animation:"border",size:"sm"}),a.createElement(i.z,{animation:"grow",size:"sm"}),a.createElement(l.a,{code:'<>\n    <Spinner animation="border" size="sm"/>\n    <Spinner animation="grow" size="sm"/>\n</>'})),a.createElement("div",null,a.createElement(o.a,{id:"sizeDesc2"})),a.createElement("div",{className:"bd-example"},a.createElement(i.z,{animation:"border",size:50}),a.createElement(i.z,{animation:"grow",size:50}),a.createElement(l.a,{code:'<>\n    <Spinner animation="border" size={50}/>\n    <Spinner animation="grow" size={50}/>\n</>'})),a.createElement(z,{id:"spinnerButton"},f),a.createElement("div",null,a.createElement(o.a,{id:"btnDesc"})),a.createElement("div",{className:"bd-example"},a.createElement(i.e,{className:"mr-2",disabled:!0},a.createElement(i.z,{animation:"border",size:"sm"})),a.createElement(i.e,{disabled:!0},a.createElement(i.z,{animation:"border",size:"sm"})," Loading"),a.createElement(l.a,{code:'<>\n    <Button disabled>\n        <Spinner animation="border" size="sm" />\n    </Button>\n    <Button disabled>\n        <Spinner animation="border" size="sm" /> Loading\n    </Button>            \n</>'})),a.createElement("div",{className:"bd-example"},a.createElement(i.e,{className:"mr-2",disabled:!0},a.createElement(i.z,{animation:"grow",size:"sm"})),a.createElement(i.e,{disabled:!0},a.createElement(i.z,{animation:"grow",size:"sm"})," Loading"),a.createElement(l.a,{code:'<>\n    <Button disabled>\n        <Spinner animation="grow" size="sm" />\n    </Button>\n    <Button disabled>\n        <Spinner animation="grow" size="sm" /> Loading\n    </Button>            \n</>'})),a.createElement(r.a,{id:"spinnerApi"},"API"),a.createElement(s,null)),a.createElement(y,null))}}}]);