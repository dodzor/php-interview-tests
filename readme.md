### **🧪 Exercițiul 1 – Backend (PHP + MySQL)**

**Creează un endpoint PHP (`submit.php`) care:**
* Primește date dintr-un formular: `name`, `email`, `message`
* Salvează datele într-o tabelă MySQL: `contact_messages(id, name, email, message, created_at)`
* Returnează un răspuns JSON cu mesaj de succes sau eroare

**Ce trebuie să folosești:**
* `$_POST`
* `mysqli` sau `PDO`
* `prepared statements`
* `json_encode()`
* `date('Y-m-d H:i:s')`

### **🧪 Exercițiul 2 – Frontend (Vanilla JS + HTML + CSS)**

**Creează o pagină (`index.html`) cu:**
* Un formular cu 3 câmpuri: `name`, `email`, `message`
* Când userul apasă "Trimite", datele să fie trimise cu `fetch()` către `submit.php`
* Răspunsul de la server (JSON) să fie afișat într-un `div` (verde dacă e success, roșu dacă e eroare)

**Ce trebuie să folosești:**
* `document.querySelector()`
* `addEventListener('submit')`
* `fetch()`
* `FormData`
* `innerText`, `classList.add/remove`

### **🧪 Exercițiul 3 – Afișare date salvate (Read)**

**Creează un fișier PHP (`messages.php`) care:**
* Conectează la baza de date
* Selectează ultimele 10 mesaje din `contact_messages`
* Le afișează într-un tabel HTML (fără JavaScript)

---

### **🧪 Exercițiul 4 – Ștergere cu JavaScript (AJAX Delete)**

Extinde `messages.php`:

* Adaugă câte un buton „Șterge” pentru fiecare mesaj
* Când se apasă, trimite un `fetch()` cu `method: "DELETE"` către `delete.php?id=123`
* `delete.php` șterge mesajul și returnează `{"success": true}`
* Elimină mesajul șters din DOM fără reload

---

### **🧪 Exercițiul 5 – Bonus (Validare + Securitate)**

* Validează în JS și PHP ca email-ul să fie valid
* Folosește `htmlspecialchars()` când afișezi datele
* Folosește `password_hash()` și `password_verify()` dacă adaugi login

---

## ✅ Ce obții dacă le faci:

* Acoperi 90% din ce poate apărea în test
* Exersezi frontend–backend flow
* Ai o aplicație reală mică ce rulează local sau pe un VPS

---

Vrei să-ți ofer și o **structură de directoare + fișiere de bază** ca punct de pornire? Sau să-ți trimit arhiva cu template-ul starter?
