import React from 'react';
import Aux from './../../hoc/Auxirial';

import  './Layout.css';

const layout = (props) => {
    return (
        <Aux>
            <div>
                Navbar, toolbar and backdrop
            </div>
            <main className="main-content">
                {props.children}
            </main>
        </Aux>
    );
}

export default layout;