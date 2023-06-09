/*
문제 설명
정수로 이루어진 리스트 num_list가 주어집니다. num_list에서 가장 작은 5개의 수를 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

제한사항
6 ≤ num_list의 길이 ≤ 30
1 ≤ num_list의 원소 ≤ 100
*/

// sort 함수와 slice 함수를 체이닝 해 간결하게 표현할 수 있다.
const solution = (num_list) => num_list.sort((a, b) => a - b).slice(0, 5)
