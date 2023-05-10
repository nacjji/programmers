/*
문제 설명
숫자나라 기사단의 각 기사에게는 1번부터 number까지 번호가 지정되어 있습니다. 기사들은 무기점에서 무기를 구매하려고 합니다.

각 기사는 자신의 기사 번호의 약수 개수에 해당하는 공격력을 가진 무기를 구매하려 합니다. 
단, 이웃나라와의 협약에 의해 공격력의 제한수치를 정하고, 제한수치보다 큰 공격력을 가진 무기를 구매해야 하는 기사는 협약기관에서 정한 공격력을 가지는 무기를 구매해야 합니다.

예를 들어, 15번으로 지정된 기사단원은 15의 약수가 1, 3, 5, 15로 4개 이므로, 공격력이 4인 무기를 구매합니다. 
만약, 이웃나라와의 협약으로 정해진 공격력의 제한수치가 3이고 제한수치를 초과한 기사가 사용할 무기의 공격력이 2라면, 
15번으로 지정된 기사단원은 무기점에서 공격력이 2인 무기를 구매합니다. 무기를 만들 때, 무기의 공격력 1당 1kg의 철이 필요합니다. 
그래서 무기점에서 무기를 모두 만들기 위해 필요한 철의 무게를 미리 계산하려 합니다.

기사단원의 수를 나타내는 정수 number와 이웃나라와 협약으로 정해진 공격력의 제한수치를 나타내는 정수 limit와 
제한수치를 초과한 기사가 사용할 무기의 공격력을 나타내는 정수 power가 주어졌을 때, 
무기점의 주인이 무기를 모두 만들기 위해 필요한 철의 무게를 return 하는 solution 함수를 완성하시오. // 왜 갑자기 반말이세요
 */

const solution = (number, limit, power) => {
    const att = []
    for (let i = 1; i <= number; i++) {
        let cnt = 0
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                cnt++
            }
        }

        att.push(cnt)
    }
    console.log(att)
    if (!att.filter((v) => v > limit).length) {
        return att.reduce((a, b) => a + b)
    } else {
        return att.map((v) => (v > limit ? (v = power) : v)).reduce((a, b) => a + b)
    }
}

// console.log(solution(10, 3, 2))

// 시간 초과 된 답안, 시간 초과를 제외한 답안은 모두 정답
// 시간복잡도를 줄이기 위해 약수 구하는 방식을 변경해야 함

const solution2 = (number, limit, power) => {
    const att = []
    for (let j = 1; j <= number; j++) {
        const yak = [] // j는 number까지 1씩 증가하는데, 하나의 수에 대한 약수를 구한 뒤 빈 배열로 초기화 해줘야 한다. 안그러면 1부터 n까지 다 담김
        for (let i = 1; i <= Math.sqrt(j); i++) {
            // 시간복잡도를 줄이기 위해 제곱근을 이용해 약수를 구하는 알고리즘을 선택
            if (j % i === 0) {
                yak.push(i)
                // 1부터 number(j)의 제곱근까지 나눈 나머지가 0인 수를 yak 배열에 담는다.
                if (j / i !== i) {
                    yak.push(j / i) // 나머지 약수는 number(j)의 제곱근을 나눈 수를 추가로 배열에 담는다.
                }
            }
        }
        att.push(yak.length) // 약수를 모아놓은 배열의 길이를 att 배열에 담는다.
    }
    if (!att.filter((v) => v > limit).length) {
        // 약수의 수 모두 limit보다 크지 않을 경우  그대로 합산하여 반환
        return att.reduce((a, b) => a + b)
    } else {
        // 하나라도 limit 보다 클 경우 v는 power 로 변경되고, 합산
        return att.map((v) => (v > limit ? (v = power) : v)).reduce((a, b) => a + b)
    }
}
console.log(solution2(10, 3, 2))

// 기초가 탄탄하다면 금방 풀 수 있었을 것 같다. 제곱근을 이용해 약수를 구하는 알고리즘은 어렵지 않게 이해했으나,
// 약수의 길이를 판단하기 위해 선언한 yak 배열을 초기화 해주는 위치를 잘못 선정해서 꽤나 애를 먹었다.
