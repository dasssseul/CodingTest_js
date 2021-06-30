
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

