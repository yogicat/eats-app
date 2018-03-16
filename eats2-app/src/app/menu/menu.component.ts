import { Component, OnInit } from '@angular/core';
import { Imenu } from '../menu.interface';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items: Imenu[] = [
    {
      id: 1,
      title: 'Deep Green',
      disc: 'Cucumber, celery, kale, spinach, romaine, lemon, and ginger.',
      price: 9.25,
      category: 'juice',
      img: '../../assets/images/items/alex-loup-397220-unsplash.jpg'
    },
    {
      id: 2,
      title: 'Green Lemon',
      disc: 'Kale, romaine, spinach, celery, cucumber, green apple, and lemon.',
      price: 9.25,
      category: 'juice',
      img: '../../assets/images/items/karly-gomez-360069-unsplash.jpg'
    },
    {
      id: 3,
      title: 'Black Magic',
      disc: 'Cucumber, celery, kale, spinach, romaine, lemon, and ginger.',
      price: 7.75,
      category: 'juice',
      img: '../../assets/images/items/brooke-lark-203844-unsplash.jpg'
    },
    {
      id: 4,
      title: 'Cashew Mylk',
      disc: 'Cucumber, celery, kale, spinach, romaine, lemon, and ginger.',
      price: 9.25,
      category: 'mylk',
      img: '../../assets/images/items/item00.jpg'
    },
    {
      id: 5,
      title: 'Almond Mylk',
      disc: 'Kale, romaine, spinach, celery, cucumber, green apple, and lemon.',
      price: 9.25,
      category: 'mylk',
      img: '../../assets/images/items/item01.jpg'
    },
    {
      id: 6,
      title: 'Turmeric Mylk',
      disc: 'Cucumber, celery, kale, spinach, romaine, lemon, and ginger.',
      price: 7.75,
      category: 'mylk',
      img: '../../assets/images/items/item02.jpg'
    },
    {
      id: 7,
      title: 'Cashew Mylk',
      disc: 'Cucumber, celery, kale, spinach, romaine, lemon, and ginger.',
      price: 9.25,
      category: 'mylk',
      img: '../../assets/images/items/item03.jpg'
    },
    {
      id: 8,
      title: 'Almond Mylk',
      disc: 'Kale, romaine, spinach, celery, cucumber, green apple, and lemon.',
      price: 9.25,
      category: 'smoothie',
      img: '../../assets/images/items/alex-loup-397220-unsplash.jpg'
    },
    {
      id: 9,
      title: 'Turmeric Mylk',
      disc: 'Cucumber, celery, kale, spinach, romaine, lemon, and ginger.',
      price: 7.75,
      category: 'smoothie',
      img: '../../assets/images/items/brooke-lark-203844-unsplash.jpg'
    }
  ];

  addedItems: Imenu[] = [];
  catList: any[] = [];
  listByCat: any[] = [];
  price: number;
  noItem = false;
  status = 'all';
  getCategory(): void {
    this.catList = Object.keys(this.items.map(item => item.category).reduce( function (obj, item) {
      if (!obj[item]) {
        obj[item] = 0;
      }
      obj[item]++;
      return obj;
    }, {}));
  }

  toggleMenu(name) {
    console.log(name);
  }

  addToCart(item): void {
    this.addedItems = [...this.addedItems, item];
    console.table(this.addedItems);
  }

  totalPrice(): string {
    this.price = this.addedItems.map(item => item.price).reduce(function (total, item) {
      return total += item;
    }, 0);
    if (this.price === 0 ) {
      this.noItem = true;
      return 'your cart is empty';
    } else {
      this.noItem = false;
      return `$ ${this.price}`;
    }
  }

  removeItem(addedItem): void {
    this.addedItems = this.addedItems.filter(item => item.id !== addedItem.id);
  }

  changeStatus(name): void {
    this.status = name;
    console.log(this.status);
  }
  constructor() {}

  ngOnInit() {
    this.getCategory();
  }

}
