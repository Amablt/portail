import React from 'react';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import En from './Pages/En/En';
import Ar from './Pages/Ar/Ar';
import Nopage from"./Pages/Nopage";
import Header from './Pages/Fr/Header/Header';
import { Nous_connaitre } from './Pages/Fr/Content/Pages/Nous_connaitre';
import { Info_pratique } from './Pages/Fr/Content/Pages/Info_pratique';
import { Actualite } from './Pages/Fr/Content/Pages/Actualite';
import { Contact } from './Pages/Fr/Content/Pages/Contact';
import { Presentation } from './Pages/Fr/Content/Pages/Presentation';
import  Navbar  from "./Pages/Fr/Navbar/Navbar";
import { Accueil } from './Pages/Fr/Content/Pages/Accueil';
import Fr from './Pages/Fr/Fr';
import { Profile } from './Pages/Profile/Profile';
import { AutheProvider } from './Pages/Profile/Auth';
import  RequireAuth  from './Pages/Profile/RequireAuth';
import {AuthRoute} from './Pages/Profile/AuthRoute';
import {Test} from './Pages/Test';


/********Mine*************/
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ListSpecialites from './Pages/Fr/Content/Pages/ListSpecialites';
import CreatSpecialites from './Pages/Fr/Content/Pages/CreatSpecialites';
import EditSpecialites from './Pages/Fr/Content/Pages/EditSpecialites';
import Form from './Pages/Fr/Content/Pages/Form';
import Reglementinterieur from './Pages/Fr/Content/Pages/Reglementinterieur';

/*********************/

function App() {
  return (
   <>
   <AutheProvider>
       <Router>
       
            <Routes>
                <Route path="/" element={<Fr/>}>
                  <Route index element={<Accueil/>} />
                  <Route path="Apropos" element={<Nous_connaitre />} />
                  <Route path="Specialite" element={<ListSpecialites />}/>
                  <Route path="Règlementintérieur" element={<Reglementinterieur />}/>
                  <Route path="Specialite/create" element={<CreatSpecialites />}/>
                  <Route path="Specialite/edit/:id" element={<EditSpecialites />}/>
                  <Route path="Info-pratique" element={<Info_pratique />} />
                  <Route path="Actualite" element={<Form />} />
                  <Route path="Contact" element={<Contact />} />
                  <Route path="Presentation" element={<Presentation />} />
                </Route>

              <Route path="/Login/*" element={<AuthRoute/>}></Route>
              <Route path='/Test/*' element={<Test/>}></Route>
              <Route path='/Profile' element={
                <RequireAuth>
                    <Profile/>
                </RequireAuth>
                         
              
              } ></Route>
                  
            </Routes>
             
             
       
       </Router>  
       </AutheProvider>  

   
   </>
  );
}

export default App;
