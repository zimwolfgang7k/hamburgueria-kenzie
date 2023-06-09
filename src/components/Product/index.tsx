import { UseContextData } from '../../context/context';
import { ButtonTheme } from '../../style/button';
import { Price, Subtitle, Title } from '../../style/typography';
import { ContainerCard } from './style';

const ProductCard = ({ product }) => {
    const { addItemCard } = UseContextData();

    const numberFormat = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(product.price);

    return (
        <li>
            <div className="img-div">
                <img src={product.img} alt={product.name} />
            </div>
            <div className="text">
                <h1>{product.name}</h1>
                <span>{product.category}</span>
                <p>{numberFormat}</p>
                <button onClick={() => addItemCard(product)}>Adicionar</button>
            </div>
        </li>
    );
};

export default ProductCard;
