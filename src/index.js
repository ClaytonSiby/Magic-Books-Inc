import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const booksData = {
  theBooks: [
    {
      id: Math.floor(Math.random() * 100),
      title: 'Tom and Jerry',
      category: 'Kids',
    },

    {
      id: Math.floor(Math.random() * 100),
      title: 'As a man Thinketh',
      category: 'Learning',
    },

    {
      id: Math.floor(Math.random() * 100),
      title: 'Star Wars',
      category: 'Sci-Fi',
    },
  ],

  filter: 'All',
};

const store = createStore(rootReducer, booksData);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
