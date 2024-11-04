/**
 * @param { object } Body
 * @returns { peomise}
 */
const create = async(Model, Body) => {
    return Model.create(Body);
}

/**
 * Get list
 * @returns {Promise<Request>}
 */
const getList = async(Model, match = {}, sort = {}) => {
    return Model.find(match).sort(sort);
}

module.exports = {
    create,
    getList,
}