
// 삼각 달팽이

function solution(n) {
    var answer = [];
    var arr = new Array(n);
    for (let i=0; i<n; i++){
        arr[i] = new Array(i+1);
    };
    var x = -1;
    var y = 0;
    var start = 0;
    while (n > 0){
        for (let i = 0; i < n; i++){
            arr[++x][y] = ++start;
        }
        for (let i = 0; i < n-1; i++){
            arr[x][++y] = ++start;
        }
        for (let i = 0; i < n-2; i++){
            arr[--x][--y] = ++start
        }
        n -= 3
    }
    for (let i = 0; i<arr.length; i++){
        for (let j = 0; j<arr[i].length; j++){
            answer.push(arr[i][j]);
        }
    }return answer
}
