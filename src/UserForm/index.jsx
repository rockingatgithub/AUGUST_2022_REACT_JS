import React from "react"
class UserForm extends React.Component {

    state = {
        isHeadingVisible: true,
        students: [],
        name: '',
        email: '',
        phone: ''
    }

    componentDidMount = () => {
        console.log("Component Mounted!")
    }

    componentDidUpdate = () => {
        console.log("Component updated!")
    }

    showHeadingHandler  () {
        
        this.setState(  
            state =>  ({ isHeadingVisible: !state.isHeadingVisible }),
            () => console.log(this.state.isHeadingVisible)
        )
        
    }

    nameChangeHandler = event => {

        this.setState({ name: event.target.value })

    }

    emailChangeHandler = event => {

        this.setState({ email: event.target.value })

    }

    phoneChangeHandler = event => {

        this.setState({ phone: event.target.value })

    }

    submitHandler = event => {

        event.preventDefault()

        const { name, email, phone} = this.state
        let student = {
            name,
            email,
            phone
        }

        this.setState(  state => ({ students: [ ...state.students, student  ] })  )

    }

    render () {

        const {isHeadingVisible, name, email, phone, students} = this.state

        return  <div>

           { isHeadingVisible && <h3> Class Component </h3>}

           <button onClick={this.showHeadingHandler} > Show Heading </button>

            <form onSubmit={this.submitHandler} >

                <div>
                    <label htmlFor="name"> Name:- </label>
                    <input id="name" type="text" value={name} onChange={this.nameChangeHandler} />
                </div>
                
                <div>
                    <label htmlFor="email"> Email:- </label>
                    <input id="email" type="email" value={email} onChange={this.emailChangeHandler} />
                </div>
                
                <div>
                    <label htmlFor="phone"> Phone:- </label>
                    <input id="phone" type="number" value={phone} onChange={this.phoneChangeHandler} />
                </div>
                
                <button type="submit">  Submit  </button>

            </form>

            { isHeadingVisible && <StudentsList studentList={students} heading="Students List:-"/>}

        </div>

    }

}

export default UserForm

class StudentsList extends React.Component {

    componentDidUpdate = () => {
        console.log("list updated")
    }

    componentWillUnmount = () => {
        console.log("The component will unmount!")
    }
    

    render () {

        console.log(this.props)

        return (<><h3> Students List:- </h3>

        <ul>
            {  this.props.studentList.map(
                student => {

                    return <li>
                        <span> {student.name} </span>
                        <span> {student.email} </span>
                        <span> {student.phone} </span>
                    </li>

                }
            )  }
        </ul></>)
    }

}