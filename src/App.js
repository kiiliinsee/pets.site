import React from 'react';

import Index from "./components/pages";
import Add from "./components/pages/add";
import Kabinet from "./components/pages/kabinet";
import Registr from "./components/pages/registr";
import Search from "./components/pages/search";
import {Routes, Route} from "react-router-dom";
import Login from './components/header';
import AnimalSearch from './components/pages/animalSearch';
import DetailsPage from './components/details';



function App() {
  return (
    <div className="App">
 <div >
      <Routes> 
        <Route path="/Index" element={<Index />} />
        <Route path="/Kabinet" element={<Kabinet />} />
        <Route path="/Registr" element={<Registr />} />
        <Route path="/AnimalSearch" element={<AnimalSearch />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </div>
    </div>

  );
}

export default App;
