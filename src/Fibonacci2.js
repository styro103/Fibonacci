/*
 * Shaun Mbateng
 * Computing Fibonacci Numbers Alternate Solution
 * This Script Computes the Fibonacci Number of a Given Number Using Recursion
 * This Program Has Simpler Code, but an Exponential Run Time
 */

var fibNumbs = 
{
	fibonacci : function(n) //Fibonacci Function
    {  
	   if (n<2) return n; //Return n if 0 or 1
       else return this.fibonacci(n-1) + this.fibonacci(n-2); //Return Sum of Previous Two Fib Numbers
    }
};