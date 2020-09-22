import React from 'react';
import List from './Components/List/list';
import { BrowserRouter, Route } from 'react-router-dom';
import Modal from './Components/Modal/modal';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Route path='/' exact component={List} />
        <Route path='/user/:id' component={Modal} />
      </BrowserRouter>
    </>
  );
}

export default App;
