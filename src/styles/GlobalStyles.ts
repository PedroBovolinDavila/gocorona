import styled, { createGlobalStyle } from 'styled-components';

interface ButtonProps {
  type?: 'secondary';
}

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
  }

  :root {
    --primary: #EC5863;
    --secondary: #4285F4;
    --white-bg: #FAFBFD;
    --text-color: #616161;
  }

  p {
    color: var(--text-color);
  }

  ::selection {
    background-color: var(--primary);
    color: var(--white-bg);
  }
`;

export const Button = styled.a<ButtonProps>`
  background-color: ${props => props.type ? 'var(--secondary)' : 'var(--primary)'};
  color: white;
  text-decoration: none;
  padding: 0.9rem 1.9rem;
  border-radius: 5px;
  transition: all .2s ease;
  z-index: 10;

  &:hover {
    opacity: 0.9;
  }
`;

export default GlobalStyles;