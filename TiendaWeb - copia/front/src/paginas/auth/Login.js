import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="login-logo">
                    <Link to={"#"}><b>Tienda</b> WEB</Link>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Bienvenido, Inicie de sesion</p>
                        <form action="../../index3.html" method="post">
                            <div className="input-group mb-3">
                                <input type="email" 
                                    class="form-control" 
                                    placeholder="Email" 
                                    id="email"
                                    name="email"
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope"></span>
                                    </div>
                                </div>
                            </div>

                            <div className="input-group mb-3">
                                <input type="password" 
                                    className="form-control" 
                                    placeholder="Contraseña" 
                                    id="password"
                                    name="password"
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock"></span>
                                    </div>
                                </div>
                            </div>

                            <div className="social-auth-links text-center mb-3">
                                <button type='submit' className="btn btn-block btn-primary">
                                  Ingresar
                                </button>
                                <Link to={"/crear-cuenta"} className="btn btn-block btn-danger">
                                   Registrarse
                                </Link>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Login;