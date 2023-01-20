import ProductCard from '../Product';
import { ProductsLista } from './style';

const ProductsList = ({
    itensList,
    filteredProducts,
    setCurrentCart,
    currentCart,
}) => {
    return (
        <ProductsLista>
            {(filteredProducts.length > 0 ? filteredProducts : itensList).map(
                product => (
                    <ProductCard
                        product={product}
                        key={product.id}
                        setCurrentCart={setCurrentCart}
                        currentCart={currentCart}
                    />
                )
            )}
        </ProductsLista>
    );
};

export default ProductsList;
