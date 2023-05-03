/*
문제 설명

문제 설명
수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 
수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 
가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.
*/

// 수포자 각각 찍는 패턴 배열
const one = [1, 2, 3, 4, 5]
const two = [2, 1, 2, 3, 2, 4, 2, 5]
const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

// 초기 점수값
const score = [0, 0, 0]
const solution = (answers) => {
    // 결과를 담을 초기 배열
    const result = []

    for (let i = 0; i < answers.length; i++) {
        if (one[i % one.length] === answers[i]) {
            // 나머지 연산자를 이용해 one[0~4] 에 접근, answer 배열의 각 요소에 접근해서 일치하다면 score 배열 첫 번째 요소에 +1
            score[0]++
        }
        if (two[i % two.length] === answers[i]) {
            score[1]++
        }
        if (three[i % three.length] === answers[i]) {
            score[2]++
        }
    }

    // score 배열의 최댓값 length는 3
    const max = Math.max(...score)
    for (let j = 0; j < score.length; j++) {
        // 최댓값과 같다면 배열에 추가, 최댓값이 3개라면 순서대로 배열에 추가
        if (score[j] === max) result.push(j + 1)
    }
    return result
}

console.log(solution([1, 3, 2, 4, 2]))

// 1번 수포자 : [1,2,3,4,5]
// 2번 수포자 : [2,1,2,3,2,4,2,5]
// 3번 수포자 : [3,3,1,1,2,2,4,4,5,5]
