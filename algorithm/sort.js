
// 코딩테스트 고득점 Kit
// 정렬 알고리즘

// [level1] k번째 수

// 나의 풀이
function kth(array, commands) {
    var answer = [];
    var command = [];
    for (let i=0; i < commands.length; i++){
        command = array.slice(commands[i][0]-1,commands[i][1])
        answer.push((command.sort((a,b)=>a-b))[commands[i][2]-1])
    }
    return answer;
}

console.log(kth([1,5,2,6,3,7], [[2,5,3],[4,4,1],[1,7,3]]));


// 추천 풀이 
function kth2(array, commands){
    var answer = [];
    answer = commands.map(a => {
        return array.slice(a[0]-1,a[1]).sort((a,b) => a-b)[a[2]-1];
    })
    return answer;
}

console.log(kth2([1,5,2,6,3,7], [[2,5,3],[4,4,1],[1,7,3]]));


// [level2] H-Index

function Hindex(citations) {
    // citations 오름차순 정렬
    citations.sort((a, b) => a-b)
    // citations의 길이 l
    var l = citations.length
    for (let i=0; i < l; i++){
        // 논문 인용 횟수가 그 횟수 이하로 인용된 논문의 수보다 크거나 같다면
        // 즉, h번 이상 인용된 논문이 h편 이상이라면
        if (citations[i] >= l-i){
            return l-i;
        }
    }
    return 0;
}

console.log(Hindex([3, 0, 6, 1, 5])) // 3
console.log(Hindex([4, 4, 4])) // 3
console.log(Hindex([22, 42])) // 2

