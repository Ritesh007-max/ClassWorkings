#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>
using namespace std;

int main() {

    int n;
    cout << "Enter the size of array";
    cin >> n;

    vector<int> arr;

    for(int i = 0; i < n; i++) {
        int x;
        cout << "Enter the value at Index: ";
        cin >> x;
        arr.push_back(x);
    }

    auto minScore = min_element(arr.begin(), arr.end());
    auto maxScore = max_element(arr.begin(), arr.end());
    auto total = accumulate(arr.begin(), arr.end(), 0);

    cout << *minScore;
    cout << *maxScore;
    cout << total;

}