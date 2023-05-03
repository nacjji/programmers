/*
문제 설명
정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
*/

let sum = 0
const solution = (n) => {
    //약수는 자신도 포함해야 하기 때문에 <= 사용
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            sum += i
        }
    }
    return sum
}

console.log(solution(12))
