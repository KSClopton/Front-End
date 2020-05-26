import React from 'react';
import {Link} from 'react-router-dom'


function ClientSignIn(props) {
    const {signin, onSignInChange} = props
    return (
        <div>
         
            <input placeholder="Email" name="Sign In Email" value={signin.email} onChange={onSignInChange}/>
            <input placeholder="Password" name="Sign In Password" value={signin.password} onChange={onSignInChange}/>
          
            <button>Sign In</button>
        </div>
    )
}
export default ClientSignIn;