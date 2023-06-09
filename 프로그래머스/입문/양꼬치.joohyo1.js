function solution(n, k) {
  let lamb = n * 12000;
  let drink = k * 2000;
  let answer = lamb + drink;

  if (n > 10) {
    let service = parseInt(n / 10);
    return (answer = answer - service * 2000);
  } else if (n === 10) {
    answer = answer - 2000;
  }

  return answer;
}
