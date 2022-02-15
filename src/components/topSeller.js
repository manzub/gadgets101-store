import React from 'react';
import {Link} from 'react-router-dom'


const TopSeller = () => {
    return(<div className="widget block block-static-block">
        <div className="banner offset-none">
            <img src="/banners/banner-10.png" alt="banner" />
            <div className="banner-content center text-center">
                <div className="inset-1 top-seller">
                    {/* <h5 className="color-white hidden-mobile">Smart Tech Gadgets That Will astound you!</h5> */}
                    <h1 className="color-white text-bold">GADGETS-101</h1>
                    <Link to="/shop" className="action primary" href="true">Shop Now</Link>
                </div>
            </div>
        </div>
    </div>)
}

export default TopSeller;