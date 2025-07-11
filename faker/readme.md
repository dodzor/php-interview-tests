** https://devskiller.com/coding-tests/junior-web-developer-php-javascript-sql-basic-data-manipulation/ **

> **PHP | Faker | Basic data manipulation**
> Implement all the methods in the `app/Faker` class.

---

### 🧠 What DevSkiller Is Testing

This task likely focuses on:

* Basic **PHP array & string manipulation**
* Using the **[Faker library](https://github.com/fzaninotto/Faker)** (or a simplified version of it)
* Understanding **OOP in PHP**
* Writing **helper methods** for generating/manipulating fake data (names, emails, addresses, etc.)

---

### 🏗️ Likely Class Structure

You’ll probably find a file like this:

```php
namespace App;

class Faker
{
    public function getRandomName(): string
    {
        // TODO: implement
    }

    public function getRandomEmail(): string
    {
        // TODO: implement
    }

    public function getRandomPhoneNumber(): string
    {
        // TODO: implement
    }

    public function anonymizeUser(array $user): array
    {
        // TODO: implement
    }
}
```

---

If you're not allowed to use Composer or external libs (e.g., `Faker\Factory::create()`), you'll probably need to simulate fake data manually.

### 🧠 Optional Twist: Real Faker Library (if allowed)

If DevSkiller includes Faker via Composer (`fakerphp/faker` or `fzaninotto/faker`), you can use it: https://github.com/fakerphp/Faker

---

### ✅ Tips for DevSkiller

* Stick to the **exact method names and return types**
* If unit tests are available, **run them early**
* If external libraries are **not loaded**, fake it manually
* Don’t `echo` or print inside the class — return values
