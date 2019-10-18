import React, { Component } from 'react';

import Layout from '../components/Layout/Layout';
import './App.css';
import BurgerBuilder from './burgerBuilder/burgerBuilder';

class App extends Component {
  render(){

    return (
      <div className="App">
        <Layout>
          <BurgerBuilder></BurgerBuilder>
        </Layout>      
      </div>
    );
  }
}

export default App;
