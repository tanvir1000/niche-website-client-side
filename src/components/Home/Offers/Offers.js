import React from 'react';
import OfferCard from '../OfferCard/OfferCard';
import './Offers.css';
import bg from '../../../images/cricket-bat-repairs-blog.png';

const Offers = () => {
    return (
        <section className="mt-5 mb-5">

            <div class="sec-title text-center pt-5 ">
                <p className="section-title">OFFERS & DISCOUNTS</p>
                <h2>Your Greatest Opputunity</h2>
            </div>
            <div class="offers mt-5" style={{ backgroundImage: `url(${bg})` }}>
                <div className="container "  >

                    <div class="row  g-4 offer-part d-flex align-items-center ">
                        <OfferCard></OfferCard>

                    </div>
                </div>
            </div>
        </section>



    );
};

export default Offers;