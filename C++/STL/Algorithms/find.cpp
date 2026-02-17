#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> scores = {85, 90, 78, 92, 88};

    // Search for the score 92
    auto it = find(scores.begin(), scores.end(), 92);

    if (it != scores.end()) {
        cout << "Found score: " << *it << endl;
    } else {
        cout << "Score not found" << endl;
    }

    return 0;
}