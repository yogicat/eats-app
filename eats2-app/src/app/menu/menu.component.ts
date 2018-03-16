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
      img: '../../assets/images/items/alex-loup-397220-unsplash.jpg'
    },
    {
      id: 3,
      title: 'Black Magic',
      disc: 'Cucumber, celery, kale, spinach, romaine, lemon, and ginger.',
      price: 7.75,
      category: 'juice',
      img: '../../assets/images/items/alex-loup-397220-unsplash.jpg'
    },
    {
      id: 4,
      title: 'Cashew Mylk',
      disc: 'Cucumber, celery, kale, spinach, romaine, lemon, and ginger.',
      price: 9.25,
      category: 'mylk',
      img: '../../assets/images/items/alex-loup-397220-unsplash.jpg'
    },
    {
      id: 5,
      title: 'Almond Mylk',
      disc: 'Kale, romaine, spinach, celery, cucumber, green apple, and lemon.',
      price: 9.25,
      category: 'mylk',
      img: '../../assets/images/items/alex-loup-397220-unsplash.jpg'
    },
    {
      id: 6,
      title: 'Turmeric Mylk',
      disc: 'Cucumber, celery, kale, spinach, romaine, lemon, and ginger.',
      price: 7.75,
      category: 'mylk',
      img: '../../assets/images/items/alex-loup-397220-unsplash.jpg'
    },
    {
      id: 7,
      title: 'Cashew Mylk',
      disc: 'Cucumber, celery, kale, spinach, romaine, lemon, and ginger.',
      price: 9.25,
      category: 'mylk',
      img: '../../assets/images/items/alex-loup-397220-unsplash.jpg'
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
      img: '../../assets/images/items/alex-loup-397220-unsplash.jpg'
    }
  ];

  catList: any[] = [];
  listByCat: any[] = [];
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
  constructor() { }

  ngOnInit() {
    this.getCategory();
  }

}
