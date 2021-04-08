import styled from 'styled-components';

import Bg from '../assets/bg-404.png'

export const PageNotFoundStyle = styled.section`
  width: 100%;
  height: 100vh;
  background: url(${Bg}) no-repeat #272B33 top -18px left 98px;
  display: flex;
  align-items: center;
  justify-content: center;
  .cont {
    width: 100%;
    max-width: 803px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  .left {
    flex: 1;
    max-width: 356px;
    h1 {
      font-weight: 800;
      font-size: 10.7813rem;
      line-height: 1;
      text-align: center;
      letter-spacing: 0.04em;
      color: #fff;
      -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #fff;
      margin-bottom: 14px;
    }
    h2 {
      font-size: 2.9829rem;
      line-height: 1;
      color: #8299F5;
      margin-bottom: 1rem;
    }
    p {
      font-weight: 300;
      font-size: 1.125rem;
      line-height: 140%;
      letter-spacing: 0.01em;
      color: #E4FFF0;
      max-width: 330px;
    }
  }
  .right  {
    position: relative;
    bottom: 23px;
    a {
      display: block;
      max-width: 234px;
      margin-top: 2.5rem;
      line-height: 2.9375rem;
      padding: 0px 2rem;
      background: #667ACC;
      border-radius: 300px;
      font-size: 0.9375rem;
      color: #FFFFFF;
      transition: background-color ease .3s;
      &:hover {
        background: #8299F5;
      }
    }
  }
  @media(max-width: 560px) {
    .cont {
      flex-direction: column;
      align-items: center;
    }
    .left  {
      display: flex;
      flex-direction: column;
      align-items: center;
      h1 {
        font-size: 8rem;
      }
      h2 {
        font-size: 2rem;
      }
      p {
        text-align: center;
        margin-bottom: 40px;
      }
    }
    .right  {
      position: relative;
      bottom: 0;
    }
  }
`;