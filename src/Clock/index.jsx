import { useEffect, useState } from "react"

const Clock = (props) => {

    const [time, setTime] = useState('')

    const dateSetter = () => {
        let date = new Date()
        let currentTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
        setTime(currentTime)
        console.log(currentTime)
    }


    useEffect(() => {

        let id = setInterval ( dateSetter, 1000 )
        
        return () => {
            clearInterval(id)
        }

    }, [])

    return <div>
        Time:- {time}
    </div>

}

export default Clock