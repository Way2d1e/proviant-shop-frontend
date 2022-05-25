import React from 'react'
import WhatsApp from '../../assets/images/whatsApp.svg'

import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={styles.footerWrap}>
            <div className={styles.feedback}>
                <p>
                    Есть вопросы по заказу? Звоните{' '}
                    <a href="tel:+74956409640">+7 495 640 96 40 </a>
                    круглосуточно
                </p>
            </div>
            <div className={styles.footerInfo}>
                <p>
                    © 2022 Провиант - интернет магазин продуктов. Все права
                    защищены.
                </p>
                <div className={styles.info}>
                    <p>Ул.Центральная, 41</p>
                    <p>ИП “Провиант”</p>
                    <a href="mailto:shop@proviant.ru">
                        <span>shop@proviant.ru</span>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=74956409640text=">
                        <img src={WhatsApp} alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}