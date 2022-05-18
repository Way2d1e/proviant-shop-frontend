import React, {useEffect, useRef, useState} from 'react'
import styles from '../CategoryItem/CategoryItem.module.css'
import Minus from '../../assets/images/minus.svg'
import Plus from '../../assets/images/plus.svg'
import productCart from '../../assets/images/white-cart.svg'
import ProductService from "../../services/productsService";

export const CategoryItem = (props) => {
    const {id, name, price} = props

    const inputRef = useRef(0)

    const [categoryItems, setCategoryItems] = useState(null)

    useEffect(() => {
        ProductService.getCategories().then((data) =>
            setCategoryItems(data)
        )
    }, [])

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
        <div className={styles.categoryItem}>
            <div className={styles.imgExample}>тут будет имг</div>
            <div className={styles.productName}>{name}</div>
            <div className={styles.productPrice}>{price} ₽ / кг</div>
            <div className={styles.aboutWeight}>
                <button onClick={() => decrementCounter()}>
                    <img src={Minus} alt=""/>
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
                    <img src={Plus} alt=""/>
                </button>
            </div>
            <div className={styles.aboutPrice}>
                <button>В корзину <img src={productCart} alt="cart"/></button>
            </div>
        </div>
    )
}