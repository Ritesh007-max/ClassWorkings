#include <iostream>
#include <list>
#include <algorithm>
using namespace std;

int main() {

    int m, n;

    cout << "Enter the size of the 1st list: ";
    cin >> m;

    cout << "Enter the size of the 2nd list: ";
    cin >> n;

    list<int> l1, l2;

    cout << "Enter elements for list 1:\n";
    for(int i = 0; i < m; i++) {
        int element;
        cin >> element;
        l1.push_back(element);
    }

    cout << "Enter elements for list 2:\n";
    for(int i = 0; i < n; i++) {
        int element;
        cin >> element;
        l2.push_back(element);
    }

    list<int> l3;
    for(int i: l1) l3.push_back(i);
    for(int i: l2) l3.push_back(i);

    // Sort merged list
    l3.sort();

    // Print result
    cout << "Merged and Sorted List: ";
    for(int i : l3) {
        cout << i << " ";
    }

    return 0;
}
