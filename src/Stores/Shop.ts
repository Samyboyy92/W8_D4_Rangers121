import Item from "./Item";

export default class Shop {

    private _items: Item[];
  
    constructor() {
      this._items = [];
  
      const item1 = new Item('Item 1', 10, 'Description for Item 1');
      const item2 = new Item('Item 2', 20, 'Description for Item 2');
      const item3 = new Item('Item 3', 30, 'Description for Item 3');
  
      this._items.push(item1, item2, item3);
    }
  
    public get items(): Item[] {
      return this._items;
    }
}