const menuIcon = document.querySelector('.menu-icon');
const menuList = document.querySelector('nav');
const hamburgerIcon = document.querySelector('.fa-solid');

menuIcon.addEventListener('click', () => {
  if (hamburgerIcon.classList[1] === 'fa-bars') {
    hamburgerIcon.classList.remove('fa-bars');
    hamburgerIcon.classList.add('fa-xmark');
    menuList.style.display = 'block';
  } else {
    hamburgerIcon.classList.add('fa-bars');
    hamburgerIcon.classList.remove('fa-xmark');
    menuList.style.display = 'none';
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 600) {
    menuList.style.display = '';
    hamburgerIcon.classList.replace('fa-xmark', 'fa-bars');
  }
});

// SPUSTENIE TEXTU H1 PO NACITANI STRANKY

const heading = document.querySelector('.heading-welcome');

if (heading) {
  const text = 'Welcome to the world of unicorns!';

  let index = 0;

  const displayText = () => {
    if (index < text.length) {
      heading.textContent += text.charAt(index);
      index++;
      setTimeout(displayText, 150); // Zpoždění e.g. 100ms mezi písmeny
    }
  };

  displayText(); // Spustíme funkci při načtení stránky
}
// FLYING IMAGE - OBRAZEK POLETI NAHORE NA STRANKE ABOUT-US

const flyingImage = document.querySelector('.flying-image');

if (flyingImage) {
  flyingImage.addEventListener('click', () => {
    flyingImage.style.transform = 'translateY(-100vh)';

    setTimeout(() => {
      flyingImage.style.transform = 'translateY(0)';
    }, 5000);
  });
}

// ZMENA CLASSY NA BUTTON V ABOUT US

const buttonUnicorn = document.querySelector('.button-aboutus__unicorn');
console.log(buttonUnicorn);
const mainAboutus = document.querySelector('.main-aboutus');

buttonUnicorn.addEventListener('click', () => {
  buttonUnicorn.classList.toggle('button-aboutus__light');

  if (buttonUnicorn.classList.contains('button-aboutus__light')) {
    buttonUnicorn.textContent = 'Light mode';

    mainAboutus.style.background = '#111';
  } else {
    buttonUnicorn.textContent = 'Unicorn mode';
    mainAboutus.style.background = 'whitesmoke';
  }
});
