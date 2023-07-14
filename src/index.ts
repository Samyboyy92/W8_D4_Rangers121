import { User, Shop } from "./Stores/index";

const shop = new Shop();
const user = new User('Sam Mennenga', 31);

user.addToCart(shop.items[0]); 
user.addToCart(shop.items[1]); 
user.addToCart(shop.items[2]); 

user.printCart(); 

user.removeFromCart(shop.items[1]); 

user.removeQuantityFromCart(shop.items[0], 2); 

console.log('Total:', user.cartTotal()); 
user.printCart(); 