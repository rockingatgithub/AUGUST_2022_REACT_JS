import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import { decrementCounter, incrementCounter } from './actions';
import Clock from './Clock';
import { UserContext } from './ContextAPI';
import { Form as UserForm } from './Form';
import List from './List'
import Dashboard from './Profile';

function App(props) {

  return (

    <div className="App">

      <div className='nav-links'>
        <Link to='/signup'> Signup </Link>
      </div>

      <Routes>
        <Route path='/profile' element={
          <UserContext.Provider value={{name: "Ninjas", lastname: "Coding"}} >
            <Dashboard />
          </UserContext.Provider>
        } />
        <Route path='/signup' element={<UserForm />} />
      </Routes>
      
    </div>
  );
}

const mapStateToProps = state => {

  return { main: state }

}

export default connect(mapStateToProps)(App);
