import React from 'react';

function Educations() {
    return ( 
        <div className='container '>
            <div className='row mt-5 mb-5'>
                <div className='col-6'>
                    <img src='media/images/education.svg' className='mt-5 mb-5 '/>
                </div>
                <div className='col-6 mt-5 mb-5'>
                    <h2 >Free & open market education</h2>
                    <p className='mt-4 fs-5.5'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading. </p>
                    <a href=''  style={{textDecoration:"none"}}>Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    
                    <p className='mt-4 fs-5.5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href=''  style={{textDecoration:"none"}}>TradingQ&A  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Educations;