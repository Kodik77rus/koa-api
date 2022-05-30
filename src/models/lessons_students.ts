import {
  Model,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';

import LessonModel from './lesson';
import StudentModel from './student';
import sequelize from '../config/sequelize';

interface Lesson_Students
  extends Model<
    InferAttributes<Lesson_Students>,
    InferCreationAttributes<Lesson_Students>
  > {
  lesson_id: ForeignKey<LessonModel['id']>;
  student_id: ForeignKey<StudentModel['id']>;
  visit: boolean;
}

const Lesson_Students = sequelize.define<Lesson_Students>(
  'lesson_students',
  {
    lesson_id: {
      type: DataTypes.INTEGER,
      references: {
        model: LessonModel,
        key: 'id',
      },
    },
    student_id: {
      type: DataTypes.INTEGER,
      references: {
        model: StudentModel,
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

export default Lesson_Students;
