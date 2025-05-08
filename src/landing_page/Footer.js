import React from 'react';


function Footer() {
    
    return ( 
    <footer className='bg-light '>
        <div className='container mt-5 border-top'>
            <div className='row mt-5 '>
                <div className='col'>
                    <img src='media/images/CaptialWise.png' style={{width:"80%"}}/>
                    <p className='mt-3 text-muted'> &copy; 2010 - 2025, CaptialWise Broking Ltd. All rights reserved.</p>
                    <div className='text-muted'>
                        <i class="fab fa-twitter mx-1 "></i>
                        <i class="fab fa-facebook mx-2 "></i>
                        <i class="fab fa-instagram mx-2 "></i>
                        <i class="fab fa-linkedin mx-2 "></i>
                    </div>
                    <hr/>
                    <div className='text-muted'>
                    <i class="fab fa-telegram mx-1"></i>
                    <i class="fab fa-whatsapp mx-2"></i>
                    </div>
                </div>
                <div className='col mx-5 company' >
                    <h5 className='mb-3'>Company</h5>
                    <a href="" >About us</a><br/>
                    <a href="" >Products </a> <br/>
                    <a href="" >Pricing </a><br/>
                    <a href="" >Referral programme </a><br/>
                    <a href="" >Careers </a><br/>
                    <a href="" >Capitalwise.tech </a><br/>
                    <a href="" >Open source </a><br/>
                    <a href="" >Press & media </a><br/>
                    <a href="" >Captialwise Cares (CSR) </a><br/>
                </div>

                <div className='col support'>
                    <h5 className='mb-3'>Support</h5>
                        <a href ="">Contact us</a><br/>
                        <a href ="">Support portal</a><br/>
                        <a href ="">Z-Connect blog</a><br/>
                        <a href ="">List of charges</a><br/>
                        <a href ="">Downloads & resources</a><br/>
                        <a href ="">Videos</a><br/>
                        <a href ="">Market overview</a><br/>
                        <a href ="">How to file a complaint?</a><br/>
                        <a href ="">Status of your complaints</a><br/>
                </div>
                <div className='col account'>
                    <h5 className='mb-3'>Account</h5>
                    <a href=''>Open an account</a><br/>
                    <a href=''>Fund transfer</a>
                </div>
            </div>
            <div className='mt-5 footer-font text-muted'>
                <p>For any complaints regarding brokerage services, please contact support@capitalwise.pk. For depository-related issues, reach out to cdc-support@capitalwise.pk. Kindly read the Risk Disclosure Document as prescribed by SECP and ensure you understand the risks before investing.</p>
                <p>Procedure to file a complaint with SECP: Visit the SECP complaint portal (https://www.secp.gov.pk) and register your complaint. Mandatory details include: Full Name, CNIC, Address, Contact Number, and Email ID.
                Benefits: Direct access to the regulator, faster resolution, transparent communication.</p>
                <p>Investor Grievance & Dispute Resolution Mechanism</p>
                <p>Investments in the stock market are subject to market risks. Please review all relevant documents carefully before making any investment decisions.</p>
                <p>Prevent unauthorized transactions. Always verify your trade confirmations and holdings. Updates from PSX and CDC are sent directly to your registered email and phone.
                KYC is mandatory. Once completed with a registered intermediary, you do not need to repeat the process with other market participants.</p>
                <p><b>Important Notice:</b> If you are subscribing to an IPO, there's no need to issue a physical cheque. Simply authorize your bank for payment via IBAN in your IPO application. In case of non-allotment, the funds remain in your account.</p>
                <p>Capitalwise does not provide stock tips or portfolio management services. If anyone claims otherwise or offers trading services on our behalf, please report them immediately via our support portal.</p>
            </div>
            
        </div>
    </footer>
     );
}

export default Footer;