import styled from 'styled-components';

export const CardArticleStyle = styled.a`
  width: 100%;
  height: 451px;
  background : ${props => props.theme.gradientDark};
  border-radius: 8px;
  padding: 55px 50px;
  &:hover {
    background : ${props => props.theme.gradientHover};
    strong {
      svg {
        transform: translate(10px);
      }
    }
  }
  .logo {
    height: 56px;
    display: flex;
    align-items: center;
  }
  h3 {
    margin-top: 22px;
    height: 84px;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 140%;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    margin-bottom: 1rem;
  }
  .date {
    display: block;
    margin-bottom: 1rem;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 140%;
    color: #DCE3FF;
  }
  p {
    font-weight: 300;
    font-size: 1rem;
    line-height: 140%;
    color: #ABC2CF;
    margin-bottom: 2rem;
  }
  strong {
    display: flex;
    align-items: center;
    font-weight: 300;
    font-size: 1rem;
    line-height: 140%;
    color: #667ACC;
    svg {
      margin-left: 0.875rem;
      transition: transform ease .3s;
    }
  }
`;