import styled from 'styled-components';

export const HeaderStyle = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 3rem 0px;
  z-index: 10;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  nav {
    display: flex;
    align-items: center;
    ul {
      display: flex;
      margin-right: 2.25rem;
      li {
        margin-left: 36px;
        &:first-child {
          margin-left: 0px;
        }
        a {
          display: block;
          line-height: 2.6875rem;
          padding: 0px 1rem;
          font-size: 0.9375rem;
          color: ${props => props.theme.secondGray};
          transition: color ease .3s;
          &:hover {
            color: #FFFFFF;
          }
        }
      }
    }
    .btn {
      border: 2px solid ${props => props.theme.primaryBlue};
      line-height: 2.1875rem;
      padding: 0px 1rem;
      border-radius: 300px;
      font-size: 0.9375rem;
      color: #FFFFFF;
      transition: all ease .3s;
      &:hover {
        background: ${props => props.theme.primaryBlue};
        color: #FFFFFF;
      }
    }
  }
`;