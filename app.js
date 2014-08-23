$(document).ready(function(e) {
	//Print Number from 1 to 100 to browser
	
	for(var i = 1; i<=100; i++)
	{
		
			//if divisible by 15 - Why do I need to put divisible by 15 first for it to work?
		if(i%15 === 0){
			
			$("ul").append("<li>Fizz Bizz</li>");
			
			}
			
			
		//if divisibkle by 3
		else if(i%3 === 0){
			
			$("ul").append("<li>Fizz</li>");
			
			}
			
			//if divisible by 5
		else if(i%5 === 0){
			
			$("ul").append("<li>Bizz</li>");
			
			}
	
		//if divisible by 3 and 5
		else {
			
			$("ul").append("<li>"+i+"</li>");
			
			}
		}
	
    //Check to see if number is divisible by 3 or 5
	//If not divisible by 3 or 5 just say the number. 
	
	//If visible by 3 say fizz 
	
	//if divisible by 5 say buzz
	
	//If divided by both say fizz buzz
});