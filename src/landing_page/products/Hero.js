import React from 'react';



function Hero() {
    return ( 
        <div className='container border-bottom mb-5 mt-5'>
            <div className='row mb-5 text-center product-hero'>
                <h1 className='mt-5'>CapitalWise Products</h1>
                <h6 className='mt-3 text-muted'>Sleek, modern, and intuitive trading platforms</h6>
                <p className='mb-5 mt-3'>Check out our <a href='#'> investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
            </div>
        </div>
    );
}

export default Hero;