#include <iostream> 
#include <cstdio>
using namespace std; 

int main() {

    int arr[5] = {49, 62, 71, 46, 73};

    int size = sizeof(arr)/sizeof(arr[0]);

    int sum = 0;
    for(int i = 0; i < size; i++) {
        sum += arr[i];
    }

    float avg = (sum / size);

    for(int i = 0; i < size; i++) {
        if (arr[i] >= avg) {
            printf("%d\n", arr[i]);
        }
    }

    return 0; 
}