import React, {useRef} from 'react'
import Minus from '../../assets/images/minus.svg'
import Plus from '../../assets/images/plus.svg'
import productCart from '../../assets/images/white-cart.svg'
import {productsService} from "../../services/productsService";

import styles from './CategoryItem.module.css'

export const CategoryItem = (props) => {
    const {id, img, title, price, currentPrice, typeMeasuring} = props

    const weightRef = useRef(0)

    let priceProduct = (+weightRef.current.value)

    // function addProductToCart() {
    //     if (typeMeasuring === 'шт') {
    //         currentPrice = price * (+weightRef.current.value).toFixed(0)
    //     } else {
    //         currentPrice = price * +weightRef
    //     }
    //
    // }

    const decrementCounter = () => {
        if (weightRef.current.value >= 0.5) {
            weightRef.current.value = (+weightRef.current.value - 1).toFixed(0)
        } else {
            return weightRef.current.value
        }
    }



    const incrementCounter = () => {
        weightRef.current.value = (+weightRef.current.value + 1).toFixed(0)
    }

    let interval

    return (
        <div className={styles.categoryItem}>
            <img className={styles.productImage} src={img} />
            <div className={styles.productName}>{title}</div>
            <div className={styles.productPrice}>{price} ₽ / {typeMeasuring}</div>
            <div className={styles.aboutWeight}>
                <button onClick={() => decrementCounter()}>
                    <img src={Minus} alt=""/>
                </button>
                <input
                    className={styles.productWeight}
                    type="number"
                    ref={weightRef}
                    onChange={() => {
                        // weightRef.current.value < 0
                        //     ? (weightRef.current.value = 0)
                        //     : ''

                    }}
                    onInput={() => {
                        if( (weightRef.current.value.charAt(0) === 0) && (weightRef.current.value.charAt(1) !== '.')) {
                            weightRef.current.value = 0
                        }
                    }}
                />
                <button onClick={() => incrementCounter()} onMouseDown={() => {
                    interval = setInterval(() => incrementCounter(), 200)
                }}
                        onMouseUp={() => clearInterval(interval)}
                >
                    <img src={Plus} alt=""/>
                </button>
            </div>
            <div className={styles.aboutPrice}>
                <button
                    onClick={() =>
                        productsService.addProductToCard({
                            id,
                            img,
                            title,
                            price,
                            weight: weightRef.current.value,
                            typeMeasuring,
                            currentPrice,
                        })
                    }
                >
                    <span>
                         В корзину
                    </span>
                    <img src={productCart} alt="cart"/>
                </button>
            </div>
        </div>
    )
}
