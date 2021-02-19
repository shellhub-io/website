import styled from 'styled-components';

import { IconStyle } from  '../Icon/styles'

export const FlashMenuStyle = styled.section`
    padding-bottom: 29px;
    .main {
      padding-top: 100px;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      display: grid;
      grid-template-columns:  1fr 1fr;
      grid-gap: 30px;
    }
    a {
      display: flex;
      align-items: flex-start;
      flex: 1;
      width: 100%;
      height: 193px;
      background: ${props => props.theme.gradientDark};
      padding: 3.125rem 3.75rem;
      border-radius: 8px;
      transition: background-color ease .3s;
      &:hover {
        background: ${props => props.theme.gradientHover}
      }
      ${IconStyle} {
        margin-left: 0px;
        margin-right: 1.8125rem;
      }
      .txt  {
        h3 {
          font-size: 1.375rem;
          line-height: 140%;
          font-weight: normal;
          letter-spacing: 0.01em;
          color: #FFFFFF;
          margin-bottom: 0.3125rem;
        }
        p {
          font-weight: 300;
          font-size: 1rem;
          line-height: 140%;
          color: ${props => props.theme.secondGray};
          max-width: 397px;
        }
      }
    }
    @media(max-width: 560px) {
      .main {
        padding-top: 50px;
        grid-template-columns: 1fr;
        grid-gap: 14px;
       
      }
      a {
        height: auto;
        flex-direction: column;
        align-items: center;
        padding: 40px;
        ${IconStyle} {
          margin-right: 0;
        }
        .txt{
          h3 {
            text-align: center;
            font-size: 1.125rem;
            margin: 8px 0px;
          }
          p {
            text-align: center;
          }
        }
      }
    }
`;

export const FooterStyle = styled.footer`
  padding-top: 4.0625rem;
  padding-bottom: 33px;
  .main {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 57px;
    .left {
      ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 75px;
        width: 174px;
        li {
          a {
            svg  {
              path {
                fill: ${props => props.theme.primaryBlue};
                transition: fill ease .3s;
              }
            }
            &:hover {
              svg {
                path {
                  fill: #FFFFFF;
                }
              }
            }
          }
        }
      }
    }
    .right {
      flex: 1;
      max-width: 801px;
      display: flex;
      justify-content: space-between;
      ul {
        flex: 1;
        max-width: 332px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 20px;
        li {
          list-style: disc;
          color: ${props => props.theme.primaryBlue};
          a {
            font-size: 0.875rem;
            line-height: 200%;
            color: #FFFFFF;
            transition: color ease .3s;
            &:hover {
              color:  ${props => props.theme.primaryBlue};
            }
          }
        }
      }
      .text {
        max-width: 312px;
        h3 {
          font-size: 1.375rem;
          line-height: 140%;
          font-weight: normal;
          letter-spacing: 0.01em;
          color: #FFFFFF;
          margin-bottom: 25px;
        }
        a {
          display: inline-block;
          border: 2px solid ${props => props.theme.primaryBlue};
          border-radius: 300px;
          line-height: 35px;
          padding: 0px 16px;
          font-weight: 500;
          font-size: 0.9375rem;
          color: #FFFFFF;
          transition: all ease .3s;
          &:hover {
            background: ${props => props.theme.primaryBlue};
          }
        }
      }
    }
  }
  .copy {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgb(55 67 109 / 0.3);
    padding-top: 2.5625rem;
    p {
      font-size: 0.875rem;
      line-height: 150%;
      letter-spacing: 0.01em;
      color: #DCE3FF;
    }
    .made {
      span {
        font-size: 0.875rem;
        line-height: 16px;
        letter-spacing: 0.5px;
        color: #DCE3FF;
        margin-right: 0.75rem;
      }
    }
  }
  @media(max-width: 560px) {
    border-top: 1px solid rgb(55 67 109 / 0.3);
    .main {
      flex-direction: column;
      align-items: center;
      .left {
        ul {
          margin: 0 auto;
          margin-top: 54px;
        }
      }
      .right {
        max-width: 100%;
        flex-direction: column;
        align-items: center;
        margin-top: 40px;
        ul {
          margin-bottom: 30px;
          grid-gap: 30px;
          padding-left: 20px;
        }
        .text {
          h3 {
            text-align: center;
            font-size: 1.125rem;
            margin-bottom: 1.875rem;
          }
          a {
            margin: 0 auto;
            display: table;
          }
        }
      }
    }
    .copy {
      padding-top: 30px;
      flex-direction: column;
      align-items: center;
      p {
        margin-bottom: 20px;
      }
    }
  }
`;