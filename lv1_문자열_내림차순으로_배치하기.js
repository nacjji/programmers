/*
문제 설명
문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다. 
*/
let tempUpper = []

const solution = (s) => {
    // 포함된 대문자 배열 생성
    const upperArr = s
        .split('')
        .filter((v) => v.match(new RegExp(/^[A-Z]/)))
        .sort()
        .reverse()
        .join('')
    // 소문자 배열 생성
    const strArr = s
        .split('')
        .filter((v) => !v.match(new RegExp(/^[A-Z]/)))
        .sort()
        .reverse()
        .join('')

    return strArr + upperArr
}

console.log(solution('dsaSdfvdSzdBN'))
