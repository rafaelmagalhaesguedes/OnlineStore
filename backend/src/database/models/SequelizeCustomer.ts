import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import { SequelizeAddress } from './SequelizeAddress';
import { SequelizeOrder } from './SequelizeOrder';

class SequelizeCustomer extends Model<InferAttributes<SequelizeCustomer>,
InferCreationAttributes<SequelizeCustomer>> {
  //
  declare id: CreationOptional<number>;

  declare userId: number;

  declare numberPhone: string;

  declare secondaryEmail: string;
}

SequelizeCustomer.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_id',
    references: {
      model: 'users',
      key: 'id',
    },
  },
  numberPhone: {
    type: DataTypes.STRING,
    field: 'number_phone',
  },
  secondaryEmail: {
    type: DataTypes.STRING,
    field: 'secondary_email',
  },
}, {
  sequelize: db,
  modelName: 'customers',
  timestamps: false,
  underscored: true,
});

SequelizeCustomer.hasMany(SequelizeAddress, {
  foreignKey: 'customerId',
  as: 'addresses',
});

SequelizeAddress.belongsTo(SequelizeCustomer, {
  foreignKey: 'customerId',
  as: 'customer',
});

SequelizeCustomer.hasMany(SequelizeOrder, {
  foreignKey: 'customerId',
  as: 'orders',
});

SequelizeOrder.belongsTo(SequelizeCustomer, {
  foreignKey: 'customerId',
  as: 'customer',
});

export { SequelizeCustomer };