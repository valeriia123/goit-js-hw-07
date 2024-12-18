const formEl = document.querySelector('.login-form');
// console.dir(formEl);

formEl.addEventListener('submit', event => {
    event.preventDefault();
    const formData = {
        email: formEl.elements.email.value.trim(),
        password: formEl.elements.password.value.trim(),
    }
    if (formData.email === '' || formData.password === '') {
        alert('All form fields must be filled in');
    } else {
        console.log(formData);
    }
    formEl.reset();
})
