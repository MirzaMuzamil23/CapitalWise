import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-4">
      <div className="row mt-5">
        <div className="col mt-5">
          <h1 className="mt-5">{productName}</h1>
          <p className="fs-5  mt-4">{productDesription}</p>
            <div>
                <a href="" style={{ textDecoration: "none" }}>
                {learnMore} <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
        </div>
        <div className="col-7 mb-5 ">
            <img className="mb-3 mx-5" src={imageURL} style={{width:"98%" }}></img>
          </div>
        </div>
    </div>
    
  );
}

export default RightSection;
