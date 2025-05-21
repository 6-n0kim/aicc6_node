const database = require('../database/database')

const createGetController = (tableName) => async (req, res) => {
    try {
        const result = await database.pool.query(`SELECT * FROM ${tableName}`)
        return res.status(200).json(result.rows)
    } catch (e) {
        return res.status(500).json({ message: `Error Occurred while getting ${tableName} data: ${e.message}` })
    }
}

exports.getVisitors = createGetController('visitors')
exports.getSalesMap = createGetController('sales_map')
exports.getCustomers = createGetController('customers')
exports.getTargetReality = createGetController('target_reality')
exports.getVolumeServices = createGetController('volume_services')
exports.getTopProducts = createGetController('top_products')
exports.getRevenue = createGetController('revenue')