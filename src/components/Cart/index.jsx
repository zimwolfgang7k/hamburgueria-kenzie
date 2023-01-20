import { ContainerCarrinho } from './style';
import { Title, Subtitle } from '../../style/typography';
import CartProduct from '../CartProduct';
import CartTotal from '../CartTotal';

const Cart = ({ currentCart, setCurrentCart }) => {
    return (
        <>
            <ContainerCarrinho>
                <div className="green">
                    <Title>Carrinho de compras</Title>
                </div>
                <div className="div-itens">
                    <ul className="itens">
                        {currentCart.length > 0 ? (
                            currentCart.map(product => {
                                return (
                                    <CartProduct
                                        product={product}
                                        currentCart={currentCart}
                                        key={product.id}
                                        setCurrentCart={setCurrentCart}
                                    />
                                );
                            })
                        ) : (
                            <div className="text">
                                <Title>Sua sacola está vazia</Title>
                                <Subtitle>Adicione itens</Subtitle>
                            </div>
                        )}
                    </ul>
                </div>
                <CartTotal
                    currentCart={currentCart}
                    setCurrentCart={setCurrentCart}
                />
            </ContainerCarrinho>
        </>
    );
};

export default Cart;
