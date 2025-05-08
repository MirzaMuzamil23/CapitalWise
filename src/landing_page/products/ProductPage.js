import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Univers from "./Univers";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDesription="Our ultra-fast flagship trading platform with 
            streaming market data, advanced charts, an elegant UI, and
            more. Enjoy the Kite 
            experience seamlessly on your Android and iOS devices."
        trydemo="Try demo"
        learnMore="Learn more"
        googlePlay="media/images/googlePlayBadge.svg"
        appStore="media/images/appStoreBadge.svg"
      />
      <RightSection
        imageURL="media/images/console.png"
        productName="Console"
        productDesription="The central dashboard for your CaptialWise account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="Learn more"
      />
      <LeftSection
        imageURL="media/images/coin.png"
        productName="Coin"
        productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.."
        learnMore="learn more"
        trydemo="Try demo"
        googlePlay="media/images/googlePlayBadge.svg"
        appStore="media/images/appStoreBadge.svg"
      />
      <RightSection
        imageURL="media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs.
         If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="Learn more"
      />

      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Varsity"
        productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        learnMore="Learn more"
        trydemo="Try demo"
        googlePlay="media/images/googlePlayBadge.svg"
        appStore="media/images/appStoreBadge.svg"
      />
      <p className="text-center mb-4 fs-5">Want to know more about our technology stack? Check out the <a href="" style={{ textDecoration: "none" }}>CaptialWise.tech</a> blog.</p>
      <Univers />
    </>
  );
}

export default ProductPage;
