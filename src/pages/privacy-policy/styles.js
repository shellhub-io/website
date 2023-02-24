import styled from "styled-components";

import Line from "../../assets/line-column.png";
import Bg from "../../assets/bg-pricing.png";
import "react-rangeslider/lib/index.css";

export const PrivacyPolicyStyle = styled.section`
  padding-top: 11.375rem;
  padding-bottom: 6.25rem;
  background: url(${Bg}) no-repeat top center;
  background-size: 100%;
  .title {
    margin-bottom: 4rem;

    h1 {
      font-size: 2.25rem;
      line-height: 140%;
      text-align: center;
      color: #8299f5;
      font-weight: normal;
      margin-bottom: 23px;
    }
    p {
      text-align: center;
      max-width: 1058px;
      margin: 0 auto;
      margin-top: 1rem;
      font-weight: 300;
      font-size: 1.125rem;
      line-height: 140%;
      color: ${props => props.theme.secondGray};
    }
  }

  .content {
    h1 {
      font-size: 2.25rem;
      line-height: 140%;
      color: #8299f5;
      font-weight: normal;
    }

    p {
      font-weight: 300;
      font-size: 1rem;
      max-width: 750px;
      margin: 1rem 0;
      line-height: 140%;
      color: ${props => props.theme.secondGray};
      a {
        color: ${props => props.theme.primaryBlue};
        text-decoration: none;
        transition: 0.3s;

        &:hover {
          color: ${props => props.theme.secondBlue};
        }
      }
    }

    ul {
      margin-top: 2rem;
      color: #abc2cf;

      li {
        list-style-type: circle;
        max-width: 750px;
        margin-left: 1rem;
        margin-bottom: 1rem;

        span {
          font-weight: 700;
        }

        a {
          margin-left: 0.5rem;
        }

        p {
          margin-top: 1rem;
          font-size: 1rem;
        }

        .inside-ul {
          li {
            list-style-type: circle;
            margin: 0;
            margin-left: 2rem;
            color: #abc2cf;
          }
        }

        .data-title {
          font-size: 1.5rem;
        }
      }
    }
  }
`;
