import React, {useEffect, useState} from 'react'
import {productsService} from '../../services/productsService'
import {CartItem} from '../../components/CartItem'
import {Loader} from '../../components/UI/Loader'
import {MakingOrder} from "../../components/MakingOrder";
import products from "../../store/products";
import {observer} from "mobx-react-lite";

import styles from './CartPage.module.css'

export const CartPage = observer(() => {

    function makeOrder() {
        setIsActive(!isActive)
    }

    const [isActive, setIsActive] = useState(false)
    const [cartProducts, setCartProducts] = useState([])
    useEffect(() => {
        const cartItems = products.getProducts()
        setCartProducts(cartItems)
    }, [products.products])

    const deleteItem = (e, id) => {
        const products = cartProducts.filter((product, index) => {
            return product.id !== id
        })
        setCartProducts(products)
    }

    let finalPrice = cartProducts.reduce(
        (priceProduct, product) => priceProduct + product.price * product.weight, 0,
    )

    let finalWeight = cartProducts.reduce(
        (priceProduct, product) => priceProduct + +product.weight, 0
    )

    return (
        <div className={isActive ? styles.containerNoScroll : styles.container}>
            <div className={styles.title}>Корзина</div>
            <div className={styles.containerCart}>
                <div className={styles.cartItems}>
                    {cartProducts ? (
                        cartProducts.map((product) => (
                            <CartItem
                                id={product.id}
                                img={product.img}
                                title={product.title}
                                weight={product.weight}
                                price={product.price}
                                currentPrice={product.currentPrice}
                                typeMeasuring={product.typeMeasuring}
                                key={product.id}
                            />
                        ))
                    ) : (
                        <Loader/>
                    )}
                </div>
                <div className={styles.finalCheck}>
                    <div className={styles.containerSum}>
                        <div className={styles.intermediate}>Сумма заказа:</div>
                        <div className={styles.intermediate}>{finalPrice} р</div>
                    </div>
                    <div className={styles.containerSum}>
                        <div className={styles.intermediate}>Вес заказа:</div>
                        <div className={styles.intermediate}>{finalWeight} кг</div>
                    </div>
                    <hr className={styles.line}/>
                    <div className={styles.containerSum}>
                        <div className={styles.total}>Итого к оплате</div>
                        <div className={styles.total}>
                            {finalPrice} ₽
                        </div>
                    </div>
                    <button className={styles.btnMakeOrder} onClick={() => makeOrder()}>
                        Оформление заказа
                    </button>
                </div>
            </div>
            {isActive ? <MakingOrder  closeModal={setIsActive}/> : null}

        </div>
    )
})