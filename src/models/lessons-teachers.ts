import {
  Model,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';

import LessonModel from './lesson';
import TeacherModel from './teacher';
import sequelize from '../config/sequelize';

interface Lesson_Teachers
  extends Model<
    InferAttributes<Lesson_Teachers>,
    InferCreationAttributes<Lesson_Teachers>
  > {
  lesson_id: ForeignKey<LessonModel['id']>;
  teacher_id: ForeignKey<TeacherModel['id']>;
  visit: boolean;
}

const Lesson_Teachers = sequelize.define<Lesson_Teachers>(
  'lesson_teachers',
  {
    lesson_id: {
      type: DataTypes.INTEGER,
      references: {
        model: LessonModel,
        key: 'id',
      },
    },
    teacher_id: {
      type: DataTypes.INTEGER,
      references: {
        model: TeacherModel,
        key: 'id',
      },
    },
    visit: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },

  {
    timestamps: false,
  },
);

export default Lesson_Teachers;
