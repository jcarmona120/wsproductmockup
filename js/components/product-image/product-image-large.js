import React from 'react';

const LargeProductImage = (props) => {
    return (
        <div className="largeImage">
            <img src={`${props.selectedImage}.jpg`} alt="Apron Laid Out Flat" />
        </div>
    )
}

export default LargeProductImage;