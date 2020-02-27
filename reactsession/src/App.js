import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeComponent from './components/Home/Home'
import ProfileComponent from './components/Profile/Profile'
import SignUpComponent from './components/Home/Signup'

function App() {
  return (
    <div className="App">
     <h1>Hello World</h1>
     {/* <div><HomeComponent/></div> */}
     <div><ProfileComponent/></div>
     <div><SignUpComponent firstname="shenba" lastname="S" email="shenba@gmail.com"/></div>
    </div>
  );
}

export default App;
