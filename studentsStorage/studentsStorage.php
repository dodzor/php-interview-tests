<?php

class StudentStorage {
    private $filename;

    public function __construct($filename) {
        $this->filename = $filename;
        if (!file_exists($filename)) {
            file_put_contents($filename, json_encode([]));
        }
    }

    public function addStudent(array $student): void {
        $students = json_decode(file_get_contents($this->getFileName()), true);
        $students[] = $student;

        file_put_contents($this->getFileName(), json_encode($students, JSON_PRETTY_PRINT));
    }

    public function getStudents(): array {
        return json_decode(file_get_contents($this->getFileName()), true);
    }

    public function getStudentById(int $id): ?array {
        $students = $this->getStudents();

        foreach ($students as $student) {
            if ($student['id'] == $id) {
                return $student;
            }
        }

        return null;
    }

    public function displayStudentAsString(array $student): string {
        return implode(', ', $student);
    }
    
    public function serializeStudent(array $student): string {
        return serialize($student);
    }

    public function getFileName() {
        return $this->filename;
    }
}
