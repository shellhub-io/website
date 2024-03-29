import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/Layout";
import SEO from "../../components/Seo";

import CheckedItemPlan from "../../assets/checked.svg";
import Minus from "../../assets/minus.svg";
import Plus from "../../assets/plus.svg";

import { Tabs } from "antd";

import { SectionPricingStyle } from "./styles";
import Slider from "react-rangeslider";

const { TabPane } = Tabs;

export default function PagePricing() {
  const [sliderValue, setSliderValue] = React.useState(1);
  const [sliderLeft, setSliderLeft] = React.useState(11);
  const [sliderArrow, setSliderArrow] = React.useState(50);
  const [sliderArrowRight, setSliderArrowRight] = React.useState(false);
  const [price, setPrice] = React.useState(1);

  /* Silent warning  about the Slider Value of hook*/
  /* eslint-disable-next-line */
  React.useEffect(() => {
    const price = () => {
        let sumPrice = 0;

        const ranges = [3, 10, 25, 40, 55, 70, 85, 100, 115, 130, 145, 160, 175, 190, Infinity];
        const ks = [3, 2.91, 2.82, 2.74, 2.66, 2.58, 2.50, 2.42, 2.35, 2.28, 2.21, 2.15, 2.08, 2.02, 2.00];

        const tiers = Array.from({length: ks.length -1}, (_, i) => ({begin: ranges[i], upTo: ranges[i+1], k: ks[i]}))

        tiers.forEach((t) => {
            if (sliderValue > t.begin) {
              sumPrice += ((sliderValue<=t.upTo)?(sliderValue-t.begin):(t.upTo-t.begin))*t.k;
            }
        })

        return sumPrice;
    }
    setPrice(price);
    switch (true) {
      case sliderValue < 10:
        setSliderArrowRight(false);
        setSliderLeft((sliderValue * 10 - 90) * -1 + sliderValue * 2);
        setSliderArrow(sliderValue * 4 + 10);
        break;
      case sliderValue > 194:
        setSliderArrowRight(true);
        setSliderLeft((sliderValue - 201) * -1 * 10 - 60);
        setSliderArrow((sliderValue - 201) * -1 * 5 + 5);
        break;
      default:
        setSliderArrowRight(false);
        setSliderLeft(11);
        setSliderArrow(50);
        break;
    }
    if (document.getElementsByClassName("rangeslider__handle")[0]) {
      document
        .getElementsByClassName("rangeslider__handle")[0]
        .insertAdjacentHTML(
          "beforeend",
          '<div class="rangeslider__handle-tooltip"><span><strong>' +
            sliderValue +
            " </strong><span> devices</span></span></div>"
        );
    }
    if (document.getElementsByClassName("rangeslider__handle")[1]) {
      document
        .getElementsByClassName("rangeslider__handle")[1]
        .insertAdjacentHTML(
          "beforeend",
          '<div class="rangeslider__handle-tooltip"><span><strong>' +
            sliderValue +
            " </strong><span> devices</span></span></div>"
        );
    }
  });
  function handleChange(value) {
    setSliderValue(value);
  }
  function handlePlusSliderValue() {
    setSliderValue(sliderValue >= 100 ? 100 : sliderValue + 1);
  }
  function handleMinusSliderValue() {
    setSliderValue(sliderValue <= 1 ? 1 : sliderValue - 1);
  }
  function handleFormat() {
    return (
      <>
        <strong>{sliderValue} </strong>
        <span> devices</span>
      </>
    );
    // return `${sliderValue} devices`;
  }
  return (
    <Layout>
      <SEO
        title="Pricing"
        description="ShellHub comes in three flavors: Community, an open source version; Enterprise, a fully managed version; and Cloud, a hosted service. The commercial offerings have a minimum base price and are priced by devices.		"
        lang="en"
      />
      <SectionPricingStyle
        tooltip={{
          left: sliderLeft + "px",
          arrow: sliderArrow + "%",
          sliderArrowRight,
        }}
      >
        <div className="container">
          <div className="title">
            <h2>Pricing</h2>
            <h1>Select the right plan for your organization​</h1>
            <p>
              ShellHub comes in three flavors: Community, an open source
              version; Enterprise, a fully managed version; and Cloud, a hosted
              service. The commercial offerings have a minimum base price and
              are priced by devices.{" "}
            </p>
          </div>

          <Tabs defaultActiveKey="self">
            <TabPane
              tab={
                <span>
                  Cloud
                </span>
              }
              key="self"
            >
              <div className="info-geral">
                <div className="items">
                  <ul>
                    <li>Price</li>
                    <li>Managed Kubernetes Cluster</li>
                    <li>Secure and scalable environment</li>
                    <li>Secure remote communication</li>
                    <li>Suitable for any infrastructure</li>
                    <li>Protection Against DDoS Attacks</li>
                    <li>Documentation and Technical Support</li>
                    <li>Managing Firewall Rules</li>
                    <li>Session record and playback</li>
                    <li>Firewall for filtering SSH connections</li>
                    <li>SSL traffic encryption</li>
                    <li className="last">Priced For Your Budget!</li>
                  </ul>
                  <div className="calc-price">
                    <div className="slider">
                      <div className="top-slider">
                        <span role="none" onClick={handleMinusSliderValue} onKeyDown={handleMinusSliderValue}>
                          <Minus />
                        </span>
                        <span role="none" onClick={handlePlusSliderValue} onKeyUp={handlePlusSliderValue}>
                          <Plus />
                        </span>
                      </div>
                      <Slider
                        min={1}
                        max={200}
                        tooltip={true}
                        format={handleFormat}
                        value={sliderValue}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="box-price">
                      <div className="box">
                        <div className="price">
                          {price <= 0 ? "Free" : "$ " + price.toFixed(2)}
                        </div>
                        {price > 0 && (
                          <div className="text">total per month.</div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="bot-info">
                    <p className="msg">
                      Design for engineering teams that require the simplicity
                      of a hosted and managed service.
                    </p>
                    <div className="text">
                      <Link to="https://cloud.shellhub.io/sign-up" className="btn">
                        Create Free Account
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="plans">
                  <div className="item-plan">
                    <div className="box">
                      <ul>
                        <li>
                          <strong>Service free up to 3 devices</strong>
                        </li>
                        <li>
                          <CheckedItemPlan />
                        </li>
                        <li>
                          <CheckedItemPlan />
                        </li>
                        <li>
                          <CheckedItemPlan />
                        </li>
                        <li>
                          <CheckedItemPlan />
                        </li>
                        <li>
                          <CheckedItemPlan />
                        </li>
                        <li>
                          <CheckedItemPlan />
                        </li>
                        <li>
                          <CheckedItemPlan />
                        </li>
                        <li>
                          <CheckedItemPlan />
                        </li>
                        <li>
                          <CheckedItemPlan />
                        </li>
                        <li>
                          <CheckedItemPlan />
                        </li>
                        <li>
                          <CheckedItemPlan />
                        </li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
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
                        <strong>Service free up to 3 devices</strong>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Host anywhere</h3>
                    <ul>
                      <li>
                        <strong>
                          <CheckedItemPlan />
                        </strong>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Secure remote communication</h3>
                    <ul>
                      <li>
                        <strong>
                          <CheckedItemPlan />
                        </strong>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Suitable for any infrastructure</h3>
                    <ul>
                      <li>
                        <strong>
                          <CheckedItemPlan />
                        </strong>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Documentation and Technical Support</h3>
                    <ul>
                      <li>
                        <strong>
                          <CheckedItemPlan />
                        </strong>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Admin console</h3>
                    <ul>
                      <li>
                        <strong>
                          <CheckedItemPlan />
                        </strong>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Fully managed</h3>
                    <ul>
                      <li>
                        <strong>
                          <CheckedItemPlan />
                        </strong>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Managing Firewall Rules</h3>
                    <ul>
                      <li>
                        <strong>
                          <CheckedItemPlan />
                        </strong>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Session record and playback</h3>
                    <ul>
                      <li>
                        <strong>
                          <CheckedItemPlan />
                        </strong>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Firewall for filtering SSH connections</h3>
                    <ul>
                      <li>
                        <strong>
                          <CheckedItemPlan />
                        </strong>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>SSL traffic encryption</h3>
                    <ul>
                      <li>
                        <strong>
                          <CheckedItemPlan />
                        </strong>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="calc-price">
                  <div className="slider">
                    <div className="top-slider">
                      <span role="none" onClick={handleMinusSliderValue} onKeyDown={handleMinusSliderValue}>
                        <Minus />
                      </span>
                      <span role="none" onClick={handlePlusSliderValue} onKeyUp={handlePlusSliderValue}>
                        <Plus />
                      </span>
                    </div>
                    <Slider
                      min={1}
                      max={200}
                      tooltip={true}
                      format={handleFormat}
                      value={sliderValue}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="box-price">
                    <div className="box">
                      <div className="price">
                        {price <= 0 ? "Free" : "$ " + price.toFixed(2)}
                      </div>
                      {price > 0 && (
                        <div className="text">total per month.</div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="cards">
                  <div className="card">
                    <p>
                      Design for engineering teams that require the simplicity
                      of a hosted and managed service.
                    </p>
                    <Link to="//docs.shellhub.io/self-hosted/deploying">Get Started</Link>
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane tab={<span>On premises</span>} key="onPremises">
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
                        <li>
                          <strong>Free</strong>
                        </li>
                        <li>
                          <CheckedItemPlan />
                        </li>
                        <li>
                          <CheckedItemPlan />
                        </li>
                        <li>
                          <CheckedItemPlan />
                        </li>
                        <li>
                          <CheckedItemPlan />
                        </li>
                        <li>
                          <CheckedItemPlan />
                        </li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                    <div className="text">
                      <p>
                        Designed for engineers who prefer Do-it-yourself
                        projects
                      </p>
                      <a
                        href="//docs.shellhub.io/self-hosted/deploying"
                        target="_blank"
                        rel="noreferrer"
                        className="btn"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                  <div className="item-plan">
                    <div className="box">
                      <h3 className="title-plan">Enterprise</h3>
                      <ul>
                        <li>
                          <strong>Based on the number of devices</strong>
                        </li>
                        <li>
                          <CheckedItemPlan />
                        </li>
                        <li>
                          <CheckedItemPlan />
                        </li>
                        <li>
                          <CheckedItemPlan />
                        </li>
                        <li>
                          <CheckedItemPlan />
                        </li>
                        <li>
                          <CheckedItemPlan />
                        </li>
                        <li>
                          <CheckedItemPlan />
                        </li>
                        <li>
                          <CheckedItemPlan />
                        </li>
                        <li>
                          <CheckedItemPlan />
                        </li>
                        <li>
                          <CheckedItemPlan />
                        </li>
                        <li>
                          <CheckedItemPlan />
                        </li>
                      </ul>
                    </div>
                    <div className="text">
                      <p>
                        Designed for engineering teams with enterprises grade
                        needs
                      </p>
                      <Link to="/contact" className="btn">
                        Get a quote
                      </Link>
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
                        <strong>Based on the number of devices</strong>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Host anywhere</h3>
                    <ul>
                      <li>
                        <span>Community</span>
                        <strong>
                          <CheckedItemPlan />
                        </strong>
                      </li>
                      <li>
                        <span>Enterprise</span>
                        <strong>
                          <CheckedItemPlan />
                        </strong>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Secure remote communication</h3>
                    <ul>
                      <li>
                        <span>Community</span>
                        <strong>
                          <CheckedItemPlan />
                        </strong>
                      </li>
                      <li>
                        <span>Enterprise</span>
                        <strong>
                          <CheckedItemPlan />
                        </strong>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Suitable for any infrastructure</h3>
                    <ul>
                      <li>
                        <span>Community</span>
                        <strong>
                          <CheckedItemPlan />
                        </strong>
                      </li>
                      <li>
                        <span>Enterprise</span>
                        <strong>
                          <CheckedItemPlan />
                        </strong>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Documentation and Technical Support</h3>
                    <ul>
                      <li>
                        <span>Community</span>
                        <strong>
                          <CheckedItemPlan />
                        </strong>
                      </li>
                      <li>
                        <span>Enterprise</span>
                        <strong>
                          <CheckedItemPlan />
                        </strong>
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
                        <strong>
                          <CheckedItemPlan />
                        </strong>
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
                        <strong>
                          <CheckedItemPlan />
                        </strong>
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
                        <strong>
                          <CheckedItemPlan />
                        </strong>
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
                        <strong>
                          <CheckedItemPlan />
                        </strong>
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
                        <strong>
                          <CheckedItemPlan />
                        </strong>
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
                        <strong>
                          <CheckedItemPlan />
                        </strong>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="cards">
                  <div className="card">
                    <h3>Community plan</h3>
                    <p>
                      Designed for engineers who prefer Do-it-yourself projects
                    </p>
                    <a href="https://docs.shellhub.io/" target="_blank" rel="noreferrer">
                      Get Started
                    </a>
                  </div>
                  <div className="card">
                    <h3>Enterprise plan</h3>
                    <p>
                      Designed for engineering teams with enterprises grade
                      needs
                    </p>
                    <Link to="/contact" className="btn">
                      Get a quote
                    </Link>
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane tab={<span>Managed</span>} key="Managed">
              <div className="info-geral">
                <div className="items">
                  <h3>Compare Our Plans</h3>
                  <ul>
                    <li>Price</li>
                    <li>Dedicated server for every customer</li>
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
                      <h3 className="title-plan">Enterprise</h3>
                      <ul>
                        <li>
                          <strong>Based on the number of devices</strong>
                        </li>
                        <li>
                          <CheckedItemPlan />
                        </li>
                        <li>
                          <CheckedItemPlan />
                        </li>
                        <li>
                          <CheckedItemPlan />
                        </li>
                        <li>
                          <CheckedItemPlan />
                        </li>
                        <li>
                          <CheckedItemPlan />
                        </li>
                        <li>
                          <CheckedItemPlan />
                        </li>
                        <li>
                          <CheckedItemPlan />
                        </li>
                        <li>
                          <CheckedItemPlan />
                        </li>
                        <li>
                          <CheckedItemPlan />
                        </li>
                        <li>
                          <CheckedItemPlan />
                        </li>
                        <li>
                          <CheckedItemPlan />
                        </li>
                      </ul>
                    </div>
                    <div className="text">
                      <p>
                        Designed for engineering teams with enterprises grade
                        needs
                      </p>
                      <Link to="/contact" className="btn">
                        Get a quote
                      </Link>
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
                        <strong>Based on the number of devices</strong>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Host anywhere</h3>
                    <ul>
                      <li>
                        <span>Community</span>
                        <strong>
                          <CheckedItemPlan />
                        </strong>
                      </li>
                      <li>
                        <span>Enterprise</span>
                        <strong>
                          <CheckedItemPlan />
                        </strong>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Secure remote communication</h3>
                    <ul>
                      <li>
                        <span>Community</span>
                        <strong>
                          <CheckedItemPlan />
                        </strong>
                      </li>
                      <li>
                        <span>Enterprise</span>
                        <strong>
                          <CheckedItemPlan />
                        </strong>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Suitable for any infrastructure</h3>
                    <ul>
                      <li>
                        <span>Community</span>
                        <strong>
                          <CheckedItemPlan />
                        </strong>
                      </li>
                      <li>
                        <span>Enterprise</span>
                        <strong>
                          <CheckedItemPlan />
                        </strong>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Documentation and Technical Support</h3>
                    <ul>
                      <li>
                        <span>Community</span>
                        <strong>
                          <CheckedItemPlan />
                        </strong>
                      </li>
                      <li>
                        <span>Enterprise</span>
                        <strong>
                          <CheckedItemPlan />
                        </strong>
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
                        <strong>
                          <CheckedItemPlan />
                        </strong>
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
                        <strong>
                          <CheckedItemPlan />
                        </strong>
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
                        <strong>
                          <CheckedItemPlan />
                        </strong>
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
                        <strong>
                          <CheckedItemPlan />
                        </strong>
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
                        <strong>
                          <CheckedItemPlan />
                        </strong>
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
                        <strong>
                          <CheckedItemPlan />
                        </strong>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="cards">
                  <div className="card">
                    <h3>Community plan</h3>
                    <p>
                      Designed for engineers who prefer Do-it-yourself projects
                    </p>
                    <a href="https://docs.shellhub.io/" target="_blank" rel="noreferrer">
                      Get Started
                    </a>
                  </div>
                  <div className="card">
                    <h3>Enterprise plan</h3>
                    <p>
                      Designed for engineering teams with enterprises grade
                      needs
                    </p>
                    <Link to="/contact" className="btn">
                      Get in touch
                    </Link>
                  </div>
                </div>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </SectionPricingStyle>
    </Layout>
  );
}
