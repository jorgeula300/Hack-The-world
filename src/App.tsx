import {Route,Routes} from 'react-router-dom'
import Login from './page/Login'
import SingUp from './page/SingUp'
import Home from './page/Home'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/singUp" element={<SingUp/>}/>
      <Route path="/home" element={<Home/>}/>
    
    </Routes>
  )
}