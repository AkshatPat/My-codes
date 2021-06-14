import React from 'react'
import Dashboard from './Containers/Dashboard'
import Categorylist from './Containers/Products/Category/Categorylist'
import Brandlist from './Containers/Products/Brand/Brandlist' 
import Products from './Containers/Products/Products' 
import Addproduct from './Containers/Products/Addproduct' 
import Orders from './Containers/Orders' 
import Customer from './Containers/Customer/Customer'
import Customerinfo from './Containers/Customer/Customerinfo'
import Login from './Containers/Login'


import './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'


export default function App() {
  return (
    <Router>
      <Route path="/" component={Login}></Route>
      <Route path="/dashboard" component={Dashboard}></Route>
      <Route path="/categories" component={Categorylist}></Route>
      <Route path="/brands" component={Brandlist}></Route>
      <Route path="/all-products" component={Products}></Route>
      <Route path="/add-product" component={Addproduct}></Route>
      <Route path="/orders" component={Orders}></Route>
      <Route path="/customers" component={Customer}></Route>
      <Route path="/customer-info" component={Customerinfo}></Route>
    </Router>
 
  )
}