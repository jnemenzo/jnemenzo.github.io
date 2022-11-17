"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[890],{8890:(Y,u,n)=>{n.r(u),n.d(u,{AuthSignUpModule:()=>M});var l=n(6806),p=n(4859),d=n(6709),m=n(9549),c=n(7392),f=n(4144),h=n(1572),x=n(6236),Z=n(7775),v=n(2671),a=n(4006),y=n(3844),e=n(4650),A=n(5817),w=n(2494),T=n(6895);const C=["signUpNgForm"];function S(t,r){if(1&t&&(e.TgZ(0,"fuse-alert",42),e._uU(1),e.qZA()),2&t){const o=e.oxw();e.Q6J("appearance","outline")("showIcon",!1)("type",o.alert.type)("@shake","error"===o.alert.type),e.xp6(1),e.hij(" ",o.alert.message," ")}}function I(t,r){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Full name is required "),e.qZA())}function J(t,r){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Email address is required "),e.qZA())}function b(t,r){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Please enter a valid email address "),e.qZA())}function q(t,r){1&t&&e._UZ(0,"mat-icon",43),2&t&&e.Q6J("svgIcon","heroicons_solid:eye")}function F(t,r){1&t&&e._UZ(0,"mat-icon",43),2&t&&e.Q6J("svgIcon","heroicons_solid:eye-off")}function N(t,r){1&t&&(e.TgZ(0,"span"),e._uU(1," Create your free account "),e.qZA())}function Q(t,r){1&t&&e._UZ(0,"mat-progress-spinner",44),2&t&&e.Q6J("diameter",24)("mode","indeterminate")}const _=function(){return["/sign-in"]},U=function(){return["./"]},j=[{path:"",component:(()=>{class t{constructor(o,i,s){this._authService=o,this._formBuilder=i,this._router=s,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.signUpForm=this._formBuilder.group({name:["",a.kI.required],email:["",[a.kI.required,a.kI.email]],password:["",a.kI.required],company:[""],agreements:["",a.kI.requiredTrue]})}signUp(){this.signUpForm.invalid||(this.signUpForm.disable(),this.showAlert=!1,this._authService.signUp(this.signUpForm.value).subscribe(o=>{this._router.navigateByUrl("/confirmation-required")},o=>{this.signUpForm.enable(),this.signUpNgForm.resetForm(),this.alert={type:"error",message:"Something went wrong, please try again."},this.showAlert=!0}))}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(A.e),e.Y36(a.QS),e.Y36(l.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["auth-sign-up"]],viewQuery:function(o,i){if(1&o&&e.Gf(C,5),2&o){let s;e.iGM(s=e.CRH())&&(i.signUpNgForm=s.first)}},decls:78,vars:23,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"flex","items-baseline","mt-0.5","font-medium"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],[1,"w-full"],["id","name","matInput","",3,"formControlName"],[4,"ngIf"],["id","email","matInput","",3,"formControlName"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],["id","company-confirm","matInput","",3,"formControlName"],[1,"inline-flex","items-end","w-full","mt-1.5"],[3,"color","formControlName"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-6",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","tracking-tight","leading-6","text-gray-400"],[1,"flex","items-center","mt-8"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","assets/images/avatars/female-18.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/female-11.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-09.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-16.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"],[1,"icon-size-5",3,"svgIcon"],[3,"diameter","mode"]],template:function(o,i){if(1&o){const s=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"div",5),e._uU(6,"Sign up"),e.qZA(),e.TgZ(7,"div",6)(8,"div"),e._uU(9,"Already have an account?"),e.qZA(),e.TgZ(10,"a",7),e._uU(11,"Sign in "),e.qZA()(),e.YNc(12,S,2,5,"fuse-alert",8),e.TgZ(13,"form",9)(14,"mat-form-field",10)(15,"mat-label"),e._uU(16,"Full name"),e.qZA(),e._UZ(17,"input",11),e.YNc(18,I,2,0,"mat-error",12),e.qZA(),e.TgZ(19,"mat-form-field",10)(20,"mat-label"),e._uU(21,"Email address"),e.qZA(),e._UZ(22,"input",13),e.YNc(23,J,2,0,"mat-error",12),e.YNc(24,b,2,0,"mat-error",12),e.qZA(),e.TgZ(25,"mat-form-field",10)(26,"mat-label"),e._uU(27,"Password"),e.qZA(),e._UZ(28,"input",14,15),e.TgZ(30,"button",16),e.NdJ("click",function(){e.CHM(s);const g=e.MAs(29);return e.KtG(g.type="password"===g.type?"text":"password")}),e.YNc(31,q,1,1,"mat-icon",17),e.YNc(32,F,1,1,"mat-icon",17),e.qZA(),e.TgZ(33,"mat-error"),e._uU(34," Password is required "),e.qZA()(),e.TgZ(35,"mat-form-field",10)(36,"mat-label"),e._uU(37,"Company"),e.qZA(),e._UZ(38,"input",18),e.qZA(),e.TgZ(39,"div",19)(40,"mat-checkbox",20)(41,"span"),e._uU(42,"I agree to the"),e.qZA(),e.TgZ(43,"a",7),e._uU(44,"Terms of Service "),e.qZA(),e.TgZ(45,"span"),e._uU(46,"and"),e.qZA(),e.TgZ(47,"a",7),e._uU(48,"Privacy Policy "),e.qZA()()(),e.TgZ(49,"button",21),e.NdJ("click",function(){return i.signUp()}),e.YNc(50,N,2,0,"span",12),e.YNc(51,Q,1,2,"mat-progress-spinner",22),e.qZA()()()(),e.TgZ(52,"div",23),e.O4$(),e.TgZ(53,"svg",24)(54,"g",25),e._UZ(55,"circle",26)(56,"circle",27),e.qZA()(),e.TgZ(57,"svg",28)(58,"defs")(59,"pattern",29),e._UZ(60,"rect",30),e.qZA()(),e._UZ(61,"rect",31),e.qZA(),e.kcU(),e.TgZ(62,"div",32)(63,"div",33)(64,"div"),e._uU(65,"Welcome to"),e.qZA(),e.TgZ(66,"div"),e._uU(67,"our community"),e.qZA()(),e.TgZ(68,"div",34),e._uU(69," Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. "),e.qZA(),e.TgZ(70,"div",35)(71,"div",36),e._UZ(72,"img",37)(73,"img",38)(74,"img",39)(75,"img",40),e.qZA(),e.TgZ(76,"div",41),e._uU(77,"More than 17k people joined us, it's your turn"),e.qZA()()()()()}if(2&o){const s=e.MAs(29);e.xp6(10),e.Q6J("routerLink",e.DdM(20,_)),e.xp6(2),e.Q6J("ngIf",i.showAlert),e.xp6(1),e.Q6J("formGroup",i.signUpForm),e.xp6(4),e.Q6J("formControlName","name"),e.xp6(1),e.Q6J("ngIf",i.signUpForm.get("name").hasError("required")),e.xp6(4),e.Q6J("formControlName","email"),e.xp6(1),e.Q6J("ngIf",i.signUpForm.get("email").hasError("required")),e.xp6(1),e.Q6J("ngIf",i.signUpForm.get("email").hasError("email")),e.xp6(4),e.Q6J("formControlName","password"),e.xp6(3),e.Q6J("ngIf","password"===s.type),e.xp6(1),e.Q6J("ngIf","text"===s.type),e.xp6(6),e.Q6J("formControlName","company"),e.xp6(2),e.Q6J("color","primary")("formControlName","agreements"),e.xp6(3),e.Q6J("routerLink",e.DdM(21,U)),e.xp6(4),e.Q6J("routerLink",e.DdM(22,U)),e.xp6(2),e.Q6J("color","primary")("disabled",i.signUpForm.disabled),e.xp6(1),e.Q6J("ngIf",!i.signUpForm.disabled),e.xp6(1),e.Q6J("ngIf",i.signUpForm.disabled)}},dependencies:[l.yS,p.lW,d.oG,m.TO,m.KE,m.hX,m.R9,c.Hw,f.Nt,h.Ou,w.W,a._Y,a.Fj,a.JJ,a.JL,T.O5,a.sg,a.u],encapsulation:2,data:{animation:y.L}}),t})()}];let M=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.Bz.forChild(j),p.ot,d.p9,m.lN,c.Ps,f.c,h.Cq,x.J,Z.fC,v.m]}),t})()}}]);