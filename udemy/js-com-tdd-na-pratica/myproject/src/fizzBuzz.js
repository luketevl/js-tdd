const FizzBuzz = num => {
  if(num ==0) return num;
  else if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
  else if (num % 3 === 0) return 'Fizz';
  else if (num % 5 === 0) return'Buzz';
  else return num;
}
export default FizzBuzz;