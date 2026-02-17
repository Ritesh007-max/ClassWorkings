#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> scores = {85, 90, 78, 92, 88};

    // Create a max-heap from the scores
    make_heap(scores.begin(), scores.end());

    cout << "Heapified scores: ";
    for (const auto& score : scores) {
        cout << score << " ";
    }

    return 0;
}