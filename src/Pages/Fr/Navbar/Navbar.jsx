import React, {  useState } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.module.css";

const NavBar = () => {
   
    const [isGmaMenuOpen, setGmaMenuOpen] = useState(false);

    return (
        <>

            <div className={Navbar.Header}>
                <div className={Navbar.container}>
                    <input type="checkbox" name="" id={Navbar.check} />
                    <div className={Navbar["nav-btn"]}>
                        <div className={Navbar["nav-links"]}>
                            <ul>
                                <li className={Navbar["nav-link"]} style={{ '--i': '.6s' }}>
                                    <NavLink className={Navbar.navlink} exact to="/">Accueil</NavLink>
                                </li>
                                <li className={Navbar["nav-link"]} style={{ '--i': '1.1s' }}>
                                <NavLink className={Navbar.navlink} exact to="/Règlementintérieur">Règlement intérieur</NavLink>
                                </li>
                                <li className={Navbar["nav-link"]} style={{ '--i': '1.35s' }} onClick={() => setGmaMenuOpen(!isGmaMenuOpen)}>
                                    <NavLink className={Navbar.navlink} exact to="/Apropos">Gestion Médico-Administrative<i className="fas fa-caret-up"></i></NavLink>
                                    <div className={`${Navbar.dropdown} ${isGmaMenuOpen ? Navbar.dropdownOpen : ""}`}>
                                        <ul>
                                        <div>
                                           <li className={Navbar["dropdown-link"]}>
                                                <NavLink className={Navbar.navlink} exact to="/">GMAP</NavLink>                            
                                            </li>
                                        </div>  
                                        <div>
                                            <li className={Navbar["dropdown-link"]}>
                                                <NavLink className={Navbar.navlink} exact to="/">GRDV-V3 </NavLink>
                                            </li>  
                                        </div> 
                                                                             
                                        </ul>
                                    </div>
                                </li>
                                <li className={Navbar["nav-link"]} style={{ '--i': '1.1s' }}>
                                    <NavLink className={Navbar.navlink} exact to="/Specialite">Support aux soins</NavLink>

                                </li>
                               

                                <li className={Navbar["nav-link"]} style={{ '--i': '1.35s' }}>
                                    <NavLink className={Navbar.navlink} exact to="/Info-pratique">Plateaux techniques</NavLink>
                                </li>
                                <li className={Navbar["nav-link"]} style={{ '--i': '1.35s' }}>
                                    <NavLink className={Navbar.navlink} exact to="/Actualite">Actualite</NavLink>
                                </li>
                                <li className={Navbar["nav-link"]} style={{ '--i': '1.35s' }}>
                                    <NavLink className={Navbar.navlink} exact to="/Contact">Contact</NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className={Navbar["log-sign"]} style={{ '--i': '1.8s' }}>
                            <NavLink exact to="/Login" className={`${Navbar.btn} ${Navbar.transparent}`} activeClassName="active">
                                Se connecter
                            </NavLink>
                        </div>


                    </div>

                    <div className={Navbar["hamburger-menu-container"]}>
                        <div className={Navbar["hamburger-menu"]}>
                            <div></div>
                        </div>
                    </div>
                </div>

            </div>

            <Outlet />

        </>


    );
}

export default NavBar;
