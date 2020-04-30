export class Pizza {

    description: string = ''
    cost: number = 0
    maxToppings: number = 0
    maxPrice: number = 0
    size: string = ''
    crust: string = ''
    toppings: string[] = []
    isDone: boolean = false
    toppingsCost: number = 0
}

export class PizzaBuilder {
    pizza: Pizza = new Pizza()
    sizes: any = {}
    crusts: any = {}
    toppings: any = {}


    constructor() {
        this.pizza = new Pizza()
        this.sizes = {}
        this.crusts = {}
        this.toppings = {}
    }


    buildPizza = (size: string) => {
        console.log(`this.sizes: ${JSON.stringify(this.sizes)}`)
        this.pizza.size = size
        this.pizza.maxToppings = this.sizes[size]['maxToppings']
        this.pizza.cost = this.sizes[size]['cost']
    }

    formCrust = (crust: string) => {
        console.log(`this.crusts: ${JSON.stringify(this.crusts)}`)
        this.pizza.crust = crust
        this.pizza.cost = this.pizza.cost + this.crusts[crust]['cost']
    }

    addToppings = (toppings: string[]) => {
        this.pizza.toppings = toppings
        const excess = toppings.length > this.toppings['inExcess']['number'] ?
            toppings.length - this.toppings['inExcess']['number'] : 0
        this.pizza.toppingsCost = excess * this.toppings['inExcess']['cost']
        this.pizza.cost = this.pizza.cost + this.pizza.toppingsCost
        this.pizza.isDone = true
    }


}
