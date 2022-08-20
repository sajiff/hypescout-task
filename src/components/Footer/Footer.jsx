import {
  faInstagram,
  faLinkedin,
  faSquareFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";

const Footer = ({ theme }) => {
  return (
    <div className="footer-container">
      <div className="footer-start">
        <div className="footer-logo">
          <img
            src={
              theme === "dark-theme"
                ? process.env.PUBLIC_URL + "/logo-white.png"
                : process.env.PUBLIC_URL + "/logo-black.png"
            }
            alt="hypescout"
          />
        </div>
        <div className="footer-second-section">
          <div className="footer-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac
              suscipit diam. Duis blandit vulputate blandit. Suspendisse
              venenatis urna
            </p>
            <div className="footer-socials">
              <FontAwesomeIcon
                size="xl"
                className="nav-icons"
                icon={faSquareFacebook}
              />
              <FontAwesomeIcon
                size="xl"
                className="nav-icons"
                icon={faInstagram}
              />
              <FontAwesomeIcon
                size="xl"
                className="nav-icons"
                icon={faLinkedin}
              />
              <FontAwesomeIcon
                size="xl"
                className="nav-icons"
                icon={faTwitter}
              />
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-company">
              <ul>
                <li>
                  <h2>Company</h2>
                </li>
                <li>
                  <p>About Us</p>
                </li>
                <li>
                  <p>Career</p>
                </li>
                <li>
                  <p>Case Study</p>
                </li>
                <li>
                  <p>Blog</p>
                </li>
                <li>
                  <p>Contact Us</p>
                </li>
              </ul>
            </div>

            <div className="footer-influencer">
              <ul>
                <li>
                  <h2>Influencer</h2>
                </li>
                <li>
                  <p>Join as Influencer</p>
                </li>
                <li>
                  <p>hypeSocial</p>
                </li>
              </ul>
            </div>
            <div className="footer-advertiser">
              <ul>
                <li>
                  <h2>Advertiser</h2>
                </li>
                <li>
                  <p>Join as Advertiser</p>
                </li>
                <li>
                  <p>Hypelink</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-third-section">
          <div className="footer-third-section-left">
            <FontAwesomeIcon
              size="l"
              className="nav-icons pagination-icon-left"
              icon={faCopyright}
            />
            <p>Hypescout 2022. All rights reserved</p>
          </div>
          <div className="footer-third-section-right">
            <p>Terms & Conditions</p>
            <p>Privacy</p>
            <p>Sitemap</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
