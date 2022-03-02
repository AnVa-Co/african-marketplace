import React from 'react';

import
{
    Route,
    Switch,
    useRouteMatch,
    useParams,
    NavLink,
    Redirect
} from 'react-router-dom';

import RetailProductDetails from './RetailProductDetails';

export default function Product(props)
{
    const { products } = props;
    const { productId } = useParams();
    const { url, path } = useRouteMatch();
    const product = products.find(item => item.id === parseInt(productId));

    return (
        product
            ?
            <div className='product-wrapper'>
                <div className='product-header'>
                    <div className='picture-wrapper'>
                        <img src={require(`${product.picture}`).default} alt={product.name} />
                    </div>
                    <div className='picture-title-wrapper'>
                        <h2>{product.name}</h2>
                        <h4>{product.retailPrice}</h4>
                    </div>
                </div>
                <nav className='product-sub-nav'>
                    <NavLink to={`${url}/description`}>Description</NavLink>
                    <NavLink to={`${url}/wholesale-price`}>Wholesale Price</NavLink>
                </nav>

                <Switch>
                    <Route path={`${path}/wholesale-price`}>
                        <RetailProductDetails text={product.wholesalePrice} product={product} />
                    </Route>
                    <Route path={`${path}/description`}>
                        <RetailProductDetails text={product.description} product={product} />
                    </Route>
                </Switch>
            </div>
            :
            <Redirect to='/retail/products' />
    );
};

