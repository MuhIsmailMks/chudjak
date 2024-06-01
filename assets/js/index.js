
// nav handler
const menu_btn = document.querySelector('nav .menu');
const links = document.querySelector('nav ul');

menu_btn.addEventListener('click', () => {
    menu_btn.classList.toggle('active')
    links.classList.toggle('active')
})

function chnageNavImage() {
    let lebarLayar = window.innerWidth;
    const gambar = document.querySelector('nav .icon img');

    // if (lebarLayar < 1024) {
    //     gambar.src = "./assets/images/logo-nav_mobile.png";
    // } else {
    //     gambar.src = "./assets/images/logo-nav.png";
    // }
}

window.onload = chnageNavImage;
window.addEventListener('resize', chnageNavImage);


// copied 

document.addEventListener('DOMContentLoaded', function() {
    const copyContractBtns = document.querySelectorAll('.copy-contract');
  
    copyContractBtns.forEach(copyContractBtn => {
      copyContractBtn.addEventListener('click', function() { 
        
      let copiedMessage = copyContractBtn.querySelector('.copied');
      let contractInput = copyContractBtn.querySelector('.contractInput');

        contractInput.select();
        document.execCommand('copy');
    
        // Tampilkan pesan terkopikan
        copiedMessage.classList.add('flex')
        copiedMessage.classList.remove('hidden')
     
        setTimeout(function() {
          copiedMessage.classList.remove('flex')
          copiedMessage.classList.add('hidden')
        }, 2000);
      });
      
    })
     
  });




// controller ScrollMagic
let controller = new ScrollMagic.Controller();

// animation scroll effext
const animations = [
  { selector: ".og_image", duration: 600, x: 100 },
  { selector: ".jet", duration: 5000, x: 300 }, 
  { selector: ".image_plan1", duration: 5000, x: -100 }, 
  { selector: ".image_plan2", duration: 5000, x: 100 }, 
  { selector: ".image_plan3", duration: 5000, x: -100 }, 
];

function adjustXValue() {
  const screenWidth = window.innerWidth;
  if (screenWidth > 1200) { 
    animations.forEach(animation => {
      animation.x = animation.x * 2;
    });
  }
}
 
adjustXValue();
window.addEventListener('resize', adjustXValue);



var tween1, tween2,tween3;

animations.forEach(animation => {
  var tween = gsap.to(animation.selector, {duration: 300, x: animation.x});

  var scene = new ScrollMagic.Scene({
    triggerElement: animation.selector,
    duration: animation.duration
  })
  .setTween(tween)
  .addTo(controller);
});
