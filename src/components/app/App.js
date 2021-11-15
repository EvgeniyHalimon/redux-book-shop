import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import withBookstoreService from '../hoc/with-bookstore-service';
import {Routes, Route} from 'react-router-dom'
import { HomePage, CartPage } from '../pages';
import ShopHeader from '../shop-header';


const App = () => {
  return (
    <main role='main' className='container'>
      <ShopHeader numItems={5} total={210}/>
      <Routes className="App">
        <Route path='/' element={<HomePage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    </main>
  );
}

export default withBookstoreService()(App);
