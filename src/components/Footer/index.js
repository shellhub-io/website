import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'gatsby'
import  { FooterStyle, FlashMenuStyle } from './styles'

import Icon from  '../Icon'

import IconDocumentation from '../../assets/icon-documentation.svg'
import IconArticle from '../../assets/icon-article.svg'
import Logo from '../../assets/logo.svg'
import Insany from '../../assets/insany.svg'

function Footer() {
  return (
    <>
      <FlashMenuStyle>
        <div className="container">
          <div className="main">
            <a href="#" target="_blank" className="item">
              <Icon  url={<IconDocumentation/>}/>
              <div className="txt">
                <h3>Documentation</h3>
                <p>Follow our getting started guide and learn the inner workings of ShellHub</p>
              </div>
            </a>
            <Link to="/article" className="item">
              <Icon url={<IconArticle/>}/>
              <div className="txt">
                <h3>Article</h3>
                <p>Meet the freedom of Open Source technologies</p>
              </div>
            </Link>
          </div>
        </div>
      </FlashMenuStyle>
      <FooterStyle>
        <div className="container">
          <div className="main">
            <div className="left">
              <Logo/>
              <ul>
                <li><a href=""><FaFacebookF/></a></li>
                <li><a href=""><FaInstagram/></a></li>
                <li><a href=""><FaYoutube/></a></li>
                <li><a href=""><FaTwitter/></a></li>
                <li><a href=""><FaLinkedinIn/></a></li>
              </ul>
            </div>
            <div className="right">
              <ul>
                <li><Link to="/get-started">Get started</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/community">Community</Link></li>
                <li><a href="#" target="_blank">Documentation</a></li>
                <li><Link to="/article">Article</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
              <div className="text">
                <h3>Get seamless remote access to any Linux device</h3>
                <a href="">Free trial</a>
              </div>
            </div>
          </div>
          <div className="copy">
            <p>©2020 Shellhub - All rights reserved</p>
            <div className="made">
              <span>Design by:</span>
              <a href="https://insanydesign.com/" target="_blank">
                <Insany/>
              </a>
            </div>
          </div>
        </div>
      </FooterStyle>
    </>
    
  )
}

export default Footer
