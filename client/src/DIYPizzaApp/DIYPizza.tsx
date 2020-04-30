import React, {Component} from 'react'
import ChooseVariant from './ChooseVariant'
import ChooseToppings from './ChooseToppings'
import Summary from './Summary'
import {PizzaBuilder, Pizza} from "../Pizza/PizzaBuilder";


const initialBuilder = new PizzaBuilder()

interface State {
    pizza: any
    sizes: any,
    crusts: any,
    sizesFetched: boolean
    crustsFetched: boolean,
    toppingsFetched: boolean,
    currency: string
}

class DIYPizza extends Component<any, State> {

    builder = initialBuilder

    constructor(props: any, builder: PizzaBuilder) {
        super(props)
        this.builder = new PizzaBuilder()
        this.state = {
            pizza: new Pizza(),
            sizes: {},
            crusts: {},
            sizesFetched: false,
            crustsFetched: false,
            toppingsFetched: false,
            currency: ''
        }
    }

    componentDidMount() {
        this.fetchSizes()
        this.fetchCrusts()
        this.fetchToppings()
        this.fetchCurrency()
    }

    fetchCurrency = async () => {
        let response = await fetch('/currency');
        const body = await response.json();
        this.setState({
            currency: body['currency']
        });
    }

    fetchSizes = async () => {
        const response = await fetch('/pizza/sizes');
        const body = await response.json();
        this.builder.sizes = body
        this.setState({
            sizesFetched: true
        });
    };

    fetchCrusts = async () => {
        const response = await fetch(`/pizza/crusts`);
        const body = await response.json();
        this.builder.crusts = body
        this.setState({
            crustsFetched: true
        });

    };

    fetchToppings = async () => {
        const response = await fetch('/pizza/toppings');
        const body = await response.json();
        this.builder.toppings = body
        this.setState({
            toppingsFetched: true
        });

    }
    handleSizeConfirmation = (size: string) => {
        this.builder.buildPizza(size)
        this.setState({
                pizza: this.builder.pizza

            },
            () => {
                console.log(`pizza cost: ${this.state.pizza.cost},
            size: ${this.state.pizza.size},
            maxToppings: ${this.state.pizza.maxToppings}`);
            });
    }

    handleCrustConfirmation = (crust: string) => {
        this.builder.formCrust(crust)
        this.setState({
                pizza: this.builder.pizza
            },
            () => {
                console.log(`pizza cost: ${this.state.pizza.cost},
            size: ${this.state.pizza.size},
            maxToppings: ${this.state.pizza.maxToppings},
            crust: ${this.state.pizza.crust}`);
            });
    }

    handleToppingsConfirmation = (toppings: string[]) => {
        this.builder.addToppings(toppings)
        this.setState({
                pizza: this.builder.pizza
            },
            () => {
                console.log(`pizza cost: ${this.state.pizza.cost},
            size: ${this.state.pizza.size},
            maxToppings: ${this.state.pizza.maxToppings},
            crust: ${this.state.pizza.crust},
            toppings: ${this.state.pizza.toppings}`);
            });
    }


    render() {
        console.log(`this.builder.sizes: ${JSON.stringify(this.builder.sizes)}`)
        const {
            pizza,
            sizesFetched,
            crustsFetched,
            toppingsFetched,
            currency
        } = this.state

        return (
            <div>
                <hr/>
                <br/>
                {(sizesFetched && crustsFetched && toppingsFetched) ? (
                    <div>
                        {!pizza.size && <ChooseVariant
                            title='Choose your Pizza size!'
                            choices={this.builder.sizes}
                            currency={currency}
                            onConfirmation={this.handleSizeConfirmation.bind(this)}/>}

                        {pizza.size && !pizza.crust &&
                        <ChooseVariant
                            title='Choose your Pizza crust!'
                            choices={this.builder.crusts}
                            currency={currency}
                            onConfirmation={this.handleCrustConfirmation.bind(this)}/>}

                        {pizza.crust && !pizza.isDone &&
                        <ChooseToppings
                            title='Choose your toppings!'
                            toppings={this.builder.toppings}
                            maxToppings={pizza.maxToppings}
                            currency={currency}
                            onConfirmation={this.handleToppingsConfirmation.bind(this)}/>}

                        {pizza.isDone && <Summary
                            title='Summary'
                            size={pizza.size}
                            sizeCost={this.builder.sizes[pizza.size]['cost']}
                            crust={pizza.crust}
                            crustCost={this.builder.crusts[pizza.crust]['cost']}
                            toppings={pizza.toppings}
                            toppingsCost={pizza.toppingsCost}
                            totalCost={pizza.cost}
                            currency={currency}/>}
                    </div>) : (
                    <div>loading...</div>
                )}
            </div>
        )
    }
}


export default DIYPizza