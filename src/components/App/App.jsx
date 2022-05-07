import React from 'react'
import styles from './App.module.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from '../../pages/MainPage/MainPage'
import { Header } from '../Header'
import { Footer } from '../Footer'
import Catalog from '../../pages/Catalog/Catalog'

export const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/catalog" element={<Catalog />} />
            </Routes>
            <Footer />
        </Router>
    )
}
