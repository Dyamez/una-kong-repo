// Obtain the img element, and assign it to the image variable
let image = document.getElementById("pet")

// Obtain the 'shrink-grow' button, and assign it to the changeSize variable
let changeSize = document.getElementById("shrink-grow")

//DO NOT CHANGE THE FOLLOWING CODE
changeSize.addEventListener("click", function() {
  if (image.style.height == "100px") {
    image.style.height = "25px"
  }
  else {
    image.style.height = "100px"
  }
})
/*
let petImg =
document.getElementById("pet");
if(petImg && petImg.style) {
    petImg.style.height = '100px';
    petImg.style.width = '200px';
}
let button =
document.getElementById("shrink-grow");
if(button && button.style) {
    button.style.height = '100px';
    button.style.width = '200px';
}

let button = document.getElementById("shrink-grow")
for (let i= 0; i < button.length; i++) {
    const chooser = document.querySelector('#' + button[i]);
    chooser.addEventListener('click', () => { 
    ????? = button[i];
});
}
*/