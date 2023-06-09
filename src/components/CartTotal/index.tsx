import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UseContextData } from '../../context/context';

const CartTotal = () => {
    const { setCurrentCart, currentCart } = UseContextData();

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
        <div>
            <div>
                <p>Total</p>
                <span>{numberFormat}</span>
            </div>
            <button onClick={removeAll}> Remover todos </button>
        </div>
    );
};

export default CartTotal;
