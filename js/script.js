const a = document.getElementById('btn_1');

a.addEventListener('click', show_test);

function show_test(){
    document.getElementById('show_txt').innerHTML = "Local Garage Page";
    }
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
  // create a div
  const element = document.createElement("div");
  // dynamic styling
  const styling = document.createElement("style");
  element.innerHTML = "div {background-color:orange;width:100%;height:200px;position:fixed,top:200px;z-index:111;}";
  element.appendChild(styling);
  // create a content
  const elementText = document.createTextNode(" Before you leave check out Discounts");
  // add text to div
  element.appendChild(elementText);
  console.log(element);
  //get element to display
  // const currentDiv = document.getElementById("call_to_action");
  // const element = document.getElementById("popup");
    // // add class with styling to dive
  // element.setAttribute("class","popup");
  element.style.display = "block";
  //alert("works mouseleave");
}

