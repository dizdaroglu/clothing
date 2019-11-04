import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component"
import { Route } from 'react-router-dom'

const HatsPage = (props) => {

  return (
    < div >
      <h1>hats PAGE</h1>
    </div >
  )
}

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route path="/hats" component={HatsPage} />


    </div>
  );
}

export default App;
