import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Table from './components/Table';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Fixture from './components/fixture';
import { Footer } from './components/Footer';
import Fixtures from './components/Fixtures';
import React, { createContext } from 'react';
import { data } from '../src/lib/dummy-data'; 
import Results from './components/Results';
import Topscorer from './components/Topscorer';
import { data2 } from './lib/dummy-data2';
import {data3} from './lib/dummy-data3';
// import {data4} from './lib/dummy-data4';
import Players from './components/Player';
import Teams from './components/Teams';
import {data5} from './lib/dummy-data5'
import { data6 } from './lib/dummy-data6';



function App() {
  return (
    <div className="w-full md:w-[700px] lg:w-[800px] m-auto">
      <Navbar />
      
        
          <Routes>
            <Route path="/" element={<Table data={data}  />} />
            <Route path="/fixture/:matchID" element={<Fixture data={data} />} />
            <Route path="/fixtures" element={<Fixtures />} />
            <Route path="/results" element={<Results data={data3}/>} />
            <Route path="/Topscorer" element={<Topscorer data={data2} />} />
             <Route path="/Player" element={<Players data={data6} />} /> 
            <Route path="/Teams" element={<Teams data={data5} />} />
          </Routes>
    
      <Footer />
    </div>
  );
}

export default App;
