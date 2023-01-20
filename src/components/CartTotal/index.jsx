import { DivPrice } from './style';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartTotal = ({ currentCart, setCurrentCart }) => {
    const notify = () =>
        toast.success('itens removidos com sucesso', {
            autoClose: 1000,
        });
    const removeAll = () => {
        notify();
        setCurrentCart([]);
    };

    const sumPrice = currentCart.reduce((prev, curr) => prev + curr.price, 0);
    const numberFormat = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(sumPrice);

    return (
        <DivPrice>
            <div>
                <p>Total</p>
                <span>{numberFormat}</span>
            </div>
            <button onClick={removeAll}> Remover todos </button>
        </DivPrice>
    );
};

export default CartTotal;
