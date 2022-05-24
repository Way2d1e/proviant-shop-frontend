import { action, makeObservable, observable } from 'mobx'

class Products {

    products = localStorage.getItem('products')
        ? JSON.parse(localStorage.getItem('products'))
        : []

    constructor() {
        makeObservable(this, {
            products: observable,
            getProducts: action,
            addProduct: action,
            removeProduct: action,
            setProductWeight: action
        })
    }

    getProducts() {
        return this.products
    }

    addProduct(product) {
        this.products = [...this.products, product]
        this.updateCart()
    }

    setProductWeight(id, weight) {
        this.products = this.products.map((product => {
            return product.id === id
                ? {...product, weight: weight}
                : product
        }))
    }

    updateCart() {
        localStorage.setItem('products', JSON.stringify(this.products))
    }

    removeProduct(id) {
        this.products = this.products.filter((product) => {
            if (product.id !== id) {
                return product
            }
        })
        this.updateCart()
    }
}

export default new Products()