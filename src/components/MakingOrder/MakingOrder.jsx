import React, { useState } from 'react'
import styles from './MakingOrder.module.css'
import postOrder from '../../db/post.json'
import axios from "axios";

export const MakingOrder = (props) => {
    const { closeModal } = props

    // const postRequest = (e) => {
    //     e.preventDefault()
    //     console.log(postOrder)
    //     axios.post("http://26.85.60.200:8080/order", postOrder).then(Response =>{
    //         console.log(Response)
    //     }).catch(error =>{
    //         console.log(error)
    //     })
    //
    // }

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
                <div className={styles.wrapOrder}>
                    <p>Данные покупателя</p>
                    <p>Информация о заказе</p>
                </div>
                <hr className={styles.line} />
                <div className={styles.wrapOrder}>
                    <div className={styles.infoBuyer}>
                        <input placeholder="Иванов" type="text" />
                        <input placeholder="Иван" type="text" />
                        <input placeholder="Иванович" type="text" />
                        <input placeholder="ivan@mail.ru" type="email" />
                        <input placeholder="81234567890" type="tel" />
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
                                onClick={(e) => postRequest(e)}
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
                {/*<div className={styles.wrapApproveOrder}>*/}
                {/*    <div>*/}
                {/*        <div className={styles.approveTitle}>*/}
                {/*            Спасибо за заказ*/}
                {/*        </div>*/}
                {/*        <div className={styles.approveBody}>*/}
                {/*            <div className={styles.approveOrder}>*/}
                {/*                Номер заказа*/}
                {/*            </div>*/}
                {/*            <div className={styles.approveOrderNumber}>*/}
                {/*                #123*/}
                {/*            </div>*/}
                {/*            <div>*/}
                {/*                Ожидайте сообщения на почте и предъявите его*/}
                {/*                продавцу.*/}
                {/*            </div>*/}
                {/*            <div>Вскоре с вами свяжется наш оператор</div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <button className={styles.approveButton}>Ок</button>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}
