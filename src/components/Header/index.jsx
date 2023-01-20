import { useState } from 'react';
import Logo from '../../assets/logo.svg';
import { ButtonTheme } from '../../style/button';
import { Container } from '../../style/global';
import { InputSearch } from '../../style/input';
import { StyledSection } from './style';

const Header = ({ itensList, setFilteredProducts }) => {
    const [input, setInput] = useState();

    const handleSearch = e => {
        e.preventDefault();
        const filterName = itensList.filter(item => {
            return (
                item.name.toLowerCase().match(input) ||
                item.category.toLowerCase().match(input)
            );
        });
        setFilteredProducts(filterName);
    };

    return (
        <StyledSection>
            <Container>
                <div className="input-button">
                    <img src={Logo} alt="" />
                    <form className="input" onSubmit={handleSearch}>
                        <InputSearch
                            type="text"
                            placeholder="Digite sua pesquisa"
                            onChange={e =>
                                setInput(e.target.value.toLowerCase().trim())
                            }
                            onKeyUp={handleSearch}
                        />
                        <div className="button">
                            <ButtonTheme>Pesquisar</ButtonTheme>
                        </div>
                    </form>
                </div>
            </Container>
        </StyledSection>
    );
};
export default Header;
