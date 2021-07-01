
// 코딩테스트 고득점 Kit
// 탐욕법(greedy) 알고리즘

// [level2] 구명보트

function solution(people, limit) {
    var answer = 0;
    // 사람들의 무게를 오름차순으로 정렬
    people.sort((a,b) => a-b);
    // 첫 번째 사람의 인덱스 i, 마지막 사람의 인덱스 j
    // 반복될 때마다 마지막 사람의 인덱스 왼쪽으로 이동
    for (let i = 0, j = people.length-1; i <= j; j--){
        // 구명보트의 개수 +1
        answer += 1
        // 두 사람의 무게 합이 limit보다 작거나 같으면 첫 번째 사람의 인덱스 오른쪽으로 이동
        if ((people[i] + people[j]) <= limit){
            i += 1
        }
    }
    return answer;
}

