import React, {Component} from 'react'
import {Button, ToggleButtonGroup, ToggleButton} from 'react-bootstrap'
import _ from 'lodash'


interface State {
    choice: string
    choicesCosts: any
    submitDisabled: boolean
}

class ChooseVariant extends Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            choice: '',
            choicesCosts: {},
            submitDisabled: true
        }
    }

    componentDidMount() {
        this.setState({choicesCosts: this.mapCosts(this.props.choices)})
    }

    handleConfirmation = () => {
        this.props.onConfirmation(this.state.choice)
    }

    handleChange = (value: any) => {
        this.setState({
            choice: value,
            submitDisabled: false
        });
    };

    mapCosts = (data: object) => {
        return _.mapValues(data, (value, key) => {
            return value['cost']
        })
    }

    render() {
        const {title, currency} = this.props
        return (
            <div>
                <h1><u>{title}</u></h1>
                <br/>
                <ToggleButtonGroup type="radio" onChange={this.handleChange} name='choices'>
                    {(_.map(this.state.choicesCosts, (cost: number, choice: string) => {
                        return (<ToggleButton key={choice} variant='outline-secondary' size='lg' value={choice}
                                              name={choice}
                                              defaultChecked>
                            {choice} ({`${currency}${cost}`})
                        </ToggleButton>)
                    }))}
                </ToggleButtonGroup>
                <br/><br/>
                <Button variant="outline-primary" onClick={this.handleConfirmation}
                        disabled={this.state.submitDisabled}>Choose
                    this</Button>

            </div>

        )
    }
}

export default ChooseVariant