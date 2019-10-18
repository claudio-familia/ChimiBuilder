import React from 'react';
import BurgerIngredient from './burgerIngredients/burgerIngredients';
import Styles from './burger.module.css';

const burger = props => {
    let IngredientsToArray = Object.keys(props.Ingredients).map(IgKeys => {
        return [...Array(props.Ingredients[IgKeys])].map((_,index) =>
            <BurgerIngredient key={IgKeys + index} ingredientType={IgKeys} />            
        ); 
    }).reduce((prevArr,val) => prevArr.concat(val), []);
    if(IngredientsToArray.length === 0){
        IngredientsToArray = <span>Please start adding Ingredients</span>
    }
    return (    
        <div className={Styles.Burger}>
            <BurgerIngredient ingredientType="bread-top"/>
            {IngredientsToArray}
            <BurgerIngredient ingredientType="bread-bottom"/>
        </div>
    );
}    

export default burger;   