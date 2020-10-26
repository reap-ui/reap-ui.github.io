(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{320:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var l=n(6),a=n.n(l),i=n(3),r=n.n(i),c=n(5),o=n.n(c),s=n(0),m=n(2);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function d(e){var t=e.tag,n=void 0===t?"h2":t,l=e.className,a=o()(e,["tag","className"]);return s.createElement(n,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({className:Object(m.b)(l,"doc-heading")},a))}d.H3=function(e){return s.createElement(d,a()({tag:"h3"},e))}},321:function(e,t,n){"use strict";var l=n(0),a=n(320),i=n(23);t.a=Object(i.b)((function(e){return{lang:e.lang}}))((function(e){var t=e.data,n=e.lang,i=e.title;return l.createElement("div",null,i&&l.createElement(a.a.H3,null,i),l.createElement("div",{className:"api-container"},l.createElement("table",{className:"table table-bordered table-striped props-table"},l.createElement("thead",null,"zh"===n?l.createElement("tr",null,l.createElement("th",null,"属性"),l.createElement("th",null,"类型"),l.createElement("th",null,"默认值"),l.createElement("th",null,"说明")):l.createElement("tr",null,l.createElement("th",null,"Name"),l.createElement("th",null,"Type"),l.createElement("th",null,"Default"),l.createElement("th",null,"Description"))),l.createElement("tbody",null,t.map((function(e,t){return l.createElement("tr",{key:"string"==typeof e.name?e.name:e.name.toString()},l.createElement("td",null,e.name),l.createElement("td",null,e.type),l.createElement("td",{className:"default-value"},e.default||"-"),l.createElement("td",null,e.description))}))))))}))},322:function(e,t,n){"use strict";var l=n(0),a=n(13);t.a=function(e){return l.createElement(a.i,{span:!1,md:9,xl:8,className:"pb-3"},e.children)}},323:function(e,t,n){"use strict";var l=n(9),a=n.n(l),i=n(8),r=n.n(i),c=n(4),o=n.n(c),s=n(10),m=n.n(s),u=n(11),d=n.n(u),p=n(7),h=n.n(p),f=n(3),v=n.n(f),k=n(0),A=n(13),g=n(14),E=n(51);function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=h()(e);if(t){var a=h()(this).constructor;n=Reflect.construct(l,arguments,a)}else n=l.apply(this,arguments);return d()(this,n)}}var y=function(e){m()(n,e);var t=b(n);function n(){var e;a()(this,n);for(var l=arguments.length,i=new Array(l),r=0;r<l;r++)i[r]=arguments[r];return e=t.call.apply(t,[this].concat(i)),v()(o()(e),"timer",null),v()(o()(e),"isClick",!1),v()(o()(e),"cancel",null),v()(o()(e),"handleScroll",(function(){var t=document.querySelector(".right-nav");if(t&&"none"!==getComputedStyle(t).getPropertyValue("display")&&!e.isClick){for(var n=document.querySelectorAll(".right-nav .right-nav-link"),l=null,a=0,i=Array.from(n);a<i.length;a++){var r=i[a],c=void 0;try{c=document.querySelector(r.hash)}catch(e){continue}if(c){var o=c.getBoundingClientRect().top;if(o>=window.innerHeight/2)break;o<=150&&(l=r)}}e.removeActive(),e.activateElement(l)}})),v()(o()(e),"_handleScroll",(function(){null!==e.timer&&(clearTimeout(e.timer),e.timer=null),e.timer=setTimeout(e.handleScroll,50)})),v()(o()(e),"handleClick",(function(t){var n=t.target,l=n.hash,a=e.props,i=a.location,r=a.history;e.isClick=!0,i.hash!==l&&r.push("".concat(i.pathname).concat(l)),e.removeActive(),e.activateElement(n),e.cancel=Object(E.a)(l,(function(){return e.isClick=!1}))||null,t.preventDefault()})),e}return r()(n,[{key:"componentDidMount",value:function(){var e=this.props.location.hash;window.addEventListener("scroll",this._handleScroll),Object(E.a)(e)}},{key:"componentWillUnmount",value:function(){this.cancel&&this.cancel(),window.removeEventListener("scroll",this._handleScroll)}},{key:"removeActive",value:function(){var e=document.querySelectorAll(".right-nav .active");Array.from(e).forEach((function(e){return e.classList.remove("active")}))}},{key:"activateElement",value:function(e){if(e){var t=this.closest(e,".level-2");if(e.classList.add("active"),t){var n=t.previousElementSibling;n&&n.classList.add("active")}}}},{key:"closest",value:function(e,t){for(var n=document.body,l=e.parentNode;l&&l!==n&&!l.matches(t);)l=l.parentNode;return l===n?null:l}},{key:"handleLink",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,l=e.map((function(e){return k.createElement(A.s.Item,{key:e.href},k.createElement(A.s.Link,{className:"right-nav-link",href:e.href,onClick:t.handleClick},e.name),e.children&&t.handleLink(e.children,n+1))}));return k.createElement(A.s,{className:"level-".concat(n),vertical:!0},l)}},{key:"render",value:function(){return k.createElement(A.i,{span:!1,xl:2,className:"d-none d-xl-block"},k.createElement("div",{className:"right-nav"},this.handleLink(this.props.data)))}}]),n}(k.Component);t.a=Object(g.withRouter)(y)},324:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var l=n(0),a=n(32),i=n(2);function r(e){var t=e.component,n=e.className,r=e.source,c=e.children;return l.createElement(l.Fragment,null,c&&l.createElement("div",null,c),l.createElement("div",{className:Object(i.b)(n,"bd-example")},l.createElement("div",null,t),r&&l.createElement(a.a,{code:r})))}},325:function(e,t,n){"use strict";var l=n(0),a=n(23),i=n(320);t.a=Object(a.b)((function(e){return{lang:e.lang}}))((function(e){return l.createElement(l.Fragment,null,e.title&&l.createElement(i.a.H3,null,e.title),l.createElement("div",{className:"text-muted"},l.createElement("em",null,"zh"===e.lang?"该组件暂无属性":"No public props for this component.")))}))},339:function(e,t,n){"use strict";n.r(t);var l=n(0),a=n(320),i=n(324),r=n(322),c=n(13);function o(){return l.createElement(l.Fragment,null,l.createElement(c.b,{variant:"primary"},"A simple primary alert—check it out!"),l.createElement(c.b,{variant:"secondary"},"A simple secondary alert—check it out!"),l.createElement(c.b,{variant:"success"},"A simple success alert—check it out!"),l.createElement(c.b,{variant:"danger"},"A simple danger alert—check it out!"),l.createElement(c.b,{variant:"warning"},"A simple warning alert—check it out!"),l.createElement(c.b,{variant:"info"},"A simple info alert—check it out!"),l.createElement(c.b,{variant:"light"},"A simple light alert—check it out!"),l.createElement(c.b,{variant:"dark"},"A simple dark alert—check it out!"))}var s=n(16),m=n.n(s);function u(){var e=l.useState(!0),t=m()(e,2),n=t[0],a=t[1];return l.createElement(l.Fragment,null,l.createElement(c.b,{dismissible:!0,visible:n,variant:"warning",onClose:function(){a(!1)}},"Holy guacamole! You should check in on some of those fields below."))}function d(){var e=l.useState(!0),t=m()(e,2),n=t[0],a=t[1];return l.createElement(l.Fragment,null,l.createElement(c.e,{onClick:function(){a(!n)}},"Toggle"),l.createElement(c.b,{className:"mt-3",visible:n,variant:"danger"},"Holy guacamole! You should check in on some of those fields below."))}function p(){return l.createElement(l.Fragment,null,l.createElement(c.b,{variant:"primary"},"A simple primary alert with ",l.createElement(c.b.Link,null,"an example link"),". Give it a click if you like."),l.createElement(c.b,{variant:"secondary"},"A simple secondary alert with ",l.createElement(c.b.Link,null,"an example link"),". Give it a click if you like."),l.createElement(c.b,{variant:"success"},"A simple success alert with ",l.createElement(c.b.Link,null,"an example link"),". Give it a click if you like."),l.createElement(c.b,{variant:"danger"},"A simple danger alert with ",l.createElement(c.b.Link,null,"an example link"),". Give it a click if you like."),l.createElement(c.b,{variant:"warning"},"A simple warning alert with ",l.createElement(c.b.Link,null,"an example link"),". Give it a click if you like."),l.createElement(c.b,{variant:"info"},"A simple info alert with ",l.createElement(c.b.Link,null,"an example link"),". Give it a click if you like."),l.createElement(c.b,{variant:"light"},"A simple light alert with ",l.createElement(c.b.Link,null,"an example link"),". Give it a click if you like."),l.createElement(c.b,{variant:"dark"},"A simple dark alert with ",l.createElement(c.b.Link,null,"an example link"),". Give it a click if you like."))}var h=function(){return l.createElement(c.b,{variant:"success",heading:"Well done!"},l.createElement("p",null,"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."),l.createElement("hr",null),l.createElement("p",{className:"mb-0"},"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."))},f=n(321),v=n(325),k=n(24),A=[{name:"variant",type:'"primary" |\n        "secondary" |\n        "success" |\n        "danger" |\n        "warning" |\n        "info" |\n        "dark" |\n        "light"',default:"",description:l.createElement(k.a,{id:"variantApi"})},{name:"Fade",type:"boolean",default:"true",description:l.createElement(k.a,{id:"fadeApi"})},{name:"visible",type:"boolean",default:"true",description:l.createElement(k.a,{id:"visibleApi"})},{name:"heading",type:"string | ReactNode",description:l.createElement(k.a,{id:"headingApi"})},{name:"dismissible",type:"boolean",default:"false",description:l.createElement(k.a,{id:"dismissApi"})},{name:"onClose",type:"Function",description:l.createElement(k.a,{id:"onCloseApi"})},{name:"onClosed",type:"Function",description:l.createElement(k.a,{id:"onClosedApi"})}],g=function(){return l.createElement(l.Fragment,null,l.createElement(f.a,{title:"Alert",data:A}),l.createElement(v.a,{title:"Alert.Link"}))},E=n(50),b={en:{compDesc:"Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.",egTitle:"Examples",egDesc:l.createElement(l.Fragment,null,"Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight variants (e.g., ",l.createElement("code",null,'variant="success"'),")."),lcTitle:"Link color",lcDesc:l.createElement(l.Fragment,null,"Use the ",l.createElement("code",null,"Alert.Link")," to quickly provide matching colored links within any alert."),acTitle:"Additional content",acDesc:"Alerts can also contain additional HTML elements like headings, paragraphs and dividers.",dsTitle:"Dismissing",tgTitle:"Toggle",variantApi:"Appearance of a Alert",fadeApi:"Fade effect when Alert dismiss or appear",visibleApi:"Visual state of the Alert.",headingApi:"Additional heading",dismissApi:"Add a dismiss button and adds extra padding to the right of the alert",onCloseApi:"If dismissible is true the callback is invoked immediately once the dismiss button is clicked, otherwise it will be invoked when visible changes from true to false",onClosedAPI:"The callback is invoked when the alert has been dismissed."},zh:{compDesc:"为用户的操作提供一些有用的、灵活的、与上下文有关的反馈信息。",egTitle:"示例",egDesc:l.createElement(l.Fragment,null,"Alerts 可用于任何长度的文本包括一个可选的关闭按钮，使用8个类型之一展示合适的样式。（例如:",l.createElement("code",null,'variant="success"'),"）。"),lcTitle:"链接颜色",lcDesc:l.createElement(l.Fragment,null,"使用",l.createElement("code",null,"Alert.Link"),"适配Alert组件内的链接颜色。"),acTitle:"附加内容",acDesc:"Alerts也能够包含一些附加的元素如标题、段落以及分割线。",dsTitle:"可关闭",tgTitle:"切换",variantApi:"Alert的外观样式",fadeApi:"淡入淡出效果",visibleApi:"Alert组件是否可见",headingApi:"附加的标题",dismissApi:l.createElement(l.Fragment,null,"显示关闭按钮，并给Alert添加额外的",l.createElement("code",null,"padding-right")),onCloseApi:l.createElement(l.Fragment,null,"如果dismissible传入了",l.createElement("code",null,"true"),"，该回调函数会在关闭按钮被点击时调用，否则该回调函数会在",l.createElement("code",null,"visible"),"由",l.createElement("code",null,"true"),"变为",l.createElement("code",null,"false"),"时调用"),onClosedApi:"该回调函数会在Alert消失之后调用"}},y=n(323),w="alertExamples",L="linkColor",x="additionalContent",C="dismissing",D="toggle",T="alertApi",O=l.createElement(k.a,{id:"egTitle"}),N=l.createElement(k.a,{id:"lcTitle"}),S=l.createElement(k.a,{id:"acTitle"}),j=l.createElement(k.a,{id:"dsTitle"}),F=l.createElement(k.a,{id:"tgTitle"}),G=function(){return l.createElement(y.a,{data:[{name:O,href:"#".concat(w)},{name:N,href:"#".concat(L)},{name:S,href:"#".concat(x)},{name:j,href:"#".concat(C)},{name:F,href:"#".concat(D)},{name:"API",href:"#".concat(T)}]})},R=a.a.H3;t.default=function(){return l.createElement(E.a,{language:b},l.createElement(r.a,null,l.createElement(a.a,null,"Alert"),l.createElement("div",null,l.createElement(k.a,{id:"compDesc"})),l.createElement(R,{id:w},O),l.createElement(i.a,{component:l.createElement(o,null),source:'import * as React from "react"\nimport { Alert } from "reap-ui"\n\nexport default function Basic() {\n    return (\n        <>\n            <Alert variant="primary">\n                A simple primary alert—check it out!\n            </Alert>\n            <Alert variant="secondary">\n                A simple secondary alert—check it out!\n            </Alert>\n            <Alert variant="success">\n                A simple success alert—check it out!\n            </Alert>\n            <Alert variant="danger">\n                A simple danger alert—check it out!\n            </Alert>\n            <Alert variant="warning">\n                A simple warning alert—check it out!\n            </Alert>\n            <Alert variant="info">\n                A simple info alert—check it out!\n            </Alert>\n            <Alert variant="light">\n                A simple light alert—check it out!\n            </Alert>\n            <Alert variant="dark">\n                A simple dark alert—check it out!\n            </Alert>\n        </>\n    )\n}'},l.createElement(k.a,{id:"egDesc"})),l.createElement(R,{id:L},N),l.createElement(i.a,{component:l.createElement(p,null),source:'import * as React from "react"\nimport { Alert } from "reap-ui"\n\nexport default function Basic() {\n    return (\n        <>\n            <Alert variant="primary">\n                A simple primary alert with <Alert.Link>an example link</Alert.Link>. Give it a click if you like.\n            </Alert>\n            <Alert variant="secondary">\n                A simple secondary alert with <Alert.Link>an example link</Alert.Link>. Give it a click if you like.\n            </Alert>\n            <Alert variant="success">\n                A simple success alert with <Alert.Link>an example link</Alert.Link>. Give it a click if you like.\n            </Alert>\n            <Alert variant="danger">\n                A simple danger alert with <Alert.Link>an example link</Alert.Link>. Give it a click if you like.\n            </Alert>\n            <Alert variant="warning">\n                A simple warning alert with <Alert.Link>an example link</Alert.Link>. Give it a click if you like.\n            </Alert>\n            <Alert variant="info">\n                A simple info alert with <Alert.Link>an example link</Alert.Link>. Give it a click if you like.\n            </Alert>\n            <Alert variant="light">\n                A simple light alert with <Alert.Link>an example link</Alert.Link>. Give it a click if you like.\n            </Alert>\n            <Alert variant="dark">\n                A simple dark alert with <Alert.Link>an example link</Alert.Link>. Give it a click if you like.\n            </Alert>\n        </>\n    )\n}'},l.createElement(k.a,{id:"lcDesc"})),l.createElement(R,{id:x},S),l.createElement(i.a,{component:l.createElement(h,null),source:'import * as React from "react"\nimport { Alert } from "reap-ui"\n\nexport default () => (\n    <Alert variant="success" heading="Well done!">\n        <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>\n        <hr />\n        <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\n    </Alert>\n)'},l.createElement(k.a,{id:"acDesc"})),l.createElement(R,{id:C},j),l.createElement(i.a,{component:l.createElement(u,null),source:'import * as React from "react"\nimport { Alert } from "reap-ui"\n\nexport default function Dismissible() {\n    const [visible, setVisible] = React.useState(true)\n    const onClose = () => {\n        setVisible(false)\n    }\n\n    return (\n        <>\n            <Alert dismissible visible={visible} variant="warning" onClose={onClose}>\n                Holy guacamole! You should check in on some of those fields below.\n            </Alert>\n        </>\n    )\n}'}),l.createElement(R,{id:D},F),l.createElement(i.a,{component:l.createElement(d,null),source:'import * as React from "react"\nimport {\n    Alert, Button \n} from "reap-ui"\n\nexport default function Dismissible() {\n    const [visible, setVisible] = React.useState(true)\n    const toggle = () => {\n        setVisible(!visible)\n    }\n\n    return (\n        <>\n            <Button onClick={toggle}>Toggle</Button>\n            <Alert className="mt-3" visible={visible} variant="danger">\n                Holy guacamole! You should check in on some of those fields below.\n            </Alert>\n        </>\n    )\n}'}),l.createElement(a.a,{id:T},"API"),l.createElement(g,null)),l.createElement(G,null))}}}]);