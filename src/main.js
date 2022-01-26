
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Encryption from './Encryption'
import Hack from './Encryption_hack'

const Main =  () =>
{
    return(<div>
   
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="Encryption" element={<Encryption/>}/>
          <Route path="Hack" element={<Hack/>}/>
      </Routes>

    </div>)
}

export default Main