import styled from "styled-components";

export const Container = styled.section`
  padding: 10rem calc((100vw - 1550px) / 2);
  background-color: var(--white-bg);
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const TextContainer = styled.article`
  width: 50%;
`;

export const Title = styled.h2`
  font-size: 3.70rem;
  margin-bottom: 15px;

  span {
    color: var(--secondary);
  }
`;

export const Desc = styled.p`
  font-size: 1.1rem;
  margin-bottom: 40px;
  width: 70%; 
`;

export const ImageContainer = styled.figure`
  width: 50%;
`;

export const Image = styled.img`
  width: 100%;
`;
