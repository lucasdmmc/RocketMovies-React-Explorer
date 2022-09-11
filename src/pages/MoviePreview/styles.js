import styled from "styled-components"

export const Container = styled.div`
  margin: 4rem 12.3rem;
  width: 36.8rem;

  a {
    color: ${({ theme }) => theme.COLORS.PINK};
    display: flex;
    align-items: center;
    gap: .8rem;
  }

  > .movieAndStars {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 2.4rem;
    
    h2 {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 3.6rem;
      line-height: 4.7rem;
      padding-right: 1.9rem;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      fill: ${({ theme }) => theme.COLORS.PINK};
    }

    svg:nth-last-child(1){
      fill: transparent;
    }
  }

  > .img-name-clock {
    display: flex;
    align-items: center;
    gap: .8rem;
    margin-top: 2.4rem;
    margin-bottom: 4rem;

    .img-name {
      display: flex;
      align-items: center;
      gap: .8rem;

      span {
        color: ${({ theme }) => theme.COLORS.WHITE};
      }

      img {
        border-radius: 50%;
        width: 20px;
        height: 20px;
      }

    }

    .clock {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      span {
        color: ${({ theme }) => theme.COLORS.WHITE};
      }

      svg {
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }
}
`

export const Sinopse = styled.p`
  margin: 0 12.3rem;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 1.6rem;
  line-height: 2.1rem;
  text-align: justify;

`