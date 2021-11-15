import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './components/app/App';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import ErrorBondry from './components/error-boundry/error-boundry';
import BookstoreService from './services/bookstore-service';
import {BookstoreServiceProvider} from './components/bookstore-service-context/bookstore-service-context'
import store from './store';

const bookstoreService = new BookstoreService()

ReactDOM.render(
  <Provider store={store}>
    <ErrorBondry>
      <BookstoreServiceProvider value={bookstoreService}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BookstoreServiceProvider>
    </ErrorBondry>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
