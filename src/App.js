import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Banner from "./Components/Home/Banner/Banner";
import Header from './Components/Home/Header/Header';

function App() {
  return (
    <Router>
      <Header></Header>
      <Banner></Banner>
    </Router>
    
  );
}

export default App;
