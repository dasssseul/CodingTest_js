
// 코딩테스트 고득점 Kit
// 스택/큐 알고리즘

function solution(progresses, speeds) {
    var answer = [];
    var days = [];
    for (let i=0; i < progresses.length; i++){
        var a = (100-progresses[i])/speeds[i];
        days.push(Math.ceil(a));
    };
    var cnt = 0;
    var temp = days[0];
    for (let j = 0; j < days.length; j++){
        if (temp < days[j]){
            answer.push(cnt);
            cnt = 0;
            temp = days[j];
        }
        cnt += 1
    }
    answer.push(cnt)
    return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
