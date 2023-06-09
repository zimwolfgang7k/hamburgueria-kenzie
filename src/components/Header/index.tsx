import Logo from '../../assets/logo.svg';
import { UseContextData } from '../../context/context';

const Header = () => {
    const { handleSearch, setInput } = UseContextData();

    return (
        <header>
            <div>
                <div className="input-button">
                    <img src={Logo} alt="" />
                    <form className="input" onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Digite sua pesquisa"
                            onChange={(
                                e: React.FormEvent<HTMLInputElement>
                            ): void =>
                                setInput(
                                    e.currentTarget.value.toLowerCase().trim()
                                )
                            }
                            onKeyUp={handleSearch}
                        />
                        <div className="button">
                            <button>Pesquisar</button>
                        </div>
                    </form>
                </div>
            </div>
        </header>
    );
};
export default Header;
