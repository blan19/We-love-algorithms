//https://school.programmers.co.kr/learn/courses/30/lessons/120922

function solution(M, N) {
  let answer = 0;
  width = M - 1;
  height = M * (N - 1);

  answer = width + height;
  return answer;
}
