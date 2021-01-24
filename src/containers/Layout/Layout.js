import React, { Component } from 'react';

import Aux from '../../hoc/Auxr';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import classes from './Layout.css';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    toggleSideDrawerHandler = () => {
        this.setState(prevState => {
            return { showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render() {
        return (
            <Aux>
                <SideDrawer open={this.state.showSideDrawer} close={() => this.setState({showSideDrawer: false})} />
                <Toolbar toggle={this.toggleSideDrawerHandler} />
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;