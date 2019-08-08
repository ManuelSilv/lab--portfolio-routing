import React, {Component} from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

 
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Error from './components/Error';
import Nav from './components/Nav';
import Footer from './components/Footer'

import './App.css';


class App extends Component {
  render() {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Nav />
            <Switch>
             <Route exact path="/" component={Home}/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
            </Switch>
          <Footer/>
        </div> 
      </BrowserRouter>

    </div>
  );
  }
}

export default App;
