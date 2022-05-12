import React from 'react'
import Logo from '../../assets/images/Logo.svg'
import Search from '../../assets/images/search.svg'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import { routes } from '../../router/router'
import styles from './Header.module.css'

export const Header = () => {
    return (
        <div className={styles.container}>
            <img className={styles.logo} src={Logo} draggable={false} />
            <div className={styles.NavBar}>
                <div className={styles.NavBarContent}>
                    <div className={styles.SearchContainer}>
                        <input
                            className={styles.InputSearch}
                            type="search"
                            placeholder="Поиск..."
                        />
                        <button className={styles.BtnSearch}>
                            <img src={Search} alt="" />
                        </button>
                    </div>
                    <div className={styles.NavRef}>
                        {routes.map((route) => (
                            <NavLink
                                to={route.path}
                                className={({ isActive }) =>
                                    isActive
                                        ? styles.navLinkActive
                                        : styles.navLink
                                }
                                key={route.path}
                            >
                                {route.title}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}