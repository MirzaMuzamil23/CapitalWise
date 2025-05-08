import React from 'react';

function Hero() {
    return ( 
        <div className='container p-4 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Image'className='mb-4'/>
                <h1 className='mt-5'>Invest in everything</h1>
                <p className='fs-5 pb-4'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className=' p-2 btn btn-primary mb-5 fs-5'  style={{width:"20%", margin: "0 auto" }}>Sign up for free</button> 
            </div>
        </div>
    );
}

export default Hero;