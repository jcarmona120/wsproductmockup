import React, {Component} from 'react';

class Nav extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
            <nav>
                <ul id="navlinks">
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
                    <li className="navlinks__link home">Williams-Sonoma Home</li>
                </ul>
            </nav>
            <section>
                <ul id="breadcrumb" aria-label="breadcrumb">
                    <li>Home</li>
                    <span> > </span>
                    <li>Homekeeping</li>
                    <span> > </span>
                    <li>Aprons</li>
                    <span> > </span>
                    <li>Adult Aprons</li>
                    <span> > </span>
                    <li>{this.props.product.name}</li>
                </ul>
            </section>
        </div>
        )
    }
}

export default Nav;