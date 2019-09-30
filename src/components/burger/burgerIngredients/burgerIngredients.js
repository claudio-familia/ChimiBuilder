import React from 'react';

const burgerIngredient = props => {
    let ingredient = null;

    switch(props.burgerIngridienteType){
        case ('bred'):
            ingredient = <div style={{"padding": "16px", "backgroundColor":"green"}}>EnburgerIngridientea verde</div>
        break;
        case ('vegetable'):
            ingredient = <div style={{"padding": "16px", "backgroundColor":"brown"}}>Vegetales al vapor</div>
        break;
        case ('pasta'):
            burgerIngringredientedient = <div style={{"padding": "16px", "backgroundColor":"white"}}>EnburgerIngridientea de coditos</div>
        break;
        case ('russian'):
            ingredient = <div style={{"padding": "16px", "backgroundColor":"blue"}}>EnburgerIngridientea rusa</div>
        break;
        default:
            ingredient=null;            
    }

    return ingredient;
};

export default burgerIngredient;