import React from 'react'
import styles from './Contacts.module.css'
import Support from '../../assets/Images/contacts_header.png'
import Call from '../../assets/Images/Call.svg'
import Mail from '../../assets/Images/mail.svg'
import Location from '../../assets/Images/location.svg'
import { YMaps, Map, Placemark } from 'react-yandex-maps'

const Contacts = () => {
    return (
        <div className={styles.container}>
            <div className={styles.ContainerContacts}>
                <p className={styles.title}>Контакты</p>
                <img className={styles.ImgContacts} src={Support} alt="" />
                <div className={styles.data}>
                    <div className={styles.feedback}>
                        <p className={styles.FeedbackTitle}>Обратная связь</p>
                        <div>
                            <img src={Call} alt="" />
                            <p>8-800-555-35-35</p>
                        </div>
                        <div>
                            <img src={Mail} alt="" />
                            <p>shop@proviant31.ru</p>
                        </div>
                    </div>
                    <div className={styles.map}>
                        <p className={styles.MapTitle}>Мы находимся здесь</p>
                        <div className={styles.MapBody}>
                            <img src={Location} alt="" />
                            <p>пгт.Красная Яруга, ул. Центральная, д.41</p>
                        </div>
                        <YMaps>
                            <Map
                                className={styles.MapSize}
                                defaultState={{
                                    center: [50.802242,35.657026],
                                    zoom: 17,
                                }}
                            >
                                <Placemark geometry={[50.802242,35.657026]} />
                            </Map>
                        </YMaps>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts