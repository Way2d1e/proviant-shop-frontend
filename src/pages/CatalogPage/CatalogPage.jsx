import React, { useEffect, useState } from 'react'
import styles from './CatalogPage.module.css'
import { Loader } from '../../components/UI/Loader'
import ProductService from '../../services/productsService'

export const CatalogPage = () => {
    const [catalogCategories, setCatalogCategories] = useState(null)

    const productService = new ProductService()

    useEffect(() => {
        productService
            .getCategories()
            .then((data) => setCatalogCategories(data))
    }, [])

    const createCatalogCategories = () => {
        return (
            <div className={styles.catalogCategoriesWrapper}>
                {catalogCategories.map(
                    ({ id, image_category: img, name_category: title }) => (
                        <div className={styles.catalogCategory} key={id}>
                            <img src={img} alt="" draggable={false} />
                            <div className={styles.catalogCategoryTitle}>
                                <p>{title}</p>
                            </div>
                        </div>
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
}