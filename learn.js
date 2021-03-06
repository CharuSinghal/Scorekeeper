var p1button = document.querySelector("#p1");
var p2button = document.getElementById("p2");
var reset = document.querySelector("#reset"); 
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var ninput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0; 
var p2Score = 0; 
var gameOver = false;
var winningScore = 5;

p1button.addEventListener("click",function(){
	if(!gameOver){
		p1Score++;
		if(p1Score===winningScore)
		{
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
		
	
});
p2button.addEventListener("click",function(){
	if(!gameOver){
		p2Score++;
		if(p2Score===winningScore)
		{
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
});

reset.addEventListener("click",function(){
	resetB();
});

function resetB(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}

ninput.addEventListener("change" , function(){
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	resetB();
}); 
