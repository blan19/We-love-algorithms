function solution(M, N) {
  let answer = 0;
  width = M - 1;
  height = M * (N - 1);

  answer = width + height;
  return answer;
}
