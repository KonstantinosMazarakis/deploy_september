import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Pets from './components/Pets';
import AddPet from './components/AddPet';
import EditPet from './components/EditPet';
import DetailsPet from './components/DetailsPet';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
      <Route exact path="/">
      <Pets></Pets>
      </Route>
      <Route exact path="/pets/add">
      <AddPet></AddPet>
      </Route>
      <Route exact path="/pet/edit/:_id">
        <EditPet></EditPet>
      </Route>
      <Route exact path="/pet/details/:_id">
        <DetailsPet></DetailsPet>
      </Route>
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
