import Notiflix from 'notiflix';

const form = document.querySelector('.form');
form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  const{ delay, step, amount } = event.currentTarget.elements;

  for (let i = 0; i < amount.value; i++){
    let position = i + 1;
    const delays = Number(delay.value) + step.value * i;

    createPromise(position, delays).then(
      value => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delays}ms`); // "Success! Value passed to resolve function"
      },
      error => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delays}ms`); // "Error! Error passed to reject function"
      }
    );
  } 
  event.currentTarget.reset();
}




function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

