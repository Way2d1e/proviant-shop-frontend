import React from 'react'
import styles from './Cart.module.css'
import Minus from '../../assets/Images/minus.svg'
import Plus from '../../assets/Images/plus.svg'
import productCart from '../../assets/Images/cart.svg?component'

export const Cart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Корзина</div>
            <div className={styles.containerCart}>
                <div className={styles.cartItems}>
                    <div className={styles.cartItem}>
                        <div className={styles.productInfo}>
                            <div className={styles.imgExample}></div>
                            <div className={styles.cartDescription}>
                                <div className={styles.productName}>Миндаль</div>
                                <div className={styles.productCategory}>Орехи</div>
                                <div className={styles.productPrice}>
                                    350.70 ₽ / кг
                                </div>
                            </div>
                        </div>
                        <div className={styles.infoPrice}>
                            <div className={styles.aboutWeight}>
                                <button>
                                    <img src={Minus} alt="" />
                                </button>
                                <input className={styles.productWeight} type="number" />
                                <button>
                                    <img src={Plus} alt="" />
                                </button>
                            </div>
                            <div className={styles.aboutPrice}>
                                <div>79.8₽</div>
                                <img src={productCart} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.finalCheck}>
                    <p className={styles.promocode}>ЕСТЬ ПРОМОКОД?</p>
                    <input
                        className={styles.promocodeInput}
                        type="text"
                        placeholder="Введите промокод"
                    />
                    <div className={styles.containerSumm}>
                        <p className={styles.intermediate}>Сумма заказа:</p>
                        <p className={styles.intermediate}>123р</p>
                    </div>
                    <div className={styles.containerSumm}>
                        <p className={styles.intermediate}>Вес заказа:</p>
                        <p className={styles.intermediate}>0.3кг</p>
                    </div>
                    <div className={styles.containerSumm}>
                        <p className={styles.total}>Итого к оплате</p>
                        <p className={styles.total}>123р</p>
                    </div>
                    <div className={styles.containerButton}>
                        <button>Оформление заказа</button>
                    </div>
                </div>
            </div>
        </div>
    )
}