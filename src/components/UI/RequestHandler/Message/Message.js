import React from 'react';
import classes from './Message.css'

const message = (props) => (
    <div>
        <h3 className={classes[props.type]}>{props.title}</h3>
        <hr />
        <p className={classes[props.type]}>
            {props.message}
        </p>
        <div className={classes.ButtonArea}>
            <button className={classes.Button} onClick={props.clicked}>Aceptar</button>
        </div>
    </div>
);

export default message;