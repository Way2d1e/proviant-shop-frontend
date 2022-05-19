import {action, makeObservable, observable} from "mobx";

class Main {

    main = {
        category: {
            categoryId: '',
            categoryTitle: ''
        },
        productItem: {
            productItemId: '',
            productItemTitle: ''
        }
    }

    constructor() {
        makeObservable(this, {main: observable, selectCategory: action} )
    }

    selectCategory(categoryId, title) {
        this.main.category.categoryId = categoryId
        this.main.category.categoryTitle = title
        console.log(this.main.category.categoryId)
    }

    getCategory() {
        return {
            categoryId: this.main.category.categoryId,
            title: this.main.category.categoryTitle
        }
    }

    selectProductItem(id, title) {
        this.main.productItem.productItemid = id
        this.main.productItem.productItemTitle = title
    }
}

export default new Main()