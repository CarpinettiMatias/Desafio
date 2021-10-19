
import React from 'react';
import './App.css'
import NavBar from './component/NavBar/NavBar';

//React DOM
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//pages
import Inicio from './pages/Inicio/Inicio';
import Contacto from './pages/Contacto/Contacto';
import Ayuda from './pages/Ayuda/Ayuda';


function App() {
  return (
    <Router>
        <div className="App">
          <NavBar>
            <Switch>
                <Route path='/' exact component={Inicio} />
                <Route path='/Contacto' component={Contacto} />
                <Route path='/Ayuda' component={Ayuda} />
            </Switch>
          </NavBar>
        </div>
    </Router>
  );
}

export default App;
