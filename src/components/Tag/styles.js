import styled from "styled-components"

export const Container = styled.div`
  border-radius: .8rem;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  padding: .8rem 1.6rem;
  margin-top: 1.5rem;
  margin-right: .8rem;
  font-size: 1.2rem;
  line-height: 1.4rem;

  display: inline-block;
  


  color: ${({ theme }) => theme.COLORS.WHITE};
`