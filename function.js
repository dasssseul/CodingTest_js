
// [문자열 자르기] 

const a = '123456789';

// string.slice(시작 인덱스, 종료 인덱스)
b1 = a.slice(2, 5); 
b1_2 = a.slice(2);

// string.substring(시작 인덱스, 종료 인덱스)
b2 = a.substring(2, 5); // 345
b2_2 = a.substring(2); // 3456789

// string.substr(시작 인덱스, 길이)
b3 = a.substr(2, 5); // 34567
b3_2 = a.substr(2); // 3456789

console.log(b1, b2, b3);
console.log(b1_2, b2_2, b3_2);


// [문자열 리스트로 나누기]

const b = 'a?b?c?d'

// stirng.split(구분자, 길이)
c1 = b.split("?", 2);
console.log(c1); // ["a", "b"]


// [올림 함수]

const number = 3;

// Math.ceil(number)
console.log(number/2) // 1.5
console.log(Math.ceil(number/2)) // 2


// [정렬 함수]
console.clear();

// return 값이 양수라면 a와 b의 순서 변경
// return 값이 음수라면 그대로
// return 값이 0이라면 그대로

const array = [3, 7, 6, 9, 2]

// 오름차순 정렬
array.sort(function(a,b) {
    return a-b;
});

// arrow function 표현
array.sort((a,b) => a-b);

console.log(array); // 출력: [2, 3, 6, 7, 9]

// 내림차순 정렬
array.sort(function(a,b) {
    return b-a;
});

// arrow function 표현
array.sort((a,b) => b-a);

console.log(array); // 출력 : [9, 7, 6, 3, 2]

// object 정렬
var friends = [
    { name : "다하", age : 26 },
    { name : "다슬", age : 20 },
    { name : "성희", age : 23 },
    { name : "성주", age : 21 }
];

friends.sort(function(a, b){
    return b.age - a.age;
});

console.log(friends);

// friends.sort(function(a,b){
//     return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
// });

// console.log(friends);


// map 함수
console.clear();

const ar = [[1, 2, 3], [5, 6, 7]];
const br = [[2, 4, 6], [1, 3, 5]];

const a1 = ar.map(function(arr, i){
    console.log(`idx : ${i}, number : ${arr}`);
});

const b11 = ar.map(function(arr, i){
    const b22 = arr.map(function(brr, j){
        console.log(`idx : ${j}, number : ${brr}`);
    });
});

