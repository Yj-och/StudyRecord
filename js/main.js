'use strict';

{
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const modal = document.getElementById('modal');
  const mask = document.getElementById('mask');

  open.addEventListener('click', () => {
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
  });
  close.addEventListener('click', () => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });
  mask.addEventListener('click', () => {
    close.click();
  });
}

// アコーディオンUI
(() => {

  class Accordion {

    //初期化
    constructor(obj) {

      const $elm = document.querySelector(obj.hookName);
      const $trigger = $elm.getElementsByTagName(obj.tagName);

      const triggerLen = $trigger.length;
      let index = 0;
      while (index < triggerLen) {
        $trigger[index].addEventListener('click', (e) => this.clickHandler(e));
        index++;
      }
    }

    //クリックしたら実行される処理
    clickHandler(e) {
      e.preventDefault();

      const $target = e.currentTarget;
      const $content = $target.nextElementSibling;

      if ($content.style.display === 'block') {
        $content.style.display = 'none';
      } else {
        $content.style.display = 'block';
      }
    }
  }

  const fuckingAccordion = new Accordion({
    hookName: '#js-faq',
    tagName: 'p'
  });

  const dummyAccordion = new Accordion({
    hookName: '#js-accordion',
    tagName: 'a'
  });

  const miniAccordion = new Accordion({
    hookName: '#js-accordion-mini',
    tagName: 'dt'
  });

})();


// ------------------------------

// (() => {

//   class Post {
//     constructor(text) {
//       this.text = text;
//       this.likeCount = 0;
//     }

//     show() {
//       console.log(`${this.text}-${this.likeCount}いいね`);
//     }
//     like() {
//       this.likeCount++;
//       this.show();
//     }
//   };

//   // ----------------インスタンス
//   const posts = [
//     new Post('Javascript勉強中'),
//     new Post('プログラミング'),
//     new Post('あああああ'),
//     new Post('yaiyaiyai')
//   ];

//   posts[0].like();
  // posts[0].like();
  // posts[0].like();
  // posts[0].like();

  // posts[0].show();
  // posts[1].show();
  // posts[2].show();
  // posts[3].show();
// })();

document.getElementById('my-red').addEventListener('click', () => {
  document.querySelector('body').classList.toggle('red');
})
document.getElementById('my-blue').addEventListener('click', () => {
  document.querySelector('body').classList.toggle('blue');
})
document.getElementById('my-gold').addEventListener('click', () => {
  document.querySelector('body').classList.toggle('gold');
})


// -----------------カルーセル部品---------------
{
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const ul = document.querySelector('ul');
  const slides = ul.children;
  const dots=[];
  let currentIndex = 0;

  function upb() {
    prev.classList.remove('hidden');
    next.classList.remove('hidden');

    if (currentIndex === 0) {
      prev.classList.add('hidden');
    }
    if (currentIndex === slides.length - 1) {
      next.classList.add('hidden');
    }
  }
  function setDots(){
    for (let i = 0; i < slides.length; i++){
      const button = document.createElement('button');
      button.addEventListener('click', () => {
        currentIndex = i;
        updateDots();

        upb();
        move();
      });
      dots.push(button);
      document.getElementById('nav').appendChild(button);

    }
    dots[0].classList.add('current');
  }
  function updateDots() {
    dots.forEach(dot => {
      dot.classList.remove('current');
    });
    dots[currentIndex].classList.add('current');
}
  upb();
  setDots();

  function move() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
}
  next.addEventListener('click', () => {
    currentIndex++;
    upb();
    updateDots();
    move();
  })
  prev.addEventListener('click', () => {
    currentIndex--;
    upb();
    updateDots();
    move();
  })
  window.addEventListener('resize', () => {
    mave();
})
}









// const scores = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// const ather = [110, 120, 130, 140,];

// const str = 'hello';


// const d = new Date();

// console.log(`${d.getFullYear()}年${d.getMonth()+1}月`);
// console.log(d);
// const scores = [10, 20, 30];

// let sum = 0;
// scores.forEach(score => sum += score);

// const avg = sum / scores.length;
// console.log(sum);
// console.log(avg);



// const d = [2021, 8, 23];
// console.log(d.join('/'));

// const t = '17:10:59';
// // console.log(t.split(':'));

// const [hour, minite, second] = t.split(':')
// console.log(t[3])
// // console.log(hour);
// console.log(minite);
// console.log(second);
// console.log(t)

// console.log(str.length)
// console.log(str.substring(2, 4));
// const otherProps = {
//   r: 4,
//   color: "red",
// };

// const point = [
//   { x: 10, y: 20 },
//   { x: 30, y: 40 },
//   { x: 50, y: 60 },
// ];
// console.log(point[0].y);
// const p = Object.keys(point[0]);


// p.forEach(a => {
//   conosle.log(`key:${p[a]}`);
// });

// console.lopointg(point[0].x);
// console.log(point[1].y);


// const keys = Object.keys(point);
// keys.forEach(key => {
//   console.log(point[key]);
// })

// const { x, y, ...others } = point;
// console.log(x);
// console.log(y);
// console.log(others);


// const point = {
//   x: 80,
//   y: 100,
// };
// const pa = {
//   r: 4,
//   color: "red",
//   ...point,
// };
// console.log(point);
// console.log(pa);
// const { r, color, ...point} = pa;
// // console.log(x);
// // console.log(r);
// // console.log(color);



// point.x = 200;
// console.log(point.x);

// point.z = 300;
// delete point.x;
// console.log(point);

// const b = ather.filter(a => a % 3 === 0);
// console.log(b);

// const a = ather.map((p) => {
//   return p + 1000;
// });

// console.log(ather);
// console.log(a);

// ather.forEach((score,i) => {
//   console.log(`${i}:${score}`);
// });
// const [a, b, c, d] = ather;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// const score = [...scores,...ather];
// console.log(score);

// for (let i = 0; i < scores.length; i++){
//   console.log(`${i}:${scores[i]}`);
// }

// console.log(scores[1]);
// console.log(scores[11]);
// console.log(scores.length);

// scores.push(110, 120);
// scores.shift();
// scores.shift();
// scores.shift();
// scores.shift();
// scores.shift();
// scores.shift();
// scores.shift();
// scores.shift();
// scores.shift();
// scores.shift();
// scores.shift();
// scores.shift();
// scores.unshift(1000, 2000, 3000, 4000, 5000, 6789);
// scores.pop();
// scores.push(6000);
// scores.splice(2, 0, 2100, 2200, 2300);






