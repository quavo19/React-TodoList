import React from 'react';
import ReactDom from 'react-dom';
import TodoContainer from './Components/TodoContainer';
import './App.css';

ReactDom.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>, document.getElementById('root'),
);
