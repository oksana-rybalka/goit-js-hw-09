let formData = { 
    email: "", 
    message: "" 
}
const feedBackForm = document.querySelector('.feedback-form');
const localStorageKey = "feedback-form-state";

feedBackForm.addEventListener('input', handleInput); 
function handleInput (event) {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(localStorage, JSON.stringify(formData));
}

function recoveryFormData() {
    const savedData = localStorage.getItem(localStorageKey);
    
    if (savedData) {
        formData = JSON.parse(savedData);
        feedBackForm.email.value = formData.email;
        feedBackForm.message.value = formData.message;
    }
}

feedBackForm.addEventListener('submit', handleSubmit);
function handleSubmit (event) {
    event.preventDefault ();
     if(formData.email === '' || formData.message === '') {
        alert('Fill please all fields');
        return;
     }
     console.log(formData);
     localStorage.removeItem(localStorageKey);
     formData = {email:'', message:''};
     feedBackForm.reset()
}


