(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{304:function(e,t,l){"use strict";l.d(t,"a",(function(){return m}));var n=l(6),a=l.n(n),r=l(3),i=l.n(r),c=l(5),o=l.n(c),s=l(0),d=l(2);function u(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function m(e){var t=e.tag,l=void 0===t?"h2":t,n=e.className,a=o()(e,["tag","className"]);return s.createElement(l,function(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?u(Object(l),!0).forEach((function(t){i()(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):u(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}({className:Object(d.b)(n,"doc-heading")},a))}m.H3=function(e){return s.createElement(m,a()({tag:"h3"},e))}},305:function(e,t,l){"use strict";var n=l(0),a=l(304),r=l(25);t.a=Object(r.b)((function(e){return{lang:e.lang}}))((function(e){var t=e.data,l=e.lang,r=e.title;return n.createElement("div",null,r&&n.createElement(a.a.H3,null,r),n.createElement("div",{className:"api-container"},n.createElement("table",{className:"table table-bordered table-striped props-table"},n.createElement("thead",null,"zh"===l?n.createElement("tr",null,n.createElement("th",null,"属性"),n.createElement("th",null,"类型"),n.createElement("th",null,"默认值"),n.createElement("th",null,"说明")):n.createElement("tr",null,n.createElement("th",null,"Name"),n.createElement("th",null,"Type"),n.createElement("th",null,"Default"),n.createElement("th",null,"Description"))),n.createElement("tbody",null,t.map((function(e,t){return n.createElement("tr",{key:"string"==typeof e.name?e.name:e.name.toString()},n.createElement("td",null,e.name),n.createElement("td",null,e.type),n.createElement("td",{className:"default-value"},e.default||"-"),n.createElement("td",null,e.description))}))))))}))},306:function(e,t,l){"use strict";var n=l(0),a=l(12);t.a=function(e){return n.createElement(a.i,{span:!1,md:9,xl:8,className:"pb-3"},e.children)}},307:function(e,t,l){"use strict";var n=l(9),a=l.n(n),r=l(8),i=l.n(r),c=l(4),o=l.n(c),s=l(10),d=l.n(s),u=l(11),m=l.n(u),h=l(7),p=l.n(h),f=l(3),v=l.n(f),g=l(0),E=l(12),b=l(14),y=l(52);function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var l,n=p()(e);if(t){var a=p()(this).constructor;l=Reflect.construct(n,arguments,a)}else l=n.apply(this,arguments);return m()(this,l)}}var A=function(e){d()(l,e);var t=w(l);function l(){var e;a()(this,l);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e=t.call.apply(t,[this].concat(r)),v()(o()(e),"timer",null),v()(o()(e),"isClick",!1),v()(o()(e),"cancel",null),v()(o()(e),"handleScroll",(function(){var t=document.querySelector(".right-nav");if(t&&"none"!==getComputedStyle(t).getPropertyValue("display")&&!e.isClick){for(var l=null,n=0,a=Array.from(document.querySelectorAll(".right-nav .right-nav-link"));n<a.length;n++){var r=a[n],i=void 0;try{i=document.querySelector(r.hash)}catch(e){}if(i){var c=i.getBoundingClientRect().top;if(c>=window.innerHeight/2)break;c<=150&&(l=r)}}e.removeActive(),e.activateElement(l)}})),v()(o()(e),"_handleScroll",(function(){null!==e.timer&&(clearTimeout(e.timer),e.timer=null),e.timer=setTimeout(e.handleScroll,50)})),v()(o()(e),"handleClick",(function(t){var l=t.target,n=l.hash,a=e.props,r=a.location,i=a.history;e.isClick=!0,r.hash!==n&&i.push("".concat(r.pathname).concat(n)),e.removeActive(),e.activateElement(l),e.cancel=Object(y.a)(n,(function(){return e.isClick=!1}))||null,t.preventDefault()})),e}return i()(l,[{key:"componentDidMount",value:function(){var e=this.props.location.hash;window.addEventListener("scroll",this._handleScroll),Object(y.a)(e)}},{key:"componentWillUnmount",value:function(){this.cancel&&this.cancel(),window.removeEventListener("scroll",this._handleScroll)}},{key:"removeActive",value:function(){var e=document.querySelectorAll(".right-nav .active");Array.from(e).forEach((function(e){return e.classList.remove("active")}))}},{key:"activateElement",value:function(e){if(e){var t=this.closest(e,".level-2");if(e.classList.add("active"),t){var l=t.previousElementSibling;l&&l.classList.add("active")}}}},{key:"closest",value:function(e,t){for(var l=document.body,n=e.parentNode;n&&n!==l&&!n.matches(t);)n=n.parentNode;return n===l?null:n}},{key:"handleLink",value:function(e){var t=this,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=e.map((function(e){return g.createElement(E.s.Item,{key:e.href},g.createElement(E.s.Link,{className:"right-nav-link",href:e.href,onClick:t.handleClick},e.name),e.children&&t.handleLink(e.children,l+1))}));return g.createElement(E.s,{className:"level-".concat(l),vertical:!0},n)}},{key:"render",value:function(){return g.createElement(E.i,{span:!1,xl:2,className:"d-none d-xl-block right-nav"},this.handleLink(this.props.data))}}]),l}(g.Component);t.a=Object(b.i)(A)},308:function(e,t,l){"use strict";l.d(t,"a",(function(){return i}));var n=l(0),a=l(33),r=l(2);function i(e){var t=e.component,l=e.className,i=e.source,c=e.children;return n.createElement(n.Fragment,null,c&&n.createElement("div",null,c),n.createElement("div",{className:Object(r.b)(l,"bd-example")},n.createElement("div",null,t),i&&n.createElement(a.a,{code:i})))}},309:function(e,t,l){"use strict";var n=l(0),a=l(25),r=l(304);t.a=Object(a.b)((function(e){return{lang:e.lang}}))((function(e){return n.createElement(n.Fragment,null,e.title&&n.createElement(r.a.H3,null,e.title),n.createElement("div",{className:"text-muted"},n.createElement("em",null,"zh"===e.lang?"该组件暂无属性":"No public props for this component.")))}))},333:function(e,t,l){"use strict";l.r(t);var n=l(0),a=l(12),r=function(){return n.createElement(a.g,null,n.createElement(a.g.Item,null,n.createElement("svg",{className:"bd-placeholder-img bd-placeholder-img-lg d-block w-100",width:"800",height:"400",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img","aria-label":"Placeholder: First slide"},n.createElement("title",null,"Placeholder"),n.createElement("rect",{width:"100%",height:"100%",fill:"#777"}),n.createElement("text",{x:"50%",y:"50%",fill:"#555",dy:".3em"},"First slide"))),n.createElement(a.g.Item,null,n.createElement("svg",{className:"bd-placeholder-img bd-placeholder-img-lg d-block w-100",width:"800",height:"400",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img","aria-label":"Placeholder: Second slide"},n.createElement("title",null,"Placeholder"),n.createElement("rect",{width:"100%",height:"100%",fill:"#666"}),n.createElement("text",{x:"50%",y:"50%",fill:"#444",dy:".3em"},"Second slide"))),n.createElement(a.g.Item,null,n.createElement("svg",{className:"bd-placeholder-img bd-placeholder-img-lg d-block w-100",width:"800",height:"400",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img","aria-label":"Placeholder: Third slide"},n.createElement("title",null,"Placeholder"),n.createElement("rect",{width:"100%",height:"100%",fill:"#555"}),n.createElement("text",{x:"50%",y:"50%",fill:"#333",dy:".3em"},"Third slide"))))},i=l(304),c=l(308),o=l(305),s=l(309),d=l(26),u=[{name:"animation",type:'"slide" | "fade"',default:"slide",description:n.createElement(d.a,{id:"animationApi"})},{name:"controls",type:"boolean",default:"true",description:n.createElement(d.a,{id:"controlsApi"})},{name:"indicators",type:"boolean",default:"true",description:n.createElement(d.a,{id:"indicatorsApi"})},{name:"defaultActiveIndex",type:"number",default:"0",description:n.createElement(d.a,{id:"defaultIndexApi"})},{name:"activeIndex",type:"number",default:"0",description:n.createElement(d.a,{id:"activeIndexApi"})},{name:"interval",type:"number",default:"5000",description:n.createElement(d.a,{id:"intervalApi"})},{name:"pauseOnHover",type:"boolean",default:"true",description:n.createElement(d.a,{id:"pauseOnHoverApi"})},{name:"touch",type:"boolean",default:"true",description:n.createElement(d.a,{id:"touchApi"})},{name:"onSlide",type:"Function",description:n.createElement(d.a,{id:"onSlideApi"})},{name:"onSlid",type:"Function",description:n.createElement(d.a,{id:"onSlidApi"})}],m=function(){return n.createElement(n.Fragment,null,n.createElement(o.a,{title:"Carousel",data:u}),n.createElement(s.a,{title:"Carousel.Item"}))},h=l(51),p=l(306),f=l(307),v={compDesc:"A slideshow component for cycling through elements—images or slides of text—like a carousel.",egTitle:"Example",egDesc:n.createElement(n.Fragment,null,"Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content. While carousels support previous/next controls and indicators, they’re not explicitly required. Add and customize as you see fit(Note the presence of the ",n.createElement("code",null,".d-block")," and ",n.createElement("code",null,".w-100")," on carousel images to prevent browser default image alignment.)."),animationApi:"Slide effect",controlsApi:"Show previous and next arrows for changing the active slide",indicatorsApi:"Show slide position indicators",defaultIndexApi:"The default index of active slide",activeIndexApi:"The index of active slide",intervalApi:"The interval(millisecond) for changing the active slide.",pauseOnHoverApi:"Pause when mouse hovers the slide",touchApi:"Support left/right swipe interactions on touchscreen devices or not",onSlideApi:"Callback when the slide started",onSlidApi:"Callback when the carousel has completed its slide transition"},g={zh:{compDesc:"一个幻灯片组件，可展示图像、文本等内容。",egTitle:"示例",egDesc:n.createElement(n.Fragment,null,"Carousel不会自动规范化尺寸。所以你可能需要自定义样式来设置合适的尺寸。Carousel支持控制上一张/下一张，以及指示器，可根据需要设置。(注：使用",n.createElement("code",null,".d-block"),"和",n.createElement("code",null,".w-100"),"调整浏览器默认的排列方式)"),animationApi:"幻灯片切换时候的动画效果",controlsApi:"是否显示上一张/下一张按钮",indicatorsApi:"是否显示指示器",defaultIndexApi:"默认显示的幻灯片索引",activeIndexApi:"当前现实的幻灯片索引",intervalApi:"幻灯片之间切换的时间间隔(毫秒)",pauseOnHoverApi:"当鼠标悬停在幻灯片上时暂停",touchApi:"是否支持触屏左滑/右滑",onSlideApi:"幻灯片开始切换是的回调函数",onSlidApi:"幻灯片切换完成后的回调函数"},en:v},E="carouseExample",b=n.createElement(d.a,{id:"egTitle"});t.default=function(){return n.createElement(h.a,{language:g},n.createElement(p.a,null,n.createElement(i.a,null,"Carousel"),n.createElement("div",null,n.createElement(d.a,{id:"compDesc"})),n.createElement(i.a.H3,{id:E},b),n.createElement(c.a,{component:n.createElement(r,null),source:'import * as React from "react";\nimport { Carousel } from "reap-ui";\n\nexport default () => (\n    <Carousel>\n        <Carousel.Item>\n            <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"\n                xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"\n                aria-label="Placeholder: First slide"><title>Placeholder</title>\n                <rect width="100%" height="100%" fill="#777"></rect>\n                <text x="50%" y="50%" fill="#555" dy=".3em">First slide</text>\n            </svg>\n        </Carousel.Item>\n        <Carousel.Item>\n            <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"\n                xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"\n                aria-label="Placeholder: Second slide"><title>Placeholder</title>\n                <rect width="100%" height="100%" fill="#666"></rect>\n                <text x="50%" y="50%" fill="#444" dy=".3em">Second slide</text>\n            </svg>\n        </Carousel.Item>\n        <Carousel.Item>\n            <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"\n                xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"\n                aria-label="Placeholder: Third slide"><title>Placeholder</title>\n                <rect width="100%" height="100%" fill="#555"></rect>\n                <text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text>\n            </svg>\n        </Carousel.Item>\n    </Carousel>\n);'},n.createElement(d.a,{id:"egDesc"})),n.createElement(i.a,{id:"carouselApiId"},"API"),n.createElement(m,null)),n.createElement(f.a,{data:[{name:b,href:"#".concat(E)},{name:"API",href:"#".concat("carouselApiId")}]}))}}}]);