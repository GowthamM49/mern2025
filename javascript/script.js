var a=10;
console.log(a)
var sum1=()=> {
    console.log("hello world1");
}
sum1();
var sum=function() {
    console.log("hello world2");
}
sum();
function sum2() {
    console.log("hello world3");
}
sum2();
//destructuring operator
var marks = [10, 20, 30, 40, 50];
var [a, b, c, d, e] = marks;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
//spread operator
var marks1 = [10, 20, 30, 40, 50];
var marks2 = [60, 70, 80, 90, 100];
var marks3 = [...marks1, ...marks2];
console.log(marks3);    
//callback function
function sum3(a, b, callback) {
    var c = a + b;
    callback(c);
}
sum3(10, 20, function(result) {
    console.log("The sum is: " + result);
}
);
//filter function
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log("Even numbers: " + evenNumbers);
//reduce
var total= numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}
, 0);
console.log("Total sum: " + total);
//map
var squaredNumbers = numbers.map(function(num) {
    return num * num;
});
console.log("Squared numbers: " + squaredNumbers);  
console.log("24");

<button onclick="buttonClicked()">Change Text</button>
function buttonClicked() {
    var head = document.getElementsByTagName("head")[0];
    head.innerHTML = "<title>New Title</title>";
    console.log("Head title changed");
}