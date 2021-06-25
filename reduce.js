
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
