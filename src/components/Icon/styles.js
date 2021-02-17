import styled from 'styled-components';

import shadowIcon from '../../assets/shadow-icon.png'

export const IconStyle = styled.div`
  position: relative;
  z-index: 1;
  max-width: 84px;
  display: flex;
  justify-content: center;
  margin-left: -21px;
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -85px;
    margin-top: -85px;
    background: url(${shadowIcon}) no-repeat center center;
    width: 170px;
    height: 170px;
    z-index: -1;
    pointer-events: none;
  }
`;