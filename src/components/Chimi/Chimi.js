import React from 'react';

import ChimiIngredients from './Ingredient/Ingredient';

import classes from './Chimi.css';

const chimi = ( props ) => {
    let ingredientsArray = Object.keys(props.ingredients).map(ingKey => {
        return [...Array(props.ingredients[ingKey])].map((_, index) => {
            return (<ChimiIngredients key={ingKey + index} type={ingKey} />)
        })
    }).reduce((arr, el) => arr.concat(el), []);

    if(ingredientsArray.length === 0) ingredientsArray = <p>Start adding ingredients</p>

    return (
        <div className={classes.Chimi}>
            <ChimiIngredients type="bread-top" />
            {ingredientsArray}
            <ChimiIngredients type="bread-bottom" />
        </div>
    )
}

export default chimi;