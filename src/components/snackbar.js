import React from 'react';
import Styles from '../theme/snackbar.module.css';

const Snackbar = () => {
    return(
        <div className={[Styles.snackbar,Styles.show].join(" ")}>Product Added To Cart</div>
    )
}
export default Snackbar;