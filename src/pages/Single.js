/* eslint-disable eqeqeq */
import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/breadcrumb';
import Footer from '../components/footer';
import Header from '../components/header';
import Navbar from '../components/navbar';
import PageWelcome from '../components/pageWelcome';
// styles
import 'bootstrap/dist/css/bootstrap.css'
import '../theme/static.css'
import '../theme/theme.css'
import { api_key, cartState } from '../states';
import { useRecoilState } from 'recoil';
import Loader from '../components/loader';
import Snackbar from '../components/snackbar';

const phone = '2347064770355';
const url = window.location.protocol+"//"+window.location.host+'/0e454ae__script_045_backend.min.php';

const Single = () => {
    let toRead = sessionStorage.getItem('toRead')
    const [snackbar,showSnackbar] = React.useState(false);
    const [loader,setLoader] = React.useState(false);
    // eslint-disable-next-line no-unused-vars
    const [cart,setCart] = useRecoilState(cartState);
    const [item,setItem] = React.useState('');
    React.useEffect(()=>{
        $.ajax({
            url:url,
            type:'POST',
            data:{api_key:api_key,req_option:'singleProduct',pi:toRead},
            success:function(data) {
                setItem(data.data[0])
            },
        })
    },[toRead])
    const waRedirect = () => {
        var message = `Hello, I saw a product on your site and i want to place an order: - \t Name: ${item.title}\r Price: ${item.price}\r Quantity: ${item.qty} \t`
        var wa_link = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURI(message)}`
        window.open(wa_link,'_blank')
    }
    const addToCart = () => {
        const toPush = {
            id:item.id,
            img:item.thumb,
            title:item.title,
            price:item.price,
            qty:1
        }
        setLoader(true)
        showSnackbar(true)
        cart.cart_total+=1
        if (cart.cart_item[0]) {
            let itemEx = false;
            for (let i=0;i<cart.cart_item.length;i++) {
                if(cart.cart_item[i].id==item.id){
                    cart.cart_item[i].qty+=1;
                    itemEx=true
                    break;
                }
            }
            if(!itemEx){
                cart.cart_item.push(toPush)
            }
        }else{
            cart.cart_item.push(toPush)
        }
        setTimeout(() => {
            setLoader(false)
        }, 1000);
        setTimeout(() => {
            showSnackbar(false)
        }, 2000);
    }
    return(<div className="page-wrapper">
        <header className="page-header">
            <PageWelcome/>
            <Header/>
            <Navbar/>
        </header>
        <div className="page-top">
            <Breadcrumb thumb="Product Name" />
        </div>
        <main id="maincontent" className="page-main">
            <div className="columns">
                <div className="column main">
                    <div className="product-wrap">
                        <div className="product media">
                            <div className="gallery-placeholder">
                                <div className="fotorama-item fotorama" style={{position:'relative'}}>
                                    <div className="fotorama__wrap">
                                        <div className="fotorama__stage" style={{width:345,height:432}}>
                                            <div className="fotorama__stage__shaft fotorama__wrap--slide">
                                                <div className="fotorama__stage__frame fotoroma__active">
                                                    <img src={item.thumb} className="fotorama__img" alt="cover" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-info-main">
                            <div className="page-title-wrapper product">
                                <h1 className="page-title">
                                    <span className="base">{item.title}</span>
                                </h1>
                            </div>
                            <div className="product attribute overview">
                                <div className="Value">{item.descr} </div>
                            </div>
                            <div className="product-info-price">
                                <div className="price-box price-final_price">
                                    <span className="normal-price">
                                        <span className="price-container price-final_price weee">
                                            <span className="price-wrapper">
                                                <span className="price">N{Math.round(item.price/1000)*1000}</span>
                                            </span>
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="product-brand">
                                <label className="label">Brand:</label>
                                <Link to="/shop" className="product-brand-name">{item.filter1_0}</Link>
                            </div>
                            <div className="product-add-form">
                                <div className="product-options-bottom">
                                    <div className="box-tocart">
                                        <div className="fieldset">
                                            <div className="actions" style={{display:'flex'}}>
                                                <button onClick={addToCart} title="Add to Cart" className="action primary tocart">
                                                    <ion-icon name="add-outline"></ion-icon>
                                                </button>
                                                <button onClick={()=>{window.open(`tell://${phone}`,'_blank')}} title="Call To Order" className="action primary tocart">
                                                    <ion-icon name="call-outline"></ion-icon>
                                                </button>
                                                <button onClick={waRedirect} title="Order VIA WhatsApp" className="action primary tocart">
                                                    <ion-icon name="chatbox-ellipses-outline"></ion-icon>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
        { loader ? <Loader/>: null}
        {snackbar ? <Snackbar/> : null}
    </div>)
}
export default Single;