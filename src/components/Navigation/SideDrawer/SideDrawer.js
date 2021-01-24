import React from 'react';

import classes from './SideDrawer.css';

import Logo from '../../Logo/Logo';
import Aux from '../../../hoc/Auxr';
import BackDrop from '../../UI/Backdrop/Backdrop';
import NavigationItem from '../NavigationList/NavigationItem/NavigationItem';

const sideDrawer = (props) => {
    let sideDrawerClasses = [classes.SideDrawer, classes.Close];

    if(props.open) sideDrawerClasses = [classes.SideDrawer, classes.Open];

    return (
        <Aux>
            <BackDrop show={props.open} clicked={props.close} />
            <div className={sideDrawerClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo white />
                </div>
                <nav>
                    <NavigationItem active link="home">Home</NavigationItem>
                    <NavigationItem link="home">Home</NavigationItem>
                    <NavigationItem link="home">Home</NavigationItem>
                    <NavigationItem link="home">Home</NavigationItem>
                    <NavigationItem link="home">Home</NavigationItem>
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;