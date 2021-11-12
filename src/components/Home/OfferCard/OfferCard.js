import React from 'react';
import { Link } from 'react-router-dom';

const OfferCard = () => {
    return (
        <div className="col-md-4 p-5 m-5  bg-white" style={{ borderRadius: '10px' }}>

            <h3>Repair your bat or sell</h3>
            <div class="price d-flex pt-2 pb-2" style={{ color: "#FF7C5B !important" }}>
                <h4>start from $15</h4> &nbsp; &nbsp;<del>$30</del>
            </div>
            <p className="section-description">Handle / Shoulder Repair:- ₹500/-Shoulder cracks repaired, twine is applied on the handle if required and shoulder is bound. Toe Repair:- ₹500/-All toe cracks repaired, toe sanded and buffed and new sleeve applied if required.						</p>
            <Link to=" " class="btn theme-btn">click </Link>
        </div>

    );
};

export default OfferCard;