export const productsService = {
    _api: 'http://192.168.171.83:8080/',

    async getResource(url, options) {
        const res = await fetch(`${this._api}${url}`, options)
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return res.json()
    },

    async getCategories() {
        return await this.getResource('category')
    },

    async getProducts(category) {
        return await this.getResource(`category/${category}/product`)
    },

     addProductToCard(product) {
        if (localStorage.getItem('products')) {
            const products = JSON.parse(localStorage.getItem('products'))
            localStorage.setItem(
                'products',
                JSON.stringify([...products, product])
            )
        } else {
            localStorage.setItem('products', JSON.stringify([product]))
        }
    },

    removeProductFromCard(id) {
        const newProducts = JSON.parse(localStorage.getItem('products')).filter((product) => {
            return product.id !== id ? product: ''
        })
        console.log(newProducts)
        localStorage.setItem('products', JSON.stringify(newProducts))
    },

    async setCartProduct() {
        const products = await fetch('http://localhost:3001/products').then(
            (res) => res.json()
        )
        await window.localStorage.setItem('products', JSON.stringify(products))
    },

    getCartProducts() {
        return JSON.parse(window.localStorage.getItem('products'))
    },

    createItemOrders() {
        return JSON.parse(localStorage.getItem('products')).map(
            ({ id: productId, weight }) => {
                return { productId, weight }
            }
        )
    },

    async createOrder(order) {
        return await this.getResource('order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        })
    },
}
