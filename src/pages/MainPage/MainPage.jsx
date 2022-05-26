import React from 'react'
import Ruble from '../../assets/images/ruble.svg'
import Psenicka from '../../assets/images/pshenichka.svg'
import Service from '../../assets/images/service.svg'
import Experience from '../../assets/images/expirience.svg'
import { Slider } from '../../components/Slider'
import Slide1 from '../../assets/images/slider/slide-1.png'
import Slide2 from '../../assets/images/slider/slide-2.png'
import Slide3 from '../../assets/images/slider/slide-3.png'

import styles from './MainPage.module.css'

export const MainPage = () => {
    const advantages = [
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
            img: Psenicka,
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
            img: Experience,
        },
    ]

    const slides = [
        { id: 1, img: Slide1 },
        { id: 2, img: Slide2 },
        { id: 3, img: Slide3 },
    ]

    const createAdvantages = (advantages) => {
        return (
            <div className={styles.advantageContainer}>
                {advantages.map((item) => (
                    <div key={item.id} className={styles.itemAdvantege}>
                        <img className={styles.itemImg} src={item.img} alt="" />
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
                <Slider slides={slides} />
                <p className={styles.advantagesTitle}>
                    Магазин вкусных продуктов
                </p>
                {createAdvantages(advantages)}
            </div>
        </div>
    )
}