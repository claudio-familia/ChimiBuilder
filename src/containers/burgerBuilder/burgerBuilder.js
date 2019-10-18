import React, { Component } from 'react';
import Burger from '../../components/burger/burger';
import BuildControls from '../../components/burger/buildControls/buildControls';

const INGREDIENTS_PRICE = {
  bacon: 0.7,
  salad: 0.5,
  meat: 1.3,
  cheese: 0.5
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0, 
      cheese: 0,
      meat: 0
    },
    totalPrice: 3
  }

  addIngredientHandler(type){    
    const _CuantityIngredients = this.state.ingredients[type];     
    const _Ingredients = {...this.state.ingredients};   
    const _PriceIngredients = this.state.totalPrice;

    const NewPriceIngredients = _PriceIngredients + INGREDIENTS_PRICE[type];
    _Ingredients[type] = _CuantityIngredients;
    _Ingredients[type]++;

    this.setState({
      totalPrice: NewPriceIngredients,
      ingredients: _Ingredients
    });
  }

  removeIngredientHandler(type){        
    const _CuantityIngredients = this.state.ingredients[type];     
    const _Ingredients = {...this.state.ingredients};   
    _Ingredients[type] = _CuantityIngredients;
    _Ingredients[type]--;

    if(_Ingredients[type] >= 0){    
      const _PriceIngredients = this.state.totalPrice;    
      const NewPriceIngredients = _PriceIngredients - INGREDIENTS_PRICE[type];

      this.setState({
        totalPrice: NewPriceIngredients,
        ingredients: _Ingredients
      });
    }
  }

  render(){
    const DisabledInfo = {
      ...this.state.ingredients
    };
    for(let index in DisabledInfo){
      DisabledInfo[index] = DisabledInfo[index] <= 0;
    }
    return (
      <div>
        <Burger Ingredients={this.state.ingredients}></Burger>
        <br />
        <BuildControls 
            LessControl={this.removeIngredientHandler.bind(this)} 
            MoreControl={this.addIngredientHandler.bind(this)}
            DisabledInfo={DisabledInfo}
            />
      </div>
    );
  }
}

export default BurgerBuilder;
