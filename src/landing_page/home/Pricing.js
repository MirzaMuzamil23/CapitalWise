import React from 'react';

function Pricing() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-5 '>
                    <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in Pakistan. Flat fees and no hidden charges.</p>
                    <a href=''  style={{textDecoration:"none"}}>See pricing  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-7 text-center mb-5'>
                    <div className='row'>
                        <div className='col'>
                            <img src='media/images/pricingMF.svg' style={{width:"50%"}}/>
                            <p className='text-muted fs-6'>Free account opening</p>
                        </div>
                        <div className='col'>
                            <img src='media/images/pricingMF.svg' style={{width:"50%"}}/>
                            <p className='text-muted fs-6'> Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col'>
                            <img src='media/images/intradayTrades.svg' style={{width:"50%"}}/>
                            <p className='text-muted fs-6 '> Intraday and F&O</p>
                        </div>
                        
                    </div>         
                </div>
            </div>
        </div>
    );
}

export default Pricing;