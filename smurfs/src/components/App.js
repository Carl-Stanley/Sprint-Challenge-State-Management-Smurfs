import React, { useEffect } from "react";
import MySmurfs from './SmurfCards';
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
import TheHeader from './Header';
import "./App.css";
import AddSmurf from "./AddSmurf.js";






const App = ({ getSmurfs, data, gettingSmurfs }) => {


  useEffect(() => {
   
    getSmurfs();
  }, [getSmurfs]);

  if (gettingSmurfs) {

    return <h3>Fetching smurfs.....</h3>;
  }

  return (
    <div className="App">
      
      <TheHeader />

      <AddSmurf />
      
      <MySmurfs data={data}/>
    
    </div>
  
  );

}

const mapProps = state => {
  
  return {
    
    data: state.data,
    isFetching: state.gettingSmurfs,
    error: state.error
  
  }


};

export default connect(
  
  mapProps,

  { getSmurfs }

)(App);
