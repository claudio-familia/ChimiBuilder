import React from 'react';

import Menu from '../../../../assets/img/menu.png';

import classes from './DrawerToggle.css'

const drawerToggle = ( props ) => (
    <div className={[classes.DrawerToggle, classes.MobileOnly].join(' ')} title="Abrir menu" onClick={props.clicked}>
        <img src={Menu} className={classes.Img} alt="Menu" />
    </div>
);

export default drawerToggle;