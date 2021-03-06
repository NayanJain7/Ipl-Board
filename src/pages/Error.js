import React from "react";
import { Link } from "react-router-dom";
import "./Error.scss";

const Error = () => {
  return (
    <div className="error-content">
      <div className="container">
        <div className="row">
          <div className="col-md-12 ">
            <div className="error-text">
              <h1 className="error">404 Error</h1>
              <div className="im-sheep">
                <div className="top">
                  <div className="body"></div>
                  <div className="head">
                    <div className="im-eye one"></div>
                    <div className="im-eye two"></div>
                    <div className="im-ear one"></div>
                    <div className="im-ear two"></div>
                  </div>
                </div>
                <div className="im-legs">
                  <div className="im-leg"></div>
                  <div className="im-leg"></div>
                  <div className="im-leg"></div>
                  <div className="im-leg"></div>
                </div>
              </div>
              <h4 id="oops">Oops! This page Could Not Be Found!</h4>
              <p id="sorry">
                Sorry bit the page you are looking for does not exist, have been
                removed or name changed.
              </p>

              <Link to="/" className="btn btn-primary btn-round">
                Go to homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
