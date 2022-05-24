import React, { useEffect, useState } from 'react'

export const ItemsCartCount = () => {

    const [itemsCart, setItemsCart] = useState(
        JSON.parse(localStorage.getItem('products')).length
    )

    return <div>{itemsCart}</div>
}

