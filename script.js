document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const scriptURL = 'https://script.google.com/macros/s/AKfycbw-VMzyzp8oSDaMdcX2-nI_IL-FJCQx51s6Rxj9fzewpn2s_lAbJ4dehGJKRr1GM6SY/exec'; // Replace with your Google Apps Script URL
    const formData = new FormData(event.target);

    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => {
            if (response.ok) {
                document.getElementById('successMessage').style.display = 'block';
                document.getElementById('errorMessage').style.display = 'none';
                event.target.reset();
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .catch(error => {
            document.getElementById('successMessage').style.display = 'none';
            document.getElementById('errorMessage').style.display = 'block';
            console.error('Error!', error.message);
        });
});
