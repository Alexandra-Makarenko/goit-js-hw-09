import Notiflix from 'notiflix';

const formSubmit = document.querySelector('button[type="submit"]');
const form = document.querySelector('.form')
const delayInput = document.querySelector('input[name="delay"]');
const stepInput = document.querySelector('input[name="step"]');
const amountInput = document.querySelector('input[name="amount"]');

let timerId = null;
const step = Number(stepInput.value);

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const amount = Number(amountInput.value);
    const firstdelay = Number(delayInput.value);
  for (let i = 0; i < amount; i++) {
    setTimeout(() => {
      createPromise(timerId, firstdelay);
    }, step)  
    createPromise().then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    timerId = setTimeout(() => {
         if (shouldResolve) {
    // Fulfill
    resolve({position,delay});
  } else {
    // Reject
    reject({position,delay});
  }
    },delay)
   
    }   
  )  
 
}

