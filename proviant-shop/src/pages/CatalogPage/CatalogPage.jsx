import React, { useEffect, useState } from 'react'
import { Loader } from '../../components/UI/Loader'
import ProductService from '../../services/productsService'
import main from '../../store/main'
import { observer } from 'mobx-react-lite'

import styles from './CatalogPage.module.css'
import { Link } from 'react-router-dom'

export const CatalogPage = observer(() => {
    const [catalogCategories, setCatalogCategories] = useState(null)

    useEffect(() => {
        ProductService.getCategories().then((data) =>
            setCatalogCategories(data)
        )
    }, [])

    //TODO выпить пиво
    const createCatalogCategories = () => {
        return (
            <div className={styles.catalogCategoriesWrapper}>
                {catalogCategories.map(
                    ({ id, imagePath: img, name: title }) => (
                        <Link to="/categories" key={id}>
                            <div
                                className={styles.catalogCategory}
                                onClick={() => main.selectCategory(id, title)}
                            >
                                <img src={img} alt="" draggable={false} />
                                <div className={styles.catalogCategoryTitle}>
                                    <p>{title}</p>
                                </div>
                            </div>
                        </Link>
                    )
                )}
            </div>
        )
    }

    return (
        <div className={styles.catalogPage}>
            <div className={styles.titlePage}>
                <p>Каталог</p>
            </div>
            {catalogCategories ? createCatalogCategories() : <Loader />}
        </div>
    )
})