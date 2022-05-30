import {
  Model,
  DataTypes,
  InferAttributes,
  CreationOptional,
  InferCreationAttributes,
} from 'sequelize';

import sequelize from '../config/sequelize';

interface TeacherModel
  extends Model<
    InferAttributes<TeacherModel>,
    InferCreationAttributes<TeacherModel>
  > {
  id: CreationOptional<number>;
  name: string;
}

const TeacherModel = sequelize.define<TeacherModel>(
  'teachers',
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

export default TeacherModel;
