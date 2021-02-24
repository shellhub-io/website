import styled from 'styled-components';

import Line from '../../assets/line-column.png'
import Bg from '../../assets/bg-pricing.png'

export const SectionPricingStyle = styled.section`
  padding-top: 11.375rem;
  padding-bottom: 6.25rem;
  background: url(${Bg}) no-repeat top center;
  background-size: 100%;
  .title {
    margin-bottom: 4rem;
    h2 {
      font-weight: normal;
      text-align: center;
      font-size: 1.375rem;
      line-height: 140%;
      text-align: center;
      letter-spacing: 0.01em;
      color: #8299F5;
      margin-bottom: 8px;
    }
    h1 {
      text-align: center;
      font-size: 2.25rem;
      line-height: 140%;
      text-align: center;
      color: #FFFFFF;
      font-weight: normal;
      margin-bottom: 23px;
    }
    p {
      text-align: center;
      max-width: 1058px;
      margin: 0 auto;
      font-weight: 300;
      font-size: 1.125rem;
      line-height: 140%;
      color: ${props => props.theme.secondGray};
    }
  }
  .ant-tabs {
    .ant-tabs-nav {
      margin-bottom: 3.5625rem;
      &:before {
        border-bottom: 1px solid rgb(220 227 255 / 0.2);
      }
    }
    .ant-tabs-tabpane {
      &:first-child {
        .info-geral {
          .items {
            ul {
              li {
                &:first-child {
                  &:before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background: url(${Line}) no-repeat center center;
                  }
                }
              }
            }
          }
        }
      }
      &:last-child {
        .info-geral {
          .items {
            padding-top: 1.25rem;
          }
          .plans {
            .item-plan {
              .box {
                padding-top: 20px;
              }
            }
          }
        }
      }
    }
    .ant-tabs-nav-list {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      .ant-tabs-tab {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 1.75rem;
        padding-top: 0;
        margin-right: 0;
        &.ant-tabs-tab-active {
          .ant-tabs-tab-btn  {
            span {
              color: ${props => props.theme.primaryBlue};
              strong {
                background-color: ${props => props.theme.primaryBlue};
              }
            }
          }
        }
        .ant-tabs-tab-btn {
          span {
            font-weight: normal;
            font-size: 1.375rem;
            line-height: 140%;
            letter-spacing: 0.01em;
            color: ${props => props.theme.secondBlue};
            display: flex;
            align-items: center;
            transition: color ease .3s;
            strong {
              display: inline-block;
              font-weight: 600;
              line-height: 1.6875rem;
              font-size: 0.875rem;
              color: ${props => props.theme.background};
              background-color: ${props => props.theme.secondBlue};
              border-radius: 16px;
              padding: 0px 10px;
              margin-left: 11px;
              transition: background-color ease .3s;
            }
          }
        }
      }
    }
    .ant-tabs-ink-bar {
      background-color: ${props => props.theme.primaryBlue};
    }
    .info-geral {
      position: relative;
      .items {
        position: absolute;
        top: 0;
        left: 0;
        padding-top: 3.0625rem;
        width: 100%;
        h3 {
          font-size: 1.375rem;
          line-height: 140%;
          letter-spacing: 0.01em;
          color: #FFFFFF;
          margin-bottom: 3.3125rem;
        }
        ul {
          li {
            position: relative;
            line-height: 3.875rem;
            font-weight: 300;
            font-size: 1rem;
            color: #FFFFFF;
            &:after {
              content: "";
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 2px;
              background: url(${Line}) no-repeat center center;
            }
          }
        }
      }
      .plans {
        position: relative;
        z-index: 1;
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;
        width: 100%;

        .item-plan {
          margin-left: 1.6875rem;
          width: 386px;
          &:first-child {
            margin-left: 0px;
          }
          .box {
            background: linear-gradient(164.36deg,rgb(70 113 137 / 0.4) -64.36%,rgba(61,76,129,0) 56.68%);
            border-radius: 8px;
            margin-bottom: 3.4375rem;
            .title-plan {
              padding-top: 3.0625rem;
              margin-bottom: 3.3125rem;
              font-size: 1.375rem;
              line-height: 140%;
              text-align: center;
              letter-spacing: 0.01em;
              color: ${props => props.theme.secondGray};
              font-weight: normal;
            }
            ul {
              li {
                position: relative;
                height: 62px;
                font-size: 20px;
                color: #FFFFFF;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 500;
              }
            }
          }
          .text {
            display: flex;
            flex-direction: column;
            align-items: center;
            p {
              max-width: 267px;
              font-weight: 300;
              font-size: 0.875rem;
              line-height: 140%;
              text-align: center;
              color: ${props => props.theme.secondGray};
              margin-bottom: 1.9375rem;
            }
            a {
              line-height: 3.375rem;
              background: ${props => props.theme.primaryBlue};
              border-radius: 300px;
              padding: 0px 40px;
              font-weight: bold;
              font-size: 1rem;
              color: #FFFFFF;
              transition: background-color ease .3s;
              &:hover {
                background: #8299F5;
              }
            }
          }
        }
      }
      .msg {
        margin-top: 3.3125rem;
        font-weight: 300;
        font-size: 0.875rem;
        line-height: 140%;
        color: ${props => props.theme.secondBlue};
        max-width: 599px;
      }
    }
    .info-geral-mobile {
      display: none;
      .item {
        border-bottom: 1px solid rgb(220 227 255 / 0.1);
        padding-bottom: 18px;
        margin-bottom: 18px;
        &:last-child {
          padding-bottom: 0px;
          margin-bottom: 0px;
          border-bottom: none;
        }
        h3 {
          text-align: center;
          font-weight: 500;
          font-size: 0.875rem;
          line-height: 140%;
          text-align: center;
          color: #FFFFFF;
          margin-bottom: 1.125rem;
        }
        ul {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: flex-start;
          li {
            display: flex;
            flex-direction: column;
            align-items: center;
            span {
              display: block;
              font-size: 0.875rem;
              line-height: 140%;
              text-align: center;
              letter-spacing: 0.01em;
              color: ${props => props.theme.secondGray};
              opacity: 0.5;
              margin-bottom: 8px;
            }
            strong {
              font-weight: 500;
              font-size: 0.8125rem;
              line-height: 140%;
              text-align: center;
              letter-spacing: 0.01em;
              color: #FFFFFF;
            }
          }
        }
      }
      .cards {
        margin-top: 50px;
        .card {
          margin-bottom: 1.125rem;
          background: ${props => props.theme.gradientDark};
          border-radius: 8px;
          padding: 35px 30px;
          margin-bottom: 18px;
          display: flex;
          flex-direction: column;
          align-items: center;
          &:last-child {
            margin-bottom: 0px;
          }
          h3 {
            font-weight: 500;
            font-size: 1.125rem;
            line-height: 150%;
            text-align: center;
            letter-spacing: 0.02em;
            color: #FFFFFF;
            margin-bottom:  0.875rem;
          }
          p {
            text-align:center;
            margin-bottom: 0.875rem;
            font-weight: 300;
            font-size: 0.875rem;
            line-height: 140%;
            text-align: center;
            color: ${props => props.theme.secondGray};
            max-width: 267px;
          }
          a {
            display: inline-block;
            line-height: 54px;
            background-color: ${props => props.theme.primaryBlue};
            border-radius: 300px;
            padding: 0px 2.5rem;
            font-weight: bold;
            font-size: 1rem;
            color: #FFFFFF;
          }
        }
      }
    }
  }
  @media(max-width: 1200px) {
    .ant-tabs {
      .info-geral {
        .plans {
          .item-plan {
            width: 300px;
            .box {
              ul {
                li {
                  font-size: 16px;
                }
              }
            }
          }
        }
      }
    }
  }
  @media(max-width: 1024px) {
    .ant-tabs {
      .info-geral {
        .plans {
          .item-plan {
            width: 220px;
            .box {
              ul {
                li {
                  height: 53px;
                  strong {
                    font-size: 12px;
                  }
                }
              }
            }
          }
        }
        .msg {
          max-width: 70%;
        }
      }
    }
  }
  @media(max-width: 560px) {
    padding-top: 8.5rem;
    padding-bottom: 40px;
    .title {
      margin-bottom: 2.5rem;
      h2 {
        font-size: 1.125rem;
      }
      h1 {
        font-size: 1.375rem;
        max-width: 286px;
        margin: 0 auto;
        margin-bottom: 1.375rem;
      }
      p {
        font-size: 16px;
        max-width: 308px;
      }
    }
    .ant-tabs {
      .ant-tabs-nav  {
        margin-bottom: 40px;
      }
      .ant-tabs-nav-list {
        .ant-tabs-tab {
          padding-bottom: 15px;
          .ant-tabs-tab-btn {
            span {
              font-size: 1rem;
            }
          }
        }
      }
      .ant-tabs-tabpane {
        &:last-child {
          .info-geral-mobile  {
            .item {
              ul {
                grid-template-columns: 1fr;
              }
            }
          }
        }
      }
      .info-geral {
        display: none;
      }
      .info-geral-mobile {
        display: block;
      }
    }
  }
`;