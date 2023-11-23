import React from 'react';
import Style from './Test.module.css';
import config from '../../src/Profile.json';
import { Link } from 'react-router-dom';
export const Test = () => {

    const applications = config.applications;

    return (
        <>
            <div className={Style.c}>
                {applications.map((app, index) => (
                    <Link to={`/${app.className}`} key={index} className={Style.appboxx}>

                        <div className={Style[app.className]}>
                            <div  className={Style.appicon}>{app.icon}</div>
                            <div className={Style.apptitle}>{app.title}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}

