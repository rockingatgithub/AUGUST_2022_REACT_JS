// Actions rules:-
// 1. Pure functions.
// 2. Return simple JS objects.

export const signupFunction = (userObj, navigate) => {

    return async (dispatch, getState) => {

        console.log("in signup action",getState())

        const signupResponse = await fetch('http://localhost:8000/student', {
            method: 'POST',
            body: JSON.stringify(userObj),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const parsedResponse = await signupResponse.json()

        if (signupResponse.status == 200) {
            dispatch({  type: 'SET_USER', data: parsedResponse.data })
            navigate('/profile')
        }
    
    }
}

export const incrementCounter = (num) => {

    return {  type: 'INC_COUNTER', data: num }

}

export const decrementCounter = (num) => {

    return {  type: 'DEC_COUNTER', data: num }

}