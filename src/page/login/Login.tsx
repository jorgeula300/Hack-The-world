const Login = () => {
    return (<div className="login">
        <h1>Login</h1>
        <form action="" className="formulario" method="post">
            <input type="text" placeholder="correo Electronico" name="correo" id="correo" required></input>
            <input type="password" placeholder="contraseña" name="contrasena" id="contrasena" required></input>
            <button type="submit">Entrar</button>
        </form>
    </div>);
}

export default Login;