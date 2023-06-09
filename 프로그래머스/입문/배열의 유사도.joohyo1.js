function solution(s1, s2) {
  let answer = 0;
  for (let i in s1) {
    for (let a in s2) {
      if (s1[i] === s2[a]) {
        answer += 1;
      }
    }
  }
  return answer;
}
