import {v4 as uuidv4} from "uuid";
import Item from "./Item";

export default class User {
  
  private _id: string;
  private _name: string;
  private _age: number;
  private _cart: Item[];

  constructor(name: string, age: number) {
    this._id = uuidv4();
    this._name = name;
    this._age = age;
    this._cart = [];
  }

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get age(): number {
    return this._age;
  }

  public get cart(): Item[] {
    return this._cart;
  }

  public addToCart(item: Item): void {
    this._cart.push(item);
  }

  public removeFromCart(item: Item): void {
    this._cart = this._cart.filter((cartItem) => cartItem.id !== item.id);
  }

  public removeQuantityFromCart(item: Item, quantity: number): void {
    const remainingItems: Item[] = [];

    for (const cartItem of this._cart) {
      if (cartItem.id === item.id) {
        if (quantity > 0) {
          quantity--;
        } else {
          remainingItems.push(cartItem);
        }
      } else {
        remainingItems.push(cartItem);
      }
    }

    this._cart = remainingItems;
  }

  public cartTotal(): number {
    let total = 0;

    for (const item of this._cart) {
      total += item.price;
    }

    return total;
  }

  public printCart(): void {
    console.log(`User: ${this._name}'s Cart`);
    for (const item of this._cart) {
      console.log(`- ${item.name}: $${item.price}`);
    }
  }
}