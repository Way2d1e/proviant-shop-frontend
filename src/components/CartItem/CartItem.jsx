import React, {useRef, useState} from 'react'
import Minus from '../../assets/images/minus.svg'
import Plus from '../../assets/images/plus.svg'
import productCart from '../../assets/images/cart.svg'

import styles from './CartItem.module.css'
import {productsService} from "../../services/productsService";

export const CartItem = (props) => {

    const {id, img, title, category, price, weight, typeMeasuring, currentPrice, deleteItem} = props

    const weightRef = useRef(0)

    const [priceProduct, setPriceProduct] = useState(+weight * price)

    function onChangeInput() {
        {
            weightRef.current.value <= 0 && '.'
                ? (weightRef.current.value = '')
                : ''
        }
        setPriceProduct(+weightRef.current.value * price)
    }

    function onInput() {
        if ((weightRef.current.value.charAt(0) === 0) && (weightRef.current.value.charAt(1) !== '.')) {
            weightRef.current.value = 0
        }
        setPriceProduct(+weightRef.current.value * price)
        // currentPrice = priceProduct
    }

    const decrementCounter = () => {
        if (weightRef.current.value >= 0.1) {
            weightRef.current.value = (+weightRef.current.value - 1).toFixed(1)
        } else {
            return weightRef.current.value
        }
    }

    const incrementCounter = () => {
        weightRef.current.value = (+weightRef.current.value + 1).toFixed(1)
    }

    return (
        <div className={styles.cartItem}>
            <div className={styles.productInfo}>
                <div className={styles.imgWrap}><img className={styles.imgExample} src={img} alt=""/></div>
                <div className={styles.cartDescription}>
                    <div className={styles.productName}>{title}</div>
                    <div className={styles.productCategory}>{category}</div>
                    <div className={styles.productPrice}>{price}₽ / {typeMeasuring}</div>
                </div>
            </div>
            <div className={styles.infoPrice}>
                <div className={styles.aboutWeight}>
                    <button onClick={() => decrementCounter()}>
                        <img src={Minus} alt=""/>
                    </button>
                    <input
                        className={styles.productWeight}
                        type="number"
                        ref={weightRef}
                        defaultValue={weight}
                        onChange={() =>
                            onChangeInput()
                        }
                        onInput={() =>
                            onInput()
                        }
                    />
                    <button onClick={() => incrementCounter()}>
                        <img src={Plus} alt=""/>
                    </button>
                </div>
                <div className={styles.aboutPrice}>
                    <div>{priceProduct}₽</div>
                    <button onClick={(e) => deleteItem(e, id)}><img src={productCart} alt=""/></button>
                </div>
            </div>
        </div>
    )
}