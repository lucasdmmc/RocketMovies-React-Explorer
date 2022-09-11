import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: #262529;

  border-radius: 1rem;
  
  
  > input {
    color: ${({ theme }) => theme.COLORS.WHITE};
    width: 100%;  
    height: 56px;
    padding: 1.6rem;
    outline: none;
    border: none;
    background: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
  
  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    margin-left: 1.6rem
  }
`