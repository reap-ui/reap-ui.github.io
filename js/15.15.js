(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{288:function(e,t,n){"use strict";var a=n(0),r=n(47);t.a=function(e){var t=e.id;return a.createElement(r.b.Consumer,null,(function(e){return a.createElement(a.Fragment,null,(e||{})[t])}))}},289:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(6),r=n.n(a),l=n(3),c=n.n(l),m=n(5),o=n.n(m),i=n(0),s=n(2);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){var t=e.tag,n=void 0===t?"h2":t,a=e.className,r=o()(e,["tag","className"]);return i.createElement(n,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({className:Object(s.b)(a,"doc-heading")},r))}d.H3=function(e){return i.createElement(d,r()({tag:"h3"},e))}},290:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n(286),l=n(287);function c(e){var t=e.code;return a.createElement(a.Fragment,null,a.createElement("div",{className:"position-relative"},a.createElement("button",{className:"btn-clipboard",onClick:function(){var e=document.createElement("textarea");e.value=t,e.style.cssText="position: absolute; left: -10000px;",document.body.append(e),e.select(),document.execCommand("copy"),e.remove()}},"copy")),a.createElement("div",{className:"code-container"},a.createElement(r.a,{language:"javascript",style:l.a},t)))}},291:function(e,t,n){"use strict";var a=n(0),r=n(289),l=n(25);t.a=Object(l.b)((function(e){return{lang:e.lang}}))((function(e){var t=e.data,n=e.lang,l=e.title;return a.createElement("div",null,l&&a.createElement(r.a.H3,null,l),a.createElement("div",{className:"api-container"},a.createElement("table",{className:"table table-bordered table-striped props-table"},a.createElement("thead",null,"zh"===n?a.createElement("tr",null,a.createElement("th",null,"属性"),a.createElement("th",null,"类型"),a.createElement("th",null,"默认值"),a.createElement("th",null,"说明")):a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",null,"Type"),a.createElement("th",null,"Default"),a.createElement("th",null,"Description"))),a.createElement("tbody",null,t.map((function(e){return a.createElement("tr",{key:e.name},a.createElement("td",null,e.name),a.createElement("td",null,e.type),a.createElement("td",{className:"default-value"},e.default||"-"),a.createElement("td",null,e.description))}))))))}))},292:function(e,t,n){"use strict";var a=n(0),r=n(13);t.a=function(e){return a.createElement(r.i,{span:!1,md:9,xl:8,className:"pb-3"},e.children)}},293:function(e,t,n){"use strict";var a=n(0),r=n(47);t.a=function(e){var t=e.language,n=e.children;return a.createElement(r.a.Consumer,null,(function(e){return a.createElement(r.b.Provider,{value:t[e]},n)}))}},294:function(e,t,n){"use strict";var a=n(9),r=n.n(a),l=n(8),c=n.n(l),m=n(4),o=n.n(m),i=n(10),s=n.n(i),u=n(7),d=n.n(u),h=n(11),E=n.n(h),p=n(3),v=n.n(p),g=n(0),b=n(13),f=n(26),N=n(48);function k(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var I=function(e){E()(a,e);var t,n=(t=a,function(){var e,n=d()(t);if(k()){var a=d()(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return s()(this,e)});function a(){var e;r()(this,a);for(var t=arguments.length,l=new Array(t),c=0;c<t;c++)l[c]=arguments[c];return e=n.call.apply(n,[this].concat(l)),v()(o()(e),"timer",null),v()(o()(e),"isClick",!1),v()(o()(e),"cancel",null),v()(o()(e),"handleScroll",(function(){var t=document.querySelector(".right-nav");if(t&&"none"!==getComputedStyle(t).getPropertyValue("display")&&!e.isClick){for(var n=null,a=0,r=Array.from(document.querySelectorAll(".right-nav .right-nav-link"));a<r.length;a++){var l=r[a],c=void 0;try{c=document.querySelector(l.hash)}catch(e){}if(c){var m=c.getBoundingClientRect().top;if(m>=window.innerHeight/2)break;m<=150&&(n=l)}}e.removeActive(),e.activateElement(n)}})),v()(o()(e),"_handleScroll",(function(){null!==e.timer&&(clearTimeout(e.timer),e.timer=null),e.timer=setTimeout(e.handleScroll,50)})),v()(o()(e),"handleClick",(function(t){var n=t.target,a=n.hash,r=e.props,l=r.location,c=r.history;e.isClick=!0,l.hash!==a&&c.push("".concat(l.pathname).concat(a)),e.removeActive(),e.activateElement(n),e.cancel=Object(N.a)(a,(function(){return e.isClick=!1}))||null,t.preventDefault()})),e}return c()(a,[{key:"componentDidMount",value:function(){var e=this.props.location.hash;window.addEventListener("scroll",this._handleScroll),Object(N.a)(e)}},{key:"componentWillUnmount",value:function(){this.cancel&&this.cancel(),window.removeEventListener("scroll",this._handleScroll)}},{key:"removeActive",value:function(){var e=document.querySelectorAll(".right-nav .active");Array.from(e).forEach((function(e){return e.classList.remove("active")}))}},{key:"activateElement",value:function(e){if(e){var t=this.closest(e,".level-2");if(e.classList.add("active"),t){var n=t.previousElementSibling;n&&n.classList.add("active")}}}},{key:"closest",value:function(e,t){for(var n=document.body,a=e.parentNode;a&&a!==n&&!a.matches(t);)a=a.parentNode;return a===n?null:a}},{key:"handleLink",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=e.map((function(e){return g.createElement(b.s.Item,{key:e.href},g.createElement(b.s.Link,{className:"right-nav-link",href:e.href,onClick:t.handleClick},e.name),e.children&&t.handleLink(e.children,n+1))}));return g.createElement(b.s,{className:"level-".concat(n),vertical:!0},a)}},{key:"render",value:function(){return g.createElement(b.i,{span:!1,xl:2,className:"d-none d-xl-block right-nav"},this.handleLink(this.props.data))}}]),a}(g.Component);t.a=Object(f.i)(I)},295:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n(290),l=n(2);function c(e){var t=e.component,n=e.className,c=e.source,m=e.children;return a.createElement(a.Fragment,null,m&&a.createElement("div",null,m),a.createElement("div",{className:Object(l.b)(n,"bd-example")},a.createElement("div",null,t),c&&a.createElement(r.a,{code:c})))}},297:function(e,t,n){"use strict";var a=n(0),r=n(25),l=n(289);t.a=Object(r.b)((function(e){return{lang:e.lang}}))((function(e){return a.createElement(a.Fragment,null,e.title&&a.createElement(l.a.H3,null,e.title),a.createElement("div",{className:"text-muted"},a.createElement("em",null,"zh"===e.lang?"该组件暂无属性":"No public props for this component.")))}))},309:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(289),l=n(295),c=n(13),m=n(290),o=n(52),i=n(15),s=n.n(i),u=c.t.Brand,d=c.t.Collapse,h=c.t.Toggle,E=c.s.Link,p=c.s.Item,v=c.l.Menu,g=c.l.Item,b=c.l.Divider,f=function(){var e=a.useState(!1),t=s()(e,2),n=t[0],r=t[1],l=a.createElement(v,null,a.createElement(g,{href:"#"},"Action"),a.createElement(g,{href:"#"},"Another action"),a.createElement(b,null),a.createElement(g,{href:"#"},"Something else here"));return a.createElement(a.Fragment,null,a.createElement(c.t,{expand:"lg",bg:"light"},a.createElement(u,{href:"#"},"Navbar"),a.createElement(h,{onClick:function(){return r(!n)}}),a.createElement(d,{isOpen:n},a.createElement(c.s,{className:"mr-auto"},a.createElement(p,null,a.createElement(E,{active:!0,href:"#"},"Home")),a.createElement(p,null,a.createElement(E,{href:"#"},"Link")),a.createElement(p,null,a.createElement(E,{href:"#"},"Link")),a.createElement(p,null,a.createElement(c.l,{overlay:l},a.createElement(E,{href:"#"},"Dropdown"))),a.createElement(p,null,a.createElement(E,{disabled:!0,href:"#"},"Disabled"))),a.createElement(c.m,{inline:!0},a.createElement(c.m.Item,{className:"mr-sm-2"},a.createElement(c.n,{placeholder:"Search"})),a.createElement(c.m.Item,null,a.createElement(c.e,{type:"submit",variant:"success",outline:!0},"Search"))))))},N=c.t.Brand,k=c.t.Collapse,I=c.t.Toggle,y=c.s.Item,x=c.s.Link,F=function(){return a.createElement(a.Fragment,null,a.createElement(c.t,{variant:"dark",bg:"dark"},a.createElement(N,{href:"#"},"Navbar"),a.createElement(I,null),a.createElement(k,null,a.createElement(c.s,{className:"mr-auto"},a.createElement(y,null,a.createElement(x,{href:"#",active:!0},"Home")),a.createElement(y,null,a.createElement(x,{href:"#"},"Features")),a.createElement(y,null,a.createElement(x,{href:"#"},"Pricing"))),a.createElement(c.m,{inline:!0},a.createElement(c.m.Item,null,a.createElement(c.n,{className:"mr-2",placeholder:"search"})),a.createElement(c.m.Item,null,a.createElement(c.e,{variant:"info",outline:!0},"Search"))))),a.createElement(c.t,{variant:"dark",bg:"primary"},a.createElement(N,{href:"#"},"Navbar"),a.createElement(I,null),a.createElement(k,null,a.createElement(c.s,{className:"mr-auto"},a.createElement(y,null,a.createElement(x,{href:"#",active:!0},"Home")),a.createElement(y,null,a.createElement(x,{href:"#"},"Features")),a.createElement(y,null,a.createElement(x,{href:"#"},"Pricing"))),a.createElement(c.m,{inline:!0},a.createElement(c.m.Item,null,a.createElement(c.n,{className:"mr-2",placeholder:"search"})),a.createElement(c.m.Item,null,a.createElement(c.e,{variant:"light",outline:!0},"Search"))))),a.createElement(c.t,{variant:"light",style:{backgroundColor:"#e3f2fd"}},a.createElement(N,{href:"#"},"Navbar"),a.createElement(I,null),a.createElement(k,null,a.createElement(c.s,{className:"mr-auto"},a.createElement(y,null,a.createElement(x,{href:"#",active:!0},"Home")),a.createElement(y,null,a.createElement(x,{href:"#"},"Features")),a.createElement(y,null,a.createElement(x,{href:"#"},"Pricing"))),a.createElement(c.m,{inline:!0},a.createElement(c.m.Item,null,a.createElement(c.n,{className:"mr-2",placeholder:"search"})),a.createElement(c.m.Item,null,a.createElement(c.e,{variant:"primary",outline:!0},"Search"))))))},L=c.t.Brand,B=c.t.Collapse,T=c.t.Toggle,C=c.s.Item,D=c.s.Link,w=function(){return a.createElement(a.Fragment,null,a.createElement(c.t,{expand:"lg",bg:"light"},a.createElement(T,null),a.createElement(B,null,a.createElement(L,{href:"#"},"Hidden brand"),a.createElement(c.s,{className:"mr-auto"},a.createElement(C,null,a.createElement(D,{href:"#",active:!0},"Home")),a.createElement(C,null,a.createElement(D,{href:"#"},"Link")),a.createElement(C,null,a.createElement(D,{href:"#",disabled:!0},"Disabled"))),a.createElement(c.m,{inline:!0},a.createElement(c.m.Item,null,a.createElement(c.n,{className:"mr-2",placeholder:"search"})),a.createElement(c.m.Item,null,a.createElement(c.e,{variant:"success",outline:!0},"Search"))))))},S=c.t.Brand,A=c.t.Collapse,O=c.t.Toggle,H=c.s.Item,j=c.s.Link,P=function(){return a.createElement(a.Fragment,null,a.createElement(c.t,{expand:"lg",bg:"light"},a.createElement(S,{href:"#"},"Navbar"),a.createElement(O,null),a.createElement(A,null,a.createElement(c.s,{className:"mr-auto"},a.createElement(H,null,a.createElement(j,{href:"#",active:!0},"Home")),a.createElement(H,null,a.createElement(j,{href:"#"},"Link")),a.createElement(H,null,a.createElement(j,{href:"#",disabled:!0},"Disabled"))),a.createElement(c.m,{inline:!0},a.createElement(c.m.Item,null,a.createElement(c.n,{className:"mr-2",placeholder:"search"})),a.createElement(c.m.Item,null,a.createElement(c.e,{variant:"success",outline:!0},"Search"))))))},R=c.t.Brand,M=c.t.Collapse,_=c.t.Toggle,q=c.s.Item,z=c.s.Link,W=function(){return a.createElement(a.Fragment,null,a.createElement(c.t,{expand:"lg",bg:"light"},a.createElement(_,null),a.createElement(R,{href:"#"},"Navbar"),a.createElement(M,null,a.createElement(c.s,{className:"mr-auto"},a.createElement(q,null,a.createElement(z,{href:"#",active:!0},"Home")),a.createElement(q,null,a.createElement(z,{href:"#"},"Link")),a.createElement(q,null,a.createElement(z,{href:"#",disabled:!0},"Disabled"))),a.createElement(c.m,{inline:!0},a.createElement(c.m.Item,null,a.createElement(c.n,{className:"mr-2",placeholder:"search"})),a.createElement(c.m.Item,null,a.createElement(c.e,{variant:"success",outline:!0},"Search"))))))},J=function(){var e=a.useState(!1),t=s()(e,2),n=t[0],r=t[1];return a.createElement(a.Fragment,null,a.createElement(c.j,{isOpen:n},a.createElement("div",{className:"bg-dark p-4"},a.createElement("h4",{className:"text-white"},"Collapsed content"),a.createElement("span",{className:"text-muted"},"Toggleable via the navbar brand."))),a.createElement(c.t,{variant:"dark",bg:"dark"},a.createElement(c.t.Toggle,{onClick:function(){return r(!n)}})))},U=n(291),V=n(288),G=n(297),K=n(23),Q=[{name:"variant",type:"light | dark",default:"light",description:a.createElement(V.a,{id:"variantApi"})},{name:"bg",type:"primary |\n        secondary |\n        success |\n        danger |\n        warning |\n        info |\n        dark |\n        light",description:a.createElement(V.a,{id:"bgApi"})},{name:"expand",type:'boolean | "sm" | "md" | "lg" | "xl"',default:"false",description:a.createElement(V.a,{id:"expandApi"})}],X=[{name:"tag",type:"string",default:"a",description:a.createElement(V.a,{id:"tagApi"})},{name:"href",type:"string",description:a.createElement(V.a,{id:"hrefApi"})}],Y=[{name:"onClick",type:"Function",description:a.createElement(V.a,{id:"onClickApi"})}],Z=function(){return a.createElement(a.Fragment,null,a.createElement(U.a,{title:"Navbar",data:Q}),a.createElement(U.a,{title:"Navbar.Brand",data:X}),a.createElement(r.a.H3,null,"Navbar.Collapse"),a.createElement("div",null,a.createElement(V.a,{id:"seeDesc"}),a.createElement(K.b,{to:"/components/collapse#collapseApi"},"Collapse")),a.createElement(U.a,{title:"Navbar.Toggle",data:Y}),a.createElement(G.a,{title:"Navbar.Text"}))},$=n(292),ee=n(293),te={en:{compDesc:"A powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.",egTitle:"Example",egDesc:a.createElement(a.Fragment,null,"Here’s an example of all the sub-components included in a responsive light-themed navbar that automatically collapses at the ",a.createElement("code",null,"lg")," (large) breakpoint."),supportedTitle:"Supported content",brandTitle:"Brand",brandDesc:a.createElement(a.Fragment,null,"The ",a.createElement("code",null,"Navbar.Brand")," can be applied to most elements, but an anchor works best as some elements might require utility classes or custom styles."),brandDesc2:a.createElement(a.Fragment,null,"Adding images to the ",a.createElement("code",null,"Navbar.Brand")," will likely always require custom styles or utilities to properly size. Here are some examples to demonstrate."),textTitle:"Text",textDesc:a.createElement(a.Fragment,null,"Navbars may contain bits of text with the help of ",a.createElement("code",null,"Navbar.Text"),"."),colorTitle:"Color schemes",colorDesc:a.createElement(a.Fragment,null,"Theming the navbar has never been easier thanks to the combination of theming prop. Choose from ",a.createElement("code",null,'variant="light"')," for use with light theme colors, or ",a.createElement("code",null,'variant="dark"')," for dark theme colors."),resTitle:"Responsive behaviors",resDesc:a.createElement(a.Fragment,null,a.createElement("p",null,"Navbars can utilize ",a.createElement("code",null,"Navbar.Toggle"),", ",a.createElement("code",null,"Navbar.Collapse"),", and ",a.createElement("code",null,"expand(sm | md | lg | xl)")," prop to change when their content collapses behind a button. In combination with other utilities, you can easily choose when to show or hide particular elements."),"For navbars that never collapse, set ",a.createElement("code",{dangerouslySetInnerHTML:{__html:"expand={true}"}})," on the navbar. For navbars that always collapse, set ",a.createElement("code",{dangerouslySetInnerHTML:{__html:"expand={false}"}})," or pass nothing."),togglerTitle:"Toggler",toggleDesc:a.createElement(a.Fragment,null,a.createElement("p",null,"Navbar togglers are left-aligned by default, but should they follow a sibling element like a ",a.createElement("code",null,"Navbar.Brand"),", they’ll automatically be aligned to the far right. Reversing your markup will reverse the placement of the toggler. Below are examples of different toggle styles."),"With no ",a.createElement("code",null,"Navbar.Brand")," shown in lowest breakpoint:"),lgDesc:"With a toggler on the left and brand name on the right:",rgDesc:"With a brand name shown on the left and toggler on the right:",externalTitle:"External content",externalDesc:a.createElement(a.Fragment,null,"Sometimes you want to use the collapse plugin to trigger hidden content elsewhere on the page. Use ",a.createElement("code",null,"Collapse"),", that’s easily done!"),variantApi:"Light or dark theme",bgApi:"Background color of navbar",expandApi:"The breakpoint to change when their content collapses behind a button",tagApi:"Set a custom element for this component.",hrefApi:"Href for underlying a element",seeDesc:"see",onClickApi:"Callback when toggle button is clicked"},zh:{compDesc:"强大的响应式导航头部，支持商标、导航、折叠插件等。",egTitle:"示例",egDesc:a.createElement(a.Fragment,null,"下面的响应式light主题的导航条包含所有子组件， 在",a.createElement("code",null,"lg"),"断点下将会折叠。"),supportedTitle:"支持的内容",brandTitle:"商标",brandDesc:a.createElement(a.Fragment,null,a.createElement("code",null,"Navbar.Brand"),"可以应用到大部分元素，但是",a.createElement("code",null,"a"),"元素比其他一元素更适合。"),brandDesc2:a.createElement(a.Fragment,null,"在",a.createElement("code",null,"Navbar.Brand"),"中添加图像。"),textTitle:"文本",textDesc:a.createElement(a.Fragment,null,"导航条可以包含帮助文本， 使用",a.createElement("code",null,"Navbar.Text"),"。"),colorTitle:"颜色",colorDesc:a.createElement(a.Fragment,null,"设置",a.createElement("code",null,'variant="light"'),"创建light主题， 或者设置 ",a.createElement("code",null,'variant="dark"'),"创建dark主题。"),resTitle:"响应式导航条",resDesc:a.createElement(a.Fragment,null,a.createElement("p",null,"导航条可以使用",a.createElement("code",null,"Navbar.Toggle"),", ",a.createElement("code",null,"Navbar.Collapse"),"和",a.createElement("code",null,"expand(sm | md | lg | xl)"),"属性来改变，当内容在按钮后折叠时。结合其他工具可以简单的选择何时显示或者隐藏元苏俄"),"如不希望导航条折叠， 设置",a.createElement("code",{dangerouslySetInnerHTML:{__html:"expand={true}"}}),"。如希望总是折叠，For navbars that always collapse, 设置",a.createElement("code",{dangerouslySetInnerHTML:{__html:"expand={false}"}}),"或者不设置",a.createElement("code",null,"expand"),"属性。"),togglerTitle:"切换器",toggleDesc:a.createElement(a.Fragment,null,a.createElement("p",null,"默认切换器是作对齐的，但是它们会跟随兄弟元素如",a.createElement("code",null,"Navbar.Brand"),"，将会排列到右边。可以调转他们的顺序。"),"没有",a.createElement("code",null,"Navbar.Brand"),"在最小的断点中显示:"),lgDesc:"切换器在左边，商标在右边：",rgDesc:"商标在左边，切换器在右边：",externalTitle:"外部内容",externalDesc:a.createElement(a.Fragment,null,"某些情况下，希望使用折叠插件触发内容的显示或隐藏。使用",a.createElement("code",null,"Collapse"),"可以很容易做到。"),variantApi:"导航条的主题",bgApi:"导航条的背景色",expandApi:"设置折叠内容的断点",tagApi:"自定义元素",hrefApi:"组件内a元素的href",seeDesc:"见",onClickApi:"按钮被点击的回调"}},ne=n(294),ae="navbarExample",re=a.createElement(V.a,{id:"egTitle"}),le=a.createElement(V.a,{id:"supportedTitle"}),ce=a.createElement(V.a,{id:"brandTitle"}),me=a.createElement(V.a,{id:"textTitle"}),oe=a.createElement(V.a,{id:"colorTitle"}),ie="navbarResponsiveBehavior",se=a.createElement(V.a,{id:"resTitle"}),ue=a.createElement(V.a,{id:"togglerTitle"}),de=a.createElement(V.a,{id:"externalTitle"}),he=function(){return a.createElement(ne.a,{data:[{name:re,href:"#".concat(ae)},{name:le,href:"#".concat("navbarSupportedContent"),children:[{name:ce,href:"#".concat("navbarBrand")},{name:me,href:"#".concat("navbarText")},{name:oe,href:"#".concat("navbarColor")}]},{name:se,href:"#".concat(ie),children:[{name:ue,href:"#".concat("navbarToggler")},{name:de,href:"#".concat("navbarExternalContent")}]},{name:"API",href:"#".concat("navbarApi")}]})},Ee=r.a.H3;t.default=function(){return a.createElement(ee.a,{language:te},a.createElement($.a,null,a.createElement(r.a,null,"Navbar"),a.createElement("div",null,a.createElement(V.a,{id:"compDesc"})),a.createElement(Ee,{id:ae},re),a.createElement(l.a,{component:a.createElement(f,null),source:'import * as React from "react";\nimport { Navbar, Nav, Dropdown, Form, Input, Button } from "reap-ui";\n\nconst {\n    Brand,\n    Collapse,\n    Toggle\n} = Navbar;\nconst {\n    Link,\n    Item\n} = Nav;\nconst {\n    Menu,\n    Item: MenuItem,\n    Divider\n} = Dropdown;\n\nexport default () => {\n    const [isOpen, toggleOpen] = React.useState(false);\n    const toggle = () => toggleOpen(!isOpen);\n    const overlay = (\n        <Menu>\n            <MenuItem href="#">Action</MenuItem>\n            <MenuItem href="#">Another action</MenuItem>\n            <Divider />\n            <MenuItem href="#">Something else here</MenuItem>\n        </Menu>\n    );\n\n    return (\n        <>\n            <Navbar\n                expand="lg"\n                bg="light">\n                <Brand href="#">Navbar</Brand>\n                <Toggle onClick={toggle} />\n                <Collapse isOpen={isOpen}>\n                    <Nav className="mr-auto">\n                        <Item>\n                            <Link active href="#">Home</Link>\n                        </Item>\n                        <Item>\n                            <Link href="#">Link</Link>\n                        </Item>\n                        <Item>\n                            <Link href="#">Link</Link>\n                        </Item>\n                        <Item>\n                            <Dropdown overlay={overlay}>\n                                <Link href="#">Dropdown</Link>\n                            </Dropdown>\n                        </Item>\n                        <Item>\n                            <Link disabled href="#">Disabled</Link>\n                        </Item>\n                    </Nav>\n                    <Form inline>\n                        <Form.Item className="mr-sm-2">\n                            <Input placeholder="Search" />\n                        </Form.Item>\n                        <Form.Item>\n                            <Button type="submit" variant="success" outline>Search</Button>\n                        </Form.Item>\n                    </Form>\n                </Collapse>\n            </Navbar>\n        </>\n    );\n}'},a.createElement(V.a,{id:"egDesc"})),a.createElement(r.a,{id:"navbarSupportedContent"},le),a.createElement(Ee,{id:"navbarBrand"},ce),a.createElement("div",null,a.createElement(V.a,{id:"brandDesc"})),a.createElement("div",{className:"bd-example"},a.createElement(c.t,{bg:"light"},a.createElement(c.t.Brand,{href:"#"},"Navbar")),a.createElement(c.t,{bg:"light"},a.createElement(c.t.Brand,{tag:"span"},"Navbar")),a.createElement(m.a,{code:'\x3c!-- As a link --\x3e\n<Navbar bg="light">\n    <Navbar.Brand href="#">Navbar</Navbar.Brand>\n</Navbar>\n\n\x3c!-- As a heading --\x3e\n<Navbar bg="light">\n    <Navbar.Brand tag="span">Navbar</Navbar.Brand>\n</Navbar>\n'})),a.createElement("div",null,a.createElement(V.a,{id:"brandDesc2"})),a.createElement("div",{className:"bd-example"},a.createElement(c.t,{bg:"light"},a.createElement(c.t.Brand,{href:"#"},a.createElement("img",{src:o.a,alt:"",width:30,height:30}))),a.createElement(m.a,{code:'\x3c!-- Just an image --\x3e\n<Navbar bg="light">\n    <Navbar.Brand href="#">\n        <img src="path/to/img" alt="" width={30} height={30}/>\n    </Navbar.Brand>\n</Navbar>\n'})),a.createElement("div",{className:"bd-example"},a.createElement(c.t,{bg:"light"},a.createElement(c.t.Brand,{href:"#"},a.createElement("img",{src:o.a,alt:"",width:30,height:30})," Bootstrap")),a.createElement(m.a,{code:'\x3c!-- Image and text --\x3e\n<Navbar bg="light">\n    <Navbar.Brand href="#">\n        <img src="path/to/img" alt="" width={30} height={30}/>\n        &nbsp;Bootstrap\n    </Navbar.Brand>\n</Navbar>\n'})),a.createElement(Ee,{id:"navbarText"},me),a.createElement("div",null,a.createElement(V.a,{id:"textDesc"})),a.createElement("div",{className:"bd-example"},a.createElement(c.t,{bg:"light"},a.createElement(c.t.Text,null,"Navbar text with an inline element")),a.createElement(m.a,{code:'<Navbar bg="light">\n    <Navbar.Text>Navbar text with an inline element</Navbar.Text>\n</Navbar>'})),a.createElement(Ee,{id:"navbarColor"},oe),a.createElement(l.a,{component:a.createElement(F,null),source:'import * as React from "react";\nimport { Navbar, Nav, Form, Input, Button } from "reap-ui";\n\nconst {\n    Brand,\n    Collapse,\n    Toggle\n} = Navbar;\nconst {\n    Item,\n    Link\n} = Nav;\n\nexport default () => (\n    <>\n        <Navbar variant="dark" bg="dark">\n            <Brand href="#">Navbar</Brand>\n            <Toggle />\n            <Collapse>\n                <Nav className="mr-auto">\n                    <Item>\n                        <Link href="#" active>Home</Link>\n                    </Item>\n                    <Item>\n                        <Link href="#">Features</Link>\n                    </Item>\n                    <Item>\n                        <Link href="#">Pricing</Link>\n                    </Item>\n                </Nav>\n                <Form inline>\n                    <Form.Item>\n                        <Input className="mr-2" placeholder="search" />\n                    </Form.Item>\n                    <Form.Item>\n                        <Button variant="info" outline>Search</Button>\n                    </Form.Item>\n                </Form>\n            </Collapse>\n        </Navbar>\n        <Navbar variant="dark" bg="primary">\n            <Brand href="#">Navbar</Brand>\n            <Toggle />\n            <Collapse>\n                <Nav className="mr-auto">\n                    <Item>\n                        <Link href="#" active>Home</Link>\n                    </Item>\n                    <Item>\n                        <Link href="#">Features</Link>\n                    </Item>\n                    <Item>\n                        <Link href="#">Pricing</Link>\n                    </Item>\n                </Nav>\n                <Form inline>\n                    <Form.Item>\n                        <Input className="mr-2" placeholder="search" />\n                    </Form.Item>\n                    <Form.Item>\n                        <Button variant="light" outline>Search</Button>\n                    </Form.Item>\n                </Form>\n            </Collapse>\n        </Navbar>\n        <Navbar variant="light" style={{ backgroundColor: "#e3f2fd" }}>\n            <Brand href="#">Navbar</Brand>\n            <Toggle />\n            <Collapse>\n                <Nav className="mr-auto">\n                    <Item>\n                        <Link href="#" active>Home</Link>\n                    </Item>\n                    <Item>\n                        <Link href="#">Features</Link>\n                    </Item>\n                    <Item>\n                        <Link href="#">Pricing</Link>\n                    </Item>\n                </Nav>\n                <Form inline>\n                    <Form.Item>\n                        <Input className="mr-2" placeholder="search" />\n                    </Form.Item>\n                    <Form.Item>\n                        <Button variant="primary" outline>Search</Button>\n                    </Form.Item>\n                </Form>\n            </Collapse>\n        </Navbar>\n    </>\n);'},a.createElement(V.a,{id:"colorDesc"})),a.createElement(r.a,{id:ie},se),a.createElement("div",null,a.createElement(V.a,{id:"resDesc"})),a.createElement(Ee,{id:"navbarToggler"},ue),a.createElement(l.a,{component:a.createElement(w,null),source:'import * as React from "react";\nimport { Navbar, Nav, Form, Input, Button } from "reap-ui";\n\nconst {\n    Brand,\n    Collapse,\n    Toggle\n} = Navbar;\nconst {\n    Item,\n    Link\n} = Nav;\n\nexport default () => (\n    <>\n        <Navbar expand="lg" bg="light">\n            <Toggle />\n            <Collapse>\n                <Brand href="#">Hidden brand</Brand>\n                <Nav className="mr-auto">\n                    <Item>\n                        <Link href="#" active>Home</Link>\n                    </Item>\n                    <Item>\n                        <Link href="#">Link</Link>\n                    </Item>\n                    <Item>\n                        <Link href="#" disabled>Disabled</Link>\n                    </Item>\n                </Nav>\n                <Form inline>\n                    <Form.Item>\n                        <Input className="mr-2" placeholder="search" />\n                    </Form.Item>\n                    <Form.Item>\n                        <Button variant="success" outline>Search</Button>\n                    </Form.Item>\n                </Form>\n            </Collapse>\n        </Navbar>\n    </>\n);'},a.createElement(V.a,{id:"togglerDesc"})),a.createElement(l.a,{component:a.createElement(P,null),source:'import * as React from "react";\nimport { Navbar, Nav, Form, Input, Button } from "reap-ui";\n\nconst {\n    Brand,\n    Collapse,\n    Toggle\n} = Navbar;\nconst {\n    Item,\n    Link\n} = Nav;\n\nexport default () => (\n    <>\n        <Navbar expand="lg" bg="light">\n            <Brand href="#">Navbar</Brand>\n            <Toggle />\n            <Collapse>\n                <Nav className="mr-auto">\n                    <Item>\n                        <Link href="#" active>Home</Link>\n                    </Item>\n                    <Item>\n                        <Link href="#">Link</Link>\n                    </Item>\n                    <Item>\n                        <Link href="#" disabled>Disabled</Link>\n                    </Item>\n                </Nav>\n                <Form inline>\n                    <Form.Item>\n                        <Input className="mr-2" placeholder="search" />\n                    </Form.Item>\n                    <Form.Item>\n                        <Button variant="success" outline>Search</Button>\n                    </Form.Item>\n                </Form>\n            </Collapse>\n        </Navbar>\n    </>\n);'},a.createElement(V.a,{id:"lgDesc"})),a.createElement(l.a,{component:a.createElement(W,null),source:'import * as React from "react";\nimport { Navbar, Nav, Form, Input, Button } from "reap-ui";\n\nconst {\n    Brand,\n    Collapse,\n    Toggle\n} = Navbar;\nconst {\n    Item,\n    Link\n} = Nav;\n\nexport default () => (\n    <>\n        <Navbar expand="lg" bg="light">\n            <Toggle />\n            <Brand href="#">Navbar</Brand>\n            <Collapse>\n                <Nav className="mr-auto">\n                    <Item>\n                        <Link href="#" active>Home</Link>\n                    </Item>\n                    <Item>\n                        <Link href="#">Link</Link>\n                    </Item>\n                    <Item>\n                        <Link href="#" disabled>Disabled</Link>\n                    </Item>\n                </Nav>\n                <Form inline>\n                    <Form.Item>\n                        <Input className="mr-2" placeholder="search" />\n                    </Form.Item>\n                    <Form.Item>\n                        <Button variant="success" outline>Search</Button>\n                    </Form.Item>\n                </Form>\n            </Collapse>\n        </Navbar>\n    </>\n);'},a.createElement(V.a,{id:"rgDesc"})),a.createElement(Ee,{id:"navbarExternalContent"},de),a.createElement(l.a,{component:a.createElement(J,null),source:'import * as React from "react";\nimport { Navbar, Collapse } from "reap-ui";\n\nexport default () => {\n    const [isOpen, update] = React.useState(false);\n    const toggle = () => update(!isOpen);\n\n    return (\n        <>\n            <Collapse isOpen={isOpen}>\n                <div className="bg-dark p-4">\n                <h4 className="text-white">Collapsed content</h4>\n                <span className="text-muted">Toggleable via the navbar brand.</span>\n                </div>\n            </Collapse>\n            <Navbar variant="dark" bg="dark">\n                <Navbar.Toggle onClick={toggle} />\n            </Navbar>\n        </>\n    );\n};'},a.createElement(V.a,{id:"externalDesc"})),a.createElement(r.a,{id:"navbarApi"},"API"),a.createElement(Z,null)),a.createElement(he,null))}}}]);