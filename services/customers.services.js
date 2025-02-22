const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize')

class CustomerService {
  constructor() {}


  async find() {
    const Customer  = await models.Customer.findAll({
      include:['user']

    });
    return Customer ;
  }

  async findOne(id) {
    const Customer  = await models.Customer.findByPk(id);
    if (!Customer ) {
      throw boom.notFound('customer not found');
    }
    return Customer ;
  }

  async create(data){

   const newCustomer = await models.Customer.create(data, {
    include: ['user']
   });
    return newCustomer
  }

  async update(id, changes) {
    const model = await this.findOne(id);
    const Customer  = await model.update(changes);
    return Customer ;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();

    return {rta:true};
  }
}

module.exports = CustomerService;
