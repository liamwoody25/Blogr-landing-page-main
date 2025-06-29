const hamBtn = document.querySelector('.hamburger-toggle');
const arrowBtn = document.querySelector('.link') 

function dropDown() {
  


}

arrowBtn.addEventListener('click', function(){
  console.log('click')
})

hamBtn.addEventListener('click', function(){
  const hamBurger = document.querySelector('.hamburger-card');
  if (hamBurger.style.display === 'block'){
    hamBurger.style.display = 'none';
  } else {
    hamBurger.style.display = 'block';
  }
})

