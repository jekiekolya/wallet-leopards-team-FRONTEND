"use strict";(self.webpackChunkwallet_leopards_team_FRONTEND=self.webpackChunkwallet_leopards_team_FRONTEND||[]).push([[703],{8436:function(e,r,s){s.d(r,{r:function(){return d}});var a,t,n=s(2791),o=["title","titleId"];function i(){return i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var s=arguments[r];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},i.apply(this,arguments)}function c(e,r){if(null==e)return{};var s,a,t=function(e,r){if(null==e)return{};var s,a,t={},n=Object.keys(e);for(a=0;a<n.length;a++)s=n[a],r.indexOf(s)>=0||(t[s]=e[s]);return t}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)s=n[a],r.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(t[s]=e[s])}return t}function l(e,r){var s=e.title,l=e.titleId,d=c(e,o);return n.createElement("svg",i({width:24,height:24,viewBox:"0 0 25 24",fill:"current",xmlns:"http://www.w3.org/2000/svg",ref:r,"aria-labelledby":l},d),s?n.createElement("title",{id:l},s):null,a||(a=n.createElement("g",{clipPath:"url(#clip0_5_3511)"},n.createElement("path",{d:"M18.5 8H17.5V6C17.5 3.24 15.26 1 12.5 1C9.74 1 7.5 3.24 7.5 6V8H6.5C5.4 8 4.5 8.9 4.5 10V20C4.5 21.1 5.4 22 6.5 22H18.5C19.6 22 20.5 21.1 20.5 20V10C20.5 8.9 19.6 8 18.5 8ZM12.5 17C11.4 17 10.5 16.1 10.5 15C10.5 13.9 11.4 13 12.5 13C13.6 13 14.5 13.9 14.5 15C14.5 16.1 13.6 17 12.5 17ZM15.6 8H9.4V6C9.4 4.29 10.79 2.9 12.5 2.9C14.21 2.9 15.6 4.29 15.6 6V8Z",fill:"current"}))),t||(t=n.createElement("defs",null,n.createElement("clipPath",{id:"clip0_5_3511"},n.createElement("rect",{width:24,height:24,fill:"current",transform:"translate(0.5)"})))))}var d=n.forwardRef(l);s.p},1670:function(e,r,s){var a=s(5861),t=s(4687),n=s.n(t),o=s(1044),i=s(5562),c=s(2195);function l(){return(l=(0,a.Z)(n().mark((function e(r){var s,a;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.ZP.post("".concat(c.v2,"/auth/forgot-password"),{email:r});case 3:return s=e.sent,e.abrupt("return",s.data);case 7:e.prev=7,e.t0=e.catch(0),a=e.t0.response.data.message.toString(),i.Notify.failure(a);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function d(){return(d=(0,a.Z)(n().mark((function e(r,s,a){var t,l;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.ZP.post("".concat(c.v2,"/auth/reset-password/").concat(r,"/").concat(s),{password:a});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),l=e.t0.response.data.message.toString(),i.Notify.failure(l);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var p={forgotPasswordAPI:function(e){return l.apply(this,arguments)},createPasswordAPI:function(e,r,s){return d.apply(this,arguments)}};r.Z=p},4108:function(e,r,s){s.d(r,{Z:function(){return c}});s(2791);var a=s(761),t=s.n(a),n="PasswordStrength_progressBar__oZ2P+",o="PasswordStrength_progress__VRWhX",i=s(3329),c=function(e){var r=e.password,s=t()(r),a=100*s.score/4,c=function(){switch(s.score){case 0:default:return"none";case 1:return"#FF6596";case 2:return"#FED057";case 3:return"#80d564";case 4:return"#24CCA7"}};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:n,children:(0,i.jsx)("div",{className:o,style:{width:"".concat(a,"%"),background:c()}})})})}},1439:function(e,r,s){s.r(r),s.d(r,{default:function(){return A}});var a=s(5607),t="CreatePassword_container__pIpsj",n="CreatePassword_back__pBY9o",o="CreatePassword_registerContainer__VkM2P",i="CreatePassword_registerImgWrapper__8p4LX",c="CreatePassword_registerImg__YouwR",l="CreatePassword_appTitle__y9beA",d="CreatePassword_form__M6mtV",p=s(3087),u=s(6308),w=s(9445),m=s(8314),h=s(8687),_=s(6542),f=s(7598),C=s(4942),v=s(885),x=s(2791),g=s(1087),j=s(5705),N=s(5562),P=s(1694),I=s.n(P),b=s(1724),Z=s(4108),y=s(1670),O=s(8436),S=s(8079),E={container:"CreatePassword_container__OY8B7",registerBtn:"CreatePassword_registerBtn__LqIu3",active:"CreatePassword_active__jD8O5",loginBtn:"CreatePassword_loginBtn__EvBci",formContainer:"CreatePassword_formContainer__w8ZKa",logo:"CreatePassword_logo__DYiit",logoIcon:"CreatePassword_logoIcon__jeq5X",form:"CreatePassword_form__jCuAC",input:"CreatePassword_input__5lfZS",errorInput:"CreatePassword_errorInput__QNikL",validInput:"CreatePassword_validInput__n4URE",inputIcon:"CreatePassword_inputIcon__bqFKi",errorInputIcon:"CreatePassword_errorInputIcon__potNh",validInputIcon:"CreatePassword_validInputIcon__HeJ9X",label:"CreatePassword_label__Wl48P",title:"CreatePassword_title__QJtzD",errorField:"CreatePassword_errorField__Z1sqE",errorFieldConfirmPassword:"CreatePassword_errorFieldConfirmPassword__bmTLy",icon:"CreatePassword_icon__npyFT",hideIcon:"CreatePassword_hideIcon__9VhSa",showIcon:"CreatePassword_showIcon__a4rld"},F=s(7692),k=s(3329),B=function(){var e=(0,x.useState)(null),r=(0,v.Z)(e,2),s=r[0],a=r[1],t=(0,g.lr)(),n=(0,v.Z)(t,1)[0],o=n.get("id"),i=n.get("token"),c=(0,x.useState)("password"),l=(0,v.Z)(c,2),d=l[0],p=l[1],u=function(){p("text")},w=function(){p("password")},m=b.Ry().shape({password:b.Z_().matches(/(^[a-zA-Z0-9]+$)/,"Can only include numbers and latin letters").min(6,"Minimum 6 characters required").max(12,"Maximum 12 characters").required("Required field"),passwordConfirm:b.Z_().oneOf([b.iH("password")],"Passwords don't match!").required("Required field")});return(0,k.jsxs)("div",{className:E.formContainer,children:[(0,k.jsx)("div",{className:E.logo,children:(0,k.jsx)("svg",{width:"120",height:"30",className:E.logoIcon,children:(0,k.jsx)("use",{href:"".concat(S.Z,"#icon-logo")})})}),201===s?(0,k.jsxs)("div",{children:[(0,k.jsx)("h1",{className:E.title,children:"New password created!"}),(0,k.jsx)(g.rU,{to:"/login",className:E.registerBtn,children:"LOG IN"})]}):(0,k.jsx)(j.J9,{initialValues:{password:"",passwordConfirm:""},validationSchema:m,onSubmit:function(e){var r=e.password;y.Z.createPasswordAPI(o,i,r).then((function(e){return a(e.code)})).catch((function(e){return N.Notify.failure(e.message)}))},children:function(e){var r,s,a=e.values,t=e.errors,n=e.touched,o=e.handleChange,i=e.handleSubmit;return(0,k.jsxs)(j.l0,{className:E.form,onSubmit:i,children:[(0,k.jsxs)("label",{className:E.label,children:[(0,k.jsx)(j.gN,{type:d,name:"password",placeholder:"Password",autoComplete:"true",className:I()(E.input,(r={},(0,C.Z)(r,E.errorInput,t.password&&n.password),(0,C.Z)(r,E.validInput,!t.password&&n.password),r)),onChange:o,value:a.password}),(0,k.jsx)(O.r,{className:E.inputIcon}),!t.password&&n.password&&(0,k.jsx)(O.r,{className:E.validInputIcon}),t.password&&n.password&&(0,k.jsx)(O.r,{className:E.errorInputIcon}),t.password&&n.password&&(0,k.jsx)("div",{className:E.errorField,children:t.password}),"password"===d?(0,k.jsx)("span",{className:E.hideIcon,children:(0,k.jsx)(F.nJ9,{className:E.icon,onMouseDown:u,onTouchStart:u})}):(0,k.jsx)("span",{className:E.showIcon,onMouseUp:w,onTouchEnd:w,children:(0,k.jsx)(F.A7v,{className:E.icon})})]}),(0,k.jsxs)("label",{className:E.label,children:[(0,k.jsx)(j.gN,{type:"password",name:"passwordConfirm",placeholder:"Confirm password",autoComplete:"true",className:I()(E.input,(s={},(0,C.Z)(s,E.errorInput,t.passwordConfirm&&n.passwordConfirm),(0,C.Z)(s,E.validInput,!t.passwordConfirm&&n.passwordConfirm),s)),value:a.confirmPassword,onChange:o}),(0,k.jsx)(O.r,{className:E.inputIcon}),!t.passwordConfirm&&n.passwordConfirm&&(0,k.jsx)(O.r,{className:E.validInputIcon}),t.passwordConfirm&&n.passwordConfirm&&(0,k.jsx)(O.r,{className:E.errorInputIcon}),t.passwordConfirm&&n.passwordConfirm&&(0,k.jsx)("div",{className:E.errorField,children:t.passwordConfirm}),(0,k.jsx)(Z.Z,{password:a.password,className:E.passwordStrength})]}),(0,k.jsx)("button",{type:"submit",className:E.registerBtn,children:"CREATE"}),(0,k.jsx)(g.rU,{to:"/login",className:E.loginBtn,children:"BACK TO LOGIN"})]})}})]})},A=function(){var e=(0,h.v9)(_.M.showModalSuccessRegistration);return(0,k.jsx)("div",{className:n,children:(0,k.jsxs)("div",{className:t,children:[e&&(0,k.jsx)(f.Z,{}),(0,k.jsxs)("div",{className:o,children:[(0,k.jsx)(a.Z,{queries:{tab:"(min-width: 768px) and (max-width: 1279px)",desk:"(min-width: 1280px)"},children:function(e){return(0,k.jsxs)(k.Fragment,{children:[e.tab&&(0,k.jsxs)("div",{className:i,children:[(0,k.jsx)("img",{src:p,srcSet:"".concat(u," 2x"),alt:"The phone with app on the screen",className:c}),(0,k.jsx)("p",{className:l,children:"Finance App"})]}),e.desk&&(0,k.jsxs)("div",{className:i,children:[(0,k.jsx)("img",{src:w,srcSet:"".concat(m," 2x"),alt:"The phone with app on the screen",className:c}),(0,k.jsx)("p",{className:l,children:"Finance App"})]})]})}}),(0,k.jsx)("div",{className:d,children:(0,k.jsx)(B,{})})]})]})})}}}]);
//# sourceMappingURL=703.c3eeb2af.chunk.js.map