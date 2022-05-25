import React from 'react'
import Logo from '../../assets/images/Logo.svg'
import Search from '../../assets/images/search.svg'
import { Link, NavLink} from 'react-router-dom'
import { routes } from '../../router/router'

import styles from './Header.module.css'

export const Header = () => {
    return (
        <div className={styles.container}>
            <Link to="/">
                <img className={styles.logo} src={Logo} draggable={false} alt="logo" />
            </Link>
            <div className={styles.navBar}>
                <div className={styles.navBarContent}>
                    <div className={styles.searchContainer}>
                        <input
                            className={styles.inputSearch}
                            type="search"
                            placeholder="Поиск..."
                        />
                        <button className={styles.btnSearch}>
                            <img src={Search} alt="" />
                        </button>
                    </div>
                    <div className={styles.navRef}>
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