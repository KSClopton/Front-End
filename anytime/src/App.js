import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import ClientSignUp from './Components/ClientSignUp'
import ClientSignIn from './Components/ClientSignIn'


const initialSignUpValues = {firstName: '', lastName: '', email: '', password: '', confirmPassword: ''}
const initialSignInValues = {email: '', password: ''}
const initialNewSignIn = {}

function App() {
  const [signUp, setSignUp ] = useState(initialSignUpValues)
  const [signIn, setSignIn ] = useState(initialSignInValues)
  const [newSignIn, setNewSignIn] = useState()

  const postNewSignIn(newClient) => {
    axios.get(``)
    .then({
      
    })
  }
  const onSignUPChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    setSignUp({
      ...signUp,
      [name]: value
    })
  }
  const onSubmit = e => {
    e.preventDefault()

    const newClient = {
      firstName: signUp.firstName.trim(),
      lastName: signUp.lastName.trim(),
      email: signUp.email.trim(),
      password: signUp.password.trim()
    }
    postNewSignIn(newClient)
  }
  const onSignInChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    setSignIn({
      ...signIn,
      [name]: value
    })
  }

  return (
    <div className="App">
      <Link to='/SignUp'>
        <ClientSignUp />
      </Link>
      <Link to='/SignIn'>
        <ClientSignIn />
      </Link>
    </div>
  );
}

export default App;
