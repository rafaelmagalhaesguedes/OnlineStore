/**
 * Interface for CRUD operations
 */
export interface ICrudModel<T> {
  findAll(): Promise<T[] | null>;
  findById(id: number): Promise<T | null>;
  create(item: T): Promise<T | null>;
  update(id: number, item: T): Promise<T | null>;
  delete(id: number): Promise<boolean>;
}

/**
 * Generic class for CRUD operations
 * 
 * @export
 * @class CrudRepository
 * @implements {ICrudModel<T>}
 * @template T
 * @param {any} model
 * @returns {ICrudModel<T>}
 */
export class CrudRepository<T> implements ICrudModel<T> {

  constructor(private model: any) {}

  async findAll(): Promise<T[] | null> {
    const items = await this.model.findAll();

    if (!items) return null;

    return items.map((item: any) => item.dataValues);
  }

  async findById(id: number): Promise<T | null> {
    const item = await this.model.findByPk(id);

    if (!item) return null;

    return item;
  }

  async create(item: T): Promise<T | null> {
    const newItem = await this.model.create(item);

    if (!newItem) return null;

    return newItem.dataValues;
  }

  async update(id: number, item: T): Promise<T | null> {
    const updateItem = await this.model.update(item, { where: { id } });

    if (!updateItem) return null;

    return await this.findById(id);
  }

  async delete(id: number): Promise<boolean> {
    const deleted = await this.model.destroy({ where: { id } });
    
    return !!deleted;
  }
}