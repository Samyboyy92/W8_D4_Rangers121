(()=>{"use strict";const t={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let r;const e=new Uint8Array(16);function o(){if(!r&&(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!r))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(e)}const n=[];for(let t=0;t<256;++t)n.push((t+256).toString(16).slice(1));const i=function(r,e,i){if(t.randomUUID&&!e&&!r)return t.randomUUID();const s=(r=r||{}).random||(r.rng||o)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,e){i=i||0;for(let t=0;t<16;++t)e[i+t]=s[t];return e}return function(t,r=0){return(n[t[r+0]]+n[t[r+1]]+n[t[r+2]]+n[t[r+3]]+"-"+n[t[r+4]]+n[t[r+5]]+"-"+n[t[r+6]]+n[t[r+7]]+"-"+n[t[r+8]]+n[t[r+9]]+"-"+n[t[r+10]]+n[t[r+11]]+n[t[r+12]]+n[t[r+13]]+n[t[r+14]]+n[t[r+15]]).toLowerCase()}(s)};class s{constructor(t,r,e){this._id=i(),this._name=t,this._price=r,this._description=e}get id(){return this._id}get name(){return this._name}get price(){return this._price}get description(){return this._description}}const a=new class{constructor(){this._items=[];const t=new s("Item 1",10,"Description for Item 1"),r=new s("Item 2",20,"Description for Item 2"),e=new s("Item 3",30,"Description for Item 3");this._items.push(t,r,e)}get items(){return this._items}},c=new class{constructor(t,r){this._id=i(),this._name=t,this._age=r,this._cart=[]}get id(){return this._id}get name(){return this._name}get age(){return this._age}get cart(){return this._cart}addToCart(t){this._cart.push(t)}removeFromCart(t){this._cart=this._cart.filter((r=>r.id!==t.id))}removeQuantityFromCart(t,r){const e=[];for(const o of this._cart)o.id===t.id&&r>0?r--:e.push(o);this._cart=e}cartTotal(){let t=0;for(const r of this._cart)t+=r.price;return t}printCart(){console.log(`User: ${this._name}'s Cart`);for(const t of this._cart)console.log(`- ${t.name}: $${t.price}`)}}("Sam Mennenga",31);c.addToCart(a.items[0]),c.addToCart(a.items[1]),c.addToCart(a.items[2]),c.printCart(),c.removeFromCart(a.items[1]),c.removeQuantityFromCart(a.items[0],2),console.log("Total:",c.cartTotal()),c.printCart()})();