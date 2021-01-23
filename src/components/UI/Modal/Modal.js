import React from 'react';
import Aux from '../../../hoc/Auxr';
import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.css'

const modal = ( props ) => {
    const introStyle = {
        transform: props.show ? 'translateY(0)' : 'translateY(100vh)',
        opacity: props.show ? '1' : '0'
    }
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.closed} />
            <div 
                className={classes.Modal} 
                style={introStyle}>
                {props.children}
            </div>
        </Aux>
    );
}

export default modal;