import React from 'react'
import Layout from  '../../components/Layout'
import SEO from '../../components/Seo'

import CheckedItemPlan from '../../assets/checked.svg'

import { Tabs } from 'antd';

import { SectionPricingStyle } from './styles'

const { TabPane } = Tabs;


export default function pagePricing() {
  return (
    <Layout>
      <SEO title="Pricing" description="ShellHub comes in three flavors: Community, an open source version; Enterprise, a fully managed version; and Cloud, a hosted service. The commercial offerings have a minimum base price and are priced by devices.		" lang="en" />
      <SectionPricingStyle>
        <div className="container">
          <div className="title">
            <h2>Pricing</h2>
            <h1>Select the right plan for your organization​</h1>
            <p>ShellHub comes in three flavors: Community, an open source version; Enterprise, a fully managed version; and Cloud, a hosted service. The commercial offerings have a minimum base price and are priced by devices.		</p>
          </div>

          <Tabs defaultActiveKey="self">
            <TabPane tab={<span>Self-managed</span>} key="self">
              <div className="info-geral">
                <div className="items">
                  <h3>Compare Our Plans</h3>
                  <ul>
                    <li>Price</li>
                    <li>Host anywhere</li>
                    <li>Secure remote communication</li>
                    <li>Suitable for any infrastructure</li>
                    <li>Protection Against DDoS Attacks</li>
                    <li>Documentation and Technical Support</li>
                    <li>Admin console</li>
                    <li>Fully managed</li>
                    <li>Managing Firewall Rules</li>
                    <li>Session record and playback</li>
                    <li>Firewall for filtering SSH connections</li>
                    <li>SSL traffic encryption</li>
                  </ul>
                </div>
                <div className="plans">
                  <div className="item-plan">
                    <div className="box">
                      <h3 className="title-plan">Community</h3>
                      <ul>
                        <li><strong>Free</strong></li>
                        <li><CheckedItemPlan/></li>
                        <li><CheckedItemPlan/></li>
                        <li><CheckedItemPlan/></li>
                        <li><CheckedItemPlan/></li>
                        <li><CheckedItemPlan/></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                    <div className="text">
                      <p>Designed for engineers who prefer Do-it-yourself projects</p>
                      <a href="" className="btn">Get Started</a>
                    </div>
                  </div>
                  <div className="item-plan">
                    <div className="box">
                      <h3 className="title-plan">Enterprise</h3>
                      <ul>
                        <li><strong>$ 3,00 (device/month)</strong></li>
                        <li><CheckedItemPlan/></li>
                        <li><CheckedItemPlan/></li>
                        <li><CheckedItemPlan/></li>
                        <li><CheckedItemPlan/></li>
                        <li><CheckedItemPlan/></li>
                        <li><CheckedItemPlan/></li>
                        <li><CheckedItemPlan/></li>
                        <li><CheckedItemPlan/></li>
                        <li><CheckedItemPlan/></li>
                        <li><CheckedItemPlan/></li>
                        <li><CheckedItemPlan/></li>
                      </ul>
                    </div>
                    <div className="text">
                      <p>Designed for engineering teams with enterprises grade needs</p>
                      <a href="" className="btn">Get in touch</a>
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane tab={<span>Cloud <strong>Beta</strong></span>} key="cloud">
              <div className="info-geral">
                <div className="items">
                  <ul>
                    <li>Price</li>
                    <li>Host anywhere</li>
                    <li>Secure remote communication</li>
                    <li>Suitable for any infrastructure</li>
                    <li>Protection Against DDoS Attacks</li>
                    <li>Documentation and Technical Support</li>
                    <li>Admin console</li>
                    <li>Fully managed</li>
                    <li>Managing Firewall Rules</li>
                    <li>Session record and playback</li>
                    <li>Firewall for filtering SSH connections</li>
                    <li>SSL traffic encryption</li>
                  </ul>
                  <p className="msg">
                  Design for engineering teams that require the simplicity of a hosted and managed service. We are on the Beta version. New features will be added soon.	
                  </p>
                </div>
                <div className="plans">
                  <div className="item-plan">
                    <div className="box">
                      <ul>
                        <li><strong>Service free up to 3 devices</strong></li>
                        <li><CheckedItemPlan/></li>
                        <li><CheckedItemPlan/></li>
                        <li><CheckedItemPlan/></li>
                        <li><CheckedItemPlan/></li>
                        <li><CheckedItemPlan/></li>
                        <li><CheckedItemPlan/></li>
                        <li><CheckedItemPlan/></li>
                        <li><CheckedItemPlan/></li>
                        <li><CheckedItemPlan/></li>
                        <li><CheckedItemPlan/></li>
                        <li><CheckedItemPlan/></li>
                      </ul>
                    </div>
                    <div className="text">
                      <a href="" className="btn">Get Started</a>
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </SectionPricingStyle>
    </Layout>
  )
}