import React from 'react'
import styles from './SuccessfulOrder.module.css'
import { Loader } from '../UI/Loader'

export const SuccessfulOrder = (props) => {
    const { orderNumber, modalOrder } = props

    return (
        <div>
            {orderNumber ? (
                <div
                    className={
                        modalOrder ? styles.hidden : styles.wrapApproveOrder
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
                                Ожидайте сообщения на почте и предъявите его
                                продавцу.
                            </div>
                            <div className={styles.orderTips}>
                                Вскоре с вами свяжется наш оператор
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className={styles.approveButton}>Ок</button>
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
    )
}