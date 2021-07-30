
// 프로그래머스 레벨 1

// 음양 더하기

// 나의 풀이 
function yinyang(absolutes, signs) {
    var answer = 0;
    for (let i = 0; i < signs.length; i++){
        if (signs[i] == false){
            answer += -absolutes[i];
        }else{
            answer += absolutes[i]
        }
    }
    return answer;
}

console.log(yinyang([4, 7, 12], [true, false, true])); // 9

// reduce 함수 사용 시 
function yinyang2(absolutes, signs){
    var answer = 0
    answer = absolutes.reduce((acc, curr, i) => {
            if (signs[i]){
                return acc + curr
            }else{
                return acc - curr
            }
        },0);
    return answer
};

console.log(yinyang2([4, 7, 12], [true, false, true])); // 9

// 한 줄 코딩
function yinyang3(absolutes, signs){
    return absolutes.reduce((acc, curr, i) => acc + (curr * (signs[i] ? 1 : -1)))
};

console.log(yinyang3([4, 7, 12], [true, false, true])); // 9


// 내적

// 나의 풀이
function dotpro(a, b) {
    var answer = 0;
    answer = a.reduce((acc, curr, i) => {
        curr *= b[i]
        return acc + curr
    }, 0);
    return answer;
}

console.log(dotpro([1,2,3,4], [-3,-1,0,2])); // 3



// 한 줄 코딩
function dotpro2(a, b) {
    var answer = a.reduce((acc, curr, i) => acc += curr*b[i], 0)
    return answer;
}

console.log(dotpro2([1,2,3,4], [-3,-1,0,2])); // 3


// 두 개 뽑아서 더하기

// 나의 풀이_includes
function addtwo(numbers) {
    const answer = [];
    for (let i=0; i < numbers.length; i++){
        for (let j=i+1; j < numbers.length; j++){
            const result = numbers[i]+numbers[j];
            if(! answer.includes(result)){
                answer.push(result);
            };
        };
    };
    return answer.sort((a,b) => a-b);
}

console.log(addtwo([2,1,3,4,1]));

// 추천 풀이_set
function addtwo2(numbers) {
    const answer = [];
    for (let i=0; i < numbers.length; i++){
        for (let j=i+1; j < numbers.length; j++){
            answer.push(numbers[i]+numbers[j]);
        };
    };
    const result = [...new Set(answer)];
    return result.sort((a,b) => a-b);
};

console.log(addtwo2([2,1,3,4,1]));


// 두 정수 사이의 합

function adder(a, b){
    var answer = 0;
    for (let i = Math.min(a,b); i <= Math.max(a,b); i++){
        answer += i;
    }
    return answer;
}


// 같은 숫자는 싫어

// 나의 풀이 1
function nosame(arr)
{
    var answer = [];
    let tmp = -1;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != tmp){
            answer.push(arr[i]);
            tmp = arr[i];
        }
    }
    return answer;
}

// 나의 풀이 2
function nosame2(arr)
{
    var answer = [];
    for (let i=0; i<arr.length;i++){
        if(arr[i] != arr[i+1]){
            answer.push(arr[i])
        }
    }     
    return answer;
}

// 추천 풀이_filter
function nosame3(arr)
{
    return arr.filter((value, index) => value != arr[index+1]);
}


// 수박수박수박수박수박수?

// 나의 풀이 
function subak(n) {
    var word = '수박';
    var answer = '';
    for (let i=0; i < n; i++){
        let a = i%2;
        answer += word[a];
    }
    return answer;
};


// 추천 풀이_repeat
function subak2(n) {
    return '수박'.repeat(n/2) + (n%2 == 1 ? '수':'')
};


// 가운데 글자 가져오기

function middleS(s) {
    var index = Math.ceil(s.length/2)-1;
    return s.substr(index, (s.length%2 == 0 ? 2:1));
};


// 행렬의 덧셈

function solution(arr1, arr2) {
    var answer = arr1.map((arr, i) => arr.map((b, j) => b + arr2[i][j])); 
    return answer;
}


// 시저 암호

// 나의 풀이

function solution(s, n) {
    var answer = '';
    for (let i = 0; i < s.length; i++){
        if (s[i] === " "){
            answer += " ";
            continue
        }
        let asc = s.charCodeAt(i);
        let asc2 = asc + n;
        if (65 <= asc && asc <= 90){
            if (90 < asc2){
                asc2 = asc2 - 90 + 64
            }
        }else if (97 <= asc && 122 >= asc){
            if (122 < asc2){
                asc2 = asc2 - 122 + 96
            }
        }
        answer += String.fromCharCode(asc2)
    } return answer;
}

// 추천 풀이

function solution(s, n) {
    var answer = '';
    for (var i=0; i<s.length;i++){
        if (s[i] == ' '){
            answer += ' '
       }else{
        answer += String.fromCharCode( (s.charCodeAt(i)>90)?(s.charCodeAt(i)+n-97)%26+97 : (s.charCodeAt(i)+n-65)%26+65 )        
       }
  }return answer;
}


// 예산

// 나의 풀이 

function solution(d, budget) {
    var answer = 0;
    d.sort((a,b) => a-b)
    for (let i=0; i<d.length; i++){
        budget -= d[i];
        if (budget >= 0){
            answer ++;
        }
    }return answer
}


// 최솟값 만들기

// 나의 풀이

function solution(A,B){
    A.sort((a, b) => a-b);
    B.sort((a, b) => b-a);
    var result = A.reduce(function(acc, curr, i){
        acc += curr * B[i]
        return acc
    },0);
    return result;
}

// 추천 풀이

function solution(A,B){
    A.sort((a, b) => a-b);
    B.sort((a, b) => b-a);
    return A.reduce((acc, curr, i) => acc+curr*B[i], 0); 
}
 

// 소수 만들기

function isPrime(n){
    for (let i=2; i < Math.ceil(n**0.5)+1; i++){
        if (n%i === 0){
            return false;
        }
    }return true;
}

function solution(nums) {
    let sumNums = 0;
    let answer = 0;
    for (let i=0; i<nums.length-2; i++){
        for (let j=i+1; j<nums.length-1; j++){
            for(let k= j+1; k<nums.length; k++){
                sumNums = nums[i] + nums[j] + nums[k]
                if (isPrime(sumNums)===true){
                    answer += 1;
                }
            }
        }
    }
    return answer;
}


// 숫자 문자열과 영단어

// 나의 풀이

function solution(s) {
    // replace 함수 이용 
    // /문자/g : 발생할 모든 pattern에 대한 전역 검색
    s = s.replace(/zero/g, 0);
    s = s.replace(/one/g, 1);
    s = s.replace(/two/g, 2);
    s = s.replace(/three/g, 3);
    s = s.replace(/four/g, 4);
    s = s.replace(/five/g, 5);
    s = s.replace(/six/g, 6);
    s = s.replace(/seven/g, 7);
    s = s.replace(/eight/g, 8);
    s = s.replace(/nine/g, 9);
    return Number(s);
}


// 추천 풀이

function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        // answer을 numbers[i]로 쪼갠 후 
        let arr = answer.split(numbers[i]);
        // 쪼개진 조각을 숫자(인덱스 i)로 연결하여 붙이기
        answer = arr.join(i);
    }
    // 숫자로 변환 후 출력
    return Number(answer);
}
