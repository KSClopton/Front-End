import React from 'react';
import {Link} from 'react-router-dom'


function ClientSignUP(props) {
    const {signUp, onSignUpChange, onSubmit} = props
    return (
        <div>
            <input placeholder="First Name" name="firstName" value={signUp.firstname} onChange={onSignUPChange}/>
            <input placeholder="Last Name" name="lastName" value={signUp.lastname} onChange={onSignUPChange}/>
            <input placeholder="Email" name="email" value={signUp.email} onChange={onSignUPChange}/>
            <input placeholder="Password" name="password" value={signUp.password} onChange={onSignUPChange}/>
            <input placeholder="Confirm Password" name="confirmPassword" value={signUp.confirm} onChange={onSignUPChange}/>
            <button>Submit</button>
        </div>
    )
}
export default ClientSignUP;