"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[175],{6175:function(e,n,t){t.r(n);var a=t(9439),c=t(2791),i=t(7689),s=t(1087),l=t(1243),r=t(184);n.default=function(){var e=(0,c.useState)(!1),n=(0,a.Z)(e,2),t=n[0],o=n[1],u=(0,i.s0)(),d=(0,i.TH)(),f=new URLSearchParams(d.search),g=f.get("id"),h=f.get("email"),x=(0,c.useCallback)((function(){var e="".concat("http://127.0.0.1:4000","/auth/verify-login?id=").concat(g,"&email=").concat(h);l.Z.get(e).then((function(e){200===e.status&&o(!0)})).catch((function(e){o(!1)}))}),[g,h,o]);return(0,c.useEffect)((function(){g&&h&&x()}),[g,h,x]),t?(0,r.jsx)("div",{className:"flex flex-col items-center justify-center h-screen bg-gray-100",children:(0,r.jsxs)("div",{className:"max-w-md w-full px-4 py-8 bg-white rounded-lg shadow-lg",children:[(0,r.jsxs)("div",{className:"mb-4 text-center",children:[(0,r.jsx)("h2",{className:"text-3xl font-bold text-green-600 mb-4",children:"Congratulations!"}),(0,r.jsx)("p",{className:"text-gray-600",children:"You have been verified and can now login."})]}),(0,r.jsx)("button",{onClick:function(){return u("/signin")},className:"w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50",children:"Login Now"})]})}):(0,r.jsx)("div",{className:"bg-yellow-200 text-black p-4 rounded-lg shadow-md flex justify-center items-center",children:(0,r.jsxs)("p",{className:"text-center",children:["You may not have been verified yet. Please check your email for a link to verify your account. If you have already verified your account, please try",(0,r.jsxs)(s.rU,{className:"text-blue-500 font-bold",to:"/signin",children:[" ","logging in"," "]}),"again."]})})}}}]);
//# sourceMappingURL=175.ed53fb8b.chunk.js.map