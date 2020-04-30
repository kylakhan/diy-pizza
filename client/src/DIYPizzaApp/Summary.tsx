import React, {Component} from 'react'
import _ from 'lodash'


const SummaryHeader = ({title}: any) => (
    <div>
        <div className="row">
            <div className="col-lg-4"/>
            <div className="col-lg-4"><h3>{title}</h3></div>
            <div className="col-lg-4"/>
        </div>
    </div>)

const SummaryRow = ({value}: any) => (
    <div>
        <div className="row">
            <div className="col-lg-4"/>
            <div className="col-lg-4"><h5>{value}</h5></div>
            <div className="col-lg-4"/>
        </div>
    </div>)

const SummaryGroup = ({type, value, cost}: any) => (
    <div className='summary-row'>
        <SummaryHeader title={type}/>
        <h4>{cost}</h4>
        <SummaryRow value={value}/>
    </div>)


class Summary extends Component<any, any> {
    formattedSizeCost: string
    formattedCrustCost: string
    formattedToppingsCost: string
    formattedTotalCost: string

    constructor(props: any) {
        super(props);
        this.formattedSizeCost = ''
        this.formattedCrustCost = ''
        this.formattedToppingsCost = ''
        this.formattedTotalCost = ''

    }


    render() {
        const {title, size, sizeCost, crust, crustCost, toppings, toppingsCost, totalCost, currency} = this.props
        this.formattedToppingsCost = `(${currency}${toppingsCost})`
        this.formattedSizeCost = `(${currency}${sizeCost})`
        this.formattedCrustCost = `(${currency}${crustCost})`
        this.formattedTotalCost = `${currency}${totalCost}`
        return (
            <div>
                <h1><u>{title}</u></h1>
                <br/>

                <SummaryGroup type="Size" value={size} cost={this.formattedSizeCost}/>
                <br/><br/>
                <SummaryGroup type="Crust" value={crust} cost={this.formattedCrustCost}/>
                <br/><br/>

                <div>
                    <div className='summary-row'>
                        <SummaryHeader title="Toppings"/>
                        <h4>{this.formattedToppingsCost}</h4>
                        {(_.map(toppings, topping => {
                            return (
                                <SummaryRow value={topping}/>
                            )
                        }))}
                    </div>
                    <br/><br/>
                </div>

                <SummaryGroup type="Total Cost" value='' cost={this.formattedTotalCost}/>


            </div>
        )
    }
}

export default Summary