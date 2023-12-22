import styled from 'styled-components';

export const NavWrapper = styled.header`
  padding: 19px 30px 21px;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondaryLight};

  h1 {
    opacity: 0.8;
    color: ${(props) => props.theme.colors.primary};
    font: ${(props) => props.theme.fontsAssets.title};
  }
`;

export const NavMenu = styled.div`
  a {
    opacity: 0.3;
    color: ${(props) => props.theme.colors.primary};
    font: ${(props) => props.theme.fontsAssets.link};
    letter-spacing: 0.18px;
    text-decoration: none;

    &:hover {
      opacity: 0.8;
    }
  }
`;
