import styled from "styled-components"
import BackgroundIMG from "../../assets/movie.png"

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
  
  `

export const Form = styled.form`
  width: 64rem;
  padding: 0 13.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  margin-top: 4.8rem;

  > h1 {
    font-size: 4.8rem;
    line-height: 6.3rem;
    color: ${({ theme }) => theme.COLORS.PINK}
  }
  
  > h2 {
    margin: 4.8rem 0 4.8rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2.4rem;
    line-height: 3.2rem;
  }
  
  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100}
  }

  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .7rem;

    color: ${({ theme }) => theme.COLORS.PINK};

    margin-top: 4.2rem;
  }
`

export const Background = styled.div`
  width: 100%;
  background: url(${BackgroundIMG}) no-repeat center center;
  background-size: cover;

`