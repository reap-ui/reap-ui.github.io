(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{304:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var i=n(6),a=n.n(i),l=n(3),r=n.n(l),c=n(5),u=n.n(c),m=n(0),o=n(2);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function d(e){var t=e.tag,n=void 0===t?"h2":t,i=e.className,a=u()(e,["tag","className"]);return m.createElement(n,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({className:Object(o.b)(i,"doc-heading")},a))}d.H3=function(e){return m.createElement(d,a()({tag:"h3"},e))}},305:function(e,t,n){"use strict";var i=n(0),a=n(304),l=n(25);t.a=Object(l.b)((function(e){return{lang:e.lang}}))((function(e){var t=e.data,n=e.lang,l=e.title;return i.createElement("div",null,l&&i.createElement(a.a.H3,null,l),i.createElement("div",{className:"api-container"},i.createElement("table",{className:"table table-bordered table-striped props-table"},i.createElement("thead",null,"zh"===n?i.createElement("tr",null,i.createElement("th",null,"属性"),i.createElement("th",null,"类型"),i.createElement("th",null,"默认值"),i.createElement("th",null,"说明")):i.createElement("tr",null,i.createElement("th",null,"Name"),i.createElement("th",null,"Type"),i.createElement("th",null,"Default"),i.createElement("th",null,"Description"))),i.createElement("tbody",null,t.map((function(e,t){return i.createElement("tr",{key:"string"==typeof e.name?e.name:e.name.toString()},i.createElement("td",null,e.name),i.createElement("td",null,e.type),i.createElement("td",{className:"default-value"},e.default||"-"),i.createElement("td",null,e.description))}))))))}))},306:function(e,t,n){"use strict";var i=n(0),a=n(13);t.a=function(e){return i.createElement(a.i,{span:!1,md:9,xl:8,className:"pb-3"},e.children)}},307:function(e,t,n){"use strict";var i=n(9),a=n.n(i),l=n(8),r=n.n(l),c=n(4),u=n.n(c),m=n(10),o=n.n(m),s=n(11),d=n.n(s),g=n(7),p=n.n(g),v=n(3),f=n.n(v),h=n(0),b=n(13),E=n(14),y=n(52);function A(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=p()(e);if(t){var a=p()(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return d()(this,n)}}var N=function(e){o()(n,e);var t=A(n);function n(){var e;a()(this,n);for(var i=arguments.length,l=new Array(i),r=0;r<i;r++)l[r]=arguments[r];return e=t.call.apply(t,[this].concat(l)),f()(u()(e),"timer",null),f()(u()(e),"isClick",!1),f()(u()(e),"cancel",null),f()(u()(e),"handleScroll",(function(){var t=document.querySelector(".right-nav");if(t&&"none"!==getComputedStyle(t).getPropertyValue("display")&&!e.isClick){for(var n=null,i=0,a=Array.from(document.querySelectorAll(".right-nav .right-nav-link"));i<a.length;i++){var l=a[i],r=void 0;try{r=document.querySelector(l.hash)}catch(e){}if(r){var c=r.getBoundingClientRect().top;if(c>=window.innerHeight/2)break;c<=150&&(n=l)}}e.removeActive(),e.activateElement(n)}})),f()(u()(e),"_handleScroll",(function(){null!==e.timer&&(clearTimeout(e.timer),e.timer=null),e.timer=setTimeout(e.handleScroll,50)})),f()(u()(e),"handleClick",(function(t){var n=t.target,i=n.hash,a=e.props,l=a.location,r=a.history;e.isClick=!0,l.hash!==i&&r.push("".concat(l.pathname).concat(i)),e.removeActive(),e.activateElement(n),e.cancel=Object(y.a)(i,(function(){return e.isClick=!1}))||null,t.preventDefault()})),e}return r()(n,[{key:"componentDidMount",value:function(){var e=this.props.location.hash;window.addEventListener("scroll",this._handleScroll),Object(y.a)(e)}},{key:"componentWillUnmount",value:function(){this.cancel&&this.cancel(),window.removeEventListener("scroll",this._handleScroll)}},{key:"removeActive",value:function(){var e=document.querySelectorAll(".right-nav .active");Array.from(e).forEach((function(e){return e.classList.remove("active")}))}},{key:"activateElement",value:function(e){if(e){var t=this.closest(e,".level-2");if(e.classList.add("active"),t){var n=t.previousElementSibling;n&&n.classList.add("active")}}}},{key:"closest",value:function(e,t){for(var n=document.body,i=e.parentNode;i&&i!==n&&!i.matches(t);)i=i.parentNode;return i===n?null:i}},{key:"handleLink",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=e.map((function(e){return h.createElement(b.s.Item,{key:e.href},h.createElement(b.s.Link,{className:"right-nav-link",href:e.href,onClick:t.handleClick},e.name),e.children&&t.handleLink(e.children,n+1))}));return h.createElement(b.s,{className:"level-".concat(n),vertical:!0},i)}},{key:"render",value:function(){return h.createElement(b.i,{span:!1,xl:2,className:"d-none d-xl-block right-nav"},this.handleLink(this.props.data))}}]),n}(h.Component);t.a=Object(E.i)(N)},308:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(0),a=n(33),l=n(2);function r(e){var t=e.component,n=e.className,r=e.source,c=e.children;return i.createElement(i.Fragment,null,c&&i.createElement("div",null,c),i.createElement("div",{className:Object(l.b)(n,"bd-example")},i.createElement("div",null,t),r&&i.createElement(a.a,{code:r})))}},325:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(304),l=n(308),r=n(13),c="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgc2xpY2UiIGZvY3VzYWJsZT0iZmFsc2UiIHN0eWxlPSJ0ZXh0LWFuY2hvcjogbWlkZGxlOyI+PHRpdGxlPlBsYWNlaG9sZGVyPC90aXRsZT48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjODY4ZTk2Ij48L3JlY3Q+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZpbGw9IiNkZWUyZTYiIGR5PSIuM2VtIj42NHg2NDwvdGV4dD48L3N2Zz4=",u=function(){return i.createElement(r.q,{title:"Media heading",img:c},"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.")},m=i.createElement("svg",{width:"64",height:"64",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",style:{textAnchor:"middle"}},i.createElement("title",null,"Placeholder"),i.createElement("rect",{width:"100%",height:"100%",fill:"#868e96"}),i.createElement("text",{x:"50%",y:"50%",fill:"#dee2e6",dy:".3em"},"64x64")),o=function(){return i.createElement(r.q,{title:"Media heading",img:m},"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",i.createElement(r.q,{title:"Media heading",img:m,className:"mt-3"},"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."))},s="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\nDonec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",d=function(){return i.createElement(i.Fragment,null,i.createElement(r.q,{img:c,imgBorder:"rounded",title:"Top-aligned media"},i.createElement("p",null,s)),i.createElement(r.q,{img:c,imgBorder:"rounded",alignment:"middle",title:"Center-aligned media"},i.createElement("p",null,s)),i.createElement(r.q,{img:c,imgBorder:"rounded",alignment:"bottom",title:"Bottom-aligned media"},i.createElement("p",{className:"mb-0"},s)))},g=n(305),p=n(26),v=[{name:"title",type:"string | ReactNode",description:i.createElement(p.a,{id:"titleApi"})},{name:"img",type:"string | ReactNode",description:i.createElement(p.a,{id:"imgApi"})},{name:"imgAlt",type:"string",description:i.createElement(p.a,{id:"imgAltApi"})},{name:"imgTitle",type:"string",description:i.createElement(p.a,{id:"imgTitleApi"})},{name:"imgSize",type:"number",default:"64",description:i.createElement(p.a,{id:"imgSizeApi"})},{name:"imgBorder",type:'"rounded" | "circle"',description:i.createElement(p.a,{id:"imgBorderApi"})},{name:"imgPosition",type:'"left" | "right"',description:i.createElement(p.a,{id:"imgPosApi"})},{name:"alignment",type:'"top" | "middle" | "bottom"',description:i.createElement(p.a,{id:"alignmentApi"})}],f=function(){return i.createElement(g.a,{title:"Media",data:v})},h=n(306),b=n(51),E={en:{compDesc:"Documentation and examples for Bootstrap’s media object to construct highly repetitive components like blog comments, tweets, and the like. ",egTitle:"Example",nestingTitle:"Nesting",nestingDesc:"Media objects can be infinitely nested, though we suggest you stop at some point.",alignmentTitle:"Alignment",alignmentDesc:"Media in a media object can be aligned  to the top (default), middle, or bottom of your content.",titleApi:"Title of the media",imgApi:"Image of the media",imgAltApi:"Alt attribute for the underlying img element",imgTitleApi:"Title attribute for the underlying img element",imgSizeApi:"Size of the image",imgBorderApi:"Rounded or circle border radius of the image",imgPosApi:"Place the image on the left or right",alignmentApi:"Vertical alignment of the image"},zh:{compDesc:"媒体对象可以用来创建高度重复的内容如评论、推文或者相似的内容",egTitle:"示例",nestingTitle:"嵌套",nestingDesc:"媒体对象可以嵌套在另一个对象中。",alignmentTitle:"对齐方式",alignmentDesc:"图片在媒体对象中可以与内容向上、局中或者向下对齐。",titleApi:"媒体对象的标题",imgApi:"媒体对象的图片",imgAltApi:"img元素的alt属性",imgTitleApi:"img元素的title属性",imgSizeApi:"img元素的尺寸",imgBorderApi:"圆角或者圆形的图片",imgPosApi:"图片放在内容的左边或者右边",alignmentApi:"图片的垂直对齐方式"}},y=n(307),A="mediaObjectExample",N=i.createElement(p.a,{id:"egTitle"}),D=i.createElement(p.a,{id:"nestingTitle"}),w=i.createElement(p.a,{id:"alignmentTitle"}),M=function(){return i.createElement(y.a,{data:[{name:N,href:"#".concat(A)},{name:D,href:"#".concat("nestingMediaObject")},{name:w,href:"#".concat("mediaObjectAlignment")},{name:"API",href:"#".concat("mediaObjectApi")}]})};t.default=function(){return i.createElement(b.a,{language:E},i.createElement(h.a,null,i.createElement(a.a,null,"Media object"),i.createElement("div",null,i.createElement(p.a,{id:"compDesc"})),i.createElement(a.a.H3,{id:A},N),i.createElement(l.a,{component:i.createElement(u,null),source:'import * as React from "react";\nimport { Media } from "reap-ui";\nimport img from "../../../assets/media.svg";\n\nexport default () => (\n    <Media\n        title="Media heading"\n        img={img}>\n        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n    </Media>\n);'}),i.createElement(a.a.H3,{id:"nestingMediaObject"},D),i.createElement(l.a,{component:i.createElement(o,null),source:'import * as React from "react";\nimport { Media } from "reap-ui";\n\nconst img = (\n    <svg\n        width="64"\n        height="64"\n        xmlns="http://www.w3.org/2000/svg"\n        preserveAspectRatio="xMidYMid slice"\n        focusable="false"\n        style={{ textAnchor: "middle" }}>\n        <title>Placeholder</title>\n        <rect width="100%" height="100%" fill="#868e96"></rect>\n        <text x="50%" y="50%" fill="#dee2e6" dy=".3em">64x64</text>\n    </svg>\n);\n\nexport default () => (\n    <Media\n        title="Media heading"\n        img={img}>\n        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n        <Media\n            title="Media heading"\n            img={img}\n            className="mt-3">\n            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n    </Media>\n    </Media>\n);'},i.createElement(p.a,{id:"nestingDesc"})),i.createElement(a.a.H3,{id:"mediaObjectAlignment"},w),i.createElement(l.a,{component:i.createElement(d,null),source:'import * as React from "react";\nimport { Media } from "reap-ui";\nimport img from "../../../assets/media.svg";\n\nconst text = `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\nDonec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`;\n\nexport default () => (\n    <>\n        <Media\n            img={img}\n            imgBorder="rounded"\n            title="Top-aligned media">\n            <p>{text}</p>\n        </Media>\n        <Media\n            img={img}\n            imgBorder="rounded"\n            alignment="middle"\n            title="Center-aligned media">\n            <p>{text}</p>\n        </Media>\n        <Media\n            img={img}\n            imgBorder="rounded"\n            alignment="bottom"\n            title="Bottom-aligned media">\n            <p className="mb-0">{text}</p>\n        </Media>\n    </>\n);'},i.createElement(p.a,{id:"alignmentDesc"})),i.createElement(a.a,{id:"mediaObjectApi"},"API"),i.createElement(f,null)),i.createElement(M,null))}}}]);