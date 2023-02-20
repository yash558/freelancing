import React from 'react';
import './App.css';
import Home from './Screens/Home/Home';
import Account from './Screens/Account/Account';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
     {/* <Home/> */}
     <Account/>
    </div>
  );
}

export default App;
