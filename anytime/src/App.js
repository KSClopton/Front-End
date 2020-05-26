import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import ClientSignUp from './Components/ClientSignUp'
import ClientSignIn from './Components/ClientSignIn'

function App() {


  return (
    <div className="App">
      <Link to='/SignUp' component={} />
      <Link to='/SignIn' component={} />
    </div>
  );
}

export default App;
