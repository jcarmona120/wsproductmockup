import React from 'react';

const AddToCartModal = () => {
    return (
        <div role="dialog"
        id="dialog1"
        aria-labelledby="dialog1_label"
        aria-modal="true">
            <h1>You did it!</h1>
            <h2 id="dialog1_label" className="dialog_label">
                Add Delivery Address
            </h2>
        </div>
    )
}

export default AddToCartModal;