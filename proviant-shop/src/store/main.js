import {action, makeObservable, observable} from "mobx";

class Main {

    main = {
        category: {
            categoryId: '',
            categoryTitle: ''
        }
    }

    constructor() {
        makeObservable(this, {main: observable, selectCategory: action} )
    }

    selectCategory(id, title) {
        this.main.category.categoryId = id
        this.main.category.categoryTitle = title
    }

    getCategory() {
        return {
            id: this.main.category.categoryId,
            title: this.main.category.categoryTitle
        }
    }
}

export default new Main()