(this.webpackJsonpepicforge=this.webpackJsonpepicforge||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(5),o=n.n(r),s=(n(15),n(6)),i=n(7),u=n(10),p=n(9),h=(n(16),n(17),n(3)),f=n.n(h),j=n(8),d=n(4),l=(n(19),n(0)),b=function(e){var t="21117260-189b4a81022ca1e552dbbde37",n=Object(c.useState)({}),a=Object(d.a)(n,2),r=a[0],o=a[1],s=Object(c.useState)(!1),i=Object(d.a)(s,2),u=(i[0],i[1]);function p(){return(p=Object(j.a)(f.a.mark((function n(){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://pixabay.com/api/?key=".concat(t,"&q=").concat(encodeURIComponent(e.weapon.Name)));case 2:n.sent.json().then((function(e){return o(e.hits[0].webformatURL)})).catch((function(e){return u("https://i.pinimg.com/564x/42/0d/e5/420de5b55490ea3c411f4d38fef74d45.jpg")}));case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){p.apply(this,arguments)}()})),Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("img",{alt:"monster",onError:function(e){e.target.onerror=null,e.target.src="https://i.pinimg.com/564x/42/0d/e5/420de5b55490ea3c411f4d38fef74d45.jpg"},src:JSON.stringify(r).replace(/"/g,"")}),Object(l.jsx)("h2",{children:e.weapon.Name}),Object(l.jsxs)("p",{children:[" ",e.weapon.Cost]}),Object(l.jsxs)("p",{children:[" ",e.weapon.Damage]})]})},m=function(e){return Object(l.jsx)("div",{className:"card-list",children:e.weapons.map((function(e){return Object(l.jsx)(b,{weapon:e},Math.random())}))})},O=(n(21),function(e){var t=e.placeholder,n=e.handleChange;return Object(l.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),g=(n(22),function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={weapons:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://raw.githubusercontent.com/jcquinlan/dnd5-weapons-json/master/json/martialMeleeWeapons.json").then((function(e){return e.json()})).then((function(t){return e.setState({weapons:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.weapons,c=t.searchField,a=n.filter((function(e){return e.Name.toLowerCase().includes(c.toLowerCase())}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Epicforge"}),Object(l.jsx)(O,{placeholder:"Search a Weapon",handleChange:function(t){return e.setState({searchField:t.target.value})}}),Object(l.jsx)(m,{weapons:a})]})}}]),n}(c.Component)),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),w()}},[[26,1,2]]]);
//# sourceMappingURL=main.f66882d2.chunk.js.map