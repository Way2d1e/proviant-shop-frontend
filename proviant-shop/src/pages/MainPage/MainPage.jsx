import React from 'react'
import Ruble from '../../assets/images/ruble.svg'
import Pshenichka from '../../assets/images/pshenichka.svg'
import Service from '../../assets/images/service.svg'
import Expirience from '../../assets/images/expirience.svg'

import styles from './MainPage.module.css'

export const MainPage = () => {
    const advanteges = [
        {
            id: 0,
            title: 'Выгода',
            body: 'Лучшее соотношение\n' + 'цены и качества',
            img: Ruble,
        },
        {
            id: 1,
            title: 'Качество',
            body: 'Только свежие\n' + ' продукты',
            img: Pshenichka,
        },
        {
            id: 2,
            title: 'Сервис',
            body: '100% гарантия, персональный подход',
            img: Service,
        },
        {
            id: 3,
            title: 'Опыт',
            body: 'Более 4-х лет\n' + ' на рынке',
            img: Expirience,
        },
    ]

    const createAdvantages = (advantages) => {
        return (
            <div className={styles.advantageContainer}>
                {advantages.map((item) => (
                    <div key={item.id} className={styles.itemAdvantege}>
                        <img className={styles.itemImg} src={item.img} alt=""/>
                        <p className={styles.itemTitle}>{item.title}</p>
                        <p className={styles.itemBody}>{item.body}</p>
                    </div>

                ))}
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.advantages}>
                <p className={styles.advantagesTitle}>
                    Магазин вкусных продуктов
                </p>
                {createAdvantages(advanteges)}
            </div>
        </div>
    )
}