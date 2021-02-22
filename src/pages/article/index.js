import React from 'react'
import Layout from  '../../components/Layout'
import SEO from '../../components/Seo'

import Card from '../../components/CardArticle'

import { SectionArticleStyle } from './styles'

import Medium from '../../assets/medium.png'
import OpenSource from  '../../assets/opensource.png'
import Linux from '../../assets/linux.png'
import Techgig from '../../assets/techgig.png'
import Awesome from '../../assets/awesome.png'
import Reposhub from '../../assets/reposhub.png'
import GoLang from '../../assets/golang.png'
import Alternative from '../../assets/alternative.png'
import Code from '../../assets/code.png'
import Programmer from '../../assets/ProgrammerSought.png'
import Facebook from '../../assets/facebook.png'
import Bypass from '../../assets/bypass.png'

const articles = [
  {
    logo : `${Medium}`,
    title : 'SSH and ShellHub',
    date: '24/06/20',
    description: 'The SSH protocol is a secure alternative to protect communications integrity and...',
    url: 'https://medium.com/os-systems/ssh-and-shellhub-e3d38b3e12c7'
  },
  {
    logo : `${OpenSource}`,
    title : 'Bypass your Linux firewall with SSH over HTTP',
    date: '29/07/20',
    description: 'Remote work is here to stay; use this helpful open source solution to quickly connect and access...',
    url: 'https://opensource.com/article/20/7/linux-shellhub'
  },
  {
    logo : `${Linux}`,
    title : 'Reenvisioning SSH with ShellHub',
    date: '15/06/20',
    description: 'ShellHub offers an innovative approach to remote access with minimal reconfiguration of a...',
    url: 'https://www.linux-magazine.com/Issues/2020/235/ShellHub'
  },
  {
    logo : `${Techgig}`,
    title : 'WFH tips: Bypass your Linux firewall with ShellHub',
    date: '01/09/20',
    description: 'The COVID-19 pandemic has led to a growth of connectivity and remote jobs. Accessing remote...',
    url: 'https://content.techgig.com/wfh-tips-bypass-your-linux-firewall-with-shellhub/articleshow/77818929.cms'
  },
  {
    logo : `${Awesome}`,
    title : 'ShellHub enables teams to easily access any Linux device behind firewall ...',
    date: '12/03/20',
    description: 'ShellHub is a modern SSH server for remotely accessing Linux devices via command line...',
    url: 'https://sysadmin.libhunt.com/shellhub-alternatives'
  },
  {
    logo : `${Reposhub}`,
    title : 'Centralized SSH for the edge and cloud computing.',
    date: '28/08/20',
    description: 'hellHub ShellHub is a modern SSH server for remotely accessing Linux devices via command line...',
    url: 'https://reposhub.com/go/command-line/shellhub-io-shellhub.html'
  },
  {
    logo : `${GoLang}`,
    title : 'ShellHub enables teams to easily access any Linux device behind firewall...',
    date: '29/01/200',
    description: 'hellHub is a modern SSH server for remotely accessing Linux devices via command...',
    url: 'https://golangexample.com/shellhub-enables-teams-to-easily-access-any-linux-device-behind-firewall-and-nat/'
  },
  {
    logo : `${Alternative}`,
    title : 'ShellHub Alternatives, Similar',
    date: '25/05/20',
    description: 'ShellHub is a modern SSH server for remotely accessing Linux devices via command line...',
    url: 'https://alternativebk.com/shellhub/'
  },
  {
    logo : `${Code}`,
    title : 'Bypass the Linux firewall via HTTP via SSH | Linux China',
    date: '29/06/20',
    description: 'ShellHub is a modern SSH server for remotely accessing Linux devices via command line (using...',
    url: 'https://www.codercto.com/a/100808.html'
  },
  {
    logo : `${Programmer}`,
    title : 'Bypass the Linux firewall via HTTP via SSH | Linux China',
    date: '29/06/2020',
    description: 'Need a look at remote work. Use this useful open source solution to quickly connect and access...',
    url: 'https://www.programmersought.com/article/14115272786/'
  },
  {
    logo : `${Facebook}`,
    title : 'ShellHub permite que as equipas acedam facilmente a qualquer dispositivo...',
    date: '27/01/20',
    description: 'ShellHub enables teams to easily access any Linux device behind firewall and NAT :',
    url: 'https://www.facebook.com/hn.hiren.news/posts/shellhub-enables-teams-to-easily-access-any-linux-device-behind-firewall-and-nat/2574408262802420/'
  },
  {
    logo : `${Bypass}`,
    title : 'Bypass your Linux firewall with SSH over HTTP',
    date: '17/04/20',
    description: 'With the growth of connectivity and remote jobs, accessing remote computing resources...',
    url: 'https://morioh.com/p/4e3ad58c546c'
  }
]


export default function pagePricing() {
  return (
    <Layout>
      <SEO title="Article" description="Published articles and coverage." lang="en" />
      <SectionArticleStyle>
        <div className="container">
          <div className="top">
            <h1>Articles</h1>
            <p>Published articles and coverage.</p>
          </div>
          <div className="all">
            {
              articles.map(({logo, title, date, description, url}, index) => 
                <Card 
                  key={index}
                  logo={logo}
                  title={title}
                  date={date}
                  description={description}
                  url={url}
                />
              )
            }
          </div>
        </div>
      </SectionArticleStyle>
    </Layout>
  )
}