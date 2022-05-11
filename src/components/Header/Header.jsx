import React from 'react'
import styles from './Header.module.css'
import Logo from '../../assets/Images/Logo.svg'
import Cart from '../../assets/Images/shopCart.svg'
import Search from '../../assets/Images/search.svg'
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <div className={styles.container}>
            <p><img src={Logo}  alt="logo"/></p>
            <div className={styles.NavBar}>
                <div className={styles.NavBarContent}>
                    <div className={styles.SearchContainer}>
                        <input
                            className={styles.InputSearch}
                            type="search"
                        />
                        <button className={styles.BtnSearch}>
                            <img src={Search} alt="" />
                        </button>
                    </div>
                    <div className={styles.NavRef}>
                        <Link to='/'>
                            Главная
                        </Link>
                        <Link to='/catalog'>
                            Каталог
                        </Link>
                        <Link to='/contacts'>
                            Контакты
                        </Link>
                    </div>
                    <img className={styles.BtnCart} src={Cart} alt="" />
                </div>
            </div>
        </div>
    )
}

