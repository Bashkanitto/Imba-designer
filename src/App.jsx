import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import NotFoundPage from './components/NotFoundPage'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
