import React from 'react'
import styles from "./ItemsCartCount.module.css"
import {observer} from "mobx-react-lite";
import products from "../../store/products";

export const ItemsCartCount = observer(() => {

    const itemsCart = products.products.length

    return (
        <div>
            {itemsCart !== 0 && <div className={styles.container}>{itemsCart}</div> }
        </div>
    )
})

