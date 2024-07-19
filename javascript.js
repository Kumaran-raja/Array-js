//1/array Manipulation

let arr=["Apple","orange","mango",4,5];
arr.push(6)  //add element at end position
arr.pop()  //remove element
//add element to 0th index
arr.unshift("hello")
//shift remove 1st element
arr.shift()
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}


//2.Array Searching

//index
console.log("OrangeIndex Value is:",arr.indexOf("orange"))
//find
let a=arr.find(arr=>arr.startsWith("o"))
console.log(a);

//includes
let check=arr.includes("Apple");     //return true if give element in array
console.log(check)

//3.array filters
arr_num=[10,20,30,40,19,64,2,6,14];
let filters=arr_num.filter(arr_num=> arr_num>=20)
console.log(filters)

//4.
function operation(num1, num2) {
    const addition = num1 + num2;
    const subtraction = num1 - num2;
    const multiply = num1 * num2;
    const divide = num1 / num2;
  
    return [addition, subtraction, multiply, divide];
  }
  
  let [add, subtract, multiply, divide] = operation(10, 2);
  console.log(add,subtract,multiply,divide)


//5.map
let Value=arr_num.map(arr_num=>arr_num*3)
console.log(Value)




