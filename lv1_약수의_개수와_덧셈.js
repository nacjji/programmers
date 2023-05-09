/*
문제 설명
두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 
약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요
*/

const solution = (left, right) => {
    let even = []
    let odd = []

    for (let i = left; i <= right; i++) {
        let cnt = 0
        for (let j = 0; j <= i; j++) {
            if (i % j === 0) {
                cnt++
            }
        } // 약수가 생길때마다 카운트 +1

        if (cnt % 2 === 0) {
            even.push(i)
        } else {
            odd.push(i * -1)
        } // 짝수면 even 에 push, 홀수면 odd에 push, 홀수일 경우 빼줘야 하기 때문에 -1 을 곱해줌
    }

    return even.reduce((a, b) => a + b) + odd.reduce((a, b) => a + b) // reduce를 이용해 더해줌
}

console.log(solution(13, 30))
