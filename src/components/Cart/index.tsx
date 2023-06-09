import { ContainerCarrinho } from './style';
import { Title, Subtitle } from '../../style/typography';
import CartProduct from '../CartProduct';
import CartTotal from '../CartTotal';
import { UseContextData } from '../../context/context';

const Cart = () => {
    const { currentCart } = UseContextData();

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
                                        key={product.id}
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
                <CartTotal />
            </ContainerCarrinho>
        </>
    );
};

export default Cart;
