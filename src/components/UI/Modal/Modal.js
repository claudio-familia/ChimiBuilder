import React, { Component } from 'react';
import Aux from '../../../hoc/Auxr';
import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.css'

class Modal extends Component {
    
    shouldComponentUpdate(prevProps, prevState) {
        return prevProps.show !== this.props.show;
    }

    render() {
        const introStyle = {
            transform: this.props.show ? 'translateY(0)' : 'translateY(100vh)',
            opacity: this.props.show ? '1' : '0'
        }
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.closed} />
                <div
                    className={classes.Modal}
                    style={introStyle}>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;