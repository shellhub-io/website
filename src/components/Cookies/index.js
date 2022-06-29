import React from "react";

import CookieConsent from "react-cookie-consent";
import { CookieStyles } from "./styles";
import { Link } from "gatsby"

export default function Cookies() {
  const enableAllCookies = () => {
    document.cookie = `gatsby-gdpr-google-tagmanager=${process.env.GTM_ID}`;
    document.cookie = `google-analytics-cookie=${process.env.GA_ID}`;
  };

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept the cookies !"
      cookieName="gatsby-gdpr-google-analytics"
      style={{
        background: "#667ACC",
      }}
      buttonStyle={{
        background: "#272B33",
        color: "white",
        padding: "10px 20px",
        borderRadius: " 300px",
      }}
      onAccept={enableAllCookies}
    >
      <CookieStyles>
        <h3>
          This website uses cookies to enhance the user experience !
        </h3>{" "}
        <Link to="/privacy-policy">
          learn more about our privacy policy.
        </Link>
      </CookieStyles>
    </CookieConsent>
  );
}
