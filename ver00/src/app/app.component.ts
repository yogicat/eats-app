import { Component, OnInit } from '@angular/core';

import { Imenu } from './data';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
<<<<<<< HEAD
export class AppComponent implements OnInit {
  title = 'app';
  isActive = false;
=======
export class AppComponent {
  title = "app";
>>>>>>> e454f0e065aa96a1360bde118abe2320bd9c4c49
  menu: Imenu[] = [
    {
      id: 1,
      name: "Green Tea with Salted Cheese",
      category: "salted cheese",
      contents: "",
      price: 5.25
    },
    {
      id: 2,
      name: "Black Tea with Salted Cheese",
      category: "salted cheese",
      contents: "",
      price: 5.25
    },
    {
      id: 3,
      name: "Chocolate with Salted Cheese",
      category: "tea series",
      contents: "",
      price: 5.35
    },
    {
      id: 4,
      name: "Milk Tea with Oreo and Tiramisu Salted Cheese",
      category: "milk tea",
      contents: "",
      price: 5.4
    },
    {
      id: 5,
      name: "Chocolate with Tiramisu Salted Cheese",
      category: "milk tea",
      contents: "",
      price: 5.5
    },
    {
      id: 6,
      name: "Chocolate with Tiramisu Salted Cheese",
      category: "tea series",
      contents: "",
      price: 5.5
    },
    {
      id: 7,
      name: "Matcha Latte with Tiramisu Salted Cheese",
      category: "salted cheese",
      contents: "",
      price: 5.5
    },
    {
      id: 8,
      name: "Light Oolong Tea with Salted Cheese",
      category: "milk tea",
      contents: "",
      price: 5.5
    }
  ];
<<<<<<< HEAD
  addedItems: Imenu[] = [];
  menuCategory = Object.keys(this.menu.map(item => item.category).reduce( function(obj, item) {
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
  }, {}));

  addToCart(item) {
    this.addedItems = [...this.addedItems, item];
    console.table(this.addedItems);
  }

  totalPrice() {
    return this.addedItems.map(item => item.price).reduce( function(total, item) {
      return total += item;
    });
  }

  ngOnInit() {
    console.log(this.menuCategory);
=======
  whatCat(category) {
    return category === 'tea series';
>>>>>>> e454f0e065aa96a1360bde118abe2320bd9c4c49
  }
}
