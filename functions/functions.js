// Invoke each function you write with an example and console.log the result

// multiply
var multiply = function(num1,num2){
	return num1 * num2;
}
console.log (multiply(2,2));
// whatForLunch
var whatForLunch = function(name,food){
	return name + " had " + food + " for lunch today";
}
console.log(whatForLunch("Ryan","Chipotle"));
// isLargerThan100
var isLargerThan100 = function(num){
	var result = false;
	if(num>100){
		return result = true;
	}
	return result
}
console.log(isLargerThan100(50));
// anyEvens
var anyEvens = function(array){
	result = false
	for(var i = 0; i < array.length; i++){
		if(array[i] % 2 === 0){
			return result = true;
		}
	}
		
		return result
}
var numArray = [3,5,5,8];
console.log(anyEvens(numArray));
// printDataType
var printDataType = function(collection){

}
// isDivisibleBy
var isDivisibleBy = function(num1,num2){
	if(num1%num2===0){
	return true;
	}else {
		return false;
	}
		
}
console.log(isDivisibleBy(4,2));
// fizzBuzz
var FizzBuzz = function(num){
  if (num%3 === 0 && num%5 === 0){
    return 'FizzBuzz'
  } else if (num%3 === 0){
    return 'fizz';
  } else if (num%5 === 0){
    return 'buzz'
  }
}
console.log(FizzBuzz(15));

//I tried to during the mid-term to keep it moving and not get stuck on one thing for too long.
//That was a goal of mine this time through.