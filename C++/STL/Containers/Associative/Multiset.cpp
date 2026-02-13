#include <iostream>
#include <set>
using namespace std;

int main()
{
    multiset<int> ms = {32, 5, 4, 3, 5, 6, 48};

    ms.insert(42);        
    ms.erase(42);        
    cout << ms.count(5);
    auto it = ms.find(42);

    return 0;    
}