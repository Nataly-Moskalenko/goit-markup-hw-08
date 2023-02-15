const buttonAll = document.querySelector('button.all');
const buttonWebsite = document.querySelector('button.website');
const buttonApplication = document.querySelector('button.application');
const buttonDesign = document.querySelector('button.design');
const buttonMarketing = document.querySelector('button.marketing');

const liWebsite = document.querySelectorAll('li.website');
const liApplication = document.querySelectorAll('li.application');
const liDesign = document.querySelectorAll('li.design');
const liMarketing = document.querySelectorAll('li.marketing');

function hidden(elements) {
  elements.forEach((element) => {
    element.classList.add('is-hidden');
  });
}

function visible(elements) {
  elements.forEach((element) => {
    element.classList.remove('is-hidden');
  });
}

function onClickWebsite() {
  hidden([...liApplication, ...liDesign, ...liMarketing]);
  visible(liWebsite);
}

function onClickApplication() {
  hidden([...liDesign, ...liMarketing, ...liWebsite]);  
  visible(liApplication);
}

function onClickDesign() {
  hidden([...liApplication, ...liMarketing, ...liWebsite]);
  visible(liDesign);
}

function onClickMarketing() {
  hidden([...liApplication, ...liDesign, ...liWebsite]);
  visible(liMarketing);
}

function onClickAll() {
  visible([...liApplication, ...liDesign, ...liMarketing, ...liWebsite]);
}

buttonWebsite.addEventListener('click', onClickWebsite);
buttonApplication.addEventListener('click', onClickApplication);
buttonDesign.addEventListener('click', onClickDesign);
buttonMarketing.addEventListener('click', onClickMarketing);
buttonAll.addEventListener('click', onClickAll);
