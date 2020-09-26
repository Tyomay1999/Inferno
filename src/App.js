import React from 'react';
import List from './Components/List/list';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AddUserModal } from './Components/Modal/modal';
import User from './Components/Modal/user';
import NotFound from './Components/NotFound/notFound';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={List} />
          <Route path='/user/:id' component={User} />
          <Route path='/AddUser' component={AddUserModal} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
