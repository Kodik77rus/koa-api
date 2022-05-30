import {
  Model,
  DataTypes,
  InferAttributes,
  CreationOptional,
  InferCreationAttributes,
} from 'sequelize';

import sequelize from '../config/sequelize';

interface StudentModel
  extends Model<
    InferAttributes<StudentModel>,
    InferCreationAttributes<StudentModel>
  > {
  id: CreationOptional<number>;
  name: string;
}

const StudentModel = sequelize.define<StudentModel>(
  'students',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: { type: DataTypes.STRING(10) },
  },
  {
    timestamps: false,
  },
);

export default StudentModel;
