(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{304:function(e,a,n){"use strict";n.d(a,"a",(function(){return u}));var t=n(6),r=n.n(t),l=n(3),c=n.n(l),i=n(5),o=n.n(i),d=n(0),s=n(2);function m(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function u(e){var a=e.tag,n=void 0===a?"h2":a,t=e.className,r=o()(e,["tag","className"]);return d.createElement(n,function(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?m(Object(n),!0).forEach((function(a){c()(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}({className:Object(s.b)(t,"doc-heading")},r))}u.H3=function(e){return d.createElement(u,r()({tag:"h3"},e))}},305:function(e,a,n){"use strict";var t=n(0),r=n(304),l=n(25);a.a=Object(l.b)((function(e){return{lang:e.lang}}))((function(e){var a=e.data,n=e.lang,l=e.title;return t.createElement("div",null,l&&t.createElement(r.a.H3,null,l),t.createElement("div",{className:"api-container"},t.createElement("table",{className:"table table-bordered table-striped props-table"},t.createElement("thead",null,"zh"===n?t.createElement("tr",null,t.createElement("th",null,"属性"),t.createElement("th",null,"类型"),t.createElement("th",null,"默认值"),t.createElement("th",null,"说明")):t.createElement("tr",null,t.createElement("th",null,"Name"),t.createElement("th",null,"Type"),t.createElement("th",null,"Default"),t.createElement("th",null,"Description"))),t.createElement("tbody",null,a.map((function(e,a){return t.createElement("tr",{key:"string"==typeof e.name?e.name:e.name.toString()},t.createElement("td",null,e.name),t.createElement("td",null,e.type),t.createElement("td",{className:"default-value"},e.default||"-"),t.createElement("td",null,e.description))}))))))}))},306:function(e,a,n){"use strict";var t=n(0),r=n(12);a.a=function(e){return t.createElement(r.i,{span:!1,md:9,xl:8,className:"pb-3"},e.children)}},307:function(e,a,n){"use strict";var t=n(9),r=n.n(t),l=n(8),c=n.n(l),i=n(4),o=n.n(i),d=n(10),s=n.n(d),m=n(11),u=n.n(m),g=n(7),p=n.n(g),h=n(3),f=n.n(h),v=n(0),E=n(12),y=n(14),B=n(52);function b(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,t=p()(e);if(a){var r=p()(this).constructor;n=Reflect.construct(t,arguments,r)}else n=t.apply(this,arguments);return u()(this,n)}}var k=function(e){s()(n,e);var a=b(n);function n(){var e;r()(this,n);for(var t=arguments.length,l=new Array(t),c=0;c<t;c++)l[c]=arguments[c];return e=a.call.apply(a,[this].concat(l)),f()(o()(e),"timer",null),f()(o()(e),"isClick",!1),f()(o()(e),"cancel",null),f()(o()(e),"handleScroll",(function(){var a=document.querySelector(".right-nav");if(a&&"none"!==getComputedStyle(a).getPropertyValue("display")&&!e.isClick){for(var n=null,t=0,r=Array.from(document.querySelectorAll(".right-nav .right-nav-link"));t<r.length;t++){var l=r[t],c=void 0;try{c=document.querySelector(l.hash)}catch(e){}if(c){var i=c.getBoundingClientRect().top;if(i>=window.innerHeight/2)break;i<=150&&(n=l)}}e.removeActive(),e.activateElement(n)}})),f()(o()(e),"_handleScroll",(function(){null!==e.timer&&(clearTimeout(e.timer),e.timer=null),e.timer=setTimeout(e.handleScroll,50)})),f()(o()(e),"handleClick",(function(a){var n=a.target,t=n.hash,r=e.props,l=r.location,c=r.history;e.isClick=!0,l.hash!==t&&c.push("".concat(l.pathname).concat(t)),e.removeActive(),e.activateElement(n),e.cancel=Object(B.a)(t,(function(){return e.isClick=!1}))||null,a.preventDefault()})),e}return c()(n,[{key:"componentDidMount",value:function(){var e=this.props.location.hash;window.addEventListener("scroll",this._handleScroll),Object(B.a)(e)}},{key:"componentWillUnmount",value:function(){this.cancel&&this.cancel(),window.removeEventListener("scroll",this._handleScroll)}},{key:"removeActive",value:function(){var e=document.querySelectorAll(".right-nav .active");Array.from(e).forEach((function(e){return e.classList.remove("active")}))}},{key:"activateElement",value:function(e){if(e){var a=this.closest(e,".level-2");if(e.classList.add("active"),a){var n=a.previousElementSibling;n&&n.classList.add("active")}}}},{key:"closest",value:function(e,a){for(var n=document.body,t=e.parentNode;t&&t!==n&&!t.matches(a);)t=t.parentNode;return t===n?null:t}},{key:"handleLink",value:function(e){var a=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=e.map((function(e){return v.createElement(E.s.Item,{key:e.href},v.createElement(E.s.Link,{className:"right-nav-link",href:e.href,onClick:a.handleClick},e.name),e.children&&a.handleLink(e.children,n+1))}));return v.createElement(E.s,{className:"level-".concat(n),vertical:!0},t)}},{key:"render",value:function(){return v.createElement(E.i,{span:!1,xl:2,className:"d-none d-xl-block right-nav"},this.handleLink(this.props.data))}}]),n}(v.Component);a.a=Object(y.i)(k)},308:function(e,a,n){"use strict";n.d(a,"a",(function(){return c}));var t=n(0),r=n(33),l=n(2);function c(e){var a=e.component,n=e.className,c=e.source,i=e.children;return t.createElement(t.Fragment,null,i&&t.createElement("div",null,i),t.createElement("div",{className:Object(l.b)(n,"bd-example")},t.createElement("div",null,a),c&&t.createElement(r.a,{code:c})))}},324:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n(308),l=n(304),c=n(306),i=n(12),o=function(){return t.createElement(t.Fragment,null,t.createElement("h1",null,"Example heading",t.createElement(i.c,{variant:"secondary"},"New")),t.createElement("h2",null,"Example heading",t.createElement(i.c,{variant:"secondary"},"New")),t.createElement("h3",null,"Example heading",t.createElement(i.c,{variant:"secondary"},"New")),t.createElement("h4",null,"Example heading",t.createElement(i.c,{variant:"secondary"},"New")),t.createElement("h5",null,"Example heading",t.createElement(i.c,{variant:"secondary"},"New")),t.createElement("h6",null,"Example heading",t.createElement(i.c,{variant:"secondary"},"New")))},d=function(){return t.createElement(t.Fragment,null,t.createElement(i.c,{variant:"primary"},"Primary"),t.createElement(i.c,{variant:"secondary"},"Secondary"),t.createElement(i.c,{variant:"success"},"Success"),t.createElement(i.c,{variant:"danger"},"Danger"),t.createElement(i.c,{variant:"warning"},"Warning"),t.createElement(i.c,{variant:"info"},"Info"),t.createElement(i.c,{variant:"light"},"Light"),t.createElement(i.c,{variant:"dark"},"Dark"))},s=function(){return t.createElement(t.Fragment,null,t.createElement(i.c,{variant:"primary",pill:!0},"Primary"),t.createElement(i.c,{variant:"secondary",pill:!0},"Secondary"),t.createElement(i.c,{variant:"success",pill:!0},"Success"),t.createElement(i.c,{variant:"danger",pill:!0},"Danger"),t.createElement(i.c,{variant:"warning",pill:!0},"Warning"),t.createElement(i.c,{variant:"info",pill:!0},"Info"),t.createElement(i.c,{variant:"light",pill:!0},"Light"),t.createElement(i.c,{variant:"dark",pill:!0},"Dark"))},m=function(){return t.createElement(t.Fragment,null,t.createElement(i.c,{variant:"primary",href:"#"},"Primary"),t.createElement(i.c,{variant:"secondary",href:"#"},"Secondary"),t.createElement(i.c,{variant:"success",href:"#"},"Success"),t.createElement(i.c,{variant:"danger",href:"#"},"Danger"),t.createElement(i.c,{variant:"warning",href:"#"},"Warning"),t.createElement(i.c,{variant:"info",href:"#"},"Info"),t.createElement(i.c,{variant:"light",href:"#"},"Light"),t.createElement(i.c,{variant:"dark",href:"#"},"Dark"))},u=function(){return t.createElement(i.e,null,"Notifications ",t.createElement(i.c,{variant:"light"},"4"),t.createElement("span",{className:"sr-only"},"unread messages"))},g=n(305),p=n(26),h=[{name:"variant",type:'"primary" |\n        "secondary" |\n        "success" |\n        "danger" |\n        "warning" |\n        "info" |\n        "dark" |\n        "light"',description:t.createElement(p.a,{id:"varApi"})},{name:"href",type:"string",description:t.createElement(p.a,{id:"hrefApi"})},{name:"pill",type:"boolean",default:"false",description:t.createElement(p.a,{id:"pillApi"})}],f=function(){return t.createElement(t.Fragment,null,t.createElement(g.a,{title:"Badge",data:h}))},v=n(51),E=n(307),y=t.createElement(p.a,{id:"egTitle"}),B=t.createElement(p.a,{id:"varTitle"}),b=t.createElement(p.a,{id:"pillTitle"}),k=t.createElement(p.a,{id:"linkTitle"}),w="contextualVariations",D=function(){return t.createElement(E.a,{data:[{name:y,href:"#".concat("badgeExample")},{name:B,href:"#".concat(w)},{name:b,href:"#".concat("pillBadges")},{name:k,href:"#".concat("links")},{name:"API",href:"#".concat("badgeApi")}]})},N={en:{compDesc:"Our small count and labeling component.",egTitle:"Example",egDesc:"Badges scale to match the size of the immediate parent element by using relative font sizing and em units.",counterDesc:"Badges can be used as part of links or buttons to provide a counter.",note:t.createElement(t.Fragment,null,t.createElement("p",null,"Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies. While the styling of badges provides a visual cue as to their purpose, these users will simply be presented with the content of the badge. Depending on the specific situation, these badges may seem like random additional words or numbers at the end of a sentence, link, or button."),"Unless the context is clear (as with the “Notifications” example, where it is understood that the “4” is the number of notifications), consider including additional context with a visually hidden piece of additional text."),varTitle:"Contextual variations",varDesc:"Add any of the below mentioned variants to change the appearance of a badge.",pillTitle:"Pill badges",pilDesc:t.createElement(t.Fragment,null,"Use the ",t.createElement("code",null,"pill")," prop to make badges more rounded (with a larger ",t.createElement("code",null,"border-radius")," and additional horizontal ",t.createElement("code",null,"padding"),")."),linkTitle:"Links",linkDesc:t.createElement(t.Fragment,null,"Using the ",t.createElement("code",null,"Badge")," on an ",t.createElement("code",null,"<a>")," element quickly provide actionable badges with hover and focus states(by passing the ",t.createElement("code",null,"href")," prop)."),varApi:"Appearance of a Badge",hrefApi:"Render as 'a' element with href if passed",pillApi:"Make badges more rounded (with a larger border-radius and additional horizontal padding)"},zh:{compDesc:"小的计数标签组件",egTitle:"示例",egDesc:"Badges使用em单位来适应直接父元素。",counterDesc:"Badges可以作为链接或者按钮的计数器.",note:t.createElement(t.Fragment,null,t.createElement("p",null,"注: Badges可能会对使用屏幕阅读器或相似技术的用户感到困惑，这取决于你如何使用。Badges的样式给出了一些提示，将这些内容展示给这些用户。取决于具体的情形，这些badges可能会像句子、链接或者按钮末尾的随机附加词语或数字。"),"除非上下文是清晰的（正如“Notifications”示例一样，4被理解为通知的数量），可以考虑添加视觉上不可见的附加文本。"),varTitle:"外观类型",varDesc:"添加以下类型来改变badges的外观。",pillTitle:"胶囊badges",pillDesc:t.createElement(t.Fragment,null,"使用",t.createElement("code",null,"pill"),"属性使badges更圆润(更大的",t.createElement("code",null,"border-radius"),"以及水平的",t.createElement("code",null,"padding"),")."),linkTitle:"链接",linkDesc:t.createElement(t.Fragment,null,"将",t.createElement("code",null,"Badge"),"用在",t.createElement("code",null,"<a>")," 元素上，展现hover和focus状态(需要传入",t.createElement("code",null,"href"),"属性)."),varApi:"Badge的外观样式",hrefApi:"渲染成a元素， 并将href作为a元素的href属性的值",pillApi:"使badge更圆润(更大的border-radius以及水平的padding)"}},x=l.a.H3;a.default=function(){return t.createElement(v.a,{language:N},t.createElement(c.a,null,t.createElement(l.a,null,"Badge"),t.createElement("div",null,t.createElement(p.a,{id:"compDesc"})),t.createElement(x,{id:"badgeExample"},y),t.createElement(r.a,{component:t.createElement(o,null),source:'import * as React from "react";\nimport { Badge } from "reap-ui";\n\nexport default () => (\n    <>\n        <h1>Example heading<Badge variant="secondary">New</Badge></h1>\n        <h2>Example heading<Badge variant="secondary">New</Badge></h2>\n        <h3>Example heading<Badge variant="secondary">New</Badge></h3>\n        <h4>Example heading<Badge variant="secondary">New</Badge></h4>\n        <h5>Example heading<Badge variant="secondary">New</Badge></h5>\n        <h6>Example heading<Badge variant="secondary">New</Badge></h6>\n    </>\n);'},t.createElement("div",null,t.createElement(p.a,{id:"egDesc"}))),t.createElement(r.a,{component:t.createElement(u,null),source:'import * as React from "react";\nimport { Badge, Button } from "reap-ui";\n\nexport default () => (\n    <Button>\n        Notifications <Badge variant="light">4</Badge>\n        <span className="sr-only">unread messages</span>\n    </Button>\n);'},t.createElement("div",null,t.createElement(p.a,{id:"counterDesc"}))),t.createElement("div",null,t.createElement(p.a,{id:"note"})),t.createElement(x,{id:w},B),t.createElement(r.a,{className:"badge-demo",component:t.createElement(d,null),source:'import * as React from "react";\nimport { Badge } from "reap-ui";\n\nexport default () => (\n    <>\n        <Badge variant="primary">Primary</Badge>\n        <Badge variant="secondary">Secondary</Badge>\n        <Badge variant="success">Success</Badge>\n        <Badge variant="danger">Danger</Badge>\n        <Badge variant="warning">Warning</Badge>\n        <Badge variant="info">Info</Badge>\n        <Badge variant="light">Light</Badge>\n        <Badge variant="dark">Dark</Badge>\n    </>\n);'},t.createElement(p.a,{id:"varDesc"})),t.createElement(x,{id:"pillBadges"},b),t.createElement(r.a,{className:"badge-demo",component:t.createElement(s,null),source:'import * as React from "react";\nimport { Badge } from "reap-ui";\n\nexport default () => (\n    <>\n        <Badge variant="primary" pill>Primary</Badge>\n        <Badge variant="secondary" pill>Secondary</Badge>\n        <Badge variant="success" pill>Success</Badge>\n        <Badge variant="danger" pill>Danger</Badge>\n        <Badge variant="warning" pill>Warning</Badge>\n        <Badge variant="info" pill>Info</Badge>\n        <Badge variant="light" pill>Light</Badge>\n        <Badge variant="dark" pill>Dark</Badge>\n    </>\n);'},t.createElement(p.a,{id:"pillDesc"})),t.createElement(x,{id:"links"},k),t.createElement(r.a,{className:"badge-demo",component:t.createElement(m,null),source:'import * as React from "react";\nimport { Badge } from "reap-ui";\n\nexport default () => (\n    <>\n        <Badge variant="primary" href="#">Primary</Badge>\n        <Badge variant="secondary" href="#">Secondary</Badge>\n        <Badge variant="success" href="#">Success</Badge>\n        <Badge variant="danger" href="#">Danger</Badge>\n        <Badge variant="warning" href="#">Warning</Badge>\n        <Badge variant="info" href="#">Info</Badge>\n        <Badge variant="light" href="#">Light</Badge>\n        <Badge variant="dark" href="#">Dark</Badge>\n    </>\n);'},t.createElement(p.a,{id:"linkDesc"})),t.createElement(l.a,{id:"badgeApi"},"API"),t.createElement(f,null)),t.createElement(D,null))}}}]);