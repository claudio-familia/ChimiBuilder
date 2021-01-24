import React from 'react';

import classes from './Toolbar.css';

import Logo from '../../Logo/Logo';
import NavigationList from '../NavigationList/NavigationList';
import DrawerToggle from './DrawerToggle/DrawerToggle';

const toolbar = ( props ) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.toggle} />
        <Logo effect desktop />
        <nav className={classes.DesktopOnly}>
            <NavigationList />
        </nav>
    </header>
);

export default toolbar;