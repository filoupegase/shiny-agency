import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../utils/style/colors";


function Header() {
  return (
    <HeaderContainer>
      <nav>
        <StyledLink to="/">Accueil</StyledLink>
        {" "}
        <StyledLink to="/survey/42">Questionnaire</StyledLink>
        {" "}
        <StyledLink to="/freelances">Freelances</StyledLink>
      </nav>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 0;
`;

// const LogoLink = styled(Link)`
//   display: flex;
//   align-items: center;
//   cursor: pointer;
// `;

// const Logo = styled.img`
//   margin-right: 0.75rem;
// `;

// const TextLogo = styled.img`
//   filter: ${(props) => (props.isDarkTheme ? `` : `invert(100%)`)};
// `;

// const MainNavList = styled.ul`
//   display: flex;
//   margin: 0;
//   padding: 0;
//   list-style-type: none;
// `;

const StyledLink = styled(Link)`
  display: inline-block;
  margin: 0 0 0 1rem;
  padding: 0.5rem 2rem;
  color: ${colors.secondary500};
  font-size: 1.25rem;
  font-weight: 700;
  text-decoration: none;
  transition: 200ms;
  &:hover {
    color: ${colors.primary500};
  }
  &.highlighted-link {
    border-radius: 2rem;
    color: white;
    background-color: ${colors.primary500};
    &:hover {
      color: ${colors.neutral100};
    }
  }
`;

export default Header;