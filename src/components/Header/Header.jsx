import React from 'react'
import Logo from '../../assets/Images/Logo.svg'
import { ReactComponent as Cart } from '../../assets/Images/shopCart.svg'
import Search from '../../assets/Images/search.svg'
import { NavLink } from 'react-router-dom'

import styles from './Header.module.css'

export const Header = () => {
    return (
        <div className={styles.container}>
            <img className={styles.logo} src={Logo} />
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
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? styles.navLinkActive : styles.navLink
                            }
                        >
                            Главная
                        </NavLink>
                        <NavLink
                            to="/catalog"
                            className={({ isActive }) =>
                                isActive ? styles.navLinkActive : styles.navLink
                            }
                        >
                            Каталог
                        </NavLink>
                        <NavLink
                            to="/contacts"
                            className={({ isActive }) =>
                                isActive ? styles.navLinkActive : styles.navLink
                            }
                        >
                            Контакты
                        </NavLink>
                    </div>
                    <NavLink
                        to="/cart"
                        className={({ isActive }) =>
                            isActive ? styles.navLinkActive : styles.navLink
                        }
                    >
                        <Cart />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

