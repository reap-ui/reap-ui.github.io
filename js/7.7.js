(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{328:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(6),a=n.n(r),o=n(3),i=n.n(o),l=n(5),c=n.n(l),p=n(0),s=n(2);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){var t=e.tag,n=void 0===t?"h2":t,r=e.className,a=c()(e,["tag","className"]);return p.createElement(n,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({className:Object(s.b)(r,"doc-heading")},a))}m.H3=function(e){return p.createElement(m,a()({tag:"h3"},e))}},329:function(e,t,n){"use strict";var r=n(0),a=n(328),o=n(23);t.a=Object(o.b)((function(e){return{lang:e.lang}}))((function(e){var t=e.data,n=e.lang,o=e.title;return r.createElement("div",null,o&&r.createElement(a.a.H3,null,o),r.createElement("div",{className:"api-container"},r.createElement("table",{className:"table table-bordered table-striped props-table"},r.createElement("thead",null,"zh"===n?r.createElement("tr",null,r.createElement("th",null,"属性"),r.createElement("th",null,"类型"),r.createElement("th",null,"默认值"),r.createElement("th",null,"说明")):r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Type"),r.createElement("th",null,"Default"),r.createElement("th",null,"Description"))),r.createElement("tbody",null,t.map((function(e,t){return r.createElement("tr",{key:"string"==typeof e.name?e.name:e.name.toString()},r.createElement("td",null,e.name),r.createElement("td",null,e.type),r.createElement("td",{className:"default-value"},e.default||"-"),r.createElement("td",null,e.description))}))))))}))},330:function(e,t,n){"use strict";var r=n(0),a=n(13);t.a=function(e){return r.createElement(a.i,{span:!1,md:9,xl:8,className:"pb-3"},e.children)}},331:function(e,t,n){"use strict";var r=n(9),a=n.n(r),o=n(8),i=n.n(o),l=n(4),c=n.n(l),p=n(10),s=n.n(p),u=n(11),m=n.n(u),d=n(7),f=n.n(d),v=n(3),b=n.n(v),h=n(0),g=n(13),E=n(14),y=n(51);function A(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f()(e);if(t){var a=f()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return m()(this,n)}}var O=function(e){s()(n,e);var t=A(n);function n(){var e;a()(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return e=t.call.apply(t,[this].concat(o)),b()(c()(e),"timer",null),b()(c()(e),"isClick",!1),b()(c()(e),"cancel",null),b()(c()(e),"handleScroll",(function(){var t=document.querySelector(".right-nav");if(t&&"none"!==getComputedStyle(t).getPropertyValue("display")&&!e.isClick){for(var n=document.querySelectorAll(".right-nav .right-nav-link"),r=null,a=0,o=Array.from(n);a<o.length;a++){var i=o[a],l=void 0;try{l=document.querySelector(i.hash)}catch(e){continue}if(l){var c=l.getBoundingClientRect().top;if(c>=window.innerHeight/2)break;c<=150&&(r=i)}}e.removeActive(),e.activateElement(r)}})),b()(c()(e),"_handleScroll",(function(){null!==e.timer&&(clearTimeout(e.timer),e.timer=null),e.timer=setTimeout(e.handleScroll,50)})),b()(c()(e),"handleClick",(function(t){var n=t.target,r=n.hash,a=e.props,o=a.location,i=a.history;e.isClick=!0,o.hash!==r&&i.push("".concat(o.pathname).concat(r)),e.removeActive(),e.activateElement(n),e.cancel=Object(y.a)(r,(function(){return e.isClick=!1}))||null,t.preventDefault()})),e}return i()(n,[{key:"componentDidMount",value:function(){var e=this.props.location.hash;window.addEventListener("scroll",this._handleScroll),Object(y.a)(e)}},{key:"componentWillUnmount",value:function(){this.cancel&&this.cancel(),window.removeEventListener("scroll",this._handleScroll)}},{key:"removeActive",value:function(){var e=document.querySelectorAll(".right-nav .active");Array.from(e).forEach((function(e){return e.classList.remove("active")}))}},{key:"activateElement",value:function(e){if(e){var t=this.closest(e,".level-2");if(e.classList.add("active"),t){var n=t.previousElementSibling;n&&n.classList.add("active")}}}},{key:"closest",value:function(e,t){for(var n=document.body,r=e.parentNode;r&&r!==n&&!r.matches(t);)r=r.parentNode;return r===n?null:r}},{key:"handleLink",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=e.map((function(e){return h.createElement(g.s.Item,{key:e.href},h.createElement(g.s.Link,{className:"right-nav-link",href:e.href,onClick:t.handleClick},e.name),e.children&&t.handleLink(e.children,n+1))}));return h.createElement(g.s,{className:"level-".concat(n),vertical:!0},r)}},{key:"render",value:function(){return h.createElement(g.i,{span:!1,xl:2,className:"d-none d-xl-block"},h.createElement("div",{className:"right-nav"},this.handleLink(this.props.data)))}}]),n}(h.Component);t.a=Object(E.withRouter)(O)},332:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),a=n(32),o=n(2);function i(e){var t=e.component,n=e.className,i=e.source,l=e.children;return r.createElement(r.Fragment,null,l&&r.createElement("div",null,l),r.createElement("div",{className:Object(o.b)(n,"bd-example")},r.createElement("div",null,t),i&&r.createElement(a.a,{code:i})))}},333:function(e,t,n){"use strict";var r=n(0),a=n(23),o=n(328);t.a=Object(a.b)((function(e){return{lang:e.lang}}))((function(e){return r.createElement(r.Fragment,null,e.title&&r.createElement(o.a.H3,null,e.title),r.createElement("div",{className:"text-muted"},r.createElement("em",null,"zh"===e.lang?"该组件暂无属性":"No public props for this component.")))}))},334:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return c}));var r=n(0),a=n(329),o=n(333),i=n(24),l="hover | click | focus | Array<hover | click | focus>",c=[{name:"visible",type:"boolean",description:r.createElement(i.a,{id:"visibleApi"})},{name:"defaultVisible",type:"boolean",default:"false",description:r.createElement(i.a,{id:"defaultVisibleApi"})},{name:"fade",type:"boolean",default:"true",description:r.createElement(i.a,{id:"fadeApi"})},{name:"forceRender",type:"boolean",default:"false",description:r.createElement(i.a,{id:"forceRenderApi"})},{name:"offset",type:"number | number[]",default:"[0, 0]",description:r.createElement(i.a,{id:"offsetApi"})},{name:"delay",type:"number | {show?: number, hide?: number}",default:"0",description:r.createElement(i.a,{id:"delayApi"})},{name:"onShow",type:"Function",description:r.createElement(i.a,{id:"onShowApi"})},{name:"onShown",type:"Function",description:r.createElement(i.a,{id:"onShownApi"})},{name:"onHide",type:"Function",description:r.createElement(i.a,{id:"onHideApi"})},{name:"onHidden",type:"Function",description:r.createElement(i.a,{id:"onHiddenApi"})}],p=[].concat(c,[{name:"placement",type:'"top" | "bottom" | "left" | "right"',default:"bottom",description:r.createElement(i.a,{id:"placementApi"})},{name:"alignment",type:'"left" | "center" | "right"',default:"left",description:r.createElement(i.a,{id:"alignmentApi"})},{name:"overlay",type:"ReactElement",description:r.createElement(i.a,{id:"overlayApi"})}]),s=[{name:"variant",type:'"primary" |\n        "secondary" |\n        "success" |\n        "danger" |\n        "warning" |\n        "info" |\n        "dark" |\n        "light"',default:"primary",description:r.createElement(i.a,{id:"variantApi"})},{name:"size",type:'"lg" | "small"',description:r.createElement(i.a,{id:"sizeApi"})},{name:"disabled",type:"boolean",default:"false",description:r.createElement(i.a,{id:"disabledApi"})},{name:"outline",type:"boolean",default:"false",description:r.createElement(i.a,{id:"outlineApi"})},{name:"href",type:"string",description:r.createElement(i.a,{id:"hrefApi"})},{name:"split",type:"boolean",default:"false",description:r.createElement(i.a,{id:"splitApi"})},{name:"render",type:"(buttons:ReactNode[]) => ReactNode[]",description:r.createElement(i.a,{id:"renderApi"})}],u=[{name:"header",type:"string | ReactNode",description:r.createElement(i.a,{id:"headerAPi"})}],m=[{name:"tag",type:"string",default:"a",description:r.createElement(i.a,{id:"tagApi"})},{name:"href",type:"string",description:r.createElement(i.a,{id:"itemHrefApi"})},{name:"active",type:"boolean",default:"false",description:r.createElement(i.a,{id:"activeApi"})},{name:"disabled",type:"boolean",default:"false",description:r.createElement(i.a,{id:"itemDisabledApi"})}];t.c=function(){return r.createElement(r.Fragment,null,r.createElement(a.a,{title:"Dropdown",data:p}),r.createElement(a.a,{title:"Dropdown.Button",data:s}),r.createElement(a.a,{title:"Dropdown.Menu",data:u}),r.createElement(a.a,{title:"Dropdown.Item",data:m}),r.createElement(o.a,{title:"Dropdown.Divider"}))}},335:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(3),a=n.n(r),o=n(0);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c={visibleApi:"Control the visibility(controlled component)",defaultVisibleApi:"The initial visibility",fadeApi:"Enable fade effect of dropdown popup or not",forceRenderApi:o.createElement(o.Fragment,null,"If ",o.createElement("code",null,"true")," will render once mounted, otherwise will render it when ",o.createElement("code",null,"visible")," is ",o.createElement("code",null,"true")),offsetApi:"Offset of dropdown popup([horizontal, vertical])",delayApi:"A millisecond delay to show or hide the popup",onShowApi:o.createElement(o.Fragment,null,"Callback is invoked when ",o.createElement("code",null,"visible")," changes from ",o.createElement("code",null,"false")," to ",o.createElement("code",null,"true")),onShownApi:"Callback is invoked when popup has shown",onHideApi:o.createElement(o.Fragment,null,"Callback is invoked when ",o.createElement("code",null,"visible")," changes from ",o.createElement("code",null,"true")," to ",o.createElement("code",null,"false"))};t.b=l(l({compDesc:"Dropdowns are toggleable, contextual overlays for displaying lists of links and more.",singleTitle:"Single button",splitTitle:"Split button",sizeTitle:"Sizing",sizeDesc:"Button dropdowns work with buttons of all sizes, including default and split dropdown buttons.",renderTitle:"Custom render",dirTitle:"Directions",dirDesc:o.createElement(o.Fragment,null,"Trigger dropdown menus above,bottom,left or right by ",o.createElement("code",null,"placement")," prop."),alignmentTitle:"Alignment",alignmentDesc:o.createElement(o.Fragment,null,"By default, a dropdown menu is automatically positioned 100% from the top and along the left side. Change it by ",o.createElement("code",null,"alignment")," prop."),customTitle:"Customization"},c),{},{onHiddenApi:"Callback is invoked when popup has hidden",placementApi:"The dropdown popup position",alignmentApi:"Horizontal alignment of dropdown popup",overlayApi:"The dropdown popup",variantApi:"Appearance of Button",sizeApi:"Specifies the large or small button",disabledApi:"Disable the button and apply 'disabled' class",outlineApi:"Outlined button",hrefApi:"Render the button as 'a' element, styled like button",splitApi:"Split button dropdowns with virtually the same markup as single button dropdowns",see:"see",renderApi:"Customize the buttons",headerAPi:"Header of the menu",tagApi:"A custom element type",itemHrefApi:"Href attribute of 'a' tag, if tag equals 'a' will apply otherwise will ignore",activeApi:"Activate the component",itemDisabledApi:"Disable the component"})},336:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(3),a=n.n(r),o=n(0);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c={visibleApi:"控制下拉菜单是否可见(受控组件)",defaultVisibleApi:"下拉菜单是否默认可见",fadeApi:"是否允许下拉菜单的淡入淡出效果。",forceRenderApi:o.createElement(o.Fragment,null,"强制渲染，如果为",o.createElement("code",null,"true"),"将会直接渲染，否则当",o.createElement("code",null,"visible"),"为",o.createElement("code",null),"的时候渲染"),offsetApi:"下拉菜单的偏移量([水平, 垂直])",delayApi:"延迟下拉菜单的显示和隐藏（以毫秒为单位）",onShowApi:o.createElement(o.Fragment,null,"当",o.createElement("code",null,"visible"),"从",o.createElement("code",null,"false"),"变为",o.createElement("code",null,"true"),"是的回调"),onShownApi:"当下拉菜单显示出来后的回调",onHideApi:o.createElement(o.Fragment,null,"当",o.createElement("code",null,"visible"),"从",o.createElement("code",null,"true"),"变为",o.createElement("code",null,"false"),"时的回调"),onHiddenApi:"下拉菜单完全隐藏时候的回调函数"};t.b=l(l({compDesc:"弹出的下拉列表。",singleTitle:"单个按钮",splitTitle:"分开的按钮",sizeTitle:"尺寸",sizeDesc:"支持所有尺寸的按钮包括默认的和分开的按钮。",renderTitle:"自定义渲染",dirTitle:"方向",dirDesc:o.createElement(o.Fragment,null,"通过",o.createElement("code",null,"placement"),"设置下拉菜单弹出的方向（上、下、左或右）"),alignmentTitle:"排列方式",alignmentDesc:o.createElement(o.Fragment,null,"默认情况下下拉菜单的定位是相对按钮top： 100%、left与按钮左对齐。设置",o.createElement("code",null,"alignment"),"属性改变对齐方式"),customTitle:"自定义"},c),{},{placementApi:"下拉菜单弹出的方向",alignmentApi:"水平方向的排列方式",overlayApi:"弹出的下拉菜单",variantApi:"按钮的外观样式",sizeApi:"设置按钮的大小",disabledApi:"禁用按钮",outlineApi:"轮廓按钮",hrefApi:"将按钮渲染为a元素",splitApi:"按钮是否分开",see:"详见",renderApi:"自定义按钮",headerAPi:"菜单的头部",tagApi:"自定义的元素",itemHrefApi:"同a标签的href属性，如果tag传入的不是a则忽略。",activeApi:"激活菜单项",itemDisabledApi:"禁用菜单项"})},354:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(328),o=n(332),i=n(13),l=function(){return r.createElement(i.v,{header:"Popover title",content:"And here's some amazing content. It's very engaging. Right?"},r.createElement(i.e,{variant:"danger",size:"lg"},"Click to toggle popover"))},c="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",p=function(){return r.createElement(i.y,null,r.createElement(i.i,{className:"mb-3"},r.createElement(i.v,{placement:"top",content:c},r.createElement(i.e,{variant:"secondary"},"Popover on top"))),r.createElement(i.i,{className:"mb-3"},r.createElement(i.v,{content:c},r.createElement(i.e,{variant:"secondary"},"Popover on right"))),r.createElement(i.i,{className:"mb-3"},r.createElement(i.v,{placement:"bottom",content:c},r.createElement(i.e,{variant:"secondary"},"Popover on bottom"))),r.createElement(i.i,{className:"mb-3"},r.createElement(i.v,{placement:"left",content:c},r.createElement(i.e,{variant:"secondary"},"Popover on left"))))},s=n(19),u=n.n(s),m=n(329),d=n(24),f=n(334),v=[].concat(u()(f.b),[{name:"placement",type:'"top" | "bottom" | "left" | "right"',default:"top",description:r.createElement(d.a,{id:"placementApi"})},{name:"header",type:"string | ReactNode",description:r.createElement(d.a,{id:"headerApi"})},{name:"content",type:"string | ReactNode",description:r.createElement(d.a,{id:"contentApi"})},{name:"trigger",type:f.a,default:"click",description:r.createElement(d.a,{id:"triggerApi"})}]),b=function(){return r.createElement(m.a,{title:"Popover",data:v})},h=n(330),g=n(331),E=n(50),y=n(3),A=n.n(y);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){A()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){A()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D={en:w(w({compDesc:"Documentation and examples for adding Bootstrap popovers, like those found in iOS, to any element on your site.",egTitle:"Example",fourDirTitle:"Four directions",fourDirDesc:"Four options are available: top, right, bottom, and left aligned."},n(335).a),{},{placementApi:"The popover popup position",headerApi:"Header of the popover",contentApi:"Content of the popover",triggerApi:"How popover is triggered"}),zh:j(j({compDesc:"给网站添加类似iOS的气泡卡片。",egTitle:"示例",fourDirTitle:"四个方向",fourDirDesc:"可选的方向：上、右、下、左。"},n(336).a),{},{placementApi:"弹出的位置",headerApi:"气泡卡片的头部",contentApi:"气泡卡片的内容",triggerApi:"气泡卡片的触发方式"})},k="popoverExample",N=r.createElement(d.a,{id:"egTitle"}),S="popoverFourDirections",T=r.createElement(d.a,{id:"fourDirTitle"}),C="popoverApi";t.default=function(){return r.createElement(E.a,{language:D},r.createElement(h.a,null,r.createElement(a.a,null,"Popover"),r.createElement("div",null,r.createElement(d.a,{id:"compDesc"})),r.createElement(a.a.H3,{id:k},N),r.createElement(o.a,{component:r.createElement(l,null),source:'import * as React from "react"\nimport {\n    Popover, Button \n} from "reap-ui"\n\nexport default () => (\n    <Popover\n        header="Popover title"\n        content="And here\'s some amazing content. It\'s very engaging. Right?">\n        <Button variant="danger" size="lg">\n            Click to toggle popover\n        </Button>\n    </Popover>\n)'}),r.createElement(a.a.H3,{id:S},T),r.createElement(o.a,{component:r.createElement(p,null),source:'import * as React from "react"\nimport {\n    Popover, Button, Row, Col \n} from "reap-ui"\n\nconst CONTENT = "Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n\nexport default () => (\n    <Row>\n        <Col className="mb-3">\n            <Popover placement="top" content={CONTENT}>\n                <Button variant="secondary">Popover on top</Button>\n            </Popover>\n        </Col>\n        <Col className="mb-3">\n            <Popover content={CONTENT}>\n                <Button variant="secondary">Popover on right</Button>\n            </Popover>\n        </Col>\n        <Col className="mb-3">\n            <Popover placement="bottom" content={CONTENT}>\n                <Button variant="secondary">Popover on bottom</Button>\n            </Popover>\n        </Col>\n        <Col className="mb-3">\n            <Popover placement="left" content={CONTENT}>\n                <Button variant="secondary">Popover on left</Button>\n            </Popover>\n        </Col>\n    </Row>\n)'},r.createElement(d.a,{id:"fourDirDesc"})),r.createElement(a.a,{id:C},"API"),r.createElement(b,null)),r.createElement(g.a,{data:[{name:N,href:"#".concat(k)},{name:T,href:"#".concat(S)},{name:"API",href:"#".concat(C)}]}))}}}]);