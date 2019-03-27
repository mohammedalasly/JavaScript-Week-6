// **** Step 4 JavaScript **** //:

// 0. callback function:
let students = [
    { name: "Giannis", age: 30, school: "SocialHackersAcademy" },
    { name: "Yaser", age: 27, school: "SocialHackersAcademy" },
    { name: "Hogo", age: 26, school: "SocialHackersAcademy" },
    { name: "Ahmed", age: 35, school: "SocialHackersAcademy" },
    { name: "Ali", age: 30, school: "SocialHackersAcademy" },
    { name: "Nour", age: 28, school: "SocialHackersAcademy" },
    { name: "Mona", age: 17, school: "SocialHackersAcademy" }
];

let processStudents = function (data, callback) {
    for (let i = 0; i < data.length; i++) {
        if (typeof callback === "function") {
            callback(data[i]);
        }
    }
}

processStudents(students, function (obj) {
    if (obj.age > 16) {
        console.log(obj.name, obj.age, obj.school);

    }
});


// 1. Pass a function as an argument:

function foo(func) {
    // What to do here?
    func();
}

function bar() {
    console.log('Hello, I am bar!');
}

foo(bar);

// 2.a function that take 4 arguments:
function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    // make array 
    // start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next 
    let Array = [];

    for (let i = startIndex; i <= stopIndex; i++) {

        if (i % 3 == 0) {
            return threeCallback(i);
        };

        if (i % 5 == 0) {
            return fiveCallback(i);
        };
    }

    console.log(Array);
    return Array;

}




// 3, 4, 5,Some practice with (free code camp).//



// 6.Arrays inside arrays:
let a = [[1, 2], [3, 4], [5, 6]];
a.push(["1", "2"], ["3", "4"], ["5", "6"]);

for (let i = 0; i < a[i].length; i++) {
    for (let z = 0; z < a.length; z++) {
        console.log(a[z][i]);
    }
}


// 7.explain what's going on here:

let x = 9;
function f1(val) {
    val = val + 1;
    return val;
}
f1(x);
console.log(x);// expect 9
console.log("In this case we have a variable written as a global Scope it has a value as a number increase by 1 inside a function, and execution out side the function to return the value, but the local scope cann't see the global scope because it doesn't called in the local scope then the value will not effected by increase.")

let y = { x: 9 };
function f2(val) {
    val.x = val.x + 1;
    return val;
}
f2(y);
console.log(y);// expect {x: 10}
console.log("In this case we have a variable written as a global Scope it has a value as an object increase by 1 inside a function, and execution out side the function to return the value as an object value.");


// Here is an example for (javaScript pass by value):

function callByValue(varOne, varTwo) {
    console.log("Inside Call by Value Method");
    varOne = 100;
    varTwo = 200;
    console.log("varOne =" + varOne, "varTwo =" + varTwo);
}
let varOne = 10;
let varTwo = 20;
console.log("Before Call by Value Method");
console.log("varOne =" + varOne, "varTwo =" + varTwo);
callByValue(varOne, varTwo)
console.log("After Call by Value Method");
console.log("varOne =" + varOne, "varTwo =" + varTwo);


// Here is an example for (javaScript pass by reference):

function callByReference(varObj) {
    console.log("Inside Call by Reference Method");
    varObj.a = 100;
    console.log(varObj);
}
let varObj = { a: 1 };
console.log("Before Call by Reference Method");
console.log(varObj);
callByReference(varObj)
console.log("After Call by Reference Method");
console.log(varObj);



//*** Step 5: Scope and Clousres ***//

function createBase(j) {
    return function (s) {
        return j + s
    }
}

let addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));




// ****Bonus****//:

let letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function unique(setArray) {
    return setArray.reduce(function (previous, lett) {

        if (previous.find(function (i) {
            return i == lett;
        })) {
            return previous;
        } else {
            previous.push(lett);
            return previous;
        }
    }, [])
}

let check = unique(letters);
console.log(check);