import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 18px hsla(225, 80%, 64%, 0.18);
  padding: 3rem 0.5rem;
  height: 278px;
  transition: all .3s ease;

  &:hover {
    box-shadow: 0 4px 18px hsla(225, 80%, 64%, 0.25);
    transform: scale(1.02);
  }
`;

export const Icon = styled.img`
  margin-bottom: 48px;
`;

export const TextContainer = styled.article`
  text-align: center;
`;

export const Title = styled.h3`
  margin-bottom: 15px;
`;

export const Desc = styled.p`
  width: 80%;
  margin: auto;
`;