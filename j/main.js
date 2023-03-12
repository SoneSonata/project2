document.addEventListener('DOMContentLoaded', init);
//var myinterval = setInterval(changeSlide, 2000);

function init() {
  //create shortcut vars
  const back_btn = document.querySelector(".back-btn");
  const next_btn = document.querySelector(".next-btn");
  const frame = document.querySelectorAll(".frame");
  const slides = document.querySelectorAll("img");
  const albums = document.querySelectorAll(".album");
  //const album1 = document.getElementById('shows');
  //const album2 = document.getElementById('games');
  //const album3 = document.getElementById('pc');
  const showbutton = document.querySelector('.a1');
  const gamebutton = document.querySelector('.a2');
  const pcbutton = document.querySelector('.a3');
  const controls = document.querySelector(".controls");
  const captions = document.querySelectorAll("figcaption");
  const nav = document.querySelector('nav');
  const gallery = document.querySelector('section');
  
  //with JS active, hide all images
  slides.forEach((slide) => {
    slide.classList.add("hide");
  });
  albums.forEach((album) => {
    album.classList.add("hide");
  });
  captions.forEach((caption) => {
    caption.classList.remove("hide");
  })
  gallery.classList.remove("nojs");
  
  controls.classList.remove("hide");
  nav.classList.remove("hide");
  
  // show the first slide
  slides[0].classList.remove("hide");
  albums[0].classList.remove("hide");
  
   next_btn.addEventListener("click",changeSlide);
   back_btn.addEventListener("click", changeSlide);
   showbutton.addEventListener("click", changeAlbum);
   gamebutton.addEventListener("click", changeAlbum);
   pcbutton.addEventListener("click", changeAlbum);
   


}



function changeSlide(e) {
  if(e) {
    // stop link from trying to reload page
    e.preventDefault();
    //clearInterval(myinterval);
  }
    
    //shortcut vars
    const frame = document.querySelector(".gallery");
    const album = frame.querySelector("div.currenta");
    const slides = album.querySelectorAll("img");
    let showing = album.querySelector(".current");
    let nextUp = "";
    let caption = document.getElementById('caption');
    let caption2 = document.getElementById('caption2');
    let caption3 = document.getElementById('caption3');
    const curalbum = document.querySelector(".currenta");
  
    if(!e || e.target.className == 'next-btn') {
      nextUp = showing.nextElementSibling;
    } else if (e.target.className == "back-btn") {
      nextUp = showing.previousElementSibling;
    }
    
    // deactivate current image
    showing.classList.add("hide");
    showing.classList.remove("current");
    
    //make sure next image is there
    if (!nextUp) {
      nextUp = slides[slides.length - 1];
    }
  
    if (nextUp.nodeName !== "IMG") {
      nextUp = slides[0];
    }
  
    // activate next image
    nextUp.classList.remove("hide");
    nextUp.classList.add("current");

    //grab the alt text from current image
    let altText = nextUp.getAttribute('alt');

    //change the figcaption to the alt text
    caption.innerText = altText;
    caption2.innerText = altText;
    caption3.innerText = altText;

    nextUp.classList.add("fade");
  }

function changeAlbum(e) {
    if(e) {
    // stop link from trying to reload page
    e.preventDefault();
    //clearInterval(myinterval);
    }
    // stop link from trying to reload page
    //albumName.preventDefault();
   
    
    //shortcut vars
    const frame = document.querySelector(".frame");
    const slides = frame.querySelectorAll("img");
    //const albums = document.querySelectorAll(".album");
    let showingp = document.querySelector(".current");
    let showing = document.querySelector(".currenta");
    let nextAlbum = "";
    let firstImage = "";
    
    if(e.target.className == 'a1') {
      nextAlbum = document.getElementById('shows');
      firstImage = document.getElementById('s1');
    }

    else if(e.target.className == 'a2') {
      nextAlbum = document.getElementById('games');
      firstImage = document.getElementById('g1');
    }

    else if(e.target.className == 'a3') {
      nextAlbum = document.getElementById('pc');
      firstImage = document.getElementById('p1');
    }

    
    
    
    // deactivate current album
    showing.classList.add("hide");
    showing.classList.remove("currenta");
    showingp.classList.add("hide");
    showingp.classList.remove("current");
    
    
  
    // activate next album
    nextAlbum.classList.remove("hide");
    nextAlbum.classList.add("currenta");
    firstImage.classList.remove("hide");
    firstImage.classList.add("current");
    firstImage.classList.add("fade");

    let altText = firstImage.getAttribute('alt');

    caption.innerText = altText;
    caption2.innerText = altText;
    caption3.innerText = altText;
    


  }