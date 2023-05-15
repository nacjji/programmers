/*
정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.
*/

const solution = (numbers) => {
    const res = []
    // 경우의 수 찾는 알고리즘
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            // 외반복문과 중복을 막기 위해 i + 1 부터 반복 시작
            res.push(numbers[i] + numbers[j])
        }
    } // 두 번의 반복으로 배열 내 더할 수 있는 모든 경우의 수를 res 배열에 담고 오름차순으로 정렬, 중복 값 제거를 위해 Set 사용
    return [...new Set(res.sort((a, b) => a - b))]
}

console.log(solution([2, 1, 3, 4, 1]))
