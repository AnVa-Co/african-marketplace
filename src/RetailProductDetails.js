import React from 'react';

export default function ProductDetails(props)
{
    const { text } = props;

    return (
        <div>
            <p className="product-details">{text}</p>
        </div>
    );
};