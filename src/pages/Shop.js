/* eslint-disable eqeqeq */
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil'
import $ from 'jquery';
// eslint-disable-next-line no-unused-vars
import Breadcrumb from '../components/breadcrumb';
import Footer from '../components/footer';
import Header from '../components/header';
import Navbar from '../components/navbar';
import PageWelcome from '../components/pageWelcome';
import Product from '../components/product';
// styles
import 'bootstrap/dist/css/bootstrap.css'
import '../theme/static.css'
import '../theme/theme.css'
import Loader from '../components/loader';
import { api_key,cartState } from '../states';
import Snackbar from '../components/snackbar';
const url = window.location.protocol+"//"+window.location.host+'/0e454ae__script_045_backend.min.php';


const Shop = () => {
    const [snackbar,showSnackbar] = React.useState(false);
    // eslint-disable-next-line no-unused-vars
    const [cart,setCart] = useRecoilState(cartState);
    const [empty,setEmpty] = React.useState(false);
    const [loader,setLoader] = React.useState(false);
    const [selected,setSelected] = React.useState('');
    let filter1= JSON.parse(sessionStorage.getItem('filter1'));    
    var filter1_0 = JSON.parse(sessionStorage.getItem('filter1_0'));
    const [allProducts,setProd] = React.useState([]);
    let options = null;
    let select1 = filter1.map((fl)=><option key={fl.id} value={fl.id}>{fl.name}</option>)
    let type = null;
    useEffect(()=>{
        setProd(JSON.parse(sessionStorage.getItem('allProducts')))
    },[])
    const handleSelectChange = event => {
        setEmpty(false)
        setSelected(event.target.value);
        setLoader(true);
        $.ajax({
            url:url,
            type:'POST',
            data:{api_key:api_key,req_option:'allProductsFiltered1',fl:event.target.value},
            success:function(data){
                setTimeout(() => {
                    setLoader(false)
                }, 1000);
                if (data.data.length==0) {
                    setEmpty(true)
                }
                setProd(data.data)
            }
        })
        // allProducts=null
    };
    const handleFilter1_0 = event => {
        setEmpty(false)
        setLoader(true);
        $.ajax({
            url:url,
            type:'POST',
            data:{api_key:api_key,req_option:'allProductsFiltered1_0',fl:event.target.value},
            success:function(data){
                setTimeout(() => {
                    setLoader(false)
                }, 1000);
                if (data.data.length==0) {
                    setEmpty(true)
                }
                setProd(data.data)
            }
        })
    }
    type=filter1_0[parseInt(selected)-1]
    if(type){
        options=type.map((el)=><option value={el.id}>{el.name}</option>)
    }
    const addToCart = (item) => {
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
            <Breadcrumb thumb='Shop'/>
            <div className="category-wrapper">
                <div className="container">
                    <div className="page-title-wrapper">
                        <h1 className="page-title">
                            <span className="base">Shop</span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
        <main id="maincontent" className="page-main">
            <div className="columns">
                <div className="column left"></div>
                <div className="column main" style={{flexBasis:'100%',maxWidth:'100%'}}>
                    <div className="toolbar toolbar-products">
                        <div className="toolbar-sorter sorter">
                            <label className="sorter-label">Sort By</label>
                            <select onChange={handleSelectChange} className="sorter-options mr-3">
                                <option>All</option>
                                {select1}
                            </select>
                            <select onChange={handleFilter1_0} className="sorter-options">
                                <option>All</option>
                                {options}
                            </select>
                        </div>
                    </div>
                    <div className="products wrapper grid products-grid">
                        <ul className="products list item product-items">
                            {empty ? <p className="empty-product">0 Products Found</p> : allProducts.map((el)=><Product item={el} addToCart={addToCart} key={el.id} />)}
                        </ul>
                    </div>
                </div>
            </div>
            <hr/>
        </main>
        <Footer/>
        { loader ? <Loader/> : null}
        {snackbar ? <Snackbar/> : null}
    </div>)
}

export default Shop;