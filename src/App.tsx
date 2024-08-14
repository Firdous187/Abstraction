import React from 'react';
import logo from './logo.svg';
import './App.css';

import Dermatologist from './classes/Dermatologist';
import Neurologist from './classes/Neurologist';
import Surgeon from './classes/Surgeon';

function App() {


  //let animalObject1 = new Animal();
   

  let derma = new Dermatologist();
  let neuro = new Neurologist();
  let surgeon = new Surgeon();

  return (
    <div className="App">

    </div>
  );
}

export default App;
