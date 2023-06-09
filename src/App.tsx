import React, { useEffect, useState } from 'react';
import Cart from './components/Cart';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import ProductsList from './components/ProductsList';
import { Main } from './style';
import { Container } from './style/global';
import Home from './page/home';

function App() {
    return (
        <div className="App">
            {/* <Home /> */}
            <Container>
                <Header />
                <Main>
                    <ProductsList />
                    <Cart />
                </Main>
                <ToastContainer />
            </Container>
        </div>
    );
}

export default App;
