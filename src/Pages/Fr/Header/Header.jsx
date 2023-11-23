import React, { useState } from 'react';
import Styles from './Styles.module.css';
import logo_hopital from '../../../Images/logo_hopital.png'
import logo_sante from '../../../Images/logo_sante.png'
import Algerie from '../../../Images/Algerie2.jpeg'

function Header() {



  return (


    <>
      <div className={Styles.heaDer}>
        <div>
          <img src={logo_hopital} className={Styles.logo_hopital} />
        </div>
        <div className={Styles.logocontainer} >
          <p className={Styles.textlogo} >
            {/* <span className={Styles.ministere} >MINISTÈRE DE LA DÉFENSE NATIONALE</span> <br /> */}
            <span className={Styles.hopital} >HÔPITAL CENTRAL DE L’ARMÉE</span> <br />
            <span className={Styles.Docteur} >Docteur Mohamed Seghir Nekkache</span> <br />
          </p>
        </div>

        <div>
          <img src={logo_sante} className={Styles.logo_hopital} />
        </div>


      </div>

    </>


  );

}

export default Header;
