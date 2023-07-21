import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import { decrementCounter, incrementCounter } from './actions';
import Clock from './Clock';
import { Form as UserForm } from './Form';
import List from './List'
import Dashboard from './Profile';

function App(props) {

  const [user, setUser] = useState({})
  const [showList, setShowList] = useState(true)
  const [ showClock, setShowClock ] = useState(true)
  const dispatch = useDispatch()

  const courses = ['HTML', 'CSS', 'JS', 'ReactJS', 'NodeJS', 'NestJS']

  const toggleList = () => {
    setShowList (  prevToggle => !prevToggle  )
  }

  const toggleClock = () => {
    setShowClock( prevValue => !prevValue )
  }

  const incrementHandler = () => {

    dispatch(incrementCounter(10))

  }

  const decrementHandler = () => {

    dispatch(decrementCounter(10))

  }

  console.log("state from store", props.main)

  return (
    <div className="App">

      <div className='nav-links'>

        <Link to='/signup'> Signup </Link>
        <Link to='/list'> List </Link>
        
      </div>

      <Routes>
        <Route path='/list' element={<List courses={courses} heading={'Courses List'}/>} />
        <Route path='/profile' element={<Dashboard user={user} />} />
        <Route path='/signup' element={<UserForm setUser={setUser} />} />
      </Routes>

      <div>
        <button onClick={incrementHandler} > Inc </button>
          <span>Counter:- {props.main.counter} </span>
        <button onClick={decrementHandler} > Dec </button>
      </div>

      
    </div>
  );
}

const mapStateToProps = state => {

  return { main: state }

}

export default connect(mapStateToProps)(App);
