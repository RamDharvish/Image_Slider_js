// const slides=document.querySelectorAll(".slide")

// var counter=0

// slides.forEach((slide, index) => {
//     slide.style.left = `${index * 100}%`;
//   });
//   function goprev(){
//     counter--
//     slideImage()
//   }

//    function gonxt(){
//     counter++
//     slideImage()
//    }

//   function slideImage(){
//     slides.forEach(
//         (slide)=>{
//             slide.style.transform=`translateX(-${counter * 100}%)`
//         }
//     )
//   }


const slides = document.querySelectorAll(".slide");
var counter = 0;

slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});

function goprev() {
  counter--;
  if (counter < 0) {
    counter = slides.length - 1;
  }
  slideImage();
}

function gonxt() {
  counter++;
  if (counter >= slides.length) {
    counter = 0;
  }
  slideImage();
}

function slideImage() {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - counter) * 100}%)`;
  });
}
