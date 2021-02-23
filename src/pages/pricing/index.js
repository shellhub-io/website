import React from 'react'
import { Link } from 'gatsby'
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
                      <Link to="/get-started" className="btn">Get Started</Link>
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
                      <Link to="/contact" className="btn">Get in touch</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="info-geral-mobile">
                <div>
                  <div className="item">
                    <h3>Price</h3>
                    <ul>
                      <li>
                        <span>Community</span>
                        <strong>Free</strong>
                      </li>
                      <li>
                        <span>Enterprise</span>
                        <strong>$ 3,00 (device/month)</strong>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Host anywhere</h3>
                    <ul>
                      <li>
                        <span>Community</span>
                        <strong><CheckedItemPlan/></strong>
                      </li>
                      <li>
                        <span>Enterprise</span>
                        <strong><CheckedItemPlan/></strong>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Secure remote communication</h3>
                    <ul>
                      <li>
                        <span>Community</span>
                        <strong><CheckedItemPlan/></strong>
                      </li>
                      <li>
                        <span>Enterprise</span>
                        <strong><CheckedItemPlan/></strong>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Suitable for any infrastructure</h3>
                    <ul>
                      <li>
                        <span>Community</span>
                        <strong><CheckedItemPlan/></strong>
                      </li>
                      <li>
                        <span>Enterprise</span>
                        <strong><CheckedItemPlan/></strong>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Documentation and Technical Support</h3>
                    <ul>
                      <li>
                        <span>Community</span>
                        <strong><CheckedItemPlan/></strong>
                      </li>
                      <li>
                        <span>Enterprise</span>
                        <strong><CheckedItemPlan/></strong>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Admin console</h3>
                    <ul>
                      <li>
                        <span>Community</span>
                        <strong></strong>
                      </li>
                      <li>
                        <span>Enterprise</span>
                        <strong><CheckedItemPlan/></strong>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Fully managed</h3>
                    <ul>
                      <li>
                        <span>Community</span>
                        <strong></strong>
                      </li>
                      <li>
                        <span>Enterprise</span>
                        <strong><CheckedItemPlan/></strong>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Managing Firewall Rules</h3>
                    <ul>
                      <li>
                        <span>Community</span>
                        <strong></strong>
                      </li>
                      <li>
                        <span>Enterprise</span>
                        <strong><CheckedItemPlan/></strong>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Session record and playback</h3>
                    <ul>
                      <li>
                        <span>Community</span>
                        <strong></strong>
                      </li>
                      <li>
                        <span>Enterprise</span>
                        <strong><CheckedItemPlan/></strong>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Firewall for filtering SSH connections</h3>
                    <ul>
                      <li>
                        <span>Community</span>
                        <strong></strong>
                      </li>
                      <li>
                        <span>Enterprise</span>
                        <strong><CheckedItemPlan/></strong>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                  <h3>SSL traffic encryption</h3>
                  <ul>
                    <li>
                      <span>Community</span>
                      <strong></strong>
                    </li>
                    <li>
                      <span>Enterprise</span>
                      <strong><CheckedItemPlan/></strong>
                    </li>
                  </ul>
                </div>
                </div>
                <div className="cards">
                  <div className="card">
                    <h3>Community plan</h3>
                    <p>Designed for engineers who prefer Do-it-yourself projects</p>
                    <Link to="/get-started">Get Started</Link>
                  </div>
                  <div className="card">
                    <h3>Enterprise plan</h3>
                    <p>Designed for engineers who prefer Do-it-yourself projects</p>
                    <Link to="/contact" className="btn">Get in touch</Link>
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
                      <Link to="/get-started" className="btn">Get Started</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="info-geral-mobile">
                <div>
                  <div className="item">
                    <h3>Price</h3>
                    <ul>
                      <li>
                        <strong>$ 3,00 (device/month)</strong>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Host anywhere</h3>
                    <ul>
                      <li>
                        <strong><CheckedItemPlan/></strong>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Secure remote communication</h3>
                    <ul>
                      <li>
                        <strong><CheckedItemPlan/></strong>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Suitable for any infrastructure</h3>
                    <ul>
                      <li>
                        <strong><CheckedItemPlan/></strong>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Documentation and Technical Support</h3>
                    <ul>
                      <li>
                        <strong><CheckedItemPlan/></strong>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Admin console</h3>
                    <ul>
                      <li>
                        <strong><CheckedItemPlan/></strong>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Fully managed</h3>
                    <ul>
                      <li>
                        <strong><CheckedItemPlan/></strong>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Managing Firewall Rules</h3>
                    <ul>
                      <li>
                        <strong><CheckedItemPlan/></strong>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Session record and playback</h3>
                    <ul>
                      <li>
                        <strong><CheckedItemPlan/></strong>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Firewall for filtering SSH connections</h3>
                    <ul>
                      <li>
                        <strong><CheckedItemPlan/></strong>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>SSL traffic encryption</h3>
                    <ul>
                      <li>
                        <strong><CheckedItemPlan/></strong>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="cards">
                  <div className="card">
                    <p>Design for engineering teams that require the simplicity of a hosted and managed service. We are on the Beta version. New features will be added soon.	</p>
                    <Link to="/get-started">Get Started</Link>
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