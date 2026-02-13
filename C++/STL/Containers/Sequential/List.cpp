#include <iostream>
#include <list>
using namespace std;

int main() {
    list<int> l1 = {1, 2, 3, 4, 5, 6, 7};

    // Iteration...
        for(int value : l1) {
        cout << value << endl;
    }

    // push_back(val) → adds element at the end
    l1.push_back(8); // l1 = {1, 2, 3, 4, 5, 6, 7, 8}

    // pop_back() → removes last element
    l1.pop_back(); // l1 = {1, 2, 3, 4, 5, 6, 7}

    // insert(pos, val) → inserts before given position
    auto it = l1.begin();
    advance(it, 2); // move iterator to 3rd element
    l1.insert(it, 99); // l1 = {1, 2, 99, 3, 4, 5, 6, 7}

    // erase(pos) → removes element at given position
    it = l1.begin();
    advance(it, 4); // move iterator to 5th element
    l1.erase(it); // l1 = {1, 2, 99, 3, 5, 6, 7}

    // clear() → removes all elements
    l1.clear(); // l1 = {}

    // size() → returns number of elements
    cout << "Size: " << l1.size() << endl;

    // front() → first element
    // back() → last element
    // empty() → checks if list is empty
    if (!l1.empty()) {
        cout << "Front: " << l1.front() << endl;
        cout << "Back: " << l1.back() << endl;
    } else {
        cout << "List is empty!" << endl;
    }

    // at(index) → NOT directly supported in list
    // You must use an iterator and advance manually
    l1 = {10, 20, 30, 40, 50};
    int index = 2;
    it = l1.begin();
    advance(it, index);
    cout << "Element at index " << index << ": " << *it << endl;

    return 0;
}
