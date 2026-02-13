#include <iostream>
#include <map>
using namespace std;

int main() {

    multimap<int, string> mm;
    mm.insert({1, "Arjun"});
    mm.insert({2, "Bhavin"});
    mm.insert({1, ""}); // Duplicate key 1 allowed

    for (auto& p : mm) {
        cout << p.first << ": " << p.second << endl;
    }

    mm.erase(1);

    auto it = mm.find(1);

    cout << mm.count(1);

    return 0;

}