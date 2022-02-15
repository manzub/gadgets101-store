import React from 'react';
import {Link} from 'react-router-dom';

const ListBox = (props) => {
    const {item} = props;
    const handleClick = () => {
        sessionStorage.setItem('toRead',item.id)
    }
    return(<ul role="listbox">
        <li onClick={handleClick} className="search-item">
            <Link to="/single" className="selected" href="true">
                <span className="search-thumb">
                    <img src={item ? item.img : null} alt="product name"/>
                </span>
                <div>
                    <span className="qs-option-name"> {item ? item.title.substring(0,15)+'...' : null} </span>
                    <div className="price-box">
                        <span className="price">N{item ? Math.round(item.price/1000)*1000 : null}</span>
                    </div>
                    <span>Qauntity: {item ? item.qty : null }</span>
                </div>
            </Link>
        </li>
    </ul>)
}
export default ListBox;