import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import ClientSignUp from './Components/ClientSignUp'
import ClientSignIn from './Components/ClientSignIn'
import axios from 'axios';


const initialSignUpValues = {firstName: '', lastName: '', email: '', password: '', role: ''}
const initialSignInValues = {email: '', password: ''}
const initialNewSignIn = {}

function App() {
  const [signUp, setSignUp ] = useState(initialSignUpValues)
  const [signIn, setSignIn ] = useState(initialSignInValues)
  const [newSignIn, setNewSignIn] = useState()

  const postNewSignIn = (newClient) => {
    axios.post('http://anywhere-fit.herokuapp.com/api/auth/register', newClient)
    .then(res => {
      console.log('totes worked')
      window.location = '/'
      setSignUp(initialSignUpValues)
    })
    .catch(err => {
      console.log('The api is not working')
    })
    .finally({

    })
  }
  const onSignUpChange = e => {
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
      password: signUp.password.trim(),
      role: signUp.role.trim()
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
    <Router>
    <div className="App">
      <Route path='/SignUp'>
        <ClientSignUp onSubmit={onSubmit} signUp={signUp} onSignUpChange={onSignUpChange}/>
      </Route>
      <Route path='/SignIn'>
        <ClientSignIn onSubmit={onSubmit} signIn={signIn}onSignInChange={onSignInChange}/>
      </Route>
    </div>
    </Router>
  );
}

export default App;
