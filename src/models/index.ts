import Lesson from './lesson';
import Student from './student';
import Teacher from './teacher';
import Lesson_Students from './lessons_students';
import Lesson_Teachers from './lessons-teachers';

Lesson.sync();
Student.sync();
Teacher.sync();
Lesson_Students.sync({ force: true });
Lesson_Teachers.sync({ force: true });

export default {
  Lesson,
  Student,
  Teacher,
  Lesson_Teachers,
};
