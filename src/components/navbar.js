import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'
import $ from 'jquery';

const Navbar = () => {
    let data = JSON.parse(sessionStorage.getItem('filter1'))
    let filter1 = data!=null ? data : [
        {id:'1',name:'Smart Phones'},
        {id: "2", name: "Smart Watches"},
        {id: "3", name: "Laptops & Desktops"},
        {id: "4", name: "Accessories"},
        {id: "5", name: "Video Games"}
    ];  
    useEffect(()=>{
        var distance = $('.nav-sections').offset().top;
        var $window = $(window);
        $window.scroll(function(){
            if ($window.scrollTop()>=distance) {
                $('.nav-sections').addClass('fixed')
            }else{
                $('.nav-sections').removeClass('fixed')
            }
        })
    })
    return(<div className="nav-sections">
        <nav className="navigation tm-navigation" id="tm-navigation" role="navigation">
            <ul className="ui-menu">
                {filter1.map((el)=><li key={el.id} className="ui-menu-item">
                    <Link to="/shop" className="ui-menu-link">
                        <span>{el.name}</span>
                    </Link>
                </li>)}
            </ul>
        </nav>
    </div>)
}

export default Navbar;