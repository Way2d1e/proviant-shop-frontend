import React, { useEffect, useState } from 'react'
import { Loader } from '../../components/UI/Loader'
import main from '../../store/main'
import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'
import {productsService} from "../../services/productsService";

import styles from './CatalogPage.module.css'

export const CatalogPage = observer(() => {
    const [catalogCategories, setCatalogCategories] = useState(null)

    useEffect(() => {
        productsService.getCategories().then((data) =>
            setCatalogCategories(data)
        )
    }, [])

    const createCatalogCategories = () => {
        return (
            <div className={styles.catalogCategoriesWrapper}>
                {catalogCategories.map(
                    ({ id, imagePath: img, name: title, nameEnglish, }) => (
                        <Link to={`/categories/${nameEnglish}`} key={id}>
                            <div
                                className={styles.catalogCategory}
                                onClick={() => main.selectCategory(id, title)}
                            >

                                <div className={styles.catalogCategoryTitle}>
                                    <p>{title}</p>
                                </div>
                                <img src={img} alt="" draggable={false} />
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