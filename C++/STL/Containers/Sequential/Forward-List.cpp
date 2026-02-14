#include <iostream>
#include <forward_list>
using namespace std;

int main() {
    forward_list<int> fl = {10, 20, 30};
    fl.push_front(5);
    fl.insert_after(fl.begin(), 15); 

    for (int num : fl) {
        cout << num << " ";
    }
    return 0;
}