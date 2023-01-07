"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[101],{1101:(P,A,r)=>{r.r(A),r.d(A,{DashboardModule:()=>F});var o=r(9853),n=r(9653),l=r(1665),c=r(4004),t=r(4650),f=r(6895);let m=(()=>{class a{constructor(e){this._store=e,this.faculties$=this._store.pipe((0,n.Ys)(l.f.FACULTY),(0,c.U)(s=>new o.l(s).toArray())),this.publications$=this._store.pipe((0,n.Ys)(l.f.PUBLICATION),(0,c.U)(s=>new o.l(s).toArray())),this.researches$=this._store.pipe((0,n.Ys)(l.f.RESEARCH),(0,c.U)(s=>new o.l(s).toArray())),this.trainingAndSeminars$=this._store.pipe((0,n.Ys)(l.f.TRAINING_AND_SEMINARS),(0,c.U)(s=>new o.l(s).toArray()))}ngOnInit(){}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(n.yh))},a.\u0275cmp=t.Xpm({type:a,selectors:[["dashboard-top-cards"]],decls:41,vars:12,consts:[[1,"grid","w-full","min-w-0","grid-cols-1","gap-6","px-5","py-5","sm:grid-cols-2","md:grid-cols-4"],[1,"flex","flex-col","flex-auto","p-6","overflow-hidden","rounded-sm","bg-card"],[1,"flex","flex-col","items-center","mt-2"],[1,"font-bold","leading-none","tracking-tight","text-isat-blue","text-7xl","sm:text-8xl"],[1,"text-lg","font-medium","text-isat-blue"],[1,"flex","items-baseline","justify-center","w-full","mt-5","text-secondary"],[1,"font-medium","truncate","text-md"],[1,"font-bold","leading-none","tracking-tight","text-isat-orange","text-7xl","sm:text-8xl"],[1,"text-lg","font-medium","text-isat-orange"],[1,"font-bold","leading-none","tracking-tight","text-teal-500","text-7xl","sm:text-8xl"],[1,"text-lg","font-medium","text-teal-500"],[1,"font-bold","leading-none","tracking-tight","text-emerald-500","text-7xl","sm:text-8xl"],[1,"text-lg","font-medium","text-emerald-500","text"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._uU(4),t.ALo(5,"async"),t.qZA(),t.TgZ(6,"div",4),t._uU(7,"Faculties"),t.qZA(),t.TgZ(8,"div",5)(9,"div",6),t._uU(10," List of Registered Faculties in the System "),t.qZA()()()(),t.TgZ(11,"div",1)(12,"div",2)(13,"div",7),t._uU(14),t.ALo(15,"async"),t.qZA(),t.TgZ(16,"div",8),t._uU(17,"Publications"),t.qZA(),t.TgZ(18,"div",5)(19,"div",6),t._uU(20," List of Encoded Publications in the System "),t.qZA()()()(),t.TgZ(21,"div",1)(22,"div",2)(23,"div",9),t._uU(24),t.ALo(25,"async"),t.qZA(),t.TgZ(26,"div",10),t._uU(27,"Researches"),t.qZA(),t.TgZ(28,"div",5)(29,"div",6),t._uU(30," List of Added Researches in the System "),t.qZA()()()(),t.TgZ(31,"div",1)(32,"div",2)(33,"div",11),t._uU(34),t.ALo(35,"async"),t.qZA(),t.TgZ(36,"div",12),t._uU(37," Training & Seminars "),t.qZA(),t.TgZ(38,"div",5)(39,"div",6),t._uU(40," List of Training & Seminars in the System "),t.qZA()()()()()),2&e&&(t.xp6(4),t.hij(" ",t.lcZ(5,4,s.faculties$).length," "),t.xp6(10),t.hij(" ",t.lcZ(15,6,s.publications$).length," "),t.xp6(10),t.hij(" ",t.lcZ(25,8,s.researches$).length," "),t.xp6(10),t.hij(" ",t.lcZ(35,10,s.trainingAndSeminars$).length," "))},dependencies:[f.Ov]}),a})();var T=r(101),h=(()=>{return(a=h||(h={})).JANUARY="January",a.FEBRUARY="February",a.MARCH="March",a.APRIL="April",a.MAY="May",a.JUNE="June",a.JULY="July",a.AUGUST="August",a.SEPTEMBER="September",a.OCTOBER="October",a.NOVEMBER="November",a.DECEMBER="December",h;var a})(),x=r(3076);const p={stroke:{width:[3,0]},colors:["#269D8E"],labels:[],series:[{name:"Sales",data:Object.values(h).map(a=>({x:(0,x.a)(a),y:[Math.floor(100*Math.random())+10]}))}],chart:{height:450,type:"bar"},tooltip:{followCursor:!0,theme:"light"},xaxis:{axisBorder:{show:!1},axisTicks:{color:"var(--fuse-border)"},labels:{style:{colors:"var(--fuse-text-secondary)"}},tooltip:{enabled:!1}},yaxis:{labels:{offsetX:-16,style:{colors:"var(--fuse-text-secondary)"}}},legend:{show:!1},plotOptions:{bar:{columnWidth:"20%"}},dataLabels:{enabled:!1,enabledOnSeries:[0],background:{borderWidth:0}},grid:{borderColor:"var(--fuse-border)"},states:{hover:{filter:{type:"darken",value:.75}}}};var d=r(3036),u=r(8505),Z=r(1764),g=(()=>{return(a=g||(g={})).JANUARY="January",a.FEBRUARY="February",a.MARCH="March",a.APRIL="April",a.MAY="May",a.JUNE="June",a.JULY="July",a.AUGUST="August",a.SEPTEMBER="September",a.OCTOBER="October",a.NOVEMBER="November",a.DECEMBER="December",g;var a})(),U=r(6205);function O(a,i){if(1&a&&(t.ynx(0),t._UZ(1,"apx-chart",4),t.BQk()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("@slideInBottom",void 0)("chart",e.facultiesChart.chart)("colors",e.facultiesChart.colors)("dataLabels",e.facultiesChart.dataLabels)("grid",e.facultiesChart.grid)("labels",e.facultiesChart.labels)("legend",e.facultiesChart.legend)("plotOptions",e.facultiesChart.plotOptions)("series",e.facultiesChart.series)("states",e.facultiesChart.states)("stroke",e.facultiesChart.stroke)("tooltip",e.facultiesChart.tooltip)("xaxis",e.facultiesChart.xaxis)("yaxis",e.facultiesChart.yaxis)}}function D(a,i){if(1&a&&(t.ynx(0),t._UZ(1,"apx-chart",4),t.BQk()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("@slideInBottom",void 0)("chart",e.publicationsChart.chart)("colors",e.publicationsChart.colors)("dataLabels",e.publicationsChart.dataLabels)("grid",e.publicationsChart.grid)("labels",e.publicationsChart.labels)("legend",e.publicationsChart.legend)("plotOptions",e.publicationsChart.plotOptions)("series",e.publicationsChart.series)("states",e.publicationsChart.states)("stroke",e.publicationsChart.stroke)("tooltip",e.publicationsChart.tooltip)("xaxis",e.publicationsChart.xaxis)("yaxis",e.publicationsChart.yaxis)}}function L(a,i){if(1&a&&(t.ynx(0),t._UZ(1,"apx-chart",4),t.BQk()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("@slideInBottom",void 0)("chart",e.researchesChart.chart)("colors",e.researchesChart.colors)("dataLabels",e.researchesChart.dataLabels)("grid",e.researchesChart.grid)("labels",e.researchesChart.labels)("legend",e.researchesChart.legend)("plotOptions",e.researchesChart.plotOptions)("series",e.researchesChart.series)("states",e.researchesChart.states)("stroke",e.researchesChart.stroke)("tooltip",e.researchesChart.tooltip)("xaxis",e.researchesChart.xaxis)("yaxis",e.researchesChart.yaxis)}}function R(a,i){if(1&a&&(t.ynx(0),t._UZ(1,"apx-chart",4),t.BQk()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("@slideInBottom",void 0)("chart",e.trainingAndSeminarsChart.chart)("colors",e.trainingAndSeminarsChart.colors)("dataLabels",e.trainingAndSeminarsChart.dataLabels)("grid",e.trainingAndSeminarsChart.grid)("labels",e.trainingAndSeminarsChart.labels)("legend",e.trainingAndSeminarsChart.legend)("plotOptions",e.trainingAndSeminarsChart.plotOptions)("series",e.trainingAndSeminarsChart.series)("states",e.trainingAndSeminarsChart.states)("stroke",e.trainingAndSeminarsChart.stroke)("tooltip",e.trainingAndSeminarsChart.tooltip)("xaxis",e.trainingAndSeminarsChart.xaxis)("yaxis",e.trainingAndSeminarsChart.yaxis)}}function I(a,i){if(1&a&&(t.TgZ(0,"div",1)(1,"div")(2,"div",2),t._uU(3,"Faculties"),t.qZA(),t.YNc(4,O,2,14,"ng-container",3),t.ALo(5,"async"),t.qZA(),t.TgZ(6,"div")(7,"div",2),t._uU(8,"Publications"),t.qZA(),t.YNc(9,D,2,14,"ng-container",3),t.ALo(10,"async"),t.qZA(),t.TgZ(11,"div")(12,"div",2),t._uU(13,"Researches"),t.qZA(),t.YNc(14,L,2,14,"ng-container",3),t.ALo(15,"async"),t.qZA(),t.TgZ(16,"div")(17,"div",2),t._uU(18,"Training & Seminars"),t.qZA(),t.YNc(19,R,2,14,"ng-container",3),t.ALo(20,"async"),t.qZA()()),2&a){const e=t.oxw();t.xp6(4),t.Q6J("ngIf",t.lcZ(5,4,e.faculties$)),t.xp6(5),t.Q6J("ngIf",t.lcZ(10,6,e.publications$)),t.xp6(5),t.Q6J("ngIf",t.lcZ(15,8,e.researches$)),t.xp6(5),t.Q6J("ngIf",t.lcZ(20,10,e.trainingAndSeminars$))}}let b=(()=>{class a{constructor(e){this._store=e,this.facultiesChart={...p,colors:["#013366"]},this.publicationsChart={...p,colors:["#FFCA04"]},this.researchesChart={...p,colors:["#13B8A6"]},this.trainingAndSeminarsChart={...p,colors:["#15B881"]},this.ready=!1,this.faculties$=this._store.pipe((0,n.Ys)(l.f.FACULTY),(0,c.U)(s=>new o.l(s).toArray()),(0,u.b)(s=>this.facultiesChart.series[0]={name:"Faculties",data:this.toChart(s)})),this.publications$=this._store.pipe((0,n.Ys)(l.f.PUBLICATION),(0,c.U)(s=>new o.l(s).toArray()),(0,u.b)(s=>{this.publicationsChart.series[0]={name:"Publications",data:this.toChart(s)}})),this.researches$=this._store.pipe((0,n.Ys)(l.f.RESEARCH),(0,c.U)(s=>new o.l(s).toArray()),(0,u.b)(s=>this.researchesChart.series[0]={name:"Researches",data:this.toChart(s)})),this.trainingAndSeminars$=this._store.pipe((0,n.Ys)(l.f.TRAINING_AND_SEMINARS),(0,c.U)(s=>new o.l(s).toArray()),(0,u.b)(s=>this.trainingAndSeminarsChart.series[0]={name:"Training & Seminars",data:this.toChart(s)}))}ngOnInit(){this._store.dispatch(d.S.FACULTY.LOAD()),this._store.dispatch(d.S.PUBLICATION.LOAD()),this._store.dispatch(d.S.RESEARCH.LOAD()),this._store.dispatch(d.S.TRAINING_AND_SEMINARS.LOAD()),setTimeout(()=>{this.ready=!0},2e3)}toChart(e){let s=Object.values(g).map(C=>({x:(0,x.a)(C),y:[0]}));return e.forEach(C=>{const w=Z(C.createdAt).format("MMM"),v=s.findIndex($=>$.x===w);s[v].y[0]=s[v].y[0]+1}),s}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(n.yh))},a.\u0275cmp=t.Xpm({type:a,selectors:[["dashboard-top-charts"]],decls:1,vars:1,consts:[["class","grid w-full gap-10 p-10 bg-white md:grid-cols-2",4,"ngIf"],[1,"grid","w-full","gap-10","p-10","bg-white","md:grid-cols-2"],[1,"text-3xl","font-bold"],[4,"ngIf"],[1,"w-full","h-[50vh]",3,"chart","colors","dataLabels","grid","labels","legend","plotOptions","series","states","stroke","tooltip","xaxis","yaxis"]],template:function(e,s){1&e&&t.YNc(0,I,21,12,"div",0),2&e&&t.Q6J("ngIf",s.ready)},dependencies:[f.O5,U.x,f.Ov],data:{animation:[...T.x]}}),a})();var N=r(2235);let y=(()=>{class a{constructor(e){this._store=e}ngOnInit(){this._store.dispatch(d.S.FACULTY.LOAD()),this._store.dispatch(d.S.RESEARCH.LOAD()),this._store.dispatch(d.S.PUBLICATION.LOAD()),this._store.dispatch(d.S.TRAINING_AND_SEMINARS.LOAD())}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(n.yh))},a.\u0275cmp=t.Xpm({type:a,selectors:[["dashboard"]],decls:4,vars:0,consts:[[1,"w-full"],["title","Dashboard","subtitle","Here are the list of analytical data on the system","icon","mat_outline:dashboard"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-header",1)(2,"dashboard-top-cards")(3,"dashboard-top-charts"),t.qZA())},dependencies:[N.P,m,b]}),a})();var B=r(2671),Y=r(6806);const _=[B.m,Y.Bz.forChild([{path:"",component:y}])];let F=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[_]}),a})()}}]);