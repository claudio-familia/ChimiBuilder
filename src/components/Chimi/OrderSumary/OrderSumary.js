import React from 'react';

import Button from '../../UI/Button/Button';
import Aux from '../../../hoc/Auxr';

const orderSumary = ( props ) => {
    const ingredientSummary = Object.keys(props.ingredients).map(ingKey => {
        return (
        <li key={ingKey}>
            <b>{ingKey}:</b> {props.ingredients[ingKey]}
        </li>);
    })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious chimi with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total price: <b>$ {props.price.toFixed(2)}</b></p>
            <p>Continue to checkout</p>
            <Button btnType="Danger" clicked={props.cancel}>Cancel</Button>
            <Button btnType="Success" clicked={props.continue}>Continue</Button>
        </Aux>
    );
}

export default orderSumary;