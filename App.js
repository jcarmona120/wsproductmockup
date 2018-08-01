import React, {Component} from 'react';
import { render } from 'react-dom';
import Header from './components/header'
import Nav from './components/nav'
import Product from './components/product'

import catalog from './db.js'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            product: catalog[0]
        };

    }

    render() {
        return (
            <div>
                <Header />
                <Nav product={this.state.product} />
                <Product catalog={catalog} product={this.state.product}/>
            </div>
    
        )
    }
    
}

render(<App />, document.getElementById('root'))