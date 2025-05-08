import React from "react";

function Team() {
  return (
    <div className="container ">
      <div className="row ">
        <h1 className="text-center mt-5 fs-2 mb-5">People</h1>
        <div className="row">
          <div className="col-5 px-5 mt-3 text-center">
                <img src= "media/images/mirzamuzamil.jpg" style={{borderRadius: "100%", width:"80%"}}/>
                <p className="mt-4 fs-5">Mirza Muzammil Baig</p>
                <p className="text-muted">Founder, CEO</p>
          </div>
          <div className="col-6 mt-4 text-center text-muted">
            <p>
              Mirza Muzammil Baig didn’t just start Capitalwise—he sparked a mission to
              rewrite the rules of investing in Pakistan. A self-taught trader
              who learned the hard way, he bootstrapped Capitalwise in 12th Nov,2012 
              after hitting wall after wall in an industry built for the few, not the many.
            </p>
            <p>
              What began as one person’s hustle has grown into one of Pakistan’s
              most disruptive and future-focused brokerage platforms—giving
              power back to everyday investors and making the stock market truly
              accessible.
            </p>
            <p>
              Today, he’s a recognized voice in Pakistan’s fintech and capital
              market space, shaping conversations around innovation, financial
              inclusion, and transparency.
            </p>

            <p>
              And when he’s not deep in data or building the next big
              thing—you’ll catch him on the basketball court, where strategy,
              rhythm, and grit still drive the game.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
