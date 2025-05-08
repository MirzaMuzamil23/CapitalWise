import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="text-center mt-5">
          <h1 className="fs-1">Charges</h1>
          <p className="fs-4 text-muted mb-5">List of all charges and taxes</p>
        </div>
        <div className="col-4 mt-5">
          <img src="media/images/pricingMF.svg" className="mb-4" style={{width:"90%"}}/>
          <h2 className="fs-4 mb-4">Free equity delivery</h2>
          <p className="text-muted ">
            All equity delivery investments (PSX) through Certia are completely
            free — PKR 0 brokerage.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img src="media/images/intradayTrades.svg" className="mb-4" style={{width:"90%"}}/>
          <h2 className="fs-4 mb-4">Intraday and derivatives trades</h2>
          <p className="text-muted ">
            Flat PKR 20 or 0.03% (whichever is lower) per executed order across
            equity, currency, and commodity intraday trades. Flat PKR 20 on all
            options trades.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img src="media/images/pricingMF.svg" className="mb-4" style={{width:"90%"}} />
          <h2 className="fs-4 mb-4">Free Direct Mutual Funds</h2>
          <p className="text-muted ">
            All direct mutual fund investments through Certia are absolutely
            free — PKR 0 commissions and no DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
