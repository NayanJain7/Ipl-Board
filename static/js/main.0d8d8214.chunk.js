(this.webpackJsonpiplfrontend=this.webpackJsonpiplfrontend||[]).push([[0],{29:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(20),r=a.n(s),i=(a(29),a(30),a(3)),l=a(2),j=a(4),o=a.n(j),d=a(7),h=a(6),m=(a(32),a(0)),b=function(e){var t=e.teamName,a=e.match;if(!a)return null;var c=a.team1===t?a.team2:a.team1,n=t===a.matchWinner;return Object(m.jsxs)("div",{className:n?"MatchDetailCard won-card":"MatchDetailCard loss-card",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{className:"vs",children:"Vs"}),Object(m.jsx)("h1",{children:Object(m.jsxs)(i.b,{to:"/Ipl-Board/teams/".concat(c),children:[" ",c]})}),Object(m.jsx)("h2",{className:"match-date",children:a.date}),Object(m.jsx)("h3",{className:"match-venue",children:a.venue}),Object(m.jsxs)("h3",{className:"match-result",children:[a.matchWinner," won by ",a.resultMargin," ",a.result]})]}),Object(m.jsxs)("div",{className:"additional-detail",children:[Object(m.jsx)("h3",{children:"First Innings"}),Object(m.jsx)("p",{children:a.team1}),Object(m.jsx)("h3",{children:"Second Innings"}),Object(m.jsx)("p",{children:a.team2}),Object(m.jsx)("h3",{children:"Man of the Match"}),Object(m.jsx)("p",{children:a.playerOfMatch}),Object(m.jsx)("h3",{children:"Umpires"}),Object(m.jsxs)("p",{children:[a.umpire1,", ",a.umpire2]})]})]})},u=(a(39),function(e){var t=e.teamName,a=[],n=Object(c.useState)([]),s=Object(h.a)(n,2),r=s[0],l=s[1];Object(c.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://ipl-dashboard-api.herokuapp.com","/team/all-wins/").concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:c=e.sent,l(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]);for(var j="2020";j>="2008";j--)0!==r[j]&&a.push(j);return Object(m.jsx)("ol",{className:"YearSelector",children:a.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)(i.b,{to:"/Ipl-Board/teams/".concat(t,"/matches/").concat(e),children:e})},e)}))})}),x=(a(40),function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),a=t[0],n=t[1],s=Object(l.f)(),r=s.teamName,i=s.year;return Object(c.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://ipl-dashboard-api.herokuapp.com","/team/").concat(r,"/matches/?year=").concat(i));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r,i]),a.length?Object(m.jsxs)("div",{className:"MatchPage",children:[Object(m.jsxs)("div",{className:"year-selector",children:[Object(m.jsx)("h3",{children:" Select Year "}),Object(m.jsx)(u,{teamName:r})]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("h1",{className:"page-heading",children:[r," matches in ",i]}),a.map((function(e){return Object(m.jsx)(b,{teamName:r,match:e},e.id)}))]})]}):Object(m.jsx)("h1",{style:{textAlign:"center",marginTop:"14%"},children:Object(m.jsx)("b",{children:"Team Not Found"})})}),O=(a(41),function(e){var t=e.teamName,a=e.match,c=a.team1===t?a.team2:a.team1,n=t===a.matchWinner;return Object(m.jsxs)("div",{className:n?"MatchSmallCards won-card":"MatchSmallCards loss-card",children:[Object(m.jsx)("h2",{className:"vs",children:"vs"}),Object(m.jsx)("h3",{className:"opponent-team",children:Object(m.jsxs)(i.b,{to:"/Ipl-Board/teams/".concat(c),children:[" ",c]})}),Object(m.jsxs)("p",{className:"match-result",children:[a.matchWinner," won by ",a.resultMargin," ",a.result]}),Object(m.jsxs)("p",{className:"match-date",children:["Date : \xa0",a.date]}),Object(m.jsxs)("p",{className:"match-venue",children:["Venue : \xa0\xa0",a.venue]})]})}),p=(a(42),a(13)),f=function(e){var t=e.team;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(p.a,{width:"400px",height:"300px",chartType:"PieChart",fill:"red",loader:Object(m.jsx)("div",{children:"Loading Chart"}),data:[["Teams","Win Lose "],["Losses",t.totalMatch-t.totalWins],["Wins",t.totalWins]],options:{legend:"none",pieSliceText:"label",title:"Wins / Looses",backgroundColor:"#1F2739",pieStartAngle:100,titleTextStyle:{color:"#FFF"},slices:{0:{color:"#dc3912"},1:{color:"#009688"}}},rootProps:{"data-testid":"4"}})})},v=function(){var e=Object(c.useState)({matches:[]}),t=Object(h.a)(e,2),a=t[0],n=t[1],s=Object(l.f)().teamName;return Object(c.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://ipl-dashboard-api.herokuapp.com","/team/").concat(s));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),a.teamName?Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"TeamPage",children:[Object(m.jsx)("div",{className:"team-name-section",children:Object(m.jsx)("h1",{className:"team-name",children:a.teamName})}),Object(m.jsx)(f,{team:a}),Object(m.jsxs)("div",{className:"match-detailed-section",children:[Object(m.jsx)("h2",{children:"Latest Matches"}),Object(m.jsx)(b,{teamName:a.teamName,match:a.matches[0]})]}),a.matches.slice(1).map((function(e){return Object(m.jsx)(O,{teamName:a.teamName,match:e},e.id)})),Object(m.jsx)("div",{className:"more-link",children:Object(m.jsx)(i.b,{to:"/Ipl-Board/teams/".concat(s,"/matches/").concat(Number.parseInt(a.matches[0].date.substr(0,4))),children:"More >"})})]})}):Object(m.jsx)("h1",{style:{textAlign:"center",marginTop:"14%"},children:Object(m.jsx)("b",{children:"Team Not Found"})})},N=(a(43),function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),r=Object(h.a)(s,2),j=r[0],b=r[1],u=Object(l.f)();return Object(c.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://ipl-dashboard-api.herokuapp.com","/team/all-teamname"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]),Object(m.jsxs)("div",{className:"SearchBar",children:[Object(m.jsx)("div",{className:"Card",children:Object(m.jsxs)("div",{className:"CardInner",children:[Object(m.jsx)("label",{children:"Search for your favourite team"}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("div",{className:"Icon",children:Object(m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#657789",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-search",children:[Object(m.jsx)("circle",{cx:"11",cy:"11",r:"8"}),Object(m.jsx)("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})}),Object(m.jsx)("div",{className:"InputContainer",children:Object(m.jsx)("input",{type:"text",placeholder:"It just can't be CSK...",value:j,onChange:function(e){return b(e.target.value)}})})]})]})}),Object(m.jsx)("div",{hidden:!j,className:"suggestions",children:a.map((function(e,t){return e.teamName.toLowerCase().includes(j.toLowerCase().trim())?Object(m.jsx)(i.b,{to:void 0===u.year?"/Ipl-Board/teams/".concat(e.teamName):"/Ipl-Board/teams/".concat(e.teamName,"/matches/").concat(Number(e.latestPlayedYear.substr(0,4))),children:Object(m.jsx)("p",{className:"item",onClick:function(){return b("")},children:e.teamName})},t):null}))})]})}),g=(a(44),function(e){var t=e.teamName;return Object(m.jsx)("div",{className:"TeamTile",children:Object(m.jsx)("h1",{children:Object(m.jsx)(i.b,{to:"/Ipl-Board/teams/".concat(t),children:t})})})}),y=a(23),w=a.n(y),k=function(){var e=Object(c.useRef)(null);return Object(c.useEffect)((function(){var t=new w.a(e.current,{strings:["Browse your favourite team!","See your favourite team's records ","See your favourite team's performance "],typeSpeed:80,backSpeed:90,loop:!0},[]);return function(){t.destroy()}}),[]),Object(m.jsx)("h1",{children:Object(m.jsx)("span",{ref:e})})},I=(a(45),function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://ipl-dashboard-api.herokuapp.com","/team/all-teamname"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]),Object(m.jsxs)("div",{className:"HomePage",children:[Object(m.jsx)("div",{className:"header-section",children:Object(m.jsx)("h1",{children:"IPL Dashboard"})}),Object(m.jsx)("div",{className:"typing-text",children:Object(m.jsx)(k,{})}),Object(m.jsx)("div",{className:"team-grid",children:a.map((function(e,t){return Object(m.jsx)(g,{teamName:e.teamName},t)}))})]})}),S=(a(46),function(){return Object(m.jsx)("div",{className:"error-content",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-md-12 ",children:Object(m.jsxs)("div",{className:"error-text",children:[Object(m.jsx)("h1",{className:"error",children:"404 Error"}),Object(m.jsxs)("div",{className:"im-sheep",children:[Object(m.jsxs)("div",{className:"top",children:[Object(m.jsx)("div",{className:"body"}),Object(m.jsxs)("div",{className:"head",children:[Object(m.jsx)("div",{className:"im-eye one"}),Object(m.jsx)("div",{className:"im-eye two"}),Object(m.jsx)("div",{className:"im-ear one"}),Object(m.jsx)("div",{className:"im-ear two"})]})]}),Object(m.jsxs)("div",{className:"im-legs",children:[Object(m.jsx)("div",{className:"im-leg"}),Object(m.jsx)("div",{className:"im-leg"}),Object(m.jsx)("div",{className:"im-leg"}),Object(m.jsx)("div",{className:"im-leg"})]})]}),Object(m.jsx)("h4",{id:"oops",children:"Oops! This page Could Not Be Found!"}),Object(m.jsx)("p",{id:"sorry",children:"Sorry bit the page you are looking for does not exist, have been removed or name changed."}),Object(m.jsx)(i.b,{to:"/Ipl-Board",className:"btn btn-primary btn-round",children:"Go to homepage"})]})})})})})}),B=(a(47),function(){return Object(m.jsx)("div",{className:"NavBar",children:Object(m.jsx)("nav",{children:Object(m.jsxs)("ul",{className:"nav-type",children:[Object(m.jsx)("li",{children:Object(m.jsx)(i.b,{className:"active",to:"/Ipl-Board",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)(i.b,{className:"active",to:"/Ipl-Board/teams/Mumbai%20Indians",children:"Teams"})}),Object(m.jsx)("li",{children:Object(m.jsx)(i.b,{className:"active",to:"/Ipl-Board/teams/Mumbai%20Indians/matches/2020",children:"Matches"})}),Object(m.jsx)("li",{children:Object(m.jsx)(i.b,{className:"active",to:"/Ipl-Board/teams/performance/Mumbai%20Indians/",children:"Performance"})})]})})})}),T=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),a=t[0],n=t[1],s=Object(l.f)().teamName;Object(c.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://ipl-dashboard-api.herokuapp.com","/team/all-wins/").concat(s));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]);var r=[["Year","Wins"]];for(var i in a)r.push(["".concat(i),a[i]]);return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(p.a,{width:"600px",height:"320px",chartType:"BarChart",loader:Object(m.jsx)("div",{children:"Loading Chart"}),data:r,options:{subtitle:"Matches, Wins: 2008-2020",title:"Team Performance\n                        Matches, Wins: 2008-2020",animation:{duration:1e3,easing:"out",startup:!0,statusbar:!0},bar:{groupWidth:"90%"}},rootProps:{"data-testid":"3"}})})},M=a(24),C=(a(48),function(e){var t=e.allteam,a=function(e){var t="";if("Sunrisers Hyderabad"===e)t="SRH";else{var a,c=Object(M.a)(e);try{for(c.s();!(a=c.n()).done;){var n=a.value;n===n.toUpperCase()&&" "!==n&&(t+=n)}}catch(s){c.e(s)}finally{c.f()}}return t};return Object(m.jsx)("div",{className:"TeamButton",children:t.map((function(e,t){return Object(m.jsx)(i.b,{to:"/Ipl-Board/teams/performance/".concat(e.teamName),children:Object(m.jsx)("button",{className:"big-button",children:a(e.teamName)})},t)}))})}),W=(a(49),function(e){var t=e.teamName,a=Object(c.useState)([]),n=Object(h.a)(a,2),s=n[0],r=n[1];return Object(c.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://ipl-dashboard-api.herokuapp.com","/All-Team-History"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("h1",{style:{marginTop:"0.52em"},children:[Object(m.jsx)("span",{className:"blue",children:"<"}),t,Object(m.jsx)("span",{className:"blue",children:">"})," ",Object(m.jsx)("span",{className:"yellow",children:"Performance"})]}),Object(m.jsx)("div",{className:"TeamTable",children:Object(m.jsxs)("table",{className:"container",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:Object(m.jsx)("h1",{style:{textAlign:"center"},children:"Team Name"})}),Object(m.jsx)("th",{style:{textAlign:"center"},children:Object(m.jsx)("h1",{children:"Total Matches"})}),Object(m.jsx)("th",{children:Object(m.jsx)("h1",{style:{textAlign:"center"},children:"Total Wins"})}),Object(m.jsx)("th",{style:{textAlign:"center"},children:Object(m.jsx)("h1",{children:"Total Lose"})}),Object(m.jsx)("th",{children:Object(m.jsx)("h1",{children:"Last few Matches"})})]})}),Object(m.jsx)("tbody",{children:s.map((function(e){return Object(m.jsxs)("tr",{style:{textAlign:"center"},children:[Object(m.jsx)("td",{children:Object(m.jsx)(i.b,{className:"team-link",to:"/Ipl-Board/teams/".concat(e.teamName),children:e.teamName})}),Object(m.jsx)("td",{children:e.totalMatch}),Object(m.jsx)("td",{children:e.totalWins}),Object(m.jsx)("td",{children:e.totalMatch-e.totalWins}),Object(m.jsx)("td",{children:e.matches.map((function(t,a){return Object(m.jsx)("span",{style:{padding:"5px 5px"},children:e.teamName===t.matchWinner?Object(m.jsx)("i",{className:"fa fa-trophy",style:{color:"#5cb85c"},"aria-hidden":"true"}):Object(m.jsx)("i",{className:"fa fa-trophy",style:{color:"#d9534f"},"aria-hidden":"true"})},a)}))})]},e.id)}))})]})})]})}),F=(a(50),function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),a=t[0],n=t[1],s=Object(l.f)().teamName;return Object(c.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://ipl-dashboard-api.herokuapp.com","/team/all-teamname"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(m.jsxs)("div",{className:"TeamPerformPage",children:[Object(m.jsx)(C,{allteam:a}),Object(m.jsx)("div",{className:"bar-chart",children:Object(m.jsx)(T,{})}),Object(m.jsx)("div",{className:"team-table",children:Object(m.jsx)(W,{teamName:s})})]})}),L=(a(51),function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("footer",{children:[Object(m.jsx)("p",{children:"Made with \u2764\ufe0f in India"}),Object(m.jsxs)("ul",{className:"contact-us",children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"mailto:jainnayan128@gmail.com",rel:"noreferrer",target:"_blank",children:Object(m.jsx)("i",{className:"fa fa-envelope",style:{fontSize:"20px"},"aria-hidden":"true"})})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"https://github.com/NayanJain7/",rel:"noreferrer",target:"_blank",children:Object(m.jsx)("i",{className:"fa fa-github",style:{fontSize:"20px"},"aria-hidden":"true"})})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"https://www.linkedin.com/in/nayan-jain-1198021a8/",rel:"noreferrer",target:"_blank",children:Object(m.jsx)("i",{className:"fa fa-linkedin",style:{fontSize:"20px"},"aria-hidden":"true"})})})]}),Object(m.jsxs)("p",{className:"data-source",children:["Source of Data:"," ",Object(m.jsx)("a",{href:"https://www.kaggle.com/patrickb1912/ipl-complete-dataset-20082020/",rel:"noreferrer",target:"_blank",children:"Kaggle"})]}),Object(m.jsx)("p",{children:"Note: Ipl Data is available from 2008 - 2020."})]})})});var P=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)(i.a,{children:[Object(m.jsx)(B,{}),Object(m.jsxs)(l.c,{children:[Object(m.jsx)(l.a,{exact:!0,path:"/Ipl-Board",children:Object(m.jsx)(I,{})}),Object(m.jsxs)(l.a,{exact:!0,path:"/Ipl-Board/teams/:teamName",children:[Object(m.jsx)(N,{}),Object(m.jsx)(v,{})]}),Object(m.jsxs)(l.a,{exact:!0,path:"/Ipl-Board/teams/:teamName/matches/:year",children:[Object(m.jsx)(N,{}),Object(m.jsx)(x,{})]}),Object(m.jsx)(l.a,{exact:!0,path:"/Ipl-Board/teams/performance/:teamName",children:Object(m.jsx)(F,{})}),Object(m.jsx)(l.a,{children:Object(m.jsx)(S,{})})]})]}),Object(m.jsx)(L,{})]})},E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,53)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(P,{})}),document.getElementById("root")),E()}},[[52,1,2]]]);
//# sourceMappingURL=main.0d8d8214.chunk.js.map