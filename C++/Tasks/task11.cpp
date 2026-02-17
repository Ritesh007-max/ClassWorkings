#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n;
    cout << "Enter the size of the vector: ";
    cin >> n;

    vector<int> vect;

    for(int i = 0; i < n; i++) {
        int x;
        cout << "Enter the value in vector: ";
        cin >> x;
        vect.push_back(x);
    }

    sort(vect.begin(), vect.end());
    reverse(vect.begin(), vect.end());


}