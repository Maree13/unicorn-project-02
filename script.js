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

// let textTimeout;

const textUniversalFunction = (element, headingText) => {
  let index = 0;

  const displayText = () => {
    if (index < headingText.length) {
      element.textContent += headingText.charAt(index);
      index++;
      setTimeout(displayText, 150); // Zpoždění e.g. 100ms mezi písmeny
    }
  };

  displayText(); // Spusti funkciu pri načtení stránky
};

const heading = document.querySelector('.heading-welcome');
if (heading) {
  textUniversalFunction(heading, 'Welcome to the world of unicorns!');
}

const aboutusHeading = document.querySelector('.aboutus-heading'); // pridavam druhy heading
if (aboutusHeading) {
  textUniversalFunction(
    aboutusHeading,
    'Hi, wanna fly with me? Click on the red baloon!',
  );
}

// FLYING IMAGE - OBRAZEK POLETI NAHORE NA STRANKE ABOUT-US

const flyingImage = document.querySelector('.flying-image');

if (flyingImage) {
  flyingImage.addEventListener('click', () => {
    flyingImage.style.transform = 'translateY(-100vh)';

    setTimeout(() => {
      flyingImage.style.transform = 'translateY(0)';
    }, 6000);
  });
}

// ZMENA CLASSY NA BUTTON V ABOUT US - DARK / LIGHT MODE

const buttonUnicorn = document.querySelector('.button-aboutus__unicorn');
const mainAboutus = document.querySelector('.main-aboutus');

if (buttonUnicorn) {
  buttonUnicorn.addEventListener('click', () => {
    buttonUnicorn.classList.toggle('button-aboutus__light');

    // clearTimeOut(textTimeout);
    // aboutusHeading.textContent = '';

    if (buttonUnicorn.classList.contains('button-aboutus__light')) {
      buttonUnicorn.textContent = 'Light mode';
      mainAboutus.style.background = '#111';
      aboutusHeading.style.color = 'whitesmoke';
      aboutusHeading.textContent = 'we are flying to the moon!';
    } else {
      buttonUnicorn.textContent = 'Unicorn mode';
      mainAboutus.style.backgroundColor = 'whitesmoke';
      aboutusHeading.style.color = '#111';
      aboutusHeading.textContent =
        'Hi, wanna fly with me? Click on the red baloon!';
    }
  });
}
