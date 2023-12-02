import { Button } from "../../components/form/button/Button";

const Login = () => {

    const handleLogin = () => {
        console.log('login')
    }

    return (<div>
        <h1>hola desde login </h1>
        <Button text=" " onclick={handleLogin}/>
    </div>
    );
}

export default Login;