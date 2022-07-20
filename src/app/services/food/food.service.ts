import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  
  getFoodById(id:number){
    return this.getAll().find(food => food.id == id)!;
  }
  
  getAllFoodByTag(tag: string): Foods[] {
    return tag == 'All' ?
      this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 11 },
      { name: 'lunch', count: 5 },
      { name: 'rice', count: 3 },
      { name: 'dinner', count: 5 },
      { name: 'dessert', count: 3 },
      { name: 'sweet', count: 3 },
      { name: 'bread', count: 3 },


    ];
  }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Chicken Biriyani',
        price: 200,
        cookTime: '50-70',
        favorite: true,
        origins: ['Persia'],
        star: 4.0,
        imageUrl: '/assets/food1.jpg',
        tags: ['dinner', 'rice', 'biriyani']

      },
      {
        id: 2,
        name: 'Idly',
        price: 100,
        cookTime: '30-40',
        favorite: false,
        origins: ['South India'],
        star: 4.1,
        imageUrl: '/assets/food2.jpg',
        tags: ['breakfast', 'healthy', 'idly']

      },
      {
        id: 3,
        name: 'Stuffed Kulcha',
        price: 80,
        cookTime: '20-30',
        favorite: false,
        origins: ['North India'],
        star: 4.3,
        imageUrl: '/assets/food3.jpg',
        tags: ['dinner', 'lunch', 'bread', 'Wheat']

      },
      {
        id: 4,
        name: 'Mutton Kebab',
        price: 250,
        cookTime: '50-70',
        favorite: false,
        origins: ['Hyderabad'],
        star: 4.4,
        imageUrl: '/assets/food5.jpg',
        tags: ['dinner', 'grilled', 'Kebab']

      },
      {
        id: 5,
        name: 'Chole Thali',
        price: 180,
        cookTime: '50-70',
        favorite: false,
        origins: ['North India'],
        star: 4.0,
        imageUrl: '/assets/food6.jpg',
        tags: ['dinner', 'lunch', 'rice', 'bread']

      },
      {
        id: 6,
        name: 'Dosa',
        price: 150,
        cookTime: '40-50',
        favorite: false,
        origins: ['South India'],
        star: 4.0,
        imageUrl: '/assets/food7.jpg',
        tags: ['lunch', 'rice', 'healthy']

      },
      {
        id: 7,
        name: 'Paneer Tikka masala',
        price: 200,
        cookTime: '50-70',
        favorite: true,
        origins: ['North India'],
        star: 4.8,
        imageUrl: '/assets/Paneer_Tikka_masala.jpg',
        tags: ['dinner', 'paneer', 'spicy']

      },
      {
        id: 8,
        name: 'Roti',
        price: 50,
        cookTime: '20',
        favorite: false,
        origins: ['India'],
        star: 4.1,
        imageUrl: '/assets/roti.jpg',
        tags: ['dinner', 'lunch', 'bread']

      },
      {
        id: 9,
        name: ' Supreme Thali',
        price: 250,
        cookTime: '50-70',
        favorite: false,
        origins: ['India'],
        star: 4.3,
        imageUrl: '/assets/Thali.jpg',
        tags: ['dinner', 'rice', 'bread', 'lunch', 'india']

      },
      {
        id: 10,
        name: 'Jalebi',
        price: 100,
        cookTime: '50-70',
        favorite: false,
        origins: ['Persia'],
        star: 4.2,
        imageUrl: '/assets/dessert.jpg',
        tags: ['dessert', 'jalebi', 'sweet']

      },
      {
        id: 11,
        name: 'sweets',
        price: 500,
        cookTime: '50-70',
        favorite: false,
        origins: ['Bengal'],
        star: 4.5,
        imageUrl: '/assets/sweets.jpg',
        tags: ['sweet', 'milk', 'anytime', 'dessert']

      }

    ];
  }
}
