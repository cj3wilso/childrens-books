import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
`;

export const Description = styled.div`
  display: inherit;
  justify-content: inherit;
  align-items: inherit;
  font-size: 0.85rem;
  max-width: var(--max-width);
  width: 100%;
  z-index: 2;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
  p {
    position: relative;
    margin: 0;
    padding: 1rem;
    background-color: rgba(var(--callout-rgb), 0.5);
    border: 1px solid rgba(var(--callout-border-rgb), 0.3);
    border-radius: var(--border-radius);
  }
  @media (max-width: 700px) {
    font-size: 0.8rem;
    a {
      padding: 1rem;
    }
  }
`;

export const Kids = styled.div`
  flex-wrap: wrap;
  span:nth-child(1) {
    color: #f7b405;
  }
  span:nth-child(2) {
    color: #c32c8b;
  }
  span:nth-child(3) {
    color: #e83b2d;
  }
  span:nth-child(4) {
    color: #03abaa;
  }
`;

export const Logo = styled.div`
  font-size: 2rem;
  line-height: 2rem;
  text-align: center;
  height: 8.2rem;
  width: 8.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 50%;
  border: 6px solid #e83b2d;
`;

export const Books = styled.div`
  color: #000;
`;
