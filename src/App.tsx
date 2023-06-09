import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { MenuList } from './components/MenuList';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="main">
        <MenuList></MenuList>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}

export default App;
