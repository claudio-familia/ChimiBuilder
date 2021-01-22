import React, { Component } from 'react';

import Chimi from '../../components/Chimi/Chimi';
import BuildControls from '../../components/Chimi/BuildControls/BuildControls';
import Aux from '../../components/hoc/Auxr';

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.3,
    cheese: 0.2,
    meat: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false
    }

    ingredientHandler = (type, isAdding) => {
        let count = this.state.ingredients[type];

        if(!isAdding && this.state.ingredients[type] === 0) return; 

        const updatedIngredients = {...this.state.ingredients};
        let totalPrice = this.state.totalPrice;

        updatedIngredients[type] = isAdding ? ++count : --count;
        totalPrice = isAdding ? totalPrice + INGREDIENT_PRICES[type] 
                              : totalPrice - INGREDIENT_PRICES[type];        

        this.setState({
            totalPrice: totalPrice,
            ingredients: updatedIngredients
        });

        this.updatePurchaseState();
    }

    updatePurchaseState = () => {        
        this.setState((prevState) => {
            const ingredients = {...prevState.ingredients};

            let sum = Object.values(ingredients).reduce((arr, item) => arr + item, 0);

            return {
                purchasable: sum > 0
            }
        })
    }

    render(){
        const disabledControls = {...this.state.ingredients};        
        
        for(let key in disabledControls)
            disabledControls[key] = disabledControls[key] <= 0;
        
        return (
            <Aux>
                <Chimi ingredients={this.state.ingredients} />                
                <BuildControls
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ingredientHandler={this.ingredientHandler}
                    disabled={disabledControls} />
            </Aux>
        );
    }
}

export default BurgerBuilder;