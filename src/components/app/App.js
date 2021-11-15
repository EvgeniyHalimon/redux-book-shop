import './App.css';
import React from 'react';
import withBookstoreService from '../hoc/with-bookstore-service';
import {Routes, Route} from 'react-router-dom'
import { HomePage, CartPage } from '../pages';



const App = ({bookstoreService}) => {
  return (
    <Routes className="App">
      <Route path='/' element={<HomePage/>}/>
      <Route path='/cart' element={<CartPage/>}/>
    </Routes>
  );
}

export default withBookstoreService()(App);
