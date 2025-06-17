let s1 = document.getElementById("sq1");
let s2 = document.getElementById("sq2");
let s3 = document.getElementById("sq3");
let s4 = document.getElementById("sq4");
let s5 = document.getElementById("sq5");
let s6 = document.getElementById("sq6");


 // 1st Box - Change random number from 1-1000 after entering each time
s1.addEventListener("mouseenter", function () {
  let r = Math.floor(Math.random() * 1000);
  s1.innerHTML = `<h1>${r}</h1>`;
});
s1.addEventListener("mouseleave", function () {
  s1.innerHTML = `<h1>1</h1>`;
});


// 2nd Box - Change 4 color (each time after entering)
let clr = "Brown"; 
s2.addEventListener("mouseenter", function () {
  if (clr == "Brown") {
    s2.style.backgroundColor = clr;
    clr = "Green";
  } else if (clr == "Green") {
    s2.style.backgroundColor = clr;
    clr = "Pink";
  } else if (clr == "Pink") {
    s2.style.backgroundColor = clr;
    clr = "Purple";
  } else {
    s2.style.backgroundColor = clr;
    clr = "Brown";
  }
});
s2.addEventListener("mouseleave", function () {
  s2.style.backgroundColor = "White";
});


// 3rd Box - Mutliple random number after entering each time
s3.addEventListener("mouseenter", function () {
  let r1 = Math.floor(Math.random() * 256);
  let r2 = Math.floor(Math.random() * 256);
  let r3 = Math.floor(Math.random() * 256);
  s3.style.backgroundColor = `rgb(${r1},${r2},${r3})`;
});
s3.addEventListener("mouseleave", function () {
  s3.style.backgroundColor = "White";
});


//4th Box - On clicking inside the box gives change in upper three
s4.addEventListener("click", function () {
  let r1 = Math.floor(Math.random() * 256);
  let r2 = Math.floor(Math.random() * 256);
  let r3 = Math.floor(Math.random() * 256);
  s1.style.backgroundColor = `rgb(${r1},255,255)`;
  s2.style.backgroundColor = `rgb(255,${r2},255)`;
  s3.style.backgroundColor = `rgb(255,255,${r3})`;
});
s4.addEventListener("mouseleave", function () {
  s1.style.backgroundColor = "White";
  s2.style.backgroundColor = "White";
  s3.style.backgroundColor = "White";
});




//5th Box - Change mouse cursor on entering in the box
s5.addEventListener("click", function (){
  s5.style.backgroundColor = "Orange";
    s5.style.cursor ="pointer";
});

s5.addEventListener("mouseleave", function () {
  s5.style.backgroundColor = "White";
  s5.style.cursor = "alias";
});



//6th Box - Change two colors on entering each time
let colour = "Green";
s6.addEventListener("mouseenter", function () {
  if(colour == "Green"){
    s6.style.backgroundColor = "Green";
    colour = "Pink";
  }else{
    s6.style.backgroundColor = "Pink";
    colour = "Green";
  }
});
s6.addEventListener("mouseleave", function () {
  s6.style.backgroundColor = "White";
  s6.style.color = "Black";
});



 // Cursor Functionality 
let main = document.getElementById("main");
let crsr = document.getElementById("cursor");
main.addEventListener("mousemove",function(details){
    // console.log (details.x,details.y);
    crsr.style.left = details.x + "px";
    crsr.style.top = details.y + "px";
});

