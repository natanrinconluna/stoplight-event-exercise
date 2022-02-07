

//global variables 
const stopBotton = document.getElementById('stopButton');
const stopLight = document.getElementById("stopLight");

const slowButton = document.getElementById("slowButton");
const slowLight = document.getElementById("slowLight");

const goButton = document.getElementById("goButton");
const goLight = document.getElementById("goLight");

//click on and off
stopBotton.addEventListener('click', function(){
  stopLight.classList.toggle("stop")

});

slowButton.addEventListener('click', function(){
  slowLight.classList.toggle("slow")
});

goButton.addEventListener('click', function (){
  goLight.classList.toggle("go")
});

// console.log
stopBotton.addEventListener('mouseenter', function(){
console.log("Mouse Entered stop button")
});

stopBotton.addEventListener('mouseleave', function(){
  console.log("Mouse Left stop button")
});

slowButton.addEventListener('mouseenter', function(){
  console.log("Mouse Entered slow button")
  });
slowButton.addEventListener('mouseleave', function(){
    console.log("Mouse Left slow button")
});

goButton.addEventListener('mouseenter', function(){
  console.log("Mouse Entered go button")
  });
goButton.addEventListener('mouseleave', function(){
    console.log("Mouse Left go button")
});
const bulb = document.getElementByClassName("bulb stop")
console.log(bulb)
//'test'