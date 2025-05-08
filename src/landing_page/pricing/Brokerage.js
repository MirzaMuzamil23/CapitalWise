import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row mt-5 text-center border-top">
        <div className="col-6 p-4 mt-5">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage Calculator</h3>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2" }}
            className="mt-4 text-muted"
          >
            <li>
              Call & Trade An additional charge of PKR 50 per order applies for
              orders placed through a dealer at Certia, including auto
              square-off orders.
            </li>
            <li>
              Stamp charges are applied as per the regulations set by the
              Government of Pakistan for transactions in instruments on the
              stock exchanges and depositories.
            </li>
            <li>
              Interest is charged at 18% per annum or 0.05% per day on the debit
              balance in your trading account.
            </li>
          </ul>
        </div>
        <div className="col-6 p-4 mt-5">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of charges</h3>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2" }}
            className="mt-4 text-muted"
          >
            <li>PKR 25 per transaction.</li>
            <li>
              MTF Interest: 0.04% per day (PKR 40 per lakh) on the funded
              amount. Interest is applied from T+1 day until the day MTF stocks
              are sold on PSX
            </li>
            <li>
              If the account has a debit balance, any order placed will be
              charged PKR 40 per executed order instead of PKR 20.
            </li>
            <li>
              PKR 9 + GST (Not applicable on transfers done via Raast or IBFT).
            </li>
          </ul>
        </div>
      </div>
      <div className="row mb-5 mt-5">
        <h1 className="text-center mb-3 fs-2 mt-5">Open a Captialwise Account</h1>
        <p className="text-center text-muted fs-5 mb-5">
          Modern platforms and apps, 0 Rs investments, and flat 20 Rs intraday
          and F&O trades
        </p>
        <button
          className=" p-2 btn btn-primary fs-5 mb-5 "
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Brokerage;
