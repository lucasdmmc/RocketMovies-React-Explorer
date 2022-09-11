import styled from "styled-components"

export const Container = styled.div`
  margin: 4rem 12.3rem;

  > a {
    display: flex;
    align-items: center;
    gap: .8rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-bottom: 2.4rem;
  }

  > h2 {
    font-size: 3.6rem;
    line-height: 4.7rem;
    color: #F4EDE8;
  }

  > form {
    margin-top: 4rem;

    textarea {
      border: none;
      background: none;
      resize: none;
      outline: none;

      width: 100%;
      height: 27.4rem;

      color: ${({ theme }) => theme.COLORS.WHITE};
      background: #262529;
      border-radius: 10px;

      margin-top: 4rem;
      padding: 1.9rem 1.6rem;

      &::placeholder {
        color: #948F99;
      }
    }

    > .inputs {
      display: flex;
      align-items: center;
      gap: 4rem;
    }
  }
  
  > .marcadores {
    width: 100%;

    p {
      font-size: 2.0rem;
      line-height: 2.6rem;
      color: #999591;
      margin: 4rem 0 2.4rem 0
    }

    > .tags {
      padding: 1.6rem;

      background: #0D0C0F;
      border-radius: 8px;
      display: flex;
      align-items: center;
      gap: 2.4rem;

      span {
        color: #FFFFFF;
        line-height: 1.9rem;
        background: #262529;
        padding: 1.6rem;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 1.6rem;

        button {
          border: none;
          background: none;

          cursor: pointer;

          display: flex;
          align-items: center;

          > svg {
            color: #FF859B;
          }
        }
      }

      span:last-child {
        background: none;
        border: 2px dashed #948F99;
        border-radius: 10px;
        color: #948F99;
      }
    }
  }

  > footer {
    display: flex;
    align-items: center;
    gap: 4rem;
    margin: 4rem 0 9.3rem 0;
    
    h2 {
      width: 100%;
      height: 56px;
      font-size: 1.6rem;
      line-height: 2.1rem;
      border-radius: 10px;
      background: #0D0C0F;

      display: flex;
      align-items: center;
      justify-content: center;

      color: #FF859B;
      cursor: pointer;
    }
  }
`