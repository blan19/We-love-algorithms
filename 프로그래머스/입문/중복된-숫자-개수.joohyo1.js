function solution(array, n) {
  let answer = 0;
  for (let i in array) {
    if (array[i] == n) {
      answer += 1;
    }
  }
  return answer;
}
