import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';
import { api } from '../services/api';
import { toast } from 'react-toastify';

interface ProviderProps {
    children: ReactNode;
}

interface IProducts {
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
}

export interface ProviderData {
    handleSearch: any;
    setInput: React.Dispatch<React.SetStateAction<string>>;
    itensList: IProducts[];
    filteredProducts: IProducts[];
    currentCart: IProducts[];
    setCurrentCart: React.Dispatch<React.SetStateAction<IProducts[]>>;
    addItemCard: (product: IProducts) => void;
}

const AuthContext = createContext<ProviderData>({} as ProviderData);

const UseContextData = () => {
    const context = useContext(AuthContext);

    return context;
};

const AuthProvider = ({ children }: ProviderProps) => {
    const [input, setInput] = useState<string>('');
    const [itensList, setItensList] = useState<IProducts[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<IProducts[]>([]);
    const [currentCart, setCurrentCart] = useState<IProducts[]>([]);

    const handleSearch = (e: React.FormEvent<HTMLInputElement>): void => {
        e.preventDefault();
        const filterName = itensList.filter(item => {
            return (
                item.name.toLowerCase().match(input) ||
                item.category.toLowerCase().match(input)
            );
        });
        setFilteredProducts(filterName);
    };

    useEffect(() => {
        api.get('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
            .then(response => setItensList(response.data))
            .catch(err => console.log(err));
    }, []);

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

    return (
        <AuthContext.Provider
            value={{
                handleSearch,
                setInput,
                filteredProducts,
                currentCart,
                itensList,
                setCurrentCart,
                addItemCard,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, UseContextData };
