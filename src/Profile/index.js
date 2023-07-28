import { useContext } from "react"
import { connect } from "react-redux"
import { UserContext } from "../ContextAPI"

const Dashboard = (props) => {

    return <div>
        <div> Name:- {props.main.user.name} </div>
        <div>Email:- {props.main.user.email}</div>

        <Edit/>

    </div>

}

const mapStateToProps = state => {

    return { main: state }

}

export default connect(mapStateToProps)(Dashboard)


const Edit = (props) => {

    // const user = useContext(UserContext)

    return <UserContext.Consumer>{ value =><h2> Edit Profile  for { value.name } {value.lastname}</h2>
    }
    </UserContext.Consumer>

}
