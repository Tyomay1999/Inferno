import React from 'react';
import List from './Components/List/list';
import { BrowserRouter, Route } from 'react-router-dom';
import { AddUserModal } from './Components/Modal/modal';
import User from './Components/Modal/user'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Route path='/' exact component={List} />
        <Route path='/user/:id' component={User} />
        <Route path='/AddUser' component={AddUserModal} />
      </BrowserRouter>
    </>
  );
}

export default App;
