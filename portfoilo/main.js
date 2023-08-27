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
observer.observe(cont[3])


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
  var num = document.querySelector(".portfolio__num");
  num.style.display = "block";
}

function mail() {
  var send = document.querySelector(".portfolio__mailto");
  send.style.display = "block";
}

var phoneButton = document.querySelector(".portfolio__contacticon--phone");
phoneButton.addEventListener('click', phone);

var mailButton = document.querySelector(".portfolio__contacticon--mail");
mailButton.addEventListener('click', mail);
