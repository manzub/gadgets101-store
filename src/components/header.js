/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import {Link} from 'react-router-dom'
import $ from 'jquery';
import { api_key, cartState } from '../states';
import ListBox from './listBox';

const phone = '2347064770355';
const url = window.location.protocol+"//"+window.location.host+'/0e454ae__script_045_backend.min.php';


const Header = () => {
    const [search_result,setSearchR] = React.useState('');
    const [cart,setCart] = useRecoilState(cartState);
    let allCart = cart.cart_item[0]!=null ? cart : null;

    useEffect(()=>{
        var openNav = $('#open-nav');
        var closeNav = $('#close-nav')
        var openCart = $('#open-cart')
        var closeCart = $('#close-cart')
        openNav.click(function(){
            closeNav.removeClass('hide')
            openNav.addClass('hide')
            document.getElementById('tm-navigation').style.transform = 'none'
        })
        closeNav.click(function(){
            openNav.removeClass('hide')
            closeNav.addClass('hide')
            document.getElementById('tm-navigation').style.transform = 'translateX(-110%)'
        })
        openCart.click(function(){
            closeCart.removeClass('hide')
            $('#minicart-wrapper').addClass('active')
            openCart.addClass('hide')
        })
        closeCart.click(function(){
            openCart.removeClass('hide')
            $('#minicart-wrapper').removeClass('active')
            closeCart.addClass('hide')
        })
    })
    const waRedirect = () => {
        let item_name_str = '';
        cart.cart_item.forEach(el=>{
            item_name_str+=`\tName: ${el.title}\rPrice: ${el.price}\r Quantity: ${el.qty}\t`
        })
        var message = `Hello, I saw a product on your site and i want to place an order: - ${item_name_str}`
        var wa_link = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURI(message)}`
        window.open(wa_link,'_blank')
    }
    const searchItem = event => {
        let search_key = event.target.value;
        if (search_key.length>3) {
            $.ajax({
                url:url,
                type:'POST',
                data:{api_key:api_key,req_option:'searchItem',si:search_key},
                success:function(data) {
                    $('.search-autocomplete').removeClass('hide');
                    let arr0 = [];
                    data.data.forEach(el=>{
                        arr0.push({
                            id:el.id,
                            title:el.title,
                            img:el.thumb,
                            price:el.price,
                            qty:''
                        })
                    })
                    setSearchR(arr0);
                }
            })
        }
    }
    return(<div className="header content">
        <div className="panel-left">
            <div className="block-search">
                <form className="mini-search">
                    <div className="field search">
                        <div>
                            <div className="control">
                                <ion-icon name="search-outline"></ion-icon>
                                <input onChange={searchItem} placeholder="Search Product Name..." className="input-text"></input>
                            </div>
                        </div>
                    </div>
                    <div className="search-autocomplete hide">
                        {search_result ? search_result.map((el,index)=><ListBox key={index} item={el} />) : null}
                    </div>
                </form>
            </div>
        </div>
        <span className="action nav-toggle">
            <ion-icon id='open-nav' name="menu-outline"></ion-icon>
            <ion-icon id='close-nav' class="hide" name="close-outline"></ion-icon>
        </span>
        <Link className="logo" to="/home">
            <img src="/logo_main.png" alt="logo"/>
        </Link>
        <div className="panel-right">
            {/* active and inactive */}
            <div className="minicart-wrapper" id='minicart-wrapper'>
                <Link to="#" className="action showcart">
                    <ion-icon id='open-cart' name="cart-outline"></ion-icon>
                    <ion-icon id='close-cart' class="hide" name="close-outline"></ion-icon>
                    <span className="counter qty">
                        <span className="counter-number">{ cart.cart_total }</span>
                    </span>
                </Link>
                <div className="ui-dialog" style={{display:'block'}}>
                    <div className="block block-minicart">
                        <div id='minicart-content-wrapper'>
                            <div className="block-title">
                                <strong>
                                    <span className="text">My Cart</span>
                                    <span className="qty">{ cart.cart_total }</span>
                                </strong>
                            </div>
                            <div className="block-content cartlist">
                                {allCart ? allCart.cart_item.map((el,index)=><ListBox key={index} item={el} /> ): <strong className="subtitle empty">You have no items in your shopping cart.</strong>}
                                <div className="actions">
                                    {allCart ? <><button onClick={()=>{window.open(`tell://${phone}`,'_blank')}} className="action primary">
                                        <ion-icon name="call-outline"></ion-icon>
                                    </button>
                                    <button onClick={waRedirect} title="Order VIA WhatsApp" className="action primary">
                                        <ion-icon name="chatbox-ellipses-outline"></ion-icon>
                                    </button></> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default Header;