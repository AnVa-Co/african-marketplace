import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
import Item from './Item';
import Details from './Details';
import { Button, Icon } from 'semantic-ui-react';

const listItems = [
    { id: '1', gender: 'male', category: 'Shoes', item_name: 'Sneakers', price: 22.99, wholesale_price: 15.99, img: './Assets/sneakers.jpg' },
    { id: '2', gender: 'male', category: 'Top', item_name: 'Shirt', price: 19.99, wholesale_price: 16.99, img: './Assets/shirts.jpg' },
    { id: '3', gender: 'male', category: 'Pants', item_name: 'Jeans', price: 40.00, wholesale_price: 25.00, img: './Assets/jeans.jpg' },
    { id: '4', gender: 'male', category: 'Accessories', item_name: 'Socks', price: 7.99, wholesale_price: 4.99, img: './Assets/socks.jpg' },
    { id: '5', gender: 'women', category: 'Top', item_name: 'Blazer', price: 37.99, wholesale_price: 25.99, img: './Assets/blazer.jpg' },
    { id: '6', gender: 'women', category: 'Bottom', item_name: 'Pencil_skirt', price: 75.99, wholesale_price: 59.99, img: './Assets/skirt.jpg' },
    { id: '7', gender: 'women', category: 'Pumps', item_name: 'High_heel', price: 100.00, wholesale_price: 72.99, img: './Assets/heel.jpg' },
    { id: '8', gender: 'women', category: 'Tights', item_name: 'Pantyhose', price: 14.99, wholesale_price: 8.99, img: './Assets/pantyhose.jpg' }
];


export function Retail()
{
    const [items, setItems] = useState([]);
    const [currentItem, setCurrentItem] = useState('');

    const openDetails = (item) =>
    {
        setCurrentItem(item);
    };

    const closeDetails = () =>
    {
        setCurrentItem(null);
    };

    useEffect(() =>
    {
        setItems(listItems);
    }, []);
    const ButtonExampleAnimated = () => (
        <div>
            <Button animated>
                <Button.Content visible>Next</Button.Content>
                <Button.Content hidden>
                    <Icon name='arrow right' />
                </Button.Content>
            </Button>
            <Button animated='vertical'>
                <Button.Content hidden>Shop</Button.Content>
                <Button.Content visible>
                    <Icon name='shop' />
                </Button.Content>
            </Button>
            <Button animated='vertical'>
                <Button.Content visible>Sign-up for a Pro account</Button.Content>
                <Button.Content hidden>$12.99 a month</Button.Content>
            </Button>
            <Button circular color='facebook' icon='facebook' />
            <Button circular color='twitter' icon='twitter' />
            <Button circular color='linkedin' icon='linkedin' />
            <Button circular color='google plus' icon='google plus' />
        </div>
    );

    return (
        <div div className='container' >
            {ButtonExampleAnimated()}
            <h1>BEST PRICE GUARANTEE !</h1>
            {
                items.map(item =>
                {
                    return <Item key={item.id} item={item} action={openDetails} />;
                })
            }
            {
                currentItem && <Details item={currentItem} close={closeDetails} />
            }
        </div>
    );
}