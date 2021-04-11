import React,{createContext,useContext,useReducer} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {DataLayercontext} from "./Datalayer";
import initialState,{reducer} from "./Reducer";





ReactDOM.render(
        (<DataLayercontext initialState={initialState} reducer={reducer}>
            <App />
        </DataLayercontext>),
      document.getElementById('root')
);

