#include <iostream>  
using namespace std; 



int main() {
    
    int num1;

    cin >> num1;

    if (num1 > 0) {
        if (num1 % 2 == 0) {
            cout << "Number is +ve and even" << endl;
        }
        else {
            cout << "Number is +ve and odd" << endl;
        }
    }
    else if (num1 < 0) {
        if (num1 % 2 == 0) {
            cout << "Number is -ve and even" << endl;
        }
        else {
            cout << "Number is -ve and odd" << endl;
        }
}
    else {
        cout << "Number is equal to 0" << endl;
    }


    return 0;
}