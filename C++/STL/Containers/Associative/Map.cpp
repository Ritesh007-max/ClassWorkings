#include <iostream>
#include <map>
using namespace std;

int main() {
    map<int, char> m1;

    m1[1] = 'A';
    m1[3] = 'C';
    m1[2] = 'B';
    
    for (auto& p : m1) {
        cout << p.first << ": " << p.second << endl;
    }

    return 0;
}