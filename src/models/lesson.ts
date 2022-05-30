import {
  Model,
  DataTypes,
  InferAttributes,
  CreationOptional,
  InferCreationAttributes,
} from 'sequelize';

import sequelize from '../config/sequelize';

interface LessonModel
  extends Model<
    InferAttributes<LessonModel>,
    InferCreationAttributes<LessonModel>
  > {
  id: CreationOptional<number>;
  date: number;
  title: string;
  status: number;
}

const LessonModel = sequelize.define<LessonModel>(
  'lessons',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    date: { type: DataTypes.DATE },
    title: { type: DataTypes.STRING(100) },
    status: {
      type: DataTypes.INTEGER,
      validate: { max: 1, min: 0 },
    },
  },
  {
    timestamps: false,
  },
);

export default LessonModel;
