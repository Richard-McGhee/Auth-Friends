import React, { useState } from 'react'
import { axiosWithAuth } from '../utilities/apiUsage'

const FriendForm = (props) => {
    const initValues = {
        name: "",
        age: 20,
        email: ""
    }
    const [friend, setFriend] = useState(initValues)

    const handleChanges = evt => {
        setFriend({
            ...friend,
            [evt.target.name]: evt.target.value
        })
    }
    const handleSumbit = evt => {
        evt.preventDefault()
        axiosWithAuth().post("http://localhost:5000/api/friends", friend)
        .then(res => {
            console.log(res)
            props.history.push("/friends")
        })
    }

    return ( 
        <form onSubmit={handleSumbit}>
            <input type="text"
            name="name"
            value={friend.name}
            onChange={handleChanges} />
            <input type="number"
            name="age"
            value={friend.age}
            onChange={handleChanges} />
            <input type="text"
            name="email"
            value={friend.email}
            onChange={handleChanges} />
            <button>Add Your Friend</button>
        </form>
     );
}
 
export default FriendForm;