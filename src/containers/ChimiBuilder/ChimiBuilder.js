import React, { Component } from 'react';

import Chimi from '../../components/Chimi/Chimi';
import BuildControls from '../../components/Chimi/BuildControls/BuildControls';
import Aux from '../hoc/Auxr';
import Modal from '../../components/UI/Modal/Modal';
import OrderSumary from '../../components/Chimi/OrderSumary/OrderSumary';
import orderService from '../../services/order-service';
import costumerSevice from '../../services/costumer-service';
import ingredientService from '../../services/ingredients-service';
import Spinner from '../../components/UI/Spinner/Spinner';
import requestHandler from '../../components/UI/RequestHandler/RequestHandler';

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.3,
    cheese: 0.2,
    meat: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: true
    }

    componentDidMount() {        
        ingredientService.get().then(res => {            
            this.setState({
                ingredients: res.data,
                loading: false
            });
        }).catch(_ => {
            this.setState({ loading: false });
        })        
    }

    ingredientHandler = (type, isAdding) => {
        let count = this.state.ingredients[type];

        if (!isAdding && this.state.ingredients[type] === 0) return;

        const updatedIngredients = { ...this.state.ingredients };
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
            const ingredients = { ...prevState.ingredients };

            let sum = Object.values(ingredients).reduce((arr, item) => arr + item, 0);

            return {
                purchasable: sum > 0
            }
        })
    }

    showOrderSumary = () => {
        this.setState({ purchasing: true });
    }

    hideOrderSumary = () => {
        this.setState({ purchasing: false });
    }

    continuePurchase = () => {
        this.setState(prevState => {
            return {
                loading: true
            }
        });
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            costumer: costumerSevice.getCostumerById(0),
            deliveryMode: 'uber eats'
        }
        orderService.createOrder(order)
            .then(res => {
                this.setState(prevState => {
                    return {
                        loading: false,
                        purchasing: false
                    }
                });
            })
    }


    render() {
        const disabledControls = { ...this.state.ingredients };

        for (let key in disabledControls)
            disabledControls[key] = disabledControls[key] <= 0;

        let modalContent = this.state.loading ? <div><Spinner /><br /></div>
                                              : <OrderSumary
                                                        ingredients={this.state.ingredients}
                                                        cancel={this.hideOrderSumary}
                                                        continue={this.continuePurchase}
                                                        price={this.state.totalPrice} />

        let ChimiBuilder = this.state.ingredients ? (
                                                        <Aux>
                                                            <Modal show={this.state.purchasing} closed={this.hideOrderSumary}>
                                                                {modalContent}
                                                            </Modal>
                                                            <Chimi ingredients={this.state.ingredients} />
                                                                <BuildControls
                                                                    price={this.state.totalPrice}
                                                                    purchasable={this.state.purchasable}
                                                                    ingredientHandler={this.ingredientHandler}
                                                                    disabled={disabledControls}
                                                                    ordered={this.showOrderSumary} />
                                                        </Aux>
                                                    )
                                                :   <h1 style={{color: '#c62828', padding: '20px'}}>No se pueden obtener los ingredientes</h1>;

        return (
            <Aux>                
                {ChimiBuilder}
            </Aux>
        );
    }
}

export default requestHandler(BurgerBuilder, orderService.baseService);