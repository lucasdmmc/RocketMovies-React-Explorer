import styled from "styled-components"

export const Container = styled.div`
  width: 100%;

  > header {
    padding: 6.4rem 14.4rem 5.9rem;
    background: rgba(255, 133, 155, 0.05);
    
    a {
      display: flex;
      align-items: center;
      gap: .8rem;
      color: #FF859B;
      line-height: 2.1rem;
    }
  }
`

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  > div:nth-child(4) {
    margin-top: 24px;
  }

`

export const Avatar = styled.div`
  position: relative;
  margin: -124px auto 32px;
  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;

    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    > input {
      display: none;
    }

    > svg {
      width: 20px;
      height: 20px;
    }
  }
`