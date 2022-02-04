import styled from "styled-components";

export const Container = styled.aside`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 70%;
  background-color: #fff;
  margin: 0 auto;
  padding: 2.6rem 3.3rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  border-radius: 16px;
  margin-bottom: 5rem;
`;

export const Stats = styled.div`
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
`;

export const Desc = styled.p`
  letter-spacing: 1.8px;
  margin-top: 10px;
  color: #000;
  font-size: 14px;
`;

export const StatsTitle = styled.p`
  color: var(--primary);
  text-transform: lowercase;
  font-size: 2.7rem;
`;
