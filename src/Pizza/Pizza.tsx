import React from 'react'

export class Pizza {

    description: string = ''
    cost: number = 0
    toppingsLimit: number = 0
    maxPrize: number = 0

    getCost() {
        return this.cost
    }
}

// class SideDish extends Dish{
//   constructor(dish){
//      super();
//      this.dish = dish;
//   }
//   getPrice(){
//      return this.dish.getPrice();
//   }
//   getDes(){
//      return this.dish.getDes();
//   }
// }

export class SmallPizza extends Pizza {
    constructor(pizza: Pizza) {
        console.log('SmallPizza constructor!')
        super()
        this.cost = pizza.cost + 8
        console.log(`this.cost: ${this.cost}`)

    }


}

//
// class MediumPizza extends Pizza {
//     constructor() {
//         super()
//         this.cost = 10
//     }
// }
//
// class LargePizza extends Pizza {
//     constructor() {
//         super()
//         this.cost = 12
//     }
// }
//
// class CrustDecorator extends Pizza {
//     constructor(pizza)
// }


