import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 import { Home, SelectAuto,AssemblePlan, Congratulations } from './views';
import { BrowserRouter, Route, Switch, useParams} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/seleccionar-auto/:id/:placa" component={SelectAuto} />
          <Route path="/arma-tu-plan/:placa/:year/:model" component={AssemblePlan} />
          <Route path="/felicitaciones" component={Congratulations}/>
    </Switch>
    </BrowserRouter> 
 
  </React.StrictMode>,
  document.getElementById('root')
);