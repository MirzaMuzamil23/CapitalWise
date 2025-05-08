import React from 'react';


function Awards() {
    return ( 
        <div className='container mt-5 '>
            <div className='row '>
                <div className='col-6'>
                    <img style= {{width: "75%"}}src='media/images/largestBroker.svg'/>
                </div>
                <div className='col-6'>
                    <h1 className='fs-7'>Largest broker in Pakistan</h1>
                    <p className='fs-6.5 mb-4'>We are the largest broker in Pakistan with over 1 million clients and 100 billion PKR in assets under management.</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li className='mb-2'>Stocks & IPOs</li>
                                <li className='mb-2'>Direct Mutual Funds</li>
                                <li className='mb-2'>ETFs</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li className='mb-2'>Derivatives</li>
                                <li className='mb-2'>Bonds</li>
                                <li className='mb-2'>Forex</li>
                            </ul>
                        </div>
                        <img src='media/images/pressLogos.png'className='mt-2 mb-6'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;