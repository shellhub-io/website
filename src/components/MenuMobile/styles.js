import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
`

export const ButtonMobileStyle = styled.button`
  position: relative;
  z-index: 1;
  display: none;
  width: 32px;
  padding: 0.5rem 0;
  cursor: pointer;
  transition: 0.2s all cubic-bezier(0.4, -0.1, 0, 1.1);
  .menu-icon {
    width: 32px;
    height: ${props => props.active ? '0px' : '2px'};
    background-color: #667ACC;
    display: block;
    transition: 0.2s all cubic-bezier(0.4, -0.1, 0, 1.1);
    &:before,
    &:after {
      content: '';
      display: block;
      height: 2px;
      background-color: #667ACC;
      position: absolute;
      right: 0;
      transition: 0.2s all cubic-bezier(0.4, -0.1, 0, 1.1);
    }
    &:before {
      transform: ${props => props.active ? 'rotate(-45deg)' : 'rotate(0deg)'};
      margin-top: ${props => props.active ? '0px' : '-8px'};
      width: 32px;
      transition: 0.2s all cubic-bezier(0.4, -0.1, 0, 1.1);
    }
    &:after {
      width: 32px;
      transform: ${props => props.active ? 'rotate(45deg)' : 'rotate(0deg)'};
      margin-top: ${props => props.active ? '0px' : '8px'};
      transition: 0.2s all cubic-bezier(0.4, -0.1, 0, 1.1);
    }
  }
  &:hover {
    .menu-icon {
      width: 32px;
      transition: 0.2s all cubic-bezier(0.4, -0.1, 0, 1.1);
      &:after {
        width: 32px;
        transition: 0.2s all cubic-bezier(0.4, -0.1, 0, 1.1);
      }
    }
  }
  @media(max-width: 560px) {
    display: block;
  }
`;

export const MenuMobileStyle = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #272B33;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    animation: .5s ${fadeUp} ease;
    svg {
      width: 156px;
      margin-bottom: 3.9375rem;
    }
    ul {
      margin-bottom: 3.9375rem;
      display: flex;
      align-items: center;
      flex-direction: column;
      li {
        margin-bottom:  2.25rem;
        &:last-child {
          margin-bottom:  0px;
        }
        a {
          line-height: 41px;
          display: block;
          font-size: 0.9375rem;
          line-height: 150%;
          color: #ABC2CF;
          &.active {
            color: #667ACC;
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
`;