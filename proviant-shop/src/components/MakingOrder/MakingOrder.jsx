import React, {useState} from 'react';
import styles from './MakingOrder.module.css'

export const MakingOrder = (props) => {

    const {closeModal} = props

    return (
        <div className={styles.fade} onClick={() => {closeModal(false)}}>
            <div className={styles.container} onClick={(e) => e.stopPropagation()}>
                <div className={styles.wrapOrder}>
                    <p>Данные покупателя</p>
                    <p>Информация о заказе</p>
                </div>
                <hr className={styles.line}/>
                <div className={styles.wrapOrder}>
                    <div className={styles.infoBuyer}>
                        <input placeholder={"Иванов"} type="text"/>
                        <input placeholder={"Иван"} type="text"/>
                        <input placeholder={"Иванович"} type="text"/>
                        <input placeholder={"ivan@mail.ru"} type="email"/>
                        <input placeholder={"81234567890"} type="tel"/>
                    </div>
                    <div className={styles.orderInfo}>
                        <p className={styles.textOrderInfo}>
                            При нажатии на кнопку <span style={{color: "#46B14B", textDecoration: "underline"}}>Подтвердить заказ</span> на
                            указанную Вами почту прийдет чек.В течении 24 часов
                            нужно будет прийти в магазин с этим чеком, оплатить и забрать заказ.Через 24 часа заказ
                            считается недействительным. Оплата производится любым удобным для Вас способом.
                        </p>
                        <div className={styles.btnOrder}>
                            <button className={styles.btnConfirm}>Подтвердить заказ</button>
                            <button
                                className={styles.btnCancel}
                                onClick={() => {closeModal(false)}}
                            >
                                Отмена
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
