const router = require('express').Router();
const getRoutes = require('../controllers/getControllers')

router.get('/visitors', getRoutes.getVisitors)
router.get('/sales_map', getRoutes.getSalesMap)
router.get('/customers', getRoutes.getCustomers)
router.get('/target_reality', getRoutes.getTargetReality)
router.get('/volume_services', getRoutes.getVolumeServices)
router.get('/top_products', getRoutes.getTopProducts)
router.get('/revenue', getRoutes.getRevenue)

module.exports = router;