import styled from 'styled-components';

import ArrowSelect from '../../assets/arrow-select.png'

export const SectionContactStyle = styled.section`
  padding-top: 10.875rem;
  padding-bottom: 109px;
  .container {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  .left {
    .text {
      h1 {
        font-weight: 600;
        font-size: 3.25rem;
        line-height: 4.9375rem;
        color: #FFFFFF;
      }
      p {
        font-size: 1.125rem;
        line-height: 150%;
        letter-spacing: 0.02em;
        color: ${props => props.theme.secondGray};
        max-width: 479px;
      }
    }
    .image {
      position: absolute;
      left: -102px;
      top: 40px;
      pointer-events: none;
    }
  }
  .box-form {
    background: #FFFFFF;
    border-radius: 8px;
    width: 100%;
    max-width: 480px;
    height: auto;
    background-color: #fff;
    padding: 50px 66px;
    h2 {
      font-weight: 500;
      font-size: 1.25rem;
      line-height: 140%;
      letter-spacing: 0.01em;
      color: #000000;
      max-width: 317px;
      margin-bottom: 12px;
    }
    p {
      font-weight: 300;
      font-size: 1rem;
      line-height: 140%;
      color: ${props => props.theme.primaryGray};
    }
    .error {
      font-size: 0.9rem;
      font-weight: 500;
      color: red;
      margin-top: 5px;
    }
    form {
      margin-top: 1.6875rem;
      .form-group {
        margin-bottom: 24px;
        &:last-child {
          margin-bottom: 0px;
          display: flex;
          justify-content: flex-end;
        }
        label {
          display: block;
          font-weight: 500;
          font-size: 0.875rem;
          line-height: 140%;
          color: ${props => props.theme.primaryGray};
          margin-bottom: 0.25rem;
        }
        input[type="text"],
        input[type="email"],
        textarea {
          width: 100%;
          height: 48px;
          border: 1px solid ${props => props.theme.secondBlue};
          border-radius: 4px;
          padding: 0px 1rem;
          font-size: 0.875rem;
          line-height: 140%;
          color: ${props => props.theme.primaryBlue};
          font-size: 0.875rem;
          &.input-interest {
            font-size: 0.75rem;
            margin-top: 0.5rem;
          }
          &::placeholder {
            color: ${props => props.theme.primaryGray};
            font-weight: 400;
          }
        }
        textarea {
          resize: none;
          height: 119px;
          padding: 15px 16px;
        }
        select {
          appearance: none;
          width: 100%;
          height: 48px;
          border: 1px solid ${props => props.theme.secondBlue};
          background: url(${ArrowSelect}) no-repeat right 1rem center;
          border-radius: 4px;
          padding: 0px 1rem;
          font-size: 0.875rem;
          line-height: 140%;
          color: ${props => props.theme.primaryGray};
          font-size: 0.875rem;
        }
        input[type="submit"] {
          width: 177px;
          height: 46px;
          padding: 0px 2rem;
          background-color: ${props => props.theme.primaryBlue};
          border-radius: 300px;
          font-weight: bold;
          font-size: 1rem;
          line-height: 140%;
          color: #FFFFFF;
          cursor: pointer;
          transition: background-color ease .3s;
          &:hover {
            background: #8299F5;
          }
        }
      }
    }
  }
  @media(max-width: 560px) {
    padding-top: 100px;
    padding-bottom: 2.5rem;
    .container {
      flex-direction: column;
      align-items: center;
    }
    .left {
      margin-bottom: 2.9375rem;
      .text {
        h1 {
          text-align: center;
          font-size: 2.25rem;
          line-height: 3.375rem;
          margin-bottom: 0.5625rem;
        }
        p {
          text-align: center;
          max-width: 276px;
          font-size: 0.875rem;
        }
      }
      .image {
        display: none;
      }
    }
    .box-form  {
      height: auto;
      padding: 40px 15px;
      h2 {
        text-align: center;
        max-width: 271px;
        margin: 0 auto;
        margin-bottom: 0.75rem;
      }
      p {
        text-align: center;
        font-size: 14px;
      }
      form {
        .form-group {
          input[type="submit"] {
            width: 100%;
          }
        }
      }
    }
  }
`;