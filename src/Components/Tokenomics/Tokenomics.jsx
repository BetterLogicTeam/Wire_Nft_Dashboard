import React from 'react';
import './Tokenomics.css'

function Tokenomics() {
  return (
    <div>
        <section class="auction-section padding-bottom">
         <div class="container">
            <div class="section-header style-4">
               <div class="header-shape"><span></span></div>
               <h3> TOKENOMICS</h3>
            </div>
                <div class="row">
               <div class="col-md-6 upp">
                  <div className='supp'>
                     <h2 class="text-center mb-30 aos-init aos-animate" data-aos="fade-up" data-aos-delay="0.3s">Total Supply:- 210,000,000</h2>
                     <img src="./Assets/token.png" class="center-block" alt=""style={{width: "100%"}}/>
                  </div>
               </div>
               <div class="col-lg-6">
                  <h2 class="text-center mb-30 aos-init aos-animate" data-aos="fade-up" data-aos-delay="0.3s">Coin Distribution</h2>
                  <div class="row">
                     <div class="col-sm-4">
                        <div className='tkn'><img src="token1.png" class="center-block" alt=""/></div>
                     </div>
                     <div class="col-sm-8">
                        <div class="token-info">
                           <div class="info-wrapper one">
                              <div class="token-icon">10%</div>
                              <div class="token-descr">Education &amp; Development</div>
                           </div>
                        </div>
                        <div class="token-info">
                           <div class="info-wrapper two">
                              <div class="token-icon">25%</div>
                              <div class="token-descr">Affiliate </div>
                           </div>
                        </div>
                        <div class="token-info">
                           <div class="info-wrapper four">
                              <div class="token-icon">10%</div>
                              <div class="token-descr">Managments</div>
                           </div>
                        </div>
                        <div class="token-info">
                           <div class="info-wrapper three">
                              <div class="token-icon">03%</div>
                              <div class="token-descr">Social Course</div>
                           </div>
                        </div>
                        <div class="token-info">
                           <div class="info-wrapper six">
                              <div class="token-icon">12%</div>
                              <div class="token-descr">WQ Advisory Board</div>
                           </div>
                        </div>
                        <div class="token-info">
                           <div class="info-wrapper seven">
                              <div class="token-icon">5%</div>
                              <div class="token-descr">Media Permotion</div>
                           </div>
                        </div>
                        <div class="token-info">
                           <div class="info-wrapper eight">
                              <div class="token-icon">35%</div>
                              <div class="token-descr"> Public Sale</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  )
}

export default Tokenomics