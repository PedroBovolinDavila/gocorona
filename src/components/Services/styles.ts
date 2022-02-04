import styled from "styled-components";

export const Container = styled.section`
  padding: 10rem calc((100vw - 1550px) / 2);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const TextContainer = styled.article``;

export const Title = styled.h2`
  font-size: 3.65rem;
  text-align: center;
  margin-bottom: 26px;

  span {
    color: var(--primary);
  }
`;

export const Desc = styled.p`
  text-align: center;
  width: 50%;
  margin: 0 auto;
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 90px 0;
`;