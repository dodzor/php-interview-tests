** https://devskiller.com/coding-tests/junior-php-developer-student-details-application/ **

**DevSkiller task (https://devskiller.com) **
**PHP | Student Details Application**
> Implement three methods to keep students’ details in a file and fetch them from the file when necessary.

* Create a simple PHP application (or class) that can:

  1. **Save student data to a file**
  2. **Retrieve student data from a file**
  3. **Do some other operation** — possibly update or delete or fetch all students

So essentially you're building a lightweight, file-based "database" for student records.

### 🧠 Key Concepts You Need

1. **File I/O in PHP** – using functions like:

   * `file_put_contents()`
   * `file_get_contents()`
   * `fopen()`, `fwrite()`, `fread()`, `fclose()`
   * maybe `fgets()` if reading line-by-line
2. **Serialization** of data – storing student details as:
   * JSON
   * CSV
   * Or custom delimited strings
3. **Basic OOP** (if you're expected to wrap this into a class)

---

### 💡 Assumptions

Unless told otherwise, you can assume:

* Each student has a few fields, like:

  ```php
  [
    'id' => 1,
    'name' => 'Alice',
    'email' => 'alice@example.com'
  ]
  ```
* You'll be storing a list of students, likely in a `.json` file

---

> PHP | Converting an array to a string code gap assessing knowledge of PHP

| Method          | Best For         | Reversible?       | Readable? |
| --------------- | ---------------- | ----------------- | --------- |
| `implode()`     | Simple lists     | ❌                 | ✅         |
| `json_encode()` | API, storage     | ✅ (`json_decode`) | ✅         |
| `serialize()`   | Internal PHP use | ✅ (`unserialize`) | ❌         |
