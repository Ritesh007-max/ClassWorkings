#include <stdio.h>

// int fact(int num)
// {
//     if (num == 1)
//     {
//         return 1;
//     }
//     return num*fact(num - 1);
// }

// int fib(int terms) {
//     if (terms == 0) return 0; 
//     if (terms == 1) return 1; 
//     return fib(terms-1) + fib(terms-2);
// }

// int table(int num, int i) {

//     if (i > 10) {
//         return 0;
//     }
//     if (i % 2 != 0) {
//         printf("%d", num*i);
//     } 
    
//     return table(num, i++);

// }

int newTable(int num, int i) {

    if (num > 10) {
        return 0;
    }

    printf("%d", num*i);

    return newTable(num + 1, i);    
}

// int digits(int num) {
//     if (num == 0) {
//         return 0;
//     }
//     return 1 + digits(num / 10);
// }



int main() {
    // fact(5);
    // printf("%d", fact(5));
    // printf("%d", fibo(6));
    // printf("%d", newTable(5, 1));
    return 0;
}