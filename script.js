function submitForm() {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzCNApHpe2jO62LzKPulAFuX6lZjHP20a21N17D8nucD-Xl5FlzmhD2UANPc8-6v7fS/exec";
  const form = document.getElementById('registrationForm');

  const formData = new FormData(form);

  fetch(scriptURL, { method: 'POST', body: formData })
    .then(response => {
      alert('Form submitted successfully!');
      form.reset();
    })
    .catch(error => {
      console.error('Error!', error.message);
      alert('There was an error submitting the form.');
    });
}
