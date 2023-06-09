import { UseContextData } from '../../context/context';
import ProductCard from '../Product';

const ProductsList = () => {
    const { currentCart, filteredProducts, itensList, setCurrentCart } =
        UseContextData();

    return (
        <ul>
            {(filteredProducts.length > 0 ? filteredProducts : itensList).map(
                product => (
                    <ProductCard
                        product={product}
                        key={product.id}
                        // setCurrentCart={setCurrentCart}
                        // currentCart={currentCart}
                    />
                )
            )}
        </ul>
    );
};

export default ProductsList;
