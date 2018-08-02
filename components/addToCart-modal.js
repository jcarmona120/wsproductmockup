import React from 'react';

const AddToCartModal = (props) => {

    return (
        <div role="dialog"
            aria-modal="true">
            <h1 className="addedToBasket">You've just added the following to your basket: </h1>
            <h2 id="dialog1_label" className="dialog_label">
                {props.product.name}
            </h2>

            <div className="basketItem">
                <img src={`${props.product.properties.imageURL.small}.jpg`} alt={`thumbnail of purchased item: ${props.product.name}`} />
                <div className="basketItem-info">
                    <p>Item ID: {props.product.id}</p>
                    <p>Price: {props.product.properties.price}</p>
                </div>
            </div>

            <div className="shoppingButton">
                <button className="continueShopping" onClick={props.continueShopping}>Continue Shopping</button>
            </div>
        </div>

    )
}

export default AddToCartModal;