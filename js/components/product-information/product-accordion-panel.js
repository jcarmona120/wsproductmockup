import React, { Component } from 'react';

class AccordionPanel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            expanded: props.defaultExpanded
        }

        this.handlePanelClick = this.handlePanelClick.bind(this)
    }

    handlePanelClick(label) {
        this.setState({
            expanded: !this.state.expanded
        })
    }

    render() {
        let showPanel;
        if (this.state.expanded) {
            showPanel = 
                <React.Fragment>
                    <dt className=" accordion-panel product-panels_open product-summary" role="heading" aria-level="3">
                        <button aria-expanded="{true}"
                            className="expand-panel"
                            aria-controls="sect1"
                            id="accordion1"
                            type="button" onClick={this.handlePanelClick}>
                            <span className="arrow-down"></span>
                            {this.props.name}
                        </button>
                    </dt>
                    <dd className="info-drawer expand"
                        role="region"
                        aria-labelledby="accordion1">
                        <div>
                            <p>This section is expanded, right? Oh, it looks nice when it expands. Let's close this.</p>
                        </div>
                    </dd>
                </React.Fragment>
        } else {
            showPanel =
                <React.Fragment>
                    <dt className=" accordion-panel product-panels_open product-summary" role="heading" aria-level="3">
                        <button aria-expanded="false"
                            className="expand-panel"
                            aria-controls="sect1"
                            id="accordion1"
                            type="button" onClick={this.handlePanelClick}>
                            <span className="arrow-right"></span>
                            {this.props.name}
                        </button>
                    </dt>
                </React.Fragment>
        }



        return (

            <div>
                {showPanel}
            </div>



        )
    }
}

export default AccordionPanel;