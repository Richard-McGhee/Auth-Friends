import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { axiosWithAuth } from '../utilities/apiUsage'

const FriendList = () => {
    const [allFriends, setAllFriends] = useState([])

    useEffect(() => {
        axiosWithAuth().get("http://localhost:5000/api/friends")
        .then(res => {
            setAllFriends(res.data)
        })
        .catch(err => console.dir(err))
    }, [])

    return ( 
        <div>
            <h1>FRIENDS</h1>
            <h3>
                <Link to='/addFriend'>Add a Friend</Link>
            </h3><br/>
            {allFriends.length > 0 ? allFriends.map(friend => (
                <div key={friend.id}>
                    <h2>{friend.name}</h2>
                    <h2>Age: {friend.age}</h2>
                    <p>Email --{'>'} {friend.email}</p>
                </div>
            )) : <h1>...LOADING</h1>}
        </div>
     );
}
 
export default FriendList;