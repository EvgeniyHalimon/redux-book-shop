import './App.css';
import React from 'react';
import withBookstoreService from '../hoc/with-bookstore-service';

const App = ({bookstoreService}) => {
  console.log(bookstoreService.getBooks())
  return (
    <div className="App">
      wow
    </div>
  );
}

export default withBookstoreService()(App);
