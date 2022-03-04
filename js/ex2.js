/* Tutorial 4
    Example 2 JavaScript code
*/

const arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr);

const oddNumbers = arr.filter(x => x%2 );
console.log(`Odd numbers: ${oddNumbers}`);

const Div25 = arr.filter(x => x % 2 == 0 || x % 5 == 0);
console.log(`Numbers divisibe by 2 or 5: ${Div25}`);

const sqr = arr.filter(x=> x % 3 == 0).map(x => x*x);
console.log(`Numbers divisible by 3 squared ${sqr}`);

const sum = arr.filter(x => x % 5 == 0).map(x => x * x).reduce((a,b) => a+b);
console.log(`Sum of squared numbers that are divisible by 5 ${sum}`);




