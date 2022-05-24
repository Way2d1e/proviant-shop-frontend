import React, { useState } from 'react'
import Minus from '../../assets/images/minus.svg'
import Plus from '../../assets/images/plus.svg'
import productCart from '../../assets/images/cart.svg'
import { observer } from 'mobx-react-lite'
import products from '../../store/products'

import styles from './CartItem.module.css'
import {productsService} from "../../services/productsService";

export const CartItem = observer((props) => {
    const { id, img, title, price, weight, typeMeasuring } = props

    // console.log('weight', weight)
    // console.log('price', price)

    // const [productPrice, setProductPrice] = useState(weight * price)

    function onChangeInput(e) {
        weight !== 0 ? products.setProductWeight(id, Number(e.target.value)) : ''
    }

    const onInput = (e) => {
        weight === 0 ? products.setProductWeight(id, '') : products.setProductWeight(id, Number(e.target.value))
    }

    const decrementCounter = () => {
        weight === 0 ? products.setProductWeight(id, Number(e.target.value)) : ''
        if (typeMeasuring === 'кг') {
        weight >= 0.1
            ? products.setProductWeight(id, +weight - 0.5)
            : 0.1} else {
            products.setProductWeight(id, +weight - 1)
        }
    }

    const incrementCounter = () => {
        if (typeMeasuring === 'кг') {
        products.setProductWeight(id, +weight + 0.5)
        } else {
            products.setProductWeight(id, +weight + 1)
        }
    }

    return (
        <div className={styles.cartItem}>
            <div className={styles.productInfo}>
                <img className={styles.imgExample} src={img} alt="" />
                <div className={styles.cartDescription}>
                    <div className={styles.productName}>{title}</div>
                    <div className={styles.productCategory}></div>
                    <div className={styles.productPrice}>
                        {price}₽ / {typeMeasuring}
                    </div>
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
                        value={weight}
                        onChange={(e) => {
                            onChangeInput(e)
                        }}
                        onInput={(e) => {
                            onInput(e)
                        }}
                    />
                    <button onClick={() => incrementCounter()}>
                        <img src={Plus} alt="" />
                    </button>
                </div>
                <div className={styles.aboutPrice}>
                    <div>{price * weight}₽</div>
                    <button onClick={(e) => products.removeProduct(id)}>
                        <img src={productCart} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
})