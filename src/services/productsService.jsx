export default class ProductService {

    _API = 'http://26.85.60.200:8080/'

    getResource = async (url, options) => {
        const res = await fetch(`${this._API}${url}`, options)
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return res.json()
    }

    getCategories = async () => {
        return await this.getResource(`category`)
    }

    createOrder = async (order) => {
        return await this.getResource('order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        })
    }
}