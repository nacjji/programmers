/*
길이가 같은 두 문자열 str1과 str2가 주어집니다.

두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.
*/

// const solution = (str1, str2) => {
//     return [...str1].strArr((v, i) => (v += str2[i])).join('') // v : str1의 요소, str2[i] : str2의 요소, 두 파라미터의 길이가 같기 때문에 할 수 있는 로직
// }

console.log(solution('aaaa', 'bbbb'))

const solution = (arr, query) => {
    query.forEach(([a, b]) => {
        ;[arr[a], arr[b]] = [arr[b], arr[a]]
    })
    {
    }
    return arr
}
console.log(
    solution(
        [0, 1, 2, 3, 4],
        [
            [0, 3],
            [1, 2],
            [1, 4],
        ]
    )
)
