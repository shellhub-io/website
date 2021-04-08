import styled from 'styled-components';

import Bg from '../../assets/bg-pricing.png'

export const SectionGetStartedStyle = styled.section`
  padding-top: 11.375rem;
  padding-bottom: 3.125rem;
  background: url(${Bg}) no-repeat top center;
  background-size: 100%;
  .title {
    margin-bottom: 3.5625rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    h1 {
      font-size: 1.375rem;
      line-height: 140%;
      text-align: center;
      letter-spacing: 0.01em;
      color: #8299F5;
    }
    h2 {
      font-size: 2.25rem;
      line-height: 140%;
      text-align: center;
      color: #FFFFFF;
    }
  }
  .all {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 32px;
    .card {
      width: 100%;
      height: 593px;
      background: ${props => props.theme.gradientDark};
      border-radius: 8px;
      padding: 63px 40px;
      .title-card {
        margin-bottom: 2.3125rem;
        h3 {
          font-weight: 500;
          font-size: 1.75rem;
          line-height: 140%;
          letter-spacing: 0.01em;
          color: #FFFFFF;
          margin-bottom: 0.5rem;
          margin-top: 1.5625rem;
        }
        p {
          font-weight: 300;
          font-size: 1rem;
          line-height: 140%;
          color: ${props => props.theme.secondGray};
          max-width: 284px;
          height: auto;
        }
      }
      p {
        font-weight: 300;
        font-size: 1rem;
        line-height: 140%;
        color: #FFFFFF;
        height: 66px;
      }
      span {
        display: block;
        margin-top: 2.4375rem;
        margin-bottom: 19px;
        font-weight: 300;
        font-size: 0.875rem;
        line-height: 150%;
        color: ${props => props.theme.primaryBlue};
        max-width: 251px;
        height: 56px;
      }
      a {
        display: inline-block;
        line-height: 3.375rem;
        background-color: ${props => props.theme.primaryBlue};
        border-radius: 300px;
        padding: 0px 2.5rem;
        font-weight: bold;
        font-size: 1rem;
        color: #FFFFFF;
        transition: background-color ease .3s;
        &:hover {
          background: #8299F5;
        }
      }
      strong {
        display:flex;
        align-items: center;
        margin-top: 3.4375rem;
        font-weight: 300;
        font-size: 1rem;
        line-height: 140%;
        color: #8299F5;
        svg {
          margin-left: 1.5625rem;
        }
      }
    }
  }
  @media(max-width: 1024px) {
    .all {
      grid-template-columns: repeat(2,1fr);
      grid-gap: 20px;
    }
  }
  @media(max-width: 560px) {
    padding-top: 130px;
    padding-bottom: 40px;
    .title {
      margin-bottom: 2.5rem;
      h1 {
        font-size: 1.125rem;
      }
      h2 {
        font-size: 2rem;
        line-height: 140%;
        text-align: center;
        color: #FFFFFF;
        max-width: 314px;
      }
    }
    .all {
      grid-template-columns: 1fr;
      grid-gap: 20px;
      .card {
        height: auto;
        padding: 2.5rem 1.875rem;
        a {
          padding: 0px 30px;
        }
        p {
          height: auto;
        }
      }
    }
  }
`;