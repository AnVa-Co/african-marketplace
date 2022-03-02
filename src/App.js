import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { RegisterPage } from './RegisterPage';
import { ClientSpace } from './ClientSpace';
import { GlobalStyle } from "./Styled/Global";
import { Container } from "./Styled/Container";
import { Nav, NavHeader, NavItem, NavItems, NavItemButton } from "./Styled/Navbar";
import RetailProduct from "./RetailProduct";
import RetailProductsList from "./RetailProductsList";
import { Retail } from "./Retail";
import 'semantic-ui-css/semantic.min.css';

// Hard-coded products data.
import { data } from "./data/products";

export default function App()
{
    // Save "username" in React State Hook.
    // Set initial value to empty string.
    const [username, setUsername] = useState('');

    // Save "redirectTo" in React State Hook.
    //Set initial value to "/" (Home Page).
    const [redirectTo, setRedirectTo] = useState("/");

    // Save "stock" in React State Hook.
    // Set initial value to empty array.
    const [products, setProducts] = useState([]);

    // This useEffect runs on start and when "username" changed
    useEffect(() =>
    {
        if (username === '')
        {
            // If "username" is empty it will redirect to "Home" page
            setRedirectTo('/');
        }
        else
        {
            // If "username" is set it will redirect to "ClientSpace" page
            setRedirectTo('/client/home');
        }

    }, [username]);

    useEffect(() =>
    {
        setProducts(data);
    }, []);

    // This function is used to set "username" for logged in user,
    // or set to empty for logged out user
    function setLoggedUser(username)
    {
        setUsername(username);
    };

    function showRetailProduct(id)
    {

    };

    return (
        <Container>
            <GlobalStyle />
            <Nav>
                <NavHeader>African Marketplace</NavHeader>
                <NavItems>
                    {/* Link to Home Page available always */}
                    <NavItem to="/">Home</NavItem>

                    {/* Link to Grocery Products Page available for logged in user */}
                    {username && products && <NavItem to="/retail/products">Grocery</NavItem>}
                    
                    {/* Link to Clothing Products Page available for logged in user */}
                    {username && <NavItem to="/clothing">Clothing</NavItem>}

                    {/* Link to Client Home Page available for logged in user */}
                    {username && <NavItem to="/client/home">Client Space</NavItem>}

                    {/* When user is logged in user "Logout" link display; otherwise "Login" link display */}
                    {
                        username
                            ? <NavItemButton to="/" onClick={() => setLoggedUser('')}>Logout</NavItemButton>
                            : <NavItemButton to="/login">Login</NavItemButton>
                    }
                </NavItems>
            </Nav>

            <div>
                {redirectTo && <Redirect to={redirectTo} />}

                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>

                    <Route path="/retail/products/:productId">
                        <RetailProduct products={products} />
                    </Route>

                    <Route path="/retail/products">
                        <RetailProductsList products={products} />
                    </Route>

                    <Route path="/clothing">
                        <Retail />
                    </Route>

                    <Route path="/client/home">
                        <ClientSpace username={username} />
                    </Route>

                    <Route path="/login" >
                        <LoginPage setLoggedUser={setLoggedUser} />
                    </Route>

                    <Route path="/register" >
                        <RegisterPage setLoggedUser={setLoggedUser} />
                    </Route>

                    <Route path="/logout">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </div>
        </Container>
    );
}