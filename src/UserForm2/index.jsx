import { useEffect, useState } from "react"

const UserForm = (props) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [studentList, setStudentList] = useState([])



    const addStudentHandler = (event) => {

        event.preventDefault()

        const student = {
            name: name,
            email: email,
            password: password
        }

        setStudentList( prevList => [ ...prevList, student ]   )

    } 

    useEffect (  () => {
        console.log("Component mounts and updating")
    }, [email, password]  )

    useEffect( () => {  
        console.log('Runs on mounting!') 
    }, [] )

    return <div>

        <h3> UserForm </h3>
        <form onSubmit={addStudentHandler}>

            <div>
                <label htmlFor="name" >Name:-</label>
                <input id="name" type="text" 
                value={name} 
                name="name"
                onChange={event => setName(event.target.value)}  />
            </div>

            <div>
                <label htmlFor="email" >email:-</label>
                <input id="email" type="text" 
                value={email} 
                name="email"
                onChange={event => setEmail(event.target.value)}  />
            </div>

            <div>
                <label htmlFor="password" >password:-</label>
                <input id="password" type="text" 
                value={password} 
                name="password"
                onChange={event => setPassword(event.target.value)}  />
            </div>

            <button type="submit" > Submit </button>

        </form>

        <h3> Student List:- </h3>

        <ul>
            { studentList.map( student => <li>  
                
                <table>
                    <tr> 
                        <td>{student.name}</td>
                        <td>{student.email}</td>     
                        <td>{student.password}</td>     
                    </tr>
                </table>

                  </li> ) }
        </ul>


    </div>

} 

export default UserForm


