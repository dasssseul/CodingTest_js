
// 네이버웹툰 개발 챌린지 1차 코딩테스트

// 프로그래밍 1

function solution(k, rates) {
    var answer = [];
    for (let i=0; i < rates.length-1; i++){
        if (rates[i+1] > rates[i]){
            k += rates[i+1] - rates[i];
        }
    }return k;   
}

// 프로그래밍 2
function solution(money, cost) {
    var answer = [];
    for (let i = 0; i < cost.length; i++){
        var remain = money;
        var cnt = 0;
        for(let j = i; j < cost.length; j++){
            remain -= cost[j]
            if (remain >= 0){
                cnt += 1;
            }else{
                answer.push(cnt)
                break
            }
        }
    }
    return Math.max.apply(null, answer);
}

// 프로그래밍 3

