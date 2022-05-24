import React, {useEffect, useState} from 'react'
import {Loader} from '../../components/UI/Loader'
import main from '../../store/main'
import {CSSTransition} from "react-transition-group";
import {observer} from 'mobx-react-lite'
import {Link, useLocation, useParams} from 'react-router-dom'
import {CategoryItem} from '../../components/CategoryItem'
import Arrow from '../../assets/images/arrow.svg'
import { productsService } from "../../services/productsService";
import Descending from '../../assets/images/categories/descending.svg'
import Increase from '../../assets/images/categories/increase.svg'
import Popular from '../../assets/images/categories/popular.svg'

import styles from './CategoryPage.module.css'


export const CategoryPage = observer(() => {

    const filterItems = [
        {id: 0, title: "По популярности", img: Popular},
        {id: 1, title: "По убыванию цены", img: Descending},
        {id: 2, title: "По возрастанию цены", img: Increase},
    ]

    const [isActive, setActive] = useState(false);
    const [activeFilter, setActiveFilter] = useState(filterItems[0].title);

    const closeFilterItem = (title) => {
        return (
            setActiveFilter(title),
                setActive(!isActive)
        )
    }

    const createFilterItem = (items) => {
        return (items.map((item) => (
            <div onClick={() => closeFilterItem(item.title)} className={styles.selectFilterItem}
                 key={item.id}><img src={item.img} alt=""/>{item.title}</div>)
        ))
    }

    const [categoryItems, setCategoryItems] = useState(null)


    useEffect(() => {
        const category = main.getCategory().categoryId
        productsService.getProducts(category).then((data) => {
            setCategoryItems(data)
        })
    }, [])

    const createCategoryItems = () => {
        return (
            <div className={styles.categoryItemsWrapper}>
                {categoryItems.map((
                    {id, imagePath: img, name: title, price, typeMeasuring}
                ) => (
                    <CategoryItem
                        id={id}
                        img={img}
                        title={title}
                        price={price}
                        typeMeasuring={typeMeasuring}
                        key={id}
                    />
                ))}
            </div>
        )
    }

    return (
        <div className={styles.categoryPage}>
            <div className={styles.categoryNameAndFilters}>
                <div className={styles.titlePage}>
                    <Link to="/catalog">
                        <span>Каталог </span>
                    </Link>
                    / {main.getCategory().title}
                </div>
                <div className={styles.filters}>
                    <div className={styles.activeFilter} onClick={() => setActive(!isActive)}>{activeFilter}<img
                        className={isActive ? styles.arrowDefault : styles.arrowAnimation} src={Arrow} alt=""/></div>
                    <CSSTransition
                        in={isActive}
                        classNames={
                            {
                                enterActive: styles.contentEnterActive,
                                enterDone: styles.contentDoneEnter,
                                exitDone: styles.contentDoneExit,
                                exitActive: styles.contentExitActive,
                            }
                        }
                        timeout={0}
                    >
                        <div className={isActive ? '' : styles.listFilter}>
                            {createFilterItem(filterItems)}
                        </div>
                    </CSSTransition>
                </div>
            </div>
            {categoryItems ? createCategoryItems() : <Loader/>}
        </div>
    )
})
