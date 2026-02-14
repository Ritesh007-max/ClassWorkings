#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int fibo(int n) {
    int a = 0, b = 1, next;
    cout << "Fibonacci Series: ";
    for (int i = 0; i < n; i++) {
        cout << a << " ";
        next = a + b;
        a = b;
        b = next;
    }
    cout << endl;
}


int main() {
    fstream file;
    string line;

    int num;
    cin >> num;

    file.open("example.txt", ios::out);
    if (!file) {
        cout << "Error opening file for writing!" << endl;
        return 1;
    }

    // file << fibo(int num) << endl;
    file.close();

    file.open("example.txt", ios::in);
    if (!file) {
        cout << "Error opening file for reading!" << endl;
        return 1;
    }

    cout << "Reading from file:" << endl;
    while (getline(file, line)) {
        cout << line << endl;
    }
    file.close();

    return 0;
}