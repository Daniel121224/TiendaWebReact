import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import swal from 'sweetalert';

const Login = () => {

    const navigate = useNavigate();

    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    });

    const { email, password } = usuario;

    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        document.getElementById('email').focus();
    }, [])

    const iniciarSesion = async () => {
        if (password.length < 6) {
            const msg = 'La contraseña debe tener al menos 6 caracteres';
            swal({
                title: "Error",
                text: msg,
                icon: "error",
                buttons: {
                    confirm: {
                        text: "Ok",
                        value: true,
                        visible: true,
                        className: "btn btn-danger",
                        closeModal: true
                    }
                }
            }); 
        } else {
            const data = {
                email: usuario.email,
                password: usuario.password
            }
            const response = await APIInvoke.invokePOST(`/api/auth`, data);
            const mensaje = response.msg;

            if (mensaje === 'Usuario no existe' || mensaje === 'Contraseña incorrecta') {
                const msg = 'No fue posible iniciar sesion (Usuario o contraseña incorrectos)';
                swal({
                    title: "Error",
                    text: msg,
                    icon: "error",
                    buttons: {
                        confirm: {
                            text: "Ok",
                            value: true,
                            visible: true,
                            className: "btn btn-danger",
                            closeModal: true
                        }
                    }
                });

            } else {
                const jwt = response.token;
                localStorage.setItem('token', jwt);
                navigate('/home');
            }
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        iniciarSesion();
    }

    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="login-logo">
                    <Link to={"#"}><b>Tienda</b> WEB</Link>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Bienvenido, Inicie de sesion</p>
                        <form onSubmit={onSubmit}>
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