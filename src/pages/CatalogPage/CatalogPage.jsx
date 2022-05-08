import React from 'react'
import styles from './CatalogPage.module.css'

export const CatalogPage = () => {
    const catalogCategories = [
        {id: 0, img: 'src/Assets/Images/vegetables.png', title: 'Овощи' },
        {id: 1, img: 'src/Assets/Images/fruits.png', title: 'Фрукты' },
        {id: 2, img: 'src/Assets/Images/driedFruits.png', title: 'Сухофрукты',},
        {id: 3, img: 'src/Assets/Images/spices.png', title: 'Специи' },
        {id: 4, img: 'src/Assets/Images/bakeryProducts.png', title: 'Хлебобулочные изделия' },
        {id: 5, img: 'src/Assets/Images/nuts.png', title: 'Орехи' },
        {id: 6, img: 'src/Assets/Images/tea.png', title: 'Чай' },
        {id: 7, img: 'src/Assets/Images/souses.png', title: 'Соусы' },
        {id: 8, img: 'src/Assets/Images/everythingForBaking.png', title: 'Все для выпечки' },
        {id: 9, img: 'src/Assets/Images/sweets.png', title: 'Сладости' },
        {id: 10, img: 'src/Assets/Images/cereals.png', title: 'Крупы' },
        {id: 11, img: 'src/Assets/Images/other.png', title: 'Прочее' },
    ]

    const createCatalogCategories = (items) => {
        return (
            <div className={styles.catalogCategoriesWrapper}>
                {items.map((item) => (
                    <div className={styles.catalogCategory} key={item.id}>
                        <img src={item.img} alt="" />
                        <div className={styles.catalogCategoryTitle}>
                            <p>{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className={styles.catalogPage}>
            <div className={styles.titlePage}>Каталог</div>
            {createCatalogCategories(catalogCategories)}
        </div>
    )
}