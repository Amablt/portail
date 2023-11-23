import React from 'react';
import Style from './Profile.module.css';
import config from '../../Profile.json';
import { Link } from 'react-router-dom';
import card from '../../Images/card_animation.PNG';
import logo_profile from '../../Images/docteur.png';
export const Profile = () => {

    const applications = config.applications;
    const id_profile = 1;
    const profile = config.profile.find(profile => profile.id === id_profile);
    if (!profile) {
        console.log("trouver")
    }
    return (
        <>
            <div className={Style.container}>
                <div className={Style.profile}>
                    <img src={logo_profile} alt="John" style={{ 'width': '100%' }} />
                     
                    <h1>Bienvenu</h1>
                    <h1>{profile.Nom} {profile.Prenom}</h1>
                    <p className={Style.title}>{profile.Profession}</p>
                    <p>HCA</p>
                    <a href="#"><i className='fa fa-dribble' ></i></a>
                    <a href="#"><i className='fa fa-dribble'></i></a>
                    <a href="#"><i className='fa fa-dribble'></i></a>
                    <a href="#"><i className='fa fa-dribble'></i></a>
                    <p><button><Link className={Style.logout} to={'/'}>Déconnecter</Link></button></p>
                </div>



                <div className={Style.total}>
                    {applications.map((app, index) => (
                        <Link to={`/${app.className}`} key={index} className={Style.appboxx}>
                            <div className={Style.card} Style={{ '--clr': '#009688' }}>
                                <div className={Style.imgbox}>
                                    <img src={card} alt={app.icon} />
                                </div>
                                <div className={Style.content}>
                                    <h2>{app.icon}</h2>
                                    <p>
                                        {app.icon} est une application .....
                                    </p>
                                    <Link to={`/${app.className}`}>Connecter</Link>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>


        </>
    );
}

