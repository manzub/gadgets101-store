import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {item} = props;
    const handleClick = () => {
        sessionStorage.setItem('toRead',item.id)
    }
    return(<li onClick={handleClick} className="item product product-item">
        <div className="product-item-info">
            <div className="product-img">
                <Link to="/single" className="product photo product-item-photo">
                    <span style={{width:'345px'}} className="product-image-container">
                        <span style={{paddingBottom:'125.14124293785%'}} className="product-image-wrapper">
                            <img className="product-image-photo" src={item.thumb} alt={item.title} />
                        </span>
                    </span>
                </Link>
            </div>
            <div className="product details product-item-details">
                <strong className="product name product-item-name">
                    <Link to="/single" className="product-item-link">{item.title}</Link>
                </strong>
                <div className="price-box price-final_price">
                    <span className="normal-price">
                        <span className="price-container price-final_price">
                            <span className="price-wrapper">
                                <span className="price">N{Math.round(item.price/1000)*1000}</span>
                            </span>
                        </span>
                    </span>
                </div>
                <div className="product-item-inner">
                    <div className="product actions product-item-actions">
                        <div className="actions-secondary">
                            <a href="#order" onClick={()=>{props.addToCart(props.item)}} title="Add To Cart" className="action tocart">
                                <ion-icon name="add-outline"></ion-icon>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </li>)
}
export default Product;