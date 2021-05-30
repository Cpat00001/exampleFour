// const a = document.getElementById('btn_1');

// a.addEventListener('click', show_test);

// function show_test(){
//     document.getElementById('show_txt').innerHTML = "Local Garage Page";
//     }
// scroll up button
//Get the button:
mybutton = document.getElementById("scrollBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollbtn.style.display = "block";
  } else {
    scrollbtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// onmouseleave event -> show a message/newsletter 
const mainDiv = document.getElementById("main_wrapper");
console.log(mainDiv);

// var element = document.getElementById("popup");
// console.log(element);

mainDiv.addEventListener('mouseleave', e => {
  showDiscountMessage();
});

// function to create div with message
function showDiscountMessage(){

  const elem = document.getElementById("popup");
  elem.style.display = "block";

}
// close popup
function closePopup(){
  console.log("closing popup")
  const elem = document.getElementById("popup");
  elem.style.display = "none";
}

