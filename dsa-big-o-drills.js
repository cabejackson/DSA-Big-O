/*
1. What is the Big O for this?
1) Determine the Big O for the following algorithm: 
You are sitting in a room with 15 people. 
You want to find a playmate for your dog, 
preferably of the same breed. 
So you want to know if anyone out of the 15 people have the same breed as your dog. 
You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. 
Someone yells - "I do, be happy to bring him over"

ANSWER: Constant time O(1) right? Because whether there's 15 people or 3 people you just shouting into the crowd will result in the same outcome.
Unless there's no people


2) Determine the Big O for the following algorithm: 
You are sitting in a room with 15 people. 
You want to find a playmate for your dog who is of the same breed. 
So you want to know if anyone out of the 15 people have the same breed as your dog. 
You start with the first person and ask him if he has a golden retriever. 
He says no, then you ask the next person, and the next, 
and the next until you find someone who has a golden or there is no one else to ask.

ANSWER: Logarithmic time O(log(n)) because it takes longer based on how many people are in the space

*/

/*
2. Even or odd
What is the Big O of the following algorithm? Explain your answer

Constant time O(1) because no matter what the same operation is happening on the value
*/

function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else
        return false;
}

/*
3. Are you here ?
    What is the Big O of the following algorithm ? Explain your answer

    ANSWER: 
    Exponential time O(2^n)
    because of nested loops
    would be 0(n) if you hit the first case
*/
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

/*
4. Doubler
What is the Big O of the following algorithm ? Explain your answer

    ANSWER: 
    O(n) right? 
    bc it's doing 1 operation on all the values 
    & as the values increase 
    the time it takes do do the operation should increase
*/

function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

/*
5. Naive search
What is the Big O of the following algorithm ? Explain your answer

    ANSWER:
    Linear time O(n)
    because it takes longer based on how many people are in the array
    Best case: you're index 0
    Worst case: you're last
*/
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

/*
6. Creating pairs:
What is the Big O of the following algorithm ? Explain your answer

    ANSWER:
    Exponential time O(2^n),
    --> Polynomial time O(n^k), but why?
    because it has to cycle through 2 arrays

*/
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " + arr[j]);
        }
    }
}

/*
7. Compute the sequence
What does the following algorithm do? What is its runtime complexity? Explain your answer

    ANSWER:
    inserting values into an array,
    probably Linear time O(n), 
    because it takes longer based on how many items are in the array

    0(1) for best case

*/
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

/*
8. An efficient search
In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. 
Assume that the input array is always sorted. 
What is the Big O of the following algorithm? 
Explain your answer

    ANSWER:
    now would this be Constant time O(1), becuase it's always sorted,
    so the item would always be at the spot we expect it to be at

    it breaks down the problem into a binary
*/
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

/*
9. Random element
What is the Big O of the following algorithm? Explain your answer

ANSWER: 
Constant time O(1), 
example from class

*/
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

/*
10. What Am I?
What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

    ANSWER:
    O(n),
    it's performing the same 2 operations,
    to figure out if the number is prime or not
    Best case O(1)

    ...but could this be polynomial?


*/

function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}

/*
11. Tower of Hanoi
The Tower of Hanoi is a very famous mathematical puzzle(some call it game!).This is how it goes:

There are three rods and a number of disks of different sizes which can slide onto any rod.
The puzzle starts with the disks neatly stacked in ascending order of size on one rod, 
the smallest disk at the top(making a conical shape).The other two rods are empty to begin with.
The goal of the puzzle is to move the entire stack of rods to another rod
(can't be the original rod where it was stacked before) 
where it will be stacked in the ascending order as well. 
This should be done obeying the following rules: i) 
Only one disk may be moved at a time ii) 
Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, 
on top of the other disks that may already be present on that rod. iii) 
A larger disk may not placed on top of a smaller disk


Derive an algorithm to solve the Tower of Hanoi puzzle.
Implement your algorithm using recursion. 
Your program should display each movement of the disk from one rod to another.
If you are given 5 disks, how do the rods look like after 7 recursive calls?
How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
What is the runtime of your algorithm?
*/

// function hanoi(discs, source, dest, aux) {
//     if (discs == 1) {
//         //source is the starting 
//         //dest is the destination 
//         mover(source, dest);
//     } else {
//         hanoi(discs - 1, source, aux, dest);
//         mover(source, dest);
//         hanoi(discs - 1, aux, dest, source);
//         return dest;
//     }

// }
// function mover(startRod, targetRod) {
//     targetRod.push(startRod.pop());
//     ;
//     // console.log(startRod, targetRod, 'moved a disc');
//     //add counter to mover func
//     //console.log(startRod, targetRod)
// }

// console.log(hanoi(5, [1, 2, 3, 4, 5], [], []));


const a = { name: 'a', discs: [] };
const b = { name: 'b', discs: [] };
const c = { name: 'c', discs: [] };
function newHanoi(num) {
    for (let i = 0; i < num; i++) {
        a.discs.push(num - i);
        console.log(a.discs, b.discs, c.discs);
    }
    //const moveCounter = [0];
    solver(num, a, c, b);
    //console.log('total moves were:', moveCounter);
}
const solver = (disc, source, dest, aux) => {
    if (disc === 1) {
        makeMove(source, dest);
    } else {
        solver(disc - 1, source, aux, dest);
        makeMove(source, dest);
        solver(disc - 1, aux, dest, source);
    }
};
const makeMove = (source, target) => {
    console.log(`I will now move from ${source.name} to ${target.name}`);
    target.discs.push(source.discs.pop());
    console.log(a.discs, b.discs, c.discs);
};
newHanoi(7);

/*
12. Iterative version
Solve the drills 1 - 7 from your previous checkpoint(Recursion) iteratively.


1. Counting Sheep
Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

Input: 3
Output:
3: Another sheep jumps over the fence
2: Another sheep jumps over the fence
1: Another sheep jumps over the fence
All sheep jumped over the fence


*/

/*
Input: 3
Output:
3: Another sheep jumps over the fence
2: Another sheep jumps over the fence
1: Another sheep jumps over the fence
All sheep jumped over the fence
 */
function sheepCounter(sheep) {
    if (sheep === 0) {
        return 'all sheep jump over the fence'
    }
    const first = sheep + ": another sheep jumped over the fence \n"
    return first + sheepCounter(sheep - 1)
}

console.log(sheepCounter(3))

/* 
powerCalculator
*/

function powerCalculator(base, exp) {
    if (exp <= 0) {
        return `exponent should be a positive number sir!`;
    }
    if (exp > 1) {
        return base * powerCalculator(base, --exp);
    } else {
        return base;
    }
}

powerCalculator(10, 0);

//Reverse string
//linear time O(n)

function reverseString(str) {
    if (str === "") {
        return "";
    } else {
        return reverseString(str.substr(1)) + str.charAt(0);
    }
}
reverseString("hii");

//iteratively
//is this linear time? O(n)
function betterReverseString(str) {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr = newStr.concat(str[i]);
    }
    return newStr;
}
onsole.log(betterReverseString('Harry'));

//reverse method 
//is this constant time? O(1)
function reverseString(str) {
    return str.split("").reverse().join("");
}


// nth triangular number

function triangularN(num) {
    if (num === 1) {
        return 1;
    }
    return triangularN(num - 1) + num;
}

triangularN(5);


//iteratively
function triangle(num) {
    let star = 0;
    for (let i = 1; i <= num; i++) {
        star += i;
        console.log(star);
    }
    return star;
}

console.log('testing triangle 3: ', triangle(3));

//fibannachi
function fiban(num) {
    if (num === 1) {
        return 0;
    } else if (num === 2) {
        return 1;
    } else {
        return fiban(num - 1) + fiban(num - 2);
    }
}

//iteratively
function fibonacci(num) {
    if (num <= 0) return "invalid num";
    if (num === 1) return [1];
    if (num === 2) return [1, 1];

    let sequence = [1, 1];
    let curr = 0;

    for (let i = 2; i <= num + 3; i++) {
        curr = sequence[i - 1] + sequence[i - 2];
        sequence.push(curr);
    }

    return sequence;
}

console.log("fibonacci sequence of 0", fibonacci(0));
console.log("fibonacci sequence of 1", fibonacci(1));
console.log("fibonacci sequence of 2", fibonacci(2));
console.log("fibonacci sequence of 10", fibonacci(10));

// string splitter

// function stringSplitter(str, split){
//   let idxOf = str.indexOf(str)
//   if (str.includes(split) === false){
//     return str
//   }

// return [str.slice(0, str.indexOf(split))].concat(stringSplitter(str.slice(str.indexOf(split) + 1), split))

// }

function strSplit(str, char, results = []) {
    if (str.indexOf(char) === -1) {
        results.push(str);
        return results;
    }

    const charSpot = str.indexOf(char);
    const subStr = str.slice(0, charSpot);
    const remain = str.slice(charSpot + 1);
    results.push(subStr);
    //console.log(results)
    return strSplit(remain, char, results);
}

strSplit("02/02/2020", "/");

console.log(strSplit("02/20/2020", "/"));

fiban(6);

//factorial
function factorial(num) {
    if (num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

console.log(`factorial of 5 ${factorial(5)}`);

//iteratively
function factorial(n) {
    let val = 1;
    for (let i = 1; i <= n; i++) {
        val *= i;
    }
    return val;
}


console.log('factorial of 3', factorial(3));
console.log('factorial of 5', factorial(5));
console.log('factorial of 6', factorial(6));





//maze attempt

let mySmallMaze = [
    [" ", " ", " "],
    [" ", "*", " "],
    [" ", " ", "e"],
];

let maze = [
    [" ", " ", " ", "*", " ", " ", " "],
    ["*", "*", " ", "*", " ", "*", " "],
    [" ", " ", " ", " ", " ", " ", " "],
    [" ", "*", "*", "*", "*", "*", " "],
    [" ", " ", " ", " ", " ", " ", "e"],
];

// function mazeExit (maze, n, m, results){
// if (maze[n][m] === 'e'){
//  return results
// }
// if (maze[n][m + 1] == ' ' || maze[n][m +1] === 'e'){
//  results += 'r';
//  maze[n][m] = '*';
//  return (mazeExit(maze, n, m + 1, results))
// } else if (maze[n + 1][m] == ' ' || maze[n + 1][m] === 'e'){
//  results += 'd';
//  maze[n][m] = '*';
//  return (mazeExit(maze, n + 1, m, results))
// } else if (maze[n - 1][m] == ' ' || maze[n - 1][m] === 'e'){
//  results += 'u';
//  maze[n][m] = '*';
//  return (mazeExit(maze, n - 1, m, results))
// } else if (maze[n][m - 1] == ' ' || maze[n][m - 1] === 'e'){
//  results += 'l';
//  maze[n][m] = '*';
//  return (mazeExit(maze, n, m - 1, results))
// }

// }

// mazeExit(maze, 0,0, '')

function mazeExit(maze, n, m) {
    let currSpot = "-";

    maze[n][m] = currSpot;
    let path = "";
    switch (" ") {
        case maze[n][m + 1]:
            return (path += "R" + mazeExit(maze, n, m + 1));
            break;
        case maze[n][m - 1]:
            return (path += "L" + mazeExit(maze, n, m - 1));
            break;
        case maze[n + 1][m]:
            return (path += "D" + mazeExit(maze, n + 1, m));
            break;
        case maze[n - 1][m]:
            return (path += "U" + mazeExit(maze, n - 1, m));
            break;
    }
    switch ("e") {
        case maze[n][m + 1]:
            return (path += "R" + " Completed");
            break;
        case maze[n][m - 1]:
            return (path += "L" + " Completed");
            break;
        case maze[n + 1][m]:
            return (path += "D" + " Completed");
            break;
        case maze[n - 1][m]:
            return (path += "U" + " Completed");
            break;
        default:
            return "There are no more exits";
            break;
    }
}
mazeExit(maze, 0, 0);

// anagrams
function anagrams(str) {
    let results = [];
    function traverse(str, checked = "") {
        if (!str) {
            results.push(checked);
        }
        for (let i = 0; i < str.length; i++) {
            traverse(str.slice(0, i) + str.slice(i + 1), checked + str[i]);
        }
    }
    traverse(str);
    return results;
}
anagrams("east");


function findBinary(num, str = '') {


    if (num === 0) {
        return str.split("").reverse().join("") || 0
    }

    str += num % 2
    let newNum = parseInt(num / 2)

    return findBinary(newNum, str)

}

findBinary(13)



































/*
13. Recursive Big O
Take your solutions from the recursive exercises
that you completed in the previous checkpoint
and identify the time complexities (big O) of each of them.

ANSWERED w/in each problem
*/

/*
14. Iterative Big O
Take your solutions from the iterative exercises today
and identify the time complexities (big O) of each of them.
ANSWERED w/in each problem

*/


let count = 0
function hanoi(discs, source, dest, aux) {
    if (discs == 1) {
        mover(source, dest);
        count++
    } else {
        hanoi(discs - 1, source, aux, dest);
        mover(source, dest);
        count++
        hanoi(discs - 1, aux, dest, source);
        return dest + ` count is. . . ${count}`;
    }
}
function mover(startRod, targetRod) {
    console.log(`[${startRod}] [${targetRod}] has become. . .`)
    targetRod.push(startRod.pop());
    console.log(`[${startRod}] [${targetRod}]`)
}
console.log(hanoi(5, [1, 2, 3, 4, 5], [], []));