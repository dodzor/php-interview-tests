** https://devskiller.com/coding-tests/senior-web-developer-php-sql-javascript-xml-csv-converter/ **

---

> **PHP | XML-CSV Converter**
> Implement **filtering** and **data transformation methods** to **pass all the tests**.

---

### 🧠 What This Is Really Testing

This task is designed to evaluate:

* Your ability to **read XML** and/or **CSV data**
* Perform **filtering** (e.g., based on values, keys, structure)
* Transform data between **formats** (e.g., XML → CSV, or vice versa)
* Write clean, testable PHP
* Possibly work with **arrays**, **DOMDocument**, **SimpleXML**, or `fgetcsv()`/`fputcsv()`

---

### 🧩 What to Expect in the Code

You're likely given a class like this:

```php
namespace App;

class XmlCsvConverter
{
    public function loadXml(string $xmlString): array
    {
        // TODO: Parse and return XML as array
    }

    public function convertToCsv(array $data): string
    {
        // TODO: Convert array to CSV string
    }

    public function filterByField(array $data, string $field, string $value): array
    {
        // TODO: Filter data based on field and value
    }
}
```

And DevSkiller has PHPUnit tests that call these methods with specific input/output.

---

### 🛠️ 1. `loadXml(string $xmlString): array`

Convert an XML string like:

```xml
<movies>
  <movie>
    <title>Inception</title>
    <year>2010</year>
    <genre>Sci-Fi</genre>
  </movie>
  <movie>
    <title>Interstellar</title>
    <year>2014</year>
    <genre>Sci-Fi</genre>
  </movie>
</movies>
```

To:

```php
[
  ['title' => 'Inception', 'year' => '2010', 'genre' => 'Sci-Fi'],
  ['title' => 'Interstellar', 'year' => '2014', 'genre' => 'Sci-Fi']
]
```

---

### 🛠️ 2. `convertToCsv(array $data): string`

Convert the array above into a CSV string like:

```csv
title,year,genre
Inception,2010,Sci-Fi
Interstellar,2014,Sci-Fi
```

---

### 🛠️ 3. `filterByField(array $data, string $field, string $value): array`

Filter rows where `$row[$field] === $value`

---

### ✅ Summary of What DevSkiller Is Testing

| Skill                      | Shown via                         |
| -------------------------- | --------------------------------- |
| XML parsing                | `loadXml()` with SimpleXML        |
| CSV generation             | `convertToCsv()` with `fputcsv()` |
| Filtering arrays           | `filterByField()`                 |
| Clean, correct PHP         | Matching test expectations        |
| Working with file-like I/O | `php://temp` stream (for CSV)     |

---

### 🧪 Bonus Tips for DevSkiller

* **Run the tests early** — they tell you exactly what output is expected.
* If a test fails, inspect:

  * Data types (`int` vs `string`)
  * Newlines in CSV (`\n` vs `\r\n`)
  * Header order in CSV
* Don't echo or dump anything
* Respect function signatures exactly
