import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return ( 
        <div>
            <Link to='/login'>
                <h1>Login</h1>
            </Link>
        </div>
     );
}
 
export default HomePage;