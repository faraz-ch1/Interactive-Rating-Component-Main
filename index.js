const selectButtons = document.querySelectorAll(".button");
const submitButton = document.querySelector(".submit");

const frontPage = document.querySelector(".front-page");
const backPage = document.querySelector(".thank-you-box");

selectButtons.forEach((current, num, array) => {
  current.addEventListener("click", function(e){
      e.preventDefault();

// CHANGE RATING
      const actualValue = `${num + 1}`;
  document.querySelector(".act-rating").textContent = actualValue;

// CURRENT BUTTON COLOR ANIMATION
  array[num].classList.add("button-color");

// REMOVE NEIGHBOUR BUTTON COLOR ANIMATIONS
  if(num + 1 == 5){
    array[num - 1].classList.remove("button-animation");
  }
      array[num + 1].classList.remove("button-animation");
      array[num - 1].classList.remove("button-animation");

// REMOVE OTHER BUTTONS COLOR ANIMATION
let i = num;
num = 0;
  while(num < 5){
if(num !== i)
    array[num].classList.remove("button-color");
    num++;
    }
  });

// NEIGHBOUR BUTTONS HOVER ANIMATION
  current.addEventListener("mouseenter", function(e){
    e.preventDefault();

if(num + 1 == 5){
  array[num - 1].classList.add("button-animation");
}
    array[num + 1].classList.add("button-animation");
    array[num - 1].classList.add("button-animation");
  });

// NEIGHTBOUR BUTTONS HOVER ANIMATION END
  current.addEventListener("mouseout", function(e){
    e.preventDefault();

if(num + 1 == 5){
  array[num - 1].classList.remove("button-animation");
}
    array[num + 1].classList.remove("button-animation");
    array[num - 1].classList.remove("button-animation");
  });
});

// SUBMIT BUTTON
submitButton.addEventListener("click", function(e){
  e.preventDefault();
  frontPage.classList.add("hide");
  backPage.classList.remove("hide");
});
