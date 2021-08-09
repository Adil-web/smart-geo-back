const { directory_organization } = require('../models')
const axios = require('axios').default

class DirectoryOrganization {
    async createOrganization(req, res) {
        const {title_rus, title_kaz, address_rus, address_kaz, contacts, work_time, description_rus, description_kaz, region, type} = req.body
        await directory_organization.create(
        {
            title_rus, title_kaz, address_rus, address_kaz, contacts, work_time, description_rus, description_kaz, region, type
        }
        ).then(async ()=>{
            const organizations = await directory_organization.findAll({raw: true}) 
            res.json(organizations)
        }).catch(err=>console.log(err));
    }
    async getOneOrganization(req, res) {
        const {id} = req.params
        await directory_organization.findOne({ where: { id } })
        .then(data=>{
            res.json(data);
        }).catch(err=>console.log(err));
    }
    async getAllOrganization(req, res) {
        await directory_organization.findAll({raw: true })
        .then(data=>{
            res.json(data);
        }).catch(err=>console.log(err));
    }
    async updateOrganization(req, res) {
        const {id} = req.params
        const {title_rus, title_kaz, address_rus, address_kaz, contacts, work_time, description_rus, description_kaz, region, type} = req.body
        await directory_organization.update({ title_rus, title_kaz, address_rus, address_kaz, contacts, work_time, description_rus, description_kaz, region, type }, {
            where: {id}
        });
        res.json(await directory_organization.findAll({raw: true}))
    }
    async deleteOrganization(req, res) {
        const {id} = req.params
        await directory_organization.destroy({
            where: {id}
        });
        res.json(await directory_organization.findAll({raw: true}))
    }
}

module.exports = new DirectoryOrganization()
