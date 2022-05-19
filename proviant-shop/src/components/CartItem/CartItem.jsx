import React, { useRef } from 'react'
import Minus from '../../assets/images/minus.svg'
import Plus from '../../assets/images/plus.svg'
import productCart from '../../assets/images/cart.svg'

import styles from './CartItem.module.css'

export const CartItem = (props) => {

    const { id, img, title, category, price, deleteItem } = props

    const inputRef = useRef(0)

    const decrementCounter = () => {
        if (inputRef.current.value >= 0.1) {
            inputRef.current.value = (+inputRef.current.value - 0.1).toFixed(1)
        } else {
            return inputRef.current.value
        }
    }

    const incrementCounter = () => {
        inputRef.current.value = (+inputRef.current.value + 0.1).toFixed(1)
    }

    return (
        <div className={styles.cartItem}>
            <div className={styles.productInfo}>
                <div className={styles.imgExample}>{img}</div>
                <div className={styles.cartDescription}>
                    <div className={styles.productName}>{title}</div>
                    <div className={styles.productCategory}>{category}</div>
                    //TODO единицы измерения получать из пропсов
                    <div className={styles.productPrice}>{price}₽ / кг</div>
                </div>
            </div>
            <div className={styles.infoPrice}>
                <div className={styles.aboutWeight}>
                    <button onClick={() => decrementCounter()}>
                        <img src={Minus} alt="" />
                    </button>
                    <input
                        className={styles.productWeight}
                        type="number"
                        ref={inputRef}
                        onChange={() => {
                            inputRef.current.value <= 0
                                ? (inputRef.current.value = '')
                                : ''
                        }}
                    />
                    <button onClick={() => incrementCounter()}>
                        <img src={Plus} alt="" />
                    </button>
                </div>
                <div className={styles.aboutPrice}>
                    //TODO цену получать из пропсов
                    <div>79.8₽</div>
                    <button onClick={(e) => deleteItem(e, id)}><img src={productCart} alt="" /></button>
                </div>
            </div>
        </div>
    )
}