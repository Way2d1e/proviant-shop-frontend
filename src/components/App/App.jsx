import React from 'react'
import styles from './App.module.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from '../../pages/MainPage/MainPage'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { CatalogPage } from '../../pages/CatalogPage'

export const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/catalog" element={<CatalogPage />} />
            </Routes>
            <Footer />
        </Router>
    )
}
