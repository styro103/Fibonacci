/*
 * Shaun Mbateng
 * Computing Fibonacci Numbers
 * This script computes the Fibonacci number of a given number n
 *		Using Dynamic Programming
 * This Programs has an O(n) Time Complexity
 */

var fib = []; // Array to Hold Numbers
fib[0] = 0; // First Base Case
fib[1] = 1; // Second Base Case 

var fibnumbs = 
{
	fibonacci : function(n) //Fibonacci Function
    {
		if (n>1) //Only Calculate If Necessary (Not Any Base Case)
		{
			for(i=2; i<=n; i++) //From 2 till n
				fib[i] = fib[i-2]+fib[i-1]; //Computer Fibonacci Number Once for Each
		}
       
       return fib[n]; //Return Fibonacci Number
    }
};