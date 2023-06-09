function solution(numer1, denom1, numer2, denom2) {
  let answer = [];
  let denom = denom1 * denom2;
  let numerator = numer1 * denom2 + numer2 * denom1;

  //분모가 더 클 때
  if (denom > numerator) {
  }

  //분자가 더 클 때
  if (denom < numerator) return answer;
}

solution(1, 2, 2, 3);
