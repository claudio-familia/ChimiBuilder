import React from 'react';
import BuildControl from './buildControl/buildControl';
import Style from './buildControls.module.css'

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
]

const buildControls = props => (
    <div className={Style.BuildControls}>
        <h3>Builder controls</h3>
        { controls.map(ctrl => <BuildControl 
                                            key={ctrl.type} 
                                            Label={ctrl.label}
                                            Add={() => props.MoreControl(ctrl.type)}
                                            Less={() => props.LessControl(ctrl.type)}
                                            Disabled={props.DisabledInfo[ctrl.type]} />) }
    </div>
);

export default buildControls;