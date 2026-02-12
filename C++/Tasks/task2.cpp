#include <iostream>
using namespace std;

// bool isPalindrome(int num) {


//     return original == reversed;
// }

int main() {
    int number;
    cout << "Enter a number: ";
    cin >> number;

    int original = number;
    int reversed = 0;

    while (number > 0) {
        int digit = number % 10;     
        reversed = reversed * 10 + digit; 
        number /= 10;                     
    }

    if (original == reversed) {
        cout << original << " is a palindrome." << endl;
    } else {
        cout << original << " is not a palindrome." << endl;
    }

    return 0;
}