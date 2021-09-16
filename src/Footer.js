import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer-distributed">
        <div className="col-12 pb-4">
          <div className="row">
            <div className="col-5">
              <p className="footer-web_copyRight__DrQfq">
                <span>
                  Copyright
                  <img
                    className="ml-1 mr-1"
                    src="https://images.leverageedu.com/assets/img/footer/copyright.svg"
                    alt=""
                  />
                  "2021 Leverage Edu. All rights reserved."
                </span>
              </p>
            </div>
            <div className="col-2 pl-4">
              <div>
                <a
                  className="footer-web_footerLink__1fbLb"
                  href="https://leverageedu.com/privacy-policy"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
            <div className="col-3 pl-4">
              <div>
                <a
                  className="footer-web_footerLink__1fbLb"
                  href="https://leverageedu.com/terms-and-conditions"
                >
                  Terms &amp; Conditions
                </a>
              </div>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
