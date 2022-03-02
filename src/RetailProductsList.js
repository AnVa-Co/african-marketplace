import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export default function ProductsList(props)
{
    const { products } = props;
    const { url } = useRouteMatch();

    return (
        <div className='products-list-wrapper'>
            {products.map(item => (
                <div
                    className='product-card'
                    key={item.id}
                >
                    <Link to={`${url}/${item.id}`}>
                        <img
                            className='products-list-image'
                            src={require(`${item.picture}`).default}
                            alt={item.name}
                        />
                        <p>{item.name}</p>
                    </Link>
                    <p>{item.retailPrice}</p>
                </div>
            ))}
        </div>
    );
};