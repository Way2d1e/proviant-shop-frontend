import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainPage } from '../../pages/MainPage'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { CatalogPage } from '../../pages/CatalogPage'
import { Contacts } from '../../pages/Contacts'
import { Cart } from '../../pages/Cart'
import styles from './App.module.css';

export const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/catalog" element={<CatalogPage/>} />
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
            <Footer />
        </Router>
    )
}
