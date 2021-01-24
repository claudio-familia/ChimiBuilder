import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationList.css';

const navigationList = ( props ) => (
    <ul className={classes.NavigationList}>
        <NavigationItem active link="home">Chimi builder</NavigationItem>
        <NavigationItem link="House">Checkout</NavigationItem>
    </ul>
);

export default navigationList;