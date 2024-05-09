import { ServiceMessage, ServiceResponse } from '../interfaces/ServiceResponse';
import { ICustomer } from '../interfaces/ICustomer';
import { CustomerModel } from '../models/CustomerModel';

/**
 * CustomerService
 * 
 * @export
 * @class CustomerService
 * @template ICustomer
 * @template CustomerModel
 */
export class CustomerService {
  
  /**
   * Creates an instance of CustomerService.
   */
  constructor(private customerModel: CustomerModel) {}


  /**
   * Get all customers
   * 
   * @returns {Promise<ICustomer[]>}
   */
  async getCustomers(): Promise<ServiceResponse<ICustomer[]>> {
    
    const customers = await this.customerModel.findAll({
      include: [
      {
        association: 'addresses',
        as: 'addresses'
      },
      {
        association: 'orders',
        as: 'orders'
      }]
    });
    
    if (!customers) {
      return { status: 'NOT_FOUND', data: { message: 'Customers not found' } };
    }

    return { status: 'SUCCESSFUL', data: customers };
  }


  /**
   * Create a customer
   * 
   * @param {number} userId
   * @param {ICustomer} customer
   * @returns {Promise<ICustomer>}
   */
  async createCustomer(userId: number, customer: ICustomer): Promise<ServiceResponse<ICustomer>> {
    const userExists = await this.customerModel.findById(userId);

    if (!userExists) {
      return { status: 'NOT_FOUND', data: { message: 'User not found' } };
    }

    const customerExists = await this.customerModel.findOne({ where: { userId } });

    if (customerExists) {
      return { status: 'CONFLICT', data: { message: 'Customer already exists' } };
    }

    const createdCustomer = await this.customerModel.create({ ...customer, userId });

    if (!createdCustomer) {
      return { status: 'INTERNAL_ERROR', data: { message: 'Error creating customer' } };
    }

    return { status: 'SUCCESSFUL', data: createdCustomer };
  }


  /**
   * Find a customer by id
   * 
   * @param {number} id
   * @returns {Promise<ICustomer>}
   */
  async findCustomerById(id: number): Promise<ServiceResponse<ICustomer>> {
    const customer = await this.customerModel.findById(id);

    if (!customer) {
      return { status: 'NOT_FOUND', data: { message: 'Customer not found' } };
    }

    return { status: 'SUCCESSFUL', data: customer };
  }


  /**
   * Find a customer by user id
   * 
   * @param {number} userId
   * @returns {Promise<ICustomer>}
   */
  async findCustomerByUserId(userId: number): Promise<ServiceResponse<ICustomer>> {
    const customer = await this.customerModel.findOne({ where: { userId } });

    if (!customer) {
      return { status: 'NOT_FOUND', data: { message: 'Customer not found' } };
    }

    return { status: 'SUCCESSFUL', data: customer };
  }


  /**
   * Update a customer
   * 
   * @param {number} userId
   * @param {ICustomer} customer
   * @returns {Promise<ICustomer>}
   */
  async updateCustomer(userId: number, customer: ICustomer): Promise<ServiceResponse<ICustomer>> {
    const customerExists = await this.customerModel.findOne({ where: { userId } });

    if (!customerExists) {
      return { status: 'NOT_FOUND', data: { message: 'Customer not found' } };
    }

    const updatedCustomer = await this.customerModel.update(customerExists.id, customer);

    if (!updatedCustomer) {
      return { status: 'INTERNAL_ERROR', data: { message: 'Error updating customer' } };
    }

    return { status: 'SUCCESSFUL', data: updatedCustomer };
  }


  /**
   * Delete a customer
   * 
   * @param {number} userId
   * @returns {Promise<boolean>}
   */
  async deleteCustomer(userId: number): Promise<ServiceResponse<ServiceMessage>> {
    const customerExists = await this.customerModel.findOne({ where: { userId } });

    if (!customerExists) {
      return { status: 'NOT_FOUND', data: { message: 'Customer not found' } };
    }

    const deletedCustomer = await this.customerModel.delete(customerExists.id);

    if (!deletedCustomer) {
      return { status: 'INTERNAL_ERROR', data: { message: 'Error deleting customer' } };
    }

    return { status: 'SUCCESSFUL', data: { message: 'Customer deleted successfuly' } };
  }

}