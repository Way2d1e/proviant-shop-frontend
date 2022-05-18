import axios from 'axios';

export default class {
    static _API = 'http://26.85.60.200:8080/'
    // static _API = 'http://localhost:3001/'

    static getResource = async (url, options) => {
        const res = await fetch(`${this._API}${url}`, options)
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return res.json()
    }

    static getCategories = async () => {
        return await this.getResource('category')
    }

    static setCartProduct = async () => {
        const products = await fetch('http://localhost:3001/products').then((res) => res.json())
        await window.localStorage.setItem('products', JSON.stringify(products))
    }

    static getCartProducts = async () => {
        return JSON.parse(window.localStorage.getItem('products'))
    }

    static createOrder = async (order) => {
        return await this.getResource('order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        })
    }
}

function post(path, data) {
    return axios.get("/csrf")
        .then(tokenResp => {
            let config = {
                headers: {
                    'X-CSRF-TOKEN': tokenResp.data.token,
                }
            }
            return axios.post(path, data, config);
        })
        .then(res => res.data)
}