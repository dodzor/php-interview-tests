document.addEventListener('DOMContentLoaded', () => {

    const contactForm = document.querySelector('#contactForm');
    const result = document.getElementById('result');

    contactForm && contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);

        const submitButton = contactForm.querySelector('button[type="submit"]');
        submitButton.disable = true;
        submitButton.innerHTML = 'Se salveaza...';

        fetch('submit.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            result.style.display = 'block';
            result.classList.remove('success', 'error');
            
            if (data.success) {
                result.textContent = data.message;
                result.classList.add('success');
                submitButton.disable = false;
                submitButton.innerHTML = 'Salveaza';
            } else {
                result.textContent = data.message;
                result.classList.add('error');
            }
        })
        .catch(error => {
            result.textContent = `Eroare: ${error.message}`;
            result.style.display = 'block';
            result.classList.remove('success', 'error');
            result.classList.add('error');
        });
    })

    const deleteButtons = document.querySelectorAll('.delete-btn');
    console.log(deleteButtons);
    deleteButtons && deleteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const id = button.getAttribute('data-id');
            fetch('delete.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    button.closest('tr').remove();
                } else {
                    console.error('Eroare la stergerea mesajului:', data.message);
                }
            })
            .catch(error => {
                console.error('Eroare la stergerea mesajului: ', error.message);
            })
        });
    });
});
