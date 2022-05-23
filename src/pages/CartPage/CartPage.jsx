import React, {useEffect, useState} from 'react'
import {productsService} from '../../services/productsService'
import {CartItem} from '../../components/CartItem'
import {Loader} from '../../components/UI/Loader'
import {MakingOrder} from "../../components/MakingOrder";

import styles from './CartPage.module.css'

export const CartPage = () => {

    function makeOrder() {
        setIsActive(!isActive)
    }

    const [isActive, setIsActive] = useState(false)
    const [cartProducts, setCartProducts] = useState([])
    const [finalPrice, setFinalPrice] = useState()

    // {
    //     const products = JSON.parse(localStorage.getItem('products'))
    //     const orderItems = products.map(({id, weight, name, price, measuringType}) => {
    //         return { id, name, weight, price, measuringType }
    //     })
    //
    //     console.log(orders)
    //
    //     fetch(url, {
    //         method: "POST",
    //         headers: {
    //             "Content-type": "application/json"
    //         },
    //         body: JSON.stringify(orders)
    //     })
    // }

    useEffect(() => {
        productsService.getCartProducts().then((products) => {
            setCartProducts(products || [])
        })
    }, [])

    const deleteItem = (e, id) => {
        const products = cartProducts.filter((item, index) => {
            console.log(id)
            return item.id !== id
        })
        window.localStorage.setItem('products', JSON.stringify(products))
    }

    let result = cartProducts.reduce(
        (acc, product) => acc + product.price * product.weight, 0
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
                                deleteItem={deleteItem}
                            />
                        ))
                    ) : (
                        <Loader/>
                    )}
                </div>
                <div className={styles.finalCheck}>
                    <div className={styles.containerSum}>
                        <div className={styles.intermediate}>Сумма заказа:</div>
                        <div className={styles.intermediate}>{result} р</div>
                    </div>
                    <div className={styles.containerSum}>
                        <div className={styles.intermediate}>Вес заказа:</div>
                        <div className={styles.intermediate}>0.3кг</div>
                    </div>
                    <hr className={styles.line}/>
                    <div className={styles.containerSum}>
                        <div className={styles.total}>Итого к оплате</div>
                        <div className={styles.total}>
                            {result} ₽
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
}