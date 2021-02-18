import styled from 'styled-components';

import Bg from '../../assets/bg-pricing.png'

export const SectionCommunityStyle = styled.section`
  position: relative;
  background: url(${Bg}) no-repeat top center;
  background-size: cover;
  .container {
    position: relative;
  }
  .text {
    padding-top: 11.6875rem;
    padding-bottom: 9.375rem;
    max-width: 472px;
    h1 {
      font-weight: 600;
      font-size: 3.25rem;
      line-height: 4.9375rem;
      color: #FFFFFF;
      margin-bottom: 1rem;
    }
    p {
      font-weight: 300;
      font-size: 1rem;
      line-height: 140%;
      color: #ABC2CF;
      margin-bottom: 2rem;
    }
    .btns {
      display: flex;
      align-items: center;
      margin-bottom: 4.5rem;
      a {
        display: inline-block;
        line-height: 50px;
        padding: 0px 2rem;
        background-color: #667ACC;
        border-radius: 300px;
        font-weight: bold;
        font-size: 1rem;
        color: #FFFFFF;
        margin-right: 1.625rem;
      }
    }
    .btn-github {
      display: flex;
      align-items: center;
      svg {
        max-width: 32px;
      }
      span {
        display: flex;
        align-items: center;
        margin-left: 1.125rem;
        font-weight: 500;
        font-size: 1.125rem;
        line-height: 150%;
        letter-spacing: 0.02em;
        color: #667ACC;
        svg {
          margin-left: 1rem;
        }
      }
    }
  }
  .image {
    position: absolute;
    top: 0;
    right: -110px;
    pointer-events: none;
  }
`;

export const SectionOpenSourceStyle = styled.section`
  padding-bottom: 81px;
  .top {
    margin-bottom: 3.5rem;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    .left {
      max-width: 579px;
      h2 {
        font-size: 2.25rem;
        line-height: 140%;
        color: #FFFFFF;
        margin-bottom: 10px;
      }
      p {
        font-weight: 300;
        font-size: 1rem;
        line-height: 140%;
        color: #ABC2CF;
      }
    }
    a {
      display: inline-block;
      line-height: 50px;
      padding: 0px 60px;
      background: #667ACC;
      border-radius: 300px;
      font-weight: bold;
      font-size: 1rem;
      color: #FFFFFF;
      transition: background-color ease .3s;
      &:hover {
        background-color: #8299F5;
      }
    }
  }
  .all {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: flex-start;
    grid-gap: 35px;
    .card {
      width: 100%;
      height: 296px;
      background: linear-gradient(164.36deg,rgb(70 113 137 / 0.4) -64.36%,rgba(61,76,129,0) 56.68%);
      border-radius: 8px;
      padding: 52px 46px;
      svg {
        margin-bottom: 1.3125rem;
      }
      h3 {
        font-size: 1.375rem;
        line-height: 140%;
        letter-spacing: 0.01em;
        color: #FFFFFF;
        margin-bottom: 0.875rem;
      }
      p {
        font-weight: 300;
        font-size: 1rem;
        line-height: 140%;
        color: #ABC2CF;
      }
    }
  }
`;