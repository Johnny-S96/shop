(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[6],{122:function(n,e,t){"use strict";t.r(e);t(1);var i,c,r,a,s,d,o,j,l,p,h=t(28),x=t(19),b=t(34),m=t(11),u=t(12),O=u.c.div(i||(i=Object(m.a)(["\n  width: 100%;\n  display: flex;\n  min-height: 100px;\n  border-bottom: 1px solid darkgrey;\n  padding: 15px 0;\n  font-size: 20px;\n  align-items: center;\n\n  @media screen and (max-width: 800px) {\n    font-size: 18px;\n  }\n\n  @media screen and (max-width: 350px) {\n    font-size: 12px;\n  }\n"]))),f=u.c.div(c||(c=Object(m.a)(["\n  width: 23%;\n  padding-right: 15px;\n\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"]))),g=u.c.span(r||(r=Object(m.a)(["\n  width: 23%;\n\n  @media screen and (max-width: 800px) {\n    width: 20%;\n  }\n"]))),w=Object(u.c)(g)(a||(a=Object(m.a)(["\n  display: flex;\n\n  span {\n    margin: 0 10px;\n  }\n\n  div {\n    cursor: pointer;\n  }\n"]))),v=u.c.div(s||(s=Object(m.a)(["\n  padding-left: 12px;\n  cursor: pointer;\n"]))),y=t(3),k=Object(h.b)(null,(function(n){return{clearItem:function(e){return n(Object(b.c)(e))},addItem:function(e){return n(Object(b.a)(e))},removeItem:function(e){return n(Object(b.d)(e))}}}))((function(n){var e=n.cartItem,t=n.clearItem,i=n.addItem,c=n.removeItem,r=e.name,a=e.imageUrl,s=e.price,d=e.quantity;return Object(y.jsxs)(O,{children:[Object(y.jsx)(f,{children:Object(y.jsx)("img",{src:a,alt:"item"})}),Object(y.jsx)(g,{children:r}),Object(y.jsxs)(w,{children:[Object(y.jsx)("div",{onClick:function(){return c(e)},children:"\u276e"}),Object(y.jsx)("span",{children:d}),Object(y.jsx)("div",{onClick:function(){return i(e)},children:"\u276f"})]}),Object(y.jsx)(g,{children:s}),Object(y.jsx)(v,{onClick:function(){return t(e)},children:"\u2715"})]})})),z=t(98),I=t.n(z),P=t(99),C=t.n(P),K=function(n){var e=n.price,t=100*e;return Object(y.jsx)(I.a,{label:"Pay Now",name:"My Test Shop Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(e),amount:t,panelLabel:"Pay Now",token:function(n){C()({url:"payment",method:"post",data:{amount:t,token:n}}).then((function(n){alert("Payment successful")})).catch((function(n){console.log("Payment error: ",JSON.parse(n)),alert("There was an issue with your payment. Please sure you use the provided credid card.")}))},stripeKey:"pk_test_51IVyV8KznuWoI3kwZSDYt9AjQz7GWOqwzaKZ9fzeu0DKwpJ9Ck041F0RuPo1vg85rRcKsKbRuLjZ8ANVXcUa2FUg00TR72Qy7X"})},A=t(36),R=u.c.div(d||(d=Object(m.a)(["\n  width: 55%;\n  min-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 50px auto 0;\n\n  button {\n    margin-left: auto;\n    margin-top: 50px;\n  }\n\n  @media screen and (max-width: 800px) {\n    width: 90%;\n  }\n"]))),T=u.c.div(o||(o=Object(m.a)(["\n  width: 100%;\n  height: 40px;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid darkgrey;\n\n  @media screen and (max-width: 350px) {\n    font-size: 13px;\n  }\n"]))),V=u.c.div(j||(j=Object(m.a)(["\n  text-transform: capitalize;\n  width: 23%;\n\n  &:last-child {\n    width: 8%;\n  }\n\n  @media screen and (max-width: 800px) {\n    width: 22%;\n    \n    &:last-child {\n      width: 12%;\n    }\n  }\n"]))),J=u.c.div(l||(l=Object(m.a)(["\n  margin-top: 30px;\n  margin-left: auto;\n  font-size: 36px;\n"]))),L=u.c.div(p||(p=Object(m.a)(["\n  text-align: center;\n  margin-top: 40px;\n  font-size: 24px;\n  color: red;\n"]))),N=Object(x.b)({cartItems:A.b,total:A.d});e.default=Object(h.b)(N)((function(n){var e=n.cartItems,t=n.total;return Object(y.jsxs)(R,{children:[Object(y.jsxs)(T,{children:[Object(y.jsx)(V,{children:Object(y.jsx)("span",{children:"Product"})}),Object(y.jsx)(V,{children:Object(y.jsx)("span",{children:"Description"})}),Object(y.jsx)(V,{children:Object(y.jsx)("span",{children:"Quantity"})}),Object(y.jsx)(V,{children:Object(y.jsx)("span",{children:"Price"})}),Object(y.jsx)(V,{children:Object(y.jsx)("span",{children:"Remove"})})]}),e.map((function(n){return Object(y.jsx)(k,{cartItem:n},n.id)})),Object(y.jsxs)(J,{children:["TOTAL $",t]}),Object(y.jsxs)(L,{children:["*Please use the following test credit card for payments*",Object(y.jsx)("br",{}),"4242 4242 4242 4242 - Exp: 01/22 - CVV: 123"]}),Object(y.jsx)(K,{price:t})]})}))}}]);
//# sourceMappingURL=6.777c6fd7.chunk.js.map