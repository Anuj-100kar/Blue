import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className=' flex grid grid-cols-5 justify-between items-center'>
        <div>
            <p>Resources</p>
            <ul>
                <li>Trading View</li>
                <li>NSE Holidays</li>
                <li>e-Voting CDSL</li>
                <li>e-Voting NSDL</li>
                <li>Market Timings</li>
            </ul>
        </div>
         <div>
            <p>Company</p>
            <ul>
                <li>Careers</li>
                <li>Contact Us</li>
                <li>About US</li>
                <li>Community</li>
                <li>Blogs</li>
            </ul>
        </div>
        <div>
            <p>Offerings</p>
            <ul>
                <li>Compare Broker </li>
                <li>Fin Calculators</li>
                <li>IPO</li>
                <li>All Brokers</li>
                <li>Products</li>
            </ul>
        </div>
        <div>
            <p>Links</p>
            <ul>
                <li>Shark Investor</li>
                <li>Mutual Funds</li>
                <li>Sitemap</li>
                <li>Indian Indices</li>
                <li>Bug Bounty Program</li>
            </ul>
        </div>
        <div>
            <p>Policy</p>
            <ul>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Refund Policy</li>
                <li>Disclaimer</li>
                <li>Trust & Security</li>
            </ul>
        </div>
      </div>

      <div>
        {/* left */ }
        <div>
            <div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div>
                <img src={} alt="" />
                <p>BLUESTOCK</p>
                <div>
                    <div>
                        <p>Bluestock Fintech </p>
                        <p>Pune, Maharashtra</p>
                    </div>
                    <div>
                        <p>MSME Registration No: </p>
                        <p>UDYAM-MH-01-v0138001 </p>
                    </div>
                    <p>{}</p>
                </div>
            </div>
        </div>
        {/**right */}
        <div className='flex flex-col'>
                <div>
                    Investment in securities markets are subject to market risks, read all the related documents carefully before investing as prescribed by SEBI. Issued in the interest of the investors.
                </div>
                <div>
                    The users can write to hello@bluestock.in for any app, website related queries. Also you can send IT / Tech related feedback to cto@bluestock.in
                </div>
                <div>
                    Disclaimer: We are not a SEBI registered research analyst company. We do not provide any kind of stock recommendations, buy/sell stock tips, or investment and trading advice. All the stock scripts shown in the Bluestock app, website, all social media handles are for educational purposes only.
Before making any investment in the financial market, it is advisable to consult with your financial advisor. Remember that stock markets are subject to market risks.
                </div>
        </div>
      </div>
      <hr />
      <div className='flex justify-between items-center'>
        <p>Bluestock Fintech All Rights Reserved.</p>
        <p>Made with ❤️ in Pune, Maharashtra</p>
      </div>
    </div>
  );
}

export default Footer;
