import React from 'react'
import { Link }  from 'gatsby'
import Layout from  '../../components/Layout'
import SEO from '../../components/Seo'
import GitHubButton from 'react-github-button';

import { SectionCommunityStyle, SectionOpenSourceStyle } from './styles'

import Icon from '../../components/Icon'

import GitHub from '../../assets/github.svg'
import Arrow from '../../assets/arrow-md.svg'
import IlustraCommunity from '../../assets/ilustra-community.png'
import IconAvoid from '../../assets/icon-avoid.svg'

export default function pageCommunity() {
  return (
    <Layout>
      <SEO title="Community" description="Thousands of people are engaged in the amazing Open Source World. Free to create, change, and share your ideas!  Join us on this journey! The future is Open Source." lang="en" />
      <SectionCommunityStyle>
        <div className="container">
          <div className="text">
            <h1>Community</h1>
            <p>Thousands of people are engaged in the amazing Open Source World. Free to create, change, and share your ideas!  Join us on this journey! The future is Open Source.</p>
            <div className="btns">


              <a href="https://github.com/shellhub-io/shellhub/stargazers/" target="_blank">Star</a>
              <a href="https://github.com/shellhub-io/shellhub/network" target="_blank">Fork</a>
            </div>
            <a href="https://github.com/shellhub-io" target="_blank" className="btn-github">
              <GitHub/>
              <span>Open on GitHub <Arrow/></span>
            </a>
          </div>
          <img src={IlustraCommunity} className="image" alt="Ilustration community"/>
        </div>  
      </SectionCommunityStyle>

      <SectionOpenSourceStyle>
        <div className="container">
          <div className="top">
            <div className="left">
              <h2>The Open Source benefits</h2>
              <p>Open Source developers' skills and vision diversity are essential to maintain ShellHub code and product quality.</p>
            </div>
            <Link to="/get-started">Try shellhub</Link>
          </div>
          <div className="all">
            <div className="card">
              <Icon url={<IconAvoid/>}/>
              <div>
                <h3>Avoid vendor lock-in</h3>
                <p>ShellHub is also available in a fully Open Source version giving you the freedom to adopt the best version for your use case</p>
              </div>
            </div>
            <div className="card">
              <Icon url={<IconAvoid/>}/>
              <div>
                <h3>Continuously<br/> innovating</h3>
                <p>A community committed to improving the experience, quality, and security.</p>
              </div>
            </div>
            <div className="card">
              <Icon url={<IconAvoid/>}/>
              <div>
                <h3>No secret sauce</h3>
                <p>Same ShellHub agent in all versions. Check the code and stay up to date with all changes and updates. </p>
              </div>
            </div>
          </div>
        </div>
      </SectionOpenSourceStyle>
    </Layout>
  )
}