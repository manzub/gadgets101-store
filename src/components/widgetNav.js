import React from 'react';
import { Link } from 'react-router-dom';

const WidgetNav = () => {
    return(<div className="widet block block-static-block">
        <div className="row no-gutter bordered">
            <div className="col-xs-6">
                <Link to="/shop" className="banner hovered">
                    <img src="/banners/banner-2.jpg" alt="cover" />
                    <div className="banner-content left">
                        <div className="hover-content">
                            <h1 className="color-white">
                                Smart<br/>Watches
                            </h1>
                            <h4 className="color-white">from &#8358;50K</h4>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-xs-6">
                <Link to="/shop" href="true" className="banner hovered">
                    <img src="/banners/banner-3.jpg" alt="cover" />
                    <div className="banner-content left">
                        <div className="hover-content">
                            <h1 className="color-white">
                                Phones &amp;<br/>Tablets
                            </h1>
                            <h4 className="color-white">from &#8358;40K</h4>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-xs-6">
                <Link to="/shop" className="banner hovered">
                    <img src="/banners/banner-4.jpg" alt="cover" />
                    <div className="banner-content left">
                        <div className="hover-content">
                            <h1 className="color-white">
                                Video<br/>Games
                            </h1>
                            <h4 className="color-white">from &#8358;10K</h4>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-xs-6">
                <Link to="/shop" className="banner hovered">
                    <img src="/banners/banner-5.jpg" alt="cover" />
                    <div className="banner-content left">
                        <div className="hover-content">
                            <h1 className="color-white">
                                Accessories
                            </h1>
                            <h4 className="color-white">from &#8358;20K</h4>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </div>)
}

export default WidgetNav;