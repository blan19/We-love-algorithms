function solution(num_list) {
  let two = 0;
  let one = 0;
  let answer = [];
  for (let i in num_list) {
    if (num_list[i] % 2 === 0) {
      two += 1;
    } else {
      one += 1;
    }
  }
  answer[0] = two;
  answer[1] = one;
  return answer;
}
