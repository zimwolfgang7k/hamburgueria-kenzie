import React, { useEffect, useState } from 'react';
import Cart from './components/Cart';
import Header from './components/Header/';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import ProductsList from './components/ProductsList';
import { api } from './services/api';
import { Main } from './style';
import { Container } from './style/global';

function App() {
    const [itensList, setItensList] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentCart, setCurrentCart] = useState([]);

    useEffect(() => {
        api.get('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
            .then(response => setItensList(response.data))
            .catch(err => console.log(err));
    }, []);
    return (
        <div className="App">
            <Header
                itensList={itensList}
                setFilteredProducts={setFilteredProducts}
            />
            <Container>
                <Main>
                    <ProductsList
                        itensList={itensList}
                        filteredProducts={filteredProducts}
                        setCurrentCart={setCurrentCart}
                        currentCart={currentCart}
                    />
                    <Cart
                        currentCart={currentCart}
                        setCurrentCart={setCurrentCart}
                    />
                </Main>
                <ToastContainer />
            </Container>
        </div>
    );
}

export default App;
