//导入模块
var student = require('./student');
var teacher = require('./teacher');

var teachers = ['苍老师'],
    students = ['白富美', '高富帅'];
teachers.forEach((item, index) => {
    teacher.tAdd(item);
})
students.forEach((item, index) => {
    student.sAdd(item);
})