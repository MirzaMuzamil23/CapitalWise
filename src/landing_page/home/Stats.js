import React from 'react';


function Stats() {
    return ( 
        <div className='container mt-5'>
            <div className='row p-5 '>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-4'>Trust with confidence</h1>
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted'>That's why 1.5+ crore customers trust Captialwise with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in Pakistan.</p>
                    <h2 className='fs-4'>No spam or gimmicks</h2>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h2 className='fs-4'>The Capitalwise universe</h2>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                <div className='col-6 mt-5 '>
                    <img style={{width:"95%"}}src='media/images/ecosystem.png'/>
                    <div>
                        <a href='' className='p-5' style={{textDecoration:"none"}}>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href=''  style={{textDecoration:"none"}}>Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;