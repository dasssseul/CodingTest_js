
// 완전 탐색 알고리즘

// [level2] 카펫

function solution(brown, yellow) {
    var answer = [];
    // 사각형 넓이 = brown + yellow
    const square = brown + yellow
    // 테두리가 무조건 갈색이어야하므로 3부터 시작
    for(let i=3; i < square; i++){
        // 가로, 세로가 되는 경우 확인
        if (square % i === 0){
            var m = square/i
            // (가로-2) * (세로-2)가 yellow의 넓이와 같다면
            if (((i-2)*(m-2)) === yellow){
                answer = [i, m]
            }
        }
    }
    // 가로는 세로보다 길어야하기 때문에 내림차순 정렬 반환
    return answer.sort((a, b)=>b-a);
}


