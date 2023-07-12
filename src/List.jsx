import { useEffect, useState } from "react"

function List (props) {

    useEffect( () => {
        console.log("Runs on mount and update!")

        return () => { console.log("Runs on unmount!") }
        
    } )
    
    console.log(props)
    return  <div>
        <h3> {props.heading} </h3>
        <ul>
            {  props.courses.map( (course, index) => <li key={index}>{course}</li> )  }
        </ul>
    </div>

}

export default List