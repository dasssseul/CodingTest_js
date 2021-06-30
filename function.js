
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


// 올림 함수

const number = 3;

// Math.ceil(number)
console.log(number/2) // 1.5
console.log(Math.ceil(number/2)) // 2

