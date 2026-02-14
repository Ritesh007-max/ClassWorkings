#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    
    vector<int> v1;

    for(int i = 0; i < 10; i++) {
        int element;
        cout << "Enter the element: ";
        cin >> element;
        v1.push_back(element);
    }

    for(int i = v1.size() - 1; i >= 0; i--) {
        if (v1[i] % 2 == 0) {
            v1.erase(v1.begin() + i);
        }
    }

    for(int i: v1) cout << i;
    
    return 0;
}