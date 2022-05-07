import React from 'react'
import styles from './Catalog.module.css'

const Catalog = () => {
    const catalogItems = [
        {id: 0, img: 'src/Assets/Images/vedgetables.png', title: 'Овощи' },
        {id: 1, img: 'src/Assets/Images/fruits.png', title: 'Фрукты' },
        {id: 2, img: 'src/Assets/Images/driedFruits.png', title: 'Сухофрукты'},
        {id: 3, img: 'src/Assets/Images/spices.png', title: 'Специи' },
        {id: 4, img: 'src/Assets/Images/bakeryЗroducts.png', title: 'Хлебобулочные изделия',},
        {id: 5, img: 'src/Assets/Images/nuts.png', title: 'Орехи' },
        {id: 6, img: 'src/Assets/Images/tea.png', title: 'Чай' },
        {id: 7, img: 'src/Assets/Images/souses.png', title: 'Соусы' },
        {id: 8, img: 'src/Assets/Images/everythingForBaking.png', title: 'Все для выпечки',},
        {id: 9, img: 'src/Assets/Images/sweets.png', title: 'Сладости' },
        {id: 10, img: 'src/Assets/Images/cereals.png', title: 'Крупы' },
        {id: 11, img: 'src/Assets/Images/other.png', title: 'Прочее' },
    ]

    const createCatalogItem = (items) => {
        return (
            <div className={styles.catalogItemWrap}>
                {items.map((item) => (
                    <div className={styles.catalogItem}>
                        <div>
                            <img src={item.img} alt="" />
                        </div>
                        <div className={styles.titleCatalogItem}>
                            <p>{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className={styles.catalogWrap}>
            <div className={styles.titlePage}>Каталог</div>
            {createCatalogItem(catalogItems)}
        </div>
    )
}

export default Catalog;