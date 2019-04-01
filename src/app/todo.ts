
export class Todo {
    id: number;
    // name: number;
    // name = new Name();
    name = ({
      name: 'string',
      checked: false,
    });
    items: any[] = [];

    constructor(id: number, name, items: []) {
      this.id = id;
      this.name = name;
      this.items = items;
    }
   addItem(a: string) {
     this.items.push(a);
   }
   deleteItem(index: number) {
     this.items.splice(index, 1);
   }
   editItem(index, value) {
     this.items[index] = value;
   }
  }
