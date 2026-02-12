#include <stdio.h>

// void count()
// {
//     static int count = 10;
//     count++;
//     printf("count: %d \n", count);
// }

void count(int num2)
{
    num2 = num2 + 3;
    printf("count: %d \n", num2);
}

int main()
{

    // auto int num1 = 10;
    // static int num2 = 11;
    // int num3 = 5;
    // int num4 = 7;

    // int *n1 = &num1;
    // int *n2 = &num2;
    // int *n3 = &num3;
    // int *n4 = &num4;

    // printf("%p \n", n1);
    // printf("%p \n", n2);
    // printf("%p \n", n3);
    // printf("%p \n", n4);

    // static int num2 = 10;

    // count(num2);
    // count(num2);
    // count(num2);

    // Static Has no meaning in main

    static int num2 = 10;
    auto int num1 = 12;
    register int num3 = 13;
// register stores data in CPU rest store in RAM
    int *p = &num3;

    printf("%d \n", num2);
    printf("%d \n", num1);
    printf("%d \n", num3);

    return 0;
}
