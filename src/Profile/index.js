const Dashboard = (props) => {

    return <div>
        <div> Name:- {props.user.name} </div>
        <div>Email:- {props.user.email}</div>
    </div>

}

export default Dashboard