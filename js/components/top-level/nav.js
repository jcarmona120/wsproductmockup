import React, { Component } from 'react';

class Nav extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <nav>
                    <ul className="navlinks">
                        <li className="navlinks__link">COOKWARE</li>
                        <li className="navlinks__link">Cooks' Tools</li>
                        <li className="navlinks__link">Cutlery</li>
                        <li className="navlinks__link">Electrics</li>
                        <li className="navlinks__link">Bakeware</li>
                        <li className="navlinks__link">Food</li>
                        <li className="navlinks__link">Tabletop & Bar</li>
                        <li className="navlinks__link">Homekeeping</li>
                        <li className="navlinks__link">Outdoor</li>
                        <li className="navlinks__link">Sale</li>
                    </ul>
                    <span className="home navlinks navlinks__link">
                        Williams-Sonoma Home
                    </span>
                </nav>
                <section>
                    <ul id="breadcrumb" aria-label="breadcrumb">
                        <li>Home</li>
                        <span className="breadcrumb-arrow"> > </span>
                        <li>Homekeeping</li>
                        <span className="breadcrumb-arrow"> > </span>
                        <li>Aprons</li>
                        <span className="breadcrumb-arrow"> > </span>
                        <li>Adult Aprons</li>
                        <span className="breadcrumb-arrow"> > </span>
                        <li>{this.props.productName}</li>
                    </ul>
                </section>
            </div>
        )
    }
}

export default Nav;