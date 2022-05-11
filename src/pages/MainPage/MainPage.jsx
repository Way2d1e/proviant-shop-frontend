import React from 'react'
import styles from './MainPage.module.css'
import Ruble from '../../assets/Images/ruble.svg'
import Pshenichka from '../../assets/Images/pshenichka.svg'
import Service from '../../assets/Images/service.svg'
import Expirience from '../../assets/Images/expirience.svg'

const MainPage = () => {
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
            <div className={styles.AdvantageContainer}>
                {advantages.map((item) => (
                    <div key={item.id} className={styles.ItemAdvantege}>
                        <img className={styles.ItemImg} src={item.img} alt=""/>
                        <p className={styles.ItemTitle}>{item.title}</p>
                        <p className={styles.ItemBody}>{item.body}</p>
                    </div>

                ))}
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.advantages}>
                <p className={styles.AdvantagesTitle}>
                    Магазин вкусных продуктов
                </p>
                {createAdvantages(advanteges)}
            </div>
        </div>
    )
}

export default MainPage;