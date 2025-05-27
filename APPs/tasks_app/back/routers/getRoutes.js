const router = require('express').Router();
const getRoutes = require('../controllers/getTasks');

const routes = [
  'tasks'
];

routes.forEach((route) => {
  router.get(
    `/${route}`,
    getRoutes[
      `get${route}`
    ]
  );
});

module.exports = router;
