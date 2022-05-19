import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { routes } from '../../router/router'

import styles from './App.module.css'

export const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                {routes.map((route) => (
                    <Route
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />
                ))}
            </Routes>
            <Footer />
        </Router>
    )
}