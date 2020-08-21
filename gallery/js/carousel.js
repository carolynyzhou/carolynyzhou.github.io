var slideIndex_1 = 1;
var slideIndex_2 = 1;
var slideIndex_3 = 1;

$(document).ready(function() {
    showDivs_1(slideIndex_1);
});

function plusDivs_1(n) {
  showDivs_1(slideIndex_1 += n);
}

function showDivs_1(n) {
  var i;
  var x = document.getElementsByClassName("mySlides_1");
  if (n > x.length) {slideIndex_1 = 1}    
  if (n < 1) {slideIndex_1 = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex_1-1].style.display = "block";  
}

// 

$(document).ready(function() {
    showDivs_2(slideIndex_2);
});

function plusDivs_2(n) {
  showDivs_2(slideIndex_2 += n);
}

function showDivs_2(n) {
  var i;
  var x = document.getElementsByClassName("mySlides_2");
  if (n > x.length) {slideIndex_2 = 1}    
  if (n < 1) {slideIndex_2 = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex_2-1].style.display = "block";  
}

// 

$(document).ready(function() {
    showDivs_3(slideIndex_3);
});

function plusDivs_3(n) {
  showDivs_3(slideIndex_3 += n);
}

function showDivs_3(n) {
  var i;
  var x = document.getElementsByClassName("mySlides_3");
  if (n > x.length) {slideIndex_3 = 1}    
  if (n < 1) {slideIndex_3 = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex_3-1].style.display = "block";  
}

// 

$(document).ready(function() {
    showDivs_4(slideIndex_4);
});

function plusDivs_4(n) {
  showDivs_4(slideIndex_4 += n);
}

function showDivs_4(n) {
  var i;
  var x = document.getElementsByClassName("mySlides_4");
  if (n > x.length) {slideIndex_4 = 1}    
  if (n < 1) {slideIndex_4 = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex_4-1].style.display = "block";  
}
