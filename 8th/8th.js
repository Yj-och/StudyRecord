'use strict';

(() => {
  document.querySelector('button').addEventListener('click', () => {
    const li = document.createElement('li');
    const text = document.querySelector('input');
    li.textContent = text.value
    document.querySelector('ul').appendChild(li);

    text.value = '';
    text.focus();
  });




//  document.querySelector('button').addEventListener('click', () => {
//    const item0 = document.querySelectorAll('li')[0];
//    const copy = item0.cloneNode(true);


//   //  const ulll = document.querySelector('ul');
//    const item2 = document.querySelectorAll('li')[2];
//    document.querySelector('ul').insertBefore(copy, item2);
//   });

  // document.querySelector('button').addEventListener('click', () => {
  //   const item2 = document.createElement('li');
  //   item2.textContent = ('item 2');

  //   const ulll = document.querySelector('ul');
  //   ulll.appendChild(item2);
  // });

  // document.querySelector('button').addEventListener('click', () => {
  //   const item3 = document.createElement('li');
  //   item3.textContent = ('aaaaaa');

  //   const a = document.querySelector('ul');
  //   a.appendChild(item3);
  // });

  //   document.querySelector('button').addEventListener('click', () => {
  //     document.querySelectorAll('p').forEach((a)=> {
  //       a.classList.toggle('my-color');
  //     })
  //     // document.querySelectorAll('p')[1].classList.toggle('my-color');
  //     // document.querySelectorAll('p')[2].classList.toggle('my-color');
  // })



})();