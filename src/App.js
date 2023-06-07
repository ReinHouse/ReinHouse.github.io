import './App.css';
import React from 'react';
import Header from "./Header";
import Main from "./Main"
import ScrollToTop from './scrollToTop';

const App = () => (

    <div className="App">
      <ScrollToTop/>
      <Header/>
      <Main/> 
    </div>
  );

export default App;
