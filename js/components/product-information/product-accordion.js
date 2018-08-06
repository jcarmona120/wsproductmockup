import React, { Component } from 'react';
import AccordionPanel from './product-accordion-panel';

class Accordion extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <dl className="accordion" aria-live="polite">
                <AccordionPanel name="summary" defaultExpanded={true} />
                <AccordionPanel name="dimensions" defaultExpanded={false}/>
                <AccordionPanel name="Shipping" defaultExpanded={false} />
            </dl>
        )
    }
}

export default Accordion;