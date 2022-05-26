export const authorizationService = {
    _api: 'http://26.85.60.200:8080/admin',

    authAdm(credits) {
        return fetch(this._api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credits),
        }).catch(err => {
            let error = new Error(err.message)
            throw error
        })
    },
}