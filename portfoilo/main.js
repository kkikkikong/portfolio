const observer = new IntersectionObserver((e) => {
  e.forEach((box) => {
    if (box.isIntersecting) {
      if (box.target === cont[0]) {
        setTimeout(() => {
          box.target.style.opacity = 1;
        }, 3500);
      } else if (box.target === cont[1]) {
        box.target.style.opacity = 1;
        box.target.classList.add('page2');
      } else if (box.target === cont[2]) {
        box.target.style.opacity = 1;
        box.target.classList.add('page3');
      } else if (box.target === cont[3]) {
        box.target.style.opacity = 1;
        box.target.classList.add('page4');
      }
    } else {
    }
  })
})

const cont = document.querySelectorAll('.portfolio__cont')

// html 요소 감시
observer.observe(cont[0])
observer.observe(cont[1])
observer.observe(cont[2])


// const content = 'PORTFOILO';
// const text = document.querySelector('.portfolio__tit');
// let i = 0;
// function typing(){
//   if (i < content.length) {
//     let txt = content.charAt(i);
//     text.innerHTML += txt;
//     i++;
//   } 
// }
// setInterval(typing, 200)

function typing(target, content, duration) {
  if (!target || !content) return;
  let timer;
  let cursor = 0;
  
  return new Promise(resolve => {
    timer = setInterval(() => {
      if (cursor < content.length) {
        target.innerHTML += content.charAt(cursor);
        cursor++;
      } else {
        clearInterval(timer);
        resolve();
      }
    }, duration);
  })
}


typing(document.querySelector('.portfolio__tit'), "PORTFOILO", 200)
.then(() => {
  return typing(document.querySelector('.portfolio__master'), "FE 개발자 유예나", 100); 
})
.then(() => {
  console.log("모든 타이핑이 완료되었습니다.");
});


// contact
function phone() {
  const num = document.querySelector(".portfolio__informtxt--num");
  if (num.style.display === "block") {
    num.style.display = "none";
  } else {
    num.style.display = "block";
  }
}

function mail() {
  const send = document.querySelector(".portfolio__mailto");
  if (send.style.display === "block") {
    send.style.display = "none";
  } else {
    send.style.display = "block";
  }
}

const phoneButton = document.querySelector(".portfolio__contacticon--phone");
phoneButton.addEventListener('click', phone);

const mailButton = document.querySelector(".portfolio__contacticon--mail");
mailButton.addEventListener('click', mail);



// slide
const SHOWING_CL = "portfolio__showing";
const firstSlider = document.querySelector(".portfolio__slide-item:first-child");
const sliderBtn = document.querySelector(".portfolio__slide");

function slider(){
  const currentSlider = document.querySelector(`.${SHOWING_CL}`);
  if(currentSlider){
    currentSlider.classList.remove(SHOWING_CL);
    const nextSlider = currentSlider.nextElementSibling;
    if(nextSlider){
      nextSlider.classList.add(SHOWING_CL);
    }else{
      firstSlider.classList.add(SHOWING_CL);    
    }
  }else{
    firstSlider.classList.add(SHOWING_CL);
  }
}
function init(){
  // sliderBtn.addEventListener("click", slider);
  firstSlider.classList.add(SHOWING_CL);
}
init();


// slideBtn
const prevBtn = document.querySelector('.portfolio__btn--prev')
const nextBtn = document.querySelector('.portfolio__btn--next')

prevBtn.addEventListener('click', prev);
function prev() {
  const currentSlider = document.querySelector(`.${SHOWING_CL}`);
  if (currentSlider) {
    currentSlider.classList.remove(SHOWING_CL);
    const prevSlider = currentSlider.previousElementSibling;
    if (prevSlider) {
      prevSlider.classList.add(SHOWING_CL);
    } else {
      const lastSlider = document.querySelector(".portfolio__slide-item:last-child");
      lastSlider.classList.add(SHOWING_CL);
    }
  }
}
nextBtn.addEventListener('click', next);
function next() {
  const currentSlider = document.querySelector(`.${SHOWING_CL}`);
  if (currentSlider) {
    currentSlider.classList.remove(SHOWING_CL);
    const nextSlider = currentSlider.nextElementSibling;
    if (nextSlider) {
      nextSlider.classList.add(SHOWING_CL);
    } else {
      firstSlider.classList.add(SHOWING_CL);
    }
  }
}
