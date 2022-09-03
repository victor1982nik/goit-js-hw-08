import { throttle } from 'lodash';
import { getData, saveData } from './storage';

const keyLocalStorage = 'feedback-form-state';
const formRef = document.querySelector(".feedback-form");

const email = formRef.elements.email;
const message = formRef.elements.message;

onInit();

function onInit() {   
    const savedData = getData(keyLocalStorage);
    
    if (savedData) {
        email.value = savedData.email;
        message.value = savedData.message;
    }
}

formRef.addEventListener('input', throttle(handleInput, 500));
formRef.addEventListener('submit', handleSubmit);

function handleInput(e) {    
    saveData({ email: email.value, message: message.value }, keyLocalStorage);
}

function handleSubmit(e) {    
    e.preventDefault();
    console.log({ email: email.value, message: message.value });
    email.value = '';
    message.value = '';
    localStorage.clear();
}
