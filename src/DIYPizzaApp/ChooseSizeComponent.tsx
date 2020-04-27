import React, {Component} from 'react'
import {Button} from 'react-bootstrap'

class ChooseSizeComponent extends Component<any> {

    handleConfirmation = () => {
        let size = 'small'// get selected radio button value
        this.props.onConfirmation(size)
    }

    render() {
        const {title, onConfirmation} = this.props
        return (
            <div>
                <h1>{title}</h1>
                <Button variant="primary" onClick={this.handleConfirmation}>Choose this crust</Button>
            </div>

        )
    }
}

export default ChooseSizeComponent