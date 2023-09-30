function checkRequiredParameters (jsonBody) {
    return new Promise( (resolve) => {
        const requiredProperties = [ 'name', 'description', 'language' ]
        for (let prop of requiredProperties) {
            if (! jsonBody.hasOwnProperty(prop)) {
                resolve(false)
            }
        }
        resolve(true)
    })
}

module.exports = checkRequiredParameters