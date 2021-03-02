import styled from "styled-components"

import Bg from "../../assets/bg-pricing.png"

export const SectionCommunityStyle = styled.section`
  position: relative;
  background: url(${Bg}) no-repeat top center;
  background-size: cover;
  .container {
    position: relative;
  }
  .text {
    padding-top: 11.6875rem;
    padding-bottom: 12.5rem;
    max-width: 472px;
    h1 {
      font-weight: 600;
      font-size: 3.25rem;
      line-height: 4.9375rem;
      color: #ffffff;
      margin-bottom: 1rem;
    }
    p {
      font-weight: 300;
      font-size: 1rem;
      line-height: 140%;
      color: ${props => props.theme.secondGray};
      margin-bottom: 3.375rem;
    }
    .btns {
      display: flex;
      align-items: center;
      margin-bottom: 4.5rem;
      .github-btn {
        display: flex;
        align-items: center;
        line-height: 50px;
        background-color: ${props => props.theme.primaryBlue};
        border-radius: 300px;
        margin-right: 1.625rem;
        overflow: hidden;
        transition: background-color ease 0.3s;
        .gh-btn {
          padding: 0px 1rem 0px 1rem;
          border-right: 1px solid rgb(255 255 255 / 0.1);
          transition: background-color 0.3s;
          .gh-text {
            font-weight: bold;
            font-size: 1rem;
            color: #ffffff;
          }
          &:hover {
            background-color: #8299f5;
          }
        }
        .gh-count {
          padding: 0px 1rem 0px 1rem;
          font-weight: bold;
          font-size: 1rem;
          color: #ffffff;
          transition: background-color 0.3s;
          &:hover {
            background-color: #8299f5;
          }
        }
      }
    }
    .btn-github {
      display: flex;
      align-items: center;
      min-height: 61.18px;
      color: white;
      width: fit-content;
      .img-git {
        width: 45px;
        height: 45px;
        svg {
          width: 45px;
          height: 45px;
        }
      }
      .cnt-git {
        font-weight: 500;
        font-size: 1.6007rem;
        line-height: 150%;
        letter-spacing: 0.02em;
        color: #ffffff;
        margin-left: 16px;
        .val-git {
          color: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: -3px;
          .star,
          .fork {
            font-weight: normal;
            font-size: 16.2985px;
            line-height: 140%;
            color: #dce3ff;
          }
          .dot {
            display: flex;
          }
        }
        @media screen and (max-width: 350px){
          font-size: 1.4375rem;
        }
      }
      .arrow-git {
        display: flex;
        margin-left: 1.095rem;
        transition: all 0.2s ease-in-out;
      }
      svg {
        max-width: 32px;
      }
      .img-git {
        width: 45px;
        height: 45px;
        svg {
          width: 45px;
          height: 45px;
          max-width: initial;
        }
      }
      span {
        display: flex;
        align-items: center;
        margin-left: 1.125rem;
        font-weight: 500;
        font-size: 1.125rem;
        line-height: 150%;
        letter-spacing: 0.02em;
        color: ${props => props.theme.primaryBlue};
        transition: color 0.3s ease;
        svg {
          margin-left: 1rem;
          path {
            transition: stroke 0.3s ease;
          }
        }
      }
      &:hover {
        .arrow-git {
          margin-left: 1.595rem;
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
  @media (max-width: 1200px) {
    .image {
      max-width: 800px;
      right: 0;
    }
  }
  @media (max-width: 1024px) {
    .image {
      max-width: 500px;
      right: 0;
      top: 50px;
    }
    .text {
      max-width: 400px;
    }
  }
  @media (max-width: 560px) {
    overflow-x: hidden;
    .text {
      padding-top: 123px;
      max-width: 100%;
      padding-bottom: 0;
      h1 {
        text-align: center;
        font-size: 2.25rem;
        line-height: 3.375rem;
        margin-bottom: 0.5rem;
      }
      p {
        text-align: center;
        font-size: 15px;
        margin-bottom: 25px;
      }
      .btns {
        justify-content: center;
        margin-bottom: 50px;
        a {
          &:last-child {
            margin-right: 0px;
          }
        }
      }
      .btn-github {
        justify-content: center;
        margin: 0 auto;
      }
    }
    .image {
      position: relative;
      top: 0;
      right: 0;
      max-width: 430px;
      left: 50%;
      margin-left: -215px;
    }
  }
`

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
        color: #ffffff;
        margin-bottom: 10px;
      }
      p {
        font-weight: 300;
        font-size: 1rem;
        line-height: 140%;
        color: ${props => props.theme.secondGray};
      }
    }
  }
  .main-area {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .all {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: flex-start;
      grid-gap: 35px;
      .card {
        width: 100%;
        height: 296px;
        background: linear-gradient(
          164.36deg,
          rgb(70 113 137 / 0.4) -64.36%,
          rgba(61, 76, 129, 0) 56.68%
        );
        border-radius: 8px;
        padding: 52px 46px;
        svg {
          margin-bottom: 1.3125rem;
        }
        h3 {
          font-size: 1.375rem;
          line-height: 140%;
          letter-spacing: 0.01em;
          color: #ffffff;
          margin-bottom: 0.875rem;
        }
        p {
          font-weight: 300;
          font-size: 1rem;
          line-height: 140%;
          color: ${props => props.theme.secondGray};
        }
      }
    }
    a {
      display: inline-block;
      line-height: 50px;
      padding: 0px 60px;
      background: ${props => props.theme.primaryBlue};
      border-radius: 300px;
      font-weight: bold;
      font-size: 1rem;
      color: #ffffff;
      transition: background-color ease 0.3s;
      margin-top: 30px;
      &:hover {
        background-color: #8299f5;
      }
    }
  }
  @media (max-width: 1024px) {
    .main-area {
      align-items: center;
      .all {
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
      }
    }
  }
  @media (max-width: 560px) {
    padding-bottom: 40px;
    .main-area {
      align-items: center;
      .all {
        grid-template-columns: 1fr;
        .card {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: auto;
          padding: 40px;
          h3 {
            text-align: center;
          }
          p {
            text-align: center;
            font-size: 0.9375rem;
          }
        }
      }
    }
    .top {
      flex-direction: column;
      align-items: center;
      .left {
        h2 {
          font-size: 1.75rem;
          line-height: 130%;
          text-align: center;
          letter-spacing: 0.01em;
          color: #ffffff;
        }
        p {
          text-align: center;
          margin-bottom: 20px;
        }
      }
    }
  }
`
