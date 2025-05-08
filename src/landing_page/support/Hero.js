import React from 'react';


function Hero() {
    return ( 
        <section classname="container-fluid" id="supportHero">
            <div className='p-5' id='supportWrapper'>
                <h4>Support portal</h4>
                <a href=''>Track Ticket</a>
            </div>
            <div className='row m-3 '>
                <div className='col-6 supportancher'>
                    <h5 className='fs-5 mb-4'>Search for an answer or browse help topics to create a tickets</h5>
                    <input  placeholder='Eg : do i activate F&O , why is my order getting rejected'/>
                </div>
                <div className='col-6  mb-5 pb-5 '>
                    <h3 className='fs-4 mx-5'>Featured</h3>
                    <ul className='mx-5' style={{lineHeight: "2.5"}}> 
                        <li><a href=''>Latest Intraday leverages and Square-off timings</a></li>
                        <li><a href=''>Rights Entitlements listing in April 2025</a></li>
                    </ul>
                </div>
            </div>
        </section>
     );
}


export default Hero;