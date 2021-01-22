import React from 'react';
import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.css'

const buildControls = ( props ) => {
    const controls = [
        {label: 'Salad', type: 'salad'},
        {label: 'Bacon', type: 'bacon'},
        {label: 'Cheese', type: 'cheese'},
        {label: 'Meat', type: 'meat'},
    ]
    return (
        <div className={classes.BuildControls}>
            <p>Current price: <b>$ {props.price.toFixed(2)}</b></p>
            { controls.map(item => 
                (
                    <BuildControl 
                        key={item.label} 
                        label={item.label} 
                        type={item.type}
                        disabled={props.disabled[item.type]}
                        add={() => props.ingredientHandler(item.type, true)}
                        remove={() => props.ingredientHandler(item.type, false)} />
                ))
            }
            <button disabled={!props.purchasable} className={classes.OrderButton}>ORDER NOW</button>
        </div>
    );
}

export default buildControls;