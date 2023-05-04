/*
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)
*/

// 소수는 찾았지만 효율성테스트 실패

// let cnt = 0
// const solution = (n) => {
//     for (let i = 1; i <= n; i++) {
//         let sosuCnt = 0

//         for (let j = 0; j <= n; j++) {
//             i % j === 0 ? sosuCnt++ : 0
//         }

//         sosuCnt === 2 ? cnt++ : 0
//     }
//     return cnt
// }
// 현재 방식 1부터 n 까지 반복 하며 약수를 찾고 그 약수를 한 번 더 반복해 소수를 찾는 방식

// n까지의 수 중 소수의 배수를 모두 false로 처리하고, true 인 값의 개수만 카운트한다.
const solution = (n) => {
    let sosu = 0
    // 0,1 은 수를 맞추기 위해 사용
    let nums = [0, 1]
    for (let i = 2; i <= n; i++) {
        nums[i] = true
    }
    for (let i = 2; i <= n; i++) {
        if (nums[i]) {
            sosu++
            for (let j = i * i; j <= n; j += i) {
                nums[j] = false
            }
        }
    }
    console.log(nums)
    return sosu
}

console.log(solution(100))
