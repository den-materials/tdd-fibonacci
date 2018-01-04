/* global define */

    /**
     * @description Calculate any number in the Fibonacci sequence.
     * @param {Number} n The index of the sequence to calculate; zero-based.
     * @returns {Number} the nth element of the Fibonacci sequence.
     */
    // TODO: return definition of `fibonacci` function here

function fibonacci(index) {
	console.log(index);
	//Handle edge case for negative numbers
	if (index < 0) {
		return 0;
	}
	//We have found the end of the rabbit hole
	if (index === 1 || index === 0) {
		return 1;
	}
	//Let's see how deep this rabbit hole goes...
	return fibonacci(index-1) + fibonacci(index-2);
}

function fibonacciIterative(index) {
	//Handle edge case for negative numbers
	if(index < 0) {
		return 0;
	}
	//The first and second number in the fibonacci
	//sequence are both 1
	let secondNumber = 1;
	let firstNumber = 1;
	//Starting at 1, we will go to the "index"th
	//number in the fibonacci sequence
	while (index-- > 0) {
		console.log("another iteration");
		console.log(index);
		//It is important that you do these at the same time

		//Basically we are shifting over to the next item
		//in the fibonacci sequence

		//The first assignment sets the next number to the
		//sum of the previous two numbers (i.e. fibonacci)

		//The second assignment sets the current number
		//(i.e. where we are in the sequence) to the secondNumber
		[secondNumber,firstNumber] = [firstNumber+secondNumber, secondNumber];
		console.log('----');
		console.log(secondNumber);
		console.log('----');
		console.log(firstNumber);
	}
	return firstNumber;
}

module.exports = fibonacci;