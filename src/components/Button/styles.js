import styled from "styled-components"

export const Container = styled.button`
  width: 100%;
  height: 56px;

  background: none;
  
  border: none;
  border-radius: 1rem;

  cursor: pointer;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.1rem;
`