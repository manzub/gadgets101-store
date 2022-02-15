import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header';
import Navbar from '../components/navbar';
import PageWelcome from '../components/pageWelcome';
import TopSeller from '../components/topSeller';
import 'bootstrap/dist/css/bootstrap.css'
import '../theme/static.css'
import '../theme/theme.css'
import WidgetNav from '../components/widgetNav';
import Footer from '../components/footer';


const Home = () =>{
    return(<div className="page-wrapper">
        <header className="page-header">
            <PageWelcome/>
            <Header/>
            <Navbar/>
        </header>
        <div className="page-top">
            <TopSeller/>
            <WidgetNav/>
            <div className="top-container">
                <div className="widget block block-static-block">
                    <div className="block-title">
                        <strong>Shop By Occassions</strong>    
                    </div>
                    <div className="ordered inset-3 bg-secondary offset-bottom">
                        <div className="row justify-content-center text-center">
                            <div className="col-xs-6 col-m-4">
                                <Link to="/shop" className="banner hovered" href="true">
                                    <img src="/banners/banner-7.jpg" alt="cover" />
                                    <div className="banner-content bottom">
                                        <h3>Portable Audio</h3>
                                        <span className="action default">shop now</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-xs-6 col-m-4">
                                <Link to="/shop" className="banner hovered" href="true">
                                    <img src="/banners/banner-8.jpg" alt="cover" />
                                    <div className="banner-content bottom">
                                        <h3>Cellphones</h3>
                                        <span className="action default">shop now</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-xs-6 col-m-4">
                                <Link to="/shop" className="banner hovered" href="true">
                                    <img src="/banners/banner-9.jpg" alt="cover" />
                                    <div className="banner-content bottom">
                                        <h3>Headphones</h3>
                                        <span className="action default">shop now</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>)
}
export default Home;