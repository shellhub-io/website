import React from 'react'
import { Link } from "gatsby"

import { HeaderStyle } from './styles'

import Logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <HeaderStyle>
      <div className="container">
        <Link to="/">
          <Logo/>
        </Link>
        <nav>
            <ul>
              <li>
                <Link to="/community">Community</Link>
              </li>
              <li>
                <Link to="/documentation">Documentation</Link>
              </li>
              <li>
                <Link to="/article">Article</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/pricing">Contact</Link>
              </li>
            </ul>
            <Link to="/" className="btn">Get started</Link>
          </nav>
      </div>
    </HeaderStyle>
  )
}

export default Header
