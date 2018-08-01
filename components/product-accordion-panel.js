import React, {Component} from 'react';

class AccordionPanel extends Component {
    constructor(props) {
        super(props)
    
    }

    render() {
                

        return (
  
                <div >
                    <dt className="individual-panel accordion-panel product-summary" role="heading" aria-level="3"  data-panel={this.props.panel}>
                        
                            {this.props.name}  
                    </dt>
                    <dd className="info-drawer"
                        id="sect1"
                        role="region"
                        aria-labelledby="">
                        <div>
                            <p>This section is expanded, right? Oh, it looks nice when it expands. So smooth.</p>
                        </div>
                    </dd>
                </div> 
           

            
        )
    }
}

export default AccordionPanel;