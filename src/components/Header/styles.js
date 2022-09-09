import styled from "styled-components"

export const Container = styled.header`
  padding: 4.2rem 12.3rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 6.4rem;

  border-bottom: 1px solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  
  > h2 {
    font-weight: bold;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .9rem;
  width: 400px;
  
  > div {
    line-height: 2.4rem;
    display: flex;
    flex-direction: column;
    
    strong {
      max-width: 300px;
      line-height: 1.8rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  
  > a {
    text-align: end;

    span {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 1.4rem;
      line-height: 1.8rem;
    }
    
  }
    img {
      width: 6.4rem;
      height: 6.4rem;
      border-radius: 50%;
  }
  }
`