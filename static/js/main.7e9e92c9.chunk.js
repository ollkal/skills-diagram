(this["webpackJsonpskills-diagram"]=this["webpackJsonpskills-diagram"]||[]).push([[0],{198:function(e,n,t){},199:function(e,n,t){},205:function(e,n,t){},206:function(e,n,t){},207:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),i=t(21),c=t.n(i),s=(t(90),t(91),t(17)),r=t(82),o=(t(198),t(225)),u=t(222),d=(t(199),t(2)),j=function(e){var n=e.item,t=e.onChange,a=l.a.useState(n.value),i=Object(s.a)(a,2),c=i[0],r=i[1];return Object(d.jsxs)("div",{className:"CompetenceSlider",children:[Object(d.jsx)(u.a,{children:n.skill}),Object(d.jsx)(u.a,{variant:"caption",display:"block",gutterBottom:!0,children:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."}),Object(d.jsx)(o.a,{id:n.skill,defaultValue:0,value:c,valueLabelDisplay:"auto","aria-labelledby":"discrete-slider",marks:[{value:0,label:"0%"},{value:100,label:"100%"}],min:0,max:100,onChangeCommitted:t(n.skill),onChange:function(e,n){r(n)}})]},n.skill)},b=(t(205),function(e){var n=e.list,t=e.onChange;return Object(d.jsxs)("div",{className:"CompetenceList",children:[Object(d.jsx)("h3",{children:"Rate my skills"}),n.map((function(e){return Object(d.jsx)(j,{item:e,onChange:t},e.skill)}))]})}),m=(t(206),function(){var e=Object(a.useState)(""),n=Object(s.a)(e,2),t=n[0],l=n[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"NameForm",children:Object(d.jsx)("input",{type:"text",value:t,placeholder:"Enter your name",onChange:function(e){return l(e.target.value)}})})})}),v=t(81),f=t(224),h=function(e){var n=e.name,t=e.onChange,a=e.onAdd;return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"text",placeholder:"New skill",value:n,onChange:t}),Object(d.jsx)(f.a,{variant:"contained",color:"primary",onClick:a,children:"Add"})]})},p={scale:{ticks:{beginAtZero:!0},min:0,max:100},responsive:!0},O=function(){var e=l.a.useState(v.a),n=Object(s.a)(e,2),t=n[0],a=n[1],i=l.a.useState(""),c=Object(s.a)(i,2),o=c[0],u=c[1];return Object(d.jsx)("div",{className:"CompetencePage",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"menu-column",children:Object(d.jsxs)("div",{className:"menu-column-content",children:[Object(d.jsx)(m,{}),Object(d.jsx)(b,{list:t,onChange:function(e){return function(n,l){var i=t.slice();for(var c in i)if(i[c].skill===e){i[c].value=l;break}a(i)}},onRemove:function(e){var n=t.slice();for(var l in n)if(n[l].skill===e){n.splice(l,1);break}a(n)}}),Object(d.jsx)(h,{name:o,onChange:function(e){u(e.target.value)},onAdd:function(){var e=t.concat({skill:o,value:0});a(e),u("")}})]})}),Object(d.jsx)("div",{className:"column",children:Object(d.jsx)("div",{className:"radar-content ",children:t.filter((function(e){return e.value>0})).length>2&&Object(d.jsx)(r.a,{data:{labels:t.filter((function(e){return e.value>0})).map((function(e){return e.skill})),datasets:[{label:"% of skills",data:t.filter((function(e){return e.value>0})).map((function(e){return e.value})),backgroundColor:"rgba(255, 99, 132, 0.2)",borderColor:"rgba(255, 99, 132, 1)",borderWidth:1}]},options:p})})})]})})};var x=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("div",{className:"App-Content",children:Object(d.jsx)(O,{})})})},g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,227)).then((function(n){var t=n.getCLS,a=n.getFID,l=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),a(e),l(e),i(e),c(e)}))};c.a.render(Object(d.jsx)(l.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root")),g()},81:function(e){e.exports=JSON.parse('{"a":[{"skill":"Frontend","value":0},{"skill":"Backend","value":0},{"skill":"Cloud","value":0},{"skill":"Azure","value":0},{"skill":"iOS/Andorid","value":0},{"skill":"CI/CD","value":0},{"skill":"Devops","value":0}]}')},90:function(e,n,t){},91:function(e,n,t){}},[[207,1,2]]]);
//# sourceMappingURL=main.7e9e92c9.chunk.js.map