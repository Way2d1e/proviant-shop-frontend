import React, { useRef, useState } from 'react'
import { productsService } from '../../services/productsService'
import { Loader } from '../UI/Loader'

import styles from './MakingOrder.module.css'

export const MakingOrder = (props) => {
    const { closeModal } = props

    const orderRef = useRef(null)

    const [orderNumber, setOrderNumber] = useState(null)

    const createOrder = (e) => {
        e.preventDefault()
        setModalOrder(!modalOrder)
        const orderItems = productsService.createItemOrders()
        const formData = new FormData(orderRef.current)
        let client = {}
        formData.forEach((item, index) => {
            client = { ...client, [index]: item }
        })
        console.log(client)

        productsService
            .createOrder({
                orderItems,
                client,
            })
            .then((res) => {
                setOrderNumber(res)
            })
    }

    const [modalOrder, setModalOrder] = useState(true)

    return (
        <div
            className={styles.fade}
            onClick={() => {
                closeModal(false)
            }}
        >
            <div
                className={styles.container}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={modalOrder ? null : styles.hidden}>
                    <div
                        className={
                            modalOrder ? styles.wrapOrder : styles.hidden
                        }
                    >
                        <p>Данные покупателя</p>
                        <p>Информация о заказе</p>
                    </div>
                    <hr className={styles.line} />
                    <div className={styles.wrapOrder}>
                        <div className={styles.infoBuyer}>
                            <form ref={orderRef} className={styles.formOrder}>
                                <input
                                    placeholder="Иванов"
                                    type="text"
                                    name="surname"
                                />
                                <input
                                    placeholder="Иван"
                                    name="name"
                                    type="text"
                                />
                                <input
                                    placeholder="Иванович"
                                    name="middleName"
                                    type="text"
                                />
                                <input
                                    placeholder="ivan@mail.ru"
                                    name="email"
                                    type="email"
                                />
                                <input
                                    placeholder="81234567890"
                                    name="phoneNumber"
                                    type="text"
                                    maxLength={9}
                                    pattern="[+-]?\d+(?:[.,]\d+)?"
                                />
                            </form>
                        </div>
                        <div className={styles.orderInfo}>
                            <div className={styles.textOrderInfo}>
                                При нажатии на кнопку
                                <span
                                    style={{
                                        color: '#46B14B',
                                        textDecoration: 'underline',
                                    }}
                                >
                                    Подтвердить заказ
                                </span>
                                на указанную Вами почту прийдет чек.В течении 24
                                часов нужно будет прийти в магазин с этим чеком,
                                оплатить и забрать заказ.Через 24 часа заказ
                                считается недействительным. Оплата производится
                                любым удобным для Вас способом.
                            </div>
                            <div className={styles.btnOrder}>
                                <button
                                    className={styles.btnConfirm}
                                    onClick={(e) => createOrder(e)}
                                >
                                    Подтвердить заказ
                                </button>
                                <button
                                    className={styles.btnCancel}
                                    onClick={() => {
                                        closeModal(false)
                                    }}
                                >
                                    Отмена
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={
                        modalOrder ? styles.hidden : styles.blockApproveOrder
                    }
                >
                    {orderNumber ? (
                        <div
                            className={
                                modalOrder
                                    ? styles.hidden
                                    : styles.wrapApproveOrder
                            }
                        >
                            <div>
                                <div className={styles.approveTitle}>
                                    Спасибо за заказ
                                </div>
                                <div className={styles.approveBody}>
                                    <div className={styles.approveOrder}>
                                        Номер заказа
                                    </div>
                                    <div className={styles.approveOrderNumber}>
                                        #{orderNumber}
                                    </div>
                                    <div className={styles.orderTips}>
                                        Ожидайте сообщения на почте и предъявите
                                        его продавцу.
                                    </div>
                                    <div className={styles.orderTips}>
                                        Вскоре с вами свяжется наш оператор
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button
                                    onClick={() => {
                                        closeModal(false)
                                    }}
                                    className={styles.approveButton}
                                >
                                    Ок
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className={styles.loaderTip}>
                                Оформляем заказ, ожидайте...
                            </div>
                            <Loader />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
