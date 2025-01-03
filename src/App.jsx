import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ShopPage from "./pages/ShopPage"
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
      </Routes>
    </>
  )
}

export default App
