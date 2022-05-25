import React, { useRef, useState } from 'react'
import { productsService } from '../../services/productsService'
import { SuccessfulOrder } from '../SuccessfulOrder'
import inputInfo from './inputs.json'

import styles from './MakingOrder.module.css'

export const MakingOrder = (props) => {
    const { closeModal } = props

    const orderRef = useRef(null)

    const [orderNumber, setOrderNumber] = useState(null)

    const [focused, setFocused] = useState(false)

    const [modalOrder, setModalOrder] = useState(true)

    const [client, setClients] = useState({
        surname: '',
        name: '',
        middleName: '',
        email: '',
        phoneNumber: '',
    })

    const onChange = (e) => {
        setClients({ ...client, [e.target.name]: e.target.value })
    }

    const createOrder = (e) => {
        e.preventDefault()
        let invalid = document.querySelectorAll('input:invalid').length
        if (invalid === 0) {
            setModalOrder(!modalOrder)
            const orderItems = productsService.createItemOrders()

            productsService
                .createOrder({
                    orderItems,
                    client,
                })
                .then((res) => {
                    setOrderNumber(res)
                })
        }
    }

    const handleFocus = (e) => {
        setFocused(true)
    }

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
                                {inputInfo.map((input) => (
                                    <div key={input.id}>
                                        <input
                                            name={input.name}
                                            type={input.type}
                                            placeholder={input.placeholder}
                                            pattern={input.pattern}
                                            required={input.required}
                                            value={client[input.name]}
                                            onChange={onChange}
                                            onBlur={handleFocus}
                                            focused={focused.toString()}
                                        />
                                        <span className={styles.errorMessage}>
                                            {input.errorMessage}
                                        </span>
                                    </div>
                                ))}
                            </form>
                        </div>
                        <div className={styles.orderInfo}>
                            <div className={styles.textOrderInfo}>
                                При нажатии на кнопку
                                <strong>Подтвердить заказ</strong>
                                на указанную Вами почту прийдет чек.В течении 24
                                часов нужно будет прийти в магазин с этим чеком,
                                оплатить и забрать заказ. Через 24 часа заказ
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
                    <SuccessfulOrder
                        orderNumber={orderNumber}
                        modalOrder={modalOrder}
                    />
                    <div className={
                             modalOrder ? styles.hidden : null
                         }>
                        <button
                            onClick={() => {
                                closeModal(false)
                            }}
                            className={styles.approveButtonNone}
                        >
                            Ок
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}