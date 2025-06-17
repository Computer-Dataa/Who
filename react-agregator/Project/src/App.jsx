import { BrowserRouter, Routes, Route } from 'react-router';

import './App.css'

import Description from './Pages/description';
import StartPage from './Pages/StartPage'
import TestPage from './Pages/TestPage';
import Library from './Pages/library';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StartPage/>}/>
        <Route path='/description' element={<Description/>}/>
        <Route path='/testpage' element={<TestPage/>}/>
        <Route path='/library' element={<Library/>}/>
        <Route path='/testpage/:id' element={<TestPage/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;