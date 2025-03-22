import { BrowserRouter, Routes, Route } from 'react-router';

import './App.css'

import Description from './Pages/description';
import StartPage from './Pages/StartPage'
import TestPage from './Pages/TestPage';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StartPage/>}/>
        <Route path='/description' element={<Description/>}/>
        <Route path='/testpage' element={<TestPage/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;