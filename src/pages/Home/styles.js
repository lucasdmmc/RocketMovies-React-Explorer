import styled from "styled-components"


export const Container = styled.div`
  margin: 5rem 12.3rem;
  overflow-y: auto;

  > header {
    width: 100%;
    display: flex;
    justify-content: space-between;

    h2 {
      font-size: 3.2rem;
      line-height: 4.2rem;
      color: #ffffff;
    }
  }

  .button {
    width: 20.7rem;
    font-weight: bold;
  }

  > main {
    margin-top: 4rem;
    background: rgba(255, 133, 155, 0.05);
    border-radius: 16px;
    padding: 32px;

    h2 {
      color: #F4EDE8;
      padding-bottom: .8rem;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      fill: ${({ theme }) => theme.COLORS.PINK};
    }

    svg:nth-child(6){
      fill: transparent;
    }

    p {
      color: #999591;
      font-size: 1.6rem;
      line-height: 1.9rem;
      text-align: justify;
      padding-top: 1.5rem;
    }
  }

`