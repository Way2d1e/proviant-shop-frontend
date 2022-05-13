import React from 'react'
import styles from './CartItem.module.css'
import Minus from '../../assets/images/minus.svg'
import Plus from '../../assets/images/plus.svg'
import productCart from '../../assets/images/cart.svg'

export const CartItem = () => {
    return (
        <div className={styles.cartItem}>
            <div className={styles.productInfo}>
                <div className={styles.imgExample}></div>
                <div className={styles.cartDescription}>
                    <div className={styles.productName}>Миндаль</div>
                    <div className={styles.productCategory}>Орехи</div>
                    <div className={styles.productPrice}>350.70 ₽ / кг</div>
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
    )
}