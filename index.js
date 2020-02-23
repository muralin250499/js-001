//add
function add(a,b)
{
console.log(`sum of ${a},${b} is ${a+b}`);
return a+b;
}
// subtract
function sub(a,b)
{

console.log(`sub of ${a},${b} is ${a-b}`);
return a-b;
}
// multiply
function multiply(a,b)
{
console.log(`mul of ${a},${b} is ${a*b}`);
return a*b;
}
// division
function division(a,b)
{
console.log(`div of ${a},${b} is ${a/b}`);
return a/b;
}
//modulo
function modulo(a,b)
{
console.log(`modulo of of ${a},${b} is ${a%b}`);
return a%b;
}
//power
function power(a,b)
{
console.log(`power of of ${a},${b} is ${a**b}`);
return a**b;
}
//compare two numbers
function cmpnum(a,b)
{
  console.log(`Result of comparison is ${a===b}`)
 return a===b;
}
//compare two strings
function cmpstr(a,b)
{
  console.log(`Result of comparison is ${a===b}`)
 return a===b;
}
let a=10;
let b=5;
add(a,b);
sub(a,b);
multiply(a,b);
division (a,b);
modulo(a,b);
power(a,b);
cmpnum(a,b);
cmpstr('m','m');
console.log(add(5,5));


