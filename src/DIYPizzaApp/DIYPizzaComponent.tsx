import React, {Component} from 'react'
import ChooseSizeComponent from './ChooseSizeComponent'
import {Pizza, SmallPizza} from '../Pizza/Pizza'


const initialPizza = new Pizza()

interface State {
    pizza: any // typeof Pizza
    hasSize: boolean
    hasCrust: boolean
    done: boolean
}

class DIYPizzaComponent extends Component<any, State> {
    constructor(props: any) {
        super(props)

        this.state = {
            pizza: initialPizza,
            hasSize: false,
            hasCrust: false,
            done: false

        }
    }

    handleSizeConfirmation = (size: string) => {
        console.log(`handleSizeConfirmation called! size: ${size}`)
        this.setState({hasSize: true, pizza: new SmallPizza(this.state.pizza)},
            () => {
                console.log(`pizza.cost: ${this.state.pizza.getCost()}, type: ${typeof this.state.pizza}`);
            });

    }

    render() {
        return (
            <div>
                {this.state.hasSize ?
                    <div>{'ChooseCrust sana dito'}</div> :
                    <ChooseSizeComponent
                        title='Choose your Pizza size!'
                        onConfirmation={this.handleSizeConfirmation.bind(this)}/>}
            </div>

        )
    }
}


export default DIYPizzaComponent