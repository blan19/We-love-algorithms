function solution(common) {
  let answer = 0;
  let length = common.length - 1; // 4
  let commonRatio = 0;
  let commonDifference = 0;

  if (
    common[length] - common[length - 1] ===
    common[length - 1] - common[length - 2]
  ) {
    commonDifference = common[length] - common[length - 1];
    answer = common[length] + commonDifference;
  }

  if (
    common[length] / common[length - 1] ===
    common[length - 1] / common[length - 2]
  ) {
    commonRatio = common[length] / common[length - 1];
    answer = commonRatio * common[length];
  }

  return answer;
}
