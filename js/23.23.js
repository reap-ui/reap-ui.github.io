(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{279:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),l=n(2);function o(e){var t=e.tag,n=void 0===t?"h2":t,o=e.className,i=e.children;return a.createElement(n,{className:Object(l.b)(o,"doc-heading")},i)}},280:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),l=n(277),o=n(278);function i(e){var t=e.code;return a.createElement(a.Fragment,null,a.createElement("div",{className:"position-relative"},a.createElement("button",{className:"btn-clipboard",onClick:function(){var e=document.createElement("textarea");e.value=t,e.style.cssText="position: absolute; left: -10000px;",document.body.append(e),e.select(),document.execCommand("copy"),e.remove()}},"copy")),a.createElement("div",{className:"code-container",style:{marginTop:10}},a.createElement(l.a,{language:"javascript",style:o.a},t)))}},281:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),l=n(279);function o(e){var t=e.data,n=e.title;return a.createElement("div",null,n&&a.createElement(l.a,{tag:"h3"},n),a.createElement("div",{className:"api-container"},a.createElement("table",{className:"table table-bordered table-striped props-table"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",null,"Type"),a.createElement("th",null,"Default"),a.createElement("th",null,"Description"))),a.createElement("tbody",null,t.map((function(e){return a.createElement("tr",{key:e.name},a.createElement("td",null,e.name),a.createElement("td",null,e.type),a.createElement("td",{className:"default-value"},e.default||"-"),a.createElement("td",null,e.description))}))))))}},282:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),l=n(280),o=n(279),i=n(2);function r(e){var t=e.component,n=e.className,r=e.source,s=e.title,c=e.children;return a.createElement(a.Fragment,null,s&&a.createElement(o.a,{tag:"h3"},s),c,a.createElement("div",{className:Object(i.b)(n,"bd-example")},t,r&&a.createElement(l.a,{code:r})))}},299:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n(279),o=n(282),i=n(19),r=function(){return a.createElement(i.C,{title:"Bootstrap",icon:a.createElement(i.z,{animation:"border",size:"sm"}),extra:"11 minutes ago",closable:!0,autoHide:!0,visible:!0,delay:3e3},"Hello, world! This is a toast message.")},s=n(21),c=n.n(s),m=function(){var e=a.useState(!1),t=c()(e,2),n=t[0],l=t[1],o=function(){return l(!n)};return a.createElement(a.Fragment,null,a.createElement(i.e,{className:"mb-3",onClick:o},"Toggle"),a.createElement(i.C,{title:"Bootstrap",icon:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgc2xpY2UiIGZvY3VzYWJsZT0iZmFsc2UiIHJvbGU9ImltZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzAwN2FmZiI+PC9yZWN0Pjwvc3ZnPg==",extra:"just now",onClose:o,visible:n,closable:!0},"Hello, world! This is a toast message."))},u=n(281),d=[{name:"visible",type:"boolean",default:"false",description:"Visibility of toasts"},{name:"closable",type:"boolean",default:"true",description:"Show close button or not on the top right"},{name:"title",type:"string | ReactNode",description:"Toast title"},{name:"extra",type:"string | ReactNode",description:"An extra message on the top right"},{name:"icon",type:"string | ReactNode",description:"An image on the top left"},{name:"iconSize",type:"number",default:"20",description:"Icon size"},{name:"autoHide",type:"boolean",default:"false",description:"Hide the toast automatically after a delay once show"},{name:"delay",type:"number",default:"3000",description:"A millisecond number for autoHide"},{name:"fade",type:"boolean",default:"true",description:"Enable fade animation when showing or hiding"},{name:"header",type:"string | ReactNode",description:"Customize the header for toasts(set null if you don't want to show the header)"},{name:"onClose",type:"Function",description:"Callback when the close button is clicked"}],p=function(){return a.createElement(a.Fragment,null,a.createElement(l.a,null,"API"),a.createElement(u.a,{title:"Toast",data:d}))};t.default=function(){return a.createElement(a.Fragment,null,a.createElement(l.a,null,"Toast"),a.createElement("div",null,"Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems. They’re built with flexbox, so they’re easy to align and position."),a.createElement(o.a,{title:"Basic example",component:a.createElement(r,null),source:'import * as React from "react";\nimport { Toast, Spinner } from "reap-ui";\n\nexport default () => (\n    <Toast\n        title="Bootstrap"\n        icon={<Spinner animation="border" size="sm" />}\n        extra="11 minutes ago"\n        closable\n        autoHide\n        visible\n        delay={3000}>\n        Hello, world! This is a toast message.\n    </Toast>\n);'},a.createElement("p",null,"To encourage extensible and predictable toasts, we recommend a header and body. Toast headers use ",a.createElement("code",null,"display: flex"),", allowing easy alignment of content."),a.createElement("p",null,"Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your “toasted” content and strongly encourage a dismiss button.")),a.createElement(o.a,{title:"Dismissing",component:a.createElement(m,null),source:'import * as React from "react";\nimport { Toast, Button } from "reap-ui";\nimport icon from "../../../assets/toast.svg";\n\nexport default () => {\n    const [visible, updateVisible] = React.useState(false);\n    const toggle = () => updateVisible(!visible);\n\n    return (\n        <>\n            <Button className="mb-3" onClick={toggle}>Toggle</Button>\n            <Toast\n                title="Bootstrap"\n                icon={icon}\n                extra="just now"\n                onClose={toggle}\n                visible={visible}\n                closable>\n                Hello, world! This is a toast message.\n            </Toast>\n        </>\n    );\n}'}),a.createElement(p,null))}}}]);