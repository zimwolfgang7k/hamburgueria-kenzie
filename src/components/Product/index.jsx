import { ButtonTheme } from '../../style/button';
import { Price, Subtitle, Title } from '../../style/typography';
import { ContainerCard } from './style';
import { toast } from 'react-toastify';

const ProductCard = ({ product, setCurrentCart, currentCart }) => {
    const onError = () => {
        toast.error('Item já adicionado!', {
            autoClose: 1000,
        });
    };
    const onSuccess = () => {
        toast.success('Item adicionado ao carrinho!', {
            autoClose: 1000,
        });
    };

    const addItemCard = product => {
        if (currentCart.find(item => item.id === product.id)) {
            onError();
        } else {
            onSuccess();
            setCurrentCart([...currentCart, product]);
        }
    };
    const numberFormat = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(product.price);

    return (
        <ContainerCard>
            <div className="img-div">
                <img src={product.img} alt={product.name} />
            </div>
            <div className="text">
                <Title>{product.name}</Title>
                <Subtitle>{product.category}</Subtitle>
                <Price>{numberFormat}</Price>
                <ButtonTheme onClick={() => addItemCard(product)}>
                    Adicionar
                </ButtonTheme>
            </div>
        </ContainerCard>
    );
};

export default ProductCard;
