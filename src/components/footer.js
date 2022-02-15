import React from 'react';

const Footer = () => {
    return(<footer className="page-footer">
        <div className="footer content">
            <div className="footer-panel">
                <div className="container">
                    <small className="copyright">
                        <span>© 2020 Gadgets101.ng . All Rights Reserved.</span>
                    </small>
                    <ul className="social-links">
                        <li><a href="#social" target="_blank"><ion-icon name="logo-facebook"></ion-icon></a></li>
                        <li><a href="#social" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>)
}

export default Footer;