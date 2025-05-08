import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  trydemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mb-5 ">
      <div className="row mb-5">
        <div className="col-7 mb-2 mx-5">
          <img className="mb-5"src={imageURL} ></img>
        </div>
        <div className="col mt-5">
          <h1>{productName}</h1>
          <p className="fs-5 mt-4">{productDesription}</p>
          <div>
            <a href="" className="" style={{ textDecoration: "none" }}>
              {trydemo}<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="" style={{ textDecoration: "none", marginLeft: "60px"}}>
              {learnMore}<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
          <div className="mt-4 mb-5 ">
          <img src={googlePlay}></img>
          <img src={appStore} style={{ marginLeft: "50px"}}></img>
          </div>
        </div>
      </div>
      
    </div>
    
  );
}

export default LeftSection;
