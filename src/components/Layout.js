import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import GlobalStyles from '../styles/global';

import 'antd/dist/antd.css'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  const [fixedHeader, setFixedHeader] = useState(false)

  useEffect(() => {
    const scrollListener = () => {
      window.scrollY > 80 ? setFixedHeader(true) : setFixedHeader(false)
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])
  return (
    <>
        <GlobalStyles/>
        <Header fixed={fixedHeader}/>
        <main>
          {children}
        </main>
        <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
