import styled from 'styled-components';

export const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 3rem 0px;
  z-index: 10;
  transition: all ease .3s;
  &.fixed {
    background-color: #272B33;
    padding: 1rem 0;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
    z-index: 1;
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
          &.active {
            color: #8299F5;
          }
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
      &:hover,
      &.active {
        background: ${props => props.theme.primaryBlue};
        color: #FFFFFF;
      }
    }
  }
  @media(max-width: 991px) {
    padding: 2rem 0px;
    nav {
      display:none;
    }
  }
  @media(max-width: 560px) {
    padding: 1.8125rem 0px;
    background-color: #272B33;
    height: 93px;
    .logo {
      max-width: 156px;
      svg {
        width: 100%;
      }
    }
  }
`;