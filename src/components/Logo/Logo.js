import React from 'react';

import chimiLogo from '../../assets/img/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => {
    return (
        <div className={[classes.Logo,
                         props.desktop ? classes.DesktopOnly : null,
                         props.white ? classes.White : null, 
                         props.effect ? classes.Img : null].join(' ')} title="MyChimi">
            <img src={chimiLogo} className={classes.Image} alt="MyChimi" />
        </div>
    );
}

export default logo;