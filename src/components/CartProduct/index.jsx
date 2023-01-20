import { Subtitle } from '../../style/typography';
import { Product } from './style';
import { AiFillDelete } from 'react-icons/ai';
import { toast } from 'react-toastify';

const CartProduct = ({ product, currentCart, setCurrentCart }) => {
    const removeItemFromCart = currentItem => {
        const newList = currentCart.filter(item => item !== currentItem);
        onDelete();
        setCurrentCart(newList);
    };

    const onDelete = () => {
        toast.success('Item removido do carrinho!', {
            autoClose: 1000,
        });
    };

    return (
        <Product>
            <div className="div-img">
                <img src={product.img} alt={product.name} />
            </div>
            <div className="titulo-category">
                <h1 className="titulo">{product.name}</h1>
                <Subtitle>{product.category}</Subtitle>
            </div>
            <div className="delete-div">
                <button>
                    <AiFillDelete
                        size={21}
                        onClick={() => removeItemFromCart(product)}
                    />
                </button>
            </div>
        </Product>
    );
};

export default CartProduct;
