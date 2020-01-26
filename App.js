import React, { Component }from 'react';
import logo from './logo.svg';
import './App.css';
import './components/layouts/Img';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
//import react-router
import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import News from './components/pages/News';
import Contacts from './components/pages/Contacts';
import Details from './components/pages/Details';
import NotFoundPages from './components/pages/NotFoundPages';
import Slider from './components/layouts/Slider';


function App() {
  return (
    <div className="App">
      <Navbar/>
       <Slider/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/details" component={Details} />
          <Route  component={NotFoundPages} />         
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;
