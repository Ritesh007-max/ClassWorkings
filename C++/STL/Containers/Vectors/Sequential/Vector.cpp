#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> v = {10, 20, 30};

    // Iteration...
    for(int value: v) {
        cout << "value at index: " << value << endl;
    }

    // push_back(val) → adds element at the end
    v.push_back(40);

    // pop_back() → removes last element
    v.pop_back();

    // insert(pos, val) → inserts before given position
    v.insert(v.begin() + 1, 15); 

    // erase(pos) → removes element at given position
    v.erase(v.begin() + 2);

    // clear() → removes all elements
    v.clear();

    // size() → returns number of elements
    cout << "Size: " << v.size() << endl;

    if (!v.empty()) {
        cout << "Front: " << v.front() << endl;
        cout << "Back: " << v.back() << endl;
        cout << "At(0): " << v.at(0) << endl;
    } else {
        cout << "Vector is empty!" << endl;
    }

    return 0;
}
