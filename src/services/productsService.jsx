export const productsService = {
    _api: 'http://26.85.60.200:8080/',

    async getResource(url, options)  {
        const res = await fetch(`${this._api}${url}`, options)
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return res.json()
    },

    async getCategories()  {
        return await this.getResource('category')
    },

    async getProducts(category) {
        return await this.getResource(`category/${category}/product`)
    },

    async addProductToCard(product) {
        if (localStorage.getItem('products')) {
            const products = JSON.parse(localStorage.getItem('products'))
            localStorage.setItem('products', JSON.stringify([...products, product]))
        } else {
            localStorage.setItem('products', JSON.stringify([product]))
        }
    },

    async addFinalCheck(check) {
        if (localStorage.getItem('checks')) {
            const checks = JSON.parse(localStorage.getItem('checks'))
            localStorage.setItem('checks', JSON.stringify([...checks, check]))
        } else {
            localStorage.setItem('checks', JSON.stringify([check]))
        }
    },

    async setCartProduct() {
        const products = await fetch('http://localhost:3001/products').then((res) => res.json())
        await window.localStorage.setItem('products', JSON.stringify(products))
    },

    async getCartProducts() {
        return JSON.parse(window.localStorage.getItem('products'))
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
