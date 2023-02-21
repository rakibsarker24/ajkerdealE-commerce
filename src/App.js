import React from 'react';
import './App.css';
import './index.css';
import Home from './components/pages/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Computer from './components/pages/Computer';
import Pshirt from './components/pages/Pshirt';
import PtShirt from './components/pages/PtShirt';
import Ppant from './components/pages/Ppant';
import Pthreepich from './components/pages/Pthreepich';
import Psari from './components/pages/Psari';
import Pshose from './components/pages/Pshose';
import Pregistratrion from './components/pages/Pregistratrion';
import Plogin from './components/pages/Plogin';
import Pborka from './components/pages/Pborka';
import PaddCard from './components/pages/PaddCard';


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Home/>}/>
            <Route path='/reg' element={ <Pregistratrion/>}/>
            <Route path='/login' element={ <Plogin/>}/>
            <Route path='/computer' element={ <Computer/>}/>
            <Route path='/shirt' element={ <Pshirt/>}/>
            <Route path='/tshirt' element={ <PtShirt/>}/>
            <Route path='/pant' element={ <Ppant/>}/>
            <Route path='/threepich' element={ <Pthreepich/>}/>
            <Route path='/saree' element={ <Psari/>}/>
            <Route path='/shose' element={ <Pshose/>}/>
            <Route path='/borka' element={ <Pborka/>}/>
            <Route path='/addCard' element={ <PaddCard/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
