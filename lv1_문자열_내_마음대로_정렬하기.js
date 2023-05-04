/* 
문제 설명
문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다.
예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

제한 조건
strings는 길이 1 이상, 50이하인 배열입니다.
strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
모든 strings의 원소의 길이는 n보다 큽니다.
인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다. 
*/

// n 인덱스를 기준으로 잘라 객체 형태로 만들고, 그 객체를 정렬해 반환하는 함수를 짰으나, 인덱스의 문자열이 같을 경우 나머지 문자열을 정렬하기 곤란함
// const solution = (strings, n) => {
//     let obj = {}
//     const res = []
//     strings.forEach((v) => (obj[v] = v.slice(n)))
//     for (const i in obj) {
//         res.push(obj[i])
//     }
//     const object = Object.fromEntries(Object.entries(obj).sort((a, b) => a[1].localeCompare(b[1])))
//     console.log(object)
//     const ans = []
//     for (const i in object) {
//         ans.push(i)
//     }
//     return ans
// }

// 간단하게 생각해 strings 배열을 정렬하는데, n 인덱스에 해당하는 문자열이 같다면 그대로 정렬해 반환하고, 다르다면 n을 기준으로 정렬
const solution = (strings, n) => {
    return strings.sort((a, b) => (a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])))
}

console.log(solution(['abz', 'aaz', 'abn'], 2)) // abn , aaz, abz
