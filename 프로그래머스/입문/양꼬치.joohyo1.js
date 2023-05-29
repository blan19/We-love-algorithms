#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int n, int k) {
    int answer = 0;
    int lamb = n*12000;
    int drink = k*2000;
    
    if(n/10>0){
        answer = (sheep+drink)-n/10*2000;
    } else {
        answer = sheep+drink;
    }
    
    return answer;
}