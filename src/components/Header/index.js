import React from 'react'
import { Link } from "gatsby"

import MenuMobile from '../../components/MenuMobile'

import { HeaderStyle } from './styles'

import Logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <HeaderStyle>
      <div className="container">
        <Link to="/"  className="logo">
          <Logo/>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/community" activeClassName="active">Community</Link>
            </li>
            <li>
              <a href="" target="_blank">Documentation</a>
            </li>
            <li>
              <Link to="/article" activeClassName="active">Article</Link>
            </li>
            <li>
              <Link to="/pricing" activeClassName="active">Pricing</Link>
            </li>
            <li>
              <Link to="/contact" activeClassName="active">Contact</Link>
            </li>
          </ul>
          <Link to="/get-started" className="btn" activeClassName="active">Get started</Link>
        </nav>
        <MenuMobile/>
      </div>
    </HeaderStyle>
  )
}

export default Header
