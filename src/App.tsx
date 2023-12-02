import {Route,Routes} from 'react-router-dom'
import Login from './page/login/Login'
import SingUp from './page/singUp/SingUp'
import Home from './page/home/Home'
import Preferencias from './page/preferencias/Preferencias'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/singUp" element={<SingUp/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/preferencias" element = {<Preferencias/>}/>
    </Routes>
  )
}