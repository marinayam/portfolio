import React from 'react';

import { Header, Skills, Projects } from './containers';
import { NavBar } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => (
  <div className="App">
    <NavBar />
    <Header />
    <Skills />
    <Projects />
  </div>
);

export default App;
