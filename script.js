document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
    const cursor = document.querySelector('.cursor');
    const cursorGlow = document.querySelector('.cursor-glow');
    const cursorInnerGlow = document.querySelector('.cursor-inner-glow');
    const cursorTrail = document.querySelector('.cursor-trail');
    const cursorRipple = document.querySelector('.cursor-ripple');
    const links = document.querySelectorAll('a'); 
    
    let lastX = 0;
    let lastY = 0;
    let distanceX = 0;
    let distanceY = 0;
    let speed = 0;
    let cursorSize = 25;
    
    // Отслеживаем движение мыши
    document.addEventListener('mousemove', (e) => {
      const x = e.pageX;
      const y = e.pageY;
    
      // Расчет скорости движения
      distanceX = x - lastX;
      distanceY = y - lastY;
      speed = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    
      // Двигаем курсор
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    
      cursorGlow.style.left = `${x}px`;
      cursorGlow.style.top = `${y}px`;
    
      cursorInnerGlow.style.left = `${x}px`;
      cursorInnerGlow.style.top = `${y}px`;
    
      cursorTrail.style.left = `${x}px`;
      cursorTrail.style.top = `${y}px`;
    
      cursorRipple.style.left = `${x}px`;
      cursorRipple.style.top = `${y}px`;
    
      // Реагируем на скорость
      if (speed > 60) {
        cursor.style.transform = 'scale(1.4)';
        cursorGlow.style.transform = 'scale(1.6)';
        cursorGlow.style.opacity = 0.7;
        cursorTrail.style.opacity = 0.4;
        cursorRipple.style.opacity = 0.9;
    
        cursor.classList.add('pulse');
        cursor.classList.add('wiggle');
      } else {
        cursor.style.transform = 'scale(1)';
        cursorGlow.style.transform = 'scale(1)';
        cursorGlow.style.opacity = 0.4;
        cursorTrail.style.opacity = 0.2;
        cursorRipple.style.opacity = 0;
    
        cursor.classList.remove('pulse');
        cursor.classList.remove('wiggle');
      }
    
      // Анимация ряби
      cursorRipple.style.animation = 'rippleEffect 1s forwards';
    
      // Обновляем старые значения
      lastX = x;
      lastY = y;
    });
    
    // Реакция на ссылки
    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hovered');
      });
    
      link.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hovered');
      });
    });
    


























    const typingElement = document.getElementById('typing');
    const words = ["Web Developer", "Developer", "Web Designer", "Youtuber", "Script Writer"];
    let wordIndex = 0;
    let letterIndex = 0;
    let currentWord = '';
    let currentLetters = '';
    let isDeleting = false;
    function type() {
        if (isDeleting) {
            currentLetters = currentWord.substring(0, letterIndex - 1);
            letterIndex--;
        } else {
            currentLetters = currentWord.substring(0, letterIndex + 1);
            letterIndex++;
        }

        typingElement.innerHTML = currentLetters;

        let typeSpeed = 200;
        if (isDeleting) {
            typeSpeed /= 2;
        }

        if (!isDeleting && letterIndex === currentWord.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            wordIndex++;
            if (wordIndex === words.length) {
                wordIndex = 0;
            }
            currentWord = words[wordIndex];
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }
    currentWord = words[wordIndex];
    type();
});
