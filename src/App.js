import React,{useState,useEffect,createContext,useReducer,useContext} from "react";
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chats from "./Chats";
import {BrowserRouter as Router,Route,Switch,Link } from "react-router-dom";
import Login from "./Login";
import {DataLayer} from "./Datalayer"; 

function App() {

  const [{user},dispatch] = DataLayer();

  return (
    <Router>
    <div className="App">
      {(!user)?
      (<Login/>):
      (<>
      <Header />
      <div className="main_body">
          <Sidebar />
          <Switch>
            <Route path="/room/:roomid">
              <Chats />
            </Route>
            <Route path="/"> 
              <h1>Welcome</h1>
            </Route>
          </Switch>
      </div>
      </>
      )}
      
    </div>
      
    </Router>
    
    
    
  );
}

export default App;
