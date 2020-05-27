import React from 'react';
import {Link} from 'react-router-dom'


function ClientSignIn(props) {
    const {signIn, onSignInChange} = props
    return (
        <form>

        <div>
         
            <input placeholder="Email" name="email" value={signIn.email} onChange={onSignInChange}/>
            <input placeholder="Password" name="password" value={signIn.password} onChange={onSignInChange}/>
          
            <button>Sign In</button>
        </div>

        </form>
    )
}
export default ClientSignIn;