// export const signupHandler = async event => {
//     event.preventDefault()

//     const userObj = {
//         name,
//         email,
//         password
//     }

//     const signupResponse = await fetch('http://localhost:8000/student', {
//         method: 'POST',
//         body: JSON.stringify(userObj),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })

//     const parsedResponse = await signupResponse.json()

//     if(signupResponse.status == 200) {
//         props.setUser(parsedResponse.data)
//         navigate('/profile')
//     }
    

// }

// actions have two rules:-
// 1. It should be a pure function.
// 2. It should return simple JS object.

export const incrementCounter = (num) => {

    return {  type: 'INC_COUNTER', data: num }

}

export const decrementCounter = (num) => {

    return {  type: 'DEC_COUNTER', data: num }

}