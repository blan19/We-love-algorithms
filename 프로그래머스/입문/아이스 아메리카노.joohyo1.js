function solution(money) {
  let americano = parseInt(money / 5500);
  let change = money - americano * 5500;

  let result = [americano, change];

  return result;
}
