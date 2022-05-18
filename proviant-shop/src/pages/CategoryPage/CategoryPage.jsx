import React, {useEffect, useState} from 'react'
import styles from '../CategoryPage/CategoryPage.module.css'
import {Loader} from '../../components/UI/Loader'
import main from '../../store/main'
import {observable} from 'mobx'
import {CSSTransition} from "react-transition-group";
import {observer} from 'mobx-react-lite'
import {Link} from 'react-router-dom'
import {CategoryItem} from '../../components/CategoryItem'
import Arrow from '../../assets/images/arrow.svg'


export const CategoryPage = observer(() => {

    const filterItems = [
        {id: 0, title: "По популярности"},
        {id: 1, title: "По алфавиту"},
        {id: 2, title: "По убыванию цены"},
        {id: 3, title: "По возрастанию цены"},
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
            <div onClick={() => closeFilterItem(item.title)} className={styles.selectFilterItem}>{item.title}</div>)
        ))
    }

    const [category, setCategory] = useState(main.getCategory())
    const [categoryItems, setCategoryItems] = useState([
        {
            id: 0,
            price: 0,
            name: 'hui',
        },
        {
            id: 1,
            price: 0,
            name: 'hui',
        },
        {
            id: 2,
            price: 0,
            name: 'hui',
        },
        {
            id: 3,
            price: 0,
            name: 'hui',
        },
        {
            id: 4,
            price: 0,
            name: 'hui',
        },
    ])

    useEffect(() => {
        // console.log()
    }, [])

    const createCategoryItems = () => {
        return (
            <div className={styles.categoryItemsWrapper}>
                {categoryItems.map(({id, price, name: title}) => (
                    <CategoryItem title={'хуй'} key={id}/>
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
                    / {category.title}
                </div>
                <div className={styles.filters}>
                    <div className={styles.activeFilter} onClick={() => setActive(!isActive)}>{activeFilter}<img className={isActive ? styles.arrowDefault : styles.arrowAnimation} src={Arrow} alt=""/></div>
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
            {createCategoryItems()}
        </div>
    )
})