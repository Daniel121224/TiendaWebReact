import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import swal from 'sweetalert';

const CrearCuenta = () => {

    const [usuario, setUsuario] = useState({
    nombre: '',
    email: '',
    password: '',
    idTipoDocumento: '',
    numeroDocumento: '',
    nombreUsuario: ''
    });

    const { nombre, email, password, idTipoDocumento, numeroDocumento, nombreUsuario } = usuario;

    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        document.getElementById('nombre').focus();
    }, []);

    const crearCuenta = async () => {
        const data = {
            idTipoDocumento: usuario.idTipoDocumento,
            numeroDocumento: usuario.numeroDocumento,
            nombre: usuario.nombre,
            nombreUsuario: usuario.nombreUsuario,
            email: usuario.email,
            password: usuario.password

        }
        const response =  await APIInvoke.invokePOST(`/api/usuarios`, data);
        console.log(response);
    }



    const onSubmit = (e) => {
        e.preventDefault();
        crearCuenta();
    }

    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="login-logo">
                    <Link to={"#"}><b>Registro</b> Usuario</Link>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Ingrese los datos del usuario.</p>
                        
                        <form onSubmit={onSubmit}>
                            <div className="input-group mb-3">
                                <input type="text"
                                    class="form-control"
                                    placeholder="Tipo de documento"
                                    id="idTipoDocumento"
                                    name="idTipoDocumento"
                                    value={idTipoDocumento}
                                    onChange={onChange}
                                    required
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-id-card"></span>
                                    </div>
                                </div>
                            </div>

                            <div className="input-group mb-3">
                                <input type="text"
                                    class="form-control"
                                    placeholder="Numero de documento"
                                    id="numeroDocumento"
                                    name="numeroDocumento"
                                    value={numeroDocumento}
                                    onChange={onChange}
                                    required
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-id-badge"></span>
                                    </div>
                                </div>
                            </div>

                            <div className="input-group mb-3">
                                <input type="text"
                                    class="form-control"
                                    placeholder="Nombre"
                                    id="nombre"
                                    name="nombre"
                                    value={nombre}
                                    onChange={onChange}
                                    required
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user"></span>
                                    </div>
                                </div>
                            </div>

                            <div className="input-group mb-3">
                                <input type="text"
                                    class="form-control"
                                    placeholder="Nombre de usuario"
                                    id="nombreUsuario"
                                    name="nombreUsuario"
                                    value={nombreUsuario}
                                    onChange={onChange}
                                    required
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user"></span>
                                    </div>
                                </div>
                            </div>

                            <div className="input-group mb-3">
                                <input type="email"
                                    class="form-control"
                                    placeholder="Email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={onChange}
                                    required
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
                                    value={password}
                                    onChange={onChange}
                                    required
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock"></span>
                                    </div>
                                </div>
                            </div>

                            <div className="social-auth-links text-center mb-3">
                                <button type='submit' className="btn btn-block btn-primary">
                                    Registrar cuenta
                                </button>
                                <Link to={"/"} className="btn btn-block btn-danger">
                                    Regresar al login
                                </Link>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CrearCuenta;