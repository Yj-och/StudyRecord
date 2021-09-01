'use strict';
{
  const open = document.getElementById('materialOpen');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('materialclose');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  })
  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  })
}


// ------------------------------------
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

// -----------カルーセル部品---------------
{
  class Carousel {
    constructor(cid) {
      this.next = document.getElementById(cid.carouselNextId);
      this.prev = document.getElementById(cid.carouselprevId);
      this.ul = document.getElementById(cid.carouselTagName);
      this.nav = document.getElementById(cid.carouselNavName);
      this.slides = this.ul.children;
      this.dots = [];
      this.currentIndex = 0;
    }

    upb() {
      this.prev.classList.remove('hidden');
      this.next.classList.remove('hidden');

      if (this.currentIndex === 0) {
        this.prev.classList.add('hidden');
      }
      if (this.currentIndex === this.slides.length - 1) {
        this.next.classList.add('hidden');
      }
    }
    setDots() {
      for (let i = 0; i < this.slides.length; i++) {
        const button = document.createElement('button');
        button.addEventListener('click', () => {
          this.currentIndex = i;
          this.updateDots();
          this.upb();
          this.move();
        });
        this.dots.push(button);
        this.nav.appendChild(button);
      }
      this.dots[0].classList.add('current');
    }
    updateDots() {
      this.dots.forEach(dot => {
        dot.classList.remove('current');
      });
      this.dots[this.currentIndex].classList.add('current');
    }

    move() {
      const slideWidth = this.slides[0].getBoundingClientRect().width;
      this.ul.style.transform = `translateX(${-1 * slideWidth * this.currentIndex}px)`;
    }

    addListeners() {
      this.next.addEventListener('click', () => {
        this.currentIndex++;
        this.upb();
        this.updateDots();
        this.move();
      })
      this.prev.addEventListener('click', () => {
        this.currentIndex--;
        this.upb();
        this.updateDots();
        this.move();
      })
    }
  }

  const carousel = new Carousel({
    carouselprevId: 'prev',
    carouselNextId: 'next',
    carouselTagName: 'js-TagId',
    carouselNavName: 'nav'
  });
  carousel.upb();
  carousel.setDots();
  carousel.addListeners();

  const nextCarousel = new Carousel({
    carouselNextId: 'nextCarousel',
    carouselprevId: 'prevCarousel',
    carouselTagName: 'js-TagIdSecond',
    carouselNavName: 'js-nav',
  });
  nextCarousel.upb();
  nextCarousel.setDots();
  nextCarousel.addListeners();

}
// -------------アコーディオンUI--------------

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




















// {
//   function sum(a, b, c) {
//     // console.log(a + b + c);
//     return a + b + c;
//     // console.log(a + b + c);
//   }

//   // sum(1, 2, 3);
//   // sum(3, 4, 5);

//   const total = sum(1, 2, 3) + sum(3, 4, 5); // 18
//   console.log(total);

// }

// const posts = [
//   {
//     text: 'JavaScriptの勉強中…',
//     likeCount: 0,
//     show() {
//       console.log(`${this.text} - ${this.likeCount}いいね`);
//     },
//   },
//   {
//     text: 'プログラミング楽しい！',
//     likeCount: 0,
//     show() {
//       console.log(`${this.text} - ${this.likeCount}いいね`);
//     },
//   },
// ];


// posts[0].show();
// posts[1].show();