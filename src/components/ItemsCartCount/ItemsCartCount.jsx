import React, { useEffect, useState } from 'react'
import styles from "./ItemsCartCount.module.css"

export const ItemsCartCount = () => {
    const [itemsCart, setItemsCart] = useState(0)

    return <div className={styles.container}>{itemsCart}</div>
}

