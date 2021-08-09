const Router = require('express')
const router = new Router()
const directory_organization = require('../controllers/directory_organization.controller')

router.get('/directory-organization', directory_organization.getAllOrganization)
router.get('/directory-organization/:id', directory_organization.getOneOrganization)
router.post('/directory-organization', directory_organization.createOrganization)
router.put('/directory-organization/:id', directory_organization.updateOrganization)
router.delete('/directory-organization/:id', directory_organization.deleteOrganization)

module.exports = router
