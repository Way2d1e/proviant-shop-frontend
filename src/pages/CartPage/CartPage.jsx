import React from 'react'
import styles from './CartPage.module.css'
import { CartItem } from '../../components/CartItem'

export const CartPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Корзина</div>
            <div className={styles.containerCart}>
                <div className={styles.cartItems}>
                    <CartItem/>
                </div>
                <div className={styles.finalCheck}>
                    <div className={styles.promocode}>ЕСТЬ ПРОМОКОД?</div>
                    <input
                        className={styles.promocodeInput}
                        type="text"
                        placeholder="Введите промокод"
                    />
                    <hr className={styles.line}/>
                    <div className={styles.containerSumm}>
                        <div className={styles.intermediate}>Сумма заказа:</div>
                        <div className={styles.intermediate}>123р</div>
                    </div>
                    <div className={styles.containerSumm}>
                        <div className={styles.intermediate}>Вес заказа:</div>
                        <div className={styles.intermediate}>0.3кг</div>
                    </div>
                    <hr className={styles.line}/>
                    <div className={styles.containerSumm}>
                        <div className={styles.total}>Итого к оплате</div>
                        <div className={styles.total}>123р</div>
                    </div>
                    <div className={styles.containerButton}>
                        <button>Оформление заказа</button>
                    </div>
                </div>
            </div>
        </div>
    )
}