import React from 'react';
import { Link } from 'gatsby'

import { ModalStyle } from './styles'

import Close from '../../assets/close.svg'

export default function ComponentModal({icon, title, text, click}) {
  return (
    <ModalStyle>
      <div className="overlay"></div>
      <div className="box">
        <button type="button" onClick={click}>
          <Close/>
        </button>
        <div className="icon">
          {icon}
        </div>
        <h3>{title}</h3>
        <p>{text}</p>
        <Link to="/">Go back to home page</Link>
      </div>
    </ModalStyle>
  )
}