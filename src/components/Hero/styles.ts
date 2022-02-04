import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: calc(100vh - 120px);
  padding: 0 calc((100vw - 1550px) / 2);
  background-color: var(--white-bg);
`;

export const TextContainer = styled.article`
  width: 50%;
`;

export const Title = styled.h1`
  font-size: 3.75rem;
  margin-bottom: 20px;
  
  span {
    color: var(--secondary);
  }
`;

export const Desc = styled.p`
  font-size: 1rem;
  margin-bottom: 50px;
  width: 60%;
`;

export const ImageContainer = styled.figure`
  width: 50%;
  z-index: 10;
`;

export const Image = styled.img`
  width: 100%;
`;