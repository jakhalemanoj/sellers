import React, {Component} from 'react';
import{Button,TextField} from '@material-ui/core'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import createProduct from './create_product';
import Dashboard from './dashboard'
import productList from './product_list';
import './App.css'

class App extends Component{
  render(){
    return(
      <div className="container">
        <Router>
        <Link to="dashboard"><Button variant="outlined" color="secondary">DASHBOARD</Button></Link>
        <Link to="create_product"><Button variant="outlined" color="secondary">CREATE PRODUCT</Button></Link>
        <Link to="product_list"><Button variant="outlined" color="secondary">PRODUCT LIST</Button></Link><br/><br/>

        <Route path="/create_product" component={createProduct}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/product_list" component={productList}></Route>
        
        </Router>
    
     </div>
    );
  }
}

export default App;