import React from "react";
import './Footer.scss';

const Footer = () => {
  return (
    <>
      <footer >
        

        <p>Made with ❤️ in India</p>

        <ul className="contact-us">
          <li>
            <a href="mailto:jainnayan128@gmail.com" rel="noreferrer" target="_blank">
              <i
                className="fa fa-envelope"
                style={{fontSize:"20px"}}
                aria-hidden="true"
              ></i>
            </a>
          </li>
          

          <li>
            <a href="https://github.com/NayanJain7/" rel="noreferrer" target="_blank">
              <i
                className="fa fa-github"
                style={{fontSize:"20px"}}
                aria-hidden="true"
              ></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/nayan-jain-1198021a8/" rel="noreferrer" target="_blank">
              <i
                className="fa fa-linkedin"
                style={{fontSize:"20px"}}
                aria-hidden="true"
              ></i>
            </a>
          </li>
        </ul>
        <p className="data-source">
          Source of Data:{" "}
          <a href="https://www.kaggle.com/patrickb1912/ipl-complete-dataset-20082020/" rel="noreferrer"  target="_blank">
            Kaggle
          </a>
        </p>
        <p>
           Note: Data is available from 2008 - 2021.
        </p>
      </footer>
    </>
  );
};
export default Footer;
