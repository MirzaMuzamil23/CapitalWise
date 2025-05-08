import React from "react";

function Univers() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="mt-5 text-center">
          <h1>The CaptialWise Universe</h1>
          <p className="mt-4 fs-6 text-muted">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
        <div className="col-4 p-4 mt-5">
          <img
            src="media/images/captialwisefund.png"
            style={{ width: "60%" }}
          />
          <p className="text-small text-muted mt-3">
            Our asset management venture that is creating simple and transpent
            index fund to help you to save your goals.
          </p>
        </div>
        <div className="col-4 p-4 mt-5">
          <img src="media/images/largecase.png" style={{ width: "60%" }} />
          <p className="text-small text-muted mt-3">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-4 mt-5">
          <img src="media/images/streakLogo.png" style={{ width: "60%" }} />
          <p className="text-small text-muted mt-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-4 mt-5">
          <img src="media/images/dittoLogo.png" style={{ width: "50%" }} />
          <p className="text-small text-muted mt-3">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <div className="col-4 p-4 mt-5">
          <img src="media/images/sensibull.png" style={{ width: "60%" }} />
          <p className="text-small text-muted mt-3">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-4 mt-5">
          <img src="media/images/tijori.png" style={{ width: "50%" }} />
          <p className="text-small text-muted mt-3">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <button className=' p-2 btn btn-primary mt-5 mb-5 fs-5'  style={{width:"20%", margin: "0 auto" }}>Sign up for free</button> 
      </div>
    </div>
  );
}

export default Univers;
