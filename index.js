const hamBtn = document.querySelector('.hamburger-toggle');

hamBtn.addEventListener('click', function(){
 const showBtn = document.querySelector('.hamburger-card');

 if (showBtn.style.display === 'none') {
  showBtn.style.display = 'block';
 } else {
  showBtn.style.display = 'none';
 }

})