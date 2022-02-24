import React from 'react';
import ReactDOM from 'react-dom';
import MiniCart from './components/MiniCart';
import './index.css';

const App = () => (
  <div className="container">
    <MiniCart />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
