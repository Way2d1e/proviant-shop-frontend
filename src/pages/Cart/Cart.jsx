import React from 'react'
import styles from './Cart.module.css'
import Minus from '../../assets/Images/minus.svg'
import Plus from '../../assets/Images/plus.svg'
import ProductCart from '../../assets/Images/cart.svg?component'

const Cart = () => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>Корзина</p>
            <div className={styles.ContainerCart}>
                <div className={styles.CartItems}>
                    <div className={styles.CartItem}>
                        <div className={styles.productInfo}>
                            <div className={styles.imgExample}></div>
                            <div className={styles.CartDescription}>
                                <p className={styles.ProductName}>Миндаль</p>
                                <p className={styles.ProductCategory}>Орехи</p>
                                <p className={styles.ProductPrice}>
                                    350.70 ₽ / кг
                                </p>
                            </div>
                        </div>
                        <div className={styles.InfoPrice}>
                            <div className={styles.AboutWeight}>
                                <button>
                                    <img src={Minus} alt="" />
                                </button>
                                <input className={styles.productWeight} type="number" />
                                <button>
                                    <img src={Plus} alt="" />
                                </button>
                            </div>
                            <div className={styles.AboutPrice}>
                                <p>79.8₽</p>
                                <img src={ProductCart} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.FinalCheck}>
                    <p className={styles.promocode}>ЕСТЬ ПРОМОКОД?</p>
                    <input
                        className={styles.PromocodeInput}
                        type="text"
                        placeholder="Введите промокод"
                    />
                    <div className={styles.ContainerSumm}>
                        <p className={styles.intermediate}>Сумма заказа:</p>
                        <p className={styles.intermediate}>123р</p>
                    </div>
                    <div className={styles.ContainerSumm}>
                        <p className={styles.intermediate}>Вес заказа:</p>
                        <p className={styles.intermediate}>0.3кг</p>
                    </div>
                    <div className={styles.ContainerSumm}>
                        <p className={styles.total}>Итого к оплате</p>
                        <p className={styles.total}>123р</p>
                    </div>
                    <div className={styles.ContainerButton}>
                        <button>Оформление заказа</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart