<?php

include 'studentsStorage.php';

$studentStorage = new StudentStorage('students.json');

// $studentStorage->addStudent([
//     'id' => 1,
//     'name' => 'John Doe',
//     'email' => 'john.doe@example.com',
//     'phone' => '1234567890',
// ]);

// $studentStorage->addStudent([
//     'id' => 2,
//     'name' => 'Jane Smith',
//     'email' => 'jane.smith@example.com',
//     'phone' => '0987654321',
// ]);

$students = $studentStorage->getStudents();
// var_dump($students);

$student = $studentStorage->getStudentById(2);
var_dump($student);

$studentAsString = $studentStorage->displayStudentAsString($student);
var_dump($studentAsString);

$serializedStudent = $studentStorage->serializeStudent($student);
var_dump($serializedStudent);




