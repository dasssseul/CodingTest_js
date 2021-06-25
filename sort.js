
// 정렬 - k번째 수

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

