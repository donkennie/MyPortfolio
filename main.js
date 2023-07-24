
const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})

// ===== Scroll to Top ==== 
// $(window).scroll(function() {
//   if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
//       $('#return-to-top').fadeIn(200);    // Fade in the arrow
//   } else {
//       $('#return-to-top').fadeOut(200);   // Else fade out the arrow
//   }
// });
// $('#return-to-top').click(function() {      // When arrow is clicked
//   $('body,html').animate({
//       scrollTop : 0                       // Scroll to top of body
//   }, 500);
// });


var returnToTop = document.getElementById('return-to-top');

returnToTop.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

