// Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".
for(let i=1;i<=100;i++){
    if(i%5==0 && i%3==0){
        console.log("FizzBuzz");
    }else if(i%5==0){
        console.log("Buzz");
    }
    else if(i%3==0){
        console.log("Fizz");
    }
}




// palindrome

function palindrome(word){
    let n=word;
    let new_word=word.split('').reverse().join('');
    if(n==new_word){
        console.log("Palindrome");
    }
    else{
        console.log("Not a Palindrome");
    }
}
let text="hello";
palindrome(text);



// largest number

function largest(num){
    let max=-1;
    for(let i=0;i<num.length;i++){
        if(max<num[i]){
            max=num[i];

        }
    }
    return max;
}
let arr=[80,20,30,40];
let max_val=largest(arr);
console.log(max_val);


//factorial

function factorial(num){
    let sum=1;
    for(let i=1;i<=num;i++){
        sum=sum*i;
    }
    return sum;
}
let num1=5;
console.log(factorial(num1));


// Celsius to Fahrenheit
function convert(Celsius){
    let Fahrenheit=9/5*Celsius+32;
    return Fahrenheit;
}
let Celsius=100;
console.log(convert(Celsius));


// missing number
function num(arr){
    let count=0;
    for(let j=0;j<=arr.length;j++){
        if(count!=arr[j]){
            // console.log(arr[j]);
            return count;
            break;

        }else{
            count++;
        }
    }
}
let arr1=[0,1,2,4,5,6];
console.log(num(arr1));

// Write a function that takes a string and returns the longest word in the string

function max(str){
    let max_string="";
    let new_string="";
    max_count=0;
    let c=1;
    for(let i=0;i<str.length;i++){
        
        if(str.charAt(i)==" "){
            if(c>max_count){
                max_string=new_string;
                new_string="";
                max_count=c;
                c=1;
            }
        }
        else{
            new_string=new_string+str.charAt(i);
            c+=1;
        }
    
    }
    let new_len=new_string.length;
    if(new_len>max_count){
        return (new_string);
    }else{

        return (max_string);
    }
}
let str="hello worlds king";

console.log(max(str));
