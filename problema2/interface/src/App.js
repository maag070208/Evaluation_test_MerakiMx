import React,{ Component } from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

//componentes
import Navigation from './components/Navigation';
import home from './components/home';
import order from './components/order';
import profile from './components/profile';

class App extends Component {


  render(){
     return (
    <Router>

      <Navigation />

        <Route path="/" exact component={home}/>
        <Route path="/clientes" component={profile}/>
        <Route path="/pedidos" component={order}/>
    </Router>
     );
  }
}

export default App;
