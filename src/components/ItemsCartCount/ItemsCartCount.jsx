import React, { useEffect, useState } from 'react'

export const ItemsCartCount = () => {
    const [itemsCart, setItemsCart] = useState(
         0
    )

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#ff4c4c',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                font: "500 16px/18px 'Open Sans', sans-serif",
                color:"white"
            }}
        >
            {itemsCart}
        </div>
    )
}

