"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[623],{6623:(X,b,l)=>{l.r(b),l.d(b,{ProfileModule:()=>M});var g=l(9853),f=l(9653),c=l(3036),Z=l(1665),_=l(4004),t=l(4650),v=l(6806),T=l(2235),s=l(6895),p=l(5946),i=l(4006),m=l(9549),d=l(4144),h=l(4859);function I(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",8)(1,"button",9),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(2);return t.KtG(a.save())}),t._uU(2," Update Account "),t.qZA()()}}function F(o,r){if(1&o&&(t.TgZ(0,"div",1)(1,"div",2),t._uU(2,"Account"),t.qZA(),t.TgZ(3,"form",3)(4,"mat-form-field")(5,"mat-label"),t._uU(6,"Email"),t.qZA(),t._UZ(7,"input",4),t.qZA(),t.TgZ(8,"mat-form-field")(9,"mat-label"),t._uU(10,"Password"),t.qZA(),t._UZ(11,"input",5),t.qZA(),t.TgZ(12,"mat-form-field")(13,"mat-label"),t._uU(14,"Phone"),t.qZA(),t._UZ(15,"input",6),t.qZA()(),t.YNc(16,I,3,0,"div",7),t.qZA()),2&o){const e=t.oxw();t.xp6(3),t.Q6J("formGroup",e.form),t.xp6(13),t.Q6J("ngIf",!e.form.disabled)}}let A=(()=>{class o{constructor(e,n){this._formBuilder=e,this._store=n,this.form=this._formBuilder.group({email:[""],password:[""],phone:[""],photoURL:[""]})}set setFaculty(e){this.form.setValue({email:e.email,password:e.password,phone:e.phone??"",photoURL:e.photoURL??""}),this.faculty=e}set setProfile(e){(this.faculty.id!==e?.id||(0,p.c)(e))&&this.form.disable()}ngOnInit(){}save(){this._store.dispatch(c.S.PROFILE.UPSERT({faculty:{...this.faculty,...this.form.value}}))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(i.qu),t.Y36(f.yh))},o.\u0275cmp=t.Xpm({type:o,selectors:[["profile-account"]],inputs:{setFaculty:["faculty","setFaculty"],setProfile:["profile","setProfile"]},decls:1,vars:1,consts:[["class","p-5 py-20 bg-white border-b",4,"ngIf"],[1,"p-5","py-20","bg-white","border-b"],[1,"mb-3","text-4xl","font-semibold"],[1,"grid","w-full","grid-cols-1","gap-x-5","md:grid-cols-3",3,"formGroup"],["formControlName","email","type","email","matInput",""],["formControlName","password","type","password","matInput",""],["formControlName","phone","type","tel","matInput",""],["class","flex",4,"ngIf"],[1,"flex"],["mat-button","",1,"ml-auto","mr-3","text-white","bg-isat-blue",3,"click"]],template:function(e,n){1&e&&t.YNc(0,F,17,2,"div",0),2&e&&t.Q6J("ngIf",!n.form.disabled)},dependencies:[i._Y,i.Fj,i.JJ,i.JL,s.O5,i.sg,i.u,m.KE,m.hX,d.Nt,h.lW]}),o})();var u=(()=>{return(o=u||(u={})).MALE="male",o.FEMALE="female",u;var o})(),q=l(4385),E=l(3238);function J(o,r){if(1&o&&(t.TgZ(0,"mat-option",10),t._uU(1),t.ALo(2,"titlecase"),t.qZA()),2&o){const e=r.$implicit;t.Q6J("value",e),t.xp6(1),t.Oqu(t.lcZ(2,2,e))}}function N(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",11)(1,"button",12),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.save())}),t._uU(2," Update Information "),t.qZA()()}}let y=(()=>{class o{constructor(e,n){this._formBuilder=e,this._store=n,this.genders=Object.values(u),this.form=this._formBuilder.group({first_name:[""],last_name:[""],middle_name:[""],date_of_birth:[""],sex:[u.MALE]})}set setFaculty(e){this.form.setValue({first_name:e.first_name,last_name:e.last_name,middle_name:e.middle_name??"",date_of_birth:e.date_of_birth??"",sex:e.sex??u.MALE}),this.faculty=e}set setProfile(e){(this.faculty.id!==e?.id||(0,p.c)(e))&&this.form.disable()}ngOnInit(){}save(){this._store.dispatch(c.S.PROFILE.UPSERT({faculty:{...this.faculty,...this.form.value}}))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(i.qu),t.Y36(f.yh))},o.\u0275cmp=t.Xpm({type:o,selectors:[["profile-information"]],inputs:{setFaculty:["faculty","setFaculty"],setProfile:["profile","setProfile"]},decls:26,vars:3,consts:[[1,"p-5","py-10","bg-white","border-b"],[1,"mb-3","text-4xl","font-semibold"],[1,"grid","w-full","grid-cols-1","gap-x-5","md:grid-cols-3",3,"formGroup"],["formControlName","first_name","matInput",""],["formControlName","middle_name","matInput",""],["formControlName","last_name","matInput",""],["formControlName","date_of_birth","type","date","matInput",""],["formControlName","sex"],[3,"value",4,"ngFor","ngForOf"],["class","flex",4,"ngIf"],[3,"value"],[1,"flex"],["mat-button","",1,"ml-auto","mr-3","text-white","bg-isat-blue",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2,"Information"),t.qZA(),t.TgZ(3,"form",2)(4,"mat-form-field")(5,"mat-label"),t._uU(6,"First"),t.qZA(),t._UZ(7,"input",3),t.qZA(),t.TgZ(8,"mat-form-field")(9,"mat-label"),t._uU(10,"Middle"),t.qZA(),t._UZ(11,"input",4),t.qZA(),t.TgZ(12,"mat-form-field")(13,"mat-label"),t._uU(14,"Last"),t.qZA(),t._UZ(15,"input",5),t.qZA(),t.TgZ(16,"mat-form-field")(17,"mat-label"),t._uU(18,"Date of Birth"),t.qZA(),t._UZ(19,"input",6),t.qZA(),t.TgZ(20,"mat-form-field")(21,"mat-label"),t._uU(22,"Sex"),t.qZA(),t.TgZ(23,"mat-select",7),t.YNc(24,J,3,4,"mat-option",8),t.qZA()()(),t.YNc(25,N,3,0,"div",9),t.qZA()),2&e&&(t.xp6(3),t.Q6J("formGroup",n.form),t.xp6(21),t.Q6J("ngForOf",n.genders),t.xp6(1),t.Q6J("ngIf",!n.form.disabled))},dependencies:[i._Y,i.Fj,i.JJ,i.JL,s.sg,s.O5,i.sg,i.u,m.KE,m.hX,d.Nt,q.gD,E.ey,h.lW,s.rS]}),o})();function O(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",9)(1,"button",10),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.save())}),t._uU(2," Update Account "),t.qZA()()}}let x=(()=>{class o{constructor(e,n){this._formBuilder=e,this._store=n,this.form=this._formBuilder.group({position:[""],rank:[""],designation:[""],years_in_service:[""],experience:[""]})}set setFaculty(e){this.form.setValue({position:e.position??"",rank:e.rank??"",designation:e.designation??"",years_in_service:e.years_in_service??"",experience:e.experience??""}),this.faculty=e}set setProfile(e){(this.faculty.id!==e?.id||(0,p.c)(e))&&this.form.disable()}ngOnInit(){}save(){this._store.dispatch(c.S.PROFILE.UPSERT({faculty:{...this.faculty,...this.form.value}}))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(i.qu),t.Y36(f.yh))},o.\u0275cmp=t.Xpm({type:o,selectors:[["profile-employment"]],inputs:{setFaculty:["faculty","setFaculty"],setProfile:["profile","setProfile"]},decls:25,vars:2,consts:[[1,"p-5","py-10","bg-white","border-b"],[1,"mb-3","text-4xl","font-semibold"],[1,"grid","w-full","grid-cols-1","gap-x-5","md:grid-cols-3",3,"formGroup"],["formControlName","position","matInput",""],["formControlName","rank","matInput",""],["formControlName","designation","matInput",""],["type","number","formControlName","years_in_service","matInput",""],["type","number","formControlName","experience","matInput",""],["class","flex",4,"ngIf"],[1,"flex"],["mat-button","",1,"ml-auto","mr-3","text-white","bg-isat-blue",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2,"Employment"),t.qZA(),t.TgZ(3,"form",2)(4,"mat-form-field")(5,"mat-label"),t._uU(6," Position"),t.qZA(),t._UZ(7,"input",3),t.qZA(),t.TgZ(8,"mat-form-field")(9,"mat-label"),t._uU(10," Rank"),t.qZA(),t._UZ(11,"input",4),t.qZA(),t.TgZ(12,"mat-form-field")(13,"mat-label"),t._uU(14,"Designation"),t.qZA(),t._UZ(15,"input",5),t.qZA(),t.TgZ(16,"mat-form-field")(17,"mat-label"),t._uU(18,"Years in Service"),t.qZA(),t._UZ(19,"input",6),t.qZA(),t.TgZ(20,"mat-form-field")(21,"mat-label"),t._uU(22,"Experience"),t.qZA(),t._UZ(23,"input",7),t.qZA()(),t.YNc(24,O,3,0,"div",8),t.qZA()),2&e&&(t.xp6(3),t.Q6J("formGroup",n.form),t.xp6(21),t.Q6J("ngIf",!n.form.disabled))},dependencies:[i._Y,i.Fj,i.wV,i.JJ,i.JL,s.O5,i.sg,i.u,m.KE,m.hX,d.Nt,h.lW]}),o})();function Y(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",11)(1,"button",12),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.save())}),t._uU(2," Update Account "),t.qZA()()}}let U=(()=>{class o{constructor(e,n){this._formBuilder=e,this._store=n,this.form=this._formBuilder.group({educational_attainment:[""],license_number:[""],college:[""],department:[""],bachelor:[""],masters:[""],phD:[""]})}set setFaculty(e){this.form.setValue({educational_attainment:e.educational_attainment??"",license_number:e.license_number??"",college:e.college??"",department:e.department??"",bachelor:e.bachelor??"",masters:e.masters??"",phD:e.phD??""}),this.faculty=e}set setProfile(e){(this.faculty.id!==e?.id||(0,p.c)(e))&&this.form.disable()}ngOnInit(){}save(){this._store.dispatch(c.S.PROFILE.UPSERT({faculty:{...this.faculty,...this.form.value}}))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(i.qu),t.Y36(f.yh))},o.\u0275cmp=t.Xpm({type:o,selectors:[["profile-educational-background"]],inputs:{setFaculty:["faculty","setFaculty"],setProfile:["profile","setProfile"]},decls:33,vars:2,consts:[[1,"p-5","py-10","bg-white","border-b"],[1,"mb-3","text-4xl","font-semibold"],[1,"grid","w-full","grid-cols-1","gap-x-5","md:grid-cols-3",3,"formGroup"],["formControlName","educational_attainment","matInput",""],["formControlName","license_number","matInput",""],["formControlName","college","matInput",""],["formControlName","department","matInput",""],["formControlName","bachelor","matInput",""],["formControlName","masters","matInput",""],["formControlName","phD","matInput",""],["class","flex",4,"ngIf"],[1,"flex"],["mat-button","",1,"ml-auto","mr-3","text-white","bg-isat-blue",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2,"Educational Background"),t.qZA(),t.TgZ(3,"form",2)(4,"mat-form-field")(5,"mat-label"),t._uU(6,"Educational Attainment"),t.qZA(),t._UZ(7,"input",3),t.qZA(),t.TgZ(8,"mat-form-field")(9,"mat-label"),t._uU(10,"License Number"),t.qZA(),t._UZ(11,"input",4),t.qZA(),t.TgZ(12,"mat-form-field")(13,"mat-label"),t._uU(14,"College"),t.qZA(),t._UZ(15,"input",5),t.qZA(),t.TgZ(16,"mat-form-field")(17,"mat-label"),t._uU(18,"Department"),t.qZA(),t._UZ(19,"input",6),t.qZA(),t.TgZ(20,"mat-form-field")(21,"mat-label"),t._uU(22,"Bachelor"),t.qZA(),t._UZ(23,"input",7),t.qZA(),t.TgZ(24,"mat-form-field")(25,"mat-label"),t._uU(26,"Masters"),t.qZA(),t._UZ(27,"input",8),t.qZA(),t.TgZ(28,"mat-form-field")(29,"mat-label"),t._uU(30,"Phd"),t.qZA(),t._UZ(31,"input",9),t.qZA()(),t.YNc(32,Y,3,0,"div",10),t.qZA()),2&e&&(t.xp6(3),t.Q6J("formGroup",n.form),t.xp6(29),t.Q6J("ngIf",!n.form.disabled))},dependencies:[i._Y,i.Fj,i.JJ,i.JL,s.O5,i.sg,i.u,m.KE,m.hX,d.Nt,h.lW]}),o})();var w=l(5698),L=l(9435);function B(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",5)(1,"button",6),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.save())}),t._uU(2," Update Information "),t.qZA()()}}let P=(()=>{class o{constructor(e,n){this._formBuilder=e,this._store=n,this.genders=Object.values(u),this.subjects$=this._store.pipe((0,f.Ys)(Z.f.SUBJECT),(0,_.U)(a=>new g.l(a).toArray())),this.form=this._formBuilder.group({awards:[""],subjects:[""]})}set setFaculty(e){this.form.setValue({awards:e.awards??"",subjects:e.subjects?e.subjects.map(n=>n.id):""}),this.faculty=e}set setProfile(e){(this.faculty.id!==e?.id||(0,p.c)(e))&&this.form.disable()}ngOnInit(){}save(){this.subjects$.pipe((0,w.q)(1)).subscribe(e=>{this._store.dispatch(c.S.PROFILE.UPSERT({faculty:{...this.faculty,...this.form.value,subjects:e.filter(n=>this.form.value.subjects.includes(n.id))}}))})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(i.qu),t.Y36(f.yh))},o.\u0275cmp=t.Xpm({type:o,selectors:[["profile-others"]],inputs:{setFaculty:["faculty","setFaculty"],setProfile:["profile","setProfile"]},decls:9,vars:2,consts:[[1,"p-5","py-10","bg-white","border-b"],[1,"mb-3","text-4xl","font-semibold"],[1,"grid","w-full","grid-cols-1","gap-x-5","md:grid-cols-3",3,"formGroup"],["formControlName","awards","matInput","","autoSize",""],["class","flex",4,"ngIf"],[1,"flex"],["mat-button","",1,"ml-auto","mr-3","text-white","bg-isat-blue",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2,"Others"),t.qZA(),t.TgZ(3,"form",2)(4,"mat-form-field")(5,"mat-label"),t._uU(6,"Awards (Separated by comma)"),t.qZA(),t._UZ(7,"textarea",3),t.qZA()(),t.YNc(8,B,3,0,"div",4),t.qZA()),2&e&&(t.xp6(3),t.Q6J("formGroup",n.form),t.xp6(5),t.Q6J("ngIf",!n.form.disabled))},dependencies:[L.c,i._Y,i.Fj,i.JJ,i.JL,s.O5,i.sg,i.u,m.KE,m.hX,d.Nt,h.lW]}),o})();function Q(o,r){if(1&o&&(t.ynx(0),t._UZ(1,"profile-account",4)(2,"profile-information",4)(3,"profile-educational-background",4)(4,"profile-employment",4)(5,"profile-others",4),t.BQk()),2&o){const e=r.$implicit,n=t.oxw().ngIf;t.xp6(1),t.Q6J("faculty",n)("profile",e),t.xp6(1),t.Q6J("faculty",n)("profile",e),t.xp6(1),t.Q6J("faculty",n)("profile",e),t.xp6(1),t.Q6J("faculty",n)("profile",e),t.xp6(1),t.Q6J("faculty",n)("profile",e)}}const S=function(o){return[o]};function j(o,r){if(1&o&&(t.ynx(0),t.YNc(1,Q,6,10,"ng-container",3),t.ALo(2,"async"),t.BQk()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.VKq(3,S,t.lcZ(2,1,e.profile$)))}}const R=[{path:"",component:(()=>{class o{constructor(e,n){this._route=e,this._store=n,this.currentFacultyId=this._route.snapshot.paramMap.get("id"),this.faculty$=this._store.pipe((0,f.Ys)(Z.f.FACULTY),(0,_.U)(a=>new g.l(a).toArray()),(0,_.U)(a=>a.find(K=>K.id===this.currentFacultyId))),this.profile$=this._store.pipe((0,f.Ys)(Z.f.PROFILE),(0,_.U)(a=>new g.l(a).toObject()))}ngOnInit(){this._store.dispatch(c.S.SUBJECT.LOAD()),this._store.dispatch(c.S.FACULTY.LOAD())}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(v.gz),t.Y36(f.yh))},o.\u0275cmp=t.Xpm({type:o,selectors:[["profile"]],decls:4,vars:3,consts:[[1,"w-full"],["title","Profile","subtitle","You may update your profile here","icon","account_circle"],[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"faculty","profile"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-header",1),t.YNc(2,j,3,5,"ng-container",2),t.ALo(3,"async"),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngIf",t.lcZ(3,1,n.faculty$)))},dependencies:[T.P,s.sg,s.O5,A,y,x,U,P,s.Ov]}),o})()}];const G=[l(2671).m,v.Bz.forChild(R)];let M=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[G]}),o})()}}]);