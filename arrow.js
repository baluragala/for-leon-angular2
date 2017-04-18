// let numbers:Array<number>=[1,2,3];
// let r = numbers.map(n=>n*2);
// console.log(r);
// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumbers1: number[] = numbers.filter(function (n) {
//     return n % 2 == 0
// });
// let evenNumbers2: number[] = numbers.filter(n => n % 2 == 0);
// console.log(evenNumbers1);
// console.log(evenNumbers2);
function makeTeam(manager) {
    var members = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        members[_i - 1] = arguments[_i];
    }
    console.log(manager);
    console.log(members);
}
makeTeam('Joseph', 'Jack', 'Hugh', 'Will', 'Sarah', [1, 2, 3], { name: 'zoe' });
/*
1. F with no parmas and single body statement

function echo() {
    return "echo";
}

AF:

() => "echo";

2. F with 1 parma and single body statement

function echo(userSays) {
    return userSays
}

AF:

(userSays) => userSays;
userSays => userSays;

3. F with 1+ parmas and single body statement

function echo(userSays, userName) {
    return userName + ":" + userSays
}

AF:

(userSays, userName) => userName + ":" + userSays

1. F with no parmas and multiple body statement

function echo() {
    let a=10;
    return "echo";
}

AF:

() => {
   let a=10;
   return "echo";
}

2. F with 1 parma and multiple body statement

function echo(userSays) {
    let a=10;
    return userSays
}

AF:

(userSays) => {
    let a=10;
    return userSays
}

userSays => {
    let a=10;
    return userSays
}

3. F with 1+ parmas and multiple body statement

function echo(userSays, userName) {
    let a =10;
    return userName + ":" + userSays
}

AF:

(userSays, userName) => {
    let a =10;
    return userName + ":" + userSays
}

*/ 
