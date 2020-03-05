(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{279:function(e,a,n){"use strict";n.d(a,"a",(function(){return l}));var t=n(0),r=n(2);function l(e){var a=e.tag,n=void 0===a?"h2":a,l=e.className,i=e.children;return t.createElement(n,{className:Object(r.b)(l,"doc-heading")},i)}},280:function(e,a,n){"use strict";n.d(a,"a",(function(){return i}));var t=n(0),r=n(277),l=n(278);function i(e){var a=e.code;return t.createElement(t.Fragment,null,t.createElement("div",{className:"position-relative"},t.createElement("button",{className:"btn-clipboard",onClick:function(){var e=document.createElement("textarea");e.value=a,e.style.cssText="position: absolute; left: -10000px;",document.body.append(e),e.select(),document.execCommand("copy"),e.remove()}},"copy")),t.createElement("div",{className:"code-container",style:{marginTop:10}},t.createElement(r.a,{language:"javascript",style:l.a},a)))}},281:function(e,a,n){"use strict";n.d(a,"a",(function(){return l}));var t=n(0),r=n(279);function l(e){var a=e.data,n=e.title;return t.createElement("div",null,n&&t.createElement(r.a,{tag:"h3"},n),t.createElement("div",{className:"api-container"},t.createElement("table",{className:"table table-bordered table-striped props-table"},t.createElement("thead",null,t.createElement("tr",null,t.createElement("th",null,"Name"),t.createElement("th",null,"Type"),t.createElement("th",null,"Default"),t.createElement("th",null,"Description"))),t.createElement("tbody",null,a.map((function(e){return t.createElement("tr",{key:e.name},t.createElement("td",null,e.name),t.createElement("td",null,e.type),t.createElement("td",{className:"default-value"},e.default||"-"),t.createElement("td",null,e.description))}))))))}},282:function(e,a,n){"use strict";n.d(a,"a",(function(){return c}));var t=n(0),r=n(280),l=n(279),i=n(2);function c(e){var a=e.component,n=e.className,c=e.source,d=e.title,o=e.children;return t.createElement(t.Fragment,null,d&&t.createElement(l.a,{tag:"h3"},d),o,t.createElement("div",{className:Object(i.b)(n,"bd-example")},a,c&&t.createElement(r.a,{code:c})))}},295:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n(19),l=function(){return t.createElement(t.Fragment,null,t.createElement("h1",null,"Example heading",t.createElement(r.c,{variant:"secondary"},"New")),t.createElement("h2",null,"Example heading",t.createElement(r.c,{variant:"secondary"},"New")),t.createElement("h3",null,"Example heading",t.createElement(r.c,{variant:"secondary"},"New")),t.createElement("h4",null,"Example heading",t.createElement(r.c,{variant:"secondary"},"New")),t.createElement("h5",null,"Example heading",t.createElement(r.c,{variant:"secondary"},"New")),t.createElement("h6",null,"Example heading",t.createElement(r.c,{variant:"secondary"},"New")))},i=function(){return t.createElement(r.e,null,"Profile ",t.createElement(r.c,{variant:"light"},"9"),t.createElement("span",{className:"sr-only"},"unread messages"))},c=function(){return t.createElement(t.Fragment,null,t.createElement(r.c,{variant:"primary"},"Primary"),t.createElement(r.c,{variant:"secondary"},"Secondary"),t.createElement(r.c,{variant:"success"},"Success"),t.createElement(r.c,{variant:"danger"},"Danger"),t.createElement(r.c,{variant:"warning"},"Warning"),t.createElement(r.c,{variant:"info"},"Info"),t.createElement(r.c,{variant:"light"},"Light"),t.createElement(r.c,{variant:"dark"},"Dark"))},d=function(){return t.createElement(t.Fragment,null,t.createElement(r.c,{variant:"primary",pill:!0},"Primary"),t.createElement(r.c,{variant:"secondary",pill:!0},"Secondary"),t.createElement(r.c,{variant:"success",pill:!0},"Success"),t.createElement(r.c,{variant:"danger",pill:!0},"Danger"),t.createElement(r.c,{variant:"warning",pill:!0},"Warning"),t.createElement(r.c,{variant:"info",pill:!0},"Info"),t.createElement(r.c,{variant:"light",pill:!0},"Light"),t.createElement(r.c,{variant:"dark",pill:!0},"Dark"))},o=function(){return t.createElement(t.Fragment,null,t.createElement(r.c,{variant:"primary",href:"#"},"Primary"),t.createElement(r.c,{variant:"secondary",href:"#"},"Secondary"),t.createElement(r.c,{variant:"success",href:"#"},"Success"),t.createElement(r.c,{variant:"danger",href:"#"},"Danger"),t.createElement(r.c,{variant:"warning",href:"#"},"Warning"),t.createElement(r.c,{variant:"info",href:"#"},"Info"),t.createElement(r.c,{variant:"light",href:"#"},"Light"),t.createElement(r.c,{variant:"dark",href:"#"},"Dark"))},m=n(281),s=n(279),g=[{name:"variant",type:'"primary" |\n        "secondary" |\n        "success" |\n        "danger" |\n        "warning" |\n        "info" |\n        "dark" |\n        "light"',default:"",description:"Appearance of a Badge"},{name:"href",type:"string",default:"",description:"Render as 'a' tag with href if passed"},{name:"pill",type:"boolean",default:"false",description:"Make badges more rounded (with a larger border-radius and additional horizontal padding)"}],u=function(){return t.createElement(t.Fragment,null,t.createElement(s.a,null,"API"),t.createElement(m.a,{title:"Badge",data:g}))},p=n(282);a.default=function(){return t.createElement(t.Fragment,null,t.createElement(s.a,null,"Badges"),t.createElement(p.a,{component:t.createElement(l,null),source:'import * as React from "react";\nimport { Badge } from "reap-ui";\n\nexport default () => (\n    <>\n        <h1>Example heading<Badge variant="secondary">New</Badge></h1>\n        <h2>Example heading<Badge variant="secondary">New</Badge></h2>\n        <h3>Example heading<Badge variant="secondary">New</Badge></h3>\n        <h4>Example heading<Badge variant="secondary">New</Badge></h4>\n        <h5>Example heading<Badge variant="secondary">New</Badge></h5>\n        <h6>Example heading<Badge variant="secondary">New</Badge></h6>\n    </>\n);'},t.createElement("div",null,"Badges scale to match the size of the immediate parent element by using relative font sizing and em units.")),t.createElement(p.a,{component:t.createElement(i,null),source:'import * as React from "react";\nimport { Badge, Button } from "reap-ui";\n\nexport default () => (\n    <Button>\n        Profile <Badge variant="light">9</Badge>\n        <span className="sr-only">unread messages</span>\n    </Button>\n);'},t.createElement("div",null,"Badges can be used as part of links or buttons to provide a counter.")),t.createElement("div",null,"Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies. While the styling of badges provides a visual cue as to their purpose, these users will simply be presented with the content of the badge. Depending on the specific situation, these badges may seem like random additional words or numbers at the end of a sentence, link, or button. Unless the context is clear (as with the “Notifications” example, where it is understood that the “4” is the number of notifications), consider including additional context with a visually hidden piece of additional text."),t.createElement(p.a,{title:"Contextual variations",className:"badge-demo",component:t.createElement(c,null),source:'import * as React from "react";\nimport { Badge } from "reap-ui";\n\nexport default () => (\n    <>\n        <Badge variant="primary">Primary</Badge>\n        <Badge variant="secondary">Secondary</Badge>\n        <Badge variant="success">Success</Badge>\n        <Badge variant="danger">Danger</Badge>\n        <Badge variant="warning">Warning</Badge>\n        <Badge variant="info">Info</Badge>\n        <Badge variant="light">Light</Badge>\n        <Badge variant="dark">Dark</Badge>\n    </>\n);'}),t.createElement(p.a,{title:"Pill badges",className:"badge-demo",component:t.createElement(d,null),source:'import * as React from "react";\nimport { Badge } from "reap-ui";\n\nexport default () => (\n    <>\n        <Badge variant="primary" pill>Primary</Badge>\n        <Badge variant="secondary" pill>Secondary</Badge>\n        <Badge variant="success" pill>Success</Badge>\n        <Badge variant="danger" pill>Danger</Badge>\n        <Badge variant="warning" pill>Warning</Badge>\n        <Badge variant="info" pill>Info</Badge>\n        <Badge variant="light" pill>Light</Badge>\n        <Badge variant="dark" pill>Dark</Badge>\n    </>\n);'}),t.createElement(p.a,{title:"Links",className:"badge-demo",component:t.createElement(o,null),source:'import * as React from "react";\nimport { Badge } from "reap-ui";\n\nexport default () => (\n    <>\n        <Badge variant="primary" href="#">Primary</Badge>\n        <Badge variant="secondary" href="#">Secondary</Badge>\n        <Badge variant="success" href="#">Success</Badge>\n        <Badge variant="danger" href="#">Danger</Badge>\n        <Badge variant="warning" href="#">Warning</Badge>\n        <Badge variant="info" href="#">Info</Badge>\n        <Badge variant="light" href="#">Light</Badge>\n        <Badge variant="dark" href="#">Dark</Badge>\n    </>\n);'}),t.createElement(u,null))}}}]);