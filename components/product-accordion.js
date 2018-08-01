import React, {Component} from 'react';
import AccordionPanel from './product-accordion-panel';

class Accordion extends Component {
    constructor(props) {
        super(props)

        this.state = {
           shown: {}
        }
    }

    

    render () {
        return (
                <div>
                    <AccordionPanel name="Summary" handlePanelClick={this.handlePanelClick} panel="summary" />
                    <AccordionPanel name="Dimensions" handlePanelClick={this.handlePanelClick} panel="dimensions"/>
                    <AccordionPanel name="Shipping" handlePanelClick={this.handlePanelClick} panel="shipping"/>
                </div>
        )
    }
}

export default Accordion;