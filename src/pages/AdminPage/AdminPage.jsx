import React from 'react';
import styles from './AdminPage.module.css'

export const AdminPage = () => {
    return (
        <div className={styles.admin}>
            <div className={styles.adminPanel}>
                <div className={styles.adminTitle}>Админ панель</div>
                <div className={styles.adminData}>
                    <div>
                        <p>Введите логин:</p>
                        <input type="text"/>
                    </div>
                    <div>
                        <p>Введите пароль:</p>
                        <input type="password"/>
                    </div>
                </div>
                <button className={styles.btnAuth}>Войти</button>
            </div>
        </div>);
};