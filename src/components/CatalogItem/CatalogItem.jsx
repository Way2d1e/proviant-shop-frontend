import React from 'react'
import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'
import main from '../../store/main'

import styles from './CatalogItem.module.css'
import { CatalogItemSkeleton } from './CatalogItemSkeleton'

export const CatalogItem = observer((props) => {
    const { id, title, img, nameEnglish } = props

    return (
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
})
