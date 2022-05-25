import React, { useRef } from 'react'
import Minus from '../../assets/images/minus.svg'
import Plus from '../../assets/images/plus.svg'
import productCart from '../../assets/images/white-cart.svg'
import { productsService } from '../../services/productsService'
import { ToastContainer, toast } from 'react-toastify'
import { injectStyle } from 'react-toastify/dist/inject-style'

import styles from './CategoryItem.module.css'
import products from '../../store/products'

export const CategoryItem = (props) => {
    const {
        id,
        img,
        title,
        price,
        weight,
        currentPrice,
        defaultValue,
        typeMeasuring,
    } = props

    if (typeof window !== 'undefined') {
        injectStyle()
    }

    const weightRef = useRef(0)

    let priceProduct = +weightRef.current.value

    const decrementCounter = () => {
        if (typeMeasuring === 'кг' && weightRef.current.value >= 0.1) {
            weightRef.current.value = (+weightRef.current.value - 0.5).toFixed(
                1
            )
        } else {
            if (weightRef.current.value >= 1) {
                weightRef.current.value = (
                    +weightRef.current.value - 1
                ).toFixed(1)
            } else {
                return weightRef.current.value
            }
        }
    }

    const incrementCounter = () => {
        typeMeasuring === 'кг'
            ? (weightRef.current.value = (
                  +weightRef.current.value + 0.5
              ).toFixed(1))
            : (weightRef.current.value = (+weightRef.current.value + 1).toFixed(
                  1
              ))
    }

    const onInput = (e) => {
        weight === 0
            ? products.setProductWeight(id, '')
            : products.setProductWeight(id, Number(e.target.value))
    }

    function onChangeInput(e) {
        weight !== 0
            ? products.setProductWeight(id, Number(e.target.value))
            : ''
    }

    return (
        <div className={styles.categoryItem}>
            <div className={styles.productImageBack}>
                <img className={styles.productImage} src={img} />
            </div>
            <div className={styles.productName}>{title}</div>
            <div className={styles.productPrice}>
                {price} ₽ / {typeMeasuring}
            </div>
            <div className={styles.aboutWeight}>
                <button onClick={() => decrementCounter()}>
                    <img src={Minus} alt="" />
                </button>
                <input
                    className={styles.productWeight}
                    type="number"
                    ref={weightRef}
                    value={weight}
                    defaultValue={defaultValue}
                    onInput={(e) => {
                        onInput(e)
                    }}
                    onChange={(e) => {
                        onChangeInput(e)
                    }}
                />
                <button onClick={() => incrementCounter()}>
                    <img src={Plus} alt="" />
                </button>
            </div>
            <div className={styles.aboutPrice}>
                <button
                    onClick={() => {
                        products.addProduct({
                            id,
                            img,
                            title,
                            price,
                            defaultValue,
                            weight: weightRef.current.value,
                            typeMeasuring,
                            currentPrice,
                        })
                        toast('Товар успешно добавлен в корзину!', {
                            hideProgressBar: true,
                            autoClose: 800
                        })
                    }}
                >
                    <span>В корзину</span>
                    <img src={productCart} alt="cart" />
                </button>
            </div>
        </div>
    )
}