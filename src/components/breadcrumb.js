import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = (props) => {
    const {thumb} = props;
    return(<div className="breadcrumbs">
        <ul className="items">
            <li className="item">
                <Link to="/">Home</Link>
            </li>
            <li className="item">
            {thumb}
            </li>
        </ul>
    </div>)
}
export default Breadcrumb;