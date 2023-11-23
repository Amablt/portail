import React, { useState } from 'react';
import logo from '../../Images/logo_hopital.png';
import style from './Login.module.css';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    let navigate = useNavigate()

    const [user, setUser] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()
        navigate('/Profile')
    }

    return ( 
        <>

            <div className="hold-transition login-page"  style={{ backgroundColor:'#FFFFFF' }} onSubmit={onSubmit}>
                <div className={style.loginbox} >
                    <div className="login-logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="card" style={{ backgroundColor: '#0072C6', borderColor: '#E91E63', borderWidth: '2px', borderStyle: 'solid' }}>
                        <div className="card-body login-card-body" style={{ backgroundColor:'#FFFFFF' }}>
                            <p className="login-box-msg">Connectez-vous pour démarrer votre session</p>

                            <form action="../../index3.html" method="post">
                                <div className="input-group mb-3">
                                    <input type="nom" className="form-control" placeholder="Nom" onChange={(e) => setUser(e.target.value)} />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="Mot de passe" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">

                                    <div className="col-10">
                                        <button  type="submit" className="btn btn-primary btn-block">Connecter</button>
                                    </div>
                                </div>
                            </form>
                            <br />


 
                            <p className="mb-2">
                                <a href="forgot-password.html">j'ai oublié mon mot de passe</a>
                            </p>
                            <p className="mb-0">
                                <a href="register.html" className="text-center">Enregistrez une nouvelle adhésion</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>



        </>

    );
}

export default Login;
