/*
문제 설명
얀에서는 매년 달리기 경주가 열립니다. 해설진들은 선수들이 자기 바로 앞의 선수를 추월할 때 추월한 선수의 이름을 부릅니다. 
예를 들어 1등부터 3등까지 "mumu", "soe", "poe" 선수들이 순서대로 달리고 있을 때, 
해설진이 "soe"선수를 불렀다면 2등인 "soe" 선수가 1등인 "mumu" 선수를 추월했다는 것입니다. 즉 "soe" 선수가 1등, "mumu" 선수가 2등으로 바뀝니다.

선수들의 이름이 1등부터 현재 등수 순서대로 담긴 문자열 배열 players와 해설진이 부른 이름을 담은 문자열 배열 callings가 매개변수로 주어질 때, 
경주가 끝났을 때 선수들의 이름을 1등부터 등수 순서대로 배열에 담아 return 하는 solution 함수를 완성해주세요.
*/

// ["mumu", "soe", "poe", "kai", "mine"]
// ["kai", "kai", "mine", "mine"]
// "kai"    =>  ["mumu", "soe", "kai", "poe", "mine"]
// "kai"    =>  ["mumu", "kai", "soe", "poe", "mine"]
// "mine"   =>  ["mumu", "kai", "soe", "mine", "poe"]
// "mine"   =>  ["mumu", "kai", "mine","soe", "poe"]

const solution = (players, callings) => {
    let _player = [...players]
    callings.forEach((e) => {
        let idx = _player.indexOf(e)
        let player = _player.splice(idx, 1) // 이름 불린 선수 지우기
        _player.splice(idx - 1, 0, player[0]) // 이름 불린 선수 앞 선수를
    })

    return _player
} // --> 시간 초과

// console.log(solution(['mumu', 'soe', 'poe', 'kai', 'mine'], ['kai', 'kai', 'mine', 'mine']))

const solution2 = (players, callings) => {
    let obj = {}
    players.forEach((e, i) => {
        obj[e] = i
    })

    callings.forEach((e) => {
        let num = obj[e]
        let temp = players[num - 1] // 이름 불린 선수의 바로 앞 인덱스 선수
        players[num - 1] = e // 이름 불린 선수를 한 칸 앞으로
        players[num] = temp // 앞 선수를 원래 인덱스 자리로
        obj[e]-- // forEach 돌면서 인덱스 빼주고
        obj[players[num]]++ // 더해주고
    })

    return players
}

console.log(solution2(['mumu', 'soe', 'poe', 'kai', 'mine'], ['kai', 'kai', 'mine', 'mine']))
// 각자 선수에 번호를 값으로 달아주고 이름 불린 선수의 값을 반복을 통해 수정
