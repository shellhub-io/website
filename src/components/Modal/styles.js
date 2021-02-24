import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const ModalStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2021;
    display: flex;
    align-items: center;
    justify-content: center;
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgb(39 43 51 / 0.5);
      z-index: 0;
    }
    .box {
      position: relative;
      z-index: 1;
      width: 458px;
      height: 477px;
      background: #FFFFFF;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      animation: ${fadeIn} .4s forwards;
      button {
        position: absolute;
        top: 24px;
        right: 24px;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      h3 {
        font-weight: 500;
        font-size: 2rem;
        line-height: 120%;
        text-align: center;
        color: #010101;
        max-width: 22rem;
        margin-top: 1.5rem;
        margin-bottom: 0.75rem;
        max-width: 16.8125rem;
      }
      p {
        font-weight: 300;
        font-size: 1rem;
        line-height: 140%;
        text-align: center;
        color: #5C6D88;
        max-width: 269px;
        margin-bottom: 2rem;
      }
      a {
        display: inline-block;
        line-height:  2.9375rem;
        border-radius: 300px;
        background: #667ACC;
        padding: 0px 2rem;
        font-size: 0.9375rem;
        color: #FFFFFF;
        transition: background-color .3s ease;
        &:hover {
          background: #8299F5;
        }
      }
    }
    @media(max-width: 560px) {
      .box {
        max-width: 92%;
        height: auto;
        padding: 40px 0px;
      }
    }
`;