import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Clock from './Clock';
import List from './List'
import UserForm from './UserForm';
import Form from './UserForm2';

function App() {

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
        <Route path='/signup' element={<Form/>} />
        <Route path='/list' element={<List courses={courses} heading={'Courses List'}/>} />
      </Routes>


      
    </div>
  );
}

export default App;
