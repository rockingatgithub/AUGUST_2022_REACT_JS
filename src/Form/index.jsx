import { useState } from "react";
import Profile from "../Profile";
import UIForm from 'react-bootstrap/Form';
import  Button  from "react-bootstrap/Button";
// import './form.module.css'


export const Form = (props) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState({})

    const signupHandler = async event => {
        event.preventDefault()

        const userObj = {
            name,
            email,
            password
        }

        const signupResponse = await fetch('http://localhost:8000/student', {
            method: 'POST',
            body: JSON.stringify(userObj),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const parsedResponse = await signupResponse.json()

        setUser(parsedResponse.data)

    }

    return <><h3> UserForm </h3>
        <UIForm onSubmit={signupHandler} className="user-form">

            <UIForm.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <UIForm.Label>Name:-</UIForm.Label>
                <UIForm.Control value={name}
                    name="name"
                    onChange={event => setName(event.target.value)} />
            </UIForm.Group>

            <UIForm.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <UIForm.Label>Email:-</UIForm.Label>
                <UIForm.Control value={email}
                    name="email"
                    onChange={event => setEmail(event.target.value)} />
            </UIForm.Group>

            <UIForm.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <UIForm.Label>Password:-</UIForm.Label>
                <UIForm.Control value={password}
                    name="password"
                    onChange={event => setPassword(event.target.value)} />
            </UIForm.Group>

            <Button type="submit" > Submit </Button>

        </UIForm>
        <Profile user={user} />
    </>


}