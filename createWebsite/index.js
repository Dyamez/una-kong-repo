//create variables to hold the cashier scores
let cashier = 0
let c_tot = 0
let c_num = 0
let overall = 0
let o_tot = 0
let o_num = 0

//cashier button 1
cashierScoreBtn1 = document.querySelector("#cashier-1")
cashierScoreBtn1.addEventListener("click", function() {
	c_tot = c_tot + 1 //adding 1 to score
	c_num = c_num + 1
	cashier = c_tot / c_num
	
})

//cashier button 2
cashierScoreBtn2 = document.querySelector("#cashier-2")
cashierScoreBtn2.addEventListener("click", function() {
	c_tot = c_tot + 2 //adding 2 to score
	c_num = c_num + 1
	cashier = c_tot / c_num
	
})

//cashier button 3
cashierScoreBtn3 = document.querySelector("#cashier-3")
cashierScoreBtn3.addEventListener("click", function() {
	c_tot = c_tot + 3 
	c_num = c_num + 1
	cashier = c_tot / c_num
	//console.log(cashier)
})

//cashier button 4
cashierScoreBtn4 = document.querySelector("#cashier-4")
cashierScoreBtn4.addEventListener("click", function() {
	c_tot = c_tot + 4 //adding 1 to score
	c_num = c_num + 1
	cashier = c_tot / c_num
	//console.log(cashier)
})
//overall button 1
cashierOverallBtn1 = document.querySelector("#overall-1")
cashierOverallBtn1.addEventListener("click", function() {
	o_tot = o_tot + 1 
	o_num = o_num + 1
	overall = o_tot / o_num
	
})

//overall button 2
cashierOverallBtn2 = document.querySelector("#overall-2")
cashierOverallBtn2.addEventListener("click", function() {
	o_tot = o_tot + 2 //adding 2 to score
	o_num = o_num + 1
	overall = o_tot / o_num
	
})

//overall button 3
cashierOverallBtn3 = document.querySelector("#overall-3")
cashierOverallBtn3.addEventListener("click", function() {
	o_tot = o_tot + 3 
	o_num = o_num + 1
	overall = o_tot / o_num
	//console.log(cashier)
})

//overall button 4
cashierOverallBtn4 = document.querySelector("#overall-4")
cashierOverallBtn4.addEventListener("click", function() {
	o_tot = o_tot + 4 //adding 1 to score
	o_num = o_num + 1
	overall = o_tot / o_num
	//console.log(cashier)
})
/*
displayAverage = document.selectElementById("#average")
displayAverage.addEventListner("click", function() {
    average = 
})
*/

let showHide = document.querySelector("#show-hide")
showHide.addEventListener('click',function(){
  let scoresDiv = document.querySelector("#show-scores")

  cashierScore.textContent = cashier
  overallScore.textContent = overall

  let btnText = showHide.textContent
  if(btnText === "Display Ratings"){
	scoresDiv.style.display = "block"
	showHide.innerHTML = "Hide Ratings"
  }
  else{
	scoresDiv.style.display = "none"
	showHide.innerHTML = "Display Ratings"
  }
})