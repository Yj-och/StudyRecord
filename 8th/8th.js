'use strict';
{

  document.getElementById('my-red').addEventListener('click', () => {
    document.querySelector('body').classList.toggle('red');
  })
  document.getElementById('my-blue').addEventListener('click', () => {
    document.querySelector('body').classList.toggle('blue');
  })
  document.getElementById('my-gold').addEventListener('click', () => {
    document.querySelector('body').classList.toggle('gold');
  })

}
{

  document.querySelector('#btn1').addEventListener('click', (e) => {
    const li = document.createElement('li');
    const text = document.querySelector('input');
    li.textContent = text.value
    document.querySelector('ul').appendChild(li);
    text.value = '';
    text.focus();
  });
  // 打ち消し線
  document.querySelector('ul').addEventListener('click', e => {
    if (e.target.nodeName === 'LI') {
      e.target.classList.toggle('done');
    }
  });

  // --------------select Box---------------------
  document.querySelector('#selectButton').addEventListener('click', () => {
    const li = document.createElement('li');
    const color = document.querySelector('select');
    li.textContent = `${color.value}-${color.selectedIndex}`;
    document.querySelector('#ul2').appendChild(li);
  });
}
  // ----------------raidio Button----------------

{
  document.querySelector('#btn2').addEventListener('click', () => {
      const colors = document.querySelectorAll('#input');
      let selectedColor;

      colors.forEach(color => {
        if (color.checked === true) {
          selectedColor = color.value
        }
      });
      const li = document.createElement('li');
      li.textContent = selectedColor;
      document.querySelector('#ul3').appendChild(li);
    });
}


// ----------------check Box----------------

{

  document.querySelector('#btn4').addEventListener('click', () => {
    const colors = document.querySelectorAll('#checkbox');
    const selectedColors = [];

    colors.forEach(color => {
      if (color.checked === true) {
        selectedColors.push(color.value);
      }
    });

    const li = document.createElement('li');
    li.textContent = selectedColors;
    document.querySelector('#ul4').appendChild(li);
  });
}












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



