(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{320:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(6),i=n.n(a),l=n(3),c=n.n(l),r=n(5),m=n.n(r),o=n(0),u=n(2);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){var t=e.tag,n=void 0===t?"h2":t,a=e.className,i=m()(e,["tag","className"]);return o.createElement(n,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({className:Object(u.b)(a,"doc-heading")},i))}d.H3=function(e){return o.createElement(d,i()({tag:"h3"},e))}},321:function(e,t,n){"use strict";var a=n(0),i=n(320),l=n(23);t.a=Object(l.b)((function(e){return{lang:e.lang}}))((function(e){var t=e.data,n=e.lang,l=e.title;return a.createElement("div",null,l&&a.createElement(i.a.H3,null,l),a.createElement("div",{className:"api-container"},a.createElement("table",{className:"table table-bordered table-striped props-table"},a.createElement("thead",null,"zh"===n?a.createElement("tr",null,a.createElement("th",null,"属性"),a.createElement("th",null,"类型"),a.createElement("th",null,"默认值"),a.createElement("th",null,"说明")):a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",null,"Type"),a.createElement("th",null,"Default"),a.createElement("th",null,"Description"))),a.createElement("tbody",null,t.map((function(e,t){return a.createElement("tr",{key:"string"==typeof e.name?e.name:e.name.toString()},a.createElement("td",null,e.name),a.createElement("td",null,e.type),a.createElement("td",{className:"default-value"},e.default||"-"),a.createElement("td",null,e.description))}))))))}))},322:function(e,t,n){"use strict";var a=n(0),i=n(13);t.a=function(e){return a.createElement(i.i,{span:!1,md:9,xl:8,className:"pb-3"},e.children)}},323:function(e,t,n){"use strict";var a=n(9),i=n.n(a),l=n(8),c=n.n(l),r=n(4),m=n.n(r),o=n(10),u=n.n(o),s=n(11),d=n.n(s),g=n(7),E=n.n(g),p=n(3),v=n.n(p),f=n(0),h=n(13),I=n(14),P=n(51);function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=E()(e);if(t){var i=E()(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return d()(this,n)}}var y=function(e){u()(n,e);var t=b(n);function n(){var e;i()(this,n);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return e=t.call.apply(t,[this].concat(l)),v()(m()(e),"timer",null),v()(m()(e),"isClick",!1),v()(m()(e),"cancel",null),v()(m()(e),"handleScroll",(function(){var t=document.querySelector(".right-nav");if(t&&"none"!==getComputedStyle(t).getPropertyValue("display")&&!e.isClick){for(var n=document.querySelectorAll(".right-nav .right-nav-link"),a=null,i=0,l=Array.from(n);i<l.length;i++){var c=l[i],r=void 0;try{r=document.querySelector(c.hash)}catch(e){continue}if(r){var m=r.getBoundingClientRect().top;if(m>=window.innerHeight/2)break;m<=150&&(a=c)}}e.removeActive(),e.activateElement(a)}})),v()(m()(e),"_handleScroll",(function(){null!==e.timer&&(clearTimeout(e.timer),e.timer=null),e.timer=setTimeout(e.handleScroll,50)})),v()(m()(e),"handleClick",(function(t){var n=t.target,a=n.hash,i=e.props,l=i.location,c=i.history;e.isClick=!0,l.hash!==a&&c.push("".concat(l.pathname).concat(a)),e.removeActive(),e.activateElement(n),e.cancel=Object(P.a)(a,(function(){return e.isClick=!1}))||null,t.preventDefault()})),e}return c()(n,[{key:"componentDidMount",value:function(){var e=this.props.location.hash;window.addEventListener("scroll",this._handleScroll),Object(P.a)(e)}},{key:"componentWillUnmount",value:function(){this.cancel&&this.cancel(),window.removeEventListener("scroll",this._handleScroll)}},{key:"removeActive",value:function(){var e=document.querySelectorAll(".right-nav .active");Array.from(e).forEach((function(e){return e.classList.remove("active")}))}},{key:"activateElement",value:function(e){if(e){var t=this.closest(e,".level-2");if(e.classList.add("active"),t){var n=t.previousElementSibling;n&&n.classList.add("active")}}}},{key:"closest",value:function(e,t){for(var n=document.body,a=e.parentNode;a&&a!==n&&!a.matches(t);)a=a.parentNode;return a===n?null:a}},{key:"handleLink",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=e.map((function(e){return f.createElement(h.s.Item,{key:e.href},f.createElement(h.s.Link,{className:"right-nav-link",href:e.href,onClick:t.handleClick},e.name),e.children&&t.handleLink(e.children,n+1))}));return f.createElement(h.s,{className:"level-".concat(n),vertical:!0},a)}},{key:"render",value:function(){return f.createElement(h.i,{span:!1,xl:2,className:"d-none d-xl-block"},f.createElement("div",{className:"right-nav"},this.handleLink(this.props.data)))}}]),n}(f.Component);t.a=Object(I.withRouter)(y)},350:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(320),l=n(13),c=n(32),r=n(321),m=n(24),o=[{name:"size",type:'"sm" | "lg"',description:a.createElement(m.a,{id:"sizeApi"})},{name:"alignment",type:'"left" | "center" | "right"',default:"left",description:a.createElement(m.a,{id:"alignmentApi"})}],u=[{name:"active",type:"boolean",description:a.createElement(m.a,{id:"activeApi"})},{name:"disabled",type:"boolean",description:a.createElement(m.a,{id:"disabledApi"})}],s=function(){return a.createElement(a.Fragment,null,a.createElement(r.a,{title:"Pagination",data:o}),a.createElement(r.a,{title:"Pagination.Item",data:u}))},d=n(322),g=n(50),E={en:{compDesc:"Indicate a series of related content exists across multiple pages.",basicTitle:"Basic",stateTitle:"Disabled and active states",stateDesc:a.createElement(a.Fragment,null,"Pagination links are customizable for different circumstances. Use ",a.createElement("code",null,"disabled")," for links that appear un-clickable and ",a.createElement("code",null,"active")," to indicate the current page."),sizingTitle:"Sizing",sizingDesc:a.createElement(a.Fragment,null,"Fancy larger or smaller pagination? Add ",a.createElement("code",null,'size="sm"')," or ",a.createElement("code",null,'size="lg"')," for additional sizes."),alignmentTitle:"Alignment",alignmentDesc:a.createElement(a.Fragment,null,"Change the alignment of pagination components with ",a.createElement("code",null,"alignment")," prop."),sizeApi:"Size of pagination items",alignmentApi:"Alignment of pagination items",activeApi:"Activate the item",disabledApi:"Disable the item"},zh:{compDesc:"分页组件。",basicTitle:"基础示例",stateTitle:"禁用和激活状态",stateDesc:a.createElement(a.Fragment,null,"分页链接可以自定义不同的状态。设置",a.createElement("code",null,"disabled"),"熟悉感使链接不可点击，设置",a.createElement("code",null,"active"),"属性显示当前页。"),sizingTitle:"尺寸",sizingDesc:a.createElement(a.Fragment,null,"想要更大活更小的分页? 设置",a.createElement("code",null,'size="sm"'),"或者",a.createElement("code",null,'size="lg"'),"来设置尺寸。"),alignmentTitle:"对齐方式",alignmentDesc:a.createElement(a.Fragment,null,"设置",a.createElement("code",null,"alignment"),"属性来改变分页的对齐方式。"),sizeApi:"分页的尺寸",alignmentApi:"分页的排列方式",activeApi:"激活链接",disabledApi:"禁用链接"}},p=n(323),v="basicPagination",f=a.createElement(m.a,{id:"basicTitle"}),h="paginationDisabledAndActiveState",I=a.createElement(m.a,{id:"stateTitle"}),P="paginationSizing",b=a.createElement(m.a,{id:"sizingTitle"}),y="paginationAlignment",k=a.createElement(m.a,{id:"alignmentTitle"}),A="paginationAPI",z=function(){return a.createElement(p.a,{data:[{name:f,href:"#".concat(v)},{name:I,href:"#".concat(h)},{name:b,href:"#".concat(P)},{name:k,href:"#".concat(y)},{name:"API",href:"#".concat(A)}]})},D=i.a.H3;t.default=function(){return a.createElement(g.a,{language:E},a.createElement(d.a,null,a.createElement(i.a,null,"Pagination"),a.createElement("div",null,a.createElement(m.a,{id:"compDesc"})),a.createElement(D,{id:v},f),a.createElement("div",{className:"bd-example"},a.createElement(l.u,null,a.createElement(l.u.Item,null,"上一页"),a.createElement(l.u.Item,null,"1"),a.createElement(l.u.Item,null,"2"),a.createElement(l.u.Item,null,"3"),a.createElement(l.u.Item,null,"下一页")),a.createElement(c.a,{code:"<Pagination>\n    <Pagination.Item>上一页</Pagination.Item>\n    <Pagination.Item>1</Pagination.Item>\n    <Pagination.Item>2</Pagination.Item>\n    <Pagination.Item>3</Pagination.Item>\n    <Pagination.Item>下一页</Pagination.Item>\n</Pagination>"})),a.createElement(D,{id:h},I),a.createElement("div",null,a.createElement(m.a,{id:"stateDesc"})),a.createElement("div",{className:"bd-example"},a.createElement(l.u,null,a.createElement(l.u.Item,{disabled:!0},"上一页"),a.createElement(l.u.Item,{active:!0},"1"),a.createElement(l.u.Item,null,"2"),a.createElement(l.u.Item,null,"3"),a.createElement(l.u.Item,null,"下一页")),a.createElement(c.a,{code:"<Pagination>\n    <Pagination.Item disabled>上一页</Pagination.Item>\n    <Pagination.Item active>1</Pagination.Item>\n    <Pagination.Item>2</Pagination.Item>\n    <Pagination.Item>3</Pagination.Item>\n    <Pagination.Item>下一页</Pagination.Item>\n</Pagination>"})),a.createElement(D,{id:P},b),a.createElement("div",null,a.createElement(m.a,{id:"sizingDesc"})),a.createElement("div",{className:"bd-example"},a.createElement(l.u,{size:"sm"},a.createElement(l.u.Item,null,"1"),a.createElement(l.u.Item,{active:!0},"2"),a.createElement(l.u.Item,null,"3")),a.createElement(c.a,{code:'<Pagination size="sm">\n    <Pagination.Item>1</Pagination.Item>\n    <Pagination.Item active>2</Pagination.Item>\n    <Pagination.Item>3</Pagination.Item>\n</Pagination>'})),a.createElement("div",{className:"bd-example"},a.createElement(l.u,{size:"lg"},a.createElement(l.u.Item,null,"1"),a.createElement(l.u.Item,{active:!0},"2"),a.createElement(l.u.Item,null,"3")),a.createElement(c.a,{code:'<Pagination size="lg">\n    <Pagination.Item>1</Pagination.Item>\n    <Pagination.Item active>2</Pagination.Item>\n    <Pagination.Item>3</Pagination.Item>\n</Pagination>'})),a.createElement(D,{id:y},k),a.createElement("div",null,a.createElement(m.a,{id:"alignmentDesc"})),a.createElement("div",{className:"bd-example"},a.createElement(l.u,{alignment:"center"},a.createElement(l.u.Item,{disabled:!0},"上一页"),a.createElement(l.u.Item,{active:!0},"1"),a.createElement(l.u.Item,null,"2"),a.createElement(l.u.Item,null,"3"),a.createElement(l.u.Item,null,"下一页")),a.createElement(c.a,{code:'<Pagination alignment="center">\n    <Pagination.Item disabled>上一页</Pagination.Item>\n    <Pagination.Item active>1</Pagination.Item>\n    <Pagination.Item>2</Pagination.Item>\n    <Pagination.Item>3</Pagination.Item>\n    <Pagination.Item>下一页</Pagination.Item>\n</Pagination>'})),a.createElement("div",{className:"bd-example"},a.createElement(l.u,{alignment:"right"},a.createElement(l.u.Item,{disabled:!0},"上一页"),a.createElement(l.u.Item,{active:!0},"1"),a.createElement(l.u.Item,null,"2"),a.createElement(l.u.Item,null,"3"),a.createElement(l.u.Item,null,"下一页")),a.createElement(c.a,{code:'<Pagination alignment="right">\n    <Pagination.Item disabled>上一页</Pagination.Item>\n    <Pagination.Item active>1</Pagination.Item>\n    <Pagination.Item>2</Pagination.Item>\n    <Pagination.Item>3</Pagination.Item>\n    <Pagination.Item>下一页</Pagination.Item>\n</Pagination>'})),a.createElement(i.a,{id:A},"API"),a.createElement(s,null)),a.createElement(z,null))}}}]);