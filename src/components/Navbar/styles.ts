import styled from "styled-components";

export const Container = styled.header`
  padding: 2.3rem calc((100vw - 1500px) / 2);
  background-color: var(--white-bg);
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoImg = styled.img`
  width: 150px;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  height: 100%;
  gap: 25px;
`;

export const MenuItem = styled.li``;

export const MenuLink = styled.a`
  color: #000;
  text-decoration: none;

  &:hover {
    text-decoration: underline
  }
`; 