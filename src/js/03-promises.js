import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formRef = document.querySelector('.form');

formRef.addEventListener('submit', function (e) {
  e.preventDefault()
  const formData = new FormData(formRef)

  
    const delay = Number(formData.get('delay'));
    const step = Number(formData.get('step'));
    const amount = Number(formData.get('amount'));

    let delays = [];
    let num = delay;
    

    for (let index = 1; index <= amount; index ++) {
      delays.push(num);
      num += step
    }

    delays.forEach((element,index) => {

      createPromise(index,element)
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position + 1} in ${delay}ms`)
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position + 1 } in ${delay}ms`);
    });
    });
}
);

function createPromise(position, delay) {
  
  const promise = new Promise((resolve,reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      const obj = {
        position:position,
        delay:delay
      }

      if(shouldResolve){
        resolve(obj)
      } else {
        reject(obj)
      }
    }, delay);
  })

  return promise
}


