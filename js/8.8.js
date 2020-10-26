(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{320:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(6),l=n.n(r),i=n(3),a=n.n(i),o=n(5),c=n.n(o),p=n(0),s=n(2);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){var t=e.tag,n=void 0===t?"h2":t,r=e.className,l=c()(e,["tag","className"]);return p.createElement(n,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({className:Object(s.b)(r,"doc-heading")},l))}m.H3=function(e){return p.createElement(m,l()({tag:"h3"},e))}},321:function(e,t,n){"use strict";var r=n(0),l=n(320),i=n(23);t.a=Object(i.b)((function(e){return{lang:e.lang}}))((function(e){var t=e.data,n=e.lang,i=e.title;return r.createElement("div",null,i&&r.createElement(l.a.H3,null,i),r.createElement("div",{className:"api-container"},r.createElement("table",{className:"table table-bordered table-striped props-table"},r.createElement("thead",null,"zh"===n?r.createElement("tr",null,r.createElement("th",null,"属性"),r.createElement("th",null,"类型"),r.createElement("th",null,"默认值"),r.createElement("th",null,"说明")):r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Type"),r.createElement("th",null,"Default"),r.createElement("th",null,"Description"))),r.createElement("tbody",null,t.map((function(e,t){return r.createElement("tr",{key:"string"==typeof e.name?e.name:e.name.toString()},r.createElement("td",null,e.name),r.createElement("td",null,e.type),r.createElement("td",{className:"default-value"},e.default||"-"),r.createElement("td",null,e.description))}))))))}))},322:function(e,t,n){"use strict";var r=n(0),l=n(13);t.a=function(e){return r.createElement(l.i,{span:!1,md:9,xl:8,className:"pb-3"},e.children)}},323:function(e,t,n){"use strict";var r=n(9),l=n.n(r),i=n(8),a=n.n(i),o=n(4),c=n.n(o),p=n(10),s=n.n(p),u=n(11),m=n.n(u),d=n(7),f=n.n(d),b=n(3),h=n.n(b),E=n(0),g=n(13),y=n(14),v=n(51);function A(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f()(e);if(t){var l=f()(this).constructor;n=Reflect.construct(r,arguments,l)}else n=r.apply(this,arguments);return m()(this,n)}}var w=function(e){s()(n,e);var t=A(n);function n(){var e;l()(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i)),h()(c()(e),"timer",null),h()(c()(e),"isClick",!1),h()(c()(e),"cancel",null),h()(c()(e),"handleScroll",(function(){var t=document.querySelector(".right-nav");if(t&&"none"!==getComputedStyle(t).getPropertyValue("display")&&!e.isClick){for(var n=document.querySelectorAll(".right-nav .right-nav-link"),r=null,l=0,i=Array.from(n);l<i.length;l++){var a=i[l],o=void 0;try{o=document.querySelector(a.hash)}catch(e){continue}if(o){var c=o.getBoundingClientRect().top;if(c>=window.innerHeight/2)break;c<=150&&(r=a)}}e.removeActive(),e.activateElement(r)}})),h()(c()(e),"_handleScroll",(function(){null!==e.timer&&(clearTimeout(e.timer),e.timer=null),e.timer=setTimeout(e.handleScroll,50)})),h()(c()(e),"handleClick",(function(t){var n=t.target,r=n.hash,l=e.props,i=l.location,a=l.history;e.isClick=!0,i.hash!==r&&a.push("".concat(i.pathname).concat(r)),e.removeActive(),e.activateElement(n),e.cancel=Object(v.a)(r,(function(){return e.isClick=!1}))||null,t.preventDefault()})),e}return a()(n,[{key:"componentDidMount",value:function(){var e=this.props.location.hash;window.addEventListener("scroll",this._handleScroll),Object(v.a)(e)}},{key:"componentWillUnmount",value:function(){this.cancel&&this.cancel(),window.removeEventListener("scroll",this._handleScroll)}},{key:"removeActive",value:function(){var e=document.querySelectorAll(".right-nav .active");Array.from(e).forEach((function(e){return e.classList.remove("active")}))}},{key:"activateElement",value:function(e){if(e){var t=this.closest(e,".level-2");if(e.classList.add("active"),t){var n=t.previousElementSibling;n&&n.classList.add("active")}}}},{key:"closest",value:function(e,t){for(var n=document.body,r=e.parentNode;r&&r!==n&&!r.matches(t);)r=r.parentNode;return r===n?null:r}},{key:"handleLink",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=e.map((function(e){return E.createElement(g.s.Item,{key:e.href},E.createElement(g.s.Link,{className:"right-nav-link",href:e.href,onClick:t.handleClick},e.name),e.children&&t.handleLink(e.children,n+1))}));return E.createElement(g.s,{className:"level-".concat(n),vertical:!0},r)}},{key:"render",value:function(){return E.createElement(g.i,{span:!1,xl:2,className:"d-none d-xl-block"},E.createElement("div",{className:"right-nav"},this.handleLink(this.props.data)))}}]),n}(E.Component);t.a=Object(y.withRouter)(w)},324:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),l=n(32),i=n(2);function a(e){var t=e.component,n=e.className,a=e.source,o=e.children;return r.createElement(r.Fragment,null,o&&r.createElement("div",null,o),r.createElement("div",{className:Object(i.b)(n,"bd-example")},r.createElement("div",null,t),a&&r.createElement(l.a,{code:a})))}},325:function(e,t,n){"use strict";var r=n(0),l=n(23),i=n(320);t.a=Object(l.b)((function(e){return{lang:e.lang}}))((function(e){return r.createElement(r.Fragment,null,e.title&&r.createElement(i.a.H3,null,e.title),r.createElement("div",{className:"text-muted"},r.createElement("em",null,"zh"===e.lang?"该组件暂无属性":"No public props for this component.")))}))},326:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));var r=n(0),l=n(321),i=n(325),a=n(24),o="hover | click | focus | Array<hover | click | focus>",c=[{name:"visible",type:"boolean",description:r.createElement(a.a,{id:"visibleApi"})},{name:"defaultVisible",type:"boolean",default:"false",description:r.createElement(a.a,{id:"defaultVisibleApi"})},{name:"fade",type:"boolean",default:"true",description:r.createElement(a.a,{id:"fadeApi"})},{name:"forceRender",type:"boolean",default:"false",description:r.createElement(a.a,{id:"forceRenderApi"})},{name:"offset",type:"number | number[]",default:"[0, 0]",description:r.createElement(a.a,{id:"offsetApi"})},{name:"delay",type:"number | {show?: number, hide?: number}",default:"0",description:r.createElement(a.a,{id:"delayApi"})},{name:"onShow",type:"Function",description:r.createElement(a.a,{id:"onShowApi"})},{name:"onShown",type:"Function",description:r.createElement(a.a,{id:"onShownApi"})},{name:"onHide",type:"Function",description:r.createElement(a.a,{id:"onHideApi"})},{name:"onHidden",type:"Function",description:r.createElement(a.a,{id:"onHiddenApi"})}],p=[].concat(c,[{name:"placement",type:'"top" | "bottom" | "left" | "right"',default:"bottom",description:r.createElement(a.a,{id:"placementApi"})},{name:"alignment",type:'"left" | "center" | "right"',default:"left",description:r.createElement(a.a,{id:"alignmentApi"})},{name:"overlay",type:"ReactElement",description:r.createElement(a.a,{id:"overlayApi"})}]),s=[{name:"variant",type:'"primary" |\n        "secondary" |\n        "success" |\n        "danger" |\n        "warning" |\n        "info" |\n        "dark" |\n        "light"',default:"primary",description:r.createElement(a.a,{id:"variantApi"})},{name:"size",type:'"lg" | "small"',description:r.createElement(a.a,{id:"sizeApi"})},{name:"disabled",type:"boolean",default:"false",description:r.createElement(a.a,{id:"disabledApi"})},{name:"outline",type:"boolean",default:"false",description:r.createElement(a.a,{id:"outlineApi"})},{name:"href",type:"string",description:r.createElement(a.a,{id:"hrefApi"})},{name:"split",type:"boolean",default:"false",description:r.createElement(a.a,{id:"splitApi"})},{name:"render",type:"(buttons:ReactNode[]) => ReactNode[]",description:r.createElement(a.a,{id:"renderApi"})}],u=[{name:"header",type:"string | ReactNode",description:r.createElement(a.a,{id:"headerAPi"})}],m=[{name:"tag",type:"string",default:"a",description:r.createElement(a.a,{id:"tagApi"})},{name:"href",type:"string",description:r.createElement(a.a,{id:"itemHrefApi"})},{name:"active",type:"boolean",default:"false",description:r.createElement(a.a,{id:"activeApi"})},{name:"disabled",type:"boolean",default:"false",description:r.createElement(a.a,{id:"itemDisabledApi"})}];t.c=function(){return r.createElement(r.Fragment,null,r.createElement(l.a,{title:"Dropdown",data:p}),r.createElement(l.a,{title:"Dropdown.Button",data:s}),r.createElement(l.a,{title:"Dropdown.Menu",data:u}),r.createElement(l.a,{title:"Dropdown.Item",data:m}),r.createElement(i.a,{title:"Dropdown.Divider"}))}},327:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(3),l=n.n(r),i=n(0);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c={visibleApi:"Control the visibility(controlled component)",defaultVisibleApi:"The initial visibility",fadeApi:"Enable fade effect of dropdown popup or not",forceRenderApi:i.createElement(i.Fragment,null,"If ",i.createElement("code",null,"true")," will render once mounted, otherwise will render it when ",i.createElement("code",null,"visible")," is ",i.createElement("code",null,"true")),offsetApi:"Offset of dropdown popup([horizontal, vertical])",delayApi:"A millisecond delay to show or hide the popup",onShowApi:i.createElement(i.Fragment,null,"Callback is invoked when ",i.createElement("code",null,"visible")," changes from ",i.createElement("code",null,"false")," to ",i.createElement("code",null,"true")),onShownApi:"Callback is invoked when popup has shown",onHideApi:i.createElement(i.Fragment,null,"Callback is invoked when ",i.createElement("code",null,"visible")," changes from ",i.createElement("code",null,"true")," to ",i.createElement("code",null,"false"))};t.b=o(o({compDesc:"Dropdowns are toggleable, contextual overlays for displaying lists of links and more.",singleTitle:"Single button",splitTitle:"Split button",sizeTitle:"Sizing",sizeDesc:"Button dropdowns work with buttons of all sizes, including default and split dropdown buttons.",renderTitle:"Custom render",dirTitle:"Directions",dirDesc:i.createElement(i.Fragment,null,"Trigger dropdown menus above,bottom,left or right by ",i.createElement("code",null,"placement")," prop."),alignmentTitle:"Alignment",alignmentDesc:i.createElement(i.Fragment,null,"By default, a dropdown menu is automatically positioned 100% from the top and along the left side. Change it by ",i.createElement("code",null,"alignment")," prop."),customTitle:"Customization"},c),{},{onHiddenApi:"Callback is invoked when popup has hidden",placementApi:"The dropdown popup position",alignmentApi:"Horizontal alignment of dropdown popup",overlayApi:"The dropdown popup",variantApi:"Appearance of Button",sizeApi:"Specifies the large or small button",disabledApi:"Disable the button and apply 'disabled' class",outlineApi:"Outlined button",hrefApi:"Render the button as 'a' element, styled like button",splitApi:"Split button dropdowns with virtually the same markup as single button dropdowns",see:"see",renderApi:"Customize the buttons",headerAPi:"Header of the menu",tagApi:"A custom element type",itemHrefApi:"Href attribute of 'a' tag, if tag equals 'a' will apply otherwise will ignore",activeApi:"Activate the component",itemDisabledApi:"Disable the component"})},328:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(3),l=n.n(r),i=n(0);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c={visibleApi:"控制下拉菜单是否可见(受控组件)",defaultVisibleApi:"下拉菜单是否默认可见",fadeApi:"是否允许下拉菜单的淡入淡出效果。",forceRenderApi:i.createElement(i.Fragment,null,"强制渲染，如果为",i.createElement("code",null,"true"),"将会直接渲染，否则当",i.createElement("code",null,"visible"),"为",i.createElement("code",null),"的时候渲染"),offsetApi:"下拉菜单的偏移量([水平, 垂直])",delayApi:"延迟下拉菜单的显示和隐藏（以毫秒为单位）",onShowApi:i.createElement(i.Fragment,null,"当",i.createElement("code",null,"visible"),"从",i.createElement("code",null,"false"),"变为",i.createElement("code",null,"true"),"是的回调"),onShownApi:"当下拉菜单显示出来后的回调",onHideApi:i.createElement(i.Fragment,null,"当",i.createElement("code",null,"visible"),"从",i.createElement("code",null,"true"),"变为",i.createElement("code",null,"false"),"时的回调"),onHiddenApi:"下拉菜单完全隐藏时候的回调函数"};t.b=o(o({compDesc:"弹出的下拉列表。",singleTitle:"单个按钮",splitTitle:"分开的按钮",sizeTitle:"尺寸",sizeDesc:"支持所有尺寸的按钮包括默认的和分开的按钮。",renderTitle:"自定义渲染",dirTitle:"方向",dirDesc:i.createElement(i.Fragment,null,"通过",i.createElement("code",null,"placement"),"设置下拉菜单弹出的方向（上、下、左或右）"),alignmentTitle:"排列方式",alignmentDesc:i.createElement(i.Fragment,null,"默认情况下下拉菜单的定位是相对按钮top： 100%、left与按钮左对齐。设置",i.createElement("code",null,"alignment"),"属性改变对齐方式"),customTitle:"自定义"},c),{},{placementApi:"下拉菜单弹出的方向",alignmentApi:"水平方向的排列方式",overlayApi:"弹出的下拉菜单",variantApi:"按钮的外观样式",sizeApi:"设置按钮的大小",disabledApi:"禁用按钮",outlineApi:"轮廓按钮",hrefApi:"将按钮渲染为a元素",splitApi:"按钮是否分开",see:"详见",renderApi:"自定义按钮",headerAPi:"菜单的头部",tagApi:"自定义的元素",itemHrefApi:"同a标签的href属性，如果tag传入的不是a则忽略。",activeApi:"激活菜单项",itemDisabledApi:"禁用菜单项"})},347:function(e,t,n){"use strict";n.r(t);var r=n(0),l=n(320),i=n(324),a=n(13),o=function(){return r.createElement(a.y,null,r.createElement(a.i,{className:"mb-3"},r.createElement(a.D,{title:"Tooltip on top"},r.createElement(a.e,{variant:"secondary"},"Tooltip on top"))),r.createElement(a.i,null,r.createElement(a.D,{title:"Tooltip on right",placement:"right"},r.createElement(a.e,{variant:"secondary"},"Tooltip on right"))),r.createElement(a.i,{className:"mb-3"},r.createElement(a.D,{title:"Tooltip on bottom",placement:"bottom"},r.createElement(a.e,{variant:"secondary"},"Tooltip on bottom"))),r.createElement(a.i,{className:"mb-3"},r.createElement(a.D,{title:"Tooltip on left",placement:"left"},r.createElement(a.e,{variant:"secondary"},"Tooltip on left"))))},c=r.createElement(r.Fragment,null,r.createElement("em",null,"Tooltip")," ",r.createElement("u",null,"with")," ",r.createElement("b",null,"HTML")),p=function(){return r.createElement(a.D,{title:c},r.createElement(a.e,{variant:"secondary"},"Tooltip with HTML"))},s=n(19),u=n.n(s),m=n(321),d=n(24),f=n(326),b=[].concat(u()(f.b),[{name:"placement",type:'"top" | "bottom" | "left" | "right"',default:"top",description:r.createElement(d.a,{id:"placementApi"})},{name:"title",type:"string | ReactNode",description:r.createElement(d.a,{id:"titleApi"})},{name:"trigger",type:f.a,default:"hover",description:r.createElement(d.a,{id:"triggerApi"})}]),h=function(){return r.createElement(m.a,{title:"Tooltip",data:b})},E=n(322),g=n(323),y=n(50),v=n(3),A=n.n(v);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){A()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){A()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D={en:O(O({compDesc:"Documentation and examples for adding custom Bootstrap tooltips with CSS and JavaScript using CSS3 for animations.",egTitle:"Examples",egDesc:"Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left.",htmlTitle:"With custom HTML"},n(327).a),{},{placementApi:"The tooltip popup position",titleApi:"The text shown in the tooltip",triggerApi:"How tooltip is triggered"}),zh:j(j({compDesc:"使用CSS和js创建的工具提示。",egTitle:"示例",egDesc:"鼠标悬浮在下面四个方向的按钮上，查看效果：上、右、下、左。",htmlTitle:"自定义HTML"},n(328).a),{},{placementApi:"工具提示的方向",titleApi:"工具提示的文本内容",triggerApi:"工具提示的触发方式"})},P="tooltipExamples",k=r.createElement(d.a,{id:"egTitle"}),S="tooltipWithCustomHTML",C=r.createElement(d.a,{id:"htmlTitle"}),H="tooltipApi";t.default=function(){return r.createElement(y.a,{language:D},r.createElement(E.a,null,r.createElement(l.a,null,"Tooltip"),r.createElement("div",null,r.createElement(d.a,{id:"compDesc"})),r.createElement(l.a.H3,{id:P},k),r.createElement(i.a,{component:r.createElement(o,null),source:'import * as React from "react"\nimport {\n    Tooltip, Button, Row, Col \n} from "reap-ui"\n\nexport default () => (\n    <Row>\n        <Col className="mb-3">\n            <Tooltip title={"Tooltip on top"}>\n                <Button variant="secondary">Tooltip on top</Button>\n            </Tooltip>\n        </Col>\n        <Col>\n            <Tooltip title="Tooltip on right" placement="right">\n                <Button variant="secondary">Tooltip on right</Button>\n            </Tooltip>\n        </Col>\n        <Col className="mb-3">\n            <Tooltip title="Tooltip on bottom" placement="bottom">\n                <Button variant="secondary">Tooltip on bottom</Button>\n            </Tooltip>\n        </Col>\n        <Col className="mb-3">\n            <Tooltip title="Tooltip on left" placement="left">\n                <Button variant="secondary">Tooltip on left</Button>\n            </Tooltip>\n        </Col>\n    </Row>\n)'},r.createElement(d.a,{id:"egDesc"})),r.createElement(l.a.H3,{id:S},C),r.createElement(i.a,{component:r.createElement(p,null),source:'import * as React from "react"\nimport {\n    Tooltip, Button \n} from "reap-ui"\n\nconst text = (\n    <>\n        <em>Tooltip</em>\n        &nbsp;<u>with</u>&nbsp;\n        <b>HTML</b>\n    </>\n)\n\nexport default () => (\n    <Tooltip title={text}>\n        <Button variant="secondary">Tooltip with HTML</Button>\n    </Tooltip>\n)'}),r.createElement(l.a,{id:H},"API"),r.createElement(h,null)),r.createElement(g.a,{data:[{name:k,href:"#".concat(P)},{name:C,href:"#".concat(S)},{name:"API",href:"#".concat(H)}]}))}}}]);