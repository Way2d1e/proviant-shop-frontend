import React, { useEffect, useState } from 'react'
import styles from './CartPage.module.css'
import { CartItem } from '../../components/CartItem'
import productsService from '../../services/productsService'
import { Loader } from '../../components/UI/Loader'

export const CartPage = () => {
    const [cartProducts, setCartProducts ]  = useState(null)

    useEffect(() => {
        // productsService.setCartProduct()
        productsService.getCartProducts().then((products) => {
            setCartProducts(products)
        })
    })

    return (
        <div className={styles.container}>
            <div className={styles.title}>Корзина</div>
            <div className={styles.containerCart}>
                <div className={styles.cartItems}>
                    {cartProducts ? (
                        cartProducts.map((product) => (
                            <CartItem
                                name={product.name}
                                price={product.price}
                                key={product.id}
                            />
                        ))
                    ) : (
                        <Loader />
                    )}
                </div>
                <div className={styles.finalCheck}>
                    <div className={styles.promoCode}>ЕСТЬ ПРОМОКОД?</div>
                    <input
                        className={styles.promoCodeInput}
                        type="text"
                        placeholder="Введите промокод"
                    />
                    <hr className={styles.line} />
                    <div className={styles.containerSum}>
                        <div className={styles.intermediate}>Сумма заказа:</div>
                        <div className={styles.intermediate}>123р</div>
                    </div>
                    <div className={styles.containerSum}>
                        <div className={styles.intermediate}>Вес заказа:</div>
                        <div className={styles.intermediate}>0.3кг</div>
                    </div>
                    <hr className={styles.line} />
                    <div className={styles.containerSum}>
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