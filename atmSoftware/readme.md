** https://devskiller.com/coding-tests/junior-php-developer-phpunit-atm-software-project/ **

Implement **four classes** to simulate an **ATM (Automated Teller Machine)** system in PHP.

Let’s break it down so you know **what they likely expect**, how to **structure your classes**, and **what concepts they’re assessing**.

---

## 🧠 What the Test Probably Involves

You’re asked to:

> **Implement four classes** to finish the **ATM software project**

This usually means:

* There is an incomplete ATM system skeleton
* You have to complete class definitions and their methods
* You must follow specific OOP rules

---

## 🏗️ Typical Class Design for an ATM Project

Here’s a **reasonable guess** at what the four classes could be:

### 1. **ATM**

The main controller class handling user interactions like withdraw, deposit, check balance.

---

### 2. **Account**

Represents a bank account, with methods to add/subtract funds.

---

### 3. **Card**

Represents a debit/ATM card, possibly linked to an account or holding auth info.

---

### 4. **Transaction**

Represents a single transaction (withdraw, deposit, etc), maybe even logs it.

---

## ✅ OOP Concepts You’ll Likely Be Tested On

* **Encapsulation** (private properties, public getters/setters)
* **Composition** (ATM uses Account, Card)
* **Possibly Inheritance or Interfaces**
* **Error handling** (e.g., insufficient funds)
* **Constructor Injection**
* **Testability** (DevSkiller usually has pre-written PHPUnit tests)

---

## 🧪 What You Should Do in the Task

1. **Read the test instructions carefully** — sometimes the method signatures are pre-defined and must not be changed.
2. **Stick to the file names and class names they provide.**
3. **Run or read unit tests if available** — they tell you exactly what’s expected.
4. **Avoid using `echo` unless required** — usually the system expects return values.


