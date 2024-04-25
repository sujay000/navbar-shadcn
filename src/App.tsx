import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Nabar'
import Home from './components/Home'

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route element={<Home />} path="/home"></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
