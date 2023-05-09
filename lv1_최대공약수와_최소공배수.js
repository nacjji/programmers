/*
문제 설명
두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

제한 사항
두 수는 1이상 1000000이하의 자연수입니다.
*/
const nYak = []
const mYak = []
const res = []
const solution = (n, m) => {
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            nYak.push(i)
        }
    }
    for (let i = 0; i <= m; i++) {
        if (m % i === 0) {
            mYak.push(i)
        }
    }

    res.push(
        Math.max.apply(
            null,
            nYak.filter((v) => mYak.includes(v))
        )
    ) // 두 임시 배열을 만들어 각각의 약수를 추가 해 공통되는 요소 중 가장 큰 요소를 최대공약수로 지정하고 배열에 추가

    if (m % n === 0) {
        res.push(m) // 두 인자가 같을 경우 자신이 최소공배수
    } else {
        for (let i = Math.max(n, m); i <= n * m; i++) {
            if (i % n === 0 && i % m === 0) {
                res.push(i)
                break
            }
        } // 두 인자 중 큰 인자부터 두 인자를 곱한 인자까지 반복하며, 곱한 인자를 두 인자로 나눴을 때 모두 나누어 떨어지는 값을 최소공배수로 지정하고 배열에 추가
    }

    return res
}

console.log(solution(10, 12))
