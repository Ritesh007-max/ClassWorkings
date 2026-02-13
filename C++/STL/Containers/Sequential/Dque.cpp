#include <iostream>
#include <deque>
using namespace std;

int main() {
    deque<int> d = {10, 20, 30};

    // push_back(val) → adds element at the end
    d.push_back(40); // d = {10, 20, 30, 40}

    // push_front(val) → adds element at the front
    d.push_front(5); // d = {5, 10, 20, 30, 40}

    // pop_back() → removes last element
    d.pop_back(); // d = {5, 10, 20, 30}

    // pop_front() → removes first element
    d.pop_front(); // d = {10, 20, 30}

    // at(index) → element at given index
    cout << "Element at index 1: " << d.at(1) << endl; // prints 20

    // front() → first element
    cout << "Front: " << d.front() << endl; // prints 10

    // back() → last element
    cout << "Back: " << d.back() << endl; // prints 30

    // size() → number of elements
    cout << "Size: " << d.size() << endl; // prints 3

    return 0;
}
