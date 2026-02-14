#include <iostream>  
#include <vector>
#include <algorithm>
using namespace std;

int main() {

    int n = 5;
    
    vector<int> v1;

    for(int i = 0; i < n; i++) {
        int x;
        cout << "Enter a value for the vector: ";
        cin >> x;
        v1.push_back(x);
    }

    // sort(v1.begin(), v1.end());
    sort(v1.begin(), v1.end());
    
    int i = 0;
    while(i < n) {
        cout << v1[i] << " ";

        i++;
    }

}
// Some Problem