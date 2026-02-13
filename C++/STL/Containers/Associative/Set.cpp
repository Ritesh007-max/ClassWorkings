#include <iostream>
#include <set>
using namespace std;

int main()
{
    set<int> s1 = {63, 75, 12, 41, 36};

    s1.insert(42);                       
    s1.erase(42);                        
    auto find = s1.find(42);             
    cout << s1.count(42);                 
    cout << s1.size() << endl;                   
    cout << (s1.empty() ? "Yes" : "No"); 

    return 0;
}

// cout can be done for only those operations that return something... 