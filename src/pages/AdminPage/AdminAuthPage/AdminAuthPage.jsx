import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { authorizationService } from '../../../services/authorizationService'

import styles from './AdminAuthPage.module.css'

export const AdminAuthPage = () => {
    const [credits, setCredits] = useState({
        login: '',
        password: '',
    })

    const authAdmin = (e) => {
        e.preventDefault()
        authorizationService.authAdm(credits)
    }

    const handleChange = (e) => {
        e.target.name === 'login'
            ? setCredits({ ...credits, login: e.target.value })
            : setCredits({ ...credits, password: e.target.value })
    }

    return (
        <div className={styles.admin}>
            <div className={styles.adminPanel}>
                <div className={styles.adminTitle}>Админ панель</div>
                <hr className={styles.line} />
                <div className={styles.adminData}>
                    <form action="" onSubmit={(e) => authAdmin(e)}>
                        <div>
                            <p>Введите логин:</p>
                            <input
                                type="text"
                                name="login"
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div>
                            <p>Введите пароль:</p>
                            <input
                                type="password"
                                name="password"
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        {/*<Link to={'/admin-panel'}>*/}
                        {/*    */}
                        {/*</Link>*/}
                        <button type={'submit'} className={styles.authBtn}>
                            Войти
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}