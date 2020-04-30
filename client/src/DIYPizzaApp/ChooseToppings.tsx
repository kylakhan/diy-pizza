import React, {Component} from 'react'
import {Button, ToggleButton, ToggleButtonGroup} from 'react-bootstrap'
import _ from 'lodash'


interface State {
    choices: string[],
    toppingsImages: any,
    submitDisabled: boolean
}


class ChooseToppings extends Component<any, State> {

    constructor(props: any) {
        super(props);

        this.state = {
            choices: [],
            toppingsImages: {},
            submitDisabled: true
        }
    }

    componentDidMount() {
        const toppingsImages = this.mapToppingsImages()
        this.setState({toppingsImages: toppingsImages, submitDisabled: false}, () => {
            console.log(`this.state.toppingsImages: ${JSON.stringify(this.state.toppingsImages)}`)
        })
    }

    handleConfirmation = () => {
        this.props.onConfirmation(this.state.choices)
    }

    handleChange = (value: any) => {
        let didExceed = value.length > this.props.maxToppings
        this.setState({
            choices: value,
            submitDisabled: didExceed
        }, () => {
            console.log(`this.state.choices: ${this.state.choices}`)
        })
    };

    mapToppingsImages = () => {
        return _.chain(this.props.toppings['types'])
            .keyBy('name')
            .mapValues('image')
            .value()
    }


    render() {
        const {title, toppings, maxToppings, onConfirmation, currency} = this.props

        return (
            <div>
                <h1><u>{title}</u></h1>
                <h4>{`You may choose a maximum of ${maxToppings}`}</h4>
                <h6>{`Each topping is ${currency}${toppings['inExcess'][`cost`]} in excess of ${toppings['inExcess'][`number`]}`}</h6>
                <br/>

                <ToggleButtonGroup type="checkbox" onChange={this.handleChange} name='choices'>
                    {(_.map(this.state.toppingsImages, (imageSrc: string, topping: string) => {
                        return (
                            <ToggleButton value={topping} variant="outline-secondary" size='sm'>
                                <img src={imageSrc} width="75" height="75"/>{topping}
                            </ToggleButton>)
                    }))}

                </ToggleButtonGroup>


                <br/><br/>
                <Button variant="primary" onClick={this.handleConfirmation}
                        disabled={this.state.submitDisabled}>Proceed</Button>
            </div>

        )
    }
}

export default ChooseToppings