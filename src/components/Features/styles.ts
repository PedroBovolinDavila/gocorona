import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10rem calc((100vw - 1550px) / 2);
`;

export const ImageContainer = styled.figure`
  width: 50%;
`;

export const Image = styled.img`
  width: 60%;
`;

export const TextContainer = styled.article`
  width: 50%;
`;

export const Title = styled.h2`
  font-size: 3.75rem;
  margin-bottom: 15px;

  span {
    color: var(--primary);
  }
`;

export const Desc = styled.p`
  font-size: 1.1rem;
  width: 65%;
  margin-bottom: 40px;
`;
