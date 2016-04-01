/*
 * Shaun Mbateng
 * Computing Fibonacci Numbers
 * This Script Computes the Fibonacci Number of a Given Number Using Dynamic Programming
 * This Program has an O(n) Time Complexity
 */

var fibNumbs = 
{
	fibonacci : function(n) //Fibonacci Function
    {
		var pFib = 0; //Previous Fib
		var fib = 1; // Fib, Start at 1
		
		if (n<2) return n; //Return n if 0 or 1
		for(i=2; i<=n; i++) //From 2 till n
		{
			var t = fib; //Store Current Fib Number
			fib += pFib; //Update Fib Number
			pFib = t; //Update Previous Fib Number
		}
       
       return fib; //Return Fibonacci Number
    }
};