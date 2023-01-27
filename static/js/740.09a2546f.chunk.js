"use strict";(self.webpackChunkwallet_leopards_team_FRONTEND=self.webpackChunkwallet_leopards_team_FRONTEND||[]).push([[740],{1740:function(e,a,s){s.r(a),s.d(a,{default:function(){return b}});var r=s(885),t=s(2791),i=s(5705),n=s(7103),c={container:"RegisterForm_container__kVfjz",registerBtn:"RegisterForm_registerBtn__VfqX3",active:"RegisterForm_active__HcRGL",loginBtn:"RegisterForm_loginBtn__TRL7n",formContainer:"RegisterForm_formContainer__4YkYH",logo:"RegisterForm_logo__enFNJ",form:"RegisterForm_form__5aEEn",input:"RegisterForm_input__IemEh",inputIcon:"RegisterForm_inputIcon__vDPvX",label:"RegisterForm_label__OWQvs",errorField:"RegisterForm_errorField__6aeZo"},l=s(761),o=s.n(l),m="PasswordStrength_progressBar__oZ2P+",d="PasswordStrength_progress__VRWhX",p=s(3329),u=function(e){var a=e.password,s=o()(a),r=100*s.score/4,t=function(){switch(s.score){case 0:default:return"none";case 1:return"#FF6596";case 2:return"#FED057";case 3:return"#80d564";case 4:return"#24CCA7"}};return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("div",{className:m,children:(0,p.jsx)("div",{className:d,style:{width:"".concat(r,"%"),background:t()}})})})},g=s(1087),h=s(9354),_=s(9434),x=s(4022),f=function(){var e=(0,t.useState)(""),a=(0,r.Z)(e,2),s=a[0],l=a[1],o=(0,t.useState)(""),m=(0,r.Z)(o,2),d=m[0],f=m[1],N=(0,t.useState)(""),j=(0,r.Z)(N,2),w=j[0],v=j[1],b=(0,t.useState)(""),F=(0,r.Z)(b,2),R=F[0],I=F[1],Z=(0,_.I0)(),C=n.Ry().shape({email:n.Z_().matches(/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,"Must be a valid email!").email("Must be a valid email!").min(10).max(63).required("Required field"),password:n.Z_().matches(/(?=.*[a-z])/,"Must contain at least 1 lowerCase alphabetical character").matches(/(?=.*[A-Z])/,"Must contain at least 1 UpperCase alphabetical character").matches(/(?=.*[0-9])/,"Must contain at least 1 numeric character").min(6,"Minimum 6 characters required").max(12,"Maximum 12 characters").required("Required field"),passwordConfirm:n.Z_().oneOf([n.iH("password")],"Passwords don't match!").required("Required field"),firstName:n.Z_().min(1).max(12,"Too long name").required("Required field")});return(0,p.jsxs)("div",{className:c.formContainer,children:[(0,p.jsx)("div",{className:c.logo,children:(0,p.jsx)("svg",{width:"120",height:"30",className:c.logoIcon,children:(0,p.jsx)("use",{href:"".concat(h.Z,"#icon-logo")})})}),(0,p.jsx)(i.J9,{initialValues:{email:"",password:"",passwordConfirm:"",firstName:""},validationSchema:C,children:(0,p.jsxs)(i.l0,{className:c.form,onSubmit:function(e){e.preventDefault(),Z(x.Z.register({email:s,password:d,firstName:R})),l(""),f(""),v(""),I("")},children:[(0,p.jsxs)("label",{className:c.label,children:[(0,p.jsx)(i.gN,{type:"email",name:"email",placeholder:"E-mail",className:c.input,value:s,onInput:function(e){return l(e.target.value)}}),(0,p.jsx)("svg",{width:"24",height:"24",className:c.inputIcon,children:(0,p.jsx)("use",{href:"".concat(h.Z,"#icon-email")})}),(0,p.jsx)(i.Bc,{name:"email",component:"p",className:c.errorField})]}),(0,p.jsxs)("label",{className:c.label,children:[(0,p.jsx)(i.gN,{type:"password",name:"password",placeholder:"Password",className:c.input,onInput:function(e){return f(e.target.value)},value:d}),(0,p.jsx)("svg",{width:"24",height:"24",className:c.inputIcon,children:(0,p.jsx)("use",{href:"".concat(h.Z,"#icon-password-lock")})}),(0,p.jsx)(i.Bc,{name:"password",component:"p",className:c.errorField})]}),(0,p.jsxs)("label",{className:c.label,children:[(0,p.jsx)(i.gN,{type:"password",name:"passwordConfirm",placeholder:"Confirm password",className:c.input,value:w,onInput:function(e){return v(e.target.value)}}),(0,p.jsx)("svg",{width:"24",height:"24",className:c.inputIcon,children:(0,p.jsx)("use",{href:"".concat(h.Z,"#icon-password-lock")})}),(0,p.jsx)(u,{password:d,className:c.passwordStrength}),(0,p.jsx)(i.Bc,{name:"passwordConfirm",component:"p",className:c.errorField})]}),(0,p.jsxs)("label",{className:c.label,children:[(0,p.jsx)(i.gN,{type:"text",name:"firstName",placeholder:"First name",className:c.input,value:R,onInput:function(e){return I(e.target.value)}}),(0,p.jsx)("svg",{width:"24",height:"24",className:c.inputIcon,children:(0,p.jsx)("use",{href:"".concat(h.Z,"#icon-name")})}),(0,p.jsx)(i.Bc,{name:"firstName",component:"p",className:c.errorField})]}),(0,p.jsx)("button",{type:"submit",className:c.registerBtn,children:"REGISTER"}),(0,p.jsx)(g.rU,{to:"/login",className:c.loginBtn,children:"LOG IN"})]})})]})},N=s(3073),j={container:"RegisterPage_container__1TYXg",back:"RegisterPage_back__d03lH",blur:"RegisterPage_blur__mhtJS",registerContainer:"RegisterPage_registerContainer__zHFpD",registerImgWrapper:"RegisterPage_registerImgWrapper__HsOGu",appTitle:"RegisterPage_appTitle__6X6f1",form:"RegisterPage_form__2uFZs"},w=s(6361),v=s(5046),b=function(){return(0,p.jsx)("div",{className:j.back,children:(0,p.jsx)("div",{className:j.container,children:(0,p.jsxs)("div",{className:j.registerContainer,children:[(0,p.jsx)(N.Z,{queries:{tab:"(min-width: 768px) and (max-width: 1279px)",desk:"(min-width: 1280px)"},children:function(e){return(0,p.jsxs)(p.Fragment,{children:[e.tab&&(0,p.jsxs)("div",{className:j.registerImgWrapper,children:[(0,p.jsx)("img",{src:v,alt:"The phone with app on the screen",className:j.registerImg}),(0,p.jsx)("p",{className:j.appTitle,children:"Finance App"})]}),e.desk&&(0,p.jsxs)("div",{className:j.registerImgWrapper,children:[(0,p.jsx)("img",{src:w,alt:"The phone with app on the screen",className:j.registerImg}),(0,p.jsx)("p",{className:j.appTitle,children:"Finance App"})]})]})}}),(0,p.jsx)("div",{className:j.form,children:(0,p.jsx)(f,{})})]})})})}},6361:function(e,a,s){e.exports=s.p+"static/media/registerDeskImg.5d52b14df26fa5db288e.png"},5046:function(e,a,s){e.exports=s.p+"static/media/registerTabImg.ddae50acd944c8d2a830.png"}}]);
//# sourceMappingURL=740.09a2546f.chunk.js.map