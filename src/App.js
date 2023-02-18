import './App.css';
import { Route, Routes } from "react-router-dom";
import { React, useEffect, useState, useContext } from "react";

import Page from "./components/Page";
import Admin from "./components/Admin";

import { DetailsContext } from './context/Details';
import { getDetails } from './api';


function App() {

  // states
  const [initialLoad, setInitialLoad] = useState(true);
  const { details, setDetails } = useContext(DetailsContext)

  // getting data from DB and seting to stste on initial load
  useEffect(() => {
    if(initialLoad){
      getDetails().then((result) => {
        console.log(result)
        setDetails(result);
        setInitialLoad(false);
      })
    }
  }, [initialLoad]);


  return (

      <Routes>
        <Route path="/" element={<Page/>} />
        <Route path="admin" element={<Admin/>} />
      </Routes>

  );
}

export default App;
