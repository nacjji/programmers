/*
문제 설명
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

제한 조건
공백은 아무리 밀어도 공백입니다.
s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
s의 길이는 8000이하입니다.
n은 1 이상, 25이하인 자연수입니다.
*/

// 아스키 코드
// A = 65
// Z = 90
// a = 97
// z = 122

const solution = (s, n) => {
    let arr = []
    let result = ''
    let tempArr = []

    // 공백을 포함해서 배열 알파벳 배열로 만듦
    for (const j of s) {
        j !== ' ' ? arr.push(j) : arr.push(' ')
    }

    // 여기서 대소문자를 판단하기 위해 위 반복문에서 아스키 변환을 안했음,
    // 대소문자에서 n만큼을 더하고, 대소문자 아스키 코드를 넘을 경우 26을 빼줌
    arr.map((v) => {
        tempArr.push(
            v.charCodeAt() >= 65 && v.charCodeAt() <= 90
                ? v.charCodeAt() + n > 90
                    ? v.charCodeAt() + n - 26
                    : v.charCodeAt() + n
                : v.charCodeAt() + n > 122
                ? v.charCodeAt() + n - 26
                : v.charCodeAt() + n
        )
    })

    // 공백 처리
    for (const i of tempArr) {
        if ((65 <= i && i <= 90) || (97 <= i && i <= 122)) {
            result += String.fromCharCode(i)
        } else {
            result += String.fromCharCode(32)
        }
    }
    return result
}

console.log(solution('A B', 1))
