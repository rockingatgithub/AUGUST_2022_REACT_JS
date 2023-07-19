import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Clock from './Clock';
import { Form as UserForm } from './Form';
import List from './List'
import Dashboard from './Profile';

function App() {

  const [user, setUser] = useState({})
  const [showList, setShowList] = useState(true)
  const [ showClock, setShowClock ] = useState(true)

  const courses = ['HTML', 'CSS', 'JS', 'ReactJS', 'NodeJS', 'NestJS']

  const toggleList = () => {
    setShowList (  prevToggle => !prevToggle  )
  }

  const toggleClock = () => {
    setShowClock( prevValue => !prevValue )
  }

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


      
    </div>
  );
}

export default App;
