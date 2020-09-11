import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import { Widgets } from '@material-ui/icons';
import {useStateValue} from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    //BEM naming convetion 
    <div className="app">

      {!user ? (
        <Login />

      ): (
        <>
      <Header />

      <div className="app_body">
      <Sidebar />
      <Feed />
      <Widgets />
      </div> 
      </>
      )}
    </div>
  );
} 

export default App;
