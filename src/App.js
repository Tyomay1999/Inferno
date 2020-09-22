import React from 'react';
import List from './Components/List/list';
import { BrowserRouter, Route } from 'react-router-dom';
import { Modal, AddUserModal } from './Components/Modal/modal';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Route path='/' exact component={List} />
        <Route path='/user/:id' component={Modal} />
        <Route path='/AddUser' component={AddUserModal} />
      </BrowserRouter>
    </>
  );
}

export default App;
